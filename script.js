const projects = [
  {
    id: 1, emoji: '🔥',
    category: 'embedded', catLabel: 'Embedded Systems',
    title: 'Multi-Sensor Industrial Fire Safety System',
    desc: 'Sistem keamanan kebakaran industri otonom berbasis Arduino dengan dual flame sensor & analog temperature sensor. Dual-stage logic Warning/Danger dengan safety-latching alarm & secure reset interlock.',
    detail: 'Merancang standalone Arduino-based industrial fire safety system yang mengintegrasikan dual flame sensor dan analog temperature sensor dengan dual-stage risk logic:\n• Warning: suhu >40°C atau deteksi api tunggal\n• Danger: suhu >60°C / deteksi api ganda / Emergency Button trigger\n\nDilengkapi safety-latching alarm mechanism (1000 Hz buzzer + LED indicator) dan secure multi-condition reset interlock — hanya dapat direset jika semua parameter kembali aman. Sepenuhnya didesain, diprogram, dan divalidasi pada prototipe hardware fisik.',
    tags: ['Arduino', 'Embedded C', 'Dual Flame Sensor', 'Safety Logic', 'Hardware Prototype'],
    specs: [
      { k: 'MCU', v: 'Arduino' },
      { k: 'Sensor', v: 'Dual Flame + Temp Analog' },
      { k: 'Threshold', v: 'Warning 40°C / Danger 60°C' },
      { k: 'Status', v: 'VALIDATED' },
    ]
  },
  {
    id: 2, emoji: '💨',
    category: 'energy', catLabel: 'Renewable Energy',
    title: 'Hybrid Power System — Karimunjawa Island',
    desc: 'Analisis tekno-ekonomi 4 konfigurasi hybrid power generation untuk Pulau Karimunjawa. PLTD+Wind dipilih sebagai solusi optimal: mereduksi BPP dari Rp1.326 ke Rp1.231/kWh (2023–2043). Dipublikasikan peer-reviewed.',
    detail: 'Memimpin studi kelayakan tekno-ekonomi sistem pembangkitan hybrid di Pulau Karimunjawa — membandingkan 4 konfigurasi: PLTD only, PLTD+Solar, PLTD+Wind, dan PLTS+PLTB hybrid.\n\nHasil: PLTD+Wind diidentifikasi sebagai solusi optimal, mereduksi Cost of Generation dari Rp1.326/kWh ke Rp1.231/kWh selama proyeksi 20 tahun (2023–2043).\n\nMerancang blade turbin angin 100 kW menggunakan QBlade (NACA 2414 airfoil) dan memvalidasi stabilitas sistem di bawah kondisi short-circuit dan gangguan intermitency menggunakan DIgSILENT PowerFactory. Menghasilkan publikasi peer-reviewed tentang elektrifikasi pulau terpencil.',
    tags: ['QBlade', 'HOMER', 'DIgSILENT', 'NACA 2414', 'Techno-Economic', 'Published'],
    specs: [
      { k: 'Kapasitas', v: '100 kW Wind Turbine' },
      { k: 'BPP Optimal', v: 'Rp1.231/kWh' },
      { k: 'Proyeksi', v: '2023–2043 (20 tahun)' },
      { k: 'Status', v: '📄 PEER-REVIEWED' },
    ]
  },
  {
    id: 3, emoji: '🤖',
    category: 'ml', catLabel: 'Machine Learning',
    title: 'Handwritten Letter Recognition — EMNIST',
    desc: 'Pipeline end-to-end OCR-style multi-class classification menggunakan Scikit-learn & Pandas pada 145.600-sample EMNIST Letters dataset. Mencakup preprocessing, feature engineering, EDA, supervised classification, dan evaluasi confusion matrix.',
    detail: 'Membangun pipeline ML end-to-end untuk klasifikasi huruf tulisan tangan (OCR-style) pada dataset EMNIST Letters (145.600 sampel).\n\nPipeline mencakup:\n• Large-scale preprocessing: normalisasi, reshaping, label encoding, train-test split\n• Feature engineering untuk meningkatkan generalisasi model\n• Supervised multi-class classification (Scikit-learn)\n• EDA & visualisasi distribusi karakter (Matplotlib)\n• Evaluasi performa: accuracy metrics & confusion matrix analysis\n• Reliable recognition across all 26 alphabet classes',
    tags: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'EMNIST', 'OCR'],
    specs: [
      { k: 'Dataset', v: 'EMNIST Letters (145.600 sampel)' },
      { k: 'Framework', v: 'Scikit-learn' },
      { k: 'Task', v: '26-class Classification' },
      { k: 'Status', v: 'COMPLETED' },
    ]
  },
  {
    id: 4, emoji: '☀️',
    category: 'energy', catLabel: 'Renewable Energy',
    title: 'Solar PV On-Grid System Design (PLTS)',
    desc: 'Desain & analisis ekonomi sistem PLTS on-grid untuk aplikasi residensial di Jakarta menggunakan PVsyst. Output tahunan estimasi 6.40 MWh/year, performance ratio 79.42%. Evaluasi lengkap LCC, LCOE, NPV, PI, dan Payback Period.',
    detail: 'Merancang sistem PLTS on-grid untuk aplikasi residensial di Kebayoran Lama, Jakarta:\n• Load calculation, PV sizing, pemilihan inverter, spesifikasi komponen\n• Simulasi performa menggunakan PVsyst: 6.40 MWh/year estimasi produksi tahunan, performance ratio 79.42%\n• Evaluasi tekno-ekonomi lengkap: Life Cycle Cost (LCC), Levelized Cost of Energy (LCOE), NPV, Profitability Index, dan Payback Period\n• Solar irradiance analysis, household load profiling\n• Estimasi reduksi emisi CO₂ untuk implementasi energi berkelanjutan',
    tags: ['PVsyst', 'LCOE', 'NPV', 'LCC', 'Solar PV', 'Energy Economics'],
    specs: [
      { k: 'Produksi', v: '6.40 MWh/year' },
      { k: 'Perf. Ratio', v: '79.42%' },
      { k: 'Tool', v: 'PVsyst' },
      { k: 'Status', v: 'COMPLETED' },
    ]
  },
  {
    id: 5, emoji: '📡',
    category: 'iot', catLabel: 'IoT',
    title: 'IoT Room Monitoring — Humidity & Temperature',
    desc: 'Sistem monitoring ruangan real-time berbasis IoT menggunakan NodeMCU ESP8266 & sensor DHT11. Data suhu & kelembaban ditransmisikan via WiFi ke aplikasi mobile custom yang dibangun dengan Kodular.',
    detail: 'Membangun sistem monitoring ruangan berbasis IoT:\n• Hardware: NodeMCU ESP8266 + sensor DHT11\n• Firmware: membaca output analog DHT11, transmisi data via WiFi\n• Interface: aplikasi mobile custom dibangun dengan Kodular untuk remote monitoring\n• Desain lengkap block diagram sistem dan flowchart pipeline data dari sensor input → mikrokontroler processing → tampilan aplikasi mobile',
    tags: ['NodeMCU ESP8266', 'DHT11', 'WiFi', 'Kodular', 'IoT', 'Mobile App'],
    specs: [
      { k: 'MCU', v: 'NodeMCU ESP8266' },
      { k: 'Sensor', v: 'DHT11 (Suhu & Kelembaban)' },
      { k: 'Interface', v: 'Mobile App — Kodular' },
      { k: 'Status', v: 'COMPLETED' },
    ]
  },
  {
    id: 6, emoji: '🦾',
    category: 'robotics', catLabel: 'Robotics',
    title: 'Autonomous Rescue Robot — KRI 2023 🥇',
    desc: 'Robot penyelamat otonom untuk KRI 2023 Divisi KRSRI. Mampu menavigasi simulasi lingkungan bencana (gempa & longsor) dan mendeteksi korban secara otonom. Juara 1 Regional 1 Indonesian Robot Contest 2023.',
    detail: 'Memimpin tim 4 orang interdisiplin untuk mendesain dan membangun robot penyelamat otonom pada Indonesian Robot Contest (KRI) 2023, Divisi KRSRI (Kontes Robot Seni Budaya Indonesia).\n\nRobot dirancang untuk:\n• Menavigasi lingkungan simulasi bencana (puing gempa & tanah longsor)\n• Mendeteksi korban secara otonom\n\nBerkompetisi melawan tim universitas se-Regional 1 dan berhasil meraih Juara 1.',
    tags: ['Robotics', 'Autonomous System', 'Sensor Integration', 'Embedded Systems', 'Team Lead'],
    specs: [
      { k: 'Kompetisi', v: 'KRI 2023' },
      { k: 'Divisi', v: 'KRSRI' },
      { k: 'Peran', v: 'Team Lead (4 orang)' },
      { k: 'Prestasi', v: '🥇 Juara 1 Regional 1' },
    ]
  },
  {
    id: 7, emoji: '🔒',
    category: 'embedded', catLabel: 'Embedded Systems',
    title: 'Smart Door Lock — Fingerprint Security System',
    desc: 'Smart door lock berbasis fingerprint menggunakan Arduino Uno R3 & solenoid. Logika enrollment, biometric matching >90%, EEPROM storage 5 ID, navigasi LCD, simulasi Proteus, dan validasi hardware fisik.',
    detail: 'Merancang dan membangun sistem smart door lock berbasis fingerprint (hardware + software):\n• MCU: Arduino Uno R3 | Aktuator: solenoid + relay\n• Logic: fingerprint enrollment, biometric matching (>90% confidence threshold)\n• Storage: EEPROM-based untuk hingga 5 fingerprint ID\n• UI: navigasi menu LCD via 4 push button\n• Simulasi di Proteus (PSPICE) dan divalidasi pada prototipe hardware fisik\n• Output: hardware & software report, block diagram, flowchart, source code, demo video',
    tags: ['Arduino Uno R3', 'Embedded C', 'Fingerprint', 'EEPROM', 'Proteus', 'Solenoid'],
    specs: [
      { k: 'MCU', v: 'Arduino Uno R3' },
      { k: 'Aktuator', v: 'Solenoid + Relay' },
      { k: 'Confidence', v: '>90%' },
      { k: 'Status', v: 'VALIDATED' },
    ]
  },
  {
    id: 8, emoji: '🌬️',
    category: 'embedded', catLabel: 'Embedded Systems',
    title: 'Automatic Fan & Humidity Control — DHT11',
    desc: 'Sistem kontrol lingkungan otomatis dengan Arduino Uno, DHT11, relay, fan, dan water pump. 4-condition control logic berbasis threshold sensor ganda (suhu ≥25°C / kelembaban 45%) dengan indikator RGB LED & LCD I2C.',
    detail: 'Merancang dan membangun sistem kontrol lingkungan otomatis standalone:\n• Komponen: Arduino Uno, DHT11, relay, fan, water pump, LCD I2C, RGB LED\n• Logic: 4-kondisi kontrol berdasarkan threshold sensor ganda (suhu ≥25°C / kelembaban 45%)\n• Fan dan water pump diaktifkan secara independen untuk menjaga kenyamanan ruangan\n• Indikator RGB LED untuk feedback status visual real-time\n• Display LCD: pembacaan suhu (°C) dan kelembaban (%) secara real-time\n• Divalidasi pada prototipe hardware fisik',
    tags: ['Arduino Uno', 'DHT11', 'Relay', 'LCD I2C', 'RGB LED', 'Control Logic'],
    specs: [
      { k: 'MCU', v: 'Arduino Uno' },
      { k: 'Sensor', v: 'DHT11' },
      { k: 'Aktuator', v: 'Fan + Water Pump' },
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
function openModal(p) {
  const modalImg = document.getElementById('modal-img');
  modalImg.textContent = p.emoji;
  Object.assign(modalImg.style, { fontSize:'6rem', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--bg3)' });
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
}
document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// CONTACT FORM
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = '⏳ Mengirim...';
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
    btn.textContent = '⚡ Kirim Pesan';
    btn.disabled = false;
  });
}

// DOWNLOAD CV
function downloadCV(e) {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = 'CV_Annisa_Selvira_Final2.pdf';
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
