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
            for (var i in users) {
                if (users[i]._id === id) {
                    return users[i];
                }
            }
            return null;
        }
        
        function updateUser(id, newUser) {
            for (var i in users) {
                if (users[i]._id === id) {
                    users[i].firstName = newUser.firstName;
                    users[i].lastName = newUser.lastName;
                    return true;
                }
            }
            return false;
        }
        
        function createUser(username, password) {
            for (var i in users) {
                if (users[i].username === username) {
                    return null;
                }
            }

            var newId = (new Date()).getTime() + "";
            
            users.push({
                _id: newId,
                username: username,
                password: password
            });
            
            return newId;
        }
        
        function deleteUser(uid) {
            for (var i in users) {
                if (users[i]._id === uid) {
                    users.splice(i, 1) ;
                    return true;
                }
            }
            return false;
        }
        
        return api;
    }

})();