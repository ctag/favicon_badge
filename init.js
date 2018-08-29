(function() {
  require(['/plugins.local/favicon_badge/favico-0.3.10.min.js'], function(Favico) {
    var init = function() {
      let target = document.querySelector('title');
      let observer = new MutationObserver(function(mutations) {
        checkTitle();
      });
      const config = {
        subtree: true,
        characterData: true,
        childList: true
      };
      observer.observe(target, config);
    }

    var checkTitle = function() {
      let count = document.title.match(/^\((\d+)\)/);
      let favicon = new Favico();
      if (count)
        favicon.badge(count[1]);
      else
        favicon.reset();
    }

    init();
  })
})();
