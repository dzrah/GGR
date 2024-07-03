<script>
	// looking for a non-scrubbing version? https://codepen.io/GreenSock/pen/QWYdgjG

	import Container from './Container.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import ScrollLottie from './ScrollLottie.svelte';
	import Lenis from '@studio-freight/lenis';

	export let newUrl;
	export let canvas;
	export let eventDate;
	export let canvasTitle;
	export let canvasParaOne;
	export let NewcontainerLottie;
	export let imageSeq;
	export let trigger;

	onMount(() => {
		const lenis = new Lenis();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		let start = 1,
			end = 91,
			frameCount = end - start + 1,
			urls = new Array(frameCount).fill().map((o, i) => `${newUrl}${start + i}.jpg`);

		// console.log(urls);

		imageSequence({
			urls, // Array of image URLs
			canvas, // <canvas> object to draw images to
			//clear: true, // only necessary if your images contain transparency
			//onUpdate: (index, image) => console.log("drew image index", index, ", image:", image),
			scrollTrigger: {
				trigger,
				start: 'center 0%', // start at the very top
				end: 'bottom', // entire page
				scrub: true, // important!
				pin: `.${trigger}`,
				markers: true
			}
		});

		/*
Helper function that handles scrubbing through a sequence of images, drawing the appropriate one to the provided canvas. 
Config object properties: 
- urls [Array]: an Array of image URLs
- canvas [Canvas]: the <canvas> object to draw to
- scrollTrigger [Object]: an optional ScrollTrigger configuration object like {trigger: "#trigger", start: "top top", end: "+=1000", scrub: true, pin: true}
- clear [Boolean]: if true, it'll clear out the canvas before drawing each frame (useful if your images contain transparency)
- paused [Boolean]: true if you'd like the returned animation to be paused initially (this isn't necessary if you're passing in a ScrollTrigger that's scrubbed, but it is helpful if you just want a normal playback animation)
- fps [Number]: optional frames per second - this determines the duration of the returned animation. This doesn't matter if you're using a scrubbed ScrollTrigger. Defaults to 30fps.
- onUpdate [Function]: optional callback for when the Tween updates (probably not used very often). It'll pass two parameters: 1) the index of the image (zero-based), and 2) the Image that was drawn to the canvas

Returns a Tween instance
*/
		function imageSequence(config) {
			let playhead = { frame: 0 },
				canvas = gsap.utils.toArray(config.canvas)[0] || console.warn('canvas not defined'),
				ctx = canvas.getContext('2d'),
				curFrame = -1,
				onUpdate = config.onUpdate,
				images,
				updateImage = function () {
					let frame = Math.round(playhead.frame);
					if (frame !== curFrame) {
						// only draw if necessary
						config.clear && ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);
						ctx.drawImage(images[Math.round(playhead.frame)], 0, 0);
						curFrame = frame;
						onUpdate && onUpdate.call(this, frame, images[frame]);
					}
					console.log(canvas.width, canvas.height);
				};
			images = config.urls.map((url, i) => {
				let img = new Image();
				img.src = url;
				i || (img.onload = updateImage);
				return img;
			});
			return gsap.to(playhead, {
				frame: images.length - 1,
				ease: 'none',
				onUpdate: updateImage,
				duration: images.length / (config.fps || 30),
				paused: !!config.paused,
				scrollTrigger: config.scrollTrigger
			});
		}
	});
</script>

<Container className={trigger}>
	<div class="flex flex-col items-center justify-center">
		<div class="flex flex-col items-center justify-center">
			<div class="flex flex-col items-center justify-center">
				<p class="">{eventDate}</p>
				<div class="flex w-24 flex-col items-center justify-center">
					<ScrollLottie path="./CirclePop.json" containerLottie={NewcontainerLottie} />
					<div class="flex h-32 w-[1.5px] items-start justify-center bg-black"></div>
				</div>
			</div>
		</div>
		<div
			class=" flex w-[60%] flex-col-reverse items-center justify-center text-balance md:flex-col-reverse lg:flex-col-reverse xl:flex-row"
		>
			<div
				class="flex flex-col items-center justify-center md:mr-0 md:items-center lg:mr-0 lg:items-center xl:mr-32 xl:items-start"
			>
				<h2
					class="mt-4 text-center text-3xl font-bold uppercase text-bayanat-blue xl:mb-7 xl:mt-0 xl:text-left xl:text-5xl"
				>
					{canvasTitle}
				</h2>
				<p class="mb-2 mt-2 text-center text-[1rem] xl:text-start">
					{canvasParaOne}
				</p>
			</div>
			<canvas
				id={imageSeq}
				width="787px"
				height="787px"
				class="w-[16rem] border border-black md:w-[25rem] lg:w-[25rem] xl:w-[30rem]"
			></canvas>
		</div>
		<div class="h-36 w-[1.5px] bg-black"></div>
	</div>
</Container>
