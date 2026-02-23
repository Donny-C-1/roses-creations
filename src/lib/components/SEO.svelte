<script>
	import favicon from "$lib/assets/favicon.svg"
	let {
		title = 'Roses Creations | Authentic Fashion',
		description = 'Exquisite Nigerian fashion and custom designs',
		url = 'https://rosescreations.com.ng'
	} = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="icon" href={favicon} />
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<!-- <meta property="og:url" content={url} /> -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{url}/og-image.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>
