/**
 * Created by leon on 5/30/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .config(Config);
    
    function Config($routeProvider) {
        $routeProvider
            .when("/user/:id/website", {
                templateUrl: "views/website/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })
            .when("/user/:id", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html"
            })
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/login"
            })
    }
    
})();