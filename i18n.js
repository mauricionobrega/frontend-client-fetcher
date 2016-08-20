ns.i18n = (function($, window, document) {

  var componentUrl = 'test.json?v=1';

  function getMessages() {
    return 'NOT IMPL';
  };

  function getMessage(key) {

      ns.jsonFetcher.get(componentUrl, 0, function(response) {
        console.log('01', response);
        next(response);
      });

  };

  return {
    getMessages: getMessages,
    getMessage: getMessage
  };

})(undefined, window, window.document);
