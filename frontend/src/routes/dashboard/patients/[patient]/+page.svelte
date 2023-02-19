<script>
	export let data;
	import { assignRoomModal } from '../../../../stores';
	import AssignRoom from '../../../../components/AssignRoom.svelte';
</script>

<a href="/dashboard/overview" class="absolute btn bg-primary-500 rounded-md ml-4">
	<i class="fa-solid fa-arrow-left" />
</a>

<div class="flex flex-col items-center mt-8">
	<h1 class="text-2xl font-bold mb-4">
		{data.patient.first_name}
		{data.patient.middle_initial ? `${data.patient.middle_initial}.` : ''}
		{data.patient.last_name}
        <span class="badge variant-filled-primary align-top rounded-md">{data.patient.admitted ? "Admitted" : "Discharged"}</span>
	</h1>

	<div class="grid grid-cols-2">
		<!-- Add content here if needed -->
	</div>

	<div class="bg-gray-200 p-6 rounded-md w-full max-w-xl shadow-lg">
		<div class="sm:flex sm:justify-between mb-6">
			<div class="sm:w-1/2 mb-4 sm:mb-0">
				<h2 class="text-lg font-bold mb-2">Date of Birth:</h2>
				<p>{new Date(data.patient.date_of_birth).toLocaleDateString()}</p>
			</div>
			<div class="sm:w-1/2">
				<h2 class="text-lg font-bold mb-2">Date Admitted:</h2>
				<p>{new Date(data.patient.admitted).toLocaleDateString()}</p>
			</div>
		</div>

		<div class="mb-4">
			<h2 class="text-lg font-bold mb-2">Sex:</h2>
			<p>{data.patient.sex === 0 ? 'Female' : 'Male'}</p>
		</div>

		<div class="mb-4">
			<h2 class="text-lg font-bold mb-2">Reason for Admission:</h2>
			<p>{data.patient.admission_reason}</p>
		</div>

		<div class="mb-4">
			<h2 class="text-lg font-bold mb-2">Severity:</h2>
			<p>{data.patient.severity}</p>
		</div>

		<div class="flex justify-end space-x-2">
			<button
				class="btn left-0 ml-4 bg-success-600 rounded-md text-white"
				on:click={() => {
					assignRoomModal.set(true);
				}}
			>
				<i class="fa-solid fa-person-booth mr-2" /> Assign to Room
			</button>
			<button class="btn bg-secondary-700 rounded-md text-white">
				<i class="fa-solid fa-pen-to-square mr-2" /> Edit
			</button>
			<button class="btn bg-error-500 rounded-md text-white">
				<i class="fa-solid fa-trash mr-2" /> Delete
			</button>
			<button class="btn bg-primary-500 rounded-md text-white">
				<i class="fa-solid fa-right-from-bracket mr-2" /> Discharge
			</button>
		</div>
	</div>
	{#if $assignRoomModal}
		<div class="fixed inset-0 z-50 flex items-center justify-center">
			<div class="absolute inset-0 bg-gray-500 opacity-40" />
			<AssignRoom rooms={data.rooms} />
		</div>
	{/if}
</div>
