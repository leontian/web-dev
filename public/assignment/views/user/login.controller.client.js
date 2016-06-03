/**
 * Created by leon on 5/30/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);
    
    function LoginController($location, UserService) {
        var vm = this;
        
        vm.login = function(username, password) {
            UserService
                .findUserByUsernameAndPassword(username, password)
                .then(function (res) {
                    var user = res.data;

                    if (user._id) {
                        $location.url("/user/" + user._id);
                    } else {
                        vm.error = "User not found.";
                    }
            });
        }
    }
})();