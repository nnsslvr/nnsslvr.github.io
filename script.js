const projects = [
  {
    id: 1, emoji: '🔥',
    category: 'embedded', catLabel: 'Embedded Systems',
    title: 'Multi-Sensor Industrial Fire Safety System',
    video: 'videos/multi-sensor-fire-safety-simulation.mp4',
    desc: 'Sistem keamanan kebakaran industri otonom berbasis Arduino dengan dual flame sensor & analog temperature sensor. Dual-stage logic Warning/Danger dengan safety-latching alarm & secure reset interlock.',
    detail: 'Merancang standalone Arduino-based industrial fire safety system yang mengintegrasikan dual flame sensor dan analog temperature sensor dengan dual-stage risk logic:\n• Warning: suhu >40°C atau deteksi api tunggal\n• Danger: suhu >60°C / deteksi api ganda / Emergency Button trigger\n\nDilengkapi safety-latching alarm mechanism (1000 Hz buzzer + LED indicator) dan secure multi-condition reset interlock — hanya dapat direset jika semua parameter kembali aman. Sepenuhnya didesain, diprogram, dan divalidasi pada prototipe hardware fisik.',
    tags: ['Arduino', 'Embedded C', 'Dual Flame Sensor', 'Safety Logic', 'Hardware Prototype'],
    specs: [
      { k: 'MCU', v: 'Arduino' },
      { k: 'Sensor', v: 'Dual Flame + Analog Temp' },
      { k: 'Threshold', v: 'Warning 40°C / Danger 60°C' },
      { k: 'Status', v: 'VALIDATED' },
    ]
  },
  {
    id: 2, emoji: '🔒',
    category: 'embedded', catLabel: 'Embedded Systems',
    title: 'Smart Door Lock — Fingerprint Security System',
    photos: [
      'photos/smart-door-lock-01.jpg',
      'photos/smart-door-lock-02.jpg',
      'photos/smart-door-lock-03.jpg'
    ],
    desc: 'Fingerprint-based smart door lock using Arduino Uno R3 & solenoid. Biometric matching >90% confidence, EEPROM storage for 5 IDs, Proteus simulation, and physical hardware validation.',
    detail: 'Designed and built a fingerprint-based smart door lock system (hardware + software):\n• MCU: Arduino Uno R3 | Actuator: solenoid + relay\n• Fingerprint enrollment & biometric matching (>90% confidence threshold)\n• EEPROM-based storage: up to 5 fingerprint IDs\n• UI: LCD menu navigation via 4 push buttons\n• Simulated in Proteus (PSPICE) + validated on physical hardware prototype\n• Deliverables: report, block diagram, flowchart, source code, demo video',
    tags: ['Arduino Uno R3', 'Embedded C', 'Fingerprint', 'EEPROM', 'Proteus', 'Solenoid'],
    specs: [
      { k: 'MCU', v: 'Arduino Uno R3' },
      { k: 'Actuator', v: 'Solenoid + Relay' },
      { k: 'Confidence', v: '>90%' },
      { k: 'Status', v: 'VALIDATED' },
    ]
  },
  {
    id: 3, emoji: '🌐',
    category: 'web', catLabel: 'Full-Stack Web',
    title: 'AI Web Portal & Futuristic Authentication System',
    desc: 'Dynamic web app featuring an AI Portal Landing Page with animated moving backgrounds, a Glassmorphism login/register system, and a secure PHP authentication pipeline with SQL Injection prevention.',
    detail: 'Built a full-stack web application:\n• Interactive AI Portal Landing Page with moving background & smooth visual animations\n• Modern Glassmorphism login & registration system with responsive styling\n• Secure PHP authentication pipeline using Prepared Statements (bind_param) — eliminates SQL Injection vulnerabilities\n• PHP Native Password Hashing (password_hash) to safeguard user credentials\n• Responsive grid system & component standardization',
    tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Glassmorphism', 'Security'],
    specs: [
      { k: 'Backend', v: 'PHP + MySQL' },
      { k: 'Security', v: 'Prepared Statements + Password Hash' },
      { k: 'Design', v: 'Glassmorphism UI' },
      { k: 'Status', v: 'COMPLETED' },
    ]
  },
  {
    id: 4, emoji: '🛒',
    category: 'web', catLabel: 'Full-Stack Web',
    title: 'Full-Stack E-Commerce Platform',
    desc: 'End-to-end e-commerce platform with UML blueprints (Class, Sequence, Activity Diagrams), PHP-MySQLi account module, full CRUD relational database, and edge-case routing logic for transaction handling.',
    detail: 'Developed a full-stack e-commerce platform:\n• UML Design: Class, Sequence, and Activity Diagrams to map secure purchase journeys\n• Account administration module: native PHP-MySQLi for user profile data management\n• Core CRUD relational algorithms: User, Cart, Product, and Shipping modules\n• Edge-case routing logic: transaction failures, payment reversals, courier delivery updates\n• Relational database modeling with MySQL',
    tags: ['PHP', 'MySQLi', 'OOP', 'UML', 'CRUD', 'MySQL'],
    specs: [
      { k: 'Backend', v: 'PHP + MySQLi' },
      { k: 'Database', v: 'MySQL Relational' },
      { k: 'Design', v: 'UML Class/Sequence/Activity' },
      { k: 'Status', v: 'COMPLETED' },
    ]
  },
  {
    id: 5, emoji: '🤖',
    category: 'ml', catLabel: 'Machine Learning',
    title: 'Handwritten Letter Recognition — EMNIST',
    photos: [
      'photos/emnist-letter-recognition-01.jpg',
      'photos/emnist-letter-recognition-02.jpg',
      'photos/emnist-letter-recognition-03.jpg'
    ],
    desc: 'End-to-end ML pipeline on a 145,600-sample EMNIST Letters dataset. Covers preprocessing, feature engineering, multi-class classification, matrix computation, and confusion matrix evaluation.',
    detail: 'Built a complete data science & ML pipeline:\n• Data ingestion & transformation: Pandas, NumPy, Scikit-learn (145,600 samples)\n• Linear algebraic transformation arrays & high-dimensional matrix computations\n• Multi-class classification architecture (26 alphabet classes)\n• Performance tracking with Matplotlib: accuracy metrics & confusion matrix analysis\n• Feature engineering to improve model generalization\n• Reusable ML pipeline for future AI/computer vision development',
    tags: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'EMNIST', 'OCR'],
    specs: [
      { k: 'Dataset', v: 'EMNIST Letters (145.600 samples)' },
      { k: 'Framework', v: 'Scikit-learn' },
      { k: 'Task', v: '26-class Classification' },
      { k: 'Status', v: 'COMPLETED' },
    ]
  },
  {
    id: 6, emoji: '🏍️',
    category: 'systems', catLabel: 'Systems Programming',
    title: 'Motorbike Rental Terminal Application (CLI)',
    desc: 'High-performance CLI terminal utility in C for resource allocation coordination of a commercial motorbike rental platform. Modular functional design with low-level memory allocation.',
    detail: 'Built a CLI terminal application in C:\n• Resource allocation coordination for a commercial motorbike rental platform\n• Modular functional design: asset state tracking, customer registries, fee assessment\n• Low-level memory allocation protocols for system performance stability\n• Low resource overhead execution\n• Variable fee assessment calculations based on duration & vehicle type',
    tags: ['C', 'CLI', 'Memory Management', 'Modular Design', 'Systems Programming'],
    specs: [
      { k: 'Language', v: 'C' },
      { k: 'Type', v: 'CLI Terminal App' },
      { k: 'Focus', v: 'Low-level Memory Management' },
      { k: 'Status', v: 'COMPLETED' },
    ]
  },
  {
    id: 7, emoji: '🎲',
    category: 'systems', catLabel: 'Systems Programming',
    title: 'Interactive Board Game Simulation & OOP',
    desc: 'Interactive Snakes & Ladders simulator in Python with deterministic random movement. OOP implementation in Java & C# applying inheritance, polymorphism, and encapsulation design patterns.',
    detail: 'Built an interactive board game simulation:\n• Snakes & Ladders simulator in Python: deterministic random movement mechanics & event handling\n• Clean, scalable code architecture using core Java & C# OOP paradigms\n• Structural design patterns applied:\n  - Inheritance: game entity class hierarchies\n  - Polymorphism: flexible game logic state management\n  - Encapsulation: protected data object access\n• Multi-language implementation: Python, Java, C#',
    tags: ['Python', 'Java', 'C#', 'OOP', 'Inheritance', 'Polymorphism', 'Encapsulation'],
    specs: [
      { k: 'Languages', v: 'Python, Java, C#' },
      { k: 'Paradigm', v: 'Object-Oriented Programming' },
      { k: 'Pattern', v: 'Inheritance, Polymorphism, Encapsulation' },
      { k: 'Status', v: 'COMPLETED' },
    ]
  },
  {
    id: 8, emoji: '💨',
    category: 'energy', catLabel: 'Renewable Energy',
    title: 'Hybrid Power System — Karimunjawa Island',
    photos: [
      'photos/hybrid-power-karimunjawa-01.jpg',
      'photos/hybrid-power-karimunjawa-02.jpg',
      'photos/hybrid-power-karimunjawa-03.jpg',
      'photos/hybrid-power-karimunjawa-04.jpg',
      'photos/hybrid-power-karimunjawa-05.jpg'
    ],
    desc: 'Techno-economic feasibility study of 4 hybrid power generation configurations. PLTD+Wind identified as optimal: Cost of Generation reduced from Rp1,326 to Rp1,231/kWh. 100kW blade design using QBlade NACA 2414. Peer-reviewed publication.',
    detail: 'Led a techno-economic feasibility study for hybrid power generation:\n• Compared 4 configurations: PLTD only, PLTD+Solar, PLTD+Wind, PLTS+PLTB\n• Optimal solution: PLTD+Wind → Cost of Generation Rp1,326 → Rp1,231/kWh (2023–2043)\n• Designed 100 kW wind turbine blade: QBlade (NACA 2414 airfoil)\n• Validated under short-circuit & intermittency conditions in DIgSILENT PowerFactory\n• Outcome: peer-reviewed publication on remote island electrification.',
    tags: ['QBlade', 'HOMER', 'DIgSILENT', 'NACA 2414', 'Techno-Economic', 'Published'],
    specs: [
      { k: 'Kapasitas', v: '100 kW Wind Turbine' },
      { k: 'BPP Optimal', v: 'Rp1.231/kWh' },
      { k: 'Proyeksi', v: '2023–2043 (20 years)' },
      { k: 'Status', v: '📄 PEER-REVIEWED' },
    ]
  },
  {
    id: 9, emoji: '📡',
    category: 'iot', catLabel: 'IoT',
    title: 'IoT Room Monitoring — Humidity & Temperature',
    photos: [
      'photos/iot-room-monitoring-01.jpg',
      'photos/iot-room-monitoring-02.jpg'
    ],
    desc: 'Real-time IoT room monitoring system using NodeMCU ESP8266 & DHT11 sensor. Temperature and humidity data transmitted wirelessly via WiFi to a custom mobile app built with Kodular.',
    detail: 'Built an end-to-end IoT monitoring system:\n• Hardware: NodeMCU ESP8266 + DHT11 sensor\n• Firmware: reads DHT11 output and transmits data via WiFi\n• Interface: custom mobile application built with Kodular for remote monitoring\n• Full data pipeline: sensor → microcontroller → WiFi → mobile app display\n• Complete block diagram & system flowchart design',
    tags: ['NodeMCU ESP8266', 'DHT11', 'WiFi', 'Kodular', 'IoT', 'Mobile App'],
    specs: [
      { k: 'MCU', v: 'NodeMCU ESP8266' },
      { k: 'Sensor', v: 'DHT11' },
      { k: 'Interface', v: 'Mobile App — Kodular' },
      { k: 'Status', v: 'COMPLETED' },
    ]
  },
  {
    id: 10, emoji: '🦾',
    category: 'robotics', catLabel: 'Robotics',
    title: 'Autonomous Rescue Robot — KRI 2023 🥇',
    photos: [
      'photos/arjuna-hexapod-01.png',
      'photos/arjuna-hexapod-02.png',
      'photos/arjuna-hexapod-03.jpeg'
    ],
    desc: 'Autonomous rescue robot for KRI 2023 KRSRI Division. Capable of navigating earthquake & landslide disaster simulations and autonomously detecting victims. 1st Place Regional 1, Indonesian Robot Contest 2023.',
    detail: 'Led a 4-person interdisciplinary team for KRI 2023:\n• Autonomous robot designed to navigate disaster simulation environments (earthquake & landslide debris)\n• Real-time and autonomous victim detection\n• Competed against university teams across Regional 1\n• Outcome: 🥇 1st Place Regional 1 — KRI 2023, KRSRI Division',
    tags: ['Robotics', 'Autonomous', 'Sensor Integration', 'Embedded Systems', 'Team Lead'],
    specs: [
      { k: 'Competition', v: 'KRI 2023' },
      { k: 'Division', v: 'KRSRI' },
      { k: 'Role', v: 'Team Lead (4 members)' },
      { k: 'Achievement', v: '🥇 1st Place Regional 1' },
    ]
  },
  {
    id: 11, emoji: '☀️',
    category: 'energy', catLabel: 'Renewable Energy',
    title: 'Solar PV On-Grid System Design (PLTS)',
    photos: [
      'photos/solar-pv-offgrid-01.jpg',
      'photos/solar-pv-offgrid-02.jpg',
      'photos/solar-pv-offgrid-03.jpg'
    ],
    desc: 'Design & economic analysis of an on-grid Solar PV system for residential application in Jakarta using PVsyst. Estimated annual output 6.40 MWh/year, performance ratio 79.42%. Full LCC, LCOE, NPV, PI, and Payback Period evaluation.',
    detail: 'Designed an on-grid Solar PV system for a residential application in Kebayoran Lama, Jakarta:\n• Load calculation, PV sizing, inverter selection, and component specification\n• Performance simulation using PVsyst: 6.40 MWh/year estimated annual output, 79.42% performance ratio\n• Full techno-economic evaluation: Life Cycle Cost (LCC), Levelized Cost of Energy (LCOE), NPV, Profitability Index, and Payback Period\n• Solar irradiance analysis & household load profiling\n• CO₂ emission reduction estimation for sustainable energy implementation',
    tags: ['PVsyst', 'LCOE', 'NPV', 'LCC', 'Solar PV', 'Energy Economics'],
    specs: [
      { k: 'Annual Output', v: '6.40 MWh/year' },
      { k: 'Perf. Ratio', v: '79.42%' },
      { k: 'Tool', v: 'PVsyst' },
      { k: 'Status', v: 'COMPLETED' },
    ]
  },
  {
    id: 12, emoji: '🌬️',
    category: 'embedded', catLabel: 'Embedded Systems',
    title: 'Automatic Fan & Humidity Control — DHT11',
    desc: 'Standalone automatic environmental control system using Arduino Uno, DHT11, relay, fan, and water pump. 4-condition control logic based on dual sensor thresholds (temperature ≥25°C / humidity 45%) with RGB LED indicator & LCD I2C display.',
    detail: 'Designed and built a standalone automatic environmental control system:\n• Components: Arduino Uno, DHT11, relay, fan, water pump, LCD I2C, RGB LED\n• Logic: 4-condition control based on dual sensor thresholds (temperature ≥25°C / humidity 45%)\n• Fan and water pump activated independently to maintain room comfort without manual input\n• RGB LED indicators for real-time visual status feedback\n• LCD I2C display: real-time temperature (°C) and humidity (%) readout\n• Validated on physical hardware prototype',
    tags: ['Arduino Uno', 'DHT11', 'Relay', 'LCD I2C', 'RGB LED', 'Control Logic'],
    specs: [
      { k: 'MCU', v: 'Arduino Uno' },
      { k: 'Sensor', v: 'DHT11' },
      { k: 'Actuator', v: 'Fan + Water Pump' },
      { k: 'Status', v: 'COMPLETED' },
    ]
  },
];

// RENDER PROJECTS
function renderProjects(filter = 'all') {
  const grid = document.getElementById('portfolio-grid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="project-img">
        <div class="project-img-inner">${p.emoji}
          <div class="project-badge">${p.catLabel}</div>
        </div>
      </div>
      <div class="project-body">
        <div class="project-category">${p.catLabel}</div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
  });
}
renderProjects();

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// MODAL
let currentMedia = [];
let currentMediaIdx = 0;
 
function buildMediaList(p) {
  const media = [];
  if (p.video) media.push({ type: 'video', src: p.video });
  if (p.photos && p.photos.length) p.photos.forEach(src => media.push({ type: 'image', src }));
  return media;
}
 
function renderMedia() {
  const modalImg = document.getElementById('modal-img');
  if (!currentMedia.length) return;
  const m = currentMedia[currentMediaIdx];
 
  const inner = m.type === 'video'
    ? `<video src="${m.src}" controls playsinline preload="metadata" style="width:100%;height:100%;object-fit:cover;background:#000"></video>`
    : `<img src="${m.src}" alt="" style="width:100%;height:100%;object-fit:cover" />`;
 
  const navBtnStyle = `position:absolute;top:50%;transform:translateY(-50%);background:rgba(9,12,15,0.6);
    border:1px solid rgba(255,255,255,0.25);color:#fff;width:36px;height:36px;font-size:1.3rem;line-height:1;
    cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:4px;z-index:2;`;
 
  const nav = currentMedia.length > 1 ? `
    <button style="${navBtnStyle}left:10px;" onclick="event.stopPropagation();modalMediaStep(-1)">‹</button>
    <button style="${navBtnStyle}right:10px;" onclick="event.stopPropagation();modalMediaStep(1)">›</button>
    <div style="position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:6px;z-index:2;">
      ${currentMedia.map((_, i) => `<span onclick="event.stopPropagation();modalMediaGo(${i})"
        style="width:7px;height:7px;border-radius:50%;cursor:pointer;background:${i === currentMediaIdx ? '#f59e0b' : 'rgba(255,255,255,0.4)'}"></span>`).join('')}
    </div>` : '';
 
  modalImg.innerHTML = `<div style="position:relative;width:100%;height:100%">${inner}${nav}</div>`;
}
 
function modalMediaStep(dir) {
  const vid = document.querySelector('#modal-img video');
  if (vid) vid.pause();
  currentMediaIdx = (currentMediaIdx + dir + currentMedia.length) % currentMedia.length;
  renderMedia();
}
function modalMediaGo(i) {
  const vid = document.querySelector('#modal-img video');
  if (vid) vid.pause();
  currentMediaIdx = i;
  renderMedia();
}
 
function openModal(p) {
  currentMedia = buildMediaList(p);
  currentMediaIdx = 0;
  const modalImg = document.getElementById('modal-img');
 
  if (currentMedia.length) {
    Object.assign(modalImg.style, { fontSize: '', display: 'block', background: '#000' });
    renderMedia();
  } else {
    modalImg.innerHTML = '';
    modalImg.textContent = p.emoji;
    Object.assign(modalImg.style, { fontSize: '6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg3)' });
  }
 
  document.getElementById('modal-cat').textContent = p.catLabel;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').innerHTML = p.detail.replace(/\n/g, '<br>');
  document.getElementById('modal-specs').innerHTML = p.specs.map(s =>
    `<div class="spec-row"><div class="spec-key">${s.k}</div><div class="spec-val">${s.v}</div></div>`
  ).join('');
  document.getElementById('modal-tags').innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
  const vid = document.querySelector('#modal-img video');
  if (vid) vid.pause();
}
document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
 
// CONTACT FORM
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = '⏳ Sending...';
  btn.disabled = true;

  const data = new FormData(e.target);

  fetch('https://formspree.io/f/xwvgkvay', {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      document.getElementById('form-success').classList.add('show');
      e.target.reset();
      setTimeout(() => document.getElementById('form-success').classList.remove('show'), 5000);
    }
  })
  .finally(() => {
    btn.textContent = '⚡ Send Message';
    btn.disabled = false;
  });
}

// DOWNLOAD CV
function downloadCV(e) {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = 'CV_Annisa_Selvira_Revised.pdf';
  link.download = 'CV_Annisa_Selvira_Ra_ina_Gustiyaningsih.pdf';
  link.click();
}

// COUNTER ANIMATION
function animateCounter(el, target, suffix = '', decimals = 0) {
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toFixed(decimals) + suffix;
    if (current >= target) clearInterval(timer);
  }, 25);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(document.getElementById('count-gpa'), 3.53, '/4.00', 2);
      animateCounter(document.getElementById('count-proj'), 8, '+');
      animateCounter(document.getElementById('count-clients'), 1000, '+');
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const heroPanel = document.querySelector('.hero-panel');
if (heroPanel) counterObserver.observe(heroPanel);

// SCROLL REVEAL
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// SCROLL INDICATOR
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.scroll-dot').forEach(d => d.classList.remove('active'));
      const dot = document.querySelector(`.scroll-dot[data-section="${e.target.id}"]`);
      if (dot) dot.classList.add('active');
    }
  });
}, { threshold: 0.5 });
['hero','about','portfolio','skills','contact'].forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// CUSTOM CURSOR
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function animCursor() {
  cursor.style.left=mx+'px'; cursor.style.top=my+'px';
  rx+=(mx-rx)*0.18; ry+=(my-ry)*0.18;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animCursor);
})();
document.querySelectorAll('a,button,.project-card,.filter-btn').forEach(el => {
  el.addEventListener('mouseenter',()=>{ cursor.style.transform='translate(-50%,-50%) scale(2)'; ring.style.width='52px'; ring.style.height='52px'; });
  el.addEventListener('mouseleave',()=>{ cursor.style.transform='translate(-50%,-50%) scale(1)'; ring.style.width='36px'; ring.style.height='36px'; });
});

// HERO BACKGROUND
(function(){
  const canvas = document.getElementById('hero-video-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hero = document.getElementById('hero');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w, h, dpr;
  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.offsetWidth; h = hero.offsetHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    initNodes();
  }

  // Particle nodes
  let nodes = [];
  function initNodes(){
    const count = Math.max(28, Math.min(60, Math.floor((w*h)/28000)));
    nodes = Array.from({length: count}, () => ({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-0.5)*0.25, vy: (Math.random()-0.5)*0.25,
      r: 1.2 + Math.random()*1.6,
      pulse: Math.random()*Math.PI*2,
      color: Math.random() > 0.78 ? '#f59e0b' : '#22d3ee'
    }));
  }

  const LINK_DIST = 140;
  let waveOffset = 0;
  let t = 0;

  function drawScanWave(){
    const baseY = h * 0.82;
    const amp = 14;
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(34,211,238,0.35)';
    ctx.lineWidth = 1.4;
    for (let x = 0; x <= w; x += 4){
      const y = baseY
        + Math.sin((x*0.02) + waveOffset) * amp
        + Math.sin((x*0.05) + waveOffset*1.7) * (amp*0.35);
      x === 0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(245,158,11,0.18)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= w; x += 4){
      const y = baseY + 10
        + Math.sin((x*0.018) - waveOffset*1.3) * (amp*0.6);
      x === 0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    }
    ctx.stroke();
  }

  function draw(){
    ctx.clearRect(0,0,w,h);

    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      n.pulse += 0.03;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++){
      for (let j = i+1; j < nodes.length; j++){
        const a = nodes[i], b = nodes[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < LINK_DIST){
          ctx.globalAlpha = (1 - dist/LINK_DIST) * 0.35;
          ctx.strokeStyle = '#22d3ee';
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;

    nodes.forEach(n => {
      const glow = 0.5 + Math.sin(n.pulse)*0.5;
      ctx.beginPath();
      ctx.fillStyle = n.color;
      ctx.globalAlpha = 0.55 + glow*0.45;
      ctx.arc(n.x, n.y, n.r + glow*0.8, 0, Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    drawScanWave();

    waveOffset += 0.02;
    t++;
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
  if (reduceMotion) draw(); 
})();

// CIRCUIT CANVAS BACKGROUND
(function(){
  const canvas=document.getElementById('circuit-canvas');
  const ctx=canvas.getContext('2d');
  function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  resize(); window.addEventListener('resize',resize);
  const lines=Array.from({length:60},()=>({
    x:Math.random()*window.innerWidth, y:Math.random()*window.innerHeight,
    dir:Math.random()>0.5?'h':'v', len:60+Math.random()*200,
    speed:0.3+Math.random()*0.7, progress:Math.random(),
    color:Math.random()>0.7?'#f59e0b':'#22d3ee'
  }));
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    lines.forEach(l=>{
      l.progress+=l.speed*0.005;
      if(l.progress>1){ l.progress=0; l.x=Math.random()*canvas.width; l.y=Math.random()*canvas.height; l.dir=Math.random()>0.5?'h':'v'; l.len=60+Math.random()*200; }
      const p=l.progress;
      ctx.strokeStyle=l.color; ctx.lineWidth=1; ctx.globalAlpha=0.6*(1-Math.abs(p*2-1));
      ctx.beginPath();
      if(l.dir==='h'){ctx.moveTo(l.x,l.y);ctx.lineTo(l.x+l.len*p,l.y);}
      else{ctx.moveTo(l.x,l.y);ctx.lineTo(l.x,l.y+l.len*p);}
      ctx.stroke();
      ctx.fillStyle=l.color; ctx.globalAlpha=0.8*(1-Math.abs(p*2-1));
      ctx.beginPath();
      if(l.dir==='h')ctx.arc(l.x+l.len*p,l.y,2,0,Math.PI*2);
      else ctx.arc(l.x,l.y+l.len*p,2,0,Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha=1; requestAnimationFrame(draw);
  }
  draw();
})();
