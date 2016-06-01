(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);
    
    function PageNewController($routeParams, PageService, $location) {
        var vm = this;
        vm.wid = $routeParams['wid'];
        vm.uid = $routeParams['uid'];
        vm.createPage = createPage;
        
        function createPage(name) {
            vm.page = {
                _id: (new Date()).getTime() + "",
                name: name
            };
            var result = PageService.createPage(vm.wid, vm.page) 
            if (result) {
                $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page");
            } else {
                vm.error = "Unable to create page";
            }
        }
    }
})();