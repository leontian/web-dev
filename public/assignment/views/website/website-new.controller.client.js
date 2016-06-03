(function () {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);
    
    function NewWebsiteController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.uid = $routeParams.uid;
        vm.createWebsite = createWebsite;

        function createWebsite(name, description) {
            if (name) {
                WebsiteService
                    .createWebsite(vm.uid, name, description)
                    .then(
                        function (response) {
                            $location.url("/user/" + vm.uid + "/website");
                        },
                        function (error) {
                            vm.error = "Unable to create website.";

                        }
                    );
            }
            else {
                vm.error = "Website name cannot be empty.";
            }
        }
    }
})();