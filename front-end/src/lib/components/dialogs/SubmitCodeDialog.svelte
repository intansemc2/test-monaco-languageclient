<script lang="ts">
	let { callback }: { callback: () => Promise<boolean> } = $props();
	let dialog = $state<HTMLDialogElement>();
	let isProcessing = $state<boolean>(false);
	let isSubmitted = $state<boolean>(false);

	// Events
	function closeDialog() {
		dialog?.close();
	}

	async function onAgreeToProcess() {
		const result = await callback();
		if (result) {
			dialog?.close();
			isSubmitted = true;
			return;
		}
		isSubmitted = false;
	}
</script>

<!-- svelte-ignore event_directive_deprecated -->
<button class="btn btn-success btn-sm" on:click={() => dialog?.showModal()}>
	{#if isSubmitted}
		Submitted
	{:else}
		Submit
	{/if}
</button>
<!-- svelte-ignore event_directive_deprecated -->
<dialog bind:this={dialog} class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Submit Code!</h3>
		<p class="py-4">Are you sure to submit the code?</p>
		<div class="flex items-center justify-end gap-1">
			<button
				class="btn btn-success btn-sm flex items-center gap-1"
				on:click={onAgreeToProcess}
				disabled={isProcessing}
			>
				{#if isProcessing}
					<span class="loading loading-spinner loading-lg"></span>
				{/if}
				Ok
			</button>
			<button class="btn btn-outline btn-sm" on:click={closeDialog}>Cancel</button>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
