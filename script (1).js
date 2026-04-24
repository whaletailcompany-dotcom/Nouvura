/* =============================================
   NOUVURA – script.js
   ============================================= */

/* =============================================
   TRANSLATIONS
   ============================================= */
const i18n = {
  fr: {
    nav_about: "À propos", nav_services: "Services", nav_pricing: "Tarifs",
    nav_portfolio: "Portfolio", nav_media: "Médias", nav_contact: "Contact",
    nav_request: "Demande",
    hero_tagline: '"It all started with an idea."',
    hero_cta: "Voir les Projets",
    about_tag: "Notre Histoire",
    about_title: "Art & Technologie,\nréunis dans chaque création.",
    about_p1: "NOUVURA est une agence créative de premier plan, alliant l'excellence artistique à la puissance technologique. Nous concevons des identités visuelles inoubliables, imprimons avec précision et façonnons des expériences numériques uniques.",
    about_p2: "De la gravure laser CNC aux interfaces numériques, chaque projet reflète notre engagement envers la perfection et l'innovation. Nous ne faisons pas que du design — nous créons des marques qui marquent les esprits.",
    stat_projects: "Projets", stat_years: "Années", stat_clients: "Clients",
    services_tag: "Ce que nous faisons", services_title: "Nos Services",
    srv_uiux: "UI/UX Design", srv_uiux_desc: "Interfaces digitales modernes, intuitives et visuellement impactantes.",
    srv_web: "Développement Web", srv_web_desc: "Sites web sur mesure, rapides et parfaitement optimisés.",
    srv_brand: "Branding", srv_brand_desc: "Identités de marque complètes qui transmettent votre vision.",
    srv_graphic: "Design Graphique", srv_graphic_desc: "Créations visuelles percutantes pour tous vos supports.",
    srv_dtf: "Impression DTF", srv_dtf_desc: "Impression haute résolution sur textile avec des couleurs éclatantes.",
    srv_cnc: "Gravure CNC", srv_cnc_desc: "Découpe et gravure de précision sur bois, acrylique, métal.",
    srv_laser: "Gravure Laser", srv_laser_desc: "Gravure laser ultra-précise pour vos créations les plus détaillées.",
    pricing_tag: "Investissement", pricing_title: "Tarifs & Formules",
    tier_ai: "Rapide & Abordable, assisté par IA",
    tier_hybrid: "Équilibré – Le plus recommandé",
    tier_pro: "100% Sur-mesure & Premium",
    tier_recommended: "Recommandé",
    cat_print: "🖨️ Design Print", cat_brand: "🟣 Branding",
    cat_social: "📱 Réseaux Sociaux", cat_video: "🎬 Montage Vidéo", cat_ui: "🌐 Design UI",
    p_bizcard: "Carte de Visite", p_flyer: "Flyer / Poster", p_banner: "Design Bannière",
    p_logo: "Logo Design", p_identity: "Identité de Marque",
    p_post: "Design Post", p_cover: "Design Couverture",
    p_shortvid: "Courte Vidéo", p_advid: "Vidéo Pub Professionnelle",
    p_landing: "Landing Page UI",
    btn_request: "👉 Demander ce service",
    port_tag: "Notre Travail", port_title: "Portfolio",
    pf_all: "Tous", pf_print: "Print", pf_brand: "Branding",
    pf_sign: "Signalétique", pf_3d: "2D/3D", pf_view: "Voir le projet",
    media_tag: "Chaîne YouTube", media_title: "Médias & Vidéos",
    req_tag: "Travaillons Ensemble", req_title: "Demander un Service",
    form_name: "Nom complet", form_service: "Type de service",
    form_select: "-- Sélectionner --",
    form_message: "Votre message",
    btn_wa: "📱 Envoyer via WhatsApp", btn_email: "✉️ Envoyer par Email",
    contact_tag: "Nous Joindre", contact_title: "Contact",
    footer_rights: "Tous droits réservés.", footer_ip: "Propriété Intellectuelle",
  },
  en: {
    nav_about: "About", nav_services: "Services", nav_pricing: "Pricing",
    nav_portfolio: "Portfolio", nav_media: "Media", nav_contact: "Contact",
    nav_request: "Request",
    hero_tagline: '"It all started with an idea."',
    hero_cta: "View Projects",
    about_tag: "Our Story",
    about_title: "Art & Technology,\nunited in every creation.",
    about_p1: "NOUVURA is a leading creative agency blending artistic excellence with technological power. We craft unforgettable visual identities, print with precision, and shape unique digital experiences.",
    about_p2: "From CNC laser engraving to digital interfaces, every project reflects our commitment to perfection and innovation. We don't just do design — we create brands that leave a lasting impression.",
    stat_projects: "Projects", stat_years: "Years", stat_clients: "Clients",
    services_tag: "What we do", services_title: "Our Services",
    srv_uiux: "UI/UX Design", srv_uiux_desc: "Modern, intuitive and visually striking digital interfaces.",
    srv_web: "Web Development", srv_web_desc: "Custom, fast and fully optimized websites.",
    srv_brand: "Branding", srv_brand_desc: "Complete brand identities that convey your vision.",
    srv_graphic: "Graphic Design", srv_graphic_desc: "Powerful visual creations for all your media.",
    srv_dtf: "DTF Printing", srv_dtf_desc: "High-resolution printing on textiles with vivid colors.",
    srv_cnc: "CNC Engraving", srv_cnc_desc: "Precision cutting and engraving on wood, acrylic, metal.",
    srv_laser: "Laser Engraving", srv_laser_desc: "Ultra-precise laser engraving for your most detailed creations.",
    pricing_tag: "Investment", pricing_title: "Pricing & Packages",
    tier_ai: "Fast & Affordable, AI-assisted",
    tier_hybrid: "Balanced – Most Recommended",
    tier_pro: "100% Custom & Premium",
    tier_recommended: "Recommended",
    cat_print: "🖨️ Print Design", cat_brand: "🟣 Branding",
    cat_social: "📱 Social Media", cat_video: "🎬 Video Editing", cat_ui: "🌐 UI Design",
    p_bizcard: "Business Card", p_flyer: "Flyer / Poster", p_banner: "Banner Design",
    p_logo: "Logo Design", p_identity: "Brand Identity",
    p_post: "Post Design", p_cover: "Cover Design",
    p_shortvid: "Short Video", p_advid: "Professional Ad Video",
    p_landing: "Landing Page UI",
    btn_request: "👉 Request This Service",
    port_tag: "Our Work", port_title: "Portfolio",
    pf_all: "All", pf_print: "Print", pf_brand: "Branding",
    pf_sign: "Signage", pf_3d: "2D/3D", pf_view: "View project",
    media_tag: "YouTube Channel", media_title: "Media & Videos",
    req_tag: "Let's Work Together", req_title: "Request a Service",
    form_name: "Full name", form_service: "Service type",
    form_select: "-- Select --",
    form_message: "Your message",
    btn_wa: "📱 Send via WhatsApp", btn_email: "✉️ Send by Email",
    contact_tag: "Get in Touch", contact_title: "Contact",
    footer_rights: "All rights reserved.", footer_ip: "Intellectual Property",
  },
  ar: {
    nav_about: "من نحن", nav_services: "الخدمات", nav_pricing: "الأسعار",
    nav_portfolio: "الأعمال", nav_media: "الوسائط", nav_contact: "اتصل بنا",
    nav_request: "طلب",
    hero_tagline: '"كل شيء بدأ بفكرة."',
    hero_cta: "اكتشف الأعمال",
    about_tag: "قصتنا",
    about_title: "الفن والتكنولوجيا،\nمجتمعان في كل إبداع.",
    about_p1: "NOUVURA وكالة إبداعية رائدة تجمع بين التميز الفني والقوة التكنولوجية. نصمم هويات بصرية لا تُنسى، ونطبع بدقة عالية، ونبتكر تجارب رقمية فريدة.",
    about_p2: "من الحفر بالليزر والـ CNC إلى الواجهات الرقمية، كل مشروع يعكس التزامنا بالكمال والابتكار. لا نكتفي بالتصميم — بل نبني علامات تجارية تُحدث أثراً حقيقياً.",
    stat_projects: "مشروع", stat_years: "سنوات", stat_clients: "عميل",
    services_tag: "ما نقدمه", services_title: "خدماتنا",
    srv_uiux: "تصميم UI/UX", srv_uiux_desc: "واجهات رقمية عصرية وجذابة بصرياً.",
    srv_web: "تطوير الويب", srv_web_desc: "مواقع مخصصة، سريعة ومحسّنة بالكامل.",
    srv_brand: "الهوية البصرية", srv_brand_desc: "هويات تجارية كاملة تعكس رؤيتك.",
    srv_graphic: "التصميم الجرافيكي", srv_graphic_desc: "تصاميم بصرية مؤثرة لجميع منصاتك.",
    srv_dtf: "طباعة DTF", srv_dtf_desc: "طباعة عالية الدقة على الأقمشة بألوان زاهية.",
    srv_cnc: "الحفر CNC", srv_cnc_desc: "قطع وحفر دقيق على الخشب والأكريليك والمعدن.",
    srv_laser: "الحفر الليزري", srv_laser_desc: "حفر ليزري فائق الدقة لأكثر تصاميمك تفصيلاً.",
    pricing_tag: "الاستثمار", pricing_title: "الأسعار والباقات",
    tier_ai: "سريع وبأسعار معقولة، بمساعدة الذكاء الاصطناعي",
    tier_hybrid: "متوازن – الأكثر توصية",
    tier_pro: "مخصص بالكامل وفاخر",
    tier_recommended: "موصى به",
    cat_print: "🖨️ تصميم مطبوعات", cat_brand: "🟣 الهوية",
    cat_social: "📱 وسائل التواصل", cat_video: "🎬 مونتاج الفيديو", cat_ui: "🌐 تصميم UI",
    p_bizcard: "بطاقة عمل", p_flyer: "فلاير / ملصق", p_banner: "تصميم بانر",
    p_logo: "تصميم شعار", p_identity: "هوية بصرية كاملة",
    p_post: "تصميم بوست", p_cover: "تصميم غلاف",
    p_shortvid: "فيديو قصير", p_advid: "فيديو إعلاني احترافي",
    p_landing: "واجهة صفحة هبوط",
    btn_request: "👉 اطلب هذه الخدمة",
    port_tag: "أعمالنا", port_title: "معرض الأعمال",
    pf_all: "الكل", pf_print: "مطبوعات", pf_brand: "هوية",
    pf_sign: "اللافتات", pf_3d: "2D/3D", pf_view: "عرض المشروع",
    media_tag: "قناة يوتيوب", media_title: "الوسائط والفيديوهات",
    req_tag: "لنعمل معاً", req_title: "طلب خدمة",
    form_name: "الاسم الكامل", form_service: "نوع الخدمة",
    form_select: "-- اختر --",
    form_message: "رسالتك",
    btn_wa: "📱 إرسال عبر واتساب", btn_email: "✉️ إرسال بالبريد الإلكتروني",
    contact_tag: "تواصل معنا", contact_title: "اتصل بنا",
    footer_rights: "جميع الحقوق محفوظة.", footer_ip: "الملكية الفكرية",
  }
};

let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = i18n[lang][key];
      } else if (el.tagName === 'OPTION') {
        el.textContent = i18n[lang][key];
      } else {
        el.innerHTML = i18n[lang][key].replace(/\n/g, '<br>');
      }
    }
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById('lang-' + lang);
  if (activeBtn) activeBtn.classList.add('active');
}

/* =============================================
   NAVBAR SCROLL
   ============================================= */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

/* =============================================
   MOBILE MENU
   ============================================= */
function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

/* =============================================
   SCROLL REVEAL
   ============================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =============================================
   PORTFOLIO FILTER
   ============================================= */
function filterPortfolio(cat) {
  document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  document.querySelectorAll('.port-item').forEach(item => {
    if (cat === 'all' || item.dataset.cat === cat) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

/* =============================================
   LIGHTBOX
   ============================================= */
function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lbImage').src = src;
  document.getElementById('lbImage').style.display = src.startsWith('images/') ? 'none' : 'block';
  document.getElementById('lbCaption').textContent = caption;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* =============================================
   VIDEO MODAL
   ============================================= */
function openVideo(videoId) {
  const modal = document.getElementById('videoModal');
  document.getElementById('videoFrame').src =
    `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideo() {
  document.getElementById('videoModal').classList.remove('open');
  document.getElementById('videoFrame').src = '';
  document.body.style.overflow = '';
}

/* =============================================
   REQUEST FORM
   ============================================= */
function getFormData() {
  const name = document.getElementById('reqName').value.trim();
  const service = document.getElementById('reqService').value;
  const msg = document.getElementById('reqMsg').value.trim();
  return { name, service, msg };
}

function requestService(serviceName) {
  document.getElementById('request').scrollIntoView({ behavior: 'smooth' });
  // Pre-select service
  const sel = document.getElementById('reqService');
  const opts = sel.options;
  for (let i = 0; i < opts.length; i++) {
    if (opts[i].textContent.toLowerCase().includes(serviceName.toLowerCase()) ||
        serviceName.toLowerCase().includes(opts[i].textContent.toLowerCase())) {
      sel.selectedIndex = i;
      break;
    }
  }
}

function sendWhatsApp() {
  const { name, service, msg } = getFormData();
  if (!name || !service) { alert('Veuillez remplir votre nom et choisir un service.'); return; }
  const text = `Bonjour NOUVURA,\n\nJe suis ${name} et je souhaite demander le service : *${service}*.\n\n${msg}\n\nMerci.`;
  window.open(`https://wa.me/213776532042?text=${encodeURIComponent(text)}`, '_blank');
}

function sendEmail() {
  const { name, service, msg } = getFormData();
  if (!name || !service) { alert('Veuillez remplir votre nom et choisir un service.'); return; }
  const subject = `Demande de service – ${service}`;
  const body = `Bonjour NOUVURA,\n\nNom : ${name}\nService demandé : ${service}\n\nMessage :\n${msg}\n\nMerci.`;
  window.location.href = `mailto:yacineiguenene@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* =============================================
   IP MODAL
   ============================================= */
function openIPModal() {
  document.getElementById('ipModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeIPModal() {
  document.getElementById('ipModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* =============================================
   LASER CANVAS ANIMATION
   ============================================= */
(function initLaser() {
  const canvas = document.getElementById('laserCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const lines = [];
  const NUM_LINES = 18;

  for (let i = 0; i < NUM_LINES; i++) {
    lines.push(createLine());
  }

  function createLine() {
    const fromEdge = Math.random() < 0.5;
    let x1, y1, x2, y2;

    if (fromEdge) {
      // From left/right edges
      x1 = Math.random() < 0.5 ? 0 : canvas.width;
      y1 = Math.random() * canvas.height;
      x2 = Math.random() * canvas.width;
      y2 = Math.random() * canvas.height;
    } else {
      // From top/bottom edges
      x1 = Math.random() * canvas.width;
      y1 = Math.random() < 0.5 ? 0 : canvas.height;
      x2 = Math.random() * canvas.width;
      y2 = Math.random() * canvas.height;
    }

    const isGold = Math.random() > 0.4;
    return {
      x1, y1, x2, y2,
      color: isGold ? '#D4AF37' : '#E50914',
      alpha: 0,
      maxAlpha: Math.random() * 0.25 + 0.05,
      speed: Math.random() * 0.005 + 0.002,
      phase: Math.random() * Math.PI * 2,
      width: Math.random() * 1.2 + 0.3,
    };
  }

  let animId;
  function drawLaser() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    lines.forEach((line, i) => {
      line.phase += line.speed;
      line.alpha = line.maxAlpha * Math.abs(Math.sin(line.phase));

      // Main beam
      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.strokeStyle = line.color;
      ctx.globalAlpha = line.alpha;
      ctx.lineWidth = line.width;
      ctx.shadowColor = line.color;
      ctx.shadowBlur = 12;
      ctx.stroke();

      // Glow
      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.strokeStyle = line.color;
      ctx.globalAlpha = line.alpha * 0.3;
      ctx.lineWidth = line.width * 5;
      ctx.shadowBlur = 30;
      ctx.stroke();

      ctx.shadowBlur = 0;
    });
    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(drawLaser);
  }

  // Only animate when hero is visible
  const heroObs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      drawLaser();
    } else {
      cancelAnimationFrame(animId);
    }
  }, { threshold: 0.1 });
  heroObs.observe(document.getElementById('hero'));
})();

/* =============================================
   HERO LOGO REVEAL ANIMATION
   ============================================= */
window.addEventListener('load', () => {
  const logo = document.getElementById('heroLogo');
  if (logo) {
    logo.style.opacity = '0';
    logo.style.transform = 'scale(0.8) translateY(30px)';
    logo.style.transition = 'opacity 1.2s ease, transform 1.2s cubic-bezier(0.22,1,0.36,1)';
    setTimeout(() => {
      logo.style.opacity = '1';
      logo.style.transform = '';
    }, 200);
  }

  // Set initial active lang button
  document.getElementById('lang-fr').classList.add('active');
});

/* =============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* =============================================
   KEYBOARD CLOSE MODALS
   ============================================= */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeVideo();
    closeIPModal();
  }
});
