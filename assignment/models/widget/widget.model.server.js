/**
 * Created by leon on 6/9/16.
 */
module.exports = function () {
    var mongoose = require('mongoose');
    var WidgetSchema= require('./widget.schema.server')();
    var Widget = mongoose.model('Widget', WidgetSchema);

    var api = {
        createWidget: createWidget,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget,
        findWidgetsForPage: findWidgetsForPage,
        findWidgetById: findWidgetById
        //reorderWidgets: reorderWidgets
    };
    
    return api;
    
    function createWidget(widget) {
        return Widget.create(widget);
        
    }
    
    function updateWidget(widget) {
        return Widget.update({_id: widget._id}, widget);
    }
    
    function deleteWidget(widgetId) {
        return Widget.findOneAndRemove(widgetId);
        
    }
    
    function findWidgetsForPage(pageId) {
        return Widget.find({_page: pageId});//.sort({position: 1});
        
    }
    
    function findWidgetById(widgetId) {
        return Widget.findById(widgetId);
        
    }
};
