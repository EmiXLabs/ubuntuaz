Modernizr.load([
  {
    load: website_assets + '/js/site.js'
  },
  {
    load: website_assets + '/js/twitter.js'
  },
  {
    load: '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js'
  },
  {
    load: website_assets + '/js/events-ui.js'
  },
  {
    load: website_assets + '/js/colortip-1.0-jquery.js'
  },
  {
    load: '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/themes/smoothness/jquery-ui.css'
  },
  {
    load: website_assets + '/css/colortip-1.0-jquery.css'
  },
  {
    test: Modernizr.borderradius && Modernizr.boxshadow,
    nope: website_assets + "/js/polyfills/pie.js",
    complete: function() {
      window.PIE && $("*").each(function() {
        ($(this).css("box-shadow") || $(this).css("border-radius")) && PIE.attach(this)
      })
    }
  },
]);

