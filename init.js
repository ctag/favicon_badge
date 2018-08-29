(function() {
  require(['/plugins.local/favicon_badge/favico.min.js'], function(Favico) {
    let favicon = new Favico();

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
      if (count) {
        // console.log("Favicon count: ", count);
        favicon.badge(count[1]);
      }
      else {
        // console.log("Favicon: No unread articles");
        favicon.reset();
      }
    }

    init();
  })
})();
