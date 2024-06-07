
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESSOPEN: string;
	export const npm_package_devDependencies__types_node: string;
	export const npm_package_dependencies_vscode_uri: string;
	export const USER: string;
	export const LC_TIME: string;
	export const npm_package_dependencies_monaco_languageclient: string;
	export const npm_config_user_agent: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_dependencies_svelte_hero_icons: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const npm_package_dependencies_isomorphic_dompurify: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const OLDPWD: string;
	export const npm_package_dependencies__codingame_monaco_vscode_standalone_languages: string;
	export const TERM_PROGRAM_VERSION: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const npm_package_dependencies__codingame_monaco_vscode_typescript_language_features_default_extension: string;
	export const NVM_INC: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_dependencies_vscode_languageclient: string;
	export const LC_MONETARY: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_scripts_check: string;
	export const npm_package_dependencies__codingame_monaco_vscode_configuration_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_theme_defaults_default_extension: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_dependencies__codingame_monaco_vscode_typescript_basics_default_extension: string;
	export const NVM_DIR: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies_prettier: string;
	export const GTK_IM_MODULE: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const _: string;
	export const npm_package_private: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_dependencies__codingame_monaco_vscode_localization_service_override: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const USERNAME: string;
	export const TERM: string;
	export const npm_package_dependencies_ws: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const npm_package_dependencies__codingame_monaco_vscode_keybindings_service_override: string;
	export const WINDOWPATH: string;
	export const npm_package_devDependencies_prettier_plugin_tailwindcss: string;
	export const npm_package_dependencies_vscode_ws_jsonrpc: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies_typescript_eslint: string;
	export const npm_package_dependencies__codingame_monaco_vscode_python_default_extension: string;
	export const npm_package_dependencies__codingame_monaco_vscode_standalone_json_language_features: string;
	export const NODE: string;
	export const XDG_MENU_PREFIX: string;
	export const LC_ADDRESS: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const npm_package_dependencies__codingame_monaco_vscode_lifecycle_service_override: string;
	export const npm_package_dependencies_marked: string;
	export const npm_package_dependencies_pocketbase: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const npm_package_dependencies__codingame_monaco_vscode_json_default_extension: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LC_TELEPHONE: string;
	export const npm_package_devDependencies_eslint: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const TERM_PROGRAM: string;
	export const npm_package_dependencies__codingame_monaco_vscode_groovy_default_extension: string;
	export const npm_lifecycle_script: string;
	export const SSH_AGENT_LAUNCHER: string;
	export const SSH_AUTH_SOCK: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_dependencies__codingame_monaco_vscode_extensions_service_override: string;
	export const SHELL: string;
	export const LC_NAME: string;
	export const npm_package_version: string;
	export const npm_package_dependencies__codingame_monaco_vscode_standalone_typescript_language_features: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const QT_ACCESSIBILITY: string;
	export const NO_AT_BRIDGE: string;
	export const GDMSESSION: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_tslib: string;
	export const LESSCLOSE: string;
	export const npm_package_dependencies__codingame_monaco_vscode_languages_service_override: string;
	export const LC_MEASUREMENT: string;
	export const GPG_AGENT_INFO: string;
	export const LC_IDENTIFICATION: string;
	export const npm_package_devDependencies_globals: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const QT_IM_MODULE: string;
	export const npm_package_scripts_format: string;
	export const npm_package_dependencies__codingame_monaco_vscode_textmate_service_override: string;
	export const npm_package_dependencies_monaco_editor: string;
	export const PWD: string;
	export const npm_package_dependencies_vscode_languageserver: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const LC_NUMERIC: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const LC_PAPER: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_dependencies__codingame_monaco_vscode_javascript_default_extension: string;
	export const npm_package_dependencies__codingame_monaco_vscode_model_service_override: string;
	export const npm_package_dependencies_vscode_json_languageservice: string;
	export const VTE_VERSION: string;
	export const npm_package_dependencies__codingame_monaco_vscode_editor_service_override: string;
	export const npm_package_dependencies_daisyui: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const npm_package_dependencies__codingame_monaco_vscode_files_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_theme_service_override: string;
	export const npm_package_dependencies_monaco_editor_wrapper: string;
	export const npm_package_dependencies_vscode: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESSOPEN: string;
		npm_package_devDependencies__types_node: string;
		npm_package_dependencies_vscode_uri: string;
		USER: string;
		LC_TIME: string;
		npm_package_dependencies_monaco_languageclient: string;
		npm_config_user_agent: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_vite: string;
		npm_package_dependencies_svelte_hero_icons: string;
		npm_node_execpath: string;
		SHLVL: string;
		npm_package_dependencies_isomorphic_dompurify: string;
		HOME: string;
		CHROME_DESKTOP: string;
		OLDPWD: string;
		npm_package_dependencies__codingame_monaco_vscode_standalone_languages: string;
		TERM_PROGRAM_VERSION: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		npm_package_dependencies__codingame_monaco_vscode_typescript_language_features_default_extension: string;
		NVM_INC: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_dependencies_vscode_languageclient: string;
		LC_MONETARY: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_scripts_check: string;
		npm_package_dependencies__codingame_monaco_vscode_configuration_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_theme_defaults_default_extension: string;
		SYSTEMD_EXEC_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_typescript: string;
		npm_package_dependencies__codingame_monaco_vscode_typescript_basics_default_extension: string;
		NVM_DIR: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies_prettier: string;
		GTK_IM_MODULE: string;
		LOGNAME: string;
		npm_package_type: string;
		_: string;
		npm_package_private: string;
		npm_package_scripts_check_watch: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_dependencies__codingame_monaco_vscode_localization_service_override: string;
		XDG_SESSION_CLASS: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		USERNAME: string;
		TERM: string;
		npm_package_dependencies_ws: string;
		GNOME_DESKTOP_SESSION_ID: string;
		npm_package_dependencies__codingame_monaco_vscode_keybindings_service_override: string;
		WINDOWPATH: string;
		npm_package_devDependencies_prettier_plugin_tailwindcss: string;
		npm_package_dependencies_vscode_ws_jsonrpc: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		npm_package_name: string;
		npm_package_devDependencies_typescript_eslint: string;
		npm_package_dependencies__codingame_monaco_vscode_python_default_extension: string;
		npm_package_dependencies__codingame_monaco_vscode_standalone_json_language_features: string;
		NODE: string;
		XDG_MENU_PREFIX: string;
		LC_ADDRESS: string;
		GNOME_TERMINAL_SCREEN: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		npm_package_dependencies__codingame_monaco_vscode_lifecycle_service_override: string;
		npm_package_dependencies_marked: string;
		npm_package_dependencies_pocketbase: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		npm_package_dependencies__codingame_monaco_vscode_json_default_extension: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		LC_TELEPHONE: string;
		npm_package_devDependencies_eslint: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		GNOME_TERMINAL_SERVICE: string;
		TERM_PROGRAM: string;
		npm_package_dependencies__codingame_monaco_vscode_groovy_default_extension: string;
		npm_lifecycle_script: string;
		SSH_AGENT_LAUNCHER: string;
		SSH_AUTH_SOCK: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_dependencies__codingame_monaco_vscode_extensions_service_override: string;
		SHELL: string;
		LC_NAME: string;
		npm_package_version: string;
		npm_package_dependencies__codingame_monaco_vscode_standalone_typescript_language_features: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		QT_ACCESSIBILITY: string;
		NO_AT_BRIDGE: string;
		GDMSESSION: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_tslib: string;
		LESSCLOSE: string;
		npm_package_dependencies__codingame_monaco_vscode_languages_service_override: string;
		LC_MEASUREMENT: string;
		GPG_AGENT_INFO: string;
		LC_IDENTIFICATION: string;
		npm_package_devDependencies_globals: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		QT_IM_MODULE: string;
		npm_package_scripts_format: string;
		npm_package_dependencies__codingame_monaco_vscode_textmate_service_override: string;
		npm_package_dependencies_monaco_editor: string;
		PWD: string;
		npm_package_dependencies_vscode_languageserver: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		LC_NUMERIC: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_postcss: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		LC_PAPER: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_dependencies__codingame_monaco_vscode_javascript_default_extension: string;
		npm_package_dependencies__codingame_monaco_vscode_model_service_override: string;
		npm_package_dependencies_vscode_json_languageservice: string;
		VTE_VERSION: string;
		npm_package_dependencies__codingame_monaco_vscode_editor_service_override: string;
		npm_package_dependencies_daisyui: string;
		npm_package_devDependencies__types_eslint: string;
		npm_package_dependencies__codingame_monaco_vscode_files_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_theme_service_override: string;
		npm_package_dependencies_monaco_editor_wrapper: string;
		npm_package_dependencies_vscode: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
