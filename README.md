# Coaching-Hub

Statische Landingpage für das Agile-Coaching-Angebot von [it-agile](https://www.it-agile.de) in Hamburg. Stellt Coaches, Leistungen und Kontaktmöglichkeiten vor.

## Struktur

- `index.html` – Startseite (Coaches, Angebot, Ablauf, Kontakt)
- `impressum.html`, `datenschutz.html` – rechtliche Seiten
- `404.html` – Fehlerseite
- `style.css`, `script.js` – Styling und Interaktivität (u. a. mobile Navigation, Coach-Auswahl)
- `assets/` – Bilder und Logo
- `robots.txt`, `sitemap.xml`, `og-image.jpg` – SEO- und Social-Media-Metadaten

Reines HTML/CSS/JavaScript ohne Build-Prozess oder Abhängigkeiten.

## Lokale Entwicklung

Die Seite kann direkt im Browser geöffnet werden (`index.html`) oder über einen einfachen lokalen Webserver:

```bash
python3 -m http.server 8000
```

Anschließend `http://localhost:8000` aufrufen.

## Deployment

Die Seite wird als statische Seite über GitHub Pages aus diesem Repository bereitgestellt.
