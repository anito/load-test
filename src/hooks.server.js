import { dev } from '$app/environment';
import { handleSession } from 'svelte-kit-cookie-session';
import { SESSION_KEY } from '$lib/constants';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = handleSession(
	{
		key: SESSION_KEY,
		secret: 'ALKDSFH§%&24LKFDJSD/&$§&ÖLDKFJSDL§&%$&=&=SLKAF'
	},
	async ({ event, resolve }) => {
		dev && (process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0');
		return await resolve(event);
	}
);

/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch }) {
	return fetch(request);
}

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error, event }) {
	console.log('ERROR (hooks.js)', error, event);
}
