/**
 * Created by leon on 5/30/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);
    
    function LoginController($scope) {
        $scope
            .login = function() {
            console.log($scope.username);
        }
    }
})();