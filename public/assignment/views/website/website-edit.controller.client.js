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
        vm.website = WebsiteService.findWebsiteById(vm.wid);
        
        function deleteWebsite(wid) {
            var result = WebsiteService.deleteWebsite(wid);
            if (result) {
                $location.url("/user/" + vm.uid + "/website");
            } else {
                vm.error = "Unable to delete website."
            }
        }
        
        function updateWebsite() {
            var result = WebsiteService.updateWebsite(vm.website);
            if (result) {
                $location.url("/user/" + vm.uid + "/website");
            } else {
                vm.error = "Unable to update website."
            }
            
            
        }
    }
})();