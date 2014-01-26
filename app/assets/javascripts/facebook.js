var fb_id;
var logged_in = false;
var email;

function connected() {
    console.log("Welcome!  Fetching your information.... ");
    FB.api("/me", function(a) {
        console.log("Good to see you, " + a.name + ".");
        email = a.email;
        $.get("http://aws.leadandpledge.org/register.php?fb_id=" + a.id + "&first_name=" + a.first_name + "&last_name=" + a.last_name + "&email=" +
                a.email + "&gender=" + a.gender);
        $('#give_modal').foundation('reveal', 'open');
    });
    FB.api("/me/friends", {fields: 'id'} , function(response) {
        console.log(response);
        $.post( "http://aws.leadandpledge.org/friends.php?fb_id="+fb_id, JSON.stringify(response.data) );
    });
    $('#give1').show();
    $('#pledge1').hide();
}

$(document).ready(function() {
});

window.fbAsyncInit = function() {
    FB.init({
        appId: $fb_app_id,
        status: true,
        xfbml: true,
        cookie: true
    });
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        logged_in = true;
        fb_id = response.authResponse.userID;
        $('#give1').show();
        $('#pledge1').hide();
        $('#give_modal').foundation('reveal', 'open');
      }
      FB.Event.subscribe("auth.statusChange", function(a) {
        if (a.status === "not_authorized") return;
        if(logged_in == false) {
            connected();
        }
      });
    });

};

(function(a, b, c) {
    var d, e = a.getElementsByTagName(b)[0];
    if (a.getElementById(c)) {
        return;
    }
    d = a.createElement(b);
    d.id = c;
    d.src = "//connect.facebook.net/en_US/all.js";
    e.parentNode.insertBefore(d, e);
})(document, "script", "facebook-jssdk");

function fblogin() {
    if(logged_in == false) {
        FB.login(function(response) {
            console.log("login complete");
        }, {scope: 'email'} );
    }
};
