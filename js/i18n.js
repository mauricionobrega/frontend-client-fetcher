ns.i18n = (function($, window, document) {

  var componentUrl = 'test.json?v=1',
      ttl = 1;

  function getMessages(callback) {
    ns.jsonFetcher.get(componentUrl, ttl, function(response) {
      if (callback && typeof callback === 'function') {
        callback(response);
      }
    });
  };

  function getMessage(key, callback) {
    getMessages(function(response) {
      if (callback && typeof callback === 'function') {
        callback(response[key]);
      }
    });
  };

  return {
    getMessages: getMessages,
    getMessage: getMessage
  };

})(undefined, window, window.document);
