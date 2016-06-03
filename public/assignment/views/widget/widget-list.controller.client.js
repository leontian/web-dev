(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);
    
    function WidgetListController($sce, $routeParams, $location, WidgetService) {
        var vm = this;
        vm.pid = $routeParams.pid;
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.getSafeHtml = getSafeHtml;
        vm.getSafeUrl = getSafeUrl;

        function init() {
            WidgetService
                .findWidgetsByPageId(vm.pid)
                .then(
                    function (response) {
                        vm.widgets = response.data;
                    },
                    function (error) {
                        vm.error = "Unable to find widgets";
                    });
        }
        init();

        function getSafeHtml(widget) {
            return $sce.trustAsHtml(widget.text);
        }
        
        function getSafeUrl(widget) {
            var urlParts = widget.url.split('/');
            var id = urlParts[urlParts.length-1];
            var url = "http://www.youtube.com/embed/" + id;
            return $sce.trustAsResourceUrl(url);
        }
    }
})();