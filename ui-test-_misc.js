const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKJar_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('OLSKJar', function test_OLSKJar () {

		it('classes OLSKDecorModule', function () {
			return browser.assert.hasClass(OLSKJar, 'OLSKDecorModule');
		});
		
	});

	describe('OLSKJarContributeButton', function test_OLSKJarContributeButton () {

		it('classes OLSKDecorPress', function () {
			return browser.assert.hasClass(OLSKJarContributeButton, 'OLSKDecorPress');
		});

		it('sets href', function () {
			return browser.assert.attribute(OLSKJarContributeButton, 'href', 'https://rosano.ca/back');
		});

		it('sets target', function () {
			return browser.assert.attribute(OLSKJarContributeButton, 'target', '_blank');
		});

	});

});
