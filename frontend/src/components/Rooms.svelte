<script>
	import { addRoomModal } from '../stores';
	import AddRoom from './AddRoom.svelte';

	export let rooms;

	let searchQuery = '';
</script>

<div class="flex flex-col">
	<div class="flex flex-row gap-5 mb-5">
		<input
			id="search"
			class="input w-72 rounded-md"
			type="search"
			placeholder="Search"
			autocomplete="off"
			bind:value={searchQuery}
		/>
		<button class="btn bg-primary-500 rounded-md" on:click={() => addRoomModal.set(true)}>
			<span><i class="fa-solid fa-plus" /></span>
		</button>
	</div>
	<div class="flex flex-row gap-5">
		{#each rooms.filter((room) => {
			return room.name.toLowerCase().includes(searchQuery.toLowerCase());
		}) as room}
			<div class="card bg-white shadow-md rounded-lg w-96 p-4">
				<h2 class="text-xl font-bold mb-2">{room.name}</h2>
			</div>
		{/each}
	</div>
	{#if $addRoomModal}
		<div class="fixed inset-0 z-50 flex items-center justify-center">
			<div class="absolute inset-0 bg-gray-500 opacity-10" />
			<AddRoom />
		</div>
	{/if}
</div>
