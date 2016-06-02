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
                .promise.then(function (res) {
                    var user = res.data;

                    if (user) {
                        $location.url("/user/" + user._id);
                    } else {
                        vm.error = "User not found.";
                    }
            });
        }
    }
})();