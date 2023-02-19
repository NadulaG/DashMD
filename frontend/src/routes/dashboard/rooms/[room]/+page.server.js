/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	const room = await locals.pb.collection('rooms').getOne(params.room);

	return { room: structuredClone(room) };
}
