require(['dojo/_base/kernel', 'dojo/ready', '/plugins.local/favicon_badge/favico.min.js'], function (dojo,  ready, Favico) {
  let favicon = new Favico({
    animation : 'none'
  });

  PluginHost.register(PluginHost.HOOK_COUNTERS_PROCESSED, () => {
    parseInt(App.global_unread) > 0 ? favicon.badge(App.global_unread) : favicon.reset();
  });
});
