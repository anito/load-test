<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').ActionData} */
	export let form;

	/** @type {string} */
	let username;
	/** @type {string} */
	let password;
	/** @type {string} */
	let password_repeat;

	$: message = form?.invalid ?? '';
	$: form && reset();

	function reset() {
		username = '';
		password = '';
		password_repeat = '';
	}
</script>

<h1>Register</h1>
<form use:enhance action="?/register">
	<input type="text" name="username" bind:value={username} />
	<input type="password" name="password" bind:value={password} />
	<input type="password" name="password_repeat" bind:value={password_repeat} />
	{#if message}
		<p class="error">{message}</p>
	{/if}
	<button>Register</button>
</form>

<style>
	.error {
		color: red;
	}
</style>
