<script>
    import { resolve } from "$app/paths";
</script>

<header>
    <div class="logo"><a href={resolve("/")}>Roses Creations</a></div>
    <nav>
        <ul>
            <li><a href={resolve("/heritage")}>HERITAGE</a></li>
            <li><a href={resolve("/catalog")}>CATALOG</a></li>
            <li><a href={resolve("/booking")}>BOOKING</a></li>
        </ul>
    </nav>
</header>