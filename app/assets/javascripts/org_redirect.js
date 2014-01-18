(function (host) {
  var parts = host.split('.');
  if (parts[2] !== 'org') {
    parts[2] = 'org'
    window.location = window.location.protocol + '//' + parts.join('.') + '/';
  }
}(document.location.hostname));
