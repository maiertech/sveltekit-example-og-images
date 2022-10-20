<script>
	import Card from '$lib/templates/hello-og-image.svelte';
</script>

<svelte:head>
	<meta property="og:image" content="https://og-images.maier.tech/og-images/hello-og-image" />
</svelte:head>

<div class="wrapper">
	<div class="card">
		<Card />
	</div>
	<a href="/og-images/hello-og-image" download>Download</a>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.card {
		width: 1200px;
		height: 675px;
	}
</style>
