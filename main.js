const $ = require("jquery");
    
new WebChannel(qt.webChannelTransport,  function(channel) {
  channel.onMessage('text', (text) => {
    console.warn('text');
    if (typeof(text) === 'string') {
      const image = Viz(text, { format: "png-image-element" });
      $(document.body).html(image);
    } else {
      console.warn('text is not string');
    }
  });
});
