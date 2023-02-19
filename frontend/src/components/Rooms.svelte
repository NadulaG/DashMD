<script>
	import { dataTableHandler } from '@skeletonlabs/skeleton';
	import { addRoomModal, assignPatientModal } from '../stores';
	import AddRoom from './AddRoom.svelte';
	import AssignPatient from '/src/components/AssignPatient.svelte';

	export let rooms;
	export let equipment;
	export let patients;

	let selectedRoom;

	let searchQuery = '';
	AssignPatient;
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
		<!-- <button class="btn bg-primary-500 rounded-md" on:click={() => addRoomModal.set(true)}>
			<span><i class="fa-solid fa-plus" /></span>
		</button> -->
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
								<dd class="ml-2">{room.equipment}</dd>
						</div>
						<a
							href="/"
							class="btn bg-primary-500 w-[100%] h-[40px] mt-4 rounded-md"
							on:click={() => {
								selectedRoom = room;
								assignPatientModal.set(true);
							}}
						>
							<button class="text-white">Assign Patient</button>
						</a>
					</dl>
				</a>
			{/each}
		</div>
	</div>

	{#if $assignPatientModal}
		<div class="fixed inset-0 z-50 flex items-center justify-center">
			<div class="absolute inset-0 bg-gray-500 opacity-40" />
			<AssignPatient room={selectedRoom} {patients} />
		</div>
	{/if}
</div>

<!--  -->
