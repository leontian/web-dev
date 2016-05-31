(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService) {
        var vm = this;
        vm.deleteWebsite = deleteWebsite;
        
        function init() {
            var uid = $routeParams['uid'];
            var wid = $routeParams['wid'];
            vm.website = WebsiteService.findWebsiteById(wid);
            vm.uid = uid;
            vm.wid = wid;
        }
        
        init();
        
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