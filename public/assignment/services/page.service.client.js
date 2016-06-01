(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456" },
        { "_id": "432", "name": "Post 2", "websiteId": "456" },
        { "_id": "543", "name": "Post 3", "websiteId": "456" }
    ];

    function PageService() {
        var api = {
            findPagesByWebsiteId: findPagesByWebsiteId,
            findPageById: findPageById,
            createPage: createPage,
            updatePage: updatePage,
            deletePage: deletePage
        };

        function findPagesByWebsiteId(wid) {
            var resultSet = [];
            for (var i in pages) {
                if (pages[i].websiteId === wid) {
                    resultSet.push(pages[i]);
                }
            }
            return resultSet;
        }

        function findPageById(pid) {
            for (var i in pages) {
                if (pages[i]._id === pid) {
                    return pages[i];
                }
            }
            return null;
        }

        function createPage(wid, page){
            if (page.name) {
                page.websiteId = wid;
                pages.push(page);
                return page;
            }
            return null;
        }

        function updatePage(updatedPage) {
            for (var i in pages) {
                if (pages[i]._id === updatedPage._id) {
                    pages[i] = updatedPage;
                    return true;
                }
            }
            return false;
        }

        function deletePage(pid) {
            for (var i in pages) {
                if (pages[i]._id === pid) {
                    pages.splice(i, 1) ;
                    return true;
                }
            }
            return false;
        }

        return api;
    }


})();