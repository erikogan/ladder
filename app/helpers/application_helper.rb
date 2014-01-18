module ApplicationHelper

  def typekit_include_tag(apikey)
    javascript_include_tag("//use.typekit.com/#{apikey}.js") +
    javascript_tag("try{Typekit.load()}catch(e){}")
  end

  # We could default host
  def google_analytics_include_tag(tracking_id, host)
    javascript_tag(<<-Javascript)
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', '#{tracking_id}', '#{host}');
      ga('send', 'pageview');
    Javascript
  end

end
