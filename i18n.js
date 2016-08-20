ns.i18n = (function($, window, document) {

  var componentUrl = 'test.json?v=1', messages = {};

  function get() {
    return messages;
  };

  function getMessage(key) {
    return messages[key];
  };

  function init() {
    ns.jsonFetcher.get(componentUrl, 0, function(response) {
      messages = response;
    });
    return this;
  };

  return {
    getMessage: getMessage,
    getMessages: get,
    init: init
  };

})(undefined, window, window.document).init();
