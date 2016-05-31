/**
 * Created by leon on 5/31/16.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);


    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;
        
        function register(username, password, verifypassword) {
            if (password === verifypassword) {
                var newId= UserService.createUser(username, password);
                if (!newId) {
                    vm.error = "Username taken.";
                } else {
                    $location.url("/user/" + newId);
                }
                
            } else {
                vm.error = "Passwords don't match."
            }
            
        }
    }

})();
