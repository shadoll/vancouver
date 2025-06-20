<script>
  import { onMount } from 'svelte';
  import { language } from '../stores.js';
  import { t } from '../translations.js';
  import { TrendingUp, Building2, TreePine, ShoppingCart, Truck, Users } from 'lucide-svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  });

  const investmentAreas = [
    {
      icon: TrendingUp,
      titleKey: 'energy',
      descKey: 'energy_desc',
      color: '#059669'
    },
    {
      icon: TreePine,
      titleKey: 'woodworking',
      descKey: 'woodworking_desc',
      color: '#7c3aed'
    },
    {
      icon: Building2,
      titleKey: 'real_estate',
      descKey: 'real_estate_desc',
      color: '#d97706'
    },
    {
      icon: ShoppingCart,
      titleKey: 'retail',
      descKey: 'retail_desc',
      color: '#dc2626'
    },
    {
      icon: Truck,
      titleKey: 'wholesale',
      descKey: 'wholesale_desc',
      color: '#4f46e5'
    }
  ];
</script>

<main class="main" class:mounted>
  <!-- Hero Section -->
  <section class="hero scroll-animate">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          {t('company_name', $language)}
        </h1>
        <p class="hero-description">
          {t('description', $language)}
        </p>
        <div class="nav-value">
          <strong>{t('nav_value', $language)}</strong>
        </div>
      </div>
    </div>
  </section>

  <!-- Investment Areas -->
  <section class="investment-areas scroll-animate">
    <div class="container">
      <div class="areas-grid">
        {#each investmentAreas as area, index}
          <div class="area-card" style="--delay: {index * 0.1}s">
            <div class="area-icon" style="--icon-color: {area.color}">
              <svelte:component this={area.icon} size={32} />
            </div>
            <h3>{t(area.titleKey, $language)}</h3>
            <p>{t(area.descKey, $language)}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Mission & Vision -->
  <section class="mission-vision scroll-animate">
    <div class="container">
      <h2 class="section-title">{t('mission_title', $language)}</h2>

      <div class="mv-grid">
        <div class="mv-card">
          <h3>{t('mission', $language)}</h3>
          <p>{t('mission_desc', $language)}</p>
        </div>

        <div class="mv-card">
          <h3>{t('vision', $language)}</h3>
          <p>{t('vision_desc', $language)}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="team scroll-animate">
    <div class="container">
      <h2 class="section-title">{t('team_title', $language)}</h2>
      <p class="team-description">{t('team_desc', $language)}</p>

      <div class="team-card">
        <div class="team-icon">
          <Users size={32} />
        </div>
        <div class="team-info">
          <h4>{t('fund_manager', $language)}</h4>
          <p>{t('manager_name', $language)}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners -->
  <section class="partners scroll-animate">
    <div class="container">
      <h2 class="section-title">{t('partners_title', $language)}</h2>

      <div class="partners-grid">
        <div class="partner-card">
          <h4>{t('auditing_firm', $language)}</h4>
          <p><strong>{t('auditing_name', $language)}</strong></p>
          <p>{t('auditing_address', $language)}</p>
          <p>{t('auditing_code', $language)}</p>
        </div>

        <div class="partner-card">
          <h4>{t('depository', $language)}</h4>
          <p><strong>{t('depository_name', $language)}</strong></p>
          <p>{t('depository_address', $language)}</p>
          <p>{t('depository_code', $language)}</p>
        </div>

        <div class="partner-card">
          <h4>{t('custodian', $language)}</h4>
          <p><strong>{t('custodian_name', $language)}</strong></p>
          <p>{t('custodian_address', $language)}</p>
          <p>{t('custodian_code', $language)}</p>
        </div>

        <div class="partner-card">
          <h4>{t('valuer', $language)}</h4>
          <p><strong>{t('valuer_name', $language)}</strong></p>
          <p>{t('valuer_address', $language)}</p>
          <p>{t('valuer_code', $language)}</p>
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
    padding: 4rem 0;
    background: linear-gradient(135deg, var(--bg-color) 0%, var(--bg-secondary) 100%);
  }

  .hero-title {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-align: center;
  }

  .hero-description {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .nav-value {
    text-align: center;
    padding: 1.5rem;
    background: var(--bg-color);
    border: 2px solid var(--primary-color);
    border-radius: 1rem;
    font-size: 1.125rem;
    color: var(--primary-color);
    max-width: 600px;
    margin: 0 auto;
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
  }

  .area-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
      padding: 2rem 0;
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
