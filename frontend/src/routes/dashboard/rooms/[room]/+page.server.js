/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	const room = await locals.pb.collection('rooms').getOne(params.room);
	const patients = await locals.pb.collection('patients').getFullList();

	let patientsInRoom = [];

	for (let patient of patients) {
		if (room.patients.includes(patient.id)) {
			patientsInRoom.push(patient);
		}
	}

	return { room: structuredClone(room), patients: structuredClone(patientsInRoom) };
}
