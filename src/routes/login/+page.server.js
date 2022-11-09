import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @type {import("@sveltejs/kit").Action} */
const login = async ({ locals, request }) => {
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');
	const _expires = data.get('expires');

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return invalid(400, { invalid: 'Username and password required' });
	}

	const res = await api.post('users/login', {
		data: { username, password }
	});
	const message = res.data.message || res.message;
	if (res.success) {
		const user = res.data.user;
		await locals.session.set({ user, _expires });
	} else {
		return invalid(400, { credentials: message });
	}

	// redirect the user
	throw redirect(302, '/todos');
};

/** @type {import("@sveltejs/kit").Actions} */
export const actions = {
	login
};
