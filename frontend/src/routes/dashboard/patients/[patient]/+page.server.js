import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	const patient = await locals.pb.collection('patients').getOne(params.patient);
	const rooms = await locals.pb.collection('rooms').getFullList();

	return { patient: structuredClone(patient), rooms: structuredClone(rooms) };
}

export const actions = {
	assignRoom: async ({ request, locals, params }) => {
		const { room } = Object.fromEntries(await request.formData());

		const roomRecord = await locals.pb.collection('rooms').getOne(room);
		const currentPatients = roomRecord.patients;

		locals.pb.collection('rooms').update(room, {
			patients: [...currentPatients, params.patient]
		});

		const patient = await locals.pb.collection('patients').update(params.patient, {
			admitted: true
		});

		throw redirect(303, `/dashboard/patients/${params.patient}`);
	}
};
