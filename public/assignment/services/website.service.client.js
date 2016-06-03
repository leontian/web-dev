/**
 * 
 * Created by leon on 5/30/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    

    
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
