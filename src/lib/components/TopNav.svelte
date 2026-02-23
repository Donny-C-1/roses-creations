<script>
    import { resolve } from "$app/paths";
    import logo from "$lib/assets/logo.svg";
</script>

<header>
    <a class="logo" href={resolve("/")}>
        <img src={logo} alt="Roses Creations" width="36" height="auto" />
        Roses Creations
    </a>
    <nav>
        <ul class="navlist">
            <li><a href={resolve("/heritage")}>HERITAGE</a></li>
            <li><a href={resolve("/catalog")}>CATALOG</a></li>
            <li><a href={resolve("/booking")}>BOOKING</a></li>
        </ul>
    </nav>
    <div class="social_links">
        <ul class="social_links_list">
            <li><a href="https://" aria-label="facebook-link"><i class="social_icon i-line-md:facebook"></i></a></li>
            <li><a href="https://" aria-label="instagram-link"><i class="social_icon i-line-md:instagram"></i></a></li>
            <li><a href="https://" aria-label="tiktok-link"><i class="social_icon i-line-md:tiktok"></i></a></li>
        </ul>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        max-width: 90rem;
        margin-inline: auto;
        padding: 1rem 1.5rem;
        backdrop-filter: blur(10px);
        background-color: color-mix(in srgb, var(--background) 60%, transparent 40%);
        border-bottom: 1px solid var(--border);
        z-index: 5;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: 1.3rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: -.05rem;
        text-decoration: none;
        color: var(--foreground);
    }

    nav {
        display: none;
    }

    .navlist {
        display: flex;
        gap: 2rem;
        align-items: center;
        list-style-type: none;
    }

    .navlist a:is(:link, :visited) {
        color: inherit;
        text-decoration: none;
        font-weight: 500;
        font-size: .85rem;
        transform: all .3s ease;
    }

    .navlist a:is(:hover, :focus-visible, :active) {
        color: var(--primary);
    }

    .social_links {
        display: none;
    }

    .social_links_list {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        list-style-type: none;
    }

    .social_icon {
        color: var(--foreground);
    }

    @media screen and (min-width: 40rem) {
        nav {
            display: initial;
        }
    }

    @media screen and (min-width: 54rem) {
        .social_links {
            display: initial;
        }
    }
</style>