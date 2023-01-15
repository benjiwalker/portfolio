<script>
	const date = new Date();
	import CCircle from 'svelte-bootstrap-icons/lib/CCircle.svelte';
</script>

<footer>
	<p>Ben Walker <span><CCircle width={14} height={14} /></span> {date.getFullYear()}</p>
</footer>

<style>
	footer {
		position: absolute;
		/* bottom: 0; */
		left: 0;
		text-align: center;
		width: 100%;
		font-size: 0.9rem;
	}

	span {
		margin: 0 5px;
	}
</style>
