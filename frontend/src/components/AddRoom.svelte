<script>
	import { addRoomModal } from '../stores';
</script>

<form class="bg-white rounded-lg p-8 z-50" action="?/addRoom" method="post">
	<h2 class="text-xl font-bold mb-4">Add New Room</h2>
	<div class="space-y-4">
		<div class="flex flex-col">
            <label for="name" class="text-gray-700">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter room name"
                required
                autocomplete="off"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
            />
        </div>
	</div>
	<div class="flex justify-end mt-6 space-x-4">
		<button
			class="btn bg-error-500 text-white px-4 py-2 rounded-md"
			on:click={() => addRoomModal.set(false)}>Close</button
		>
		<button class="btn bg-primary-500 text-white px-4 py-2 rounded-md" type="submit">Submit</button>
	</div>
</form>
