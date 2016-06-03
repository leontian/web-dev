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
            PageService
                .findPageById(vm.pid)
                .then(
                    function (response) {
                        vm.page = response.data;
                    });
        }
        init();

        function updatePage() {
            PageService
                .updatePage(vm.page)
                .then(
                    function (response) {
                        vm.success = "Page updated.";
                    },
                    function (error) {
                        vm.error = "Unable to update page.";
                    });
        }

        function deletePage() {
            PageService
                .deletePage(vm.pid)
                .then(
                    function (response) {
                        $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page");
                    },
                    function (error) {
                        vm.error = "Unable to delete page.";
                    });
        }
    }
})();