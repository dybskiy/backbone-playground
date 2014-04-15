
$.ajax({
  type: 'GET',
  url: 'http://www.nytimes.com',
  crossDomain: true
}).done(function (data) {
  console.log(data);
});

// var Point = Backbone.Model.extend({
//   initialize: function() {

//     this.on('change:count', function() {
//       console.log(JSON.stringify(this));
//     });
//   },

//   defaults: {
//     time: Date.now(),
//     count: 0
//   }

// });

// var Graph = Backbone.Collection.extend({
//   model: Point,

//   url: 'https://dybskiy.cloudant.com/car2go-march/_design/stats/_view/byCity?group_level=6&reduce=true&startkey=[%22Vancouver%22]&endkey=[%22Washington%20DC%22]',
//   dataType: "jsonp",

//   initialize: function() {
//     this.on('add', function(point) {
//       console.log('Added ' + JSON.stringify(point));
//     });
//   }
// });

// var graph = new Graph();
// var point = new Point();

// // graph.fetch();

// var points  = $.ajax({
//    url: 'https://dybskiy.cloudant.com/car2go-march/_design/stats/_view/byCity?group_level=6&reduce=true&startkey=[%22Vancouver%22]&endkey=[%22Washington%20DC%22]',

//    crossDomain : true

// }).done(function(data) {
//   console.log(data);
// });


// var Person = function (age) {
//   this.age = age || 21;
//   this.backpack = [];
//   this.addItemToBackpack = function (item) {
//     this.backpack.push(item);
//   };

//   this.iterateMe = function () {
//     this.backpack.forEach(function (item) {
//       console.log(item);
//       console.log(this);
//     }, this);
//   }
// }

// var colin = new Person();

// colin.addItemToBackpack('laptop');

// colin.iterateMe();
