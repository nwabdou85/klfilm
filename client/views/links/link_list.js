Template.linksList.helpers({
linksWithRank: function() {
this.links.rewind();
return this.links.map(function(link, index, cursor) {
link._rank = index;
return link;
});
},
hasMoreLinks: function(){
this.links.rewind();
return Router.current().limit() == this.links.fetch().length;
}
});
