window.addEventListener('load', function() {
  var request = new XMLHttpRequest();
  request.addEventListener('load', function() {
    var response = JSON.parse(request.responseText);
    var output = document.createElement('pre');
    document.body.appendChild(output);
    output.textContent = JSON.stringiy(output, null, 4);
  });
  request.open('GET', '//portal.imice.de/api1/rs/status');
  request.send(null);
});