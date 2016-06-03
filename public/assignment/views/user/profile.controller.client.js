/**
 * Created by leon on 5/30/16.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);


    function ProfileController($location, $routeParams, UserService) {
        var vm = this;

        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;
        


        var id = $routeParams['uid'];
        
        //convention
        function init() {
            UserService
                .findUserById(id)
                .then(function (response) {
                    //console.log(response);
                    vm.user = response.data;
                });
        }
        
        init();

        function updateUser(newUser) {
            UserService
                .updateUser(id, newUser)
                .then(function (response) {
                        vm.success = "User Updated.";
                    }, function (error) {
                        vm.error = "Unable to update user.";
                    }
                );
        }
        
        function deleteUser() {
            UserService
                .deleteUser(id)
                .then(function (response) {
                    $location.url("/login");
                },
                    function (error) {
                        vm.error = "Unable to delete user";
                    }
                );
        }
    }
})();
