<script>
	let title = 'SvelteKit Open Graph image test';
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} property="og:title" />
	<meta content="https://og-images.maier.tech/og-image/hello-og-image" property="og:image" />
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
