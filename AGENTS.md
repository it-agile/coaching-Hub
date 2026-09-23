# AGENTS.md

Hinweise für KI-Coding-Agents, die an diesem Repository arbeiten.

## Projekt

Statische Landingpage für das Agile-Coaching-Angebot von it-agile (Hamburg). Reines HTML/CSS/Vanilla-JS, kein Build-Prozess, keine Abhängigkeiten, kein `package.json` für die Seite selbst.

- `index.html` – Startseite
- `impressum.html`, `datenschutz.html` – rechtliche Seiten
- `404.html` – Fehlerseite
- `style.css`, `script.js` – Styling und Interaktivität
- `assets/` – Bilder und Logo
- `robots.txt`, `sitemap.xml`, `og-image.jpg` – SEO- und Social-Media-Metadaten

Die Seite wird über GitHub Pages aus `main` ausgeliefert (Custom Domain via `CNAME`, siehe [PR #1](https://github.com/it-agile/coaching-Hub/pull/1) für den aktuellen Stand).

## Kein Build-Tooling einführen

Bewusst kein Framework, Bundler oder Package-Manager für die Seite selbst. Kein `npm install`, kein Build-Schritt vor dem Deployment. Vorschläge, ein Framework einzuführen, bitte nicht umsetzen, sondern mit dem Team abstimmen.

## Codestil

Der bestehende Code nutzt bewusst:
- Self-closing Void-Elemente (`<meta ... />`, `<img ... />`)
- Inline-Styles an einzelnen Stellen

Das ist kein Fehler, sondern gewählter Stil – nicht "korrigieren". Die Lint-Konfiguration (`.htmlvalidate.json`) hat diese Regeln deshalb bewusst deaktiviert.

Sprache: Seitentexte und Commit-Messages sind auf Deutsch.

## Workflow

- `main` ist geschützt: Pull Requests sind verpflichtend, direkte Pushes sind blockiert.
- Kein Pflicht-Review vor dem Merge (bewusste Team-Entscheidung, Stand 2026-09).
- Branch-Namensschema: `feature/<kurzbeschreibung>`.
- Commit-Messages auf Deutsch, im Imperativ/Nominalstil (z. B. "CNAME für Subdomain hinzufügen").

## Vor dem Commit prüfen

HTML-Änderungen lokal gegen den Lint-Check prüfen, bevor gepusht wird:

```bash
npx --yes html-validate "*.html"
```

Läuft auch automatisch als GitHub-Actions-Workflow (`.github/workflows/html-lint.yml`) bei jedem Pull Request gegen `main`.

Lokale Vorschau ohne Build-Schritt:

```bash
python3 -m http.server 8000
```

## Bei Content-Änderungen mitdenken

- `sitemap.xml` und `robots.txt` bei neuen Seiten/URLs mitpflegen
- `og-image.jpg` und die zugehörigen Meta-Tags in `index.html` bei größeren Layout-/Branding-Änderungen prüfen
- Neue Bilder als `.webp` ablegen (siehe `assets/`), passend zu bestehenden Assets
