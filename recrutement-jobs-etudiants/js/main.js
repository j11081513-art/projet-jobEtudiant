// ========================
// NAVIGATION MOBILE
// ========================
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
  burger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.right = '24px';
    navLinks.style.background = 'rgba(10,10,20,0.98)';
    navLinks.style.padding = '20px';
    navLinks.style.borderRadius = '16px';
    navLinks.style.border = '1px solid rgba(255,255,255,0.08)';
    navLinks.style.backdropFilter = 'blur(20px)';
  });
}

// ========================
// SCROLL ANIMATIONS
// ========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.cat-card, .how-step, .offre-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ========================
// TOAST NOTIFICATION
// ========================
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ========================
// FORMULAIRE INSCRIPTION
// ========================
const inscriptionForm = document.getElementById('inscriptionForm');
if (inscriptionForm) {
  inscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✅ Inscription réussie ! Bienvenue sur JobEtudiant');
    inscriptionForm.reset();
  });
}

// ========================
// ONGLETS FORMULAIRE
// ========================
const formTabs = document.querySelectorAll('.form-tab');
const formEtudiant = document.getElementById('form-etudiant');
const formEmployeur = document.getElementById('form-employeur');

formTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    formTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    if (tab.dataset.tab === 'etudiant') {
      if (formEtudiant) formEtudiant.style.display = 'block';
      if (formEmployeur) formEmployeur.style.display = 'none';
    } else {
      if (formEtudiant) formEtudiant.style.display = 'none';
      if (formEmployeur) formEmployeur.style.display = 'block';
    }
  });
});

// ========================
// FILTRE OFFRES
// ========================
const filtreSelect = document.getElementById('filtreSecteur');
const offresCards = document.querySelectorAll('.offre-card[data-secteur]');

if (filtreSelect) {
  filtreSelect.addEventListener('change', () => {
    const val = filtreSelect.value;
    offresCards.forEach(card => {
      card.style.display = (!val || card.dataset.secteur === val) ? 'grid' : 'none';
    });
  });
}

console.log('%c JobEtudiant 🎓 ', 'background:#1a1aff;color:#fff;font-size:18px;padding:8px 16px;border-radius:8px;font-weight:bold;');
console.log('%c Projet ESGIS — Recrutement Jobs Étudiants à Temps Partiel', 'color:#ff6b35;font-size:12px;');
