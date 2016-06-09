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

    function findWebsitesForUser() {

    }

    function findWebsiteById() {

    }

    function updateWebsite() {

    }

    function deleteWebsite() {

    }
    
};
