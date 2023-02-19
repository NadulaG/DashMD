<script>
	export let data;
	import { assignRoomModal } from '../../../../stores';
	import AssignRoom from '../../../../components/AssignRoom.svelte';
</script>

<a href="/dashboard/overview" class="absolute btn bg-primary-500 rounded-md ml-4">
	<i class="fa-solid fa-arrow-left" />
</a>

<div class="flex flex-col items-center mt-8">
	<h1 class="text-2xl font-bold mb-4">{data.room.name}</h1>
	<div class="bg-gray-200 p-6 rounded-md w-full max-w-xl shadow-lg">
		<div>
			<h2 class="text-lg font-bold mb-2">Type:</h2>
			<p>{data.room.type}</p>
		</div>
		<br />
		<div>
			<h2 class="text-lg font-bold mb-2">Capacity:</h2>
			<p>{data.room.capacity} {data.room.capacity > 1 ? 'patients' : 'patient'}</p>
		</div>
		<br />
		<div>
			<dl class="flex flex-col mb-2">
				<h2 class="text-lg font-bold mb-2">Patients:</h2>
				{#each data.patients as patient}
					<div class="flex items-center">
						<span class="badge bg-primary-500 mr-2 rounded-lg" />
						<dd class="ml-2">{patient.first_name} {patient.last_name}</dd>
					</div>
				{/each}
			</dl>
		</div>
		<br />
		<div>
			<dl class="flex flex-col mb-2">
				<h2 class="text-lg font-bold mb-2">Equipment:</h2>
				{#each data.room.equipment.split(', ') as equipment}
					<div class="flex items-center">
						<span class="badge bg-primary-500 mr-2 rounded-lg" />
						<dd class="ml-2">{equipment}</dd>
					</div>
				{/each}
			</dl>
		</div>
		<br />
		<hr />
		<br />
		<button class="relative btn bg-primary-500 rounded-md text-white">
			<i class="fa-solid fa-pen-to-square mr-2" /> Edit
		</button>
		<button class="relative right-0 btn bg-error-500 rounded-md text-white">
			<i class="fa-solid fa-trash mr-2" /> Delete
		</button>
	</div>
	{#if $assignRoomModal}
		<div class="fixed inset-0 z-50 flex items-center justify-center">
			<div class="absolute inset-0 bg-gray-500 opacity-40" />
			<assignRoom />
		</div>
	{/if}
</div>
