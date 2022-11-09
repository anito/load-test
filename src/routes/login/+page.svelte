<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').ActionData} */
	export let form;

	const expires = new Date(Date.now() + 60 * 60 * 1000).toISOString();

	/** @type {string} */
	let username = '';
	/** @type {string} */
	let password = '';

	$: message = form?.credentials ?? form?.invalid ?? '';
	$: form && reset();

	function reset() {
		username = '';
		password = '';
	}
</script>

<h1>Login</h1>
<form use:enhance action="?/login">
	<input type="text" name="username" bind:value={username} />
	<input type="password" name="password" bind:value={password} />
	{#if message}
		<p class="error">{message}</p>
	{/if}
	<button>Submit</button>
	<input type="hidden" name="expires" value={expires} />
</form>
