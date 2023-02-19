<script>
	import AddPatient from '/src/components/AddPatient.svelte';
	import { addPatientModal } from '../stores';

	export let patients;

	let searchQuery = '';

	const getAge = (dateString) => {
		const today = new Date();
		const birthDate = new Date(dateString);
		const months1 = today.getFullYear() * 12 + today.getMonth();
		const months2 = birthDate.getFullYear() * 12 + birthDate.getMonth();
		const diff = months1 - months2;
		return {
			years: (diff - (diff % 12)) / 12,
			months: diff % 12
		};
	};
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
		<button class="btn bg-primary-500 rounded-md" on:click={() => addPatientModal.set(true)}>
			<span><i class="fa-solid fa-user-plus" /></span>
		</button>
	</div>
	<div class="flex flex-row flex-wrap gap-5 h-[60%] pb-[26%] overflow-y-auto drop-shadow-sm">
		{#each patients.filter((patient) => (patient.first_name + ' ' + patient.last_name)
				.toLowerCase()
				.includes(searchQuery.trim().toLowerCase())) as patient}
			<a
				class="card bg-white shadow-md rounded-lg w-96 p-4 hover:drop-shadow-lg"
				href="/dashboard/patients/{patient.id}"
			>
				<h2 class="text-xl font-bold mb-2">
					{patient.last_name}, 
					{patient.first_name}
					{patient.middle_initial ? `${patient.middle_initial}.` : ''}
				</h2>
				<hr />
				<br />
				<dl class="flex flex-col mb-2">
					<div class="flex items-center">
						<span class="badge bg-primary-500 mr-2 rounded-lg" />
						<dt class="font-semibold">Date of Birth:</dt>
						<dd class="ml-2">{patient.date_of_birth.split(' ')[0]}</dd>
					</div>
					<div class="flex items-center">
						<span class="badge bg-primary-500 mr-2 rounded-lg" />
						<dt class="font-semibold">Age:</dt>
						<dd class="ml-2">
							{getAge(patient.date_of_birth.split(' ')[0]).years} years {getAge(
								patient.date_of_birth.split(' ')[0]
							).months} months
						</dd>
					</div>
					<div class="flex items-center">
						<span class="badge bg-primary-500 mr-2 rounded-lg" />
						<dt class="font-semibold">Sex:</dt>
						<dd class="ml-2">{patient.sex == 0 ? 'Female' : 'Male'}</dd>
					</div>
				</dl>
			</a>
		{/each}
	</div>
	{#if $addPatientModal}
		<div class="fixed inset-0 z-50 flex items-center justify-center">
			<div class="absolute inset-0 bg-gray-500 opacity-40" />
			<AddPatient />
		</div>
	{/if}
</div>
