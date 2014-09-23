Template.notifications.helpers({
notifications: function() {
return Notifications.find({userId: Meteor.userId(), read: false});
},
notificationCount: function(){
return Notifications.find({userId: Meteor.userId(), read: false}).count();
}
});
Template.notification.helpers({
notificationLinkPath: function() {
return Router.routes.linkPage.path({_id: this.linkId});
}
})
Template.notification.events({
'click a': function() {
Notifications.update(this._id, {$set: {read: true}});
}
})
