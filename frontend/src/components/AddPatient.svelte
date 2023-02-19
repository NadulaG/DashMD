<script>
	import { addPatientModal } from '../stores';
</script>

<div class="bg-white rounded-lg p-8 z-50">
	<h2 class="text-xl font-bold mb-4">Add New Patient</h2>
	<button
		class="btn bg-primary-500 text-white px-4 py-2 rounded-md mt-4"
		on:click={() => {
			addPatientModal.set(false);
		}}>Close</button
	>
</div>
