/* globals require */

if (!window.HermesJSPlatform) {
    var p = navigator.platform;
    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
        window.HermesJSPlatform = 'ios';
    } else {
        window.HermesJSPlatform = 'web';
    }
}

window.HermesJSPath = './resources/vendor/hermesjs/src/';

require([
        './resources/vendor/hermesjs/src/hermes.js'
    ], function (HermesJS) {
        require([
            './resources/vendor/hermesjs/src/requester.js'
        ], function (Requester) {
            window.HermesJS = HermesJS;
            window.Requester = Requester;
            require([
                    './resources/vendor/kendo.dataviz.min.js',
                    './resources/vendor/dataviz/KendoChartDataviz.js',
                    './resources/vendor/dataviz/dataviz.figurecustom.preview.js',
                    './resources/vendor/dataviz/dataviz.radareachart.js',
                    './resources/vendor/dataviz/dataviz.radareachart.preview.js',
                    './resources/vendor/dataviz/dataviz.radcolumchart.js',
                    './resources/vendor/dataviz/dataviz.radcolumchart.preview.js',
                    './resources/vendor/dataviz/dataviz.raddonutchart.js',
                    './resources/vendor/dataviz/dataviz.raddonutchart.preview.js',
                    './resources/vendor/dataviz/dataviz.radgauge.preview.js',
                    './resources/vendor/dataviz/dataviz.radlinechart.js',
                    './resources/vendor/dataviz/dataviz.radlinechart.preview.js',
                    './resources/vendor/dataviz/dataviz.radpiechart.js',
                    './resources/vendor/dataviz/dataviz.radpiechart.preview.js'

                ], function (KendoUI, KendoDataviz, figurecustomDataviz, radareachartDataviz, radareachartPreviewDataviz, radcolumchartDataviz, radcolumchartPreviewDataviz, raddonutchartDataviz, raddonutchartPreviewDataviz, radgaugePreviewDataviz, radlinechartDataviz, radlinechartPreviewDataviz, radpiechartDataviz, radpiechartPreviewDataviz) {


                    HermesJS.declareDataviz('KendoChart', KendoDataviz);


                    HermesJS.declareDataviz('figurecustom', figurecustomDataviz);

                    HermesJS.declareDataviz('radareachart', radareachartDataviz);
                    HermesJS.declareDataviz('radareachart_preview', radareachartPreviewDataviz);

                    HermesJS.declareDataviz('radcolumnchart', radcolumchartDataviz);
                    HermesJS.declareDataviz('radcolumnchart_preview', radcolumchartPreviewDataviz);

                    HermesJS.declareDataviz('raddonutchart', raddonutchartDataviz);
                    HermesJS.declareDataviz('raddonutchart_preview', raddonutchartPreviewDataviz);

                    HermesJS.declareDataviz('radgauge_preview', radgaugePreviewDataviz);

                    HermesJS.declareDataviz('radlinechart', radlinechartDataviz);
                    HermesJS.declareDataviz('radlinechart_preview', radlinechartPreviewDataviz);

                    HermesJS.declareDataviz('radpiechart', radpiechartDataviz);
                    HermesJS.declareDataviz('radpiechart_preview', radpiechartPreviewDataviz);

                });

        });
    });
