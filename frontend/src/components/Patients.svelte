<script>
	export let patients;

	let searchQuery = '';

    let showAddPatientModal = false;

	const getAge = (dateString) => {
		const today = new Date();
		const birthDate = new Date(dateString);
		const months1 = today.getFullYear() * 12 + today.getMonth();
		const months2 = birthDate.getFullYear() * 12 + birthDate.getMonth();
		const diff = months1 - months2;
		return { years: (diff - (diff % 12)) / 12, months: diff % 12 };
	};
</script>

<div class="flex flex-col">
	<div class="flex flex-row gap-5 mb-5">
		<input
			id="search"
			class="input w-72 rounded-md"
			type="search"
			placeholder="Search"
			bind:value={searchQuery}
		/>
		<button class="btn bg-primary-500 rounded-md" on:click={() => {showAddPatientModal = true}}>
			<span><i class="fa-solid fa-plus" /></span>
		</button>
	</div>
	<div class="flex flex-row flex-wrap gap-5">
		{#each patients.filter((patient) => patient.first_name
					.toLowerCase()
					.includes(searchQuery.toLowerCase()) || patient.last_name
					.toLowerCase()
					.includes(searchQuery.toLowerCase())) as patient}
			<div class="card bg-white shadow-md rounded-lg w-96">
				<div class="p-4">
					<h2 class="text-xl font-bold mb-2">{patient.last_name}, {patient.first_name}</h2>
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
				</div>
			</div>
		{/each}
	</div>
</div>
