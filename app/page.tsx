'use client';

import { useState } from 'react';

const t = {
  en: {
    nav: { alliances: 'Alliances', directives: 'Directives', portal: 'Access Portal' },
    hero: {
      badge: 'Established Network',
      title: 'The Central Gateway to Sovereign Networks & Historic Orders.',
      subtitle: 'We serve as the bridge to elite fraternities and legacy networks of your choice, ensuring your path is secured by both strategic alignment and absolute discretion. Our mission is to provide the verified direction necessary to transcend economic limitations; we offer a sanctuary where financial freedom is not just an aspiration, but a secured reality for every member. Regardless of your background, identity, or journey, we invite you to step out of the cycle of scarcity and join a collective of visionaries dedicated to wealth, protection, and the pursuit of greatness.',
      cta1: 'Initiate Intake Consultation', cta2: 'Review Public Mandate'
    },
    matrix: { label: 'Network Directory', title: 'The Matrix of Alliances' },
    tabs: { alignment: 'The Order of Strategic Alignment', geopolitical: 'Geopolitical & Institutional Councils', fraternities: 'Historic Fraternities & Esoteric Orders', clubs: 'Exclusive Collegiate & Private Clubs' },
    gateway: { label: 'Secure Access', title: 'The Gateway', desc: 'Submit your credentials for vetted entry into sovereign networks.' },
    form: {
      fullName: 'Full Name', jobType: 'Type of Job', jobTitle: 'Job Title', whatsapp: 'WhatsApp Number',
      phone: 'Phone Number', email: 'Email Address', alignment: 'Network Alignment', manifesto: 'Intention Manifesto',
      selectNetwork: 'Select a network', submit: 'Transmit Secure Request', encrypting: 'Encrypting Transmission Data...',
      vetting: 'Vetting Candidate Routing...', successTitle: 'Transmission Secured', close: 'Acknowledge'
    },
    footer: { disclaimer: 'Access is strictly token-gated and subject to vetting. Unauthorized monitoring is prohibited.' }
  },
  fr: {
    nav: { alliances: 'Alliances', directives: 'Directives', portal: 'Portail d\'Acces' },
    hero: { badge: 'Reseau Etabli', title: 'La Porte Centrale vers les Reseaux Souverains et les Ordres Historiques.', subtitle: 'Nous servons de pont vers les fraternites d\'elite et les reseaux historiques de votre choix.', cta1: 'Initier une Consultation', cta2: 'Consulter le Mandat Public' },
    matrix: { label: 'Repertoire des Reseaux', title: 'La Matrice des Alliances' },
    tabs: { alignment: 'L\'Ordre de l\'Alignement Strategique', geopolitical: 'Conseils Geopolitiques', fraternities: 'Fraternites Historiques', clubs: 'Clubs Exclusifs' },
    gateway: { label: 'Acces Securise', title: 'La Porte', desc: 'Soumettez vos references.' },
    form: { fullName: 'Nom Complet', jobType: 'Type d\'Emploi', jobTitle: 'Titre du Poste', whatsapp: 'Numero WhatsApp', phone: 'Telephone', email: 'Email', alignment: 'Alignement', manifesto: 'Manifeste', selectNetwork: 'Selectionnez', submit: 'Transmettre', encrypting: 'Chiffrement...', vetting: 'Verification...', successTitle: 'Transmission Securisee', close: 'Accuser Reception' },
    footer: { disclaimer: 'L\'acces est strictement controle.' }
  },
  es: {
    nav: { alliances: 'Alianzas', directives: 'Directivas', portal: 'Portal de Acceso' },
    hero: { badge: 'Red Establecida', title: 'La Puerta Central a las Redes Soberanas.', subtitle: 'Servimos como puente hacia las fraternidades de elite.', cta1: 'Iniciar Consulta', cta2: 'Revisar Mandato' },
    matrix: { label: 'Directorio de Redes', title: 'La Matriz de Alianzas' },
    tabs: { alignment: 'La Orden de la Alineacion Estrategica', geopolitical: 'Consejos Geopoliticos', fraternities: 'Fraternidades Historicas', clubs: 'Clubes Exclusivos' },
    gateway: { label: 'Acceso Seguro', title: 'La Puerta', desc: 'Envie sus credenciales.' },
    form: { fullName: 'Nombre Completo', jobType: 'Tipo de Trabajo', jobTitle: 'Titulo', whatsapp: 'WhatsApp', phone: 'Telefono', email: 'Correo', alignment: 'Alineacion', manifesto: 'Manifiesto', selectNetwork: 'Seleccione', submit: 'Transmitir', encrypting: 'Cifrando...', vetting: 'Verificando...', successTitle: 'Transmision Asegurada', close: 'Reconocer' },
    footer: { disclaimer: 'El acceso esta estrictamente controlado.' }
  }
};

const networks = [
  { value: 'alignment', label: 'The Order of Strategic Alignment' },
  { value: 'bilderberg', label: 'The Bilderberg Group' },
  { value: 'wef', label: 'World Economic Forum' },
  { value: 'cfr', label: 'Council on Foreign Relations' },
  { value: 'rothschild', label: 'Rothschild Family Legacy' },
  { value: 'rockefeller', label: 'Rockefeller Family Legacy' },
  { value: 'freemasonry', label: 'Freemasonry' },
  { value: 'rosicrucians', label: 'The Rosicrucians' },
  { value: 'golden-dawn', label: 'Hermetic Order of the Golden Dawn' },
  { value: 'oto', label: 'Ordo Templi Orientis' },
  { value: 'templars', label: 'Knights Templar Legacy' },
  { value: 'theosophical', label: 'Theosophical Society' },
  { value: 'university-societies', label: 'University Societies' },
  { value: 'bohemian', label: 'Bohemian Club' },
  { value: 'seven-society', label: 'Seven Society' },
  { value: 'illuminati', label: 'The Path of the Illuminati' },
  { value: 'vampire', label: 'The Vampire (Order of Continuity)' },
  { value: 'goth', label: 'Goth/Alternative Communities' },
  { value: 'cabals', label: 'Secret Cabals' }
];

const styles = `
  :root { --bg:#0a0a0a; --bg-e:#111; --bg-c:#141414; --br:#1f1f1f; --br-s:#2a2a2a; --br-g:#8b7355; --br-gs:rgba(139,115,85,0.3);
    --txt:#fff; --txt-m:#888; --txt-s:#666; --gold:#c9a962; --gold-m:#8b7355; --f-d:'Cormorant Garamond',serif; --f-b:'Inter',sans-serif; }
  * { box-sizing:border-box; margin:0; padding:0; }
  html { scroll-behavior:smooth; } body { font-family:var(--f-b); background:var(--bg); color:var(--txt); -webkit-font-smoothing:antialiased; }
  .nav { position:fixed; top:0; left:0; right:0; z-index:1000; background:rgba(10,10,10,0.95); border-bottom:1px solid var(--br); backdrop-filter:blur(10px); }
  .nav-c { max-width:1400px; margin:0 auto; padding:1rem 2rem; display:flex; justify-content:space-between; align-items:center; }
  .logo { font-family:var(--f-d); font-size:1.25rem; font-weight:600; letter-spacing:0.15em; color:var(--txt); text-decoration:none; }
  .logo:hover { color:var(--gold); } .nav-l { display:flex; align-items:center; gap:2rem; }
  .nav-a { font-size:0.875rem; color:var(--txt-m); text-decoration:none; } .nav-a:hover { color:var(--txt); }
  .lang { position:relative; } .lang-b { padding:0.5rem 1rem; background:transparent; border:1px solid var(--br-s); border-radius:2px; color:var(--txt-m); font-size:0.75rem; cursor:pointer; display:flex; align-items:center; gap:0.5rem; }
  .lang-d { position:absolute; top:calc(100% + 0.5rem); right:0; min-width:140px; background:var(--bg-e); border:1px solid var(--br); opacity:0; visibility:hidden; transform:translateY(-8px); transition:all 0.15s; border-radius:2px; }
  .lang-d.active { opacity:1; visibility:visible; transform:translateY(0); } .lang-o { display:block; width:100%; padding:0.75rem 1rem; background:transparent; border:none; color:var(--txt-m); text-align:left; cursor:pointer; } .lang-o:hover { background:var(--bg-c); color:var(--txt); }
  .btn-p { padding:0.75rem 1.5rem; background:transparent; border:1px solid var(--gold-m); border-radius:2px; color:var(--gold); font-size:0.8125rem; font-weight:500; text-decoration:none; cursor:pointer; } .btn-p:hover { background:var(--gold); color:var(--bg); }
  .mob-b { display:none; flex-direction:column; gap:5px; padding:0.5rem; background:transparent; border:none; cursor:pointer; } .mob-b span { width:24px; height:1px; background:var(--txt); }
  .mob-m { display:none; position:fixed; top:60px; left:0; right:0; background:var(--bg-e); border-bottom:1px solid var(--br); padding:1.5rem; flex-direction:column; gap:1rem; } .mob-m.active { display:flex; } .mob-a { color:var(--txt-m); text-decoration:none; padding:0.75rem 0; border-bottom:1px solid var(--br); }
  .hero { min-height:100vh; display:flex; align-items:center; justify-content:space-between; padding:8rem 4rem 4rem; max-width:1400px; margin:0 auto; gap:4rem; }
  .hero-c { flex:1; max-width:720px; } .badge { display:inline-block; padding:0.5rem 1rem; background:transparent; border:1px solid var(--br-s); border-radius:2px; font-size:0.6875rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--txt-m); margin-bottom:2rem; }
  .hero-t { font-family:var(--f-d); font-size:clamp(2.5rem,5vw,4rem); font-weight:600; line-height:1.15; margin-bottom:1.5rem; }
  .hero-s { font-size:1.125rem; line-height:1.8; color:var(--txt-m); margin-bottom:2.5rem; }
  .hero-ct { display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap; } .btn-p1 { padding:1rem 2rem; background:var(--gold); border:1px solid var(--gold); border-radius:2px; color:var(--bg); font-size:0.875rem; font-weight:500; text-decoration:none; } .btn-p1:hover { background:transparent; color:var(--gold); }
  .btn-s { font-size:0.9375rem; color:var(--txt-m); text-decoration:none; position:relative; } .btn-s::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:var(--gold); transition:width 0.25s; } .btn-s:hover { color:var(--txt); } .btn-s:hover::after { width:100%; }
  .hero-v { flex-shrink:0; width:320px; height:400px; display:flex; align-items:center; justify-content:center; }
  .geo { width:240px; height:300px; border:1px solid var(--br-s); position:relative; display:flex; align-items:center; justify-content:center; }
  .geo::before,.geo::after { content:''; position:absolute; width:40px; height:40px; } .geo::before { top:-1px; left:-1px; border-top:1px solid var(--gold-m); border-left:1px solid var(--gold-m); } .geo::after { bottom:-1px; right:-1px; border-bottom:1px solid var(--gold-m); border-right:1px solid var(--gold-m); }
  .geo-i { display:flex; flex-direction:column; gap:1.5rem; } .geo-l { width:120px; height:1px; background:linear-gradient(90deg,transparent,var(--br-gs),transparent); }
  .sec { padding:6rem 2rem; background:var(--bg-e); border-top:1px solid var(--br); border-bottom:1px solid var(--br); }
  .sec-c { max-width:1400px; margin:0 auto; } .sec-h { text-align:center; margin-bottom:4rem; }
  .sec-l { display:inline-block; font-size:0.6875rem; letter-spacing:0.25em; text-transform:uppercase; color:var(--gold-m); margin-bottom:1rem; }
  .sec-t { font-family:var(--f-d); font-size:clamp(2rem,4vw,3rem); font-weight:600; }
  .sec-d { font-size:1.0625rem; color:var(--txt-m); margin-top:1rem; max-width:500px; margin-left:auto; margin-right:auto; }
  .tabs-c { margin-top:3rem; } .tabs { display:flex; gap:0.5rem; overflow-x:auto; padding-bottom:0.5rem; margin-bottom:2rem; }
  .tab { flex-shrink:0; padding:0.875rem 1.5rem; background:transparent; border:1px solid var(--br); border-radius:2px; color:var(--txt-m); font-size:0.8125rem; cursor:pointer; white-space:nowrap; } .tab:hover { color:var(--txt); } .tab.active { background:var(--bg-c); border-color:var(--br-gs); color:var(--gold); }
  .tab-ct { display:none; } .tab-ct.active { display:block; animation:fade 0.3s; } @keyframes fade { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
  .grid { display:grid; gap:1.5rem; } .card { display:grid; grid-template-columns:1fr 240px; gap:2rem; padding:2rem; background:var(--bg-c); border:1px solid var(--br); border-radius:4px; } .card:hover { border-color:var(--br-s); }
  .card-i { display:flex; flex-direction:column; gap:1rem; } .card-t { font-family:var(--f-d); font-size:1.25rem; font-weight:600; } .card-d { font-size:0.9375rem; line-height:1.8; color:var(--txt-m); } .card-st { font-size:0.875rem; line-height:1.7; color:var(--txt-s); } .card-st span { color:var(--txt-m); font-weight:500; }
  .card-m { display:flex; flex-direction:column; gap:1rem; } .med { flex:1; min-height:100px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:0.75rem; background:var(--bg-e); border:1px solid var(--br); border-radius:2px; color:var(--txt-s); font-size:0.6875rem; letter-spacing:0.1em; text-transform:uppercase; } .med svg { width:32px; height:32px; opacity:0.4; } .med.v { background:var(--bg); border-color:var(--br-s); }
  .med-img,.med-vid { flex:1; width:100%; min-height:100px; object-fit:cover; background:var(--bg-e); border:1px solid var(--br); border-radius:2px; display:block; } .med-vid { background:#000; border-color:var(--br-s); }
  .gw { padding:6rem 2rem; background:var(--bg); } .form-c { max-width:800px; margin:0 auto; }
  .form { padding:2.5rem; background:var(--bg-c); border:1px solid var(--br-gs); border-radius:4px; }
  .form-r { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.5rem; }
  .fg { margin-bottom:1.5rem; } .fg label { display:block; font-size:0.75rem; font-weight:500; letter-spacing:0.1em; text-transform:uppercase; color:var(--txt-m); margin-bottom:0.75rem; }
  .fg input,.fg select,.fg textarea { width:100%; padding:1rem; background:var(--bg-e); border:1px solid var(--br); border-radius:2px; color:var(--txt); font-family:var(--f-b); font-size:0.9375rem; } .fg input:focus,.fg select:focus,.fg textarea:focus { outline:none; border-color:var(--br-gs); } .fg input::placeholder,.fg textarea::placeholder { color:var(--txt-s); }
  .fg select { cursor:pointer; appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 1rem center; } .fg select option { background:var(--bg-c); color:var(--txt); }
  .fg textarea { resize:vertical; min-height:120px; }
  .btn-sub { display:flex; align-items:center; justify-content:center; gap:0.75rem; width:100%; padding:1rem 2rem; margin-top:0.5rem; background:var(--gold); border:1px solid var(--gold); border-radius:2px; color:var(--bg); font-size:0.875rem; font-weight:500; cursor:pointer; } .btn-sub:hover { background:transparent; color:var(--gold); }
  .ov { position:fixed; inset:0; z-index:2000; background:rgba(0,0,0,0.9); display:none; align-items:center; justify-content:center; backdrop-filter:blur(4px); } .ov.active { display:flex; } .ov-c { text-align:center; }
  .spin { width:48px; height:48px; margin:0 auto 2rem; border:2px solid var(--br-s); border-top-color:var(--gold); border-radius:50%; animation:spin 1s linear infinite; } @keyframes spin { to { transform:rotate(360deg); } }
  .ld { font-size:0.875rem; color:var(--txt-m); margin-bottom:0.5rem; animation:pulse 1.5s infinite; } @keyframes pulse { 0%,100% { opacity:0.5; } 50% { opacity:1; } }
  .suc { position:fixed; inset:0; z-index:2000; background:rgba(0,0,0,0.9); display:none; align-items:center; justify-content:center; backdrop-filter:blur(4px); } .suc.active { display:flex; }
  .suc-c { text-align:center; padding:3rem; background:var(--bg-c); border:1px solid var(--br-gs); border-radius:4px; max-width:500px; margin:1rem; } .suc-c svg { color:var(--gold); margin-bottom:1.5rem; }
  .suc-c h3 { font-family:var(--f-d); font-size:1.5rem; font-weight:600; margin-bottom:1rem; } .suc-c p { font-size:0.9375rem; color:var(--txt-m); line-height:1.7; margin-bottom:2rem; }
  .wa { background:#25D366; color:white; padding:1rem 1.5rem; border-radius:4px; margin-bottom:1.5rem; display:flex; align-items:center; gap:1rem; } .wa svg { width:32px; height:32px; color:white; } .wa-t { text-align:left; } .wa-t strong { display:block; font-size:1rem; margin-bottom:0.25rem; } .wa-t span { font-size:0.85rem; opacity:0.9; } .wa-a { display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:rgba(255,255,255,0.2); border-radius:2px; color:white; text-decoration:none; font-weight:500; } .wa-a:hover { background:rgba(255,255,255,0.3); }
  .btn-cl { padding:0.875rem 2rem; background:transparent; border:1px solid var(--gold-m); border-radius:2px; color:var(--gold); font-size:0.875rem; font-weight:500; cursor:pointer; } .btn-cl:hover { background:var(--gold); color:var(--bg); }
  .foot { padding:3rem 2rem; background:var(--bg); border-top:1px solid var(--br); } .foot-c { max-width:1400px; margin:0 auto; text-align:center; } .foot-t { font-size:0.8125rem; color:var(--txt-m); margin-bottom:0.75rem; } .foot-d { font-size:0.75rem; color:var(--txt-s); }
  @media(max-width:1024px) { .hero-v { display:none; } .hero { padding:7rem 2rem 4rem; } .card { grid-template-columns:1fr; } .card-m { flex-direction:row; } .med { min-height:80px; } .form-r { grid-template-columns:1fr; } }
  @media(max-width:768px) { .nav-l { display:none; } .mob-b { display:flex; } .hero { padding:6rem 1.5rem 3rem; } .hero-t { font-size:2rem; } .hero-s { font-size:1rem; } .hero-ct { flex-direction:column; align-items:flex-start; gap:1rem; } .btn-p1 { width:100%; } .sec,.gw { padding:4rem 1.5rem; } .tab { font-size:0.75rem; padding:0.75rem 1rem; } .card { padding:1.5rem; } .card-m { flex-direction:column; } .form { padding:1.5rem; } .suc-c { margin:1rem; padding:2rem; } }
  @media(max-width:480px) { .logo { font-size:0.875rem; } .sec-t { font-size:1.75rem; } .card-t { font-size:1.125rem; } }
`;

const networksData = {
  alignment: [
    { title: 'The Path of the Illuminati', img: '/images/The Path of the Illuminati.jpg', vid: '/videos/The Path of the Illuminati.mp4', def: '"The world is divided into those who observe power and those who wield it. We provide the bridge to the latter. We facilitate secure, bias-free entry into elite fraternities and the most protected esoteric legacies, ensuring that your pursuit of financial sovereignty is shielded by absolute discretion and structural advantage.\n\nWe do not believe in the inevitability of struggle. We believe in the mastery of system, strategy, and self. Whether your legacy begins in the corridors of traditional influence or the modern digital vanguard, we provide the verified direction to ensure your ascent. Regardless of background, gender, or orientation, you have the right to transcend the limitations of the masses.\n\nDo not settle for a life defined by scarcity. Align with the systems that shape the global landscape, secure your protection, and claim the financial freedom that is your inheritance. Join the collective. Begin your legacy.', st: 'The Illuminati is not a secret club, but as a roadmap for every approved members to achieve total life control.' },
    { title: 'The Vampire (Order of Continuity)', img: '/images/The Vampire.jpg', vid: '/videos/vampire.mp4', def: 'For the shadows here have ears, and the truth is far older than the flickering lights of your modern cities. You spend your life chasing hours, checking clocks, and worrying about what comes next. You are tired, are you not? You are a slave to the sun, to the exhaustion in your bones, and to the fragile, ticking clock of your own mortality.\n\nWhat if I told you that you could stop running?\n\nTo join us is not to die; it is to finally wake up. Imagine the world not as a blur of frantic activity, but as a masterpiece of stillness. When you join the blood-bound, the world slows down. Your senses will sharpen into jagged, perfect clarity. You will hear the heartbeat of the city, not as noise, but as a rhythm you can conduct.\n\nWe do not live by the rules of men. We are the architects of the eternal. When you are one of us, you are no longer a spectator to history; you are the silent hand that guides it.\n\nAre you ready to stop chasing the light and start commanding the dark?', st: 'We are everywhere we are just waiting for you to stop looking at the buildings and start looking at the shadows we cast.' },
    { title: 'Goth/Alternative Communities', img: '/images/Goth.jpg', vid: '/videos/goth.mp4', def: 'Joining the Goth and Alternative community means stepping away from the shallow, performative pace of mainstream society to find your place within a vast, decentralized network that treasures the beauty found in the shadows, where you are united with others through a shared language of haunting melodies, dark romanticism, and an enduring aesthetic that honors the history and art the rest of the world often overlooks. This is not a structure governed by rules or hierarchies, but a living, breathing collective that offers you the rare freedom to exist outside the exhausting demands of the daylight world, allowing you to curate your own identity and vision in a space where your unique, creative perspective is not only understood but essential to the culture we continue to build together.', st: 'It thrives as a decentralized movement built on shared sounds, dark romanticism, and a global community of outsiders.' },
    { title: 'Secret Cabals', img: '/images/Secret Cabals.jpg', vid: '/videos/secret cabal.mp4', def: 'The doors are locked, the invitation is whispered, and the ledger of the uninitiated is being erased welcome to the threshold. You have spent your life observing the gears of the world, but to join the Cabal is to finally hold the key to the mechanisms themselves, where knowledge is the only currency and anonymity is your greatest protection. We do not broadcast; we recruit through resonance, recognizing those who are tired of the surface and hungry for the architecture of the deep, where we govern the silent transitions of power that the public never perceives. If you are ready to stop being a spectator to history and begin writing the invisible ink that shapes it, leave the light behind and step into the silence, because here, you are not just a member you are the architect of the next unfolding.', st: 'Operating as an influential conceptual aesthetic across media production, trend-setting, and artistic branding.' }
  ],
  geopolitical: [
    { title: 'The Bilderberg Group', img: '/images/The Bilderberg Group.jpg', vid: '/videos/The Bilderberg Group.mp4', def: 'An annual, private conference established to foster high-level dialogue between political leaders, industrial titans, and global finance experts.', st: 'Governed by an international steering committee under Chatham House Rule to ensure absolute discretion.' },
    { title: 'The World Economic Forum (WEF / Davos)', img: '/images/The World Economic Forum.jpg', vid: '/videos/The World Economic Forum.mp4', def: 'An international non-governmental organization acting as a global platform for public-private cooperation to shape regional and industry agendas.', st: 'Composed of institutional members, corporate partners, and an annual assembly in Davos, Switzerland.' },
    { title: 'The Council on Foreign Relations (CFR)', img: '/images/The Council on Foreign Relations.jpg', vid: '/videos/The council of foreign relations CFR.mp4', def: 'A prominent independent think-tank and publisher specializing in international affairs and foreign policy analysis.', st: 'Operating as a non-profit membership organization composed of political, academic, and corporate leaders.' },
    { title: 'The Rothschild Family Legacy', img: '/images/The Rothschild Family Legacy.jpg', vid: '/videos/The Rothschild Family Legacy.mp4', def: 'A historic, global banking dynasty that pioneered international finance and private asset management across Europe.', st: 'Organized through generations of private banking houses, sovereign wealth structures, and independent estates.' },
    { title: 'The Rockefeller Family Legacy', img: '/images/The Rockefeller Family Legacy.jpg', vid: '/videos/The Rockefeller Family Legacy.mp4', def: 'An influential industrial and philanthropic dynasty central to the evolution of modern energy markets, medical research, and global institutions.', st: 'Managed through private family offices, foundations, and long-standing real estate trusts.' }
  ],
  fraternities: [
    { title: 'Freemasonry', img: '/images/Freemasonry.jpg', vid: '/videos/Freemasonry.mp4', def: 'One of the world\'s oldest and largest fraternal organizations, focusing on moral self-improvement and philosophical study through allegorical symbols.', st: 'Organized into local Lodges overseen by regional Grand Lodges, utilizing a system of progressive degrees.' },
    { title: 'The Rosicrucians', img: '/images/The Rosicrucians.jpg', vid: '/videos/The Rosicrucians.mp4', def: 'A cultural and philosophical movement originating in medieval Europe, blending Christian mysticism, alchemy, and esoteric wisdom.', st: 'Expressed through various modern fraternities and colleges dedicated to the study of natural laws and human potential.' },
    { title: 'The Hermetic Order of the Golden Dawn', img: '/images/The Hermetic Order of the Golden Dawn.jpg', vid: '/videos/The Hermetic Order of the Golden Dawn.mp4', def: 'A highly influential magical and esoteric order founded in late 19th-century England, dedicated to Western Hermeticism.', st: 'Separated into an Outer Order for theory and an Inner Order for practical ritual, mapped across a Kabbalistic grade system.' },
    { title: 'The Ordo Templi Orientis (O.T.O.)', img: '/images/The Ordo Templi Orientis.jpg', vid: '/videos/The Ordo Templi Orientis (O.T.O.).mp4', def: 'An international esoteric fraternal organization dedicated to the philosophical law of Thelema and spiritual self-realization.', st: 'Structured as a multi-degree initiatory system combining fraternal brotherhood with ritual exploration.' },
    { title: 'The Knights Templar Legacy', img: '/images/The Knights Templar Legacy.jpg', vid: '', def: 'A historic, medieval Catholic military order that evolved into a powerful symbol of chivalry, banking, and crusader history.', st: 'Modeled historically as a monastic-military hierarchy, preserved today through modern chivalric and historical societies.' },
    { title: 'The Theosophical Society', img: '/images/The Theosophical Society.jpg', vid: '', def: 'An organization formed to advance the philosophy of Theosophy, seeking to investigate the unexplained laws of nature and human potential.', st: 'Formed as an international membership body divided into regional sections, lodges, and research centers.' }
  ],
  clubs: [
    { title: 'University Societies (Skull and Bones, Scroll and Key, Wolf\'s Head)', img: '/images/University Societies.jpg', vid: '', def: 'Elite senior societies established at Ivy League institutions, serving as career-spanning alumni networks for prominent leaders.', st: 'Strictly limited to co-opting a small, fixed number of select undergraduate students annually, maintaining secure private facilities.' },
    { title: 'The Bohemian Club (Bohemian Grove)', img: '/images/The Bohemian Club.jpg', vid: '', def: 'A private, exclusive club for artists, musicians, business leaders, and government officials founded in San Francisco.', st: 'Governed as a private gentleman\'s club hosting an annual multi-week summer encampment in Sonoma County, California.' },
    { title: 'The Seven Society', img: '/images/The Seven Society.jpg', vid: '', def: 'A highly secretive philanthropic and honorary society operating exclusively within the University of Virginia.', st: 'Absolute anonymity is maintained throughout a member\'s lifetime, with identities only revealed publicly after passing.' }
  ]
};

export default function Home() {
  const [lang, setLang] = useState<'en'|'fr'|'es'>('en');
  const [tab, setTab] = useState('alignment');
  const [mobOpen, setMobOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ fullName:'', jobType:'', jobTitle:'', whatsapp:'', phone:'', email:'', alignment:'', manifesto:'' });

  const l = t[lang];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOverlay(true);
    await new Promise(r => setTimeout(r, 3000));
    setOverlay(false);
    setSuccess(true);
  };

  const close = () => { setSuccess(false); setForm({ fullName:'', jobType:'', jobTitle:'', whatsapp:'', phone:'', email:'', alignment:'', manifesto:'' }); };

  const media = (n: { title: string; img?: string; vid?: string }) => (
    <div className="card-m">
      {n.img ? (
        <img className="med-img" src={n.img} alt={n.title} loading="lazy" />
      ) : (
        <div className="med"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>Image Asset</div>
      )}
      {n.vid ? (
        <video className="med-vid" src={n.vid} controls preload="metadata" playsInline poster={n.img} />
      ) : (
        <div className="med v"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="5 3 19 12 5 21 5 3"/></svg>Video Coming Soon</div>
      )}
    </div>
  );

  return (
    <div>
      <style jsx global>{styles}</style>
      <nav className="nav">
        <div className="nav-c">
          <a href="#" className="logo">APEX MERIDIAN GLOBAL</a>
          <div className="nav-l">
            <a href="#matrix" className="nav-a">{l.nav.alliances}</a>
            <a href="#gateway" className="nav-a">{l.nav.directives}</a>
            <div className="lang">
              <button className="lang-b" onClick={()=>setLangOpen(!langOpen)}>{lang.toUpperCase()} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg></button>
              <div className={`lang-d ${langOpen?'active':''}`}>
                {['en','fr','es'].map(l=> <button key={l} className="lang-o" onClick={()=>{setLang(l as any);setLangOpen(false)}}>{l.toUpperCase()}</button>)}
              </div>
            </div>
            <a href="#gateway" className="btn-p">{l.nav.portal}</a>
          </div>
          <button className="mob-b" onClick={()=>setMobOpen(!mobOpen)}><span/><span/><span/></button>
        </div>
      </nav>
      <div className={`mob-m ${mobOpen?'active':''}`}><a href="#matrix" className="mob-a" onClick={()=>setMobOpen(false)}>{l.nav.alliances}</a><a href="#gateway" className="mob-a" onClick={()=>setMobOpen(false)}>{l.nav.directives}</a></div>

      <section className="hero" id="threshold">
        <div className="hero-c">
          <div className="badge">{l.hero.badge}</div>
          <h1 className="hero-t">{l.hero.title}</h1>
          <p className="hero-s">{l.hero.subtitle}</p>
          <div className="hero-ct"><a href="#gateway" className="btn-p1">{l.hero.cta1}</a><a href="#matrix" className="btn-s">{l.hero.cta2}</a></div>
        </div>
        <div className="hero-v"><div className="geo"><div className="geo-i"><div className="geo-l"/><div className="geo-l"/><div className="geo-l"/></div></div></div>
      </section>

      <section className="sec" id="matrix">
        <div className="sec-c">
          <div className="sec-h"><span className="sec-l">{l.matrix.label}</span><h2 className="sec-t">{l.matrix.title}</h2></div>
          <div className="tabs-c">
            <div className="tabs">{['alignment','geopolitical','fraternities','clubs'].map(k=><button key={k} className={`tab ${tab===k?'active':''}`} onClick={()=>setTab(k)}>{l.tabs[k as keyof typeof l.tabs]}</button>)}</div>
            {['alignment','geopolitical','fraternities','clubs'].map(k=>(
              <div key={k} className={`tab-ct ${tab===k?'active':''}`}>
                <div className="grid">{(networksData[k as keyof typeof networksData]||[]).map((n,i)=>(
                  <div key={i} className="card"><div className="card-i"><h3 className="card-t">{n.title}</h3><p className="card-d" style={{whiteSpace:'pre-line'}}>{n.def}</p><p className="card-st"><span>Structure:</span> {n.st}</p></div>{media(n)}</div>
                ))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gw" id="gateway">
        <div className="sec-c">
          <div className="sec-h"><span className="sec-l">{l.gateway.label}</span><h2 className="sec-t">{l.gateway.title}</h2><p className="sec-d">{l.gateway.desc}</p></div>
          <div className="form-c">
            <form onSubmit={submit} className="form">
              <div className="form-r"><div className="fg"><label>{l.form.fullName}</label><input value={form.fullName} onChange={e=>setForm({...form,fullName:e.target.value})} required/></div><div className="fg"><label>{l.form.jobType}</label><input value={form.jobType} onChange={e=>setForm({...form,jobType:e.target.value})} required/></div></div>
              <div className="form-r"><div className="fg"><label>{l.form.jobTitle}</label><input value={form.jobTitle} onChange={e=>setForm({...form,jobTitle:e.target.value})} required/></div><div className="fg"><label>{l.form.whatsapp}</label><input type="tel" value={form.whatsapp} onChange={e=>setForm({...form,whatsapp:e.target.value})} required/></div></div>
              <div className="form-r"><div className="fg"><label>{l.form.phone}</label><input type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required/></div><div className="fg"><label>{l.form.email}</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required/></div></div>
              <div className="fg"><label>{l.form.alignment}</label><select value={form.alignment} onChange={e=>setForm({...form,alignment:e.target.value})} required><option value="">{l.form.selectNetwork}</option>{networks.map(n=><option key={n.value} value={n.value}>{n.label}</option>)}</select></div>
              <div className="fg"><label>{l.form.manifesto}</label><textarea rows={5} value={form.manifesto} onChange={e=>setForm({...form,manifesto:e.target.value})} required/></div>
              <button type="submit" className="btn-sub"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>{l.form.submit}</button>
            </form>
          </div>
        </div>
      </section>

      <div className={`ov ${overlay?'active':''}`}><div className="ov-c"><div className="spin"/><p className="ld">{l.form.encrypting}</p><p className="ld">{l.form.vetting}</p></div></div>

      <div className={`suc ${success?'active':''}`}>
        <div className="suc-c">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <h3>{l.form.successTitle}</h3>
          <p>Your transmission has been secured. For the fastest response and to receive immediate direction from an assigned master, please contact us directly through WhatsApp.</p>
          <div className="wa">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.29 9.29 0 01-4.717-1.286l-.338-.2-3.498.918.933-3.407-.219-.351a9.262 9.262 0 01-1.417-4.665c0-5.135 4.182-9.312 9.33-9.312 2.476 0 4.808 1.022 6.558 2.75a9.233 9.233 0 012.718 6.558c0 5.135-4.182 9.312-9.33 9.312m7.911-17.223A11.956 11.956 0 0013.051 0C6.456 0 .974 5.475.974 12.062c0 2.124.553 4.199 1.605 6.024L.873 24l6.114-1.601a12.029 12.029 0 005.744 1.459h.005c6.594 0 12.076-5.375 12.076-11.962 0-3.196-1.244-6.199-3.508-8.457"/></svg>
            <div className="wa-t"><strong>Contact via WhatsApp for Swift Response</strong><span>An assigned master will give you direction and real contact.</span><a href="https://wa.me/12139420224" target="_blank" rel="noopener noreferrer" className="wa-a">+1 (213) 942-0224</a></div>
          </div>
          <button className="btn-cl" onClick={close}>{l.form.close}</button>
        </div>
      </div>

      <footer className="foot"><div className="foot-c"><p className="foot-t">Apex Meridian Global &copy; 2026. All rights reserved.</p><p className="foot-d">{l.footer.disclaimer}</p></div></footer>
    </div>
  );
}
