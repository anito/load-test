<script>
	import { page } from '$app/stores';

	export let href = '.';

	$: active = $page.route.id === href;
</script>

<li>
	<a {href} class:active>
		<slot />
	</a>
</li>

<style>
	.active {
		color: red;
	}
</style>
