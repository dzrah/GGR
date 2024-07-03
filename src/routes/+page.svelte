<script>
	import { onMount, onDestroy } from 'svelte';
	import Lenis from '@studio-freight/lenis';
	import FirstSection from './components/First_Section.svelte';
	import Hero from './components/Hero.svelte';
	import Canvas from './components/Canvas.svelte';

	let lenis;

	onMount(() => {
		const lenis = new Lenis({
			// lerp: 0.05,
			// smooth: true
		});

		// lenis.on('scroll', (e) => {
		// 	console.log(lenis.velocity);
		// });

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	// onDestroy(() => {
	// 	if (lenis) lenis.onDestroy();
	// });
</script>

<Hero />
<FirstSection trigger_one="trigger_photo" />
<Canvas
	newUrl="Gipsy/Comp"
	canvas="#image-sequence-01"
	imageSeq="image-sequence-01"
	eventDate="October, 1980"
	canvasTitle="GIPSY MOTH IV"
	canvasParaOne="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis totam quam dolore at
					doloremque dolorum tempora obcaecati officia porro,"
	NewcontainerLottie="lottie-container-1"
	trigger="trigger_01"
/>
<Canvas
	newUrl=""
	canvas="#image-sequence-02"
	imageSeq="image-sequence-02"
	eventDate="October, 1980"
	canvasTitle="GIPSY MOTH IV"
	canvasParaOne="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis totam quam dolore at
					doloremque dolorum tempora obcaecati officia porro,"
	NewcontainerLottie="lottie-container-2"
	trigger="trigger_02"
/>
