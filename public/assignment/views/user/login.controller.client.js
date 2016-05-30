/**
 * Created by leon on 5/30/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);
    
    function LoginController() {
        var vm = this;
        
        vm.login = function() {
            console.log(vm.username);
        }
    }
})();