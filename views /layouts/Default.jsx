const React = require('react');

function Default(html) {
  return (
    <html>
      <head>
        <title>{html.title || 'Default'} </title>
      </head>
      <body>
        <h1> Html rendered!</h1>
          {html.children}
      </body>
    </html>
  );
};

module.exports = Default;