import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const patients = await locals.pb.collection('patients').getFullList();
	const rooms = await locals.pb.collection('rooms').getFullList();
	const equipment = await locals.pb.collection('equipment').getFullList();

	return { patients: structuredClone(patients), rooms: structuredClone(rooms), equipment: structuredClone(equipment) };
}

export const actions = {
	addPatient: async ({ request, locals }) => {
		const { first_name, last_name, date_of_birth, sex } = Object.fromEntries(
			await request.formData()
		);
		const binarySex = sex == 'Male' ? 1 : 0;
		let patient;

		try {
			patient = await locals.pb.collection('patients').create({
				first_name,
				last_name,
				date_of_birth,
				binarySex
			});
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong creating the patient');
		}

		throw redirect(303, `/dashboard/patients/${patient.id}`);
	},

	addRoom: async ({ request, locals }) => {
		const { name } = Object.fromEntries(await request.formData());
		let room;

		try {
			room = await locals.pb.collection('rooms').create({
				name
			});
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong creating the room');
		}

		throw redirect(303, `/dashboard/rooms/${room.id}`);
	}
};
