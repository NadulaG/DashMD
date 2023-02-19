<title>Register | DashMD</title>

<div class="flex justify-center items-center h-screen">
	<div class="w-96 p-6 bg-white rounded shadow-md">
		<h3 class="text-2xl font-medium mb-4">Register</h3>
		<form action="?/register" method="post" class="flex flex-col gap-4">
			<div class="form-control">
				<label for="name" class="block font-medium">Name</label>
				<input type="text" name="name" required class="w-full border-gray-300 rounded-lg py-2 px-3">
			</div>
			<div class="form-control">
				<label for="email" class="block font-medium">Email</label>
				<input type="email" name="email" required class="w-full border-gray-300 rounded-lg py-2 px-3">
			</div>
			<div class="form-control">
				<label for="password" class="block font-medium">Password</label>
				<input type="password" name="password" minlength="8" required class="w-full border-gray-300 rounded-lg py-2 px-3">
			</div>
			<div class="form-control">
				<label for="passwordConfirm" class="block font-medium">Confirm Password</label>
				<input type="password" name="passwordConfirm" minlength="8" required class="w-full border-gray-300 rounded-lg py-2 px-3">
			</div>
			<div class="flex justify-end">
				<a href="/auth/login" class="text-sm text-blue-500 hover:underline">Already registered?</a>
			</div>
			<button type="submit" class="btn variant-filled-primary w-full mt-4 rounded-lg">Register</button>
		</form>
	</div>
</div>
