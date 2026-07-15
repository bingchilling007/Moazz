// --- BILINGUAL DICTIONARY (ENGLISH & ARABIC) ---
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_operations: "Operations",
    nav_about: "About Us",
    nav_catalog: "Products",
    nav_contact: "Contact",
    
    // Hero
    hero_tag: "🏅 Dubai DED Licensed Foodstuff Trader",
    hero_title: "Dubai's Premium Partner for <span>Imported Halal Meats</span>",
    hero_desc: "Moaaz Foodstuff Trading L.L.C. connects pastures in Pakistan, Kenya, and Ethiopia to the finest butcher shops, hotels, and restaurant chains in the UAE. Fresh, chilled, and certified halal.",
    hero_cta_wa: "Contact via WhatsApp",
    hero_cta_explore: "Explore Products",
    badge_title: "100% Chilled Fresh",
    badge_subtitle: "Temperature Controlled Supply",
    hero_glass_title: "Premium Quality Standards",
    hero_glass_h1: "100% Halal Certified",
    hero_glass_p1: "Sourced from accredited farms only.",
    hero_glass_h2: "Chilled & Cold-Chain Tracked",
    hero_glass_p2: "Maintained strictly at 0°C to 2°C.",
    hero_glass_h3: "DED Licensed Trading",
    hero_glass_p3: "Official commercial foodstuff importer.",
    hero_label_store: "Dubai Outlet",
    hero_label_meat: "Premium Halal Cuts",
    
    // About
    about_subtitle: "Official Licensing & Trust",
    about_title: "Moaaz Foodstuff Trading L.L.C.",
    about_heading: "Committed to Hygiene, Quality, and Reliable Logistics",
    about_desc_1: "Moaaz Foodstuff Trading L.L.C. is an officially registered and licensed entity by the Dubai Department of Economy and Tourism (DED), operating under License No. 1374847. We specialize in the high-volume trading, import, and export of fresh, chilled, and frozen meats across the Middle East.",
    about_desc_2: "From sourcing top-tier livestock and meat products from reliable pastures internationally to delivering safely packaged chilled cuts, we adhere strictly to food safety regulations and GCC halal guidelines.",
    
    // Commercial License
    license_title: "DED Commercial License",
    license_badge: "Active",
    license_num_lbl: "License Number",
    license_type_lbl: "Legal Structure",
    license_type_val: "Limited Liability Co. (L.L.C)",
    license_date_lbl: "Expiry Date",
    license_date_val: "09/06/2026",
    license_authority_lbl: "Registry Authority",
    license_authority_val: "Gov. of Dubai DED",
    license_act_lbl: "Licensed Operations",
    act_meat: "Fresh & Chilled Meat Trading",
    act_frozen: "Frozen Meat Trading",
    act_import: "Import & Export",
    
    // About Stats
    stat_experience_num: "5+",
    stat_experience_lbl: "Years Sourcing",
    stat_clients_num: "150+",
    stat_clients_lbl: "B2B Clients",
    stat_import_num: "100%",
    stat_import_lbl: "Halal Certified",
    
    // Gallery
    gallery_tag_retail: "Retail Shop",
    gallery_title_storefront: "Moaaz Storefront, Dubai",
    gallery_tag_sourcing: "Organic Sourcing",
    gallery_title_pastures: "Sourcing Highlands",
    gallery_tag_halal: "100% Halal",
    gallery_title_carcasses: "Fresh Chilled Carcasses",
    gallery_tag_logistics: "Logistics",
    gallery_title_warehouse: "Cold Chain Standards",
    
    // Operations
    ops_subtitle: "What We Do",
    ops_title: "Core Trading Operations",
    op1_title: "Beef Import from Pakistan",
    op1_desc: "We import premium grade grass-fed beef carcasses directly from certified abattoirs in Pakistan, ensuring strict compliance with cold chain requirements.",
    op1_li1: "Grass-fed, lean carcass cuts",
    op1_li2: "24-48 hour air shipment to Dubai",
    op1_li3: "Strict temperature tracking",
    op2_title: "Goat & Mutton Sourcing",
    op2_desc: "Premium young sheep and goat carcasses imported directly from selected organic pastures of Kenya and Ethiopia.",
    op2_li1: "Tender, organic meat texture",
    op2_li2: "Direct air cargo to Dubai Airports",
    op2_li3: "Full quarantine & halal certs",
    op3_title: "Meat Shop & Retail",
    op3_desc: "Our local outlet caters to households and retail customers with fresh, hygienic portions, pre-packaged cuts, and frozen options.",
    op3_li1: "Chilled fresh beef, lamb, and chicken",
    op3_li2: "Custom portion cutting and packing",
    op3_li3: "Hygienic, sanitised facility",
    op4_title: "Restaurant Supplies",
    op4_desc: "Tailored bulk supply agreements for commercial kitchens, restaurant chains, catering companies, and hotels in Dubai.",
    op4_li1: "Fixed wholesale pricing contracts",
    op4_li2: "Daily delivery in chilled trucks",
    op4_li3: "Flexible custom butcher specifications",
    op_learn_more: "Request Info",
    op_contact_sales: "Contact Sales",
    
    // Catalog
    catalog_subtitle: "Product Showroom",
    catalog_title: "Premium Meat Sourcing",
    cat_all: "All Products",
    cat_beef: "Premium Beef",
    cat_goat: "Imported Mutton & Goat",
    cat_frozen: "Poultry & Frozen",
    cat_restaurant: "Restaurant Bulk Packs",
    origin_pakistan: "Source: Pakistan Pastures",
    origin_kenya: "Source: Kenyan Highlands",
    origin_ethiopia: "Source: Ethiopian Rangelands",
    origin_global: "Source: Certified Global Sourcing",
    origin_local: "Source: Premium Local Farms",
    status_available: "Chilled Fresh",
    status_frozen: "Flash Frozen",
    btn_quote: "Get Price via WhatsApp",
    
    // Logistics & Standards
    logistics_subtitle: "Cold Chain Standards",
    logistics_title: "Advanced Logistics & Quality Sourcing",
    logistics_text: "To ensure that every cut of meat reaches your kitchen in pristine condition, we operate a meticulous, uninterrupted cold chain from processing plants to Dubai customs, and directly to your door.",
    std1_title: "Temperature Controlled Delivery",
    std1_desc: "Constant monitoring in our custom refrigerated logistics vans at 0°C to 2°C.",
    std2_title: "100% Halal Compliance",
    std2_desc: "Every shipment is certified by accredited international islamic slaughter organizations.",
    std3_title: "Premium Origins Only",
    std3_desc: "Pasture-raised, organic livestock sourced directly from certified farms.",
    std4_title: "DED & Municipality Compliant",
    std4_desc: "Fully licensed facilities undergoing regular DED, Dubai Municipality, and HACCP checks.",
    
    // Contact
    contact_subtitle: "Get in Touch",
    contact_title: "Connect with Our Trading Desk",
    c_address_title: "Main Office & Outlet",
    c_address_desc: "Muhaisnah 2, Street # 7, Shop # 11, Sonapore, Dubai — Opposite Old Baldia Camp",
    c_phone_title: "Mobiles & Trading Desk",
    c_phone_desc: "+971 52 211 6612 (WhatsApp)<br>+971 58 264 2005 (WhatsApp)<br>+971 4 575 7415 (Landline)",
    c_email_title: "Email Address",
    c_email_desc: "maazzafar099@gmail.com",
    
    // Map / Location
    map_placeholder_title: "Moaaz Foodstuff Trading Location",
    map_placeholder_desc: "We are located in Deira / Muhaisnah Second, Dubai, UAE. Click below to view the official location details on Apple Maps.",
    btn_apple_maps: "Navigate with Apple Maps",
    btn_google_maps: "Navigate with Google Maps",
    map_address_detail: "Muhaisnah Second - Deira - Dubai",
    
    // Footer
    footer_brand_desc: "Dubai's trusted importer, exporter, and distributor of premium fresh, chilled, and frozen halal meat from Pakistan, Kenya, and Ethiopia.",
    footer_links_title: "Quick Navigation",
    footer_license_title: "Licensed Entity",
    footer_license_desc: "MOAAZ FOR FOODSTUFF TRADING L.L.C. is licensed by Dubai Department of Economy and Tourism.",
    footer_license_num: "License No: 1374847",
    footer_copyright: "&copy; 2026 Moaaz Foodstuff Trading L.L.C. All rights reserved.",
    
    // Floating Widget
    wa_bubble_text: "Questions? Message our sales desk!"
  },
  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_operations: "عملياتنا",
    nav_about: "من نحن",
    nav_catalog: "المنتجات",
    nav_contact: "اتصل بنا",
    
    // Hero
    hero_tag: "🏅 مرخص من دائرة الاقتصاد والسياحة في دبي",
    hero_title: "شريككم الأول في دبي <span>لتجارة اللحوم الحلال المستوردة</span>",
    hero_desc: "تقوم شركة معاذ لتجارة المواد الغذائية ذ.م.م بربط المراعي الطبيعية في باكستان وكينيا وإثيوبيا بأفضل الملاحم والفنادق وسلاسل المطاعم في دولة الإمارات العربية المتحدة. لحوم طازجة، مبردة، وحلال معتمدة.",
    hero_cta_wa: "تواصل معنا عبر واتساب",
    hero_cta_explore: "تصفح منتجاتنا",
    badge_title: "طازج ومبرد 100%",
    badge_subtitle: "سلسلة إمداد مبردة ومراقبة",
    hero_glass_title: "معايير الجودة الممتازة",
    hero_glass_h1: "حلال معتمد 100%",
    hero_glass_p1: "مصادر مستوردة من مزارع معتمدة فقط.",
    hero_glass_h2: "مبردة ومراقبة السلسلة",
    hero_glass_p2: "نحافظ عليها بدقة بين 0 إلى 2 درجة مئوية.",
    hero_glass_h3: "تجارة مرخصة من DED",
    hero_glass_p3: "مستورد تجاري رسمي للمواد الغذائية.",
    
    // About
    about_subtitle: "الترخيص الرسمي والثقة",
    about_title: "معاذ لتجارة المواد الغذائية ذ.م.م",
    about_heading: "ملتزمون بالنظافة والجودة والخدمات اللوجستية الموثوقة",
    about_desc_1: "شركة معاذ لتجارة المواد الغذائية ذ.م.م هي منشأة مسجلة ومرخصة رسميًا من قبل دائرة الاقتصاد والسياحة في دبي (DED)، وتعمل بموجب الرخصة التجارية رقم 1374847. نحن متخصصون في التجارة والاستيراد والتصدير على نطاق واسع للحوم الطازجة والمبردة والمجمدة في منطقة الشرق الأوسط.",
    about_desc_2: "من اختيار أفضل المواشي ومنتجات اللحوم من مراعي عالمية موثوقة إلى التوصيل الآمن لقطع اللحم المبردة، نحن نلتزم التزامًا صارمًا باللوائح الخاصة بسلامة الأغذية ومعايير اللحوم الحلال الخليجية.",
    
    // Commercial License
    license_title: "الرخصة التجارية",
    license_badge: "نشط",
    license_num_lbl: "رقم الرخصة",
    license_type_lbl: "الشكل القانوني",
    license_type_val: "شركة ذات مسؤولية محدودة (ذ.م.م)",
    license_date_lbl: "تاريخ الانتهاء",
    license_date_val: "09/06/2026",
    license_authority_lbl: "جهة التسجيل",
    license_authority_val: "دائرة الاقتصاد والسياحة بدبي",
    license_act_lbl: "الأنشطة المرخصة",
    act_meat: "تجارة اللحوم الطازجة والمبردة",
    act_frozen: "تجارة اللحوم المجمدة",
    act_import: "الاستيراد والتصدير",
    
    // About Stats
    stat_experience_num: "5+",
    stat_experience_lbl: "سنوات من الخبرة",
    stat_clients_num: "150+",
    stat_clients_lbl: "عملاء تجاريين",
    stat_import_num: "100%",
    stat_import_lbl: "حلال معتمد",
    
    // Gallery
    gallery_tag_retail: "محل بيع بالتجزئة",
    gallery_title_storefront: "واجهة ملحمة معاذ، دبي",
    gallery_tag_sourcing: "مصادر عضوية",
    gallery_title_pastures: "مرتفعات التوريد",
    gallery_tag_halal: "حلال 100%",
    gallery_title_carcasses: "ذبائح طازجة مبردة",
    gallery_tag_logistics: "الخدمات اللوجستية",
    gallery_title_warehouse: "معايير سلسلة التبريد",
    
    // Operations
    ops_subtitle: "خدماتنا",
    ops_title: "الأنشطة التجارية الأساسية",
    op1_title: "استيراد لحوم البقر من باكستان",
    op1_desc: "نقوم باستيراد لحوم البقر الفاخرة التي تتغذى على الأعشاب مباشرة من المسالخ المعتمدة في باكستان، مع ضمان الالتزام الصارم بمتطلبات سلسلة التبريد.",
    op1_li1: "لحوم بقرية مغذاة على الأعشاب طبيعياً",
    op1_li2: "شحن جوي سريع خلال 24-48 ساعة إلى دبي",
    op1_li3: "تتبع درجات الحرارة بدقة عالية",
    op2_title: "استيراد لحوم الأغنام والماعز",
    op2_desc: "نقوم باستيراد ذبائح الماعز والأغنام الفتية الممتازة مباشرة من المراعي العضوية المختارة في كينيا وإثيوبيا.",
    op2_li1: "لحوم طرية ذات قوام عضوي طبيعي",
    op2_li2: "شحن جوي مباشر إلى مطارات دبي",
    op2_li3: "شهادات حجر صحي وشهادات حلال كاملة",
    op3_title: "ملحمة وبيع بالتجزئة",
    op3_desc: "يلبي منفذنا المحلي احتياجات العائلات وعملاء التجزئة بتقديم حصص لحم طازجة ونظيفة، وقطع معبأة مسبقاً، وخيارات مجمدة.",
    op3_li1: "لحوم بقر، ضأن، ودجاج طازجة ومبردة",
    op3_li2: "تقطيع وتعبئة اللحوم حسب الطلب",
    op3_li3: "منشأة معقمة ومطابقة لأعلى معايير الصحة",
    op4_title: "توريد للمطاعم والفنادق",
    op4_desc: "اتفاقيات توريد بالجملة مخصصة للمطابخ التجارية وسلاسل المطاعم وشركات التموين والفنادق في دبي.",
    op4_li1: "عقود توريد بأسعار جملة ثابتة",
    op4_li2: "توصيل يومي عبر شاحنات مبردة مخصصة",
    op4_li3: "تفصيل وتقطيع اللحوم حسب مواصفات الشيف",
    op_learn_more: "طلب معلومات",
    op_contact_sales: "اتصل بالمبيعات",
    
    // Catalog
    catalog_subtitle: "معرض المنتجات",
    catalog_title: "أصناف اللحوم الفاخرة",
    cat_all: "جميع المنتجات",
    cat_beef: "لحم بقري ممتاز",
    cat_goat: "لحم ماعز وضأن مستورد",
    cat_frozen: "دواجن ومجمدات",
    cat_restaurant: "عبوات المطاعم بالجملة",
    origin_pakistan: "المصدر: مراعي باكستان الطبيعية",
    origin_kenya: "المصدر: مرتفعات كينيا",
    origin_ethiopia: "المصدر: أراضي إثيوبيا العشبية",
    origin_global: "المصدر: مصادر عالمية معتمدة",
    origin_local: "المصدر: مزارع محلية ممتازة",
    status_available: "طازج مبرد",
    status_frozen: "مجمد سريعاً",
    btn_quote: "طلب السعر عبر واتساب",
    
    // Logistics & Standards
    logistics_subtitle: "معايير سلسلة التبريد",
    logistics_title: "خدمات لوجستية متطورة ومصادر ذات جودة",
    logistics_text: "لضمان وصول كل قطعة لحم إلى مطبخكم في حالة ممتازة، فإننا ندير سلسلة تبريد دقيقة وغير منقطعة بدءاً من مراكز التجهيز وحتى جمارك دبي، ومباشرة إلى باب مستودعكم أو منفذكم.",
    std1_title: "توصيل مبرد ومراقب",
    std1_desc: "مراقبة مستمرة لدرجات الحرارة في شاحناتنا اللوجستية المبردة بين 0 إلى 2 درجة مئوية.",
    std2_title: "متوافق مع الشريعة الإسلامية 100%",
    std2_desc: "كل شحنة معتمدة ومصحوبة بشهادة حلال من جهات الذبح الإسلامية الدولية المعتمدة.",
    std3_title: "مصادر ومراعي فاخرة فقط",
    std3_desc: "مواشي تتغذى على الأعشاب الطبيعية في مراعٍ عضوية مستوردة مباشرة.",
    std4_title: "مطابق لمعايير بلدية دبي",
    std4_desc: "منشآت مرخصة بالكامل وتخضع لعمليات تفتيش دورية من دائرة التنمية الاقتصادية وبلدية دبي والهاسب.",
    
    // Contact
    contact_subtitle: "تواصل معنا",
    contact_title: "اتصل بمكتب التداول والمبيعات لدينا",
    c_address_title: "المكتب الرئيسي والمنفذ",
    c_address_desc: "المحيصنة 2، شارع رقم 7، محل رقم 11، سونابور، دبي — مقابل مخيم البلدية القديم",
    c_phone_title: "الهواتف ومكتب المبيعات",
    c_phone_desc: "+971 52 211 6612 (واتساب)<br>+971 58 264 2005 (واتساب)<br>+971 4 575 7415 (خط أرضي)",
    c_email_title: "البريد الإلكتروني",
    c_email_desc: "maazzafar099@gmail.com",
    
    // Map / Location
    map_placeholder_title: "موقع معاذ لتجارة المواد الغذائية",
    map_placeholder_desc: "نحن نقع في ديرة / المحيصنة الثانية، دبي، الإمارات العربية المتحدة. اضغط أدناه لعرض تفاصيل الموقع الرسمي على خرائط آبل.",
    btn_apple_maps: "الملاحة عبر خرائط آبل",
    btn_google_maps: "الملاحة عبر خرائط جوجل",
    map_address_detail: "المحيصنة الثانية - ديرة - دبي",
    
    // Footer
    footer_brand_desc: "مستورد ومصدر وموزع معتمد في دبي للحوم الحلال الطازجة والمبردة والمجمدة من باكستان وكينيا وإثيوبيا.",
    footer_links_title: "روابط سريعة",
    footer_license_title: "الكيان المرخص",
    footer_license_desc: "معاذ لتجارة المواد الغذائية ش.ذ.م.م مرخصة من قبل دائرة الاقتصاد والسياحة في دبي.",
    footer_license_num: "رقم الرخصة التجارية: 1374847",
    footer_copyright: "جميع الحقوق محفوظة &copy; 2026 شركة معاذ لتجارة المواد الغذائية ذ.م.م.",
    
    // Floating Widget
    wa_bubble_text: "لديك استفسار؟ راسل مكتب المبيعات!"
  }
};

// --- LANGUAGE SWITCH CONTROLLER ---
function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'ar') lang = 'en';
  
  // Save selection
  localStorage.setItem('moaaz_lang', lang);
  
  // Set HTML direction and lang
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  // Toggle body rtl class for styles
  if (lang === 'ar') {
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
  }
  
  // Update translation text content
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Check if it should support html (e.g. titles with <span> tags)
      if (element.tagName === 'SPAN' || key.includes('title') || key.includes('desc') || key.includes('phone_desc')) {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Update language button text toggle
  const langBtnText = document.querySelector('.lang-btn-text');
  if (langBtnText) {
    langBtnText.textContent = lang === 'en' ? 'العربية' : 'English';
  }
}

// --- INITIALIZE PAGE ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Set Default Language from localstorage or default
  const savedLang = localStorage.getItem('moaaz_lang') || 'en';
  setLanguage(savedLang);
  
  // Language button event listener
  const langBtn = document.querySelector('.lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const currentLang = localStorage.getItem('moaaz_lang') || 'en';
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(nextLang);
    });
  }

  // 2. Sticky Navbar scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Mobile Navigation Toggler
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when links are clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // 4. Interactive Product Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const catalogItems = document.querySelectorAll('.catalog-item');
  if (filterBtns.length > 0 && catalogItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        catalogItems.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (category === 'all' || itemCat === category) {
            item.style.display = 'flex';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(15px)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // 5. Scroll animation triggers (Reveal on scroll)
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  // Initial check
  revealOnScroll();

  // 6. Interactive WhatsApp quote text compiler
  const quoteBtns = document.querySelectorAll('[data-product-quote]');
  if (quoteBtns.length > 0) {
    quoteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const productName = btn.getAttribute('data-product-quote');
        const lang = localStorage.getItem('moaaz_lang') || 'en';
        
        let msg = "";
        if (lang === 'ar') {
          msg = `مرحباً، أود الاستفسار عن أسعار وتوافر: ${productName} من شركة معاذ لتجارة المواد الغذائية.`;
        } else {
          msg = `Hello, I would like to inquire about the pricing and availability of: ${productName} from Moaaz Foodstuff Trading L.L.C.`;
        }

        const encodedMsg = encodeURIComponent(msg);
        const waUrl = `https://wa.me/971522116612?text=${encodedMsg}`;
        window.open(waUrl, '_blank');
      });
    });
  }
});
