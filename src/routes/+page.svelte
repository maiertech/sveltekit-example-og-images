<script>
	let title = 'SvelteKit Open Graph image test';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:title" content={title} />
	<meta property="og:image" content="https://og-images.maier.tech/og-images/hello-og-image" />
</svelte:head>

<h1>OG images</h1>

<ul>
	<li><a href="/hello-og-image">hello-og-image</a></li>
</ul>
