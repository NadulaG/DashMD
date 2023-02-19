<script>
	import { addPatientModal } from '../stores';
</script>

<form class="bg-white rounded-lg p-8 z-50" action="?/addPatient" method="post">
	<h2 class="text-xl font-bold mb-4">Add New Patient</h2>
	<div class="space-y-4">
		<div class="grid grid-cols-2 gap-4">
			<div class="flex flex-col">
				<label for="first-name" class="text-gray-700">First Name</label>
				<input
					id="first-name"
					name="first_name"
					type="text"
					placeholder="Enter first name"
					required
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
				/>
			</div>
			<div class="flex flex-col">
				<label for="last-name" class="text-gray-700">Last Name</label>
				<input
					id="last-name"
					name="last_name"
					type="text"
					placeholder="Enter last name"
					required
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
				/>
			</div>
		</div>
		<div class="flex flex-col">
			<label for="dob" class="text-gray-700">Date of Birth</label>
			<input
				id="dob"
				name="date_of_birth"
				type="date"
				required
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
			/>
		</div>
		<div class="flex flex-col">
			<label for="sex" class="text-gray-700">Sex</label>
			<select
				id="sex"
				name="sex"
				required
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
			>
				<option>Male</option>
				<option>Female</option>
			</select>
		</div>
	</div>
	<div class="flex justify-end mt-6 space-x-4">
		<button
			class="btn bg-error-500 text-white px-4 py-2 rounded-md"
			on:click={() => addPatientModal.set(false)}>Close</button
		>
		<button class="btn bg-primary-500 text-white px-4 py-2 rounded-md" type="submit">Submit</button>
	</div>
</form>
