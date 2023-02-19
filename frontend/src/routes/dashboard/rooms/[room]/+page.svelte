<script>
	export let data;
  </script>
  
  <div class="flex flex-col items-center mt-8">
	<h1 class="text-2xl font-bold mb-4">{data.room.name}</h1>
	<div class="bg-gray-200 p-6 rounded-md w-full max-w-xl shadow-lg">
	  <div>
		<h2 class="text-lg font-bold mb-2">Room Number:</h2>
		<p>{data.room.number}</p>
	  </div>
	  <br>
	  <div>
		<h2 class="text-lg font-bold mb-2">Type:</h2>
		<p>{data.room.type}</p>
	  </div>
	  <br>
	  <div>
		<h2 class="text-lg font-bold mb-2">Description:</h2>
		<p>{data.room.description}</p>
	  </div>
	  <br>
	  <div>
		<h2 class="text-lg font-bold mb-2">Equipment:</h2>
		<p>{data.room.equipment}</p>
	  </div>
	  <br />
	  <hr />
	  <br />
	  <button class="relative btn bg-primary-500 rounded-md text-white">
		<i class="fa-solid fa-pen-to-square mr-2" /> Edit
	  </button>
	  <button class="relative btn bg-error-500 rounded-md text-white">
		<i class="fa-solid fa-trash mr-2" /> Delete
	  </button>
	</div>
  </div>
  