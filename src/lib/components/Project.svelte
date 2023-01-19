<script lang="ts">
	import slugify from 'slugify';
	import ChevronDown from 'svelte-bootstrap-icons/lib/ChevronDown.svelte';
	import Link from 'svelte-bootstrap-icons/lib/Link.svelte';
	import Github from 'svelte-bootstrap-icons/lib/Github.svelte';
	export let title: string, text: string, tech: Array<string>, github: string, link: string;

	let display = false;

	const toggleDisplay = () => {
		display = !display;
	};
</script>

<section class:display>
	<header>
		<nav>
			<h2>{title}</h2>
			{#if github !== ''}
				<a href={github} target="_blank" rel="noreferrer"><Github width={20} height={20} /></a>
			{/if}
			{#if link !== ''}
				<a href={link} target="_blank" rel="noreferrer"><Link width={20} height={20} /></a>
			{/if}
		</nav>
		<button class:rotate={display} on:click={toggleDisplay}>
			<ChevronDown width={25} height={25} fill="white" />
		</button>
	</header>
	{#if display}
		<article>
			<p>{text}</p>
			<dl>
				{#each tech as t}
					<dd class={slugify(t, { lower: true, remove: /[*+~.()'"!:@]/g })}>
						{t}
					</dd>
				{/each}
			</dl>
		</article>
	{/if}
</section>

<style>
	header {
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	nav {
		align-items: center;
		display: flex;
	}

	nav > *:not(:last-child) {
		margin-right: 0.5rem;
	}

	section {
		background: #3639f7;
		border-radius: 5px;
		margin-bottom: 1rem;
		padding: 1rem;
	}

	section:hover {
		background: #2b2dc4;
	}

	.rotate {
		transform: rotate(180deg);
	}

	.display {
		background: #2b2dc4;
	}

	dl {
		display: flex;
		flex-wrap: wrap;
	}

	dl > *:not(:last-child) {
		margin-right: 0.5rem;
	}

	dd {
		border-radius: 5px;
		font-size: 0.8rem;
		padding: 5px;
	}
</style>
