/* ===== Utilities ===== */
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ===== Mobile Nav ===== */
const navToggle = $('.nav-toggle');
const nav = $('#nav');
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

/* Close nav on link click (mobile) */
$$('#nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

/* ===== Smooth scroll ===== */
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1 && $(id)) {
      e.preventDefault();
      $(id).scrollIntoView({behavior: prefersReduced ? 'auto' : 'smooth'});
    }
  });
});

/* ===== Reveal on scroll ===== */
const revealEls = $$('[data-reveal]');
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  }
}, {threshold: 0.15});
revealEls.forEach(el => io.observe(el));

/* ===== Year in footer ===== */
$('#year').textContent = new Date().getFullYear();

/* ===== Cookie notice ===== */
const cookieEl = $('#cookie');
const cookieKey = 'wellnest-cookie-choice';
const savedCookie = localStorage.getItem(cookieKey);
if (!savedCookie) {
  cookieEl.style.display = 'flex';
}
cookieEl?.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-cookie]');
  if (!btn) return;
  localStorage.setItem(cookieKey, btn.dataset.cookie);
  cookieEl.remove();
});

/* ===== Class data & rendering ===== */
const classData = [
  { title: "Projections: Like the Flowing River", category: "Mindfulness", instructor: "Ece O.", start: offsetDate(1, 18, 35), durationMin: 30 },
  { title: "Yoga: Gentle Flow", category: "Yoga", instructor: "Josie L.", start: offsetDate(3, 9, 0), durationMin: 45 },
  { title: "Focus Meditation", category: "Meditation", instructor: "Claudia W.", start: offsetDate(0, 20, 0), durationMin: 20 },
  { title: "Strength Express", category: "Fitness", instructor: "Erhan A.", start: offsetDate(2, 7, 30), durationMin: 25 },
  { title: "Self-Coaching: Weekly Reset", category: "Self Help & Coaching", instructor: "S. Medina", start: offsetDate(7, 18, 0), durationMin: 30 },
  { title: "Hobby Club: Sketch & Chill", category: "Hobby Club", instructor: "Lu Yogasana", start: offsetDate(5, 17, 15), durationMin: 40 },
];
function offsetDate(daysFromNow, h, m){
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  d.setHours(h, m, 0, 0);
  return d;
}

const classWrap = $('#class-cards');
function renderClasses(filter = 'all'){
  classWrap.innerHTML = '';
  const items = classData.filter(c => filter === 'all' ? true : c.category === filter);
  for (const c of items) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="meta">
        <span class="pill">${c.category}</span>
        <span>Duration: ${c.durationMin}m</span>
      </div>
      <div class="title">${c.title}</div>
      <div class="meta">Instructor: ${c.instructor}</div>
      <div class="countdown" aria-live="polite">${countdownText(c.start)}</div>
    `;
    classWrap.appendChild(card);
  }
}
renderClasses();

function countdownText(startDate){
  const now = new Date();
  const diff = startDate - now;
  if (diff <= 0) return 'Live now';
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const parts = [];
  if (d) parts.push(`${d} day${d>1?'s':''}`);
  if (h || d) parts.push(`${h} hr`);
  parts.push(`${m} min`);
  return `Starts in ${parts.join(' ')}`;
}

/* Update countdown every minute */
setInterval(() => {
  $$('.card .countdown').forEach((el, i) => el.textContent = countdownText(classData[i].start));
}, 60000);

/* Filters */
$$('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    $$('.chip').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    renderClasses(chip.dataset.filter);
  });
});

/* ===== Instructors ===== */
const instructors = [
  { name: 'Erhan Ali Yılmaz', area: 'Mindfulness Meditation' },
  { name: 'Claudia Warias', area: 'Mindfulness' },
  { name: 'Josie Lindley', area: 'Yoga' },
  { name: 'Lu Yogasana', area: 'Yoga & Meditation' },
  { name: 'Soysoraya Medina', area: 'Self Help & Coaching' },
  { name: 'Alex Kim', area: 'Fitness' },
];
const instructorGrid = $('#instructor-grid');
instructors.forEach(p => {
  const el = document.createElement('article');
  el.className = 'person';
  el.innerHTML = `
    <div class="avatar" aria-hidden="true">${initials(p.name)}</div>
    <div>
      <h3>${p.name}</h3>
      <p>${p.area}</p>
    </div>
  `;
  instructorGrid.appendChild(el);
});
function initials(name){
  return name.split(' ').map(x => x[0]).join('').slice(0,3).toUpperCase();
}

/* ===== Testimonials slider ===== */
const testimonials = [
  { quote: "Even 20 minutes makes my day better. Classes feel human.", author: "Christine — Play Store" },
  { quote: "I want to attend every lesson. Amazing experience full of contribution.", author: "yellow9 — App Store" },
  { quote: "Use it regularly and you’ll see real change. It works.", author: "Nancy — App Store" },
  { quote: "There’s always a topic I’m curious about.", author: "Shiera — Play Store" },
];
const slides = $('#slides');
testimonials.forEach(t => {
  const s = document.createElement('div');
  s.className = 'slide';
  s.innerHTML = `<blockquote>“${t.quote}”</blockquote><footer>${t.author}</footer>`;
  slides.appendChild(s);
});
let idx = 0;
const prev = $('.slider-btn.prev');
const next = $('.slider-btn.next');
function go(i){
  idx = (i + testimonials.length) % testimonials.length;
  slides.scrollTo({left: idx * slides.clientWidth, behavior: prefersReduced ? 'auto' : 'smooth'});
}
prev.addEventListener('click', () => go(idx - 1));
next.addEventListener('click', () => go(idx + 1));
slides.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') go(idx + 1);
  if (e.key === 'ArrowLeft') go(idx - 1);
});
let startX = 0;
slides.addEventListener('pointerdown', (e)=>{ startX = e.clientX; slides.setPointerCapture(e.pointerId); });
slides.addEventListener('pointerup', (e)=>{ 
  const dx = e.clientX - startX; 
  if (dx > 40) go(idx - 1);
  if (dx < -40) go(idx + 1);
});

/* ===== Small polish the numbers ===== */
const companies = $('#stat-companies');
let n = 40;
setInterval(() => {
  // harmless micro-variation for a "live" feel (doesn't exceed +/- 3)
  const delta = Math.floor(Math.random()*7)-3;
  n = Math.max(40, Math.min(60, n + delta));
  companies.textContent = `${n}+`;
}, 4000);
