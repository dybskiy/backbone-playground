define([
  "jquery",
  "backbone",
  "app/views/notes",
  "app/views/note",
  "gh3"
], function (
  $,
  Backbone,
  NotesView,
  NoteView
) {
  "use strict";

  // Router
  // ------
  // The router translates routes in to views.
  var Router = Backbone.Router.extend({

    // **Note**: Could wrap this up in functions to allow easier
    // stubbing of the underlying methods. But, there are some
    // definite Backbone.js efficiencies from using simple string
    // method names instead (like name inference, etc).
    routes: {
      "": "notes",
      "note/:id/:action": "note",
    },

    initialize: function () {
      // Create a base notes view.
      this.notesView = new NotesView();

      // Stash current note view for re-rendering.
      this.noteView = null;

      var k33gRepositories = new Gh3.Repositories("k33g");

      k33gRepositories.fetch(function () {
          console.log("Repositories", k33gRepositories);
      }, function(){/*error*/},{page:1, per_page:500, direction : "desc"});
      //all repositories, one page, 500 items per page, sort : descending
    },

    // Show notes list.
    notes: function () {
      this.notesView.render();
    },

    // Common single note edit/view.
    note: function (noteId, action) {
      // Check if we are already at currently active view.
      if (this.noteView) {
        if (this.noteView.model.id === noteId) {
          // Reuse existing note view if same note.
          return this.noteView.trigger("update:" + action);
        } else {
          // Else, remove the last stored view.
          this.noteView.remove();
        }
      }

      // Try to find note in existing collection.
      var model = this.notesView.collection.get(noteId);
      if (!model) {
        // Go to home page on missing model.
        return this.navigate("", { trigger: true });
      }

      // Create note and add to DOM.
      this.noteView = new NoteView({ model: model }, {
        action: action
      });
      $("#note").html(this.noteView.render().$el);
    }

  });

  return Router;
});
