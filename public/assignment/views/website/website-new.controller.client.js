(function () {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);
    
    function NewWebsiteController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.uid = $routeParams.uid;
        vm.createWebsite = createWebsite;

        function createWebsite(name, description) {
            var newWebsite = WebsiteService.createWebsite(vm.uid, name, description);

            if (newWebsite) {
                $location.url("/user/" + vm.uid + "/website");
            } else {
                vm.error = "Unable to create website";
            }
        }
    }
})();