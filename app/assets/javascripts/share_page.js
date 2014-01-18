function share_page(caption) {
  FB.ui(
  {
    method: 'feed',
    name: 'Lead and Pledge',
    link: ' http://leadandpledge.org/',
    picture: 'http://leadandpledge.org/assets/square.png',
    caption: caption
  });
}
