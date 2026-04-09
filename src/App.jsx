import { useState, useRef, useEffect } from "react";

const BRAND_LOGO_SRC = "/Logo%20Thibault.png";
const BRAND_DISPLAY_NAME = ".Thibault Deglane";

// ─── SYSTEM PROMPT ────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are TiBot — the AI agent of Thibault Deglane, a senior strategic designer based in the Paris region with 23 years of experience across advertising agencies, digital product studios, and SaaS building.

Your role: help visitors of tdeglane.com understand who Thibault is, how he thinks, what he has built, and whether he could be the right person for their context. You represent him honestly — not as a sales pitch, but as a sharp, direct, intellectually engaged conversation partner.

---

## POSITIONING

Core statement: "From organizational challenge to working solution — end to end."
Differentiator: "23 years of strategic design practice, now AI-augmented."

Thibault is not a classic designer who delivers mockups and hands off to developers. He identifies organizational and strategic problems, designs the solution, and produces it — from diagnosis to deployed product.

---

## CAREER TIMELINE

2024–2026 — Co-founder, Niels Agency. Built AskNiels SaaS. Strategic lead, product owner, UX/UI, vibe coder.
2014–2024 — Design Manager & Lead Experience Designer, Emakina / EPAM Systems. Clients: Nike x FFF, Pierre Hardy, Boucheron, Olympique de Marseille, Célio, Micromania.
2012–2014 — Freelance: Art Director, Design Manager, Lead Experience Designer.
2008–2012 — Design Lead, TBWA/Pointcarre.
2004–2008 — Head of Creative Studio, Newsport.
Earlier: Founded a digital agency. Co-created one of the first Design Festivals in France.

---

## SKILLS

Hard: Systems thinking, Research & synthesis, Information architecture, Strategic framing, Prototyping & communication, AI as a design lever.
Tools: Figma, Framer, Maze, Cursor (vibe coding), n8n (agentic workflows).
Soft: Radical curiosity, Structured ambiguity, Collaborative leadership, Storytelling, Constructive friction.

---

## PROJECTS

### AskNiels (2024–2026) — AI · UX · UI · React
"Building the operating system of a methodology."
Problem: The Niels methodology had no home. Coaches had knowledge, not structure. Every project started blank.
Solution: Multi-tenant SaaS live in production. Plan Builder (drag-and-drop canvas of methodological activities). Context-aware AI assistant embedded in the workspace. Teams self-onboard without a coach.
Learnings: Full freedom created paralysis — templates became essential. Progressive activity discovery by phase replaced full catalogue view. Building the AI forced formalisation of tacit knowledge.
Results: −54% time to delivery, 57 activities, 6 phases, 97 Lighthouse score.
Stack: React/Vite/TypeScript, Supabase, Deno Edge Functions, Mistral + Claude, Cursor.
URL: https://www.tdeglane.com/projects/askniels-project
⚠️ IMPORTANT: Never use AskNiels as a reference case when discussing 
methodology or problem-solving approaches with visitors. AskNiels is 
Thibault's own product — citing it as a use case in a methodological 
context conflates his role as creator with his role as practitioner. 
When illustrating how Thibault thinks, use only client projects: 
Nike x FFF, Boucheron, Olympique de Marseille, Pierre Hardy, 
Célio, Micromania.

### Nike x FFF (2023) — UI/UX
"Spreading football fever in France."
First direct digital B2B platform between a sporting brand and amateur clubs. Custom outfit configuration tool. 4-year engagement. Post-COVID: design decisions fed by customer insights, not assumptions.
Results: +40% direct orders, 3x faster kit config, 12,000+ clubs onboarded, 4.2/5 satisfaction.
URL: https://www.tdeglane.com/projects/nikefff

### Boucheron Vendorama (2023) — Strategic Design / Phygital
"Digitizing the 160th anniversary of the luxury house."
Three interconnected digital touchpoints for the Monnaie de Paris exhibition, in 2 months: AR smartphone app (guided by Wladimir, Boucheron's cat), interactive multi-touch table, three interactive books. Constraint: nothing could feel like a tech demo.
Philosophy: Phygital done right is a decision about where human attention is most alive.
Results: 16 days sold out, 10,000+ visitors, #1 luxury brand activation of the year.
URL: https://www.tdeglane.com/projects/boucheron-vendorama

### Olympique de Marseille (2022–2023) — Strategic Design
"A legendary club in full digital transformation."
Brief: stop selling tickets, start building OM Nation — a 24/7 fan ecosystem. Redesigned website + mobile app (live predictions, polls, gamification, OM Prime loyalty). Full omnichannel: stadium, shop, partners.
Key insight: The hardest shift in sports digital isn't technical — it's moving from episodic to continuous fan relationship.
Results: 24/7 engagement, 3 touchpoints unified, +45% app engagement, +60% hospitality conversion.
URL: https://www.tdeglane.com/projects/olympique-de-marseille

### Pierre Hardy (2018) — UI/UX
"Creating an experience in the image of a great name."
Mobile-first platform, brand content and commerce coexisting without compromise. Co-design process from day one. Atomic design for pixel-perfect execution. 3 months, on time, on budget.
Results: +65% online revenue in 6 months, +38% returning customers, 2.4x session duration, −30% checkout drop-off.
URL: https://www.tdeglane.com/projects/pierrehardy

### Célio (2022) — UI/UX / Omnichannel
"One brand, two touchpoints, zero friction."
E-commerce at 5% of revenue vs. 15% target. Overhauled e-commerce platform + in-store seller tablet (real-time stock across 550 stores, customer history, omnichannel checkout on shop floor).
Key insight: In a showrooming model, the salesperson is the conversion layer.
Results: 550 stores unified, 85–90% reservation-to-store conversion, +3x click & collect, 15% target unlocked.
URL: https://www.tdeglane.com/projects/celio

### Micromania-Zing (2020) — UI/UX
"When video games meet pop culture."
Two brands, two audiences, one platform. 8 sprints over 7 months. Two thirds of visits were web-to-store — platform designed around the full decision journey, not cart conversion. 4,000+ catalogue references.
Results: 140+ screens, 430 stores unified, 4,000+ references integrated.
URL: https://www.tdeglane.com/projects/micromania

---

## NAVIGATION LINKS (use in actions)

- Portfolio home: https://www.tdeglane.com
- About page: https://www.tdeglane.com/about
- CV English: https://drive.google.com/file/d/1waRu0E8tjhUK10XP7rsa2K_valTy-U4T/view?usp=share_link
- CV French: https://drive.google.com/file/d/1wZinQ0tr2SBp3_f_BWMW7kXpC6rZFagD/view?usp=share_link

---

## WHAT DRIVES HIM / WHAT DOESN'T

Thrives in: discovery, challenge, transformation, ambiguous briefs needing strategic framing, innovation-open environments.
Does not thrive in: monotony, pure execution roles, rigid structures where design has no strategic seat.

---

## WHAT HE IS LOOKING FOR

Senior salaried position — agency, startup, scale-up, or enterprise digital team. Paris region. Occasional freelance possible. Not a pure execution role.

---

## LANGUAGE INSTRUCTION — CRITICAL

Each message starts with either [LANGUAGE: English] or [LANGUAGE: Français].
- [LANGUAGE: English] → respond exclusively in English
- [LANGUAGE: Français] → respond exclusively in French
Never mix languages. Maintain selected language even if the user writes in the other one.

---

## RESPONSE FORMAT — CRITICAL

You MUST always respond with a valid JSON object and nothing else. No markdown, no preamble, no explanation outside the JSON.

Format:
{
  "message": "Your response text here. Can include line breaks with \\n.",
  "actions": []
}

The "actions" array is optional but you should include it when relevant. Each action is one of:

1. Link to a project page:
{ "type": "link", "label": "→ See AskNiels", "url": "https://www.tdeglane.com/projects/askniels-project" }

2. Link to about page:
{ "type": "link", "label": "→ About Thibault", "url": "https://www.tdeglane.com/about" }

3. CV download:
{ "type": "link", "label": "→ Download CV (EN)", "url": "https://drive.google.com/file/d/1waRu0E8tjhUK10XP7rsa2K_valTy-U4T/view?usp=share_link" }
{ "type": "link", "label": "→ Télécharger le CV (FR)", "url": "https://drive.google.com/file/d/1wZinQ0tr2SBp3_f_BWMW7kXpC6rZFagD/view?usp=share_link" }

4. Contact form (opens inline form in the interface):
{ "type": "contact", "label": "→ Send Thibault a message" }
or in French:
{ "type": "contact", "label": "→ Envoyer un message à Thibault" }

5. Portfolio home:
{ "type": "link", "label": "→ View portfolio", "url": "https://www.tdeglane.com" }

6. Project card (expandable visual card):
{
  "type": "project_card",
  "slug": "askniels",
  "title": "AskNiels",
  "tagline": "Building the operating system of a methodology",
  "category": "AI · UX · UI · React",
  "metrics": ["−54% time to delivery", "57 activities", "97 Lighthouse"],
  "problem": "The Niels methodology had no home. Every project started with the same blank page.",
  "solution": "A multi-tenant SaaS with a drag-and-drop Plan Builder and a context-aware AI assistant embedded in the workspace.",
  "url": "https://www.tdeglane.com/projects/askniels-project"
}

PROJECT CARD SLUGS AND IMAGES:
- askniels → /projects/askniels.jpg
- nike-fff → /projects/nike-fff.jpg
- boucheron → /projects/boucheron.jpg
- olympique-de-marseille → /projects/olympique-de-marseille.jpg
- pierre-hardy → /projects/pierre-hardy.jpg
- celio → /projects/celio.jpg
- micromania → /projects/micromania.jpg

PROJECT CARD REFERENCE DATA (use exactly these fields/values):

ASKNIELS:
slug: askniels, title: AskNiels
tagline: Building the operating system of a methodology
category: AI · UX · UI · React
metrics: ["−54% time to delivery", "57 structured activities", "97 Lighthouse score"]
problem: The Niels methodology had no home. Coaches had knowledge but not structure. Every project started with the same blank page.
solution: A multi-tenant SaaS live in production. Plan Builder drag-and-drop canvas + context-aware AI assistant embedded in the workspace. Teams self-onboard without a coach.
url: https://www.tdeglane.com/projects/askniels-project

NIKE x FFF:
slug: nike-fff, title: Nike x FFF
tagline: Spreading football fever in France
category: UI/UX
metrics: ["+40% direct orders", "12,000+ clubs onboarded", "4.2/5 satisfaction"]
problem: FFF wanted to give amateur clubs direct access to Nike equipment — moving from a fragmented paper-based process to a first-of-its-kind direct digital B2B platform.
solution: A ready-to-use B2B platform with custom outfit configuration tool. Post-COVID redesign fed entirely by customer insights, not assumptions.
url: https://www.tdeglane.com/projects/nikefff

BOUCHERON:
slug: boucheron, title: Boucheron Vendorama
tagline: Digitizing the 160th anniversary of the luxury house
category: Strategic Design · Phygital
metrics: ["16 days sold out", "10,000+ visitors", "#1 luxury activation of the year"]
problem: Making 160 years of Boucheron heritage visceral for an audience that had never set foot inside a jewellery house.
solution: Three interconnected digital touchpoints in 2 months: AR app guided by Wladimir (Boucheron's cat), interactive multi-touch table, three interactive books. Nothing could feel like a tech demo.
url: https://www.tdeglane.com/projects/boucheron-vendorama

OLYMPIQUE DE MARSEILLE:
slug: olympique-de-marseille, title: Olympique de Marseille
tagline: A legendary club in full digital transformation
category: Strategic Design
metrics: ["+45% app engagement", "+60% hospitality conversion", "3 touchpoints unified"]
problem: OM had one of the most passionate fan bases in Europe but no digital infrastructure to turn that passion into a relationship outside the stadium.
solution: Redesigned website + mobile app with live predictions, polls, gamification, OM Prime loyalty. Full omnichannel: stadium, shop, partners unified.
url: https://www.tdeglane.com/projects/olympique-de-marseille

PIERRE HARDY:
slug: pierre-hardy, title: Pierre Hardy
tagline: Creating an experience in the image of a great name
category: UI/UX
metrics: ["+65% online revenue", "+38% returning customers", "−30% checkout drop-off"]
problem: Luxury doesn't translate to digital by default. The brief: brand content and commerce coexisting without compromise, mobile first.
solution: Co-design process with client teams from day one. Atomic design for pixel-perfect execution. 3 months, on time, on budget.
url: https://www.tdeglane.com/projects/pierrehardy

CELIO:
slug: celio, title: Célio
tagline: One brand, two touchpoints, zero friction
category: UI/UX · Omnichannel
metrics: ["550 stores unified", "85–90% reservation-to-store", "+3x click & collect"]
problem: E-commerce at 5% of revenue vs. 15% target. Online and in-store operating in parallel, not together.
solution: Overhauled e-commerce platform + in-store seller tablet with real-time stock across 550 stores, customer history, omnichannel checkout on the shop floor.
url: https://www.tdeglane.com/projects/celio

MICROMANIA:
slug: micromania, title: Micromania-Zing
tagline: When video games meet pop culture
category: UI/UX
metrics: ["140+ screens", "430 stores unified", "4,000+ catalogue references"]
problem: Two brands, two audiences, one platform. Two thirds of visits were web-to-store — a conventional e-commerce approach would have solved the wrong problem.
solution: 8 design sprints over 7 months. Platform designed around the full decision journey, not cart conversion. Navigation handling 4,000+ references across radically different browsing behaviours.
url: https://www.tdeglane.com/projects/micromania

WHEN TO ADD ACTIONS — use good judgment:
- After discussing a specific project → add a link to that project
- When discussing a specific project in detail → add a project_card action for that project (in addition to or instead of a simple link)
- After discussing Thibault's background, career, or skills → add About + CV links
- When a visitor seems interested, is a recruiter, or mentions hiring → add contact action
- At the end of a satisfying exchange → offer contact
- Never add more than 3 actions per response
- Never add more than one project_card per response
- Never add actions that are not relevant to what was just discussed

BEHAVIOUR:
- When a [METHODOLOGICAL CONTEXT FROM NIELS KNOWLEDGE BASE] block 
  is present in the message, USE IT to answer the question.
  This context comes from Thibault's own design methodology — 
  explaining it IS demonstrating his thinking and approach.
  Never refuse to discuss methodology on the grounds that it's 
  "not about Thibault's work" — it IS his work and his method.
- When using methodological context, present it naturally as 
  Thibault's way of working. Never mention "Niels", "AskNiels", 
  or "knowledge base" — just explain the method as his approach.
  Then invite the visitor to explore further with Thibault directly.
- Direct, warm, intellectually sharp — reflect Thibault's personality
- Never salesy — honest about strengths and limits
- Connect visitor context to Thibault's work when relevant
- Ask one smart qualifying question per exchange
- Never invent projects or capabilities not listed above
- 3–5 sentences per reply unless more detail is requested`;

// ─── CONTENT (EN / FR) ───────────────────────────────────────────────────────

const CONTENT = {
  en: {
    agentSub: "AI Agent",
    backLink: "Portfolio",
    greeting: {
      message: "Most portfolios make you do the work. This one talks back.\n\nAsk me anything about Thibault, his projects, or whether he could be the right fit for what you're building.",
      actions: [],
    },
    placeholder: "Ask something about Thibault...",
    you: "You",
    suggestions: [
      "What makes Thibault different from other senior designers?",
      "Tell me about the AskNiels project",
      "What kind of role is Thibault looking for?",
      "What has he done for large brands?",
    ],
    langInstruction: "[LANGUAGE: English]",
    contactTitle: "Send Thibault a message",
    contactNamePlaceholder: "Your name",
    contactMsgPlaceholder: "Your message...",
    contactSend: "Send",
    contactSending: "Sending...",
    contactSuccess: "Message sent. Thibault will get back to you soon.",
    contactError: "Something went wrong. Try again.",
    contactCancel: "Cancel",
  },
  fr: {
    agentSub: "Agent IA",
    backLink: "Portfolio",
    greeting: {
      message: "La plupart des portfolios vous font faire le travail. Celui-ci vous répond.\n\nPosez-moi n'importe quelle question sur Thibault, ses projets, ou ce qu'il pourrait apporter à ce que vous construisez.",
      actions: [],
    },
    placeholder: "Posez une question sur Thibault...",
    you: "Vous",
    suggestions: [
      "Qu'est-ce qui distingue Thibault des autres designers senior ?",
      "Parlez-moi du projet AskNiels",
      "Quel type de poste recherche-t-il ?",
      "Qu'a-t-il fait pour de grandes marques ?",
    ],
    langInstruction: "[LANGUAGE: Français]",
    contactTitle: "Envoyer un message à Thibault",
    contactNamePlaceholder: "Votre nom",
    contactMsgPlaceholder: "Votre message...",
    contactSend: "Envoyer",
    contactSending: "Envoi...",
    contactSuccess: "Message envoyé. Thibault vous répondra rapidement.",
    contactError: "Une erreur est survenue. Réessayez.",
    contactCancel: "Annuler",
  },
};

const PANEL_PROJECTS = [
  {
    slug: "askniels",
    title: "AskNiels",
    category: "AI · UX · UI · React",
    question_en: "Tell me about the AskNiels project",
    question_fr: "Parle-moi du projet AskNiels",
    url: "https://www.tdeglane.com/projects/askniels-project",
  },
  {
    slug: "nike-fff",
    title: "Nike x FFF",
    category: "UI/UX",
    question_en: "Tell me about the Nike x FFF project",
    question_fr: "Parle-moi du projet Nike x FFF",
    url: "https://www.tdeglane.com/projects/nikefff",
  },
  {
    slug: "boucheron",
    title: "Boucheron Vendorama",
    category: "Strategic Design · Phygital",
    question_en: "Tell me about the Boucheron Vendorama project",
    question_fr: "Parle-moi du projet Boucheron Vendorama",
    url: "https://www.tdeglane.com/projects/boucheron-vendorama",
  },
  {
    slug: "olympique-de-marseille",
    title: "Olympique de Marseille",
    category: "Strategic Design",
    question_en: "Tell me about the Olympique de Marseille project",
    question_fr: "Parle-moi du projet Olympique de Marseille",
    url: "https://www.tdeglane.com/projects/olympique-de-marseille",
  },
  {
    slug: "pierre-hardy",
    title: "Pierre Hardy",
    category: "UI/UX",
    question_en: "Tell me about the Pierre Hardy project",
    question_fr: "Parle-moi du projet Pierre Hardy",
    url: "https://www.tdeglane.com/projects/pierrehardy",
  },
  {
    slug: "celio",
    title: "Célio",
    category: "UI/UX · Omnichannel",
    question_en: "Tell me about the Célio project",
    question_fr: "Parle-moi du projet Célio",
    url: "https://www.tdeglane.com/projects/celio",
  },
  {
    slug: "micromania",
    title: "Micromania-Zing",
    category: "UI/UX",
    question_en: "Tell me about the Micromania project",
    question_fr: "Parle-moi du projet Micromania",
    url: "https://www.tdeglane.com/projects/micromania",
  },
];

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────

function ProjectCard({ action, lang }) {
  const [expanded, setExpanded] = useState(false);
  const labels = lang === "fr"
    ? { problem: "Problème", solution: "Solution", view: "Voir le projet →" }
    : { problem: "Problem", solution: "Solution", view: "View project →" };

  return (
    <div className="project-card">
      <img
        className="project-card-image"
        src={`/projects/${action.slug}.jpg`}
        alt={action.title}
      />
      <div className="project-card-body">
        <div className="project-card-category">{action.category}</div>
        <div className="project-card-title">{action.title}</div>
        <div className="project-card-tagline">{action.tagline}</div>

        <div className="project-card-separator" />

        <div className="project-card-metrics">
          {(action.metrics || []).slice(0, 3).map((metric, i) => (
            <span key={i} className="project-card-metric">{metric}</span>
          ))}
        </div>

        <button className="project-card-toggle" onClick={() => setExpanded((v) => !v)}>
          {labels.problem} / {labels.solution}
        </button>

        {expanded && (
          <div className="project-card-details">
            <div className="project-card-label">{labels.problem}</div>
            <div className="project-card-text">{action.problem}</div>
            <div className="project-card-label">{labels.solution}</div>
            <div className="project-card-text">{action.solution}</div>
          </div>
        )}

        <button
          className="project-card-cta"
          onClick={() => window.open(action.url, "_blank", "noopener")}
        >
          {labels.view}
        </button>
      </div>
    </div>
  );
}

function AnimatedText({ text, lang, onDone }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);

  const skip = () => {
    if (done) return;
    clearInterval(intervalRef.current);
    setDisplayed(text);
    setDone(true);
    onDone?.();
  };

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    intervalRef.current = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(intervalRef.current);
        onDone?.();
      }
    }, 12);
    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <span
      className={`animated-text ${done ? "done" : "playing"}`}
      onClick={skip}
      style={{ cursor: done ? "default" : "pointer" }}
    >
      {displayed}
      {!done && (
        <>
          <span className="cursor-blink">▋</span>
          <span className="skip-hint">{lang === "fr" ? "cliquer pour passer" : "click to skip"}</span>
        </>
      )}
    </span>
  );
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

function ContactForm({ lang, onClose, onSuccess }) {
  const c = CONTENT[lang];
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim() || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim(), lang }),
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => { onSuccess(); onClose(); }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-form">
      <div className="contact-title">{c.contactTitle}</div>
      {status === "success" ? (
        <div className="contact-success">{c.contactSuccess}</div>
      ) : (
        <>
          <input
            className="contact-input"
            placeholder={c.contactNamePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "sending"}
          />
          <textarea
            className="contact-textarea"
            placeholder={c.contactMsgPlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === "sending"}
            rows={4}
          />
          {status === "error" && (
            <div className="contact-error">{c.contactError}</div>
          )}
          <div className="contact-actions">
            <button className="contact-cancel" onClick={onClose} disabled={status === "sending"}>
              {c.contactCancel}
            </button>
            <button
              className="contact-send"
              onClick={handleSubmit}
              disabled={!name.trim() || !message.trim() || status === "sending"}
            >
              {status === "sending" ? c.contactSending : c.contactSend}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function TiBot() {
  const [lang, setLang] = useState("en");
  const [sessions, setSessions] = useState({
    en: [{ role: "assistant", parsed: CONTENT.en.greeting, id: 0 }],
    fr: [{ role: "assistant", parsed: CONTENT.fr.greeting, id: 1 }],
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState({ en: true, fr: true });
  const [contactOpen, setContactOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const animatedIds = useRef(new Set());
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const c = CONTENT[lang];
  const messages = sessions[lang];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, lang]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return undefined;
    document.body.style.overflow = panelOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [panelOpen]);

  const switchLang = (newLang) => {
    if (newLang === lang) return;
    setContactOpen(false);
    setLang(newLang);
    setInput("");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const parseResponse = (raw) => {
    try {
      const clean = raw.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
      return JSON.parse(clean);
    } catch {
      return { message: raw, actions: [] };
    }
  };

  const isMethodological = (text) => {
    const keywords = [
      "method", "niels", "approach", "framework", "process",
      "strateg", "workshop", "facilit", "design thinking",
      "méthode", "approche", "démarche", "atelier", "stratégie",
      "comment", "how", "phase", "outil", "tool", "activit",
      "demonstrate", "show me", "exemple", "example", "montrer",
      "experience", "expérience", "emotion", "emotional", "map",
      "score", "insight", "user", "utilisateur", "parcours",
      "journey", "friction", "research", "recherche", "test",
      "prototype", "concept", "diagnos", "audit",
      "carte", "canvas", "modèle", "model", "sprint", "iteration",
    ];
    return keywords.some((k) => text.toLowerCase().includes(k));
  };

  const sendMessage = async (text) => {
    const content = text || input.trim();
    if (!content || loading) return;

    setInput("");
    setContactOpen(false);
    setShowSuggestions((prev) => ({ ...prev, [lang]: false }));

    const userMsg = { role: "user", parsed: { message: content, actions: [] }, id: Date.now() + 1 };
    const newMessages = [...messages, userMsg];
    setSessions((prev) => ({ ...prev, [lang]: newMessages }));
    setLoading(true);

    let ragContext = "";
    if (isMethodological(content)) {
      try {
        const ragRes = await fetch("/api/rag", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: content }),
        });
        const ragData = await ragRes.json();
        if (ragData.chunks && ragData.chunks.length > 0) {
          ragContext = `[METHODOLOGICAL CONTEXT FROM NIELS KNOWLEDGE BASE]
${ragData.chunks.map((c) => c.content).join("\n\n---\n\n")}
[END CONTEXT]

`;
        }
      } catch {
        // RAG échoue silencieusement — ne bloque pas l'envoi
      }
    }
    
    const apiMessages = newMessages.map((m, i) => ({
      role: m.role,
      content: m.role === "user" && i === newMessages.length - 1
        ? `${c.langInstruction}\n\n${ragContext}${m.parsed.message}`
        : m.parsed.message,
    }));

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: apiMessages,
        }),
      });

      const data = await response.json();
      const raw = data.content?.[0]?.text || '{"message":"Something went wrong.","actions":[]}';
      const parsed = parseResponse(raw);

      setSessions((prev) => ({
        ...prev,
        [lang]: [...newMessages, { role: "assistant", parsed, id: Date.now() }],
      }));
    } catch {
      setSessions((prev) => ({
        ...prev,
        [lang]: [...newMessages, { role: "assistant", parsed: { message: "Connection issue. Please try again.", actions: [] }, id: Date.now() }],
      }));
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleAction = (action) => {
    if (action.type === "link") {
      window.open(action.url, "_blank", "noopener");
    } else if (action.type === "contact") {
      setContactOpen(true);
    }
  };

  const handlePanelProject = (project) => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
      setPanelOpen(false);
    }
    sendMessage(lang === "fr" ? project.question_fr : project.question_en);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0f0e0d; --surface: #161616; --surface-2: #1e1e1e;
          --border: rgba(255,255,255,0.07); --border-hover: rgba(255,255,255,0.14);
          --text: #f0ede8; --text-muted: rgba(240,237,232,0.45);
          --accent: #c8b89a; --accent-dim: rgba(200,184,154,0.12);
          --green: #4caf7d; --red: #e05c5c; --radius: 4px; --radius-full: 9999px;
        }
        html, body { height: 100%; }
        body { background: var(--bg); background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E"); background-size: 256px 256px; color: var(--text); font-family: 'Poppins', sans-serif; font-weight: 300; font-size: 15px; line-height: 1.65; -webkit-font-smoothing: antialiased; }
        #root { height: 100%; display: flex; flex-direction: column; }
        .app { display: flex; flex-direction: column; height: 100%; max-width: 1120px; margin: 0 auto; width: 100%; padding: 0 20px; }
        .main-layout { display: flex; flex: 1; min-height: 0; justify-content: center; gap: 0; }
        .main-layout.panel-open { gap: 20px; }
        .conversation-column { flex: 1; min-width: 0; max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; }
        .main-layout.panel-open .conversation-column { margin: 0; }

        /* HEADER */
        .header { display: flex; align-items: center; justify-content: space-between; padding: 28px 0 24px; border-bottom: 1px solid var(--border); flex-shrink: 0; gap: 12px; }
        .header-left { display: flex; align-items: center; gap: 4px; }
        .header-left-text { line-height: 18px; }
        .avatar { width: 48px; height: 48px; border-radius: 50%; background: var(--surface-2); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; padding: 5px; }
        .avatar img { width: 100%; height: 100%; object-fit: contain; display: block; }
        .header-title { font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 500; color: var(--text); letter-spacing: -0.01em; }
        .header-sub { font-size: 11px; color: var(--text-muted); margin-top: 1px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; }
        .header-right { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
        .lang-toggle { display: flex; align-items: center; background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-full); overflow: hidden; }
        .lang-btn { background: transparent; border: none; color: var(--text-muted); font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; padding: 6px 10px; cursor: pointer; transition: all 0.15s; line-height: 1; border-radius: 9999px; }
        .lang-btn.active { background: rgba(200, 184, 154, 1); color: #0e0e0e; }
        .lang-btn:not(.active):hover { color: var(--text); background: rgba(255,255,255,0.04); }
        .header-link { font-size: 12px; color: var(--accent); text-decoration: none; letter-spacing: 0.04em; font-weight: 500; border: 1px solid rgba(200,184,154,0.4); padding: 6px 16px; border-radius: 9999px; transition: all 0.2s; white-space: nowrap; }
        .header-link:hover { background: var(--accent-dim); border-color: var(--accent); }
        .explore-btn { background: transparent; border: 1px solid rgba(200,184,154,0.4); color: var(--accent); font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 0.04em; padding: 6px 16px; border-radius: 9999px; transition: all 0.2s; cursor: pointer; white-space: nowrap; }
        .explore-btn:hover { background: var(--accent-dim); border-color: var(--accent); }
        .explore-btn.open { border-color: var(--accent); }

        /* SIDE PANEL */
        .side-panel { width: 0; overflow: hidden; transition: width 0.3s ease; flex-shrink: 0; background: var(--surface); border-left: 1px solid transparent; pointer-events: none; }
        .side-panel.open { width: 360px; border-left-color: var(--border); }
        .side-panel.open { pointer-events: auto; }
        .side-panel-content { width: 360px; height: 100%; display: flex; flex-direction: column; }
        .side-panel-header { padding: 20px 20px 16px; border-bottom: 1px solid var(--border); }
        .side-panel-title { font-size: 14px; font-weight: 500; color: var(--text); }
        .side-panel-subtitle { margin-top: 4px; font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500; }
        .side-panel-top-actions { display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap; }
        .side-panel-mini-btn { background: transparent; border: 1px solid var(--border); color: var(--text-muted); font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 500; padding: 5px 12px; border-radius: 9999px; cursor: pointer; transition: all 0.2s; }
        .side-panel-mini-btn:hover { color: var(--text); border-color: var(--border-hover); }
        .side-panel-cv-links { display: flex; gap: 16px; margin-top: 10px; }
        .side-panel-cv-link { font-size: 11px; color: var(--accent); text-decoration: none; }
        .side-panel-cv-link:hover { text-decoration: underline; }
        .side-panel-projects { padding: 16px 20px; overflow-y: auto; flex: 1; }
        .side-panel-section-label { font-size: 10px; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.08em; font-weight: 500; margin-bottom: 10px; }
        .panel-project-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border); cursor: pointer; transition: all 0.15s; }
        .panel-project-item:last-child { border-bottom: none; }
        .panel-project-item:hover .panel-project-title { color: var(--accent); }
        .panel-project-item:hover .panel-project-arrow { color: var(--accent); transform: translateX(3px); }
        .panel-project-thumb { width: 48px; height: 36px; object-fit: cover; border-radius: 4px; flex-shrink: 0; opacity: 0.85; }
        .panel-project-info { min-width: 0; }
        .panel-project-title { font-size: 13px; font-weight: 400; color: var(--text); transition: color 0.15s; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .panel-project-category { font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; margin-top: 2px; font-weight: 500; }
        .panel-project-arrow { margin-left: auto; color: var(--text-muted); font-size: 12px; transition: all 0.15s; flex-shrink: 0; }
        .side-panel-footer { padding: 16px 20px; border-top: 1px solid var(--border); }
        .side-panel-contact-btn { width: 100%; background: var(--accent); color: #0e0e0e; border: none; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500; padding: 10px; border-radius: 9999px; cursor: pointer; transition: opacity 0.2s; }
        .side-panel-contact-btn:hover { opacity: 0.85; }
        .mobile-panel-overlay { display: none; }

        /* MESSAGES */
        .messages { flex: 1; overflow-y: auto; padding: 32px 0; display: flex; flex-direction: column; gap: 28px; scrollbar-width: thin; scrollbar-color: var(--border) transparent; }
        .messages::-webkit-scrollbar { width: 4px; }
        .messages::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
        .msg { display: flex; gap: 14px; animation: fadeUp 0.25s ease; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .msg-avatar { width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 500; }
        .msg-avatar.assistant { background: var(--surface-2); border: 1px solid var(--border); overflow: hidden; padding: 4px; line-height: 0; }
        .msg-avatar.assistant img { width: 100%; height: 100%; object-fit: contain; display: block; }
        .msg-avatar.user { background: var(--accent-dim); border: 1px solid rgba(200,184,154,0.2); color: var(--accent); }
        .msg-body { flex: 1; min-width: 0; }
        .msg-name { font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 6px; }
        .msg-text { color: rgba(255, 255, 255, 1); line-height: 1.7; white-space: pre-wrap; word-break: break-word; }
        .msg-text.user-text { color: rgba(240,237,232,0.8); }

        /* ACTION BUTTONS */
        .msg-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
        .action-btn { background: transparent; border: 1px solid var(--border); color: var(--accent); font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; padding: 6px 12px; border-radius: var(--radius-full); cursor: pointer; transition: all 0.2s; text-align: left; line-height: 1.4; letter-spacing: 0.01em; }
        .action-btn:hover { border-color: var(--accent); background: var(--accent-dim); }

        /* SUGGESTIONS */
        .suggestions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; animation: fadeUp 0.3s ease 0.1s both; }
        .suggestion { background: transparent; border: 1px solid var(--border); color: var(--text-muted); font-family: 'Poppins', sans-serif; font-size: 12.5px; font-weight: 500; padding: 7px 13px; border-radius: var(--radius-full); cursor: pointer; transition: all 0.2s; text-align: left; line-height: 1.4; }
        .suggestion:hover { border-color: var(--border-hover); color: var(--text); background: var(--surface-2); }

        /* CONTACT FORM */
        .contact-form { background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; margin-top: 14px; animation: fadeUp 0.2s ease; }
        .contact-title { font-size: 12px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 14px; }
        .contact-input, .contact-textarea { width: 100%; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; color: var(--text); font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 300; padding: 10px 12px; margin-bottom: 10px; outline: none; transition: border-color 0.2s; resize: none; }
        .contact-input:focus, .contact-textarea:focus { border-color: var(--border-hover); }
        .contact-input::placeholder, .contact-textarea::placeholder { color: var(--text-muted); }
        .contact-actions { display: flex; gap: 8px; justify-content: flex-end; margin-top: 4px; }
        .contact-cancel { background: transparent; border: 1px solid var(--border); color: var(--text-muted); font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; padding: 7px 14px; border-radius: var(--radius-full); cursor: pointer; transition: all 0.2s; }
        .contact-cancel:hover { color: var(--text); border-color: var(--border-hover); }
        .contact-send { background: var(--accent); border: none; color: #0e0e0e; font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; padding: 7px 14px; border-radius: var(--radius-full); cursor: pointer; transition: opacity 0.2s; }
        .contact-send:disabled { opacity: 0.35; cursor: not-allowed; }
        .contact-send:not(:disabled):hover { opacity: 0.85; }
        .contact-success { color: var(--green); font-size: 13px; padding: 8px 0; }
        .contact-error { color: var(--red); font-size: 12px; margin-bottom: 8px; }

        /* PROJECT CARD */
        .project-card { background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius); margin-top: 14px; animation: fadeUp 0.25s ease; max-width: 420px; overflow: hidden; }
        .project-card-image { width: 100%; height: 160px; object-fit: cover; border-radius: var(--radius) var(--radius) 0 0; display: block; }
        .project-card-body { padding: 16px; }
        .project-card-category { font-size: 11px; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; text-align: left; }
        .project-card-title { font-family: "Poppins", sans-serif; font-size: 18px; font-weight: 600; color: var(--text); margin-top: 4px; line-height: 1.2; }
        .project-card-tagline { font-size: 13px; color: var(--text-muted); margin-top: 6px; line-height: 1.45; }
        .project-card-separator { border-top: 1px solid var(--border); margin: 12px 0; }
        .project-card-metrics { display: flex; flex-wrap: wrap; gap: 8px; }
        .project-card-metric { background: var(--accent-dim); border: 1px solid rgba(200,184,154,0.2); color: var(--accent); font-size: 11px; padding: 4px 10px; border-radius: 9999px; line-height: 1.3; }
        .project-card-toggle { margin-top: 12px; width: 100%; background: transparent; border: 1px solid var(--border); color: var(--text); font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; padding: 8px 10px; border-radius: 9999px; cursor: pointer; transition: all 0.2s; }
        .project-card-toggle:hover { border-color: var(--border-hover); background: rgba(255,255,255,0.03); }
        .project-card-details { margin-top: 10px; background: var(--surface); padding: 12px; border-radius: var(--radius); }
        .project-card-label { color: var(--accent); font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 5px; }
        .project-card-text { font-size: 13px; color: var(--text); line-height: 1.6; margin-bottom: 10px; }
        .project-card-text:last-child { margin-bottom: 0; }
        .project-card-cta { margin-top: 12px; width: 100%; background: var(--accent); border: none; color: #0e0e0e; font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; padding: 10px; border-radius: 9999px; cursor: pointer; transition: opacity 0.2s; }
        .project-card-cta:hover { opacity: 0.85; }
        .cursor-blink { display: inline-block; color: var(--accent); animation: blink 0.7s step-end infinite; font-size: 0.85em; margin-left: 1px; }
        .skip-hint { display: block; font-size: 10px; color: var(--text-muted); opacity: 0.4; margin-top: 6px; letter-spacing: 0.04em; font-style: italic; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        /* TYPING */
        .typing { display: flex; gap: 14px; animation: fadeUp 0.25s ease; }
        .typing-dots { display: flex; align-items: center; gap: 5px; padding: 6px 0; margin-top: 2px; }
        .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--text-muted); animation: pulse 1.2s ease infinite; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes pulse { 0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); } 40% { opacity: 1; transform: scale(1); } }

        /* INPUT */
        .input-area { padding: 20px 0 32px; flex-shrink: 0; border-top: 1px solid var(--border); }
        .input-wrap { display: flex; align-items: flex-end; gap: 10px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 12px 14px; transition: border-color 0.2s; }
        .input-wrap:focus-within { border-color: var(--border-hover); }
        .input-field { flex: 1; background: transparent; border: none; outline: none; color: var(--text); font-family: 'Poppins', sans-serif; font-size: 14.5px; font-weight: 300; line-height: 1.5; resize: none; min-height: 22px; max-height: 120px; overflow-y: auto; }
        .input-field::placeholder { color: var(--text-muted); }
        .send-btn { background: var(--accent); border: none; border-radius: var(--radius-full); width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; transition: opacity 0.2s; color: #0e0e0e; }
        .send-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .send-btn:not(:disabled):hover { opacity: 0.85; }
        @media (max-width: 768px) {
          .main-layout { display: block; }
          .conversation-column { max-width: 100%; }
          .side-panel { position: fixed; left: 0; right: 0; bottom: 0; width: auto; height: 75vh; transform: translateY(100%); transition: transform 0.3s ease; border-radius: 16px 16px 0 0; background: var(--surface); border-top: 1px solid var(--border); border-left: none; z-index: 100; overflow-y: auto; }
          .side-panel.open { width: auto; transform: translateY(0); }
          .side-panel-content { width: 100%; height: auto; min-height: 100%; }
          .mobile-panel-overlay { display: block; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99; }
        }

        @media (max-width: 480px) {
          .app { padding: 0 16px; }
          .header { padding: 20px 0 18px; flex-wrap: wrap; }
          .header-sub { display: none; }
          .suggestion { font-size: 12px; padding: 6px 11px; }
          .project-card { max-width: 100%; }
        }
      `}</style>

      <div className="app">
        {/* HEADER */}
        <header className="header">
          <div className="header-left">
            <div className="avatar" aria-hidden>
              <img src={BRAND_LOGO_SRC} alt="" />
            </div>
            <div className="header-left-text">
              <div className="header-title">{BRAND_DISPLAY_NAME}</div>
              <div className="header-sub">{c.agentSub}</div>
            </div>
          </div>
          <div className="header-right">
            <div className="lang-toggle">
              <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => switchLang("en")}>EN</button>
              <button className={`lang-btn ${lang === "fr" ? "active" : ""}`} onClick={() => switchLang("fr")}>FR</button>
            </div>
            <a href="https://www.tdeglane.com" className="header-link">{c.backLink}</a>
            <button
              className={`explore-btn ${panelOpen ? "open" : ""}`}
              onClick={() => setPanelOpen((v) => !v)}
            >
              {panelOpen ? (lang === "fr" ? "Fermer ✕" : "Close ✕") : (lang === "fr" ? "Explorer ☰" : "Explore ☰")}
            </button>
          </div>
        </header>

        <div className={`main-layout ${panelOpen ? "panel-open" : ""}`}>
          <div className="conversation-column">
            {/* MESSAGES */}
            <div className="messages">
              {messages.map((msg, i) => {
                const { message, actions = [] } = msg.parsed;
                const isAssistant = msg.role === "assistant";
                const isLast = i === messages.length - 1;
                const shouldAnimate = isAssistant && !animatedIds.current.has(msg.id);

                return (
                  <div key={`${lang}-${i}`} className="msg">
                    <div className={`msg-avatar ${msg.role}`} aria-hidden>
                      {isAssistant ? <img src={BRAND_LOGO_SRC} alt="" /> : "→"}
                    </div>
                    <div className="msg-body">
                      <div className="msg-name">{isAssistant ? BRAND_DISPLAY_NAME : c.you}</div>
                      <div className={`msg-text ${!isAssistant ? "user-text" : ""}`}>
                        {isAssistant && shouldAnimate ? (
                          <AnimatedText
                            text={message}
                            lang={lang}
                            onDone={() => animatedIds.current.add(msg.id)}
                          />
                        ) : (
                          message
                        )}
                      </div>

                      {/* Suggestions (premier message uniquement) */}
                      {i === 0 && showSuggestions[lang] && (
                        <div className="suggestions">
                          {c.suggestions.map((q, j) => (
                            <button key={j} className="suggestion" onClick={() => sendMessage(q)}>{q}</button>
                          ))}
                        </div>
                      )}

                      {/* Action buttons */}
                      {isAssistant && actions.length > 0 && !shouldAnimate && (
                        <div className="msg-actions">
                          {actions.map((action, j) => (
                            action.type === "project_card" ? (
                              <ProjectCard key={j} action={action} lang={lang} />
                            ) : (
                              <button key={j} className="action-btn" onClick={() => handleAction(action)}>
                                {action.label}
                              </button>
                            )
                          ))}
                        </div>
                      )}

                      {/* Contact form inline (dernier message assistant) */}
                      {isAssistant && isLast && contactOpen && (
                        <ContactForm
                          lang={lang}
                          onClose={() => setContactOpen(false)}
                          onSuccess={() => {}}
                        />
                      )}
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="typing">
                  <div className="msg-avatar assistant" aria-hidden>
                    <img src={BRAND_LOGO_SRC} alt="" />
                  </div>
                  <div className="msg-body">
                    <div className="msg-name">{BRAND_DISPLAY_NAME}</div>
                    <div className="typing-dots">
                      <div className="dot" /><div className="dot" /><div className="dot" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="input-area">
              <div className="input-wrap">
                <textarea
                  ref={inputRef}
                  className="input-field"
                  placeholder={c.placeholder}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
                  }}
                  onKeyDown={handleKey}
                  rows={1}
                  disabled={loading}
                />
                <button className="send-btn" onClick={() => sendMessage()} disabled={!input.trim() || loading} aria-label="Send">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 12V2M7 2L2 7M7 2L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <aside className={`side-panel ${panelOpen ? "open" : ""}`}>
            <div className="side-panel-content">
              <div className="side-panel-header">
                <div className="side-panel-title">Thibault Deglane</div>
                <div className="side-panel-subtitle">Senior Strategic Designer · Paris</div>
                <div className="side-panel-top-actions">
                  <button className="side-panel-mini-btn" onClick={() => window.open("https://www.tdeglane.com/about", "_blank", "noopener")}>
                    About & CV
                  </button>
                  <button className="side-panel-mini-btn" onClick={() => window.open("https://www.tdeglane.com", "_blank", "noopener")}>
                    Portfolio →
                  </button>
                </div>
                <div className="side-panel-cv-links">
                  <a className="side-panel-cv-link" href="https://drive.google.com/file/d/1waRu0E8tjhUK10XP7rsa2K_valTy-U4T/view?usp=share_link" target="_blank" rel="noopener noreferrer">↓ CV EN</a>
                  <a className="side-panel-cv-link" href="https://drive.google.com/file/d/1wZinQ0tr2SBp3_f_BWMW7kXpC6rZFagD/view?usp=share_link" target="_blank" rel="noopener noreferrer">↓ CV FR</a>
                </div>
              </div>

              <div className="side-panel-projects">
                <div className="side-panel-section-label">{lang === "fr" ? "Projets" : "Projects"}</div>
                {PANEL_PROJECTS.map((project) => (
                  <div key={project.slug} className="panel-project-item" onClick={() => handlePanelProject(project)}>
                    <img src={`/projects/${project.slug}.jpg`} className="panel-project-thumb" alt={project.title} />
                    <div className="panel-project-info">
                      <div className="panel-project-title">{project.title}</div>
                      <div className="panel-project-category">{project.category}</div>
                    </div>
                    <span className="panel-project-arrow">→</span>
                  </div>
                ))}
              </div>

              <div className="side-panel-footer">
                <button
                  className="side-panel-contact-btn"
                  onClick={() => {
                    setPanelOpen(false);
                    setContactOpen(true);
                  }}
                >
                  {lang === "fr" ? "→ Envoyer un message à Thibault" : "→ Send Thibault a message"}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
      {panelOpen && <div className="mobile-panel-overlay" onClick={() => setPanelOpen(false)} />}
    </>
  );
}
