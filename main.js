import './style.css';

// === Translation Data ===
const translations = {
  en: {
    nav: {
      alliances: 'Alliances',
      directives: 'Directives',
      portal: 'Access Portal'
    },
    hero: {
      badge: 'Established Network',
      title: 'The Central Gateway to Sovereign Networks & Historic Orders.',
      subtitle: 'Facilitating secure entry, strategic alignment, and verified direction across global councils, elite fraternities, and esoteric legacies.',
      cta1: 'Initiate Intake Consultation',
      cta2: 'Review Public Mandate'
    },
    matrix: {
      label: 'Network Directory',
      title: 'The Matrix of Alliances'
    },
    tabs: {
      geopolitical: 'Geopolitical & Institutional Councils',
      fraternities: 'Historic Fraternities & Esoteric Orders',
      clubs: 'Exclusive Collegiate & Private Clubs',
      cultures: 'Creative Cultures & Pop Traditions'
    },
    gateway: {
      label: 'Secure Access',
      title: 'The Gateway',
      desc: 'Submit your credentials for vetted entry into sovereign networks.'
    },
    form: {
      designation: 'Candidate Designation',
      alignment: 'Network Alignment',
      manifesto: 'Intention Manifesto',
      selectNetwork: 'Select a network',
      submit: 'Transmit Secure Request',
      encrypting: 'Encrypting Transmission Data...',
      vetting: 'Vetting Candidate Routing...',
      successTitle: 'Transmission Secured',
      successMsg: 'Our network coordinators will route your profile through the correct channels.',
      close: 'Acknowledge'
    },
    footer: {
      disclaimer: 'Access is strictly token-gated and subject to vetting. Unauthorized monitoring is prohibited.'
    }
  },
  fr: {
    nav: {
      alliances: 'Alliances',
      directives: 'Directives',
      portal: 'Portail d\'Acces'
    },
    hero: {
      badge: 'Reseau Etabli',
      title: 'La Porte Centrale vers les Reseaux Souverains et les Ordres Historiques.',
      subtitle: 'Facilitant l\'entree securisee, l\'alignement strategique et la direction verifiee a travers les conseils mondiaux, les fraternites d\'elite et les leges esoteriques.',
      cta1: 'Initier une Consultation',
      cta2: 'Consulter le Mandat Public'
    },
    matrix: {
      label: 'Repertoire des Reseaux',
      title: 'La Matrice des Alliances'
    },
    tabs: {
      geopolitical: 'Conseils Geopolitiques et Institutionnels',
      fraternities: 'Fraternites Historiques et Ordres Esoteriques',
      clubs: 'Clubs Collegiaux et Prives Exclusifs',
      cultures: 'Cultures Creatives et Traditions Populaires'
    },
    gateway: {
      label: 'Acces Securise',
      title: 'La Porte',
      desc: 'Soumettez vos references pour une entree verifiee dans les reseaux souverains.'
    },
    form: {
      designation: 'Designation du Candidat',
      alignment: 'Alignement du Reseau',
      manifesto: 'Manifeste d\'Intention',
      selectNetwork: 'Selectionnez un reseau',
      submit: 'Transmettre la Requete Securisee',
      encrypting: 'Chiffrement des Donnees de Transmission...',
      vetting: 'Verification du Routage du Candidat...',
      successTitle: 'Transmission Securisee',
      successMsg: 'Nos coordinateurs de reseau achemineront votre profil via les canaux appropries.',
      close: 'Accuser Reception'
    },
    footer: {
      disclaimer: 'L\'acces est strictement controle par jetons et soumis a verification. La surveillance non autorisee est interdite.'
    }
  },
  es: {
    nav: {
      alliances: 'Alianzas',
      directives: 'Directivas',
      portal: 'Portal de Acceso'
    },
    hero: {
      badge: 'Red Establecida',
      title: 'La Puerta Central a las Redes Soberanas y las Ordenes Historicas.',
      subtitle: 'Facilitando la entrada segura, la alineacion estrategica y la direccion verificada a traves de consejos globales, fraternidades de elite y legados esotericos.',
      cta1: 'Iniciar Consulta de Admision',
      cta2: 'Revisar Mandato Publico'
    },
    matrix: {
      label: 'Directorio de Redes',
      title: 'La Matriz de Alianzas'
    },
    tabs: {
      geopolitical: 'Consejos Geopoliticos e Institucionales',
      fraternities: 'Fraternidades Historicas y Ordenes Esotericas',
      clubs: 'Clubes Colegiales y Privados Exclusivos',
      cultures: 'Culturas Creativas y Tradiciones Populares'
    },
    gateway: {
      label: 'Acceso Seguro',
      title: 'La Puerta',
      desc: 'Envie sus credenciales para una entrada verificada en las redes soberanas.'
    },
    form: {
      designation: 'Designacion del Candidato',
      alignment: 'Alineacion de la Red',
      manifesto: 'Manifiesto de Intencion',
      selectNetwork: 'Seleccione una red',
      submit: 'Transmitir Solicitud Segura',
      encrypting: 'Cifrando Datos de Transmision...',
      vetting: 'Verificando Enrutamiento del Candidato...',
      successTitle: 'Transmision Asegurada',
      successMsg: 'Nuestros coordinadores de red dirigiran su perfil a traves de los canales correctos.',
      close: 'Reconocer'
    },
    footer: {
      disclaimer: 'El acceso esta estrictamente controlado por tokens y sujeto a verificacion. El monitoreo no autorizado esta prohibido.'
    }
  }
};

// === Language Data for Dropdown ===
const langDisplay = {
  en: 'EN',
  fr: 'FR',
  es: 'ES'
};

// === State Variables ===
let currentLang = localStorage.getItem('apex-lang') || 'en';

// === DOM Elements ===
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangDisplay = document.getElementById('currentLang');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const networkTabs = document.getElementById('networkTabs');
const intakeForm = document.getElementById('intakeForm');
const formOverlay = document.getElementById('formOverlay');
const successModal = document.getElementById('successModal');
const closeSuccess = document.getElementById('closeSuccess');

// === Initialize Application ===
function init() {
  applyLanguage(currentLang);
  setupLanguageSelector();
  setupMobileMenu();
  setupTabs();
  setupForm();
  setupSmoothScroll();
}

// === Language Functions ===
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('apex-lang', lang);
  currentLangDisplay.textContent = langDisplay[lang];

  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = t;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        value = null;
        break;
      }
    }

    if (value && typeof value === 'string') {
      el.textContent = value;
    }
  });

  document.documentElement.lang = lang;
}

function setupLanguageSelector() {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-lang');
      if (selectedLang && translations[selectedLang]) {
        applyLanguage(selectedLang);
        langDropdown.classList.remove('active');

        document.querySelectorAll('.mobile-lang .lang-option').forEach(mobileBtn => {
          mobileBtn.classList.toggle('active', mobileBtn.getAttribute('data-lang') === selectedLang);
        });
      }
    });
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
  });

  document.querySelectorAll('.mobile-lang .lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang && translations[selectedLang]) {
        applyLanguage(selectedLang);
        document.querySelectorAll('.mobile-lang .lang-option').forEach(b => {
          b.classList.toggle('active', b === btn);
        });
      }
    });
  });
}

// === Mobile Menu ===
function setupMobileMenu() {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// === Tab System ===
function setupTabs() {
  const tabs = networkTabs.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetContent = document.getElementById(`tab-${targetId}`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// === Form Handling ===
function setupForm() {
  intakeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    formOverlay.classList.add('active');

    const loadingTexts = formOverlay.querySelectorAll('.loading-text');

    await new Promise(resolve => setTimeout(resolve, 3000));

    formOverlay.classList.remove('active');
    successModal.classList.add('active');
  });

  closeSuccess.addEventListener('click', () => {
    successModal.classList.remove('active');
    intakeForm.reset();
  });
}

// === Smooth Scroll ===
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// === Initialize on DOM Ready ===
document.addEventListener('DOMContentLoaded', init);
