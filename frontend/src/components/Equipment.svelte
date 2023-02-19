<script>
	import AddEquipment from '/src/components/AddEquipment.svelte';
	import { addEquipmentModal } from '../stores';

	export let equipment;

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
		<button class="btn bg-primary-500 rounded-md" on:click={() => addEquipmentModal.set(true)}>
			<span><i class="fa-solid fa-plus" /></span>
		</button>
	</div>
	<div class="flex flex-row flex-wrap gap-5 h-[60%] pb-[20%] overflow-y-auto drop-shadow-sm">
		{#each equipment.filter((_equipment) => _equipment.name
				.toLowerCase()
				.includes(searchQuery.trim().toLowerCase())) as _equipment}
			<div class="card bg-white shadow-md rounded-lg w-96 p-4 hover:drop-shadow-lg">
				<h2 class="text-xl font-bold mb-2">{_equipment.name}</h2>
				<hr />
				<br />
			</div>
		{/each}
	</div>
	{#if $addEquipmentModal}
		<div class="fixed inset-0 z-50 flex items-center justify-center">
			<div class="absolute inset-0 bg-gray-500 opacity-40" />
			<AddEquipment />
		</div>
	{/if}
</div>
