/**
 * Created by alex on 7/02/2014.
 */

Posts = new Meteor.Collection('posts');

Posts.allow({
    insert: function(userId, doc){
        return !! userId;
    }
});

