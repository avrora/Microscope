/**
 * Created by alex on 7/02/2014.
 */

Meteor.Router.add({
    '/': 'postsList',

    '/posts/:_id': {
        to: 'postPage',
        and: function(id) { Session.set('currentPostId', id); }
    },

    '/submit': 'postSubmit'
});