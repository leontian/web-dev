/**
 * Created by leon on 6/8/16.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var PageSchema = require('./page.schema.server')();
    var Page = mongoose.model("Page", PageSchema);

    var api = {
        createPage: createPage,
        findPagesForWebsite: findPagesForWebsite,
        findPageById: findPageById,
        updatePage: updatePage,
        deletePage: deletePage
    };

    return api;

    function createPage(page) {
        return Page.create(page);
    }

    function findPagesForWebsite(websiteId) {
        return Page.find({_website: websiteId});

    }

    function findPageById(pageId) {
        return Page.findById(pageId);
    }

    function updatePage(page) {
        var pageId = page._id;
        delete page._id;
        return Page.update({_id: pageId}, page);
    }

    function deletePage(pageId) {
        return Page.findOneAndRemove({_id: pageId});

    }

    // function reorderWidgets(pageId, start, end) {
    //
    // }

};
