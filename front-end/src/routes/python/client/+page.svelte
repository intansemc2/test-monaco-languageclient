<script lang="ts">
	import { onMount } from 'svelte';
	import { configureMonacoWorkers, runPythonWrapper } from './main';

	// this is required syntax highlighting
	import '@codingame/monaco-vscode-python-default-extension';

	onMount(async () => {
		configureMonacoWorkers();
		await runPythonWrapper();
	});
</script>

<h2>Python Language Client & Pyright Language Server (Web Socket)</h2>
<button type="button" id="button-start" class="btn btn-primary btn-sm">Start</button>
<button type="button" id="button-dispose" class="btn btn-outline btn-sm">Dispose</button>
<div id="monaco-editor-root" style="width:800px;height:600px;border:1px solid grey"></div>
