const menuButton = document.querySelector('[data-menu-button]');
const navLinks = document.querySelector('[data-nav-links]');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    });
  });
}

const contactForm = document.querySelector('[data-contact-form]');
const contactStatus = document.querySelector('[data-contact-status]');

if (contactForm && contactStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactStatus.textContent = 'Thanks! Your message is saved locally for now. Connect this form to your email service when ready.';
    contactForm.reset();
  });
}

const CARD_SELECTOR = '.card, .info-panel, .mock-card, .phone-shot, .faq-list details';
const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, option, label, summary, details';

function buildModal() {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.hidden = true;
  backdrop.innerHTML = `
    <section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-body">
      <button class="modal-close" type="button" aria-label="Close popup">×</button>
      <h3 id="modal-title"></h3>
      <p id="modal-body"></p>
      <div class="modal-actions">
        <a class="btn ghost" href="contact.html">Request Early Access</a>
      </div>
    </section>
  `;
  document.body.appendChild(backdrop);

  const closeButton = backdrop.querySelector('.modal-close');
  const titleElement = backdrop.querySelector('#modal-title');
  const bodyElement = backdrop.querySelector('#modal-body');
  let triggerElement = null;

  function closeModal() {
    backdrop.hidden = true;
    document.body.classList.remove('modal-open');
    if (triggerElement) {
      triggerElement.focus();
    }
  }

  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      closeModal();
    }
  });

  closeButton.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (!backdrop.hidden && event.key === 'Escape') {
      closeModal();
    }
  });

  function openModal(title, description, sourceElement) {
    triggerElement = sourceElement;
    titleElement.textContent = title;
    bodyElement.textContent = description;
    backdrop.hidden = false;
    document.body.classList.add('modal-open');
    closeButton.focus();
  }

  return { openModal };
}

function getCardText(card) {
  const heading = card.querySelector('h3, h2, h1, summary');
  const paragraph = card.querySelector('p');
  const image = card.querySelector('img');
  const listItems = [...card.querySelectorAll('li')].slice(0, 3).map((item) => item.textContent?.trim()).filter(Boolean);

  const title = card.getAttribute('data-popup-title') || heading?.textContent?.trim() || image?.alt || 'Holy Texts';
  const baseDescription = card.getAttribute('data-popup-description')
    || paragraph?.textContent?.trim()
    || (listItems.length > 0 ? listItems.join(' ') : '')
    || image?.alt
    || 'Explore this part of the Holy Texts experience.';

  let extra = ' Tap again to continue exploring related features across the site.';

  if (card.classList.contains('phone-shot')) {
    extra = ' This screenshot is from the live Android app and highlights an actual user flow.';
  } else if (card.classList.contains('mock-card')) {
    extra = ' This card represents a key quick action available in the app dashboard.';
  } else if (card.querySelector('form')) {
    extra = ' This panel includes account or contact workflows designed for practical everyday use.';
  }

  return {
    title,
    description: `${baseDescription}${extra}`,
  };
}

function enableCardPopups() {
  const cards = [...document.querySelectorAll(CARD_SELECTOR)];
  if (!cards.length) return;

  const { openModal } = buildModal();

  cards.forEach((card) => {
    card.classList.add('clickable-card');
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Open details for ${getCardText(card).title}`);

    card.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest(INTERACTIVE_SELECTOR)) {
        return;
      }
      const text = getCardText(card);
      openModal(text.title, text.description, card);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const text = getCardText(card);
        openModal(text.title, text.description, card);
      }
    });
  });
}

enableCardPopups();
