<script>
	import Github from 'svelte-bootstrap-icons/lib/Github.svelte';
	import LinkedIn from 'svelte-bootstrap-icons/lib/Linkedin.svelte';
	import EnvelopeFill from 'svelte-bootstrap-icons/lib/EnvelopeFill.svelte';
</script>

<header>
	<h1>Ben Walker</h1>
	<nav>
		<a href="https://github.com/benjiwalker" target="_blank" rel="noreferrer"
			><Github width={24} height={24} /></a
		>
		<a href="https://www.linkedin.com/in/ben-walker-4a631b1b0/" target="_blank" rel="noreferrer"
			><LinkedIn width={24} height={24} /></a
		>
		<a href="mailto:hi@benwalker.dev"><EnvelopeFill width={24} height={24} /></a>
	</nav>
</header>

<style>
	header {
		align-items: center;
		border-bottom: 1px solid #ffffff;
		display: flex;
		justify-content: space-between;
		padding: 1rem 0;
		margin-bottom: 1.5rem;
	}

	a {
		margin-left: 1rem;
	}
</style>
