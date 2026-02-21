<script>
	import favicon from '$lib/assets/favicon.svg';
	import "$lib/css/app.css";
	import Footer from '$lib/components/Footer.svelte';
	import TopNav from '$lib/components/TopNav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Roses Creations</title>
</svelte:head>

<TopNav />
<main>
	{@render children()}
</main>
<Footer />
