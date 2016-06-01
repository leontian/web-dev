/**
 * Created by leon on 6/1/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);
    
    function WidgetEditController(WidgetService, $routeParams, $location) {
        var vm = this;
        vm.wgid = $routeParams['wgid'];
        vm.uid = $routeParams['uid'];
        
        function init() {
            vm.widget = WidgetService.findWidgetById(vm.wgid);
        }
        init();
    }
    
})();