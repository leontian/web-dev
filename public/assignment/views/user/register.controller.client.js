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
        
        function register(username, password, password2) {
            if (password === password2) {
                UserService
                    .createUser(username, password)
                    .then(function (response) {
                        var user = response.data;
                        if (user) {
                            $location.url("/user/" + user._id)
                        }
                    })
                
            } else {
                vm.error = "Passwords don't match."
            }
            
        }
    }

})();
