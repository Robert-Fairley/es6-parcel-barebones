
const jsdom = require('jsdom');
const main = require('../src/App.js').default;
const Home = require('../src/Home.js').default;

const { JSDOM } = jsdom;

describe('Application', function() {
  describe('#main()', function() {

    /** Set up the Application root element **/
    const dom = new JSDOM(`<!DOCTYPE html><main id="root"></main>`);
    const APP_ROOT = dom.window.document.querySelector('#root');

    it('should run and render the called page class', function(done) {

      try {
        main(null, APP_ROOT);
        done();
      }
      catch(err) {
        done(err);
      }

    });
  });
});
