const LANG_STORAGE_KEY = 'dyc-language';
const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = ['en', 'mr'];
let translations = {};

async function fetchTranslations(lang) {
    const language = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
    try {
        const response = await fetch(`lang/${language}.json`);
        if (!response.ok) {
            throw new Error(`Unable to load language file: ${language}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (!key) return;
        const translation = translations[key];
        if (translation !== undefined) {
            element.textContent = translation;
        }
    });
}

function setLanguageAttribute(lang) {
    document.documentElement.lang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
}

function setActiveLanguageButton(lang) {
    document.querySelectorAll('.lang-button').forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
}

async function setLanguage(lang) {
    const selectedLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
    localStorage.setItem(LANG_STORAGE_KEY, selectedLang);
    const loadedTranslations = await fetchTranslations(selectedLang);
    if (loadedTranslations) {
        translations = loadedTranslations;
        applyTranslations();
        setLanguageAttribute(selectedLang);
        setActiveLanguageButton(selectedLang);
    }
}

function initLanguageSwitcher() {
    document.querySelectorAll('.lang-button').forEach((button) => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            setLanguage(lang);
        });
    });
}

function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    document.addEventListener('click', (event) => {
        if (hamburger && navMenu && !navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('formMessage');

        if (!name || !email || !subject || !message) {
            alert(translations['contact.validation.fill'] || 'Please fill in all required fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert(translations['contact.validation.email'] || 'Please enter a valid email address.');
            return;
        }

        console.log('Form Data:', {
            name,
            email,
            phone: document.getElementById('phone').value.trim(),
            subject,
            message,
        });

        if (formMessage) {
            formMessage.style.display = 'block';
            formMessage.textContent = translations['contact.success'] || 'Thank you! Your message has been sent successfully.';
            contactForm.reset();
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });
}

function initPage() {
    const savedLang = localStorage.getItem(LANG_STORAGE_KEY) || DEFAULT_LANG;
    initLanguageSwitcher();
    initMobileMenu();
    highlightActiveNavLink();
    initContactForm();
    setLanguage(savedLang);
}

window.addEventListener('DOMContentLoaded', initPage);
