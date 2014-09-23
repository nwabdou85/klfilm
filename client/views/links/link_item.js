Template.linkItem.helpers({
ownLink: function() {
return this.userId == Meteor.userId();
},
domain: function() {
var p = document.createElement('p');
p = this.url;
return p;
},
domainn: function() {
var a = document.createElement('a');
a.href = this.ur;
return a.hostname;
},
upvotedClass: function() {
var userId = Meteor.userId();
if (userId && !_.include(this.upvoters, userId)) {
return 'btn-primary upvotable';
} else {
return 'disabled';
}
},
submittedText: function() {
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"};
return new Date(this.submitted).toLocaleString("fr-FR" , options);
}
});


Template.linkItem.rendered = function(){
// animate post from previous position to new position
var instance = this;
var rank = instance.data._rank;
var $this = $(this.firstNode);
var linkHeight = 80;
var newPosition = rank * linkHeight;
// if element has a currentPosition (i.e. it's not the first ever render)
if (typeof(instance.currentPosition) !== 'undefined') {
var previousPosition = instance.currentPosition;
// calculate difference between old position and new position and send element there
var delta = previousPosition - newPosition;
$this.css("top", delta + "px");
} else {
// it's the first ever render, so hide element
$this.addClass("invisible");
}
// let it draw in the old position, then..
Meteor.defer(function() {
instance.currentPosition = newPosition;
// bring element back to its new original position
$this.css("top", "0px").removeClass("invisible");
});
};





Template.linkItem.events({
'click .upvotable': function(e) {
e.preventDefault();
Meteor.call('upvote', this._id);
}
});

