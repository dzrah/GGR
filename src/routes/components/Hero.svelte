<script>
	import ScrollLottie from './ScrollLottie.svelte';
	// $: console.log(path, containerLottie);
</script>

<div
	class="flex h-svh min-h-screen flex-1 items-center justify-center bg-[url('Hero.jpg')] bg-cover bg-[left] md:bg-[center_left] lg:justify-end"
>
	<div class="m-0 flex flex-col items-center justify-center md:mr-0 lg:mr-64">
		<a href="http://www.bayanat.ai">
			<img class="mb-9 h-auto w-auto" src="./Logo.png" alt="" />
		</a>
		<div class="flex">
			<h1 class="p-3 text-center text-6xl font-[600] text-white lg:text-7xl">
				AROUND <br /> THE WORLD <br />AND BACK
			</h1>
		</div>
		<div class="mb-9 mt-9 h-24 w-0.5 bg-white"></div>
		<div class="flex items-center justify-center">
			<ScrollLottie path="./scroll.json" containerLottie="lottie-container" />
		</div>
		<p class="mt-7 font-extralight text-white">Scroll down</p>
	</div>
</div>
