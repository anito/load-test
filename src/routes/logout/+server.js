import { redirect } from '@sveltejs/kit';
import { SESSION_KEY } from '$lib/constants';

/** @type {import("@sveltejs/kit").RequestHandler} */
export async function GET({ cookies }) {
	await cookies.set(SESSION_KEY, '', {
		path: '/',
		expires: new Date(0)
	});
	throw redirect(302, '/login');
}
