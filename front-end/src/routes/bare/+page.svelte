<script lang="ts">
	import { onMount } from 'svelte';
	import { configureMonacoWorkers, runClient } from './client';

	onMount(async () => {
		configureMonacoWorkers();
		await runClient();
	});
</script>

<h2>JSON Language Client & Language Server (Web Socket)</h2>
<div id="monaco-editor-root" style="width:800px;height:600px;border:1px solid grey"></div>
