Template.linkSubmit.events({
'submit form': function(e) {
e.preventDefault();
var link = {
url: $(e.target).find('[name=url]').val(),
title: $(e.target).find('[name=title]').val(),
ur: $(e.target).find('[name=ur]').val()
}
Meteor.call('link', link, function(error, id) {
if (error) {
// display the error to the user
throwError(error.reason);
if (error.error === 302)
Router.go('linkPage', {_id: error.details})
} else {
Router.go('linkPage', {_id: id});
}
});
}
});