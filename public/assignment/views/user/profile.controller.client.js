/**
 * Created by leon on 5/30/16.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);


    function ProfileController($routeParams, UserService) {
        var vm = this;

        vm.updateUser = updateUser;
        


        var id = $routeParams['uid'];
        
        //convention
        function init() {
            vm.user = UserService.findUserById(id);
        }
        
        init();

        function updateUser(newUser) {
            UserService.updateUser(id, newUser);
        }


    }

})();
