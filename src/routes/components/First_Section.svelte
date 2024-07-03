<script>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import Container from './Container.svelte';
	import Lenis from 'lenis';
	import ContainerFirstSection from './ContainerFirstSection.svelte';

	export let trigger_one;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		// Title and lines animation
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger_one,
				start: 'top top',
				end: '+=1400',
				scrub: true,
				ease: 'power1',
				markers: false
			}
		});

		tl.from('.title', {
			y: -30,
			opacity: 0,
			duration: 2
		});

		const tl_line = gsap.timeline({
			scrollTrigger: {
				trigger_one,
				start: 'top top',
				end: '+=1000',
				scrub: true,
				ease: 'power1'
			}
		});

		tl_line.from('.line', {
			scaleX: 0,
			transformOrigin: 'center center',
			duration: 2
		});

		// Photos animation
		const tl_photos = gsap.timeline({
			scrollTrigger: {
				trigger_one,
				start: '+=1',
				end: '+=1200',
				scrub: true
			}
		});

		tl_photos.from('.photos', {
			y: 90,
			opacity: 0,
			delay: 0.5,
			duration: 2
		});

		tl_photos.from('.photo_left', {
			rotate: 0,
			duration: 2,
			delay: -2
		});

		tl_photos.from('.photo_right', {
			rotate: 0,
			duration: 2,
			delay: -2
		});
	});
</script>

<ContainerFirstSection className1={trigger_one}>
	<div class="title flex flex-col items-center text-[#002cc4]">
		<div>
			<div class="line mb-1 h-[.05rem] w-[14rem] origin-center bg-[#002cc4]" />
			<p class="text-center tracking-widest">SAILING INTO HISTORY</p>
			<div class="line mt-1 h-[.05rem] w-[14rem] origin-center bg-[#002cc4]" />
		</div>
		<div class="mt-5 flex flex-col items-center justify-center text-balance text-center">
			<p class="text-2xl font-bold md:text-4xl lg:text-4xl">Abhilash’s Journey</p>
			<p class="text-1xl mt-1 md:text-2xl lg:text-2xl">across the Golden Globe Race</p>
		</div>
	</div>

	<div class="photos relative mt-5 flex items-center justify-center lg:mx-10 xl:mx-40">
		<div class="z-[1] flex">
			<img class="photo_left ml-3 rotate-[-20deg]" src="left_photo.png" alt="" />
		</div>
		<div class="relative flex items-center justify-center">
			<img class="photo_mid w-full" src="mid_photo.png" alt="" />
		</div>
		<div class="z-[1] flex items-center justify-center">
			<img class="photo_right mr-3 rotate-[20deg]" src="right_photo.png" alt="" />
		</div>
	</div>
</ContainerFirstSection>
