<script>
	import 'virtual:uno.css';
	import '$lib/css/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import TopNav from '$lib/components/TopNav.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let { children } = $props();
</script>

<SEO />

<TopNav />
<main>
	{@render children()}
</main>
<Footer />
