<script>
	import Project from '$lib/components/Project.svelte';
	import projects from '$lib/data/projects';
</script>

{#each projects as project}
	<Project
		title={project.title}
		link={project.link}
		github={project.github}
		text={project.text}
		tech={project.tech}
	/>
{/each}
