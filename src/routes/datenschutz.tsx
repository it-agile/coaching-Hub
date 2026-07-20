import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import itAgileLogo from "@/assets/it-agile-logo.svg";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — it-agile Coaching" },
      {
        name: "description",
        content:
          "Datenschutzerklärung des it-agile Coaching-Hub gemäß DSGVO Art. 13.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Datenschutzerklärung — it-agile Coaching" },
      {
        property: "og:description",
        content: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
      },
    ],
  }),
  component: DatenschutzPage,
});

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 rounded-md border border-dashed border-accent/40 bg-accent/5 p-4 text-sm leading-relaxed text-muted-foreground">
      <span className="mr-2 font-semibold uppercase tracking-widest text-accent">
        Platzhalter
      </span>
      {children}
    </p>
  );
}

function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 font-display text-xl font-semibold">
            <img src={itAgileLogo} alt="it-agile" className="h-8 w-auto" />
            <span className="text-muted-foreground">|</span>
            <span>Coaching-Hub</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Gemäß DSGVO Art. 13
        </div>
        <h1 className="font-display text-4xl md:text-5xl">Datenschutzerklärung</h1>
        <p className="mt-6 leading-relaxed text-secondary-foreground">
          Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend
          informieren wir Sie darüber, welche Daten wir im Rahmen des Besuchs dieser Website
          verarbeiten und welche Rechte Ihnen als betroffene Person zustehen.
        </p>

        <section className="mt-12 space-y-10 text-secondary-foreground">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              1. Verantwortlicher
            </h2>
            <p className="mt-3 leading-relaxed">
              Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:
            </p>
            <Placeholder>
              Hier bitte die vollständigen Kontaktdaten des Verantwortlichen einfügen (Firma,
              Anschrift, Telefon, E-Mail, ggf. gesetzliche Vertretung sowie – falls benannt –
              Kontaktdaten des/der Datenschutzbeauftragten).
            </Placeholder>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              2. Zwecke und Rechtsgrundlagen der Verarbeitung
            </h2>
            <p className="mt-3 leading-relaxed">
              Wir verarbeiten personenbezogene Daten ausschließlich auf Grundlage der geltenden
              Vorschriften der DSGVO und des BDSG zu den nachfolgend beschriebenen Zwecken.
            </p>
            <Placeholder>
              Hier bitte die konkreten Verarbeitungszwecke und die jeweilige Rechtsgrundlage
              (z. B. Art. 6 Abs. 1 lit. a, b, c oder f DSGVO) sowie – bei berechtigten Interessen –
              die abgewogenen Interessen ergänzen.
            </Placeholder>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              3. Hosting und Server-Logfiles
            </h2>
            <p className="mt-3 leading-relaxed">
              Beim Aufruf dieser Website werden durch den Hosting-Provider automatisch Informationen
              in sogenannten Server-Logfiles erfasst, die Ihr Browser übermittelt.
            </p>
            <Placeholder>
              Hier bitte den eingesetzten Hosting-Anbieter, den Serverstandort, die erfassten
              Logfile-Daten (z. B. IP-Adresse, Zeitpunkt, User-Agent, Referrer), Speicherdauer
              sowie ggf. bestehende Auftragsverarbeitungsverträge nennen.
            </Placeholder>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              4. Kontaktaufnahme per E-Mail und Kontaktformular
            </h2>
            <p className="mt-3 leading-relaxed">
              Bei einer Kontaktaufnahme mit uns per E-Mail oder über ein Kontaktformular werden die
              von Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfrage gespeichert.
            </p>
            <Placeholder>
              Hier bitte beschreiben, welche Daten über Kontaktformulare bzw. per E-Mail erhoben
              werden, zu welchem Zweck sie verarbeitet werden, wie lange sie gespeichert werden
              und an welche Empfänger sie ggf. weitergegeben werden.
            </Placeholder>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              5. Ihre Rechte als betroffene Person
            </h2>
            <p className="mt-3 leading-relaxed">
              Ihnen stehen nach der DSGVO insbesondere folgende Rechte zu: Auskunft (Art. 15),
              Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
              Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen die Verarbeitung (Art. 21).
              Darüber hinaus können Sie eine erteilte Einwilligung jederzeit mit Wirkung für die
              Zukunft widerrufen und sich bei einer Datenschutz-Aufsichtsbehörde beschweren.
            </p>
            <Placeholder>
              Hier bitte die konkrete Kontaktadresse für die Ausübung der Betroffenenrechte sowie
              die zuständige Aufsichtsbehörde (in der Regel der Hamburgische Beauftragte für
              Datenschutz und Informationsfreiheit) ergänzen.
            </Placeholder>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3 font-display text-base font-semibold text-foreground">
            <img src={itAgileLogo} alt="it-agile" className="h-8 w-auto" />
            <span className="text-muted-foreground">|</span>
            <span>Coaching-Hub</span>
          </div>
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
            <span>Willy-Brandt-Straße 1 · 20457 Hamburg · Agile Expertise seit 2005</span>
            <Link to="/impressum" className="transition-colors hover:text-foreground">
              Impressum
            </Link>
            <Link to="/datenschutz" className="transition-colors hover:text-foreground">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}