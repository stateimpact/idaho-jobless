// data handling for idaho unemployment
// requires underscore, backbone, jquery, leaflet, date.js

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
    
    var MONTH_NAMES = ["January", "February", "March", 
     "April", "May", "June", "July", 
     "August", "September", "October", 
     "November", "December"]
    
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
            var changes = {};
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
        
        getArea: function(area) {
            return this.filter(function(rate) {
                return (rate.get('area') === area
                        && rate.get('adjusted')
                        && !rate.get('preliminary'));
            });
        },
        
        getNational: function() {
            return this.getArea('United States');
        },
        
        getIdaho: function() {
            return this.getArea('Idaho');
        },
        
        getMonths: function() {
            // return all unique months in this collection
            var dates = this.pluck('date');
            return _.unique(dates, true, function(d) { return d.valueOf() });
        },
        
        getCountyMonths: function() {
            // return unemployment rates for months with county rates
            var rates = this.filter(function(rate) { return !!rate.get('fips') && !rate.get('prelimintary') }),
                dates = _.map(rates, function(rate) {return rate.get('date')});
            return _.unique(dates, true, function(d) { return d.valueOf() });
        },
        
        getMonth: function(year, month) {
            if (_.isDate(year)) {
                var date = year;
                return this.filter(function(rate) {
                    return (rate.get('date').getFullYear() === date.getFullYear()
                            && rate.get('date').getMonth() === date.getMonth()
                            && rate.get('adjusted')
                            && !rate.get('preliminary'));
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
            _.bindAll(this);
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
            var date = this.currentMonth();
            date.next().month(); // increment the date in place
            var url = window.app.getUrl(date.getFullYear(), MONTH_NAMES[date.getMonth()], this.county);
            window.app.navigate(url, true);
        },
        
        previousMonth: function() {
            var date = this.currentMonth();
            date.previous().month(); // increment the date in place
            var url = window.app.getUrl(date.getFullYear(), MONTH_NAMES[date.getMonth()], this.county);
            window.app.navigate(url, true);
        },
        
        currentMonth: function() {
            // get the current month, based on the URL
            var parts = Backbone.history.fragment.split('/');
            var year = parts[0],
                month = parts[1],
                county = parts[2];
            this.county = county; // just hold onto this for a moment
            return new Date(year, MONTHS[month.toLowerCase()]);
        },
        
        plot: function(year, month) {
            var umap = this;
            var rates = this.collection.getMonth(year, month);
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
            var months = this.collection.getMonths(),
                current = this.currentMonth(),
                umap = this;
            
            // ensure there's only one play action happening
            this.timeout = clearTimeout(this.timeout);
            
            start = (start || _.first(months));
            end = (end || _.last(months));
            
            return this;
        }
        
    });
    
    var Slider = Backbone.View.extend({
        
        initialize: function(options) {
            _.bindAll(this);
            var view = this;
            this.slider = $(this.el).slider(this.slideOpts());            
            this.collection.bind('reset', function(models) {
                // reset options when the collection changes
                view.slider.slider('option', view.slideOpts());
            });
            
            return this.slideEvents();
        },
        
        slideOpts: function() {
            var values = this.getValues();
            return {
                min: _.min(values),
                max: _.max(values),
                step: values.length,
                animate: true
            };
        },
        
        slideEvents: function() {
            // breaking out slide events heres
            var county, display = this.$('p span');
            this.slider.bind('slide', function(e, ui) {
                var date = new Date(ui.value),
                    county = location.hash.split('/')[2],
                    url = app.getUrl(date.getFullYear(), date.toString('MMMM'), county);
                display.text(date.toString('MMM yyyy'));
                app.navigate(url, true);
            });
                        
            return this;
        },
        
        currentMonth: function() {
            // get the current month, based on the URL
            var parts;
            if (Backbone.history) {
                parts = Backbone.history.fragment.split('/');
            } else {
                parts = location.hash.replace('#', '').split('/');
            }
            var year = parts[0],
                month = parts[1],
                county = parts[2];
            this.county = county; // just hold onto this for a moment
            
            return new Date(year, MONTHS[month.toLowerCase()]);
        },
        
        getValues: function() {
            var dates = this.collection.getMonths();
            return _.map(dates, function(d) { return d.valueOf() });
        },
        
        value: function(val) {
            if (val) {
                return this.slider.slider('value', val);
            } else {
                return this.slider.slider('value');
            }
        }
        
    });
    
    var Chart = Backbone.View.extend({
        
        initialize: function(options) {
            _.bindAll(this);
            this.el = $(this.id)[0];
            if (this.collection.length) {
                this.makeChart();
            } else {
                var chart = this;
                this.collection.bind('reset', function(models) {
                    chart.makeChart();
                });
            }
            return this;
        },
        
        makeChart: function() {
            this.chart = new Highcharts.Chart(this.chartOptions());
            this.plot();
            return this;
        },
        
        getMonths: function() {
            var dates = this.collection.getMonths();
            return _.map(dates, function(d) { return d.toString('MMM yyyy'); });
        },
        
        clear: function() {
            if (this.chart) {
                _.each(this.chart.series, function(s) { s.remove(false); });                
            }
        },
        
        plot: function() {
            this.clear();
            // national
            var national = this.collection.getNational();
            this.chart.addSeries({
                type: 'spline',
                data: _.map(national, function(rate) { return rate.get('unemploymentrate') }),
                name: 'United States',
                marker:{
                  radius: 0,
                  symbol: null
                }
            });
            
            var idaho = this.collection.getIdaho();
            // idaho
            this.chart.addSeries({
                type: 'spline',
                data: _.map(idaho, function(rate) { return rate.get('unemploymentrate') }),
                name: 'Idaho',
                marker:{
                  radius: 0,
                  symbol: null
                }
            });
            
            // county
            var county = app.getCounty();
            
            return this;
        },
        
        chartOptions: function() {
            // default options for charts
            // data is deliberately left out and handled with methods
            return {
                chart: {
                    renderTo: this.id,
                    height: 100,
                    width: 940,
                    defaultSeriesType: 'spline',
                    marginLeft: 0,
                    marginRight: 0
                },
                colors: ['#d8472b','#17807e'],
                credits: {
                    text: null
                },
                title: {
                    text: null
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    categories: this.getMonths(),
                    labels: false,
                    tickInterval: 1,
                    tickmarkPlacement: 'on',
                    minPadding: 0.001,
                    maxPadding: 0.001
                },
                yAxis: {
                    labels: {
                        enabled: false,
                    },
                    gridLineColor: '#eeeeee',
                    title: {
                        text: null
                    },
                    tickInterval: 1
                },
                tooltip: {
                    crosshairs: true,
                    shared: true,
                    borderWidth: 0,
                    borderRadius: 0,
                    shared: true,
                    formatter: function() {
                        var s = '<b>'+ this.x +'</b>';

                        _.each(this.points, function(point, i, points) {
                            s += '<br/><span style="font-weight: bold; color:' + point.series.color + ';">' + point.series.name +':</span> '+
                            point.y +'%';
                        });

                        return s;
                    }
                },
                plotOptions: {
                    spline: {
                        lineWidth: 1.5,
                        marker: {
                            radius: 4,
                            lineColor: '#666666',
                            lineWidth: 1
                        },
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 1.5
                            }
                        },
                        events: {
                            click: null
                        }
                    }
                },
                symbol: null
            }
        }
    });
    
    // router
    var App = Backbone.Router.extend({
        
        initialize: function(options) {
            this.collection = options.collection || window.unemploymentrates;
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
            var date = this.getDate();
            if (this.collection.length) {
                window.umap.plot(year, month);
                //window.slider.value(date.valueOf());
            } else {
                this.collection.bind('reset', function(rates) {
                    window.umap.plot(year, month);
                    window.slider.value(date.valueOf());
                });
            }
        },
        
        showCounty: function(year, month, county) {
            var date = this.getDate();
            if (this.collection.length) {
                window.umap.plot(year, month);
                //window.slider.value(date.valueOf());
            } else {
                this.collection.bind('reset', function(rates) {
                    window.umap.plot(year, month);
                    // window.slider.value(date.valueOf());
                });
            }
        },
        
        getUrl: function(year, month, county) {
            // utility method for getting a paty from args
            return _.compact([year, month, county]).join('/');
        },
        
        getDate: function() {
            // get the current month, based on the URL
            var parts = Backbone.history.fragment.split('/');
            var year = parts[0],
                month = parts[1];
                
            return new Date(year, MONTHS[month.toLowerCase()]);
        },
        
        getCounty: function() {
            // get the current month, based on the URL
            var parts = Backbone.history.fragment.split('/');
            var year = parts[0],
                month = parts[1],
                county = parts[2];
            return window.counties.find(function(c) {
                return c.get('name') === county;
            });
        }
    });
    
    // global instances
    window.counties = new CountyCollection;
    window.unemploymentrates = new UnemploymentRateCollection;
    window.umap = new UnemploymentMap({ el: '#map', collection: window.unemploymentrates, scrollWheelZoom: false });
    window.slider = new Slider({ el: '#slider', collection: window.unemploymentrates });
    window.hichart = new Chart({ id: 'chart', collection: window.unemploymentrates });
    window.app = new App({ collection: window.unemploymentrates });
    
    Backbone.history.start({ root: '/' });
    window.app.bind('route:showCounty', function(year, month, county) {
        console.log([year, month, county]);
    });
    
    
})(window.jQuery);