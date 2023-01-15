<script>
	import '$lib/css/reset.css';
	import '$lib/css/global.css';
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div>
	<Header />
	<About />
	<Projects />
	<Footer />
</div>

<svelte:head>
	<title>Ben Walker</title>
	<meta name="description" content="Software Engineer" />
</svelte:head>

<style>
	div {
		max-width: 48rem;
		margin: 0 auto;
		padding: 0 1rem;
	}
</style>
