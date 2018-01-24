var express = require('express');
app = express();
app.use(express.static('./platforms/browser/www'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log(`App working on http://localhost:${app.get('port')}/`);
});
