const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'OLSKJarStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'), Object.fromEntries(Array.from((new URLSearchParams(req.query)).entries()).filter(function ([key, value]) {
					return value !== 'undefined';
				})));
			},
			OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
		}];
	},

	OLSKControllerSharedStaticAssetFolders () {
		return [
			'node_modules',
		];
	},

};

Object.assign(exports, mod)
