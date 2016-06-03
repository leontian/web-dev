(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            findUserByUsernameAndPassword : findUserByUsernameAndPassword,
            findUserById : findUserById,
            updateUser : updateUser,
            createUser : createUser,
            deleteUser : deleteUser
        };
        
        function findUserByUsernameAndPassword(username, password) {
            var url = "/api/user?username=" + username + "&password=" +password;
            return $http.get(url);
        }

        function findUserById(id) {
            var url = "/api/user/" + id;
            return $http.get(url);
        }
        
        function updateUser(id, newUser) {
            var url = "/api/user/" + id;
            return $http.put(url, newUser)
        }
        
        function createUser(username, password) {
            var user = {
                username: username,
                password: password
            };
            
            return $http.post("/api/user", user);
        }
        
        function deleteUser(uid) {
            var url = "/api/user/" + uid;
            
            return $http.delete(url);
        }
        
        return api;
    }

})();