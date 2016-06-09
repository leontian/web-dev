/**
 * Created by leon on 6/8/16.
 */

module.exports = function () {
    var mongoose = require("mongoose");
    var WebsiteSchema = require('./website.schema.server')();
    var Website = mongoose.model("Website", WebsiteSchema);
    
    var api = {
        createWebsite: createWebsite,
        findWebsitesForUser: findWebsitesForUser,
        findWebsiteById: findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite
    };

    return api;

    function createWebsite(website) {
        return Website.create(website);
    }

    function findWebsitesForUser(userId) {
        return Website.find({_user: userId});

    }

    function findWebsiteById(websiteId) {
        return Website.findById(websiteId);
    }

    function updateWebsite(website) {
        return Website.update({_id: website._id}, website);
    }

    function deleteWebsite(websiteId) {
        return Website.findOneAndRemove({_id: websiteId});

    }
    
};
