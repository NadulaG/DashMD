/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const patients = await locals.pb.collection('patients').getFullList();
    const rooms = await locals.pb.collection('rooms').getFullList();

	return { patients: structuredClone(patients), rooms: structuredClone(rooms) };
}
