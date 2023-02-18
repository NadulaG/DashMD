import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (!locals?.pb.authStore.isValid) {
		throw redirect(303, '/auth/login');
	}
}
