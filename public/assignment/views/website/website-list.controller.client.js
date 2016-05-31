(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        
        function init() {
            var uid = $routeParams['uid'];
            vm.website = WebsiteService.findWebsiteByUserId(uid);
        }
        
        init();

    }
})();