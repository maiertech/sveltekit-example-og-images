<script>
	let title = 'SvelteKit Open Graph image test';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:title" content={title} />
	<meta property="og:image" content="https://og-images.maier.tech/og-images/hello-og-image.png" />
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
