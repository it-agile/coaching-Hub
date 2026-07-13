import { createFileRoute, Link } from "@tanstack/react-router";
import { Waves, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — it-agile Coaching" },
      {
        name: "description",
        content:
          "Impressum und Pflichtangaben der it-agile GmbH, Willy-Brandt-Straße 1, 20457 Hamburg.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Impressum — it-agile Coaching" },
      {
        property: "og:description",
        content: "Impressum und Pflichtangaben der it-agile GmbH in Hamburg.",
      },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
            <span
              className="grid h-8 w-8 place-items-center rounded-md"
              style={{ background: "var(--gradient-copper)" }}
            >
              <Waves className="h-4 w-4 text-primary-foreground" />
            </span>
            it-agile Coaching
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
          Pflichtangaben
        </div>
        <h1 className="font-display text-4xl md:text-5xl">Impressum</h1>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold">
            Unsere Anschrift und Pflichthinweise
          </h2>
          <div className="mt-4 space-y-1 text-secondary-foreground">
            <p className="font-semibold">it-agile GmbH</p>
            <p>Willy-Brandt-Straße 1</p>
            <p>20457 Hamburg</p>
            <p className="pt-3">
              Telefon:{" "}
              <a href="tel:+494041358480" className="text-accent hover:underline">
                +49 40 41 358 48-0
              </a>
            </p>
            <p>
              Fax:{" "}
              <a href="tel:+4940413584829" className="text-accent hover:underline">
                +49 40 41 358 48-29
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@it-agile.de" className="text-accent hover:underline">
                info@it-agile.de
              </a>
            </p>
            <p>
              Internet:{" "}
              <a
                href="https://www.it-agile.de"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                www.it-agile.de
              </a>
            </p>
          </div>

          <dl className="mt-8 space-y-3 text-secondary-foreground">
            <div>
              <dt className="font-semibold text-foreground">
                Umsatzsteuer-Identifikationsnummer
              </dt>
              <dd>gemäß § 27 a Umsatzsteuergesetz: DE239483021</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Handelsregister</dt>
              <dd>Hamburg HRB 92261</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Geschäftsführung</dt>
              <dd>Sven Günther, Stefan Roock</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">
                Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV
              </dt>
              <dd>Sven Günther, Stefan Roock</dd>
            </div>
          </dl>
        </section>

        <section className="mt-12 space-y-8 text-secondary-foreground">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Haftung für Inhalte
            </h2>
            <p className="mt-3 leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Dienstanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Dienstanbieter sind jedoch nicht verpflichtet, die von ihnen
              übermittelten oder gespeicherten fremden Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              Verpflichtungen zur Entfernung oder Sperrung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab
              dem Zeitpunkt der Kenntnisnahme einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Haftung für Links
            </h2>
            <p className="mt-3 leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Urheberrecht</h2>
            <p className="mt-3 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
              gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Widerspruch Werbe-Mails
            </h2>
            <p className="mt-3 leading-relaxed">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
              wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
              rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa
              durch Spam-E-Mails, vor.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
            <span
              className="grid h-7 w-7 place-items-center rounded-md"
              style={{ background: "var(--gradient-copper)" }}
            >
              <Waves className="h-3.5 w-3.5 text-primary-foreground" />
            </span>
            it-agile Coaching
          </div>
          <div>Willy-Brandt-Straße 1 · 20457 Hamburg · Agile Expertise seit 2005</div>
        </div>
      </footer>
    </div>
  );
}