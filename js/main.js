/* Shahrzad Tehrani – portfolio
   Three languages (DE default, EN, FA), filterable gallery, lightbox. No dependencies. */
(function () {
  'use strict';

  /* ---------- Translations ---------- */
  var T = {
    de: {
      lang: 'de', dir: 'ltr',
      nav_about: 'Über mich', nav_work: 'Arbeiten', nav_exhib: 'Ausstellungen', nav_cv: 'Lebenslauf', nav_contact: 'Kontakt', menu: 'Menü', skip: 'Zum Inhalt springen',
      hero_eyebrow: 'Grafikdesignerin · Malerin · Künstlerin',
      hero_first: 'Shahrzad', hero_last: 'Tehrani',
      hero_lead: 'Malerei in Aquarell, Acryl und Mixed Media. Grafikdesign für Bücher, Marken und Ausstellungen. Ausgebildet in Teheran, zu Hause bei Regensburg.',
      cta_work: 'Arbeiten ansehen', cta_contact: 'Kontakt aufnehmen',
      about_eyebrow: 'Über mich', about_title: 'Wo Gestaltung und Malerei sich berühren',
      about_p1: 'Ich habe Grafikdesign an der Kunstuniversität Teheran studiert und arbeite seit 1995 als Grafikdesignerin, Illustratorin und Beraterin für Verlage, Unternehmen und das iranische Außenministerium. Parallel dazu male ich: Aquarell, Acryl, Collage und Mixed Media.',
      about_p2: 'Mein Schwerpunkt liegt auf Buchcovern, Logos, Katalogen und Plakaten sowie auf der Konzeption von Ausstellungen historischer Dokumente und Fotografien. Ich arbeite sorgfältig, gern im Team und mit großem Interesse an Kunst, Kultur und der Gestaltung von Ausstellungsräumen. Seit einigen Jahren lebe und arbeite ich in Lappersdorf bei Regensburg und stelle mit dem Kunstkreis Regensburger Sonntagsmaler aus.',
      fact1_v: 'Kunstuniversität Teheran', fact1_l: 'Studium Grafikdesign',
      fact2_v: '25+ Jahre', fact2_l: 'Berufserfahrung in Design und Illustration',
      fact3_v: 'Aquarell · Acryl · Mixed Media', fact3_l: 'Malerische Techniken',
      fact4_v: 'Photoshop · InDesign · Illustrator', fact4_l: 'Werkzeuge, dazu Lightroom',
      work_eyebrow: 'Arbeiten', work_title: 'Ausgewählte Arbeiten',
      work_sub: 'Malerei und Grafikdesign aus über zwei Jahrzehnten. Zum Vergrößern auf ein Bild klicken.',
      f_aquarell: 'Aquarell', f_acryl: 'Acryl', f_mixed: 'Mixed Media', f_cover: 'Buchcover', f_logo: 'Logos', f_print: 'Karten & Broschüren',
      exhib_eyebrow: 'Ausstellungen & Projekte', exhib_title: 'Dokumente, Geschichte und Gestaltung',
      exhib_sub: 'Gruppenausstellungen in München und Regensburg seit 2023, davor zwanzig Jahre Ausstellungen historischer Dokumente mit dem Archiv des iranischen Außenministeriums.',
      ex4_t: 'Kunstkreis Regensburger Sonntagsmaler – Gruppenausstellung im Donau-Einkaufszentrum',
      ex4_p: 'Gruppenausstellung des Kunstkreises Regensburger Sonntagsmaler e. V. auf der großen Ausstellungsfläche des Donau-Einkaufszentrums Regensburg, 4. bis 22. August 2026. Vernissage am Dienstag, 4. August 2026, 19 Uhr.',
      ex5_t: 'Gruppenausstellung im Volkswagen Zentrum Regensburg',
      ex5_p: 'Ausstellung des Kunstkreises Regensburger Sonntagsmaler e. V. im Volkswagen Zentrum Regensburg ab 15. März 2025. Das Plakat zeigt mein Acrylbild „Käfer-Parade".',
      ex6_t: 'Frau – Leben – Freiheit, Gruppenausstellung München',
      ex6_p: 'Beteiligung an der Gruppenausstellung „Frau – Leben – Freiheit" in München, Januar 2023, mit Aquarellen zu Frauen und Schrift.',
      ex1_t: '70 Jahre Vereinte Nationen – Ausstellung historischer Dokumente',
      ex1_p: 'Gestaltung und Organisation der Ausstellung zum 70. Jubiläum der Vereinten Nationen in Iran, mit Fotografien aus den UN-Archiven, in ehrenamtlicher Zusammenarbeit mit UNICEF Teheran. Dafür erhielt ich im Oktober 2015 eine Anerkennungsurkunde des UN Resident Coordinator.',
      ex2_t: '540 Jahre diplomatische Beziehungen Iran–Polen',
      ex2_p: 'Broschüre und Seminarprogramm für das Außenministerium Irans und die Botschaft der Republik Polen in Teheran: dreisprachiges Layout mit historischen Karten, Ornamenten und Dokumenten aus beiden Archiven.',
      ex3_t: 'Abteilung für Dokumente und Geschichte der Diplomatie',
      ex3_p: 'Von 2000 bis 2020 habe ich als Grafikdesignerin und Beraterin für die Abteilung für Archiv und Internationale Gremien des iranischen Außenministeriums gearbeitet: Informationsbroschüren, Kataloge und Ausstellungen historischer Dokumente und Fotografien.',
      cv_eyebrow: 'Lebenslauf', cv_title: 'Stationen',
      cv_exp: 'Berufserfahrung', cv_edu: 'Ausbildung', cv_skills: 'Software & Kompetenzen', cv_langs: 'Sprachen', cv_certs: 'Zertifikate',
      e2_t: 'Grafikdesignerin (Teilzeit)', e2_s: 'Faraz Sanat Sharif Co., Teheran',
      e3_t: 'Ehrenamtliche Tätigkeit', e3_s: 'UNICEF Teheran – Ausstellung zum 70. UN-Jubiläum',
      e4_t: 'Grafikdesignerin und Illustratorin für Kinderbücher', e4_s: 'Verlag Amoozesh, Teheran',
      e5_t: 'Grafikdesignerin, Beraterin und Organisatorin von Ausstellungen', e5_s: 'Abteilung für Archiv und Internationale Gremien, Außenministerium Iran, Teheran',
      e6_t: 'Grafikdesignerin und Beraterin für Verlage', e6_s: 'Ketabsara, Teheran',
      d1_t: 'Zertifikate Brand Identity, Adobe Illustrator, InDesign', d1_s: 'IDEA School of Graphics & Advertising, Teheran',
      d2_t: 'Pressegrafik', d2_s: 'Zentrum für Ausbildungsförderung der Massenmedien, Teheran',
      d3_t: 'Studium Grafikdesign', d3_s: 'Kunstuniversität Teheran',
      d4_t: 'Diplom in Kinderpflege', d4_s: 'Teheran',
      sk1: 'Layout & Satz', sk2: 'Plakate & Flyer', sk3: 'Kataloge & Broschüren', sk4: 'Logo & Markenaufbau', sk5: 'Illustration', sk6: 'Buchcover', sk7: 'Bearbeitung alter Dokumente und Bilder', sk8: 'Ausstellungskonzeption',
      l1: 'Persisch', l1v: 'Muttersprache', l2: 'Deutsch', l2v: 'B1', l3: 'Englisch', l3v: 'A2',
      c1: 'Brand Identity · 2010', c2: 'Adobe Illustrator · 2010', c3: 'InDesign · 2010',
      contact_eyebrow: 'Kontakt', contact_title: 'Schreiben Sie mir',
      contact_p: 'Für Aufträge, Ausstellungen, Illustrationen oder einfach ein Gespräch über Farbe und Papier.',
      c_mail: 'E-Mail', c_ig: 'Instagram', c_mail_btn: 'E-Mail schreiben', c_copy: 'Adresse kopieren', c_copied: 'Adresse kopiert', c_place: 'Ort', c_place_v: 'Lappersdorf bei Regensburg, Bayern', c_li: 'LinkedIn', c_li_v: 'Shahrzad Tehrani auf LinkedIn',
      foot_rights: '© 2026 Shahrzad Tehrani. Alle Bilder und Arbeiten urheberrechtlich geschützt.',
      imp: 'Impressum', imp_p: 'Angaben gemäß § 5 TMG: Shahrzad Jafaritehrani, Kornstr. 3, 93138 Lappersdorf, Deutschland.', privacy: 'Datenschutz',
      lb_close: 'Schließen', lb_prev: 'Vorheriges Bild', lb_next: 'Nächstes Bild',
      alt_portrait: 'Porträt von Shahrzad Tehrani', alt_ex2026: 'Einladung zur Vernissage: Kunstkreis Regensburger Sonntagsmaler, Donau-Einkaufszentrum Regensburg, 4. bis 22. August 2026', alt_ex2025: 'Plakat der Gruppenausstellung im Volkswagen Zentrum Regensburg mit dem Gemälde Käfer-Parade, März 2025', alt_ex2023: 'Besucher vor den Bildern von Shahrzad Tehrani in der Gruppenausstellung Frau, Leben, Freiheit, München 2023', alt_un_cert: 'Certificate of Appreciation der Vereinten Nationen, 12. Oktober 2015', alt_un1: 'Ausstellungstafel: Unterzeichnung der UN-Charta, San Francisco 1945', alt_un2: 'Ausstellungstafel: Kinder lesen die UN-Charta', alt_un3: 'Ausstellungstafel: Dag Hammarskjöld in Teheran', alt_br_polen: 'Broschüre 540 Jahre diplomatische Beziehungen Iran–Polen', alt_br_archiv: 'Broschüre Department for Documents and History of Diplomacy', alt_cert1: 'Zertifikat Brand Identity, IDEA School, Oktober 2010', alt_cert2: 'Zertifikat Adobe Illustrator, IDEA School, Dezember 2010', alt_cert3: 'Zertifikat InDesign, IDEA School, Dezember 2010', alt_og: 'Shahrzad Tehrani – drei Arbeiten: Aquarell, Acryl, Collage',
      cat: { aquarell: 'Aquarell', acryl: 'Acryl', mixed: 'Mixed Media', cover: 'Buchcover', logo: 'Logo', print: 'Print' }
    },
    en: {
      lang: 'en', dir: 'ltr',
      nav_about: 'About', nav_work: 'Work', nav_exhib: 'Exhibitions', nav_cv: 'CV', nav_contact: 'Contact', menu: 'Menu', skip: 'Skip to content',
      hero_eyebrow: 'Graphic Designer · Painter · Artist',
      hero_first: 'Shahrzad', hero_last: 'Tehrani',
      hero_lead: 'Painting in watercolour, acrylic and mixed media. Graphic design for books, brands and exhibitions. Trained in Tehran, at home near Regensburg.',
      cta_work: 'View the work', cta_contact: 'Get in touch',
      about_eyebrow: 'About', about_title: 'Where design and painting meet',
      about_p1: 'I studied graphic design at the Tehran University of Art and have worked since 1995 as a graphic designer, illustrator and consultant for publishers, companies and the Iranian Ministry of Foreign Affairs. Alongside this I paint: watercolour, acrylic, collage and mixed media.',
      about_p2: 'My focus is on book covers, logos, catalogues and posters, and on conceiving exhibitions of historical documents and photographs. I work carefully, enjoy working in a team, and have a deep interest in art, culture and the design of exhibition spaces. For some years now I have lived and worked in Lappersdorf near Regensburg, Germany, and exhibit with the Kunstkreis Regensburger Sonntagsmaler.',
      fact1_v: 'Tehran University of Art', fact1_l: 'Degree in graphic design',
      fact2_v: '25+ years', fact2_l: 'Professional experience in design and illustration',
      fact3_v: 'Watercolour · Acrylic · Mixed media', fact3_l: 'Painting techniques',
      fact4_v: 'Photoshop · InDesign · Illustrator', fact4_l: 'Tools, plus Lightroom',
      work_eyebrow: 'Work', work_title: 'Selected work',
      work_sub: 'Painting and graphic design from more than two decades. Click an image to enlarge.',
      f_aquarell: 'Watercolour', f_acryl: 'Acrylic', f_mixed: 'Mixed media', f_cover: 'Book covers', f_logo: 'Logos', f_print: 'Cards & brochures',
      exhib_eyebrow: 'Exhibitions & projects', exhib_title: 'Documents, history and design',
      exhib_sub: 'Group exhibitions in Munich and Regensburg since 2023, and before that twenty years of exhibitions of historical documents with the archive of the Iranian Ministry of Foreign Affairs.',
      ex4_t: 'Kunstkreis Regensburger Sonntagsmaler – group exhibition at the Donau-Einkaufszentrum',
      ex4_p: 'Group exhibition of the Kunstkreis Regensburger Sonntagsmaler e. V. on the large exhibition floor of the Donau-Einkaufszentrum Regensburg, 4 to 22 August 2026. Opening on Tuesday, 4 August 2026, 7 pm.',
      ex5_t: 'Group exhibition at the Volkswagen Zentrum Regensburg',
      ex5_p: 'Exhibition of the Kunstkreis Regensburger Sonntagsmaler e. V. at the Volkswagen Zentrum Regensburg from 15 March 2025. The poster shows my acrylic painting "Beetle Parade".',
      ex6_t: 'Woman, Life, Freedom – group exhibition, Munich',
      ex6_p: 'Participation in the group exhibition "Frau – Leben – Freiheit" in Munich, January 2023, with watercolours on women and script.',
      ex1_t: '70 years of the United Nations – exhibition of historical documents',
      ex1_p: 'Design and organisation of the exhibition marking the 70th anniversary of the United Nations in Iran, with photographs from the UN archives, as a volunteer with UNICEF Tehran. In October 2015 I received a Certificate of Appreciation from the UN Resident Coordinator for this work.',
      ex2_t: '540 years of diplomatic relations between Iran and Poland',
      ex2_p: 'Brochure and seminar programme for the Iranian Ministry of Foreign Affairs and the Embassy of the Republic of Poland in Tehran: a trilingual layout with historical maps, ornaments and documents from both archives.',
      ex3_t: 'Department for Documents and History of Diplomacy',
      ex3_p: 'From 2000 to 2020 I worked as a graphic designer and consultant for the Department of Archives and International Bodies of the Iranian Ministry of Foreign Affairs: information brochures, catalogues and exhibitions of historical documents and photographs.',
      cv_eyebrow: 'CV', cv_title: 'Milestones',
      cv_exp: 'Experience', cv_edu: 'Education', cv_skills: 'Software & skills', cv_langs: 'Languages', cv_certs: 'Certificates',
      e2_t: 'Graphic designer (part-time)', e2_s: 'Faraz Sanat Sharif Co., Tehran',
      e3_t: 'Volunteer work', e3_s: 'UNICEF Tehran – exhibition for the 70th UN anniversary',
      e4_t: 'Graphic designer and illustrator for children\'s books', e4_s: 'Amoozesh Publishing, Tehran',
      e5_t: 'Graphic designer, consultant and exhibition organiser', e5_s: 'Department of Archives and International Bodies, Ministry of Foreign Affairs, Tehran',
      e6_t: 'Graphic designer and consultant for publishers', e6_s: 'Ketabsara, Tehran',
      d1_t: 'Certificates in Brand Identity, Adobe Illustrator and InDesign', d1_s: 'IDEA School of Graphics & Advertising, Tehran',
      d2_t: 'Press graphics', d2_s: 'Centre for Mass Media Training, Tehran',
      d3_t: 'Degree in graphic design', d3_s: 'Tehran University of Art',
      d4_t: 'Diploma in childcare', d4_s: 'Tehran',
      sk1: 'Layout & typesetting', sk2: 'Posters & flyers', sk3: 'Catalogues & brochures', sk4: 'Logo & brand building', sk5: 'Illustration', sk6: 'Book covers', sk7: 'Restoring old documents and images', sk8: 'Exhibition concepts',
      l1: 'Persian', l1v: 'Native', l2: 'German', l2v: 'B1', l3: 'English', l3v: 'A2',
      c1: 'Brand Identity · 2010', c2: 'Adobe Illustrator · 2010', c3: 'InDesign · 2010',
      contact_eyebrow: 'Contact', contact_title: 'Write to me',
      contact_p: 'For commissions, exhibitions, illustration work, or simply a conversation about colour and paper.',
      c_mail: 'Email', c_ig: 'Instagram', c_mail_btn: 'Write an email', c_copy: 'Copy address', c_copied: 'Address copied', c_place: 'Location', c_place_v: 'Lappersdorf near Regensburg, Bavaria', c_li: 'LinkedIn', c_li_v: 'Shahrzad Tehrani on LinkedIn',
      foot_rights: '© 2026 Shahrzad Tehrani. All images and works are protected by copyright.',
      imp: 'Legal notice', imp_p: 'Information according to § 5 TMG (German Telemedia Act): Shahrzad Jafaritehrani, Kornstr. 3, 93138 Lappersdorf, Germany.', privacy: 'Privacy (German)',
      lb_close: 'Close', lb_prev: 'Previous image', lb_next: 'Next image',
      alt_portrait: 'Portrait of Shahrzad Tehrani', alt_ex2026: 'Invitation to the opening: Kunstkreis Regensburger Sonntagsmaler, Donau-Einkaufszentrum Regensburg, 4 to 22 August 2026', alt_ex2025: 'Poster of the group exhibition at the Volkswagen Zentrum Regensburg showing the painting Beetle Parade, March 2025', alt_ex2023: 'Visitors in front of Shahrzad Tehrani’s paintings at the group exhibition Woman, Life, Freedom, Munich 2023', alt_un_cert: 'United Nations Certificate of Appreciation, 12 October 2015', alt_un1: 'Exhibition panel: signing of the UN Charter, San Francisco 1945', alt_un2: 'Exhibition panel: children reading the UN Charter', alt_un3: 'Exhibition panel: Dag Hammarskjöld in Tehran', alt_br_polen: 'Brochure for 540 years of diplomatic relations between Iran and Poland', alt_br_archiv: 'Brochure of the Department for Documents and History of Diplomacy', alt_cert1: 'Certificate in Brand Identity, IDEA School, October 2010', alt_cert2: 'Certificate in Adobe Illustrator, IDEA School, December 2010', alt_cert3: 'Certificate in InDesign, IDEA School, December 2010', alt_og: 'Shahrzad Tehrani – three works: watercolour, acrylic, collage',
      cat: { aquarell: 'Watercolour', acryl: 'Acrylic', mixed: 'Mixed media', cover: 'Book cover', logo: 'Logo', print: 'Print' }
    },
    fa: {
      lang: 'fa', dir: 'rtl',
      nav_about: 'درباره من', nav_work: 'آثار', nav_exhib: 'نمایشگاه‌ها', nav_cv: 'رزومه', nav_contact: 'تماس', menu: 'منو', skip: 'پرش به محتوا',
      hero_eyebrow: 'گرافیست · نقاش · هنرمند',
      hero_first: 'شهرزاد', hero_last: 'تهرانی',
      hero_lead: 'نقاشی با آبرنگ، اکریلیک و میکس‌مدیا. طراحی گرافیک برای کتاب، برند و نمایشگاه. آموخته در تهران، ساکن حوالی رگنسبورگ آلمان.',
      cta_work: 'دیدن آثار', cta_contact: 'تماس با من',
      about_eyebrow: 'درباره من', about_title: 'جایی که طراحی و نقاشی به هم می‌رسند',
      about_p1: 'من دانش‌آموختهٔ گرافیک از دانشگاه هنر تهران هستم و از سال ۱۳۷۴ (۱۹۹۵) به‌عنوان گرافیست، تصویرگر و مشاور با ناشران، شرکت‌ها و وزارت امور خارجه ایران همکاری کرده‌ام. در کنار آن نقاشی می‌کنم: آبرنگ، اکریلیک، کلاژ و میکس‌مدیا.',
      about_p2: 'تمرکز کارم روی طراحی جلد کتاب، لوگو، کاتالوگ و پوستر و همچنین طراحی و برگزاری نمایشگاه اسناد و عکس‌های تاریخی است. دقیق و با حوصله کار می‌کنم، کار گروهی را دوست دارم و به هنر، فرهنگ و طراحی فضاهای نمایشگاهی علاقهٔ زیادی دارم. چند سالی است که در لاپرسدورف نزدیک رگنسبورگ آلمان زندگی و کار می‌کنم و با انجمن هنری نقاشان یکشنبهٔ رگنسبورگ نمایشگاه می‌گذارم.',
      fact1_v: 'دانشگاه هنر تهران', fact1_l: 'تحصیل در رشتهٔ گرافیک',
      fact2_v: 'بیش از ۲۵ سال', fact2_l: 'تجربهٔ حرفه‌ای در طراحی و تصویرسازی',
      fact3_v: 'آبرنگ · اکریلیک · میکس‌مدیا', fact3_l: 'تکنیک‌های نقاشی',
      fact4_v: 'فتوشاپ · ایندیزاین · ایلاستریتور', fact4_l: 'ابزارها، به‌علاوهٔ لایت‌روم',
      work_eyebrow: 'آثار', work_title: 'گزیدهٔ آثار',
      work_sub: 'نقاشی و طراحی گرافیک از بیش از دو دهه. برای بزرگ‌نمایی روی تصویر کلیک کنید.',
      f_aquarell: 'آبرنگ', f_acryl: 'اکریلیک', f_mixed: 'میکس‌مدیا', f_cover: 'جلد کتاب', f_logo: 'لوگو', f_print: 'کارت و بروشور',
      exhib_eyebrow: 'نمایشگاه‌ها و پروژه‌ها', exhib_title: 'اسناد، تاریخ و طراحی',
      exhib_sub: 'نمایشگاه‌های گروهی در مونیخ و رگنسبورگ از ۲۰۲۳، و پیش از آن بیست سال نمایشگاه اسناد تاریخی با مرکز اسناد وزارت امور خارجه ایران.',
      ex4_t: 'کونست‌کرایس نقاشان یکشنبهٔ رگنسبورگ؛ نمایشگاه گروهی در دوناو-اینکاوفس‌تسنتروم',
      ex4_p: 'نمایشگاه گروهی انجمن هنری Kunstkreis Regensburger Sonntagsmaler در فضای بزرگ نمایشگاهی مرکز خرید دوناو در رگنسبورگ، ۴ تا ۲۲ اوت ۲۰۲۶. افتتاحیه سه‌شنبه ۴ اوت ۲۰۲۶ ساعت ۱۹.',
      ex5_t: 'نمایشگاه گروهی در مرکز فولکس‌واگن رگنسبورگ',
      ex5_p: 'نمایشگاه انجمن هنری Kunstkreis Regensburger Sonntagsmaler در مرکز فولکس‌واگن رگنسبورگ از ۱۵ مارس ۲۰۲۵. پوستر نمایشگاه تابلوی اکریلیک «رژهٔ فولکس‌ها» را نشان می‌دهد.',
      ex6_t: 'زن، زندگی، آزادی؛ نمایشگاه گروهی مونیخ',
      ex6_p: 'شرکت در نمایشگاه گروهی «زن، زندگی، آزادی» در مونیخ، ژانویهٔ ۲۰۲۳، با آبرنگ‌هایی دربارهٔ زنان و خط.',
      ex1_t: 'هفتادمین سالگرد سازمان ملل متحد؛ نمایشگاه اسناد تاریخی',
      ex1_p: 'طراحی و برگزاری نمایشگاه هفتادمین سالگرد سازمان ملل در ایران با عکس‌هایی از آرشیو سازمان ملل، به‌صورت داوطلبانه و با همکاری یونیسف تهران. برای این کار در مهر ۱۳۹۴ (اکتبر ۲۰۱۵) لوح تقدیر هماهنگ‌کنندهٔ مقیم سازمان ملل را دریافت کردم.',
      ex2_t: '۵۴۰ سال روابط دیپلماتیک ایران و لهستان',
      ex2_p: 'بروشور و برنامهٔ سمینار برای وزارت امور خارجه ایران و سفارت جمهوری لهستان در تهران: صفحه‌آرایی سه‌زبانه با نقشه‌های تاریخی، نقوش و اسنادی از آرشیو هر دو کشور.',
      ex3_t: 'ادارهٔ اسناد و تاریخ دیپلماسی',
      ex3_p: 'از ۱۳۷۹ تا ۱۳۹۹ (۲۰۰۰ تا ۲۰۲۰) به‌عنوان گرافیست و مشاور با ادارهٔ آرشیو و مجامع بین‌المللی وزارت امور خارجه همکاری کردم: بروشورهای معرفی، کاتالوگ و نمایشگاه‌های اسناد و عکس‌های تاریخی.',
      cv_eyebrow: 'رزومه', cv_title: 'مسیر حرفه‌ای',
      cv_exp: 'سوابق کاری', cv_edu: 'تحصیلات', cv_skills: 'نرم‌افزار و مهارت‌ها', cv_langs: 'زبان‌ها', cv_certs: 'گواهی‌نامه‌ها',
      e2_t: 'گرافیست (پاره‌وقت)', e2_s: 'شرکت فراز صنعت شریف، تهران',
      e3_t: 'فعالیت داوطلبانه', e3_s: 'یونیسف تهران؛ نمایشگاه هفتادمین سالگرد سازمان ملل',
      e4_t: 'گرافیست و تصویرگر کتاب کودک', e4_s: 'انتشارات آموزش، تهران',
      e5_t: 'گرافیست، مشاور و برگزارکنندهٔ نمایشگاه', e5_s: 'ادارهٔ آرشیو و مجامع بین‌المللی، وزارت امور خارجه، تهران',
      e6_t: 'گرافیست و مشاور ناشران', e6_s: 'کتاب‌سرا، تهران',
      d1_t: 'گواهی‌نامه‌های هویت برند، ایلاستریتور و ایندیزاین', d1_s: 'آموزشگاه گرافیک و تبلیغات ایده، تهران',
      d2_t: 'گرافیک مطبوعاتی', d2_s: 'مرکز آموزش رسانه‌های همگانی، تهران',
      d3_t: 'تحصیل در رشتهٔ گرافیک', d3_s: 'دانشگاه هنر تهران',
      d4_t: 'دیپلم مراقبت از کودک', d4_s: 'تهران',
      sk1: 'صفحه‌آرایی', sk2: 'پوستر و تراکت', sk3: 'کاتالوگ و بروشور', sk4: 'لوگو و برندسازی', sk5: 'تصویرسازی', sk6: 'جلد کتاب', sk7: 'بازسازی اسناد و تصاویر قدیمی', sk8: 'طراحی نمایشگاه',
      l1: 'فارسی', l1v: 'زبان مادری', l2: 'آلمانی', l2v: 'B1', l3: 'انگلیسی', l3v: 'A2',
      c1: 'هویت برند · ۲۰۱۰', c2: 'ایلاستریتور · ۲۰۱۰', c3: 'ایندیزاین · ۲۰۱۰',
      contact_eyebrow: 'تماس', contact_title: 'برایم بنویسید',
      contact_p: 'برای سفارش کار، نمایشگاه، تصویرسازی یا فقط گفت‌وگویی دربارهٔ رنگ و کاغذ.',
      c_mail: 'ایمیل', c_ig: 'اینستاگرام', c_mail_btn: 'نوشتن ایمیل', c_copy: 'کپی آدرس ایمیل', c_copied: 'آدرس کپی شد', c_place: 'محل', c_place_v: 'لاپرسدورف، نزدیک رگنسبورگ، بایرن', c_li: 'لینکدین', c_li_v: 'شهرزاد تهرانی در لینکدین',
      foot_rights: '© ۲۰۲۶ شهرزاد تهرانی. تمامی تصاویر و آثار دارای حق نشر هستند.',
      imp: 'مشخصات قانونی (Impressum)', imp_p: 'طبق مادهٔ ۵ قانون رسانه‌های آلمان (TMG): Shahrzad Jafaritehrani, Kornstr. 3, 93138 Lappersdorf, Deutschland.', privacy: 'حریم خصوصی (آلمانی)',
      lb_close: 'بستن', lb_prev: 'تصویر قبلی', lb_next: 'تصویر بعدی',
      alt_portrait: 'پرترهٔ شهرزاد تهرانی', alt_ex2026: 'دعوت‌نامهٔ افتتاحیه: انجمن هنری Kunstkreis Regensburger Sonntagsmaler، مرکز خرید دوناو رگنسبورگ، ۴ تا ۲۲ اوت ۲۰۲۶', alt_ex2025: 'پوستر نمایشگاه گروهی در مرکز فولکس‌واگن رگنسبورگ با تابلوی رژهٔ فولکس‌ها، مارس ۲۰۲۵', alt_ex2023: 'بازدیدکنندگان روبه‌روی تابلوهای شهرزاد تهرانی در نمایشگاه گروهی زن، زندگی، آزادی، مونیخ ۲۰۲۳', alt_un_cert: 'لوح تقدیر سازمان ملل متحد، ۱۲ اکتبر ۲۰۱۵', alt_un1: 'تابلوی نمایشگاه: امضای منشور سازمان ملل، سان‌فرانسیسکو ۱۹۴۵', alt_un2: 'تابلوی نمایشگاه: کودکان در حال خواندن منشور سازمان ملل', alt_un3: 'تابلوی نمایشگاه: داگ هامرشولد در تهران', alt_br_polen: 'بروشور ۵۴۰ سال روابط دیپلماتیک ایران و لهستان', alt_br_archiv: 'بروشور ادارهٔ اسناد و تاریخ دیپلماسی', alt_cert1: 'گواهی‌نامهٔ هویت برند، آموزشگاه ایده، اکتبر ۲۰۱۰', alt_cert2: 'گواهی‌نامهٔ ایلاستریتور، آموزشگاه ایده، دسامبر ۲۰۱۰', alt_cert3: 'گواهی‌نامهٔ ایندیزاین، آموزشگاه ایده، دسامبر ۲۰۱۰', alt_og: 'شهرزاد تهرانی؛ سه اثر: آبرنگ، اکریلیک، کلاژ',
      cat: { aquarell: 'آبرنگ', acryl: 'اکریلیک', mixed: 'میکس‌مدیا', cover: 'جلد کتاب', logo: 'لوگو', print: 'چاپ' }
    }
  };

  /* ---------- Gallery data ---------- */
  var WORKS = [
    { f: 'aquarell-rosen', c: 'aquarell', w: 396, h: 516, t: { de: 'Rosenhut', en: 'Hat of Roses', fa: 'کلاه گل سرخ' }, y: '2025' },
    { f: 'acryl-beetles', c: 'acryl', w: 410, h: 530, t: { de: 'Käfer-Parade', en: 'Beetle Parade', fa: 'رژهٔ فولکس‌ها' } },
    { f: 'cover-afrika', c: 'cover', w: 538, h: 381, t: { de: 'Afrikanische Märchen', en: 'African Tales', fa: 'قصه‌های آفریقایی' } },
    { f: 'aquarell-schleier', c: 'aquarell', w: 415, h: 555, t: { de: 'Hinter dem Schleier', en: 'Behind the Veil', fa: 'پشت روبنده' } },
    { f: 'mixed-tanz', c: 'mixed', w: 440, h: 310, t: { de: 'Tanz', en: 'Dance', fa: 'رقص' } },
    { f: 'logo-sermeh', c: 'logo', w: 360, h: 310, t: { de: 'Sermeh – Damenmode', en: 'Sermeh – women\'s wear', fa: 'سرمه؛ پوشاک زنانه' } },
    { f: 'aquarell-nest', c: 'aquarell', w: 403, h: 538, t: { de: 'Nest im Winterwald', en: 'Nest in the Winter Forest', fa: 'آشیانه در جنگل زمستانی' } },
    { f: 'post-02', c: 'print', w: 371, h: 516, t: { de: 'Nowruz-Karte 1399', en: 'Nowruz card 1399', fa: 'کارت نوروز ۱۳۹۹' } },
    { f: 'acryl-bmw', c: 'acryl', w: 408, h: 540, t: { de: 'BMW M3 E30', en: 'BMW M3 E30', fa: 'بی‌ام‌و M3' }, y: '2023' },
    { f: 'cover-wolken', c: 'cover', w: 526, h: 386, t: { de: 'Wenn die Wolken es zulassen …', en: 'If the Clouds Allow …', fa: 'اگر ابرها بگذارند…' } },
    { f: 'aquarell-eshgh', c: 'aquarell', w: 266, h: 548, t: { de: 'Eshgh – Liebe', en: 'Eshgh – Love', fa: 'عشق' } },
    { f: 'mixed-01', c: 'mixed', w: 306, h: 296, t: { de: 'Seasons I · 15 × 15 cm', en: 'Seasons I · 15 × 15 cm', fa: 'فصل‌ها ۱ · ۱۵×۱۵ سانتی‌متر' }, y: '2024' },
    { f: 'logo-zibanegar', c: 'logo', w: 350, h: 320, t: { de: 'Ziba Negar', en: 'Ziba Negar', fa: 'زیبا نگار' } },
    { f: 'aquarell-magnolie', c: 'aquarell', w: 393, h: 521, t: { de: 'Magnolie', en: 'Magnolia', fa: 'ماگنولیا' }, y: '2025' },
    { f: 'broschuere-polen', c: 'print', w: 996, h: 486, t: { de: 'Broschüre: 540 Jahre Iran–Polen', en: 'Brochure: 540 years Iran–Poland', fa: 'بروشور ۵۴۰ سال ایران و لهستان' } },
    { f: 'acryl-challenger', c: 'acryl', w: 1200, h: 1402, t: { de: 'Challenger im Rauch', en: 'Challenger in Smoke', fa: 'چلنجر در دود' }, y: '2025' },
    { f: 'aquarell-webstuhl', c: 'aquarell', w: 245, h: 555, t: { de: 'Der Webstuhl', en: 'The Loom', fa: 'دار قالی' } },
    { f: 'cover-schmetterling', c: 'cover', w: 536, h: 356, t: { de: 'Kokon und Schmetterling', en: 'Cocoon and Butterfly', fa: 'پیله و پروانه' } },
    { f: 'mixed-regensburg', c: 'mixed', w: 540, h: 310, t: { de: 'Stadtführend in Regensburg', en: 'Through Regensburg', fa: 'گشتی در رگنسبورگ' } },
    { f: 'logo-modirabzar', c: 'logo', w: 370, h: 350, t: { de: 'Modir Abzar', en: 'Modir Abzar', fa: 'مدیر ابزار' } },
    { f: 'post-01', c: 'print', w: 368, h: 390, t: { de: 'Neujahrskarte 1398', en: 'New Year card 1398', fa: 'کارت نوروز ۱۳۹۸' } },
    { f: 'aquarell-spatz', c: 'aquarell', w: 356, h: 536, t: { de: 'Spatz am Mast', en: 'Sparrow on the Pole', fa: 'گنجشک روی تیر' } },
    { f: 'mixed-02', c: 'mixed', w: 633, h: 640, t: { de: 'Seasons II · 15 × 15 cm', en: 'Seasons II · 15 × 15 cm', fa: 'فصل‌ها ۲ · ۱۵×۱۵ سانتی‌متر' }, y: '2024' },
    { f: 'karte-sermeh', c: 'print', w: 321, h: 511, t: { de: 'Visitenkarte Sermeh', en: 'Business card, Sermeh', fa: 'کارت ویزیت سرمه' } },
    { f: 'logo-vega', c: 'logo', w: 340, h: 260, t: { de: 'Vega System', en: 'Vega System', fa: 'وگا سیستم' } },
    { f: 'aquarell-sonnenblumen', c: 'aquarell', w: 446, h: 646, t: { de: 'Sonnenblumen', en: 'Sunflowers', fa: 'آفتابگردان‌ها' } },
    { f: 'cover-atlas', c: 'cover', w: 536, h: 396, t: { de: 'Atlas ausgewählter Karten der Kadscharenzeit', en: 'Atlas of Selected Maps of the Qajar Era', fa: 'اطلس نقشه‌های منتخب دورهٔ قاجار' } },
    { f: 'mixed-03', c: 'mixed', w: 320, h: 296, t: { de: 'Seasons III · 15 × 15 cm', en: 'Seasons III · 15 × 15 cm', fa: 'فصل‌ها ۳ · ۱۵×۱۵ سانتی‌متر' }, y: '2024' },
    { f: 'post-03', c: 'print', w: 362, h: 522, t: { de: 'Nowruz-Karte 1399, Variante', en: 'Nowruz card 1399, variant', fa: 'کارت نوروز ۱۳۹۹، طرح دوم' } },
    { f: 'logo-irtech', c: 'logo', w: 340, h: 190, t: { de: 'Irtech – Iranian Radar Technologies', en: 'Irtech – Iranian Radar Technologies', fa: 'ایرتک' } },
    { f: 'karte-artan', c: 'print', w: 421, h: 236, t: { de: 'Visitenkarte Artan', en: 'Business card, Artan', fa: 'کارت ویزیت آرتان' } },
    { f: 'mixed-04', c: 'mixed', w: 306, h: 296, t: { de: 'Seasons IV · 15 × 15 cm', en: 'Seasons IV · 15 × 15 cm', fa: 'فصل‌ها ۴ · ۱۵×۱۵ سانتی‌متر' }, y: '2024' },
    { f: 'broschuere-archiv', c: 'print', w: 1021, h: 386, t: { de: 'Broschüre: Department for Documents and History of Diplomacy', en: 'Brochure: Department for Documents and History of Diplomacy', fa: 'بروشور ادارهٔ اسناد و تاریخ دیپلماسی' } },
    { f: 'logo-araye', c: 'logo', w: 470, h: 220, t: { de: 'Arayeh Pardazan Sharif', en: 'Arayeh Pardazan Sharif', fa: 'آرایه پردازان شریف' } },
    { f: 'karte-niyavaran', c: 'print', w: 316, h: 501, t: { de: 'Visitenkarte Niyavaran Guest House', en: 'Business card, Niyavaran Guest House', fa: 'کارت ویزیت مهمانسرای نیاوران' } }
  ];

  var lang = document.documentElement.getAttribute('data-site-lang') || 'de';
  var BASE = document.documentElement.getAttribute('data-base') || '';
  var filter = 'aquarell';
  var visible = [];
  var current = 0;

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* ---------- Language ---------- */
  function applyLang(l) {
    lang = l;
    var t = T[l];
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    $$('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (t[k] !== undefined) el.textContent = t[k];
    });
    $$('[data-i18n-alt]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-alt');
      if (t[k] !== undefined) el.setAttribute('alt', t[k]);
    });
    $$('[data-i18n-label]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-label');
      if (t[k] !== undefined) el.setAttribute('aria-label', t[k]);
    });
    renderGallery();
  }

  /* ---------- Gallery ---------- */
  function renderGallery() {
    var grid = $('#gallery');
    if (!grid) return;
    var t = T[lang];
    visible = WORKS.filter(function (w) { return filter === 'all' || w.c === filter; });
    grid.innerHTML = '';
    visible.forEach(function (w, i) {
      var fig = document.createElement('figure');
      fig.className = 'work ' + w.c;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', w.t[lang]);
      btn.addEventListener('click', function () { openLightbox(i); });
      var frame = document.createElement('div');
      frame.className = 'frame';
      var img = document.createElement('img');
      img.src = BASE + 'img/' + w.f + '.webp';
      img.alt = w.t[lang];
      img.width = w.w; img.height = w.h;
      img.loading = 'lazy';
      img.decoding = 'async';
      frame.appendChild(img);
      btn.appendChild(frame);
      var cap = document.createElement('figcaption');
      var b = document.createElement('b');
      b.textContent = w.t[lang];
      var s = document.createElement('span');
      s.textContent = t.cat[w.c] + (w.y ? ' · ' + w.y : '');
      cap.appendChild(b); cap.appendChild(s);
      fig.appendChild(btn); fig.appendChild(cap);
      grid.appendChild(fig);
    });
  }

  function setFilter(f) {
    filter = f;
    $$('.chip').forEach(function (c) { c.setAttribute('aria-pressed', c.getAttribute('data-filter') === f ? 'true' : 'false'); });
    renderGallery();
  }

  /* ---------- Lightbox ---------- */
  function openLightbox(i) {
    current = i;
    showCurrent();
    var dlg = $('#lightbox');
    if (dlg && typeof dlg.showModal === 'function' && !dlg.open) dlg.showModal();
  }
  function showCurrent() {
    var w = visible[current];
    if (!w) return;
    var img = $('#lb-img');
    img.src = BASE + 'img/' + w.f + '.webp';
    img.alt = w.t[lang];
    $('#lb-title').textContent = w.t[lang];
    $('#lb-meta').textContent = T[lang].cat[w.c] + (w.y ? ' · ' + w.y : '');
  }
  function step(d) {
    if (!visible.length) return;
    current = (current + d + visible.length) % visible.length;
    showCurrent();
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    $$('.chip').forEach(function (c) {
      c.addEventListener('click', function () { setFilter(c.getAttribute('data-filter')); });
    });
    var menuBtn = $('.menu-btn'), links = $('.nav-links');
    if (menuBtn && links) {
      menuBtn.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      $$('a', links).forEach(function (a) { a.addEventListener('click', function () { links.classList.remove('open'); }); });
    }
    /* Highlight the nav link of the section currently in view */
    var navLinks = $$('.nav-links a');
    var sections = navLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
    if ('IntersectionObserver' in window && sections.length) {
      var ratios = {};
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { ratios[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0; });
        var best = null, bestR = 0;
        sections.forEach(function (s) { if ((ratios[s.id] || 0) > bestR) { bestR = ratios[s.id]; best = s.id; } });
        navLinks.forEach(function (a) {
          if (best && a.getAttribute('href') === '#' + best) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      }, { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });
      sections.forEach(function (s) { io.observe(s); });
    }
    var dlg = $('#lightbox');
    if (dlg) {
      $('.lb-close', dlg).addEventListener('click', function () { dlg.close(); });
      $('.lb-prev', dlg).addEventListener('click', function () { step(-1); });
      $('.lb-next', dlg).addEventListener('click', function () { step(1); });
      dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
      dlg.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') step(document.documentElement.dir === 'rtl' ? -1 : 1);
        if (e.key === 'ArrowLeft') step(document.documentElement.dir === 'rtl' ? 1 : -1);
      });
    }
    /* Copy the email address; fall back to showing it when the clipboard is unavailable */
    var copyBtn = $('.copy-btn'), copyStatus = $('.copy-status');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var text = copyBtn.getAttribute('data-copy');
        var done = function (ok) {
          if (copyStatus) copyStatus.textContent = ok ? T[lang].c_copied : text;
          copyBtn.setAttribute('aria-pressed', 'true');
          setTimeout(function () { if (copyStatus) copyStatus.textContent = ''; copyBtn.removeAttribute('aria-pressed'); }, 2500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
        } else { done(false); }
      });
    }
    applyLang(lang);
  });
})();
