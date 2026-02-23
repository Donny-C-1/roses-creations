<script>
	import heroImage from '$lib/assets/hero.png';

	const heritageHighlights = [
		{
			title: 'BESPOKE QUALITY',
			text: 'Hand-crafted by master tailors with decades of experience in traditional Nigerian silhouettes.'
		},
		{
			title: 'PREMIUM FABRICS',
			text: 'Sourcing the most vibrant Ankara and luxurious laces from across the continent.'
		},
		{
			title: 'MODERN HERITAGE',
			text: 'Blending cultural authenticity with contemporary high-fashion trends for a unique look.'
		}
	];
</script>

<section class="heritage_intro">
	<div class="intro_copy">
		<p class="intro_kicker">ESTABLISHED 2012</p>
		<h1>OUR JOURNEY IN<br />FASHION</h1>
		<div class="story_copy">
			<p>
				Roses Creations began with a single vision: to showcase the impeccable beauty of Nigerian fashion to
				the world. What started in a small Lagos atelier has blossomed into a global symbol of heritage and
				modern elegance.
			</p>
			<p>
				What makes our outfits "impeccably nice" is our obsession with the details. We don't just sew fabric;
				we weave stories. Every embroidery line, every cut, and every silhouette is made to honor both
				tradition and confidence.
			</p>
			<p>
				We source the finest Aso Oke, Ankara, and premium silks, ensuring that when you wear Roses Creations,
				you are wearing a piece of African luxury that is both timeless and transformative.
			</p>
		</div>
	</div>

	<div class="intro_media">
		<div class="media_frame">
			<img src={heroImage} alt="Models in vibrant Nigerian heritage attire" />
		</div>
		<blockquote class="quote_card">
			"Where tradition meets the future of fashion."
		</blockquote>
	</div>
</section>

<section class="heritage_values">
	<div class="values_grid">
		{#each heritageHighlights as item}
			<article class="value_card">
				<h2>{item.title}</h2>
				<p>{item.text}</p>
			</article>
		{/each}
	</div>
</section>

<style>
	.heritage_intro {
		max-width: 90rem;
		margin-inline: auto;
		padding: 3rem 1.5rem 4rem;
		display: grid;
		gap: 2.5rem;
	}

	.intro_kicker {
		letter-spacing: 0.38rem;
		font-size: 0.72rem;
		font-weight: 600;
		color: color-mix(in srgb, var(--muted) 70%, white 30%);
		margin-bottom: 1.4rem;
	}

	h1 {
		font-size: clamp(2.6rem, 9vw, 6rem);
		line-height: 0.9;
		letter-spacing: -0.16rem;
		margin-bottom: 1.8rem;
	}

	.story_copy {
		display: grid;
		gap: 1.4rem;
	}

	.story_copy p {
		line-height: 1.7;
		color: var(--muted);
	}

	.intro_media {
		position: relative;
		padding-bottom: 3.2rem;
	}

	.media_frame {
		overflow: hidden;
		border-radius: 1.1rem;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        rotate: 2deg;
	}

	.media_frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		aspect-ratio: 4 / 5;
	}

	.quote_card {
        text-align: center;
		position: absolute;
		left: -2rem;
		bottom: 0;
		background: var(--foreground);
		color: var(--background);
		border-radius: 1rem;
		padding: 5rem 1.5rem;
		font-size: 1.25rem;
		font-weight: 700;
		font-style: italic;
		line-height: 1.35;
		width: 15rem;
		transform: rotate(-5deg);
	}

	.heritage_values {
		padding: 3.8rem 1.5rem 4.2rem;
	}

	.values_grid {
		max-width: 90rem;
		margin-inline: auto;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1.5rem;
	}

	.value_card {
		border: 1px solid var(--border);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		border-radius: 1rem;
		padding: 2rem;
	}

	.value_card h2 {
		font-size: clamp(1.2rem, 4vw, 1.4rem);
		line-height: 1;
		margin-bottom: 1rem;
	}

	.value_card p {
		font-size: .9rem;
		line-height: 1.7;
		color: var(--muted);
	}

	@media screen and (min-width: 54rem) {
		.heritage_intro {
			grid-template-columns: minmax(0, clamp(20rem, 50vw, 34rem)) minmax(0, 0.96fr);
			gap: 4rem;
			padding-top: 3.6rem;
		}

        .quote_card {
            width: min(15rem, 62%);
		bottom: 1rem;
        }

		.values_grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 2.5rem;
		}
	}
</style>
