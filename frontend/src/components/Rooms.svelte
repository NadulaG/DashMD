<script>
	import { addRoomModal } from '../stores';
	import AddRoom from './AddRoom.svelte';

	export let rooms;
	export let equipment;

	console.log(equipment)

	let searchQuery = '';
</script>

<div class="flex flex-col">
	<div class="flex gap-5 mb-5">
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

	<div class="flex flex-col">
		<div class="flex flex-row flex-wrap gap-5 pb-100 h-[70%] drop-shadow-sm">
			{#each rooms
				.filter((room) => room.name.toLowerCase().includes(searchQuery.toLowerCase()))
				.sort() as room}
				<a class="card bg-white shadow-md rounded-lg w-96 p-4" href="/dashboard/rooms/{room.id}">
					<h2 class="text-xl font-bold mb-2">{room.name}</h2>
					<hr />
					<br />
					<dl class="flex flex-col mb-2">
						<div class="flex items-center">
							<span class="badge bg-primary-500 mr-2 rounded-lg" />
							<dt class="font-semibold">Equipment:</dt>
							{#each room.equipment as _equipment}
								<dd class="ml-2"></dd>
							{/each}
						</div>
						<a href="" class="btn bg-primary-500 w-[100%] h-[40px] mt-4 rounded-md" on:click={() => {}}>
							<button>Assign Patient</button>
						</a>
					</dl>
				</a>
			{/each}
		</div>
	</div>

	{#if $addRoomModal}
		<div class="fixed inset-0 z-50 flex items-center justify-center">
			<div class="absolute inset-0 bg-gray-500 opacity-40" />
			<AddRoom />
		</div>
	{/if}
</div>
