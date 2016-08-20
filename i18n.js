ns.i18n = (function($, window, document) {

  var componentUrl = 'test.json';

  function get() {
    ns.jsonFetcher.get(componentUrl, 2, function(response) {
      return response;
    });
  };

  function getMessage(key) {
    ns.jsonFetcher.get(componentUrl, 2, function(response) {
      console.log(response[key]);
      return response[key];
    });
  };

  return {
    getMessage: getMessage,
    getMessages: get
  };

})(undefined, window, window.document);
