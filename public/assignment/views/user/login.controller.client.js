/**
 * Created by leon on 5/30/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);
    
    function LoginController($scope) {
        $scope
            .hello = "Hello from login controller";
    }
})();