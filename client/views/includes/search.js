
Template.search.events({
 'submit form': function(e) {
    e.preventDefault();
    Session.set("query", $(e.target).find('[name=srch-term]').val()),
     Router.go('results');
}
});