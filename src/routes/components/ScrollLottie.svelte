<script>
	import { onMount } from 'svelte';
	export let path;
	export let containerLottie;

	onMount(() => {
		// Ensure code runs only in browser environment
		if (typeof document !== 'undefined') {
			import('lottie-web').then(({ default: lottie }) => {
				const container = document.getElementById(containerLottie);
				if (!container) return;
				lottie.loadAnimation({
					container,
					renderer: 'svg',
					loop: true,
					autoplay: true,
					path
				});
			});
		}
	});
</script>

<div class="flex w-1/2 items-center justify-center" id={containerLottie} />
