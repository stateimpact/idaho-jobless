// data handling for idaho unemployment
// requires underscore, backbone, jquery, leaflet

(function($) {
    // setting these up top so I don't have to dig through code later
    var TILE_URL = "http://a.tiles.mapbox.com/v3/mapbox.world-light.jsonp";
    var CENTER = new L.LatLng(45.636, -114.598);
    var ZOOM = 6;
    
    var MONTHS = {
        january: 0,
        february: 1,
        march: 2,
        april: 3,
        may: 4,
        june: 5,
        july: 6,
        august: 7,
        september: 8,
        october: 9,
        november: 10,
        december: 11
    }
    
    var MONTH_NAMES = ["january", "february", "march", 
     "april", "may", "june", "july", 
     "august", "september", "october", 
     "november", "december"]
    
    var YESNO = {
        yes: true,
        no: false
    }
    
    // models
    window.County = Backbone.Model.extend({
        
        defaults: {
            name: '',
            formalname: '',
            fips: null,
            latitude: null,
            longitude: null,
            point: null
        },
        
        initialize: function(attributes, options) {
            if (attributes.fips) {
                this.set({ id: parseInt(attributes.fips) });
            }
            
            if (attributes.latitude && attributes.longitude) {
                var point = new L.LatLng(parseFloat(attributes.latitude), parseFloat(attributes.longitude));
                this.set({ point: point });
            }
            
            return this;
        },
        
        toString: function() {
            return this.get('formalname') || this.get('name');
        }
    });
    
    window.UnemploymentRate = Backbone.Model.extend({
        
        initialize: function(attributes, options) {
            this.normalize(attributes);
            return this;
        },
        
        getMarker: function(options) {
            if (!this.has('point')) return null;
            var rate = this;
            if (!this._marker) {
                this._marker = new L.CircleMarker(this.get('point'), {
                    weight: 1,
                    radius: this.get('unemploymentrate')
                });
                this._marker.on('click', function(e) {
                    var route = [rate.get('year'), rate.get('month'), rate.getCounty().get('name')];
                    window.app.navigate(route.join('/'));
                });
            }
            return this._marker;
        },
        
        normalize: function(attributes) {
            // bulk normalizing
            changes = {};
            if (attributes.latitude && attributes.longitude) {
                var point = new L.LatLng(parseFloat(attributes.latitude), parseFloat(attributes.longitude));
                changes.point = point;
                changes.latitude = parseFloat(attributes.latitude);
                changes.longitude = parseFloat(attributes.longitude);
            }
            
            if (attributes.year && attributes.month) {
                var date = new Date(attributes.year, MONTHS[attributes.month.toLowerCase()]);
                changes.date = date;
                changes.year = parseInt(attributes.year);
            }
            
            if (attributes.preliminary) {
                changes.preliminary = YESNO[attributes.preliminary.toLowerCase()];
            }
            
            if (attributes.adjusted) {
                changes.adjusted = YESNO[attributes.adjusted.toLowerCase()];
            }
            
            if (attributes.unemploymentrate) {
                changes.unemploymentrate = parseFloat(attributes.unemploymentrate);
            }
            
            if (attributes.unemployment) {
                changes.unemployment = parseInt(attributes.unemployment);
            }
            
            if (attributes.employment) {
                changes.employment = parseInt(attributes.employment);
            }
            
            if (attributes.laborforce) {
                changes.laborforce = parseInt(attributes.laborforce);
            }
            
            // update everything at once
            this.set(changes);
            return this;
        },
        
        getCounty: function() {
            if (this.has('fips')) {
                return window.counties.get(this.get('fips'));
            } else {
                return null;
            }
        }
    });
    
    // collections
    window.CountyCollection = Backbone.Collection.extend({
        model: County
    });
    
    window.UnemploymentRateCollection = Backbone.Collection.extend({
        model: UnemploymentRate,
        
        comparator: function(rate) {
            return -1 * (rate.get('date') || 0).valueOf();
        },
        
        getMonths: function() {
            // return all unique months in this collection
            var dates = this.pluck('date');
            return _.unique(dates, true, function(d) { return d.valueOf() });
        },
        
        getMonth: function(year, month) {
            if (_.isDate(year)) {
                var date = year;
                return this.filter(function(rate) {
                    return (rate.get('date').getFullYear() === date.getFullYear()
                            && rate.get('date').getMonth() === date.getMonth())
                });
            }
            
            return this.filter(function(rate) {
                return (rate.get('year') == year 
                        && rate.get('month') == month
                        && rate.get('adjusted')
                        && !rate.get('preliminary'));
            });
        }
    });
    
    // views
    
    // unemployment map is a thin wrapper around leaflet
    // to handle data and events
    window.UnemploymentMap = Backbone.View.extend({
        
        initialize: function(options) {
            this.map = map = new L.Map(this.el, options);
            wax.tilejson(TILE_URL, function(tilejson) {
                map.addLayer(new wax.leaf.connector(tilejson))
                .setView(CENTER, ZOOM);
            });
            this.markers = new L.LayerGroup();
            this.map.addLayer(this.markers);
            return this;
        },
        
        nextMonth: function() {
            
        },
        
        previousMonth: function() {
            
        },
        
        currentMonth: function() {
            // get the current month, based on the URL
            var parts = Backbone.history.fragment.split('/');
            var year = parts[0],
                month = parts[1],
                county = parts[2];
            return new Date(year, MONTHS[month.toLowerCase()]);
        },
        
        plot: function(year, month) {
            var umap = this;
            var rates = window.unemploymentrates.getMonth(year, month);
            this.markers.clearLayers();
            _.each(rates, function(rate, i) {
                var marker = rate.getMarker();
                if (marker) {
                    umap.markers.addLayer(marker);
                }
            });
            return this;
        },
        
        play: function(start, end) {
            var months = window.unemploymentrates.getMonths();
            start = (start || _.first(months));
            end = (end || _.last(months));
            _.each(months, function(month, i) {
                window.umap.plot(month.getFullYear(), MONTH_NAMES[month.getMonth()]);
            });
            
            return this;
        }
        
    })
    
    // router
    var App = Backbone.Router.extend({
        
        initialize: function(options) {
            Backbone.history.start({ root: '/' });
            this.navigate(Backbone.history.getFragment());
            return this;
        },
        
        routes: {
            ''                      : 'initial',
            ':year/:month'          : 'showMonth',
            ':year/:month/:county'  : 'showCounty'
        },
        
        initial: function() {
            console.log('initial route');
        },
        
        showMonth: function(year, month) {
            if (window.unemploymentrates.length) {
                window.umap.plot(year, month);
            } else {
                window.unemploymentrates.bind('reset', function(rates) {
                    window.umap.plot(year, month);
                });
            }
            
        },
        
        showCounty: function(year, month, county) {
            if (window.unemploymentrates.length) {
                window.umap.plot(year, month);
            } else {
                window.unemploymentrates.bind('reset', function(rates) {
                    window.umap.plot(year, month);
                });
            }
            
        }
    });
    
    // global instances
    window.counties = new CountyCollection;
    window.unemploymentrates = new UnemploymentRateCollection;
    window.umap = new UnemploymentMap({ el: '#map' });
    
    $(function() {
        window.app = new App;
    });
})(window.jQuery);