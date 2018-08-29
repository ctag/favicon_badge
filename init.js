(function() {
  require(['/plugins.local/favicon_badge/favico.min.js'], function(Favico) {
    let favicon = new Favico();
    let badgeText = '';

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
      let match = document.title.match(/^\((\d+)\)/);
      if (match && match[1] !== badgeText) {
        // console.log("Favicon count: ", count);
        badgeText = match[1];
        favicon.badge(badgeText);
      }
      else if (match === null) {
        // console.log("Favicon: No unread articles");
        favicon.reset();
      }
    }

    init();
  })
})();
