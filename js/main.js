// ===== TRANSLATIONS =====
const translations = {
  pt: {
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.products': 'Produtos',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',

    'hero.eyebrow': 'Fundada em 1986 · ISO 9001:2015',
    'hero.title': 'Inovação para empreender.<br />Tecnologia para fazer.',
    'hero.sub': 'Usinagem de precisão, fabricação de equipamentos e soluções para as indústrias de embalagem, agrícola e energia.',
    'hero.cta1': 'Nossos Serviços',
    'hero.cta2': 'Fale Conosco',

    'hl.iso': 'Certificação ABNT NBR garantindo qualidade em todos os processos',
    'hl.years': '+38 anos',
    'hl.years.sub': 'De experiência em usinagem e fabricação industrial de precisão',
    'hl.multi': 'Multissetorial',
    'hl.multi.sub': 'Atuação em embalagens, agronegócio e energia renovável',
    'hl.partner': 'Parceiro Estratégico',
    'hl.partner.sub': 'Reconhecida pelos clientes como fornecedora de soluções de alto valor',

    'srv.tag': 'O que fazemos',
    'srv.title': 'Nossos Setores de Atuação',
    'srv.sub': 'Expertise técnica aplicada em três segmentos industriais estratégicos',
    'srv.badge': 'Principal',
    'srv.pkg.title': 'Embalagens',
    'srv.pkg.desc': 'Fabricação e serviços para a aplicação de tampas plásticas, com equipamentos de alta precisão e confiabilidade para linhas de produção.',
    'srv.pkg.li1': 'Selecionadores de tampas',
    'srv.pkg.li2': 'Cabeçotes rosqueadores magnéticos',
    'srv.pkg.li3': 'Usinagem sob medida para peças de reposição OEM',
    'srv.agro.title': 'Agronegócio',
    'srv.agro.desc': 'Fornecimento de peças e componentes para maquinário de produção agrícola, com foco em durabilidade e desempenho no campo.',
    'srv.agro.li1': 'Peças para colheitadeiras',
    'srv.agro.li2': 'Componentes sob encomenda',
    'srv.agro.li3': 'Reposição e manutenção',
    'srv.energy.title': 'Energia',
    'srv.energy.desc': 'Componentes técnicos para torres eólicas e turbinas, contribuindo com a cadeia de energia renovável no Brasil.',
    'srv.energy.li1': 'Bucha labirinto para turbinas',
    'srv.energy.li2': 'Componentes para torres eólicas',
    'srv.energy.li3': 'Usinagem de precisão',
    'srv.btn': 'Ver Produtos',

    'abt.tag': 'Quem somos',
    'abt.title': 'Tradição e inovação desde 1986',
    'abt.p1': 'A Gromar Indústria e Comércio Ltda. nasceu em Piracicaba-SP como uma prestadora de serviços de usinagem. Ao longo de quase quatro décadas, desenvolvemos expertise multissetorial que nos permite atuar com excelência na indústria de embalagens, no agronegócio e no setor de energia.',
    'abt.p2': 'Nossa certificação <strong>ABNT NBR ISO 9001:2015</strong> é o reflexo do compromisso com processos rigorosos de qualidade e a busca constante pela satisfação dos nossos clientes.',
    'abt.mission.title': 'Missão',
    'abt.mission.desc': 'Fornecer soluções de alta qualidade para atender às necessidades dos nossos clientes com excelência e comprometimento.',
    'abt.vision.title': 'Visão',
    'abt.vision.desc': 'Ser referência regional no nosso ramo de atuação, reconhecida pela inovação e pela confiança dos parceiros.',
    'abt.values.title': 'Valores',
    'abt.values.desc': 'Qualidade, comprometimento, ética, inovação e respeito às pessoas e ao meio ambiente.',
    'abt.stat1': 'Ano de fundação',
    'abt.stat2': 'Setores de atuação',

    'cnt.tag': 'Fale conosco',
    'cnt.title': 'Entre em contato',
    'cnt.sub': 'Estamos prontos para atender sua demanda com agilidade e precisão.',
    'cnt.phones': 'Telefones',
    'cnt.address': 'Endereço',
    'cnt.wa': 'Chamar no WhatsApp',

    'form.title': 'Envie uma mensagem',
    'form.name': 'Nome *',
    'form.name.ph': 'Seu nome completo',
    'form.phone': 'Telefone',
    'form.msg': 'Mensagem *',
    'form.msg.ph': 'Descreva sua necessidade...',
    'form.submit': 'Enviar Mensagem',

    'ftr.links': 'Links Rápidos',

    'prod.back': 'Voltar ao site',
    'prod.tag': 'Catálogo',
    'prod.title': 'Nossos Produtos',
    'prod.sub': 'Conheça as soluções que fabricamos para os setores de embalagens, agronegócio e energia.',
    'prod.label': 'Produtos',
    'prod.items': 'produtos',
    'prod.view': 'Ver Produtos',
    'prod.other': 'Outros Setores',
    'prod.back.catalog': 'Todos os setores',
    'prod.pkg.title': 'Embalagens',
    'prod.pkg.desc': 'Equipamentos e peças para linhas de aplicação de tampas plásticas',
    'prod.pkg.p1.title': 'Selecionadores de Tampas',
    'prod.pkg.p1.desc': 'Equipamentos automatizados para seleção e orientação de tampas plásticas em linhas de envase de alta velocidade.',
    'prod.pkg.p1.tag': 'Equipamento',
    'prod.pkg.p2.title': 'Cabeçotes Rosqueadores Magnéticos',
    'prod.pkg.p2.desc': 'Cabeçotes com tecnologia magnética para rosqueamento preciso de tampas, garantindo torque controlado e repetibilidade.',
    'prod.pkg.p2.tag': 'Componente',
    'prod.pkg.p3.title': 'Peças de Reposição OEM',
    'prod.pkg.p3.desc': 'Usinagem sob medida de peças de reposição para equipamentos de embalagem, com especificações originais do fabricante.',
    'prod.pkg.p3.tag': 'Usinagem',
    'prod.pkg.p4.title': 'Estrelas e Guias de Transporte',
    'prod.pkg.p4.desc': 'Componentes de precisão para transporte e posicionamento de garrafas e frascos em linhas de produção.',
    'prod.pkg.p4.tag': 'Componente',
    'prod.agro.title': 'Agronegócio',
    'prod.agro.desc': 'Peças e componentes para maquinário de produção agrícola',
    'prod.agro.p1.title': 'Peças para Colheitadeiras',
    'prod.agro.p1.desc': 'Componentes usinados com alta resistência para colheitadeiras, incluindo eixos, buchas e engrenagens de reposição.',
    'prod.agro.p1.tag': 'Reposição',
    'prod.agro.p2.title': 'Componentes sob Encomenda',
    'prod.agro.p2.desc': 'Fabricação sob desenho de peças especiais para implementos e máquinas agrícolas de diversos fabricantes.',
    'prod.agro.p2.tag': 'Sob medida',
    'prod.agro.p3.title': 'Peças de Manutenção',
    'prod.agro.p3.desc': 'Componentes para manutenção preventiva e corretiva de maquinário agrícola, com foco em durabilidade no campo.',
    'prod.agro.p3.tag': 'Manutenção',
    'prod.energy.title': 'Energia',
    'prod.energy.desc': 'Componentes técnicos para o setor de energia renovável',
    'prod.energy.p1.title': 'Bucha Labirinto para Turbinas',
    'prod.energy.p1.desc': 'Componente de alta precisão para sistemas de turbinas, garantindo vedação e durabilidade em ambientes de alta rotação.',
    'prod.energy.p1.tag': 'Turbinas',
    'prod.energy.p2.title': 'Componentes para Torres Eólicas',
    'prod.energy.p2.desc': 'Peças usinadas de precisão para montagem e manutenção de torres de geração de energia eólica.',
    'prod.energy.p2.tag': 'Eólica',
    'prod.energy.p3.title': 'Usinagem de Precisão para Energia',
    'prod.energy.p3.desc': 'Serviços de usinagem CNC para componentes críticos do setor energético, com tolerâncias micrométricas.',
    'prod.energy.p3.tag': 'Usinagem CNC',
    'prod.cta.title': 'Precisa de uma solução específica?',
    'prod.cta.desc': 'Entre em contato e solicite um orçamento personalizado para sua demanda.',
    'prod.cta.btn': 'Solicitar Orçamento',
  },

  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.products': 'Productos',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',

    'hero.eyebrow': 'Fundada en 1986 · ISO 9001:2015',
    'hero.title': 'Innovación para emprender.<br />Tecnología para crear.',
    'hero.sub': 'Mecanizado de precisión, fabricación de equipos y soluciones para las industrias de embalaje, agrícola y energía.',
    'hero.cta1': 'Nuestros Servicios',
    'hero.cta2': 'Contáctenos',

    'hl.iso': 'Certificación ABNT NBR garantizando calidad en todos los procesos',
    'hl.years': '+38 años',
    'hl.years.sub': 'De experiencia en mecanizado y fabricación industrial de precisión',
    'hl.multi': 'Multisectorial',
    'hl.multi.sub': 'Actuación en embalajes, agroindustria y energía renovable',
    'hl.partner': 'Socio Estratégico',
    'hl.partner.sub': 'Reconocida por los clientes como proveedora de soluciones de alto valor',

    'srv.tag': 'Lo que hacemos',
    'srv.title': 'Nuestros Sectores de Actuación',
    'srv.sub': 'Experiencia técnica aplicada en tres segmentos industriales estratégicos',
    'srv.badge': 'Principal',
    'srv.pkg.title': 'Embalajes',
    'srv.pkg.desc': 'Fabricación y servicios para la aplicación de tapas plásticas, con equipos de alta precisión y confiabilidad para líneas de producción.',
    'srv.pkg.li1': 'Seleccionadores de tapas',
    'srv.pkg.li2': 'Cabezales roscadores magnéticos',
    'srv.pkg.li3': 'Mecanizado a medida para piezas de repuesto OEM',
    'srv.agro.title': 'Agronegocio',
    'srv.agro.desc': 'Suministro de piezas y componentes para maquinaria de producción agrícola, con foco en durabilidad y desempeño en el campo.',
    'srv.agro.li1': 'Piezas para cosechadoras',
    'srv.agro.li2': 'Componentes por encargo',
    'srv.agro.li3': 'Repuestos y mantenimiento',
    'srv.energy.title': 'Energía',
    'srv.energy.desc': 'Componentes técnicos para torres eólicas y turbinas, contribuyendo con la cadena de energía renovable.',
    'srv.energy.li1': 'Buje laberinto para turbinas',
    'srv.energy.li2': 'Componentes para torres eólicas',
    'srv.energy.li3': 'Mecanizado de precisión',
    'srv.btn': 'Ver Productos',

    'abt.tag': 'Quiénes somos',
    'abt.title': 'Tradición e innovación desde 1986',
    'abt.p1': 'Gromar Indústria e Comércio Ltda. nació en Piracicaba-SP como prestadora de servicios de mecanizado. A lo largo de casi cuatro décadas, desarrollamos experiencia multisectorial que nos permite actuar con excelencia en la industria de embalajes, el agronegocio y el sector de energía.',
    'abt.p2': 'Nuestra certificación <strong>ABNT NBR ISO 9001:2015</strong> refleja el compromiso con procesos rigurosos de calidad y la búsqueda constante de la satisfacción de nuestros clientes.',
    'abt.mission.title': 'Misión',
    'abt.mission.desc': 'Proveer soluciones de alta calidad para atender las necesidades de nuestros clientes con excelencia y compromiso.',
    'abt.vision.title': 'Visión',
    'abt.vision.desc': 'Ser referencia regional en nuestro sector, reconocida por la innovación y la confianza de los socios.',
    'abt.values.title': 'Valores',
    'abt.values.desc': 'Calidad, compromiso, ética, innovación y respeto por las personas y el medio ambiente.',
    'abt.stat1': 'Año de fundación',
    'abt.stat2': 'Sectores de actuación',

    'cnt.tag': 'Hable con nosotros',
    'cnt.title': 'Póngase en contacto',
    'cnt.sub': 'Estamos listos para atender su demanda con agilidad y precisión.',
    'cnt.phones': 'Teléfonos',
    'cnt.address': 'Dirección',
    'cnt.wa': 'Contactar por WhatsApp',

    'form.title': 'Envíe un mensaje',
    'form.name': 'Nombre *',
    'form.name.ph': 'Su nombre completo',
    'form.phone': 'Teléfono',
    'form.msg': 'Mensaje *',
    'form.msg.ph': 'Describa su necesidad...',
    'form.submit': 'Enviar Mensaje',

    'ftr.links': 'Enlaces Rápidos',

    'prod.back': 'Volver al sitio',
    'prod.tag': 'Catálogo',
    'prod.title': 'Nuestros Productos',
    'prod.sub': 'Conozca las soluciones que fabricamos para los sectores de embalajes, agronegocio y energía.',
    'prod.label': 'Productos',
    'prod.items': 'productos',
    'prod.view': 'Ver Productos',
    'prod.other': 'Otros Sectores',
    'prod.back.catalog': 'Todos los sectores',
    'prod.pkg.title': 'Embalajes',
    'prod.pkg.desc': 'Equipos y piezas para líneas de aplicación de tapas plásticas',
    'prod.pkg.p1.title': 'Seleccionadores de Tapas',
    'prod.pkg.p1.desc': 'Equipos automatizados para selección y orientación de tapas plásticas en líneas de envasado de alta velocidad.',
    'prod.pkg.p1.tag': 'Equipo',
    'prod.pkg.p2.title': 'Cabezales Roscadores Magnéticos',
    'prod.pkg.p2.desc': 'Cabezales con tecnología magnética para roscado preciso de tapas, garantizando torque controlado y repetibilidad.',
    'prod.pkg.p2.tag': 'Componente',
    'prod.pkg.p3.title': 'Piezas de Repuesto OEM',
    'prod.pkg.p3.desc': 'Mecanizado a medida de piezas de repuesto para equipos de embalaje, con especificaciones originales del fabricante.',
    'prod.pkg.p3.tag': 'Mecanizado',
    'prod.pkg.p4.title': 'Estrellas y Guías de Transporte',
    'prod.pkg.p4.desc': 'Componentes de precisión para transporte y posicionamiento de botellas y frascos en líneas de producción.',
    'prod.pkg.p4.tag': 'Componente',
    'prod.agro.title': 'Agronegocio',
    'prod.agro.desc': 'Piezas y componentes para maquinaria de producción agrícola',
    'prod.agro.p1.title': 'Piezas para Cosechadoras',
    'prod.agro.p1.desc': 'Componentes mecanizados de alta resistencia para cosechadoras, incluyendo ejes, bujes y engranajes de repuesto.',
    'prod.agro.p1.tag': 'Repuesto',
    'prod.agro.p2.title': 'Componentes por Encargo',
    'prod.agro.p2.desc': 'Fabricación según diseño de piezas especiales para implementos y máquinas agrícolas de diversos fabricantes.',
    'prod.agro.p2.tag': 'A medida',
    'prod.agro.p3.title': 'Piezas de Mantenimiento',
    'prod.agro.p3.desc': 'Componentes para mantenimiento preventivo y correctivo de maquinaria agrícola, con foco en durabilidad en el campo.',
    'prod.agro.p3.tag': 'Mantenimiento',
    'prod.energy.title': 'Energía',
    'prod.energy.desc': 'Componentes técnicos para el sector de energía renovable',
    'prod.energy.p1.title': 'Buje Laberinto para Turbinas',
    'prod.energy.p1.desc': 'Componente de alta precisión para sistemas de turbinas, garantizando sellado y durabilidad en entornos de alta rotación.',
    'prod.energy.p1.tag': 'Turbinas',
    'prod.energy.p2.title': 'Componentes para Torres Eólicas',
    'prod.energy.p2.desc': 'Piezas mecanizadas de precisión para montaje y mantenimiento de torres de generación de energía eólica.',
    'prod.energy.p2.tag': 'Eólica',
    'prod.energy.p3.title': 'Mecanizado de Precisión para Energía',
    'prod.energy.p3.desc': 'Servicios de mecanizado CNC para componentes críticos del sector energético, con tolerancias micrométricas.',
    'prod.energy.p3.tag': 'Mecanizado CNC',
    'prod.cta.title': '¿Necesita una solución específica?',
    'prod.cta.desc': 'Póngase en contacto y solicite un presupuesto personalizado para su demanda.',
    'prod.cta.btn': 'Solicitar Presupuesto',
  },

  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Founded in 1986 · ISO 9001:2015',
    'hero.title': 'Innovation to undertake.<br />Technology to create.',
    'hero.sub': 'Precision machining, equipment manufacturing, and solutions for the packaging, agricultural, and energy industries.',
    'hero.cta1': 'Our Services',
    'hero.cta2': 'Get in Touch',

    'hl.iso': 'ABNT NBR certification ensuring quality across all processes',
    'hl.years': '+38 years',
    'hl.years.sub': 'Of experience in precision industrial machining and manufacturing',
    'hl.multi': 'Multi-sector',
    'hl.multi.sub': 'Operating in packaging, agribusiness, and renewable energy',
    'hl.partner': 'Strategic Partner',
    'hl.partner.sub': 'Recognized by clients as a high-value solutions provider',

    'srv.tag': 'What we do',
    'srv.title': 'Our Sectors of Operation',
    'srv.sub': 'Technical expertise applied across three strategic industrial segments',
    'srv.badge': 'Main',
    'srv.pkg.title': 'Packaging',
    'srv.pkg.desc': 'Manufacturing and services for plastic cap application, with high-precision and reliable equipment for production lines.',
    'srv.pkg.li1': 'Cap selectors',
    'srv.pkg.li2': 'Magnetic threading heads',
    'srv.pkg.li3': 'Custom machining for OEM replacement parts',
    'srv.agro.title': 'Agribusiness',
    'srv.agro.desc': 'Supply of parts and components for agricultural production machinery, focused on durability and field performance.',
    'srv.agro.li1': 'Harvester parts',
    'srv.agro.li2': 'Custom components',
    'srv.agro.li3': 'Replacement and maintenance',
    'srv.energy.title': 'Energy',
    'srv.energy.desc': 'Technical components for wind towers and turbines, contributing to the renewable energy chain.',
    'srv.energy.li1': 'Labyrinth bushing for turbines',
    'srv.energy.li2': 'Components for wind towers',
    'srv.energy.li3': 'Precision machining',
    'srv.btn': 'View Products',

    'abt.tag': 'Who we are',
    'abt.title': 'Tradition and innovation since 1986',
    'abt.p1': 'Gromar Indústria e Comércio Ltda. was founded in Piracicaba-SP as a machining services provider. Over nearly four decades, we have developed multi-sector expertise that allows us to operate with excellence in the packaging industry, agribusiness, and the energy sector.',
    'abt.p2': 'Our <strong>ABNT NBR ISO 9001:2015</strong> certification reflects our commitment to rigorous quality processes and the constant pursuit of customer satisfaction.',
    'abt.mission.title': 'Mission',
    'abt.mission.desc': 'Provide high-quality solutions to meet our customers\' needs with excellence and commitment.',
    'abt.vision.title': 'Vision',
    'abt.vision.desc': 'To be a regional reference in our industry, recognized for innovation and partner trust.',
    'abt.values.title': 'Values',
    'abt.values.desc': 'Quality, commitment, ethics, innovation, and respect for people and the environment.',
    'abt.stat1': 'Year founded',
    'abt.stat2': 'Operating sectors',

    'cnt.tag': 'Get in touch',
    'cnt.title': 'Contact us',
    'cnt.sub': 'We are ready to meet your demands with agility and precision.',
    'cnt.phones': 'Phones',
    'cnt.address': 'Address',
    'cnt.wa': 'Chat on WhatsApp',

    'form.title': 'Send a message',
    'form.name': 'Name *',
    'form.name.ph': 'Your full name',
    'form.phone': 'Phone',
    'form.msg': 'Message *',
    'form.msg.ph': 'Describe your need...',
    'form.submit': 'Send Message',

    'ftr.links': 'Quick Links',

    'prod.back': 'Back to site',
    'prod.tag': 'Catalog',
    'prod.title': 'Our Products',
    'prod.sub': 'Discover the solutions we manufacture for the packaging, agribusiness, and energy sectors.',
    'prod.label': 'Products',
    'prod.items': 'products',
    'prod.view': 'View Products',
    'prod.other': 'Other Sectors',
    'prod.back.catalog': 'All sectors',
    'prod.pkg.title': 'Packaging',
    'prod.pkg.desc': 'Equipment and parts for plastic cap application lines',
    'prod.pkg.p1.title': 'Cap Selectors',
    'prod.pkg.p1.desc': 'Automated equipment for selecting and orienting plastic caps on high-speed filling lines.',
    'prod.pkg.p1.tag': 'Equipment',
    'prod.pkg.p2.title': 'Magnetic Threading Heads',
    'prod.pkg.p2.desc': 'Magnetic technology heads for precise cap threading, ensuring controlled torque and repeatability.',
    'prod.pkg.p2.tag': 'Component',
    'prod.pkg.p3.title': 'OEM Replacement Parts',
    'prod.pkg.p3.desc': 'Custom machining of replacement parts for packaging equipment, matching original manufacturer specifications.',
    'prod.pkg.p3.tag': 'Machining',
    'prod.pkg.p4.title': 'Star Wheels and Transport Guides',
    'prod.pkg.p4.desc': 'Precision components for bottle and flask transport and positioning on production lines.',
    'prod.pkg.p4.tag': 'Component',
    'prod.agro.title': 'Agribusiness',
    'prod.agro.desc': 'Parts and components for agricultural production machinery',
    'prod.agro.p1.title': 'Harvester Parts',
    'prod.agro.p1.desc': 'High-strength machined components for harvesters, including shafts, bushings, and replacement gears.',
    'prod.agro.p1.tag': 'Replacement',
    'prod.agro.p2.title': 'Custom Components',
    'prod.agro.p2.desc': 'Manufacturing from drawings of special parts for agricultural implements and machines from various manufacturers.',
    'prod.agro.p2.tag': 'Custom',
    'prod.agro.p3.title': 'Maintenance Parts',
    'prod.agro.p3.desc': 'Components for preventive and corrective maintenance of agricultural machinery, focused on field durability.',
    'prod.agro.p3.tag': 'Maintenance',
    'prod.energy.title': 'Energy',
    'prod.energy.desc': 'Technical components for the renewable energy sector',
    'prod.energy.p1.title': 'Labyrinth Bushing for Turbines',
    'prod.energy.p1.desc': 'High-precision component for turbine systems, ensuring sealing and durability in high-rotation environments.',
    'prod.energy.p1.tag': 'Turbines',
    'prod.energy.p2.title': 'Wind Tower Components',
    'prod.energy.p2.desc': 'Precision machined parts for assembly and maintenance of wind power generation towers.',
    'prod.energy.p2.tag': 'Wind',
    'prod.energy.p3.title': 'Precision Machining for Energy',
    'prod.energy.p3.desc': 'CNC machining services for critical energy sector components, with micrometric tolerances.',
    'prod.energy.p3.tag': 'CNC Machining',
    'prod.cta.title': 'Need a specific solution?',
    'prod.cta.desc': 'Get in touch and request a customized quote for your needs.',
    'prod.cta.btn': 'Request Quote',
  }
};

// ===== LANGUAGE SWITCHER =====
const langMeta = {
  pt: { flag: '🇧🇷', code: 'PT' },
  es: { flag: '🇪🇸', code: 'ES' },
  en: { flag: '🇺🇸', code: 'EN' },
};

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en';
  localStorage.setItem('gromar-lang', lang);

  // Update trigger button
  document.getElementById('currentFlag').textContent = langMeta[lang].flag;
  document.getElementById('currentCode').textContent = langMeta[lang].code;

  // Update dropdown active state
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Close dropdown
  document.getElementById('langSwitcher').classList.remove('open');
}

// Toggle dropdown
document.getElementById('langTrigger').addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('langSwitcher').classList.toggle('open');
});

// Close on outside click
document.addEventListener('click', () => {
  document.getElementById('langSwitcher').classList.remove('open');
});

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// Apply saved language on load
const savedLang = localStorage.getItem('gromar-lang') || 'pt';
applyLanguage(savedLang);

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== MOBILE HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ===== CONTACT FORM (AWS Lambda) =====
const LAMBDA_URL = 'https://m4e7qo09vf.execute-api.sa-east-1.amazonaws.com/contact';

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

    const payload = {
      name:    document.getElementById('name').value,
      email:   document.getElementById('email').value,
      phone:   document.getElementById('phone').value,
      message: document.getElementById('message').value,
    };

    try {
      const response = await fetch(LAMBDA_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        form.innerHTML = `
          <div class="form-success" style="display:block">
            <i class="fas fa-check-circle" style="font-size:2.5rem;color:#16a34a;margin-bottom:12px;display:block"></i>
            <h3 style="color:#1e2d3d">Mensagem enviada!</h3>
            <p style="color:#5a6a7a;margin-top:8px">Entraremos em contato em breve.</p>
          </div>`;
      } else {
        btn.disabled = false;
        btn.innerHTML = originalHTML;
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
      alert('Erro de conexão. Tente novamente.');
    }
  });
}

// ===== FADE-IN ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .highlight-card, .mvv-card, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
