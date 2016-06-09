(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);
    
    function PageNewController($routeParams, PageService, $location) {
        var vm = this;
        vm.wid = $routeParams['wid'];
        vm.uid = $routeParams['uid'];
        vm.createPage = createPage;
        
        function createPage(name, description) {
            var newPage = {
                name: name,
                description: description
            };
            if (name) {
                PageService
                    .createPage(vm.wid, newPage) 
                    .then(
                        function (response) {
                            $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page");
                        });
            } else {
                vm.error = "Name cannot be empty.";
            }
        }
    }
})();