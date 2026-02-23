<script>
	import { resolve } from "$app/paths";
    import heroImage from "$lib/assets/hero.png";

</script>
<section class="hero">
    <div class="text_block">
        <div>
            <div class="stamp">RC</div>
            <p class="subtext">FASHION BEYOND ORDINARY ARTS</p>
            <h1 class="large_text">TIMELESS</h1>
        </div>
        <div class="cta">
            <p class="tagline">DISCOVER TRENDS CRAFTED <br/>FOR YOUR STYLE</p>
            <a class="cta_button" href={resolve("/catalog")}>BROWSE <i class="i-line-md:arrow-right"></i></a>
        </div>
    </div>
    <div class="image_block">
        <img class="hero_image" src={heroImage} alt="Hero" />
    </div>
</section>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        max-width: 90rem;
        margin-inline: auto;
        padding: 3rem 2rem;
    }

    .text_block {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 4rem;
    }

    .stamp {
        display: inline-block;
        background-color: var(--primary);
        outline: .5rem solid color-mix(in srgb, var(--primary) 50%, transparent 50%);
        padding: .9rem;
        margin: .5rem 0 2rem .5rem;
        color: var(--background);
        font-style: italic;
        font-weight: bold;
    }

    .subtext {
        color: var(--muted);
        font-size: .8rem;
        font-weight: bold;
        letter-spacing: .1rem;
        margin-bottom: 1rem;
    }

    .large_text {
        font-size: 4rem;
    }

    .cta {
        display: flex;
        flex-wrap: wrap;
        row-gap: 2rem;
        column-gap: 3rem;
        align-items: center;
    }

    .cta_button {
        display: flex;
        align-items: center;
        gap: .5rem;
        background-color: var(--foreground);
        padding: .75rem 2rem;
        color: var(--background);
        text-decoration: none;
        border-radius: 1.5rem;
        font-size: .9rem;
    }

    .tagline {
        font-size: .8rem;
        color: var(--muted);
        font-weight: bold;
        letter-spacing: .1rem;

    }

    .hero_image {
        aspect-ratio: 7/ 9;
        object-fit: cover;
        object-position: center;
        border-radius: .5rem;
    }

    @media screen and (min-width: 40rem) {
        .hero {
            flex-direction: row;
            gap: 1rem;
        }

        .text_block {
            flex: 4;
        }

        .image_block {
            flex: 6;
        }

        .hero_image {
            aspect-ratio: unset;
            height: 100%;
        }
    }

    @media screen and (min-width: 54rem) {
        .large_text {
            font-size: 6rem;
        }
    }
</style>