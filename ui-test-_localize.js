const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('OLSKJar_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes OLSKJarHeading', function() {
			browser.assert.text('#TestHeading', uLocalized('OLSKJarHeadingText'));
		});

		it('localizes OLSKJarBlurb', function () {
			browser.assert.text(OLSKJarBlurb, uLocalized('OLSKJarBlurbText'));
		});
	
		it('localizes OLSKJarContributeButton', function() {
			browser.assert.text(OLSKJarContributeButton, uLocalized('OLSKJarContributeButtonText'));
		});

	});

});
