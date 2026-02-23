<script>
    function onsubmit(e) {
        e.target.reset();
        e.preventDefault();
    }
</script>

<section>
	<h1>BOOK A FITTING</h1>
	<div class="flex">
		<div>
			<h2>GET IN TOUCH</h2>
            <div class="contact_item">
                <div class="contact_icon"><i class="i-line-md:email"></i></div>
                <div>
                    <p class="contact_label">EMAIL US</p>
                    <p class="contact_value">HELLO@ROSESCREATIONS.COM.NG</p>
                </div>
            </div>
            <div class="contact_item">
                <div class="contact_icon"><i class="i-line-md:phone"></i></div>
                <div>
                    <p class="contact_label">CALL US</p>
                    <p class="contact_value">+234 567 891 0111</p>
                </div>
            </div>
            <div class="contact_item">
                <div class="contact_icon"><i class="i-line-md:map-marker"></i></div>
                <div>
                    <p class="contact_label">ADDRESS</p>
                    <p class="contact_value">LAGOS, NIGERIA</p>
                </div>
            </div>
		</div>
		<div class="request_panel">
			<h2>SEND A REQUEST</h2>
            <p class="request_intro">
                Share a few details and our team will reach out to plan your fitting.
            </p>
            <form class="request_form" {onsubmit}>
                <div class="form_group">
                    <label for="fullName">FULL NAME</label>
                    <input id="fullName" name="fullName" type="text" autocomplete="name" required />
                </div>
                <div class="form_group">
                    <label for="emailAddress">EMAIL ADDRESS</label>
                    <input id="emailAddress" name="emailAddress" type="email" autocomplete="email" required />
                </div>
                <div class="form_group">
                    <label for="serviceType">SERVICE TYPE</label>
                    <select id="serviceType" name="serviceType" required>
                        <option value="" disabled selected>Select a service</option>
                        <option value="bespoke-womenswear">Bespoke Womenswear</option>
                        <option value="bespoke-menswear">Bespoke Menswear</option>
                        <option value="bridal-and-occasion">Bridal and Occasion Wear</option>
                        <option value="aso-ebi-group-orders">Aso Ebi Group Orders</option>
                        <option value="styling-consultation">Styling Consultation</option>
                        <option value="alterations-and-refitting">Alterations and Refitting</option>
                    </select>
                </div>
                <div class="form_group">
                    <label for="requestMessage">MESSAGE</label>
                    <textarea id="requestMessage" name="requestMessage" rows="5" required></textarea>
                </div>
                <button class="send_button" type="submit">SEND REQUEST <i class="i-line-md:telegram"></i></button>
            </form>
		</div>
	</div>
</section>

<style>
	section {
		max-width: 90rem;
		margin-inline: auto;
		padding: 2rem 1.5rem;
	}
	h1 {
		font-size: 4rem;
		text-align: center;
        margin-block: 1rem 5rem;
	}

    .flex {
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 3rem;
    }

    .contact_item {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        margin-bottom: 2.25rem;
    }

    .contact_icon {
        padding: .75rem;
        aspect-ratio: 1;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background-color: var(--foreground);

    }

    .contact_icon i {
        background-color: var(--background);
        font-size: 1.5rem;
    }

    .contact_label {
        color: var(--muted);
        font-size: .9rem;
        margin-bottom: .5rem;
        letter-spacing: .1rem;
    }

    .contact_value {
        font-weight: bold;
        font-size: 1.2rem;
        word-break: break-all;
    }

    .request_panel h2 {
        margin-bottom: 1rem;
    }

    .request_intro {
        color: var(--muted);
        font-size: .9rem;
        margin-bottom: 1.5rem;
    }

    .request_form {
        display: grid;
        gap: 1.5rem;
    }

    .form_group {
        display: grid;
        gap: .5rem;
    }

    .form_group label {
        font-size: .78rem;
        letter-spacing: .08rem;
        color: var(--muted);
        font-weight: bold;
    }

    .form_group :is(input, select, textarea) {
        width: 100%;
        border: 1px solid var(--border);
        border-radius: .65rem;
        padding: .9rem 1rem;
        background: var(--background);
        color: var(--foreground);
        font: inherit;
    }

    .form_group textarea {
        min-height: 8rem;
        resize: vertical;
    }

    .form_group :is(input, select, textarea):focus-visible {
        outline: 2px solid color-mix(in srgb, var(--primary) 45%, white 55%);
        outline-offset: 1px;
    }

    .send_button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        margin-top: .5rem;
        border: none;
        border-radius: 2rem;
        padding: 1.5rem 1.5rem;
        font-size: .9rem;
        font-weight: 600;
        width: 100%;
        letter-spacing: .06rem;
        cursor: pointer;
        background: var(--foreground);
        color: var(--background);
    }

    .send_button i {
        font-size: 1.5rem;
    }

    @media screen and (min-width: 54rem) {
        .flex {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
            gap: 3rem;
            align-items: start;
            /* max-width: 70rem; */
            padding-inline: 2rem;
            margin-inline: auto;
        }
    }
</style>
