const mockCssModules = require('mock-css-modules');
const Home = require('../src/Home.js').default;

describe('Home', function() {
	describe('#render()', function() {
		it ('should render without error', function(done) {
			mockCssModules.register(['.css']);

			const h = new Home();
			try {
				let r = h.render();
				done();
			} catch(err) {
				done(err);
			}

		});
	});
});
