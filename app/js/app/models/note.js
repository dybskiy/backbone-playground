define(["backbone"], function (Backbone) {
  "use strict";

  // Note Model
  // ----------
  var NoteModel = Backbone.Model.extend({

    defaults: function () {
      return {
        title: "",
        text: "",
        createdAt: new Date()
      };
    }

  });

  return NoteModel;
});
