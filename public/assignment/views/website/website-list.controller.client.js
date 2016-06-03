(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        
        function init() {
            var userId = $routeParams['uid'];
            vm.uid = userId;
            WebsiteService
                .findWebsitesByUserId(userId)
                .then(function (response) {
                    vm.websites = response.data;
                });
        }
        
        init();

    }
})();