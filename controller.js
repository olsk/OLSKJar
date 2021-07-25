const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'OLSKJarStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'main'));
			},
			OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
		}];
	},

};

Object.assign(exports, mod);
