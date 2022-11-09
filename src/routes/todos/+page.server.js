import * as api from '$lib/api';
import { invalid } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, depends }) {
	/** @type {import('$lib/types').Todo[]} */
	let todos = [];
	/** @type {{id: string, token: string}} */
	const { id, token } = { ...locals.session.data.user };
	// const res = await api.get(`todos?token=${token}`);
	const res = await api.get(`users/${id}?token=${token}`);
	if (res.success) {
		todos = [...res.data.todos];
	}

	depends('app:todos');
	return { todos };
}

/** @type {import("@sveltejs/kit").Action} */
const add = async ({ request, locals }) => {
	const data = await request.formData();
	const name = data.get('todo');
	if (!name) {
		return invalid(402, { invalid: true });
	}
	/** @type {{token: string}} */
	const { token } = { ...locals.session.data.user };
	const todo = { name, user_id: locals.session.data.user.id, done: false };
	const res = await api.post('todos', { data: todo, token });
	if (!res.success) {
		const message = res.data?.message || res.message;
		return invalid(402, { invalid: message });
	}
};
/** @type {import("@sveltejs/kit").Action} */
// const edit = async ({ request }) => {};
/** @type {import("@sveltejs/kit").Action} */
// const del = async ({ request }) => {};

/** @type {import("@sveltejs/kit").Actions} */
export const actions = {
	add
	// edit,
	// del
};
