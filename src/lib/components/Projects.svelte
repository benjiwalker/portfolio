<script>
	import Project from '$lib/components/Project.svelte';

	const projects = [
		{
			title: 'Ormside Projects',
			link: 'https://ormside.co.uk',
			github: '',
			text: 'I designed and built the website for arts and event space Ormside Projects. The build requirements were for the site to be quick to update with new event listings, and expandable as their business grew.',
			tech: ['Gatsby', 'Typescript', 'GraphQL', 'Node.js', 'Contentful', 'Netlify']
		},
		{
			title: 'CYLNDR',
			link: '',
			github: '',
			text: 'I designed a web app for advertising agency CYLNDR. The web app linked the API’s of the different workflow services, such as Google Sheets, Ganttic and Dropbox, to combine separate tasks into one task.',
			tech: ['React', 'Javascript', 'Material UI', 'Node.js', 'Firebase']
		},
		{
			title: 'Dub Siren',
			github: 'https://github.com/benjiwalker/dub-siren',
			link: 'https://dubsiren.web.app/',
			text: 'A broswer based version of the classic Dub Siren.',

			tech: ['React', 'Typescript', 'Tone.js']
		},
		{
			title: 'Disclist',
			github: 'https://github.com/benjiwalker/disclist',
			link: 'https://disclist.netlify.app/',
			text: 'A web app that displays all the YouTube videos linked to an artist page on the vinyl marketplace website Discogs. The app is designed to create a beter user experience for listening to an artists full discography.',

			tech: ['Svelte', 'Typescript', 'Node.js', 'Netlify']
		}
	];
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
