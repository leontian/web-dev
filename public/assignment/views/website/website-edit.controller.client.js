(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.deleteWebsite = deleteWebsite;
        vm.updateWebsite = updateWebsite;
        
        vm.uid = $routeParams['uid'];
        vm.wid = $routeParams['wid'];
        
        function init() {
            WebsiteService
                .findWebsiteById(vm.wid)
                .then(
                    function (response) {
                        vm.website = response.data;
                    },
                    function (error) {
                        vm.error = "Website not found.";
                    });
        }
        
        init();
        
        function deleteWebsite(websiteId) {
           WebsiteService
               .deleteWebsite(websiteId)
               .then(
                   function (response) {
                       $location.url("/user/" + vm.uid + "/website");
                   },
                   function (error) {
                       vm.error = "Unable to delete website."
                   });
        }
        
        function updateWebsite() {
            if (vm.website.name) {
                WebsiteService
                    .updateWebsite(vm.website)
                    .then(
                        function (response) {
                            vm.success = "Website updated."
                        },
                        function (error) {
                            vm.error = "Unable to update website."
                        });
            } else {
                vm.error = "Website name cannot be empty";
            }
        }
    }
})();