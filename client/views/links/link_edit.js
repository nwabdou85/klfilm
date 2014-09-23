Template.linkEdit.events({
'submit form': function(e) {
e.preventDefault();
var currentLinkId = this._id;
var linkProperties = {
url: $(e.target).find('[name=url]').val(),
title: $(e.target).find('[name=title]').val(),
ur: $(e.target).find('[name=ur]').val()
}
Links.update(currentLinkId, {$set: linkProperties}, function(error) {
if (error) {
// display the error to the user
alert(error.reason);
} else {
Router.go('linkPage', {_id: currentLinkId});
}
});
},
'click .delete': function(e) {
e.preventDefault();
if (confirm("Delete this post?")) {
var currentLinkId = this._id;
Links.remove(currentLinkId);
Router.go('linksList');
}
}
});
