ns.storage = (function(ls, window, document) {

  var isSupported = ls.supported(), all = {};

  function getAll() {
    if (localStorage && isSupported) {
      var i, hasOwn = Object.prototype.hasOwnProperty;
      for (i in localStorage) {
        if (hasOwn.call(localStorage, i)) {
          if (!i.match(/(-cacheexpiration)/)) {
            var name = i.replace('lscache-', '');
            all[name] = ls.get(name);
          }
        }
      }
    }
    return all;
  };

  function deleteAll() {
    if (localStorage && isSupported) {
      window.localStorage.clear();
      return getAll();
    }
    return undefined;
  };

  function init() {
    if (localStorage && isSupported) {
      getAll();
    }
    return this;
  };

  return {
    enableWarnings: ls.enableWarnings,
    flush: ls.flush,
    flushExpired: ls.flushExpired,
    get: ls.get,
    remove: ls.remove,
    resetBucket: ls.resetBucket,
    set: ls.set,
    setBucket: ls.setBucket,
    supported: isSupported,
    init: init,
    getAll: getAll,
    deleteAll: deleteAll,
    all: all
  };

})(lscache, window, window.document).init();
