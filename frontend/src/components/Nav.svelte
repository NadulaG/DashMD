<div class="h-16 bg-white drop-shadow-sm flex items-center justify-between px-4 mb-5">
    <div class="flex flex-row gap-1">
        <img class="h-10" src="/favicon.png" alt="Logo" />
        <h1 class="text-red-500 pointer-events-none">MedDash</h1>
    </div>
	<div class="flex items-center space-x-4">
		<button class="px-4 py-2"><p>Notifications</p></button>
		<button class="px-4 py-2"><p>Settings</p></button>
        <form action="/auth/logout" method="post">
            <button class="px-4 py-2 text-lg"><p>Log Out</p></button>
        </form>
    
	</div>
</div>
