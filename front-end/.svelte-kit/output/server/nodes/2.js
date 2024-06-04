

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CEb2nmyF.js","_app/immutable/chunks/preload-helper.B0nQjmhK.js","_app/immutable/chunks/runtime.H5kY_NrA.js","_app/immutable/chunks/disclose-version.DADTU4ZJ.js","_app/immutable/chunks/lifecycle.BHCIxgXm.js"];
export const stylesheets = ["_app/immutable/assets/monaco.DNKmaHg7.css"];
export const fonts = ["_app/immutable/assets/codicon.B16ygVZF.ttf"];
