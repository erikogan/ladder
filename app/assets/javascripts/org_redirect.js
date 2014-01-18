(function (host) {
  var parts = host.split('.');
  if (parts[parts.length - 1] !== 'org') {
    parts[parts.length - 1] = 'org'
    // window.location = window.location.protocol + '//' + parts.join('.') + '/';
  }
}(document.location.hostname));
