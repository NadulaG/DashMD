<script>
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import Nav from '../components/Nav.svelte';
	export let data;
</script>

<div class="bg-gray-100 min-h-full">
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

	{#if data.user}
		<footer class="bg-white w-full h-16 flex items-center justify-center absolute bottom-0 shadow-lg">
			<p class="text-gray-500">Made with ❤️ by <a href="https://github.com/NadulaG" target="_blank" rel="noreferrer">Nadula</a>, <a href="https://github.com/SirTZN" target="_blank" rel="noreferrer">Eric</a> & <a href="https://github.com/3thanB3ear" target="_blank" rel="noreferrer">Ethan</a></p>
		</footer>
	{/if}
</div>
