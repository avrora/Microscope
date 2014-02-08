/**
 * Created by alex on 7/02/2014.
 */

Template.postPage.helpers({
    currentPost: function() {
        return Posts.findOne(Session.get('currentPostId'));
    }
});