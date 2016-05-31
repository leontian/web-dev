(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.deleteWebsite = deleteWebsite;
        
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
        
        

    }
})();