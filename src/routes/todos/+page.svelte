<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').PageData} */
	export let data;
	/** @type {import('./$types').ActionData} */
	export let form;

	$: console.log(data);
	$: todos = data.todos;
	// $: form && invalidate('app:todos');
</script>

<h1>Todos</h1>
{#if todos.length}
	{#each todos as todo}
		<li>{todo.name}</li>
	{/each}
{:else}
	<p>Nothing to do</p>
{/if}
<form use:enhance>
	<input type="text" name="todo" />
	<button formaction="?/add">Add</button>
</form>
