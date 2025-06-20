<script>
  import { language } from '../stores.js';
  import { t } from '../translations.js';
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h3>{t('header_title', $language)}</h3>
        <p class="footer-description">
          {t('company_name', $language)}
        </p>
      </div>

      <div class="footer-section">
        <h4>{t('contact_title', $language)}</h4>
        <div class="contact-info">
          <p><strong>{t('manager_title', $language)}</strong></p>
          <p>{t('address', $language)}</p>
          <p>{t('phone', $language)}</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Vancouver Investment Fund. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
    padding: 3rem 0 1rem;
    margin-top: 4rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-section h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .footer-section h4 {
    color: var(--text-color);
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .footer-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 0;
  }

  .contact-info p {
    margin: 0.5rem 0;
    color: var(--text-secondary);
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .footer-bottom {
    border-top: 1px solid var(--border-color);
    padding-top: 1rem;
    text-align: center;
  }

  .footer-bottom p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .footer {
      padding: 2rem 0 1rem;
    }
  }
</style>
