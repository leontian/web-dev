(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);
    
    function PageListController(PageService, $routeParams) {
        var vm = this;
        vm.wid = $routeParams['wid'];
        vm.pages = PageService.findPagesByWebsiteId(vm.wid);
    }
    
})();