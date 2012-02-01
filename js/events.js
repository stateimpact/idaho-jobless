/****
Custom events to track with Google Analytics.
Each event needs an array:

    ['_trackEvent', category, action, label, value, non-interact]

****/
jQuery(function($) {

    var _gaq = window._gaq || [],
        category = "Idaho Unemployment";
        
    // modal
    $('a.share-modal').click(function(e) {
        _gaq.push(['_trackEvent', category, 'modal']);
    });
    
    // map click
    umap.markers.on('click', function(e) {
        _gaq.push(['_trackEvent', category, 'map-click', e.layer.options.county]);
    });
    
    // slide start
    slider.slider.bind('slidestart', function(e, ui) {
        _gaq.push(['_trackEvent', category, 'slidestart']);
    });
    
    slider.slider.bind('slidestop', function(e, ui) {
        // non-interact set to true here so this doesn't push down
        // our bounce rate, since we should have equal parts
        // slide start and slide stop
        _gaq.push(['_trackEvent', category, 'slidestop']);
    });
    
});