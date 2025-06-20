<script>
    import { onMount } from "svelte";
    import { language } from "../stores.js";
    import { t } from "../translations.js";
    import {
        TrendingUp,
        Building2,
        TreePine,
        ShoppingCart,
        Truck,
        Users,
        ExternalLink,
    } from "lucide-svelte";

    // Import background images for proper Vite processing
    import energyBg from '/energy-background.jpg?url';
    import retailBg from '/retail-background.jpg?url';
    import officeBg from '/office-background.jpg?url';
    import heroBgLight from '/hero-background-dark.jpg?url';
    import heroBgDark from '/hero-background-dark.jpg?url';

    let mounted = false;

    onMount(() => {
        mounted = true;

        // Set CSS custom properties for background images
        document.documentElement.style.setProperty('--hero-bg-light', `url('${heroBgLight}')`);
        document.documentElement.style.setProperty('--hero-bg-dark', `url('${heroBgDark}')`);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            },
        );

        const sections = document.querySelectorAll(".scroll-animate");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    });

    const investmentAreas = [
        {
            icon: TrendingUp,
            titleKey: "energy",
            descKey: "energy_desc",
            color: "#059669",
            backgroundImage: energyBg,
        },
        {
            icon: TreePine,
            titleKey: "woodworking",
            descKey: "woodworking_desc",
            color: "#7c3aed",
        },
        {
            icon: ShoppingCart,
            titleKey: "retail",
            descKey: "retail_desc",
            color: "#dc2626",
            backgroundImage: retailBg,
        },
        {
            icon: Truck,
            titleKey: "wholesale",
            descKey: "wholesale_desc",
            color: "#4f46e5",
        },
        {
            icon: Building2,
            titleKey: "real_estate",
            descKey: "real_estate_desc",
            color: "#d97706",
            backgroundImage: officeBg,
        },
    ];

    const linkUrls = {
        energy: "https://hirsky.windpark.com.ua",
        woodworking: "https://www.slavforest.com.ua/",
        retail: "https://silpo.ua/",
    };

    function renderTextWithLinks(text, areaKey) {
        if (!text.includes("{link}")) {
            return text;
        }

        return text.split("{link}").map((part, index) => {
            if (index === 0) return part;

            const [linkText, ...rest] = part.split("{/link}");
            const afterLink = rest.join("{/link}");

            return {
                beforeLink: "",
                linkText: linkText,
                afterLink: afterLink,
                url: linkUrls[areaKey],
            };
        });
    }
</script>

<main class="main" class:mounted>
    <!-- Hero Section -->
    <section class="hero scroll-animate">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">
                    {t("company_name", $language)}
                </h1>
                <h2 class="hero-subtitle">
                    {t("header_title_part2", $language)}
                </h2>
            </div>
        </div>
    </section>

    <!-- NAV Value Section -->
    <section class="nav-section scroll-animate">
        <div class="container">
            <div class="nav-value">
                <strong>{t("nav_value", $language)}</strong>
            </div>
        </div>
    </section>

    <!-- Description Section -->
    <section class="description-section scroll-animate">
        <div class="container">
            <p class="description-text">
                {t("description", $language)}
            </p>
        </div>
    </section>

    <!-- Investment Areas -->
    <section class="investment-areas scroll-animate">
        <div class="container">
            <div class="areas-grid">
                {#each investmentAreas as area, index}
                    <div
                        class="area-card"
                        class:has-background={area.backgroundImage}
                        style="--delay: {index * 0.1}s; {area.backgroundImage
                            ? `--bg-image: url('${area.backgroundImage}')`
                            : ''}"
                    >
                        <div
                            class="area-icon"
                            style="--icon-color: {area.color}"
                        >
                            <svelte:component this={area.icon} size={32} />
                        </div>
                        <h3>{t(area.titleKey, $language)}</h3>
                        <p>
                            {#each renderTextWithLinks(t(area.descKey, $language), area.titleKey) as part}
                                {#if typeof part === "string"}
                                    {part}
                                {:else}
                                    {part.beforeLink}<a
                                        href={part.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="external-link"
                                    >
                                        {part.linkText}
                                        <ExternalLink size={14} />
                                    </a>{part.afterLink}
                                {/if}
                            {/each}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-vision scroll-animate">
        <div class="container">
            <h2 class="section-title">{t("mission_title", $language)}</h2>

            <div class="mv-grid">
                <div class="mv-card">
                    <h3>{t("mission", $language)}</h3>
                    <p>{t("mission_desc", $language)}</p>
                </div>

                <div class="mv-card">
                    <h3>{t("vision", $language)}</h3>
                    <p>{t("vision_desc", $language)}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team -->
    <section class="team scroll-animate">
        <div class="container">
            <h2 class="section-title">{t("team_title", $language)}</h2>
            <p class="team-description">{t("team_desc", $language)}</p>

            <div class="team-card">
                <div class="team-icon">
                    <Users size={32} />
                </div>
                <div class="team-info">
                    <h4>{t("fund_manager", $language)}</h4>
                    <p>{t("manager_name", $language)}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Partners -->
    <section class="partners scroll-animate">
        <div class="container">
            <h2 class="section-title">{t("partners_title", $language)}</h2>

            <div class="partners-grid">
                <div class="partner-card">
                    <h4>{t("auditing_firm", $language)}</h4>
                    <p><strong>{t("auditing_name", $language)}</strong></p>
                    <p>{t("auditing_address", $language)}</p>
                    <p>{t("auditing_code", $language)}</p>
                </div>

                <div class="partner-card">
                    <h4>{t("depository", $language)}</h4>
                    <p><strong>{t("depository_name", $language)}</strong></p>
                    <p>{t("depository_address", $language)}</p>
                    <p>{t("depository_code", $language)}</p>
                </div>

                <div class="partner-card">
                    <h4>{t("custodian", $language)}</h4>
                    <p><strong>{t("custodian_name", $language)}</strong></p>
                    <p>{t("custodian_address", $language)}</p>
                    <p>{t("custodian_code", $language)}</p>
                </div>

                <div class="partner-card">
                    <h4>{t("valuer", $language)}</h4>
                    <p><strong>{t("valuer_name", $language)}</strong></p>
                    <p>{t("valuer_address", $language)}</p>
                    <p>{t("valuer_code", $language)}</p>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    .main {
        padding-top: 4rem;
        opacity: 0;
        transition: opacity 0.6s ease;
    }

    .main.mounted {
        opacity: 1;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    :global(.scroll-animate.animate-in) {
        opacity: 1;
        transform: translateY(0);
    }

    /* Hero Section */
    .hero {
        padding: 6rem 0;
        background-image: var(--hero-bg-light);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        min-height: 500px;
        display: flex;
        align-items: start;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
    }

    :global([data-theme="dark"]) .hero {
        background-image: var(--hero-bg-dark);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .hero::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* background: linear-gradient(
            168deg,
            var(--bg-color) 0%,
            transparent 50%,
            var(--bg-secondary) 100%
        ); */
        background: rgba(248, 250, 252, 0.8);
        opacity: 0.8;
        z-index: 1;
    }

    :global([data-theme="dark"]) .hero::before {
        background:  rgba(17, 24, 39, 1);
    }


    .hero-content {
        position: relative;
        z-index: 2;
    }

    .hero-title {
        font-size: clamp(1.5rem, 4vw, 2.5rem);
        font-weight: 300;
        /* color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 1); */
        margin-bottom: 0.5rem;
        line-height: 1.2;
        text-align: center;
        text-transform: uppercase;
    }

    .hero-subtitle {
        font-size: clamp(2rem, 6vw, 4rem);
        font-weight: 800;
        /* color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 1); */
        margin-bottom: 0;
        margin-top: 0;
        line-height: 1.1;
        text-align: center;
        text-transform: uppercase;
    }

    /* NAV Value Section */
    .nav-section {
        padding: 3rem 0;
        background: var(--bg-color);
    }

    .nav-value {
        text-align: center;
        padding: 2rem;
        background: linear-gradient(
            135deg,
            var(--primary-color) 0%,
            var(--primary-hover) 100%
        );
        border-radius: 1rem;
        font-size: 1.25rem;
        color: white;
        max-width: 700px;
        margin: 0 auto;
        box-shadow: var(--shadow);
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .nav-value:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    /* Description Section */
    .description-section {
        padding: 3rem 0;
        background: var(--bg-secondary);
    }

    .description-text {
        font-size: 1.125rem;
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 0;
        text-align: center;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    /* Investment Areas */
    .investment-areas {
        padding: 4rem 0;
    }

    .areas-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    .area-card {
        background: var(--bg-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
        animation: fadeInUp 0.8s ease forwards;
        animation-delay: var(--delay);
        opacity: 0;
        transform: translateY(20px);
        position: relative;
        overflow: hidden;
    }

    .area-card.has-background {
        background-image: var(--bg-image);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .area-card.has-background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        opacity: 0.8;
        z-index: 1;
    }

    :global([data-theme="dark"]) .area-card.has-background::before {
        background: var(--bg-color);
        opacity: 0.5;
    }

    .area-card.has-background > * {
        position: relative;
        z-index: 2;
    }

    .area-card.has-background h3 {
        color: #000000;
        text-shadow: none;
    }

    .area-card.has-background p {
        color: #000000;
        text-shadow: none;
    }

    :global([data-theme="dark"]) .area-card.has-background h3 {
        color: #ffffff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    :global([data-theme="dark"]) .area-card.has-background p {
        color: #f8fafc;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .area-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .area-card.has-background:hover::before {
        background: black;
        opacity: 0.15;
    }

    :global([data-theme="dark"]) .area-card.has-background:hover::before {
        background: var(--bg-color);
        opacity: 0.25;
    }

    .area-card.has-background:hover h3 {
        color: white;
    }

    .area-card.has-background:hover p {
        color: white;
    }

    :global([data-theme="dark"]) .area-card.has-background:hover h3 {
        color: #ffffff;
    }

    :global([data-theme="dark"]) .area-card.has-background:hover p {
        color: #f8fafc;
    }

    .area-icon {
        width: 64px;
        height: 64px;
        background: var(--icon-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        color: white;
    }

    .area-card h3 {
        color: var(--text-color);
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }

    .area-card p {
        color: var(--text-secondary);
        line-height: 1.6;
    }

    .external-link {
        color: inherit;
        text-decoration: underline;
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        font-weight: 500;
        transition: all 0.2s ease;
    }

    .external-link:hover {
        text-decoration: underline;
        color: var(--primary-color);
    }

    .area-card.has-background .external-link {
        color: #000000;
    }

    .area-card.has-background .external-link:hover {
        color: #000000;
        text-decoration: underline;
    }

    .area-card.has-background:hover .external-link {
        color: white;
    }

    .area-card.has-background:hover .external-link:hover {
        color: white;
        text-decoration: underline;
    }

    :global([data-theme="dark"]) .area-card.has-background .external-link {
        color: #ffffff;
    }

    :global([data-theme="dark"]) .area-card.has-background .external-link:hover {
        color: #e2e8f0;
        text-decoration: underline;
    }

    /* Mission & Vision */
    .mission-vision {
        padding: 4rem 0;
        background: var(--bg-secondary);
    }

    .section-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-color);
        text-align: center;
        margin-bottom: 3rem;
    }

    .mv-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
    }

    .mv-card {
        background: var(--bg-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 2rem;
        transition: all 0.3s ease;
    }

    .mv-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    .mv-card h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .mv-card p {
        color: var(--text-secondary);
        line-height: 1.6;
    }

    /* Team */
    .team {
        padding: 4rem 0;
    }

    .team-description {
        text-align: center;
        color: var(--text-secondary);
        font-size: 1.125rem;
        margin-bottom: 2rem;
    }

    .team-card {
        display: flex;
        align-items: center;
        gap: 2rem;
        background: var(--bg-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
        transition: all 0.3s ease;
    }

    .team-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    .team-icon {
        width: 64px;
        height: 64px;
        background: var(--primary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        flex-shrink: 0;
    }

    .team-info h4 {
        color: var(--text-color);
        margin-bottom: 0.5rem;
        font-size: 1.125rem;
    }

    .team-info p {
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 0;
    }

    /* Partners */
    .partners {
        padding: 4rem 0;
        background: var(--bg-secondary);
    }

    .partners-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .partner-card {
        background: var(--bg-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 1.5rem;
        transition: all 0.3s ease;
    }

    .partner-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    .partner-card h4 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1rem;
    }

    .partner-card p {
        color: var(--text-secondary);
        font-size: 0.875rem;
        line-height: 1.5;
        margin: 0.5rem 0;
    }

    .partner-card p strong {
        color: var(--text-color);
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1rem;
        }

        .hero {
            padding: 4rem 0;
            min-height: 400px;
        }

        .nav-section {
            padding: 2rem 0;
        }

        .nav-value {
            padding: 1.5rem;
            font-size: 1.125rem;
        }

        .description-section {
            padding: 2rem 0;
        }

        .description-text {
            font-size: 1rem;
        }

        .section-title {
            font-size: 1.5rem;
        }

        .areas-grid {
            grid-template-columns: 1fr;
        }

        .mv-grid {
            grid-template-columns: 1fr;
        }

        .team-card {
            flex-direction: column;
            text-align: center;
        }

        .partners-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
