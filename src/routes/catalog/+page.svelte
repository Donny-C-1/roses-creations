<script>
	import { resolve } from "$app/paths";

    const collection = [
        {
            imageSrc: "/images/mens-wear-1.png",
            name: "Executive Senator",
            collection: "Men"
        },
        {
            imageSrc: "/images/womens-wear-1.png",
            name: "Royal Aso Ebi",
            collection: "women"
        },
        {
            imageSrc: "/images/hero.png",
            name: "Daily Ankara",
            collection: "Unisex"
        },
        {
            imageSrc: "/images/craftsmanship-1.png",
            name: "Grand Agbada",
            collection: "Men"
        },
        {
            imageSrc: "/images/womens-wear-1.png",
            name: "Modern Lace Gown",
            collection: "Women"
        },
        {
            imageSrc: "/images/mens-wear-1.png",
            name: "Culture Tunic",
            collection: "Men"
        },
        {
            imageSrc: "/images/hero.png",
            name: "Patterned Kaftan",
            collection: "Unisex"
        },
        {
            imageSrc: "/images/womens-wear-1.png",
            name: "Silk Wrap Dress",
            collection: "Women"
        },
    ]

    let filterCollection = $state("all");

    const filteredCollection = $derived(filterCollection === "all" ? collection : collection.filter(v => v.collection.toLowerCase() === filterCollection))
</script>

<section>
	<div class="top">
        <h1>OUR CATALOG</h1>
        <div class="filter">
            <button class="filter_button active" onclick={filterCollection = "all"}>All</button>
            <button class="filter_button" onclick={filterCollection = "men"}>Men</button>
            <button class="filter_button" onclick={filterCollection = "women"}>Women</button>
        </div>
    </div>
	<div class="collection">
        {#each filteredCollection as outfit}
            <div class="outfit_card">
                <div class="outfit_media"><img src={resolve(outfit.imageSrc)} alt={outfit.name} /></div>
                <div class="outfit_info">
                    <div class="left_block">
                        <p class="outfit_name">{outfit.name}</p>
                        <p class="collection_name">{outfit.collection} COLLECTION</p>
                    </div>
                    <div>
                        <p class="price">₦40,000</p>
                    </div>
                </div>
            </div>
        {/each}
	</div>
</section>

<style>
	section {
		max-width: 90rem;
		margin-inline: auto;
        padding: 2rem 1.5rem;
	}

    .top {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
	h1 {
		font-size: 4rem;
        line-height: .9;
        letter-spacing: -.2rem;
	}

    .filter {
        display: flex;
        gap: .5rem;
        justify-self: flex-end;
        margin-left: auto;
    }

    .filter_button {
        border: 1px solid var(--border);
        background-color: transparent;
        padding: .5rem 1.5rem;
        border-radius: 1.5rem;
        cursor: pointer;
        font-size: .8rem;
        font-weight: 500;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
    }

    .filter_button.active {
        background: var(--foreground);
        color: var(--background);
    }

    .collection {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 4rem;
        column-gap: 1.5rem;
        padding-block: 4rem;
    }

    .outfit_card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    .outfit_media {
        border-radius: 1rem;
        overflow: hidden;
        aspect-ratio: 7 / 9;
    }

    .outfit_card img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: .5s ease;
    }

    .outfit_card:is(:hover, :focus) img{
        scale: 1.05;
    }

    .outfit_info {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        text-transform: uppercase;
    }

    .left_block {
        min-width: 0;
    }

    .outfit_name {
        flex: 1;
        letter-spacing: .05rem;
        font-weight: 500;
        margin-bottom: .25rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .collection_name {
        color: var(--muted);
        font-size: .75rem;
        font-weight: bold;
    }

    .price {
        font-size: .9rem;
        font-weight: 500;
    }

    @media screen and (min-width: 40rem) {
        h1 {
            font-size: 7rem;
        }

        .collection {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media screen and (min-width: 54rem) {
        .collection {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }
</style>
