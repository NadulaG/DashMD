<script>
  let currentView = 0;
</script>

<div class="flex flex-col h-screen bg-gray-100 font-sans">
  <div class="flex flex-row flex-1">
    <div class="w-1/5 bg-white shadow-lg">
      <button class="w-4/5 mx-auto my-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold h-16 rounded-md flex items-center justify-center">
        Dashboard
      </button>
      <button class="w-4/5 mx-auto my-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold h-16 rounded-md flex items-center justify-center">
        Patients
      </button>
      <button class="w-4/5 mx-auto my-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold h-16 rounded-md flex items-center justify-center">
        Rooms
      </button>
    </div>
    <div class="w-4/5 bg-gray-200 p-4">
      <h2 class="text-gray-700 text-2xl font-semibold mb-4">Patient List</h2>
      <div class="bg-gray-200 w-full h-12 mb-4 rounded-md shadow-md flex items-center px-4">
        <input type="text" class="w-full left-0 text-gray-700 rounded-md border-0 placeholder-gray-400 focus:outline-none" placeholder="Search Patients...">
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- loop through patient data and display as divs -->
        <div class="bg-white rounded-md shadow-md p-4">
          <h3 class="text-gray-800 text-lg font-semibold">Nadula</h3>
          <p class="text-gray-600">Age: 30</p>
          <p class="text-gray-600">Gender: Male</p>
          <p class="text-gray-600">Address: 123 Main St.</p>
        </div>
        <!-- repeat divs for each patient -->
      </div>
    </div>
  </div>
</div>
