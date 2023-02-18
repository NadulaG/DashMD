<script>
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import Nav from '../components/Nav.svelte';
	export let data;
</script>

<div class="bg-gray-100">
	{#if data.user}
		<!-- <div class="w-full">
			<nav class="navbar">
				<div class="justify-end flex flex-row gap-5 mr-5 mt-5 mb-5">
					<form action="/auth/logout" method="post">
						<button class="top-[50%] btn variant-filled-primary">Log out</button>
					</form>
				</div>
			</nav>
		</div> -->

		<Nav />
	{/if}

	<slot />
</div>
