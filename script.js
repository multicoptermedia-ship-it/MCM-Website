const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Menü öffnen');
    });
  });
}

const translations = {
  de: {
    'nav.solutions':'Lösungen','nav.industries':'Branchen','nav.tech':'Technologie','nav.projects':'Projekte','nav.company':'Unternehmen','nav.cta':'Projekt anfragen',
    'hero.eyebrow':'MCM-Dronetech GmbH · Bedburg · Deutschland','hero.copy':'Wir verbinden UAV-Technologie, Sensorik, Vermessung und intelligente Datenauswertung zu Lösungen für Industrie, Energie, Infrastruktur und Forschung.','hero.primary':'Projekt besprechen','hero.secondary':'Lösungen entdecken','hero.stat':'Jahre UAV-Erfahrung',
    'intro.kicker':'Engineering statt Drohnenflug','intro.title':'Wir lösen technische Aufgaben aus der Luft.','intro.lead':'Eine Drohne ist für uns kein Selbstzweck. Entscheidend ist, was aus den gewonnenen Daten entsteht: eine belastbare Inspektion, ein präzises 3D-Modell, eine Schadenserkennung oder eine individuell entwickelte UAV-Lösung.','intro.text':'Seit mehr als zehn Jahren entwickeln und betreiben wir unbemannte Luftfahrtsysteme für zivile Anwendungen und Forschungsprojekte. Dabei verbinden wir Flugpraxis mit Engineering, Sensorik und kundenspezifischer Systemintegration.',
    'solutions.kicker':'Unsere Lösungen','solutions.title':'Vom Flug zur verwertbaren Erkenntnis.','solutions.intro':'Wir übernehmen nicht nur die Befliegung, sondern – je nach Projekt – auch Planung, Datenerfassung, Aufbereitung, Analyse und technische Dokumentation.',
    'card.inspection.title':'Industrial Inspection','card.inspection.text':'Technische Inspektionen von Gebäuden, Anlagen, Dächern, Infrastruktur und schwer zugänglichen Bereichen – schnell, sicher und dokumentierbar.','card.inspection.link':'Inspektion anfragen →',
    'card.survey.title':'Survey & Digital Twin','card.survey.text':'Photogrammetrie, RTK, Orthofotos, Punktwolken und 3D-Modelle für Vermessung, Bau, Dokumentation und digitale Bestandsmodelle.','card.survey.link':'Vermessung planen →',
    'card.thermal.title':'Thermal & AI Inspection','card.thermal.text':'RGB- und Wärmebilddaten für PV- und Industrieanlagen. Ergänzend entwickeln wir Ansätze für automatisierte Auffälligkeits- und Schadenserkennung.','card.thermal.link':'Analyse anfragen →',
    'card.engineering.title':'Special UAV Engineering','card.engineering.text':'Individuelle UAVs, Sensorträger, Systemintegration, Optimierung und Prototypen für Aufgaben, die Standardlösungen nicht ausreichend abdecken.','card.engineering.link':'Lösung entwickeln →',
    'tech.kicker':'Technologie','tech.title':'Die Drohne ist nur der Anfang.','tech.lead':'Der Wettbewerbsvorteil entsteht durch die Kombination aus Plattform, Sensorik, Flugverfahren, Daten und Engineering.','tech.uav.label':'UAV-Systeme','tech.uav.text':'Multicopter, Starrflügler und VTOL-Systeme','tech.sensor.label':'Sensorik','tech.sensor.text':'RGB, Thermografie, RTK/GNSS und kundenspezifische Nutzlasten','tech.geo.label':'Geodaten','tech.geo.text':'Photogrammetrie, Orthofotos, 3D und georeferenzierte Daten','tech.ai.label':'Automation & AI','tech.ai.text':'Datenanalyse, Veränderungserkennung und autonome Missionen als Entwicklungsfeld',
    'industries.kicker':'Branchen','industries.title':'Technologie für reale Entscheidungen.','industry.energy':'Energie','industry.industry':'Industrie','industry.infrastructure':'Infrastruktur','industry.construction':'Bau & Planung','industry.agriculture':'Landwirtschaft','industry.research':'Forschung',
    'projects.kicker':'Forschung & Entwicklung','projects.title':'Wenn Standard nicht reicht, entwickeln wir weiter.','projects.text1':'MCM-Dronetech bringt Erfahrung aus Forschungs- und Entwicklungsprojekten in die Praxis. Dazu gehören unter anderem Arbeiten im Umfeld von UAV-Rescue, ORAS, AMBOS, ADIS, AVIK und Phytoprotect sowie eigene Entwicklungen und kundenspezifische UAV-Systeme.','projects.text2':'Unser Anspruch: Technologie nicht nur einsetzen, sondern an die konkrete Aufgabe anpassen und weiterentwickeln.','projects.link':'Forschungsprojekt besprechen →',
    'case.kicker':'Praxisbeispiel','case.title':'Von Rohdaten zu einer klaren Entscheidung.','case.lead':'Bei technischen und geodätischen Aufgaben zählt nicht die Anzahl der Flugminuten, sondern die Qualität der Information am Ende des Prozesses.','case.text':'Deshalb denken wir Projekte als durchgängige Kette: Aufgabenstellung → Missionsplanung → Datenerfassung → Aufbereitung → Analyse → Ergebnis.','process.1':'Problem verstehen','process.2':'Mission & Sensorik planen','process.3':'Daten erfassen','process.4':'Auswerten & dokumentieren','process.5':'Entscheidung ermöglichen',
    'refs.kicker':'Netzwerk & Referenzen','refs.title':'Erfahrung aus Industrie, Forschung und öffentlicher Hand.','refs.note':'Die Darstellung nennt öffentlich dokumentierte Projekt- und Netzwerkbezüge. Einzelne Logos werden auf der finalen Website nur nach Prüfung der jeweiligen Nutzungsrechte verwendet.',
    'contact.kicker':'Projekt anfragen','contact.title':'Sie haben eine Aufgabe, die aus der Luft besser lösbar ist?','contact.text':'Beschreiben Sie uns kurz das Objekt, die Fragestellung und das gewünschte Ergebnis. Wir prüfen, welche UAV-, Sensor- und Auswertelösung sinnvoll ist.','contact.button':'Projektanfrage senden','footer.about':'Über uns','footer.contact':'Kontakt','footer.imprint':'Impressum','footer.privacy':'Datenschutz','footer.former':'ehemals MCM Multicopter-Media GmbH'
  },
  en: {
    'nav.solutions':'Solutions','nav.industries':'Industries','nav.tech':'Technology','nav.projects':'Projects','nav.company':'Company','nav.cta':'Start a project',
    'hero.eyebrow':'MCM-Dronetech GmbH · Bedburg · Germany','hero.copy':'We combine UAV technology, sensors, surveying and intelligent data analysis to solve challenges in industry, energy, infrastructure and research.','hero.primary':'Discuss a project','hero.secondary':'Explore solutions','hero.stat':'years of UAV experience',
    'intro.kicker':'Engineering beyond flight','intro.title':'We solve technical challenges from the air.','intro.lead':'A drone is not the end product for us. What matters is the result: a reliable inspection, a precise 3D model, damage detection or a UAV solution developed for a specific task.','intro.text':'For more than ten years, we have developed and operated unmanned aerial systems for civil applications and research projects, combining flight operations with engineering, sensors and customer-specific system integration.',
    'solutions.kicker':'Our solutions','solutions.title':'From flight to actionable insight.','solutions.intro':'Depending on the project, we cover more than flight operations: planning, data capture, processing, analysis and technical documentation.',
    'card.inspection.title':'Industrial Inspection','card.inspection.text':'Technical inspections of buildings, plants, roofs, infrastructure and hard-to-access areas – fast, safe and traceable.','card.inspection.link':'Request an inspection →',
    'card.survey.title':'Survey & Digital Twin','card.survey.text':'Photogrammetry, RTK, orthophotos, point clouds and 3D models for surveying, construction, documentation and digital asset models.','card.survey.link':'Plan a survey →',
    'card.thermal.title':'Thermal & AI Inspection','card.thermal.text':'RGB and thermal data for PV and industrial assets. We also develop approaches for automated anomaly and damage detection.','card.thermal.link':'Request an analysis →',
    'card.engineering.title':'Special UAV Engineering','card.engineering.text':'Custom UAVs, sensor carriers, system integration, optimisation and prototypes for tasks where standard solutions are not enough.','card.engineering.link':'Develop a solution →',
    'tech.kicker':'Technology','tech.title':'The drone is only the beginning.','tech.lead':'The advantage comes from combining the platform, sensors, flight methods, data and engineering.','tech.uav.label':'UAV systems','tech.uav.text':'Multicopters, fixed-wing and VTOL systems','tech.sensor.label':'Sensors','tech.sensor.text':'RGB, thermal imaging, RTK/GNSS and custom payloads','tech.geo.label':'Geodata','tech.geo.text':'Photogrammetry, orthophotos, 3D and georeferenced data','tech.ai.label':'Automation & AI','tech.ai.text':'Data analysis, change detection and autonomous missions as development fields',
    'industries.kicker':'Industries','industries.title':'Technology for real-world decisions.','industry.energy':'Energy','industry.industry':'Industry','industry.infrastructure':'Infrastructure','industry.construction':'Construction & Planning','industry.agriculture':'Agriculture','industry.research':'Research',
    'projects.kicker':'Research & Development','projects.title':'When standard is not enough, we develop further.','projects.text1':'MCM-Dronetech brings experience from research and development projects into practical applications. This includes work related to UAV-Rescue, ORAS, AMBOS, ADIS, AVIK and Phytoprotect, as well as proprietary developments and customer-specific UAV systems.','projects.text2':'Our approach: not just deploy technology, but adapt and develop it for the task at hand.','projects.link':'Discuss a research project →',
    'case.kicker':'Field approach','case.title':'From raw data to a clear decision.','case.lead':'For technical and surveying tasks, flight time is not the metric that matters. The quality of the information at the end of the process is.','case.text':'That is why we treat projects as one continuous chain: task definition → mission planning → data capture → processing → analysis → result.','process.1':'Understand the problem','process.2':'Plan mission & sensors','process.3':'Capture data','process.4':'Analyse & document','process.5':'Enable the decision',
    'refs.kicker':'Network & references','refs.title':'Experience across industry, research and the public sector.','refs.note':'The page refers to publicly documented project and network connections. Individual logos will only be used after their respective usage rights have been checked.',
    'contact.kicker':'Start a project','contact.title':'Have a task that can be solved better from the air?','contact.text':'Tell us briefly about the asset, the question and the desired result. We will assess which UAV, sensor and analysis solution makes sense.','contact.button':'Send project enquiry','footer.about':'About us','footer.contact':'Contact','footer.imprint':'Legal notice','footer.privacy':'Privacy policy','footer.former':'formerly MCM Multicopter-Media GmbH'
  }
};

const industrySubtexts = {
  de: ['PV · Wind · Netze · technische Anlagen','Inspektion · Dokumentation · Engineering','Bauwerke · Gelände · Monitoring','Bestand · Fortschritt · 3D · Vermessung','Orthofotos · Analysen · Schadenerfassung','FuE · Prototypen · Sensorik · UAV-Systeme'],
  en: ['PV · wind · grids · technical assets','Inspection · documentation · engineering','Structures · terrain · monitoring','Assets · progress · 3D · surveying','Orthophotos · analysis · damage mapping','R&D · prototypes · sensors · UAV systems']
};

const projectCards = [
  {id:'adis',de:{title:'ADIS',sub:'Automatisiertes Drohnenverkehrs- und Informationssystem',tag:'Referenzprojekt',text:'Informationssystem zur Unterstützung des automatisierten Drohnenverkehrs mit Fokus auf Identifikation, Navigation und sicheren Datenaustausch.',link:'https://www.bmv.de/SharedDocs/DE/Artikel/mFUND/Projekte/adis.html'},en:{title:'ADIS',sub:'Automated drone traffic and information system',tag:'Reference project',text:'Information system supporting automated drone traffic, with a focus on identification, navigation and secure data exchange.',link:'https://www.bmv.de/SharedDocs/DE/Artikel/mFUND/Projekte/adis.html'}},
  {id:'uav-rescue',de:{title:'UAV-Rescue',sub:'UAV-getragene Sensorik für Rettungsmissionen',tag:'Projektbezug',text:'Radar, LiDAR und KI-gestützte Auswertung für 3D-Erfassung, Personendetektion und die Erkundung schwer zugänglicher Bereiche.',link:'https://www.emi.fraunhofer.de/de/geschaeftsfelder/sicherheit/forschung/uav-rescue-lebensrettung-aus-der-luft.html'},en:{title:'UAV-Rescue',sub:'UAV-borne sensing for rescue missions',tag:'Project connection',text:'Radar, LiDAR and AI-supported analysis for 3D mapping, person detection and exploration of difficult environments.',link:'https://www.emi.fraunhofer.de/de/geschaeftsfelder/sicherheit/forschung/uav-rescue-lebensrettung-aus-der-luft.html'}},
  {id:'oras',de:{title:'ORAS',sub:'Sensorgestützte Drohnendetektion',tag:'Projektbezug',text:'Sensorgestützte Erkennung und Verfolgung unbemannter Flugsysteme im urbanen Umfeld mit Radar, optischen Sensoren und Lagebild.',en:'',link:'https://www.fhr.fraunhofer.de/de/projekte.html'},en:{title:'ORAS',sub:'Sensor-based drone detection',tag:'Project connection',text:'Sensor-based detection and tracking of unmanned aircraft in urban environments using radar, optical sensors and a common operational picture.',link:'https://www.fhr.fraunhofer.de/de/projekte.html'}},
  {id:'ambos',de:{title:'AMBOS',sub:'Abwehr unbemannter Flugobjekte',tag:'Projektbezug',text:'Forschung zur Erkennung, Analyse und Abwehr unbemannter Flugobjekte für Behörden und Organisationen mit Sicherheitsaufgaben.',link:'https://www.fraunhofer.de/de/forschung/projekte/ambos.html'},en:{title:'AMBOS',sub:'Countering unmanned aerial objects',tag:'Project connection',text:'Research into the detection, analysis and countering of unmanned aerial objects for public safety organisations.',link:'https://www.fraunhofer.de/de/forschung/projekte/ambos.html'}},
  {id:'avik',de:{title:'AVIK',sub:'Boden-Luft-Vernetzung und Sensordaten',tag:'Projektbezug',text:'Forschungsansatz zur sicheren Vernetzung von Mobilitätsakteuren und zum Austausch von Sensordaten zwischen Luft- und Bodenplattformen.',link:'https://www.bmv.de/SharedDocs/DE/Artikel/mFUND/Projekte/AVIK.html'},en:{title:'AVIK',sub:'Ground-air networking and sensor data',tag:'Project connection',text:'Research approach for secure networking of mobility actors and sensor-data exchange between aerial and ground platforms.',link:'https://www.bmv.de/SharedDocs/DE/Artikel/mFUND/Projekte/AVIK.html'}},
  {id:'phytoprotect',de:{title:'PhytoProtect',sub:'Nachhaltiger Pflanzenschutz',tag:'Projektbezug',text:'Neue Methoden zum nachhaltigen Schutz von Kulturpflanzen vor Schadinsekten – mit UAV-gestützten Analyseansätzen als Teil des Anwendungskontexts.',link:'https://www.ptj.de/projektfoerderung/phyto-protect'},en:{title:'PhytoProtect',sub:'Sustainable crop protection',tag:'Project connection',text:'New methods for sustainable crop protection against insect pests, with UAV-based analysis approaches as part of the application context.',link:'https://www.ptj.de/projektfoerderung/phyto-protect'}}
];

function renderProjectCards(lang) {
  const section = document.querySelector('#projekte');
  const copy = section?.querySelector('.project-copy');
  if (!copy || copy.querySelector('.project-references')) return;
  const grid = document.createElement('div');
  grid.className = 'project-references';
  grid.innerHTML = projectCards.map((p) => {
    const x = p[lang];
    return `<article class="project-ref"><div class="project-ref-top"><span>${x.tag}</span><b>${x.title}</b></div><h3>${x.sub}</h3><p>${x.text}</p><a href="${x.link}" target="_blank" rel="noopener noreferrer">${lang === 'de' ? 'Projekt ansehen →' : 'View project →'}</a></article>`;
  }).join('');
  copy.appendChild(grid);
}

function updateProjectCards(lang) {
  const grid = document.querySelector('.project-references');
  if (!grid) return;
  grid.innerHTML = projectCards.map((p) => {
    const x = p[lang];
    return `<article class="project-ref"><div class="project-ref-top"><span>${x.tag}</span><b>${x.title}</b></div><h3>${x.sub}</h3><p>${x.text}</p><a href="${x.link}" target="_blank" rel="noopener noreferrer">${lang === 'de' ? 'Projekt ansehen →' : 'View project →'}</a></article>`;
  }).join('');
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.de;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.querySelectorAll('.industry-grid span').forEach((el, i) => { el.textContent = industrySubtexts[lang][i]; });
  document.querySelectorAll('.lang').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  const title = lang === 'de' ? 'MCM-Dronetech | Industrial Drone Intelligence' : 'MCM-Dronetech | Industrial Drone Intelligence';
  const description = lang === 'de' ? translations.de['hero.copy'] : translations.en['hero.copy'];
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', description);
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', lang === 'de' ? 'de_DE' : 'en_GB');
  localStorage.setItem('mcm-language', lang);
  updateProjectCards(lang);
}

document.querySelectorAll('.lang').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

renderProjectCards(localStorage.getItem('mcm-language') || 'de');
applyLanguage(localStorage.getItem('mcm-language') || 'de');

// If an imported image is unavailable, keep the layout intact until the
// corresponding local asset is added to the repository.
document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', () => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = 'true';
    img.src = 'assets/images/MCM-FHR1.webp';
  }, { once: true });
});

// Lightweight scroll reveal; disabled automatically for reduced-motion users.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const revealItems = document.querySelectorAll('.section > .container, .solutions .card');
  revealItems.forEach((item) => item.classList.add('reveal'));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealItems.forEach((item) => observer.observe(item));
}
