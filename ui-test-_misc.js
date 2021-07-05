const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKJar_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('OLSKJarContributeButton', function test_OLSKJarContributeButton () {

		it('classes OLSKDecorPress', function () {
			browser.assert.hasClass(OLSKJarContributeButton, 'OLSKDecorPress');
		});

		it('sets href', function () {
			browser.assert.attribute(OLSKJarContributeButton, 'href', 'https://opencollective.com/rosano/contribute');
		});

		it('sets target', function () {
			browser.assert.attribute(OLSKJarContributeButton, 'target', '_blank');
		});

	});

});
