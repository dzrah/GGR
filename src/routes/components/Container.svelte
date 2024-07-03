<script>
	export let className = '';
</script>

<!-- <div class="mx-5 flex h-screen w-3/4 max-w-[1280px] flex-col"></div> -->
<div
	class={`${className} mx-[3rem] flex h-dvh flex-col items-center justify-center text-balance lg:mx-[10rem] xl:mx-[10rem] `}
>
	<slot></slot>
</div>
