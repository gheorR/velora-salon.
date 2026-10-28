# Velora Premium — template de site pentru saloane și barber shop-uri

## Fișiere
- `index.html` — structura paginii
- `style.css` — design responsive, culori, animații
- `script.js` — meniu mobil, animații, validare formular și configurarea brandului

## Publicare pe GitHub + Cloudflare Pages
1. În repository-ul GitHub, încarcă aceste trei fișiere în rădăcina repository-ului (nu într-un subfolder).
2. Verifică să se numească exact `index.html`, `style.css`, `script.js`.
3. În Cloudflare Pages, conectează repository-ul.
4. Pentru HTML/CSS/JS simplu, Build command se lasă gol. Build output directory: `.` (sau rădăcina proiectului, dacă dashboard-ul o acceptă). Nu folosi `npx wrangler deploy` pentru acest flux Pages.
5. Deploy și deschide adresa `.pages.dev`.

## Important despre formular
În mod implicit, formularul doar validează datele și afișează un mesaj. Nu trimite rezervări nicăieri până nu conectezi un serviciu de formulare.
1. Creează un formular la https://formspree.io/ și copiază endpoint-ul primit.
2. În `script.js`, schimbă `formEndpoint: ""` în `formEndpoint: "https://formspree.io/f/IDUL_TAU"`.
3. Salvează și publică din nou site-ul.
Nu pune parole, chei secrete sau date sensibile în codul public.

## Personalizare pentru fiecare client
- În `script.js`, schimbă `businessName`.
- În `index.html`, schimbă descrierea, serviciile, prețurile, locația, programul și linkul Instagram.
- În `style.css`, schimbă imaginile Unsplash cu fotografii pe care clientul are dreptul să le folosească.
- Actualizează etichetele și serviciile din formular ca să corespundă salonului.
- Testează formularul pe telefon înainte de livrare.

Fonturile și imaginile demo folosesc servicii externe și necesită internet.


## Programări prin WhatsApp
Formularul deschide WhatsApp cu datele completate și mesajul pregătit pentru numărul configurat în `script.js`. Clientul trebuie să apese **Trimite** în WhatsApp; site-ul nu expediază mesajul în locul lui. Numărul este configurat în `SITE_CONFIG.whatsappNumber` și trebuie scris cu prefixul țării, fără `+` sau spații.
