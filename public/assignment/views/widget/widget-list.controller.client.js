(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);
    
    function WidgetListController($sce, $routeParams, $location, PageService, WidgetService) {
        var vm = this;
        vm.pageId = $routeParams.pid;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.getSafeHtml = getSafeHtml;
        vm.getSafeUrl = getSafeUrl;

        function init() {
            PageService
                .findPageById()
                .then(
                    function (response) {
                        vm.widgets = response.data.widgets;
                    },
                    function (error) {
                        vm.error = "Unable to find widgets";
                    });
            //$(".container").sortable({axis: "y"});
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