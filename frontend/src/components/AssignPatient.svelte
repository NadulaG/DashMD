<script>
	import { assignPatientModal } from '../stores';

	export let room;
    export let patients;

	let selectedPatient;
</script>

<form class="bg-white rounded-lg p-8 z-50" action="?/addPatient" method="post">
	<h2 class="text-xl font-bold mb-4">Assign Patient</h2>
	<select class="select" multiple>
		{#each patients as patient}
			<option value={patient.id}>{patient.first_name} {patient.last_name} ({patient.id})</option>
		{/each}
	</select>
	<div class="flex justify-end mt-6 space-x-4">
		<button
			class="btn bg-error-500 text-white px-4 py-2 rounded-md"
			on:click={() => assignPatientModal.set(false)}>Close</button
		>
		<button class="btn bg-primary-500 text-white px-4 py-2 rounded-md" type="submit">Submit</button>
	</div>
</form>
