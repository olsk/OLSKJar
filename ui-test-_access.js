const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKJar: '.OLSKJar',

	OLSKJarBlurb: '.OLSKJarBlurb',

	OLSKJarContributeButton: '.OLSKJarContributeButton',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKJar_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKJar', function () {
		return browser.assert.elements(OLSKJar, 1);
	});

	it('shows OLSKJarBlurb', function () {
		return browser.assert.elements(OLSKJarBlurb, 1);
	});

	it('shows OLSKJarContributeButton', function () {
		return browser.assert.elements(OLSKJarContributeButton, 1);
	});

});
