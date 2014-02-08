/**
 * Created by alex on 7/02/2014.
 */

Meteor.publish('posts', function() {
    return Posts.find();
});

