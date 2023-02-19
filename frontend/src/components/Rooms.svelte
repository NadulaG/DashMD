<script>
	export let rooms;

    let searchQuery = '';
</script>

<div class="flex flex-col">
    <input class="input mb-5 w-72" type="search" placeholder="Search" bind:value={searchQuery} />
	<div class="flex flex-row gap-5">
		{#each rooms.filter((room) => {return room.name.toLowerCase().includes(searchQuery.toLowerCase())}) as room}
			<div class="card bg-white shadow-md rounded-lg w-96 p-4">
				<p>{room.name}</p>
			</div>
		{/each}
	</div>
</div>
