import { dev } from '$app/environment';

/**
 *
 * @param {any} atts
 * @returns
 */
async function send(atts) {
	/** @type {{method: string, path: string, data: any, token: string}} */
	const { method, path, data, token } = { ...atts };
	const base = dev ? `https://api.mbp/v1` : `https://api.webpremiere.de/v1`;
	const url = `${base}/${path}`;

	/** @type { {method: string, headers: any, credentials: RequestCredentials | undefined, body?: string  }} */
	const opts = {
		method,
		headers: {
			Accept: 'application/json'
		},
		credentials: 'include'
	};

	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`;
	}

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	return fetch(`${url}`, opts)
		.then((res) => res.text())
		.then((res) => {
			try {
				return JSON.parse(res);
			} catch (reason) {
				console.log('API PARSE ERROR', reason);
			}
		})
		.catch((reason) => {
			console.log('API FETCH ERROR', reason);
		});
}

/**
 *
 * @param {string} path
 * @param {any=} options
 * @returns
 */
export function get(path, options) {
	return send({ method: 'GET', path, ...options });
}

/**
 *
 * @param {string} path
 * @param {any?} options
 * @returns
 */
export function del(path, options) {
	return send({ method: 'DELETE', path, ...options });
}

/**
 *
 * @param {string} path
 * @param {any} options
 * @returns
 */
export function post(path, options) {
	return send({ method: 'POST', path, ...options });
}

/**
 *
 * @param {string} path
 * @param {any} options
 * @returns
 */
export function put(path, options) {
	return send({ method: 'PUT', path, ...options });
}
