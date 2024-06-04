
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
	export const CHROME_DESKTOP: string;
	export const COLORTERM: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const DEFAULTS_PATH: string;
	export const DESKTOP_SESSION: string;
	export const DISPLAY: string;
	export const GDK_BACKEND: string;
	export const GDK_BACKEND_VSCODE_SNAP_ORIG: string;
	export const GDMSESSION: string;
	export const GIO_MODULE_DIR: string;
	export const GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
	export const GIT_ASKPASS: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const GPG_AGENT_INFO: string;
	export const GSETTINGS_SCHEMA_DIR: string;
	export const GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
	export const GTK_EXE_PREFIX: string;
	export const GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
	export const GTK_IM_MODULE: string;
	export const GTK_IM_MODULE_FILE: string;
	export const GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
	export const GTK_MODULES: string;
	export const GTK_PATH: string;
	export const GTK_PATH_VSCODE_SNAP_ORIG: string;
	export const HOME: string;
	export const INIT_CWD: string;
	export const LANG: string;
	export const LC_ADDRESS: string;
	export const LC_IDENTIFICATION: string;
	export const LC_MEASUREMENT: string;
	export const LC_MONETARY: string;
	export const LC_NAME: string;
	export const LC_NUMERIC: string;
	export const LC_PAPER: string;
	export const LC_TELEPHONE: string;
	export const LC_TIME: string;
	export const LESSCLOSE: string;
	export const LESSOPEN: string;
	export const LOCPATH: string;
	export const LOCPATH_VSCODE_SNAP_ORIG: string;
	export const LOGNAME: string;
	export const LS_COLORS: string;
	export const MANDATORY_PATH: string;
	export const NODE: string;
	export const NODE_PATH: string;
	export const NO_AT_BRIDGE: string;
	export const NVM_CD_FLAGS: string;
	export const NVM_DIR: string;
	export const NVM_RC_VERSION: string;
	export const OLDPWD: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const PATH: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const PWD: string;
	export const QT_ACCESSIBILITY: string;
	export const QT_IM_MODULE: string;
	export const SESSION_MANAGER: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const SNAP: string;
	export const SNAP_ARCH: string;
	export const SNAP_COMMON: string;
	export const SNAP_CONTEXT: string;
	export const SNAP_COOKIE: string;
	export const SNAP_DATA: string;
	export const SNAP_EUID: string;
	export const SNAP_INSTANCE_KEY: string;
	export const SNAP_INSTANCE_NAME: string;
	export const SNAP_LIBRARY_PATH: string;
	export const SNAP_NAME: string;
	export const SNAP_REAL_HOME: string;
	export const SNAP_REEXEC: string;
	export const SNAP_REVISION: string;
	export const SNAP_UID: string;
	export const SNAP_USER_COMMON: string;
	export const SNAP_USER_DATA: string;
	export const SNAP_VERSION: string;
	export const SSH_AGENT_LAUNCHER: string;
	export const SSH_AUTH_SOCK: string;
	export const SYSTEMD_EXEC_PID: string;
	export const TERM: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const USER: string;
	export const USERNAME: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VTE_VERSION: string;
	export const WINDOWPATH: string;
	export const XAUTHORITY: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const XMODIFIERS: string;
	export const _: string;
	export const npm_command: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_config_node_gyp: string;
	export const npm_config_prefix: string;
	export const npm_config_registry: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_dependencies__codingame_monaco_vscode_configuration_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_extensions_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_files_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_groovy_default_extension: string;
	export const npm_package_dependencies__codingame_monaco_vscode_javascript_default_extension: string;
	export const npm_package_dependencies__codingame_monaco_vscode_json_default_extension: string;
	export const npm_package_dependencies__codingame_monaco_vscode_keybindings_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_languages_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_lifecycle_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_localization_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_model_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_python_default_extension: string;
	export const npm_package_dependencies__codingame_monaco_vscode_standalone_json_language_features: string;
	export const npm_package_dependencies__codingame_monaco_vscode_standalone_languages: string;
	export const npm_package_dependencies__codingame_monaco_vscode_standalone_typescript_language_features: string;
	export const npm_package_dependencies__codingame_monaco_vscode_textmate_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_theme_defaults_default_extension: string;
	export const npm_package_dependencies__codingame_monaco_vscode_theme_service_override: string;
	export const npm_package_dependencies__codingame_monaco_vscode_typescript_basics_default_extension: string;
	export const npm_package_dependencies__codingame_monaco_vscode_typescript_language_features_default_extension: string;
	export const npm_package_dependencies_daisyui: string;
	export const npm_package_dependencies_isomorphic_dompurify: string;
	export const npm_package_dependencies_marked: string;
	export const npm_package_dependencies_monaco_editor_wrapper: string;
	export const npm_package_dependencies_monaco_languageclient: string;
	export const npm_package_dependencies_pocketbase: string;
	export const npm_package_dependencies_svelte_hero_icons: string;
	export const npm_package_dependencies_vscode: string;
	export const npm_package_dependencies_vscode_json_languageservice: string;
	export const npm_package_dependencies_vscode_languageclient: string;
	export const npm_package_dependencies_vscode_languageserver: string;
	export const npm_package_dependencies_vscode_uri: string;
	export const npm_package_dependencies_vscode_ws_jsonrpc: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const npm_package_devDependencies__types_node: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const npm_package_devDependencies_globals: string;
	export const npm_package_devDependencies_monaco_editor: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_prettier_plugin_tailwindcss: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_typescript_eslint: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_name: string;
	export const npm_package_private: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_check: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_format: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_type: string;
	export const npm_package_version: string;
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
		CHROME_DESKTOP: string;
		COLORTERM: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		DEFAULTS_PATH: string;
		DESKTOP_SESSION: string;
		DISPLAY: string;
		GDK_BACKEND: string;
		GDK_BACKEND_VSCODE_SNAP_ORIG: string;
		GDMSESSION: string;
		GIO_MODULE_DIR: string;
		GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
		GIT_ASKPASS: string;
		GNOME_DESKTOP_SESSION_ID: string;
		GNOME_SHELL_SESSION_MODE: string;
		GNOME_TERMINAL_SCREEN: string;
		GNOME_TERMINAL_SERVICE: string;
		GPG_AGENT_INFO: string;
		GSETTINGS_SCHEMA_DIR: string;
		GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
		GTK_EXE_PREFIX: string;
		GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
		GTK_IM_MODULE: string;
		GTK_IM_MODULE_FILE: string;
		GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
		GTK_MODULES: string;
		GTK_PATH: string;
		GTK_PATH_VSCODE_SNAP_ORIG: string;
		HOME: string;
		INIT_CWD: string;
		LANG: string;
		LC_ADDRESS: string;
		LC_IDENTIFICATION: string;
		LC_MEASUREMENT: string;
		LC_MONETARY: string;
		LC_NAME: string;
		LC_NUMERIC: string;
		LC_PAPER: string;
		LC_TELEPHONE: string;
		LC_TIME: string;
		LESSCLOSE: string;
		LESSOPEN: string;
		LOCPATH: string;
		LOCPATH_VSCODE_SNAP_ORIG: string;
		LOGNAME: string;
		LS_COLORS: string;
		MANDATORY_PATH: string;
		NODE: string;
		NODE_PATH: string;
		NO_AT_BRIDGE: string;
		NVM_CD_FLAGS: string;
		NVM_DIR: string;
		NVM_RC_VERSION: string;
		OLDPWD: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		PATH: string;
		PNPM_SCRIPT_SRC_DIR: string;
		PWD: string;
		QT_ACCESSIBILITY: string;
		QT_IM_MODULE: string;
		SESSION_MANAGER: string;
		SHELL: string;
		SHLVL: string;
		SNAP: string;
		SNAP_ARCH: string;
		SNAP_COMMON: string;
		SNAP_CONTEXT: string;
		SNAP_COOKIE: string;
		SNAP_DATA: string;
		SNAP_EUID: string;
		SNAP_INSTANCE_KEY: string;
		SNAP_INSTANCE_NAME: string;
		SNAP_LIBRARY_PATH: string;
		SNAP_NAME: string;
		SNAP_REAL_HOME: string;
		SNAP_REEXEC: string;
		SNAP_REVISION: string;
		SNAP_UID: string;
		SNAP_USER_COMMON: string;
		SNAP_USER_DATA: string;
		SNAP_VERSION: string;
		SSH_AGENT_LAUNCHER: string;
		SSH_AUTH_SOCK: string;
		SYSTEMD_EXEC_PID: string;
		TERM: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		USER: string;
		USERNAME: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VTE_VERSION: string;
		WINDOWPATH: string;
		XAUTHORITY: string;
		XDG_CONFIG_DIRS: string;
		XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
		XDG_CURRENT_DESKTOP: string;
		XDG_DATA_DIRS: string;
		XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
		XDG_MENU_PREFIX: string;
		XDG_RUNTIME_DIR: string;
		XDG_SESSION_CLASS: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		XMODIFIERS: string;
		_: string;
		npm_command: string;
		npm_config_frozen_lockfile: string;
		npm_config_node_gyp: string;
		npm_config_prefix: string;
		npm_config_registry: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_dependencies__codingame_monaco_vscode_configuration_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_extensions_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_files_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_groovy_default_extension: string;
		npm_package_dependencies__codingame_monaco_vscode_javascript_default_extension: string;
		npm_package_dependencies__codingame_monaco_vscode_json_default_extension: string;
		npm_package_dependencies__codingame_monaco_vscode_keybindings_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_languages_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_lifecycle_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_localization_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_model_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_python_default_extension: string;
		npm_package_dependencies__codingame_monaco_vscode_standalone_json_language_features: string;
		npm_package_dependencies__codingame_monaco_vscode_standalone_languages: string;
		npm_package_dependencies__codingame_monaco_vscode_standalone_typescript_language_features: string;
		npm_package_dependencies__codingame_monaco_vscode_textmate_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_theme_defaults_default_extension: string;
		npm_package_dependencies__codingame_monaco_vscode_theme_service_override: string;
		npm_package_dependencies__codingame_monaco_vscode_typescript_basics_default_extension: string;
		npm_package_dependencies__codingame_monaco_vscode_typescript_language_features_default_extension: string;
		npm_package_dependencies_daisyui: string;
		npm_package_dependencies_isomorphic_dompurify: string;
		npm_package_dependencies_marked: string;
		npm_package_dependencies_monaco_editor_wrapper: string;
		npm_package_dependencies_monaco_languageclient: string;
		npm_package_dependencies_pocketbase: string;
		npm_package_dependencies_svelte_hero_icons: string;
		npm_package_dependencies_vscode: string;
		npm_package_dependencies_vscode_json_languageservice: string;
		npm_package_dependencies_vscode_languageclient: string;
		npm_package_dependencies_vscode_languageserver: string;
		npm_package_dependencies_vscode_uri: string;
		npm_package_dependencies_vscode_ws_jsonrpc: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies__types_eslint: string;
		npm_package_devDependencies__types_node: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		npm_package_devDependencies_globals: string;
		npm_package_devDependencies_monaco_editor: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_prettier_plugin_tailwindcss: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_typescript_eslint: string;
		npm_package_devDependencies_vite: string;
		npm_package_name: string;
		npm_package_private: string;
		npm_package_scripts_build: string;
		npm_package_scripts_check: string;
		npm_package_scripts_check_watch: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_format: string;
		npm_package_scripts_lint: string;
		npm_package_scripts_preview: string;
		npm_package_type: string;
		npm_package_version: string;
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
