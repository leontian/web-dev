(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);
    
    function PageListController(PageService, $routeParams) {
        var vm = this;
        vm.wid = $routeParams['wid'];
        vm.uid = $routeParams['uid'];
        
        function init() {
            PageService
                .findPagesByWebsiteId(vm.wid)
                .then(
                    function (response) {
                        vm.pages = response.data;
                    },
                    function (error) {
                        vm.error = "Unnable to find pages";
                    }
                );
        }
        init();
    }
    
})();