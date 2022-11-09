import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @type {import("@sveltejs/kit").Action} */
const register = async ({ request }) => {
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');
	const password_repeat = data.get('password_repeat');

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return invalid(400, { invalid: 'Username and password required' });
	}
	if (password !== password_repeat) {
		return invalid(400, { invalid: 'Passwords do not match' });
	}

	/** @type {import('$lib/types').Group[]} */
	const groups = await api.get('groups').then((res) => res.data);
	/** @type {import('$lib/types').Group | undefined} */
	const group = groups.find((val) => val.name === 'User');

	const res = await api
		.post('users', {
			data: { username, password, group_id: group?.id }
		})
		.catch((reason) => console.error(reason));
	if (res.success) throw redirect(303, '/login');

	const message = res.data?.message || res.message;
	return invalid(400, { invalid: message });
};

/** @type {import("@sveltejs/kit").Actions} */
export const actions = {
	register
};
