<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';

	const { token }: { token: any } = $props();

	// Functions
	function isHasChildTokens(token: any) {
		return Array.isArray(token?.tokens) && token?.tokens.length > 0;
	}
</script>

{#snippet renderChildTokens(inputToken)}
	{#if isHasChildTokens(inputToken)}
		{#each inputToken?.tokens as innerToken (innerToken)}
			<svelte:self token={innerToken} />
		{/each}
	{/if}
{/snippet}

{#if token?.type == 'space'}
	<span></span>
{:else if token?.type == 'text'}
	{#if isHasChildTokens(token)}
		{@render renderChildTokens(token)}
	{:else}
		<span>{@html DOMPurify.sanitize(token?.text)}</span>
	{/if}
{:else if token?.type == 'paragraph'}
	<p>{@render renderChildTokens(token)}</p>
{:else if token?.type == 'em'}
	<i class="italic">{@render renderChildTokens(token)}</i>
{:else if token?.type == 'strong'}
	<b class="font-bold">{@render renderChildTokens(token)}</b>
{:else if token?.type == 'link'}
	<a href={token.href} title={token.title} class="link link-primary">
		{@render renderChildTokens(token)}
	</a>
{:else if token?.type == 'image'}
	<div class="max-h-full w-full">
		<img src={token.href} alt={token.text} title={token.title} />
	</div>
{:else if token?.type == 'heading'}
	{#if token?.depth == 1}
		<h1 class="text-6xl font-bold">{@render renderChildTokens(token)}</h1>
	{:else if token?.depth == 2}
		<h1 class="text-5xl font-bold">{@render renderChildTokens(token)}</h1>
	{:else if token?.depth == 3}
		<h1 class="text-4xl font-bold">{@render renderChildTokens(token)}</h1>
	{:else if token?.depth == 4}
		<h1 class="text-3xl font-bold">{@render renderChildTokens(token)}</h1>
	{:else if token?.depth == 5}
		<h1 class="text-2xl font-bold">{@render renderChildTokens(token)}</h1>
	{:else}
		<h1 class="text-xl font-bold">{@render renderChildTokens(token)}</h1>
	{/if}
{:else if token?.type == 'list'}
	{#if token.ordered}
		<ol start={token.start} class="list-decimal pl-10">
			{#each token.items as item (item)}
				<svelte:self token={item} />
			{/each}
		</ol>
	{:else}
		<ul class="list-disc pl-10">
			{#each token.items as item (item)}
				<svelte:self token={item} />
			{/each}
		</ul>
	{/if}
{:else if token?.type == 'list_item'}
	<li>{@render renderChildTokens(token)}</li>
{:else if token?.type == 'blockquote'}
	<div class="pl-10">{@render renderChildTokens(token)}</div>
{:else if token?.type == 'codespan'}
	<pre class="inline-block bg-base-300">{@html DOMPurify.sanitize(token.text)}</pre>
{:else if token?.type == 'code'}
	<pre class="bg-base-300 p-5">{@html DOMPurify.sanitize(token.text)}</pre>
{:else if token?.type == 'hr'}
	<hr />
{:else if token?.type == 'br'}
	<br />
{:else}
	<span>{@html DOMPurify.sanitize(token?.text)}</span>
{/if}

<style lang="postcss">
	* {
		font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
