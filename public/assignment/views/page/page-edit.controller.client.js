(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);
    
    function PageEditController($location, $routeParams, PageService) {
        var vm = this;
        vm.pid = $routeParams['pid'];
        vm.uid = $routeParams['uid'];
        vm.wid = $routeParams['wid'];
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;
        
        function init() {
            vm.page = PageService.findPageById(vm.pid);
        }
        init();

        function updatePage() {
            var result = PageService.updatePage(vm.page);
            if (result) {
                $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page");
            } else {
                vm.error = "Unable to update page.";
            }
        }

        function deletePage() {
            var result = PageService.deletePage(vm.pid);
            if (result) {
                $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page");
            } else {
                vm.error = "Unable to delete page.";
            }
        }
        
    }
    
})();