// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    /* Big slider */

    $('.jcarousel')
        .jcarousel({wrap: "circular"})
        .jcarouselAutoscroll({interval: 5000});

    $('.jcarousel-control-prev').jcarouselControl({target: "-=1"});

    $('.jcarousel-control-next').jcarouselControl({target: "+=1"});

    
    $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    })
    .on('click', function(e) {
        e.preventDefault();
    })
    .jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    }); 

    /* Small slider - 3 slides*/

    $('.jcarousel-small')
        .jcarousel({wrap: "circular"})
        .jcarouselAutoscroll({interval: 5000, autostart: false});

    $('.jcarousel-small-control-prev').jcarouselControl({target: "-=1"});

    $('.jcarousel-small-control-next').jcarouselControl({target: "+=1"});

    /* Medium slider - 2 slides */

    $('.jcarousel-medium')
        .jcarousel({wrap: "circular"})
        .jcarouselAutoscroll({interval: 5000, autostart: false});

    $('.jcarousel-medium-control-prev').jcarouselControl({target: "-=1"});

    $('.jcarousel-medium-control-next').jcarouselControl({target: "+=1"});

    /* Vertical slider */

    $('.v-jcarousel')
        .jcarousel({wrap: "circular", vertical: true});

    $('.v-jcarousel-control-prev').jcarouselControl({target: "-=1"});

    $('.v-jcarousel-control-next').jcarouselControl({target: "+=1"});

}());