export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Roboto/Roboto-Black.ttf","fonts/Roboto/Roboto-BlackItalic.ttf","fonts/Roboto/Roboto-Bold.ttf","fonts/Roboto/Roboto-BoldItalic.ttf","fonts/Roboto/Roboto-Italic.ttf","fonts/Roboto/Roboto-Light.ttf","fonts/Roboto/Roboto-LightItalic.ttf","fonts/Roboto/Roboto-Medium.ttf","fonts/Roboto/Roboto-MediumItalic.ttf","fonts/Roboto/Roboto-Regular.ttf","fonts/Roboto/Roboto-Thin.ttf","fonts/Roboto/Roboto-ThinItalic.ttf","fonts/Roboto_Mono/RobotoMono-Bold.ttf","fonts/Roboto_Mono/RobotoMono-BoldItalic.ttf","fonts/Roboto_Mono/RobotoMono-Italic.ttf","fonts/Roboto_Mono/RobotoMono-Light.ttf","fonts/Roboto_Mono/RobotoMono-LightItalic.ttf","fonts/Roboto_Mono/RobotoMono-Medium.ttf","fonts/Roboto_Mono/RobotoMono-MediumItalic.ttf","fonts/Roboto_Mono/RobotoMono-Regular.ttf","fonts/Roboto_Mono/RobotoMono-Thin.ttf","fonts/Roboto_Mono/RobotoMono-ThinItalic.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.CbTqFkY8.js","app":"_app/immutable/entry/app.m0a5m8v8.js","imports":["_app/immutable/entry/start.CbTqFkY8.js","_app/immutable/chunks/entry.DxPkjtfR.js","_app/immutable/chunks/runtime.H5kY_NrA.js","_app/immutable/entry/app.m0a5m8v8.js","_app/immutable/chunks/preload-helper.B0nQjmhK.js","_app/immutable/chunks/runtime.H5kY_NrA.js","_app/immutable/chunks/disclose-version.DADTU4ZJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
