<script lang="ts">
	import { marked } from 'marked';
	import DisplayToken from './DisplayToken.svelte';

	const { markdownText = '' }: { markdownText: string } = $props();

	const lexer = new marked.Lexer();
	const tokens = $derived(lexer.lex(markdownText));
</script>

<div class="font-light leading-6">
	{#each tokens as token (token)}
		<DisplayToken {token} />
	{/each}
</div>
