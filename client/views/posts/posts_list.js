/**
 * Created by alex on 7/02/2014.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});