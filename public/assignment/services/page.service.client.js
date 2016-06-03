(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);



    function PageService($http) {
        var api = {
            findPagesByWebsiteId: findPagesByWebsiteId,
            findPageById: findPageById,
            createPage: createPage,
            updatePage: updatePage,
            deletePage: deletePage
        };

        function findPagesByWebsiteId(websiteId) {
            var url = "/api/website" + websiteId + "/page";
            return $http.get(url);
        }

        function findPageById(pageId) {
            var url = "/api/page/" + pageId;
            return $http.get(url);
        }

        function createPage(websiteId, page){
            var url = "/api/website" + websiteId + "/page";
            return $http.post(url, page);
        }

        function updatePage(updatedPage) {
            var url = "/api/page/" + updatedPage._id;
            return $http.put(url, updatedPage);
        }

        function deletePage(pageId) {
            var url = "/api/page/" + pageId;
            return $http.delete(url);
        }
        return api;
    }


})();
