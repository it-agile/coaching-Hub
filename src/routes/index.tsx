import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Waves,
  ArrowRight,
  MapPin,
  Compass,
  Users,
  Target,
  TrendingUp,
  MessageCircle,
  Layers,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-speicherstadt.jpg";
import imgTeam from "@/assets/coaching-team.jpg";
import imgLeadership from "@/assets/coaching-leadership.jpg";
import coachStefan from "@/assets/coach-stefan.jpg";
import coachSven from "@/assets/coach-sven.jpg";
import coachAlexandra from "@/assets/coach-alexandra.jpg";
import coachAmelie from "@/assets/coach-amelie.jpg";
import coachUrs from "@/assets/coach-urs.jpg";
import coachClaudia from "@/assets/coach-claudia.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type Coach = {
  id: string;
  name: string;
  role: string;
  focus: string[];
  quote: string;
  bio: string;
  image: string;
};

const COACHES: Coach[] = [
  {
    id: "stefan",
    name: "Stefan Roock",
    role: "Mitgründer & Agile Coach",
    focus: ["Agile Transformation", "Product Ownership", "Scrum"],
    quote: "Agilität ist kein Prozess, sondern eine Haltung.",
    bio: "Begleitet seit 2005 Organisationen durch agile Transformationen. Co-Autor mehrerer Standardwerke zu Scrum und agiler Führung.",
    image: coachStefan,
  },
  {
    id: "sven",
    name: "Sven Günther",
    role: "Geschäftsführer & Leadership Coach",
    focus: ["Agile Leadership", "Management 3.0", "Skalierung"],
    quote: "Führung heißt: Kontext schaffen, nicht kontrollieren.",
    bio: "Coacht Führungskräfte und Managementteams großer Organisationen auf dem Weg zu wirksamer, agiler Führung.",
    image: coachSven,
  },
  {
    id: "alexandra",
    name: "Alexandra Koch",
    role: "Agile Coach",
    focus: ["Teamentwicklung", "Moderation", "Change-Begleitung"],
    quote: "Teams wachsen an echten Gesprächen – nicht an Meetings.",
    bio: "Begleitet Teams durch Veränderungsprozesse, gestaltet wirksame Workshops und entwickelt Zusammenarbeit, die trägt.",
    image: coachAlexandra,
  },
  {
    id: "amelie",
    name: "Amelie Baiter",
    role: "Agile Coach – Agile HR",
    focus: ["Agile HR", "People Ops", "Kulturwandel"],
    quote: "Neue Arbeitsweisen brauchen ein neues Personalverständnis.",
    bio: "Unterstützt Personalabteilungen dabei, ihre Rolle im agilen Kontext neu zu definieren und Selbstorganisation zu ermöglichen.",
    image: coachAmelie,
  },
  {
    id: "urs",
    name: "Urs Reupke",
    role: "Agile Coach & Kanban-Experte",
    focus: ["Kanban", "Flow", "Technische Exzellenz"],
    quote: "Sichtbarer Flow verändert Organisationen von innen.",
    bio: "Verbindet Prozessoptimierung mit handwerklicher Qualität und stellt teamübergreifende Lieferfähigkeit her.",
    image: coachUrs,
  },
  {
    id: "claudia",
    name: "Claudia Reitenbach",
    role: "Agile Coach & Organisationsentwicklerin",
    focus: ["Organisationsentwicklung", "Teamdynamik", "Konflikte"],
    quote: "Hinter jedem Prozessproblem steckt eine menschliche Dynamik.",
    bio: "Fokussiert auf die menschlichen Dynamiken in agilen Teams – von psychologischer Sicherheit bis Konfliktnavigation.",
    image: coachClaudia,
  },
];

const OFFERINGS = [
  {
    icon: Users,
    title: "High-Impact Team Coaching",
    description:
      "Direkte Begleitung eurer Teams im Alltag: Kommunikation, Motivation und Liefergeschwindigkeit nachhaltig steigern – nicht in Workshops, sondern in echter Arbeit.",
    tags: ["Teamdiagnose", "Retrospektiven", "Working Agreements"],
  },
  {
    icon: Compass,
    title: "Agile Leadership Coaching",
    description:
      "1:1- und Gruppen-Coaching für Führungskräfte nach dem Mutual-Learning-Ansatz: Selbstorganisation fördern und wirksame Entscheidungswege etablieren.",
    tags: ["Mutual Learning", "1:1 Coaching", "Führungsteams"],
  },
  {
    icon: TrendingUp,
    title: "Agile Transformation",
    description:
      "Strategische Begleitung eures Wandels: flexible Organisationsstrukturen schaffen, Kultur entwickeln und Veränderung tragfähig verankern.",
    tags: ["Change-Architektur", "Org-Design", "Learning Loops"],
  },
  {
    icon: Target,
    title: "OKR-Begleitung",
    description:
      "Einführung und laufende Begleitung von Objectives & Key Results – für transparente Ziele und echte Strategiefokussierung statt Zahlenfriedhof.",
    tags: ["Alignment", "Check-ins", "Strategie"],
  },
  {
    icon: Layers,
    title: "Scrum & Kanban Coaching",
    description:
      "Frameworks einführen ist leicht – sie wirksam machen nicht. Wir coachen eure Rollen und Systeme, bis Flow und Fokus wirklich entstehen.",
    tags: ["Scrum Master", "Flow-Metriken", "WIP-Limits"],
  },
  {
    icon: MessageCircle,
    title: "Teamübergreifende Lieferfähigkeit",
    description:
      "Wenn viele Teams liefern sollen, entscheiden Abhängigkeiten. Wir gestalten Skalierung mit Prinzipien statt Rezeptbuch.",
    tags: ["Scaling", "Team-Schnitt", "Abhängigkeiten"],
  },
];

const STEPS = [
  {
    step: "01",
    title: "Kennenlernen & Auftragsklärung",
    text: "Wir hören zu, stellen unbequeme Fragen und klären gemeinsam, wo Coaching wirklich wirkt – ehrlich, auch wenn die Antwort „kein Coaching“ lautet.",
  },
  {
    step: "02",
    title: "Coach-Matching",
    text: "Ihr bekommt den Coach, der zu eurem Kontext passt – nach Erfahrung, Schwerpunkt und Chemie. Kein anonymer Beraterpool.",
  },
  {
    step: "03",
    title: "Begleitung im Alltag",
    text: "Unsere Coaches arbeiten mit euren Teams an echten Themen: in Sprints, Meetings und Entscheidungen – vor Ort in Hamburg oder remote.",
  },
  {
    step: "04",
    title: "Wirksam machen & loslassen",
    text: "Erfolg heißt für uns: Ihr braucht uns nicht mehr. Wir bauen Fähigkeiten bei euch auf, messen Wirkung und ziehen uns bewusst zurück.",
  },
];

function Index() {
  const [activeCoach, setActiveCoach] = useState<Coach>(COACHES[0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold">
            <span
              className="grid h-8 w-8 place-items-center rounded-md"
              style={{ background: "var(--gradient-copper)" }}
            >
              <Waves className="h-4 w-4 text-primary-foreground" />
            </span>
            it-agile Coaching
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#coaches" className="transition-colors hover:text-foreground">
              Coaches
            </a>
            <a href="#angebot" className="transition-colors hover:text-foreground">
              Coaching-Angebot
            </a>
            <a href="#ablauf" className="transition-colors hover:text-foreground">
              So arbeiten wir
            </a>
            <a href="#hamburg" className="transition-colors hover:text-foreground">
              Hamburg
            </a>
          </nav>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Erstgespräch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Speicherstadt Hamburg bei Sonnenuntergang"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5" />
              Wirkungsvolles Coaching aus der Speicherstadt Hamburg
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-primary-foreground md:text-7xl">
              Menschen machen Agilität.
              <br />
              Unsere <span className="italic text-accent">Coaches</span> machen den Unterschied.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80 md:text-xl">
              Seit 2005 begleiten die Coaches von it-agile Teams, Führungskräfte und ganze
              Organisationen – pragmatisch, erfahren und konsequent an eurer Wertschöpfung
              ausgerichtet.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#coaches"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
              >
                Coaches kennenlernen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#angebot"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-md transition-colors hover:bg-primary-foreground/20"
              >
                Coaching-Angebot
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-primary-foreground/80">
              <div>
                <div className="font-display text-3xl font-semibold text-primary-foreground">20+</div>
                <div className="text-sm">Jahre agile Expertise</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-primary-foreground">30+</div>
                <div className="text-sm">fest angestellte Coaches</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-primary-foreground">500+</div>
                <div className="text-sm">begleitete Teams</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section id="coaches" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Unsere Coaches
          </div>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Kein Beraterpool. <span className="italic text-accent">Ein Team.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Alle it-agile Coaches sind fest angestellt, lernen voneinander und bringen jahrelange
            Praxis mit – vom Teamraum bis in die Geschäftsführung.
          </p>
        </div>

        {/* Featured coach */}
        <div
          className="mb-10 grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[2fr_3fr]"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="relative min-h-72">
            <img
              src={activeCoach.image}
              alt={`Portrait von ${activeCoach.name}`}
              width={768}
              height={960}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <Quote className="mb-4 h-8 w-8 text-accent" />
            <p className="font-display text-2xl font-medium italic leading-snug md:text-3xl">
              „{activeCoach.quote}“
            </p>
            <div className="mt-6">
              <div className="font-display text-xl font-semibold">{activeCoach.name}</div>
              <div className="text-sm text-accent">{activeCoach.role}</div>
            </div>
            <p className="mt-4 max-w-lg text-muted-foreground">{activeCoach.bio}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {activeCoach.focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Coach grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COACHES.map((coach) => (
            <button
              key={coach.id}
              type="button"
              onClick={() => {
                setActiveCoach(coach);
                document.getElementById("coaches")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`group relative overflow-hidden rounded-2xl border text-left transition-all hover:-translate-y-1 ${
                activeCoach.id === coach.id ? "border-accent" : "border-border"
              }`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={coach.image}
                alt={`Portrait von ${coach.name}`}
                width={768}
                height={960}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-6"
                style={{
                background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.95) 20%, rgba(0, 0, 0, 0.6) 60%, transparent)",
                }}
              >
                <div className="font-display text-xl font-semibold">{coach.name}</div>
                <div className="text-sm text-accent">{coach.role}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {coach.focus.slice(0, 2).map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-secondary/80 px-2.5 py-0.5 text-xs text-secondary-foreground backdrop-blur-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Offering */}
      <section id="angebot" className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Coaching-Angebot
            </div>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              Coaching, das im Alltag <span className="italic text-accent">wirkt</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Von einzelnen Teams bis zur ganzen Organisation – wir begleiten dort, wo Veränderung
              wirklich entsteht.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map((o) => (
              <div
                key={o.title}
                className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span
                  className="mb-5 grid h-11 w-11 place-items-center rounded-xl"
                  style={{ background: "var(--gradient-copper)" }}
                >
                  <o.icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <h3 className="font-display text-xl font-semibold">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {o.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="ablauf" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              So arbeiten wir
            </div>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              Vom Erstgespräch bis zum <span className="italic text-accent">Loslassen</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Unser Ziel ist nicht, möglichst lange zu bleiben – sondern euch möglichst schnell
              unabhängig zu machen.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <img
                src={imgTeam}
                alt="Agiles Team bei der Zusammenarbeit"
                width={1200}
                height={800}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-border bg-card p-7"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="font-display text-4xl font-semibold"
                  style={{
                    background: "var(--gradient-iridescent)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {s.step}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hamburg */}
      <section id="hamburg" className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-border" style={{ boxShadow: "var(--shadow-warm)" }}>
            <img
              src={imgLeadership}
              alt="Coaching-Gespräch in Hamburger Atmosphäre"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Hanseatisch geerdet
            </div>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              Klare Worte statt Buzzwords – <span className="italic text-accent">seit 2005</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              it-agile wurde 2005 in Hamburg gegründet und arbeitet im gesamten deutschsprachigen
              Raum. Hanseatisch heißt für uns: ehrlich beraten, verlässlich liefern und nur
              versprechen, was wir halten können.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Fest angestellte Coaches, die als Team voneinander lernen",
                "Pragmatismus vor Methoden-Dogma – Wertschöpfung zuerst",
                "Vor Ort in Hamburg (Willy-Brandt-Straße 1) oder remote",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                    style={{ background: "var(--gradient-copper)" }}
                  >
                    <ArrowRight className="h-3 w-3 text-primary-foreground" />
                  </span>
                  <span className="text-secondary-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl font-semibold text-primary-foreground md:text-5xl">
            Lernt den Coach kennen, der zu euch <span className="italic text-accent">passt</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Unverbindliches Erstgespräch – 45 Minuten, ehrliche Einschätzung, konkrete nächste
            Schritte.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@it-agile.de"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
              style={{ background: "var(--gradient-copper)" }}
            >
              Erstgespräch vereinbaren
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#coaches"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-8 py-4 text-sm font-semibold text-primary-foreground backdrop-blur-md transition-colors hover:bg-primary-foreground/20"
            >
              Zu den Coaches
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
