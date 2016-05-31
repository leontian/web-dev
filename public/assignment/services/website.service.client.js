/**
 * 
 * Created by leon on 5/30/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    
    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
        { "_id": "678", "name": "Checkers",    "developerId": "123" },
        { "_id": "789", "name": "Chess",       "developerId": "234" }
    ];
    
    function WebsiteService() {
        var api = {
            findWebsitesByUserId: findWebsitesByUserId,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };
        
        function findWebsitesByUserId(uid) {
            var resultSet = [];
            for (var i in websites) {
                if (websites[i].developerId === uid) {
                    resultSet.push(websites[i]);
                }
            }
            return resultSet;
        }

        function findWebsiteById(wid) {
            for (var i in websites) {
                if (websites[i]._id === wid) {
                    return websites[i];
                }
            }
            return null;
        }
        
        function createWebsite(developerId, name, description) {
            if (name) {
                var newWebsite = {
                    _id: (new Date()).getTime() + "",
                    name: name,
                    description: description,
                    developerId: developerId
                };
                websites.push(newWebsite);
                return newWebsite;
            }
                return null;
        }
        
        function updateWebsite(updatedWebsite) {
            for (var i in websites) {
                if (websites[i]._id === updatedWebsite._id) {
                    websites[i] = updatedWebsite;
                    return true;
                }
            }
            return false;
            
        }
        
        function deleteWebsite(wid) {
            for (var i in websites) {
                if (websites[i]._id === wid) {
                    websites.splice(i, 1) ;
                    return true;
                }
            }
            return false;
        }
        
        return api;
    }
    

})();
