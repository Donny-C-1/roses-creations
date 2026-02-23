<script>
    import InvertedLogo from "$lib/assets/logo-inverted.svg";
</script>

<footer>
    <div class="info">
        <img src={InvertedLogo} alt="Roses Creations" width="70" height="auto" />
        <p class="text">Designed for you</p>
        <ul class="social_links">
            <li><a href={resolve("#")}><i class="i-line-md:facebook"></i>facebook</a></li>
            <li><a href={resolve("#")}><i class="i-line-md:instagram"></i>instagram</a></li>
            <li><a href={resolve("#")}><i class="i-line-md:tiktok"></i>tiktok</a></li>
        </ul>
    </div>
    <div class="hashtag">#Roses<wbr>Creations</div>
    <p class="copyright_text">&copy;{new Date().getFullYear()} ROSES CREATIONS. ALL RIGHTS RESERVED</p>
</footer>

<style>
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--foreground);
        color: var(--foreground-muted);
        padding: 4rem 2rem 2rem;
        max-width: 90rem;
        margin-inline: auto;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .text {
        text-transform: uppercase;
        font-size: .9rem;
        letter-spacing: .2rem;
        font-weight: 600;
    }

    .social_links {
        display: flex;
        gap: 1.5rem;
        list-style-type: none;
    }

    .social_links a:is(:link, :visited) {
        display: flex;
        align-items: center;
        gap: .25rem;
        color: inherit;
        text-decoration: none;
        transition: .3s ease;
    }

    .social_links a:is(:hover, :focus-visible, :active) {
        color: var(--accent);
    }

    .hashtag {
        font-size: 3rem;
        white-space: pre-line;
        color: var(--muted);
        font-weight: 900;
        margin-block: 5rem;
        text-align: center;
        line-height: 1;
        text-transform: uppercase;
    }

    .copyright_text {
        text-align: center;
        text-transform: uppercase;
        font-size: small;
        letter-spacing: .05rem;
    }

    @media screen and (min-width: 40rem) {
        .hashtag {
            font-size: 4rem;
        }
    }

    @media screen and (min-width: 54rem) {
        .hashtag {
            font-size: 6rem;
        }
    }
</style>