<script>
	import { page } from '$app/stores';
	import { Nav, NavItem } from '$lib/components';

	// $: console.log($page.data);
</script>

<Nav>
	<NavItem href="/">Home</NavItem>
	{#if $page.data.session.user}
		<NavItem href="/todos">Todos</NavItem>
		<NavItem href="/logout">Logout</NavItem>
	{:else}
		<NavItem href="/login">Login</NavItem>
		<NavItem href="/register">Register</NavItem>
	{/if}
</Nav>

<slot />
