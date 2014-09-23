Template.linkPage.helpers({
comments: function() {
return Comments.find({linkId: this._id});
},
submittedText: function() {
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"};
return new Date(this.submitted).toLocaleString("fr-FR" , options);
},
domainn: function() {
var a = document.createElement('a');
a.href = this.ur;
return a.hostname;
},
domain: function() {
var p = document.createElement('p');
p = this.url;
return p;
},
ownLink: function() {
return this.userId == Meteor.userId();
},
upvotedClass: function() {
var userId = Meteor.userId();
if (userId && !_.include(this.upvoters, userId)) {
return 'btn-primary upvotable';
} else {
return 'disabled';
}
}


});



Template.linkPage.events({
'click .upvotable': function(e) {
e.preventDefault();
Meteor.call('upvote', this._id);
}
});

// var ur = getElementById("urll").val();

// document.getElementById("ifram").src = "{{ur}}";
