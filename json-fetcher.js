ns.jsonFetcher = (function($, window, document) {

  var fetchers = {};

  function execute(fetcher) {
    var i = fetcher.callbacks.length;
    while (i--) {
      if (typeof fetcher.callbacks[i] === 'function') {
        fetcher.callbacks[i](fetcher.response);
      }
      if (fetcher.ttl && fetcher.ttl > 0) {
        ns.storage.set(fetcher.name, fetcher.response, fetcher.ttl);
      }
      fetcher.callbacks.splice(i, 1);
    }
  };

  function register(url, callback) {
    if (fetchers[url]) {
      fetchers[url].callbacks.push(callback);
      return true;
    } else {
      fetchers[url] = {
        callbacks: []
      };
      fetchers[url].callbacks.push(callback);
      return false;
    }
  };

  function get(url, ttl, callback) {
    var fetcher = fetchers[url],
        storage = ns.storage.get(url);
    if (!register(url, callback)) {
      reqwest({
        url: url,
        type: 'json',
        method: 'get',
        error: function (error) {
          console.log('error: ', error);
        },
        success: function (response) {
          fetchers[url].response = response;
          fetchers[url].ttl = ttl;
          fetchers[url].name = url;
          execute(fetchers[url]);
        }
      });
    } else if (fetcher && fetcher.response) {
      execute(fetchers[url]);
    }
  };

  return {
    get: get
  };

})(undefined, window, window.document);
