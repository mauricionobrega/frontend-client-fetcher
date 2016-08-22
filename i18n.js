ns.i18n = (function($, window, document) {

  var componentUrl = 'test.json?v=1';

  function getMessages() {
    return 'NOT IMPL';
  };

  function getMessage(key) {
    var message = '';

    ns.jsonFetcher.get(componentUrl, 0, function(response) {
      console.log('01', response[key]);
      // next(response);
      message = response[key];
    });



    console.log('message: ', message);

    return message;
  };

  return {
    getMessages: getMessages,
    getMessage: getMessage
  };

})(undefined, window, window.document);
