(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        
        function init() {
            var uid = $routeParams['uid'];
            vm.websites = WebsiteService.findWebsitesByUserId(uid);
            vm.uid = uid;
        }
        
        init();

    }
})();