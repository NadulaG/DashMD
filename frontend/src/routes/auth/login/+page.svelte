<title>Login | DashMD</title>

<div class="flex justify-center items-center h-screen">
	<div class="w-96 p-6 bg-white rounded shadow-md">
		<h3 class="text-2xl font-medium mb-4">Log in</h3>
		<form action="?/login" method="post" class="flex flex-col gap-4">
			<div class="form-control">
				<label for="email" class="block font-medium">Email</label>
				<input type="email" name="email" required class="w-full border-gray-300 rounded-lg py-2 px-3">
			</div>
			<div class="form-control">
				<label for="password" class="block font-medium">Password</label>
				<input type="password" name="password" minlength="8" required class="w-full border-gray-300 rounded-lg py-2 px-3">
			</div>
            <div class="flex justify-start">
                <a href="/auth/reset-password" class="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
			<button type="submit" class="btn variant-filled-primary rounded-lg w-full mt-1">Log in</button>
		</form>
	</div>
</div>
