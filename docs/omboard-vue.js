// https://vuejs.org/v2/guide/mixins.html
const omboardVue = Vue.extend({
  created: function() {
    this.load();
    setInterval(this.load, 1E4);
  },
  methods: {
    load: function() {
      var instance = this;

      var request = new XMLHttpRequest();
      request.addEventListener('load', function() {
        var responseXML = request.responseXML || new DOMParser()
          .parseFromString(request.responseText, 'text/xml');
        var searchKey = path.split('/').pop();
        var dataNodes = responseXML.querySelector(searchKey).childNodes;
        var valueMap = Array.prototype.slice.call(dataNodes)
          .filter(function(node) {
            return node.nodeType == 1;
            // TODO: deep recursion for connectivity data
          }).forEach(function(node) {
            instance[node.nodeName] = node.textContent;
          });
      });
      request.open('GET', '//www.ombord.info' + path);
      request.send(null);
    },
  },
});
