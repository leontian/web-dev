/**
 * 
 * Created by leon on 5/30/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    

    
    function WebsiteService($http) {
        var api = {
            findWebsitesByUserId: findWebsitesByUserId,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };
        
        function findWebsitesByUserId(userId) {
            var url = "/api/user/" + userId + "/website";
            return $http.get(url);
        }

        function findWebsiteById(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.get(url);
        }
        
        function createWebsite(developerId, name, description) {
            var url = "/api/user/" + developerId + "/website";
            var newWebsite = {
                _id: (new Date()).getTime() + "",
                name: name,
                description: description,
                developerId: developerId
            };
            return $http.post(url, newWebsite);
        }
        
        function updateWebsite(updatedWebsite) {
            var url = "/api/website/" + updatedWebsite._id;
            return $http.put(url, updatedWebsite);
            
        }
        
        function deleteWebsite(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.delete(url);
        }
        
        return api;
    }
    

})();
