




/*
// Fixture data
if (Links.find().count() === 0) {
var now = new Date().getTime();
// create two users
var tomId = Meteor.users.insert({
profile: { name: 'Tom Coleman' }
});

var tom = Meteor.users.findOne(tomId);
var sachaId = Meteor.users.insert({
profile: { name: 'Sacha Greif' }
});

var sacha = Meteor.users.findOne(sachaId);
var telescopeId = Links.insert({
title: 'Introducing Telescope',
userId: sacha._id,
author: sacha.profile.name,
url: 'http://sachagreif.com/introducing-telescope/',
submitted: now - 7 * 3600 * 1000,
commentsCount: 2,
upvoters: [], votes: 0
});

Comments.insert({
linkId: telescopeId,
userId: tom._id,
author: tom.profile.name,
submitted: now - 5 * 3600 * 1000,
body: 'Interesting project Sacha, can I get involved?'
});

Comments.insert({
linkId: telescopeId,
userId: sacha._id,
author: sacha.profile.name,
submitted: now - 3 * 3600 * 1000,
body: 'You sure can Tom!'
});

Links.insert({
title: 'Meteor',
userId: tom._id,
author: tom.profile.name,
url: 'http://meteor.com',
submitted: now - 10 * 3600 * 1000,
commentsCount: 0,
upvoters: [], votes: 0
});

Links.insert({
title: 'The Meteor Book',
userId: tom._id,
author: tom.profile.name,
url: 'http://themeteorbook.com',
submitted: now - 12 * 3600 * 1000,
commentsCount: 0,
upvoters: [], votes: 0
});

for (var i = 0; i < 10; i++) {
Links.insert({
title: 'Test post #' + i,
author: sacha.profile.name,
userId: sacha._id,
url: 'http://google.com/?q=test-' + i,
submitted: now - i * 3600 * 1000,
commentsCount: 0,
upvoters: [], votes: 0
});
}
}
*/