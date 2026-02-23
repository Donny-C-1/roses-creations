<script>
    import { resolve } from "$app/paths";
    import logo from "$lib/assets/logo.svg";

    let menuOpen = false;

    const closeMenu = () => {
        menuOpen = false;
    };
</script>

<header class:menu_open={menuOpen}>
    <a class="logo" href={resolve("/")}>
        <img src={logo} alt="Roses Creations" width="36" height="auto" />
        Roses Creations
    </a>
    <button
        type="button"
        class="menu_button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onclick={() => (menuOpen = !menuOpen)}
    >
        <i class={`menu_icon ${menuOpen ? "i-line-md:close" : "i-line-md:menu"}`}></i>
    </button>
    <nav class="desktop_nav">
        <ul class="navlist">
            <li><a href={resolve("/heritage")}>HERITAGE</a></li>
            <li><a href={resolve("/catalog")}>CATALOG</a></li>
            <li><a href={resolve("/booking")}>BOOKING</a></li>
        </ul>
    </nav>
    <div class="social_links">
        <ul class="social_links_list">
            <li><a href={resolve("./#")} aria-label="facebook-link"><i class="social_icon i-line-md:facebook"></i></a></li>
            <li><a href={resolve("./#")} aria-label="instagram-link"><i class="social_icon i-line-md:instagram"></i></a></li>
            <li><a href={resolve("./#")} aria-label="tiktok-link"><i class="social_icon i-line-md:tiktok"></i></a></li>
        </ul>
    </div>
    <nav id="mobile-menu" class="mobile_menu" class:open={menuOpen} aria-label="Mobile navigation">
        <ul class="mobile_navlist">
            <li><a href={resolve("/heritage")} onclick={closeMenu}>HERITAGE</a></li>
            <li><a href={resolve("/catalog")} onclick={closeMenu}>CATALOG</a></li>
            <li><a href={resolve("/booking")} onclick={closeMenu}>BOOKING</a></li>
        </ul>
        <ul class="mobile_social_links">
            <li><a href={resolve("./#")} aria-label="facebook-link" onclick={closeMenu}><i class="social_icon i-line-md:facebook"></i></a></li>
            <li><a href={resolve("./#")} aria-label="instagram-link" onclick={closeMenu}><i class="social_icon i-line-md:instagram"></i></a></li>
            <li><a href={resolve("./#")} aria-label="tiktok-link" onclick={closeMenu}><i class="social_icon i-line-md:tiktok"></i></a></li>
        </ul>
    </nav>
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
        overflow: visible;
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

    .desktop_nav {
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
        transition: color .3s ease;
    }

    .navlist a:is(:hover, :focus-visible, :active) {
        color: var(--primary);
    }

    .menu_button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        border-radius: .8rem;
        border: 1px solid var(--border);
        background-color: color-mix(in srgb, var(--background) 84%, transparent 16%);
        color: var(--foreground);
        transition: color .25s ease, border-color .25s ease, background-color .25s ease, transform .25s ease;
    }

    .menu_button:is(:hover, :focus-visible) {
        border-color: color-mix(in srgb, var(--primary) 45%, var(--border) 55%);
        color: var(--primary);
        transform: translateY(-1px);
    }

    .menu_icon {
        font-size: 1.45rem;
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

    .mobile_menu {
        position: absolute;
        top: calc(100% + .55rem);
        left: 1rem;
        right: 1rem;
        padding: 1rem 1rem 1.1rem;
        border: 1px solid var(--border);
        border-radius: 1rem;
        background-color: color-mix(in srgb, var(--background) 95%, transparent 5%);
        backdrop-filter: blur(12px);
        box-shadow: 0 16px 34px color-mix(in srgb, var(--foreground) 12%, transparent);
        opacity: 0;
        pointer-events: none;
        transform: translateY(-10px) scale(.98);
        transform-origin: top center;
        transition: opacity .25s ease, transform .25s ease;
    }

    .mobile_menu.open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0) scale(1);
    }

    .mobile_navlist {
        display: flex;
        flex-direction: column;
        gap: .15rem;
        list-style-type: none;
    }

    .mobile_navlist a:is(:link, :visited) {
        display: block;
        text-decoration: none;
        color: var(--foreground);
        font-weight: 700;
        letter-spacing: .04rem;
        font-size: .85rem;
        border-radius: .6rem;
        padding: .75rem .7rem;
        transition: color .2s ease, background-color .2s ease;
    }

    .mobile_navlist a:is(:hover, :focus-visible, :active) {
        color: var(--primary);
        background-color: color-mix(in srgb, var(--primary) 10%, transparent 90%);
    }

    .mobile_social_links {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        list-style-type: none;
        margin-top: .85rem;
        padding: .7rem .7rem .3rem;
        border-top: 1px solid var(--border);
    }

    .mobile_social_links a {
        display: inline-flex;
        color: var(--foreground);
        transition: color .2s ease, transform .2s ease;
    }

    .mobile_social_links a:is(:hover, :focus-visible, :active) {
        color: var(--primary);
        transform: translateY(-1px);
    }

    @media screen and (min-width: 40rem) {
        .menu_button {
            display: none;
        }

        .desktop_nav {
            display: initial;
        }

        .mobile_menu {
            display: none;
        }
    }

    @media screen and (min-width: 54rem) {
        .social_links {
            display: initial;
        }
    }
</style>
