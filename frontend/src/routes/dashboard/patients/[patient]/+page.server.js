/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	const patient = await locals.pb.collection('patients').getOne(params.patient);

	return { patient: structuredClone(patient) };
}
