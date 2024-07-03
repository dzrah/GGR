<script>
	export let className1 = '';
</script>

<!-- <div class="mx-5 flex h-screen w-3/4 max-w-[1280px] flex-col"></div> -->
<div
	class={`${className1} mx-[3rem] flex min-h-screen flex-col items-center justify-end text-balance pt-[-4500px] lg:mx-[10rem]`}
>
	<slot></slot>
</div>
