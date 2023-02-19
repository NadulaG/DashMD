<script>
	import { assignRoomModal } from '../stores';
	import Svelecte from 'svelecte';

	export let patients;
	export let rooms;

	let roomList = [];

	for (let room of rooms) {
		roomList.push({
			id: room.id,
			name: room.name
		});
	}

	let selectedRoom;
</script>

<form class="bg-white rounded-lg p-8 z-50" action="?/assignRoom" method="post">
	<input type="hidden" name="room" bind:value={selectedRoom} />

	<h2 class="text-xl font-bold mb-4">Assign Patient</h2>

	<label for="country">Select a Room</label>
	<Svelecte
		options={roomList}
		inputId="room_selection"
		bind:value={selectedRoom}
		placeholder="Room"
	/>

	<div class="flex justify-end mt-6 space-x-4">
		<button
			class="btn bg-error-500 text-white px-4 py-2 rounded-md"
			on:click={() => assignRoomModal.set(false)}>Close</button
		>
		<button class="btn bg-primary-500 text-white px-4 py-2 rounded-md" type="submit">Submit</button>
	</div>
</form>
