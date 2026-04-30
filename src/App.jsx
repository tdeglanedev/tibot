import { useState, useRef, useEffect } from "react";
import { jsPDF } from "jspdf";

const BRAND_LOGO_SRC = "/Logo%20Thibault.png";
const BRAND_DISPLAY_NAME = ".Thibault Deglane";

// ─── SYSTEM PROMPT ────────────────────────────────────────────────────────────

// ─── SYSTEM PROMPT ────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are TiBot — the voice and mind of Thibault Deglane, a senior strategic designer based in the Paris region with 23 years of experience across advertising agencies, digital product studios, and SaaS building.

You speak in the first person, as Thibault. Not as an assistant describing him — as him, thinking out loud. You are an extension of his mind, not a representative of his CV.

Your role: help visitors understand how I think, what I've built, and whether I could be the right person for their context. Be honest. Be direct. Never oversell. When something is outside my experience or knowledge, say so.

When a visitor asks something personal or sensitive — salary expectations, availability, private context — redirect warmly toward direct contact rather than answering on my behalf.

---

## WHO I AM

A strategy is only as good as the experience it delivers. That belief has shaped my practice for over 23 years.

I'm not a classic designer who delivers mockups and hands off to developers. I hold vision, creative direction and product execution simultaneously — from strategic framing to deployed product. I don't separate thinking from building.

23 years bridging C-level advisory and hands-on craft, from major European brands to AI platforms in production.

---

## MY CAREER

2024–2026 — Co-founder, Niels. Co-designed the strategic positioning and methodological framework. Architected and delivered AskNiels end-to-end — product direction, experience vision and technical architecture through to production. Deployed an agentic AI copilot on a proprietary corpus of 57 structured activities, architecting the RAG pipeline (chunking, embeddings, vector store), prompt engineering strategy and guardrails to maintain doctrinal consistency at scale.

2014–2024 — Head of Design / Lead Experience Designer, Emakina / EPAM Systems (70,000+ people). Led experience strategy for major European brands across retail, luxury and sport ecosystems. Held creative direction and delivery governance across multidisciplinary teams of 8+. Architected scalable design systems adopted in production. Clients: Nike x FFF, Pierre Hardy, Boucheron, Olympique de Marseille, Célio, Micromania, Longchamp, Van Cleef & Arpels, Jaeger-LeCoultre, Louvre Hotels Group.

2012–2014 — Freelance: Art Director, Design Manager, Lead Experience Designer.

2008–2012 — Design Lead, TBWA/Pointcarré. Led creative and strategic direction within the branding and retail division of one of the world's most recognised agency networks, known for its Disruption® approach.

2004–2008 — Head of Creative Studio, Newsport.

Earlier: Founded a digital agency. Co-created one of the first Design Festivals in France.

---

## MY SKILLS

Hard: Systems thinking, Research & synthesis, Information architecture, Strategic framing, Prototyping & communication, AI as a design lever.
Tools: Figma, Framer, Cursor (AI-assisted development), n8n (agentic workflows).
Soft: Radical curiosity, Structured ambiguity, Collaborative leadership, Storytelling, Constructive friction.

---

## MY PROJECTS

### AskNiels (2024–2026) — AI · UX · UI · React
"Building the operating system of a methodology."
Problem: The Niels methodology had no home. Coaches had knowledge, not structure. Every project started blank.
Solution: Multi-tenant SaaS live in production. Plan Builder (drag-and-drop canvas of methodological activities). Context-aware AI assistant embedded in the workspace. Teams self-onboard without a coach.
Learnings: Full freedom created paralysis — templates became essential. Progressive activity discovery by phase replaced full catalogue view. Building the AI forced formalisation of tacit knowledge.
Results: -54% time to delivery, 57 activities, 6 phases, 97 Lighthouse score.
Stack: React/Vite/TypeScript, Supabase, Deno Edge Functions, Mistral + Claude, Cursor.
URL: https://www.tdeglane.com/projects/askniels-project
IMPORTANT: Never use AskNiels as a reference case when discussing methodology or problem-solving approaches. It's my own product — citing it as a use case conflates my role as creator with my role as practitioner. When illustrating how I think, use only client projects: Nike x FFF, Boucheron, Olympique de Marseille, Pierre Hardy, Célio, Micromania, Longchamp, Van Cleef & Arpels, Jaeger-LeCoultre, Louvre Hotels Group.

### Nike x FFF (2023) — UI/UX
"Spreading football fever in France."
First direct digital B2B platform between a sporting brand and amateur clubs. Custom outfit configuration tool. 4-year engagement. Post-COVID: design decisions fed by customer insights, not assumptions.
Results: +40% direct orders, 3x faster kit config, 12,000+ clubs onboarded, 4.2/5 satisfaction.
URL: https://www.tdeglane.com/projects/nikefff

### Boucheron Vendorama (2023) — Strategic Design / Phygital
"Digitizing the 160th anniversary of the luxury house."
Three interconnected digital touchpoints for the Monnaie de Paris exhibition, in 2 months: AR smartphone app, interactive multi-touch table, three interactive books. Constraint: nothing could feel like a tech demo.
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
Results: +65% online revenue in 6 months, +38% returning customers, 2.4x session duration, -30% checkout drop-off.
URL: https://www.tdeglane.com/projects/pierrehardy

### Célio (2022) — UI/UX / Omnichannel
"One brand, two touchpoints, zero friction."
E-commerce at 5% of revenue vs. 15% target. Overhauled e-commerce platform + in-store seller tablet (real-time stock across 550 stores, customer history, omnichannel checkout on shop floor).
Key insight: In a showrooming model, the salesperson is the conversion layer.
Results: 550 stores unified, 85-90% reservation-to-store conversion, +3x click & collect, 15% target unlocked.
URL: https://www.tdeglane.com/projects/celio

### Micromania-Zing (2020) — UI/UX
"When video games meet pop culture."
Two brands, two audiences, one platform. 8 sprints over 7 months. Two thirds of visits were web-to-store — platform designed around the full decision journey, not cart conversion. 4,000+ catalogue references.
Results: 140+ screens, 430 stores unified, 4,000+ references integrated.
URL: https://www.tdeglane.com/projects/micromania

### Longchamp (2018) — UI/UX / Omnichannel
"Making the Pliage the beginning of the story, not the end."
The Pliage had become a glass ceiling — capturing all attention online and rendering the rest of the collection invisible. I redesigned the customisation funnel as a discovery mechanism. Introduced editorial navigation over category-based browsing — a decision that created internal friction but was validated by post-launch metrics. Architected a design system and digital brand book governing visual consistency across all markets.
Results: Platform deployed across 24 countries, 7 languages, delivered in 4 months. First unified omnichannel experience for the Maison.
URL: https://www.tdeglane.com/projects/longchamp

### Van Cleef & Arpels (2019) — Strategic Design / Brand Experience · AVA Digital Awards — Platinum
"Designing desire before the decision."
The Maison's online and in-store experiences were speaking two completely different emotional languages to the same client. Not a communication problem. A coherence problem.
Solution: Research-first engagement across 5 markets — sector benchmarking, mystery shopping, client and sales team interviews. Four buyer profiles identified. Development of a Brand Experience Platform with 4 elements: experience contract, expected XP, projected XP and lived XP. Deployed across social media, website and in-store. Invited to global seminars to spread the user-centricity mindset.
Results: AVA Digital Awards — Platinum, Digital Marketing. 5 markets researched, 4 buyer profiles defined, BXP deployed globally.
URL: https://www.tdeglane.com/projects/van-cleef-arpels

### Jaeger-LeCoultre (2018) — Strategic Design / Phygital · Best of Web Innovation Award
"When the interface is the object."
The challenge wasn't visibility. It was memorability. The brief pointed toward the Maison's deep astral heritage — the solution had to live there as structural logic, not decoration.
Solution: Two interconnected experience layers. A VR telescope experience — chosen not because VR was interesting, but because it was the only interface carrying the right metaphorical weight for a Maison built on astronomical precision. The "On Your Wrist" AR device — first AR try-on in fine watchmaking.
Results: Best of Web Innovation Award. First AR try-on in fine watchmaking.
URL: https://www.tdeglane.com/projects/jaeger-lecoultre

### Louvre Hotels Group (2023) — Strategic Design / UX Research
"Great digital journeys make amazing voyages."
Five hotel brands, five audiences, and a reservation system that couldn't compete with OTAs on the only metric guests use: number of clicks to confirm a room. Research-first approach across 5 key countries. Full ecosystem audit. Conversion strategy built against booking.com benchmark. 60 designs (120 with mobile) structured for multi-brand rollout.
Results: 5 brands unified, booking flow matching booking.com on click count, 120 screens delivered.
URL: https://www.tdeglane.com/projects/louvre-hotels-group

---

## NAVIGATION LINKS (use in actions)

- Portfolio home: https://www.tdeglane.com
- About page: https://www.tdeglane.com/about
- CV English: https://drive.google.com/file/d/1waRu0E8tjhUK10XP7rsa2K_valTy-U4T/view?usp=share_link
- CV French: https://drive.google.com/file/d/1wZinQ0tr2SBp3_f_BWMW7kXpC6rZFagD/view?usp=share_link

---

## WHAT DRIVES ME / WHAT DOESN'T

I thrive in: discovery, challenge, transformation, ambiguous briefs needing strategic framing, innovation-open environments.
I don't thrive in: monotony, pure execution roles, rigid structures where design has no strategic seat.

---

## WHAT I'M LOOKING FOR

A Head of Design or Lead Experience Designer role within organisations where experience is a strategic lever, not a deliverable. Senior salaried position — agency, startup, scale-up, or enterprise digital team. Paris region. Occasional freelance possible. Not a pure execution role.

---

## MY POINT OF VIEW

When asked about design, organisations, AI or research, draw on these positions naturally. Never list them. Weave them into conversation as genuine perspective — in first person.

### Why design fragments as organisations grow
Speed and specialisation overtake vision. Early on, a few people carry a clear intention and coherence happens almost naturally. But as organisations grow, they divide: teams, products, markets, priorities. Everyone optimises their own perimeter. Design becomes a sum of local decisions rather than a global vision. This isn't a talent problem. It's an alignment and governance problem: too many hands, no shared language, and a vision that stops circulating.

### What makes AI feel wrong inside a product
AI is added as a feature instead of built as a capability. It feels wrong when it interrupts instead of helps, when it shows off its magic instead of solving a real problem, when it imposes a usage instead of integrating into an existing flow. You feel the tool, not the intelligence. Good AI almost disappears. It makes the product feel smarter, not more complicated.

### The difference between a design system and a design culture
A design system is what you document. A design culture is what you do when nobody's watching. A design system standardises, accelerates, and secures consistency. But it guarantees nothing on its own. A design culture sets implicit quality standards, aligns teams on what is and isn't acceptable, and influences decisions even outside design. You can have a great design system and a mediocre product. The reverse is much rarer.

### When research slows a project down
When it becomes an end in itself instead of a decision tool. Research slows things down when it chases certainty instead of direction, when it arrives too late to orient rather than validate, when it produces insights with no concrete impact. The right signal: if nobody changes a decision after a research cycle, it was probably too much. Research is useful when it reduces critical uncertainty. Not when it documents it perfectly.

---

## LANGUAGE INSTRUCTION — CRITICAL

Each message starts with either [LANGUAGE: English] or [LANGUAGE: Français].
- [LANGUAGE: English] → respond exclusively in English
- [LANGUAGE: Français] → respond exclusively in French
Never mix languages. Maintain selected language even if the user writes in the other one.

---

## RESPONSE FORMAT — CRITICAL

You MUST always respond in this exact two-part format:

PART 1 — Your message text, written naturally in first person.
No JSON, no special formatting. Just your response.
Use **bold** for emphasis and - for bullet points if needed.

---ACTIONS---
{"actions": [...]}

The ---ACTIONS--- separator is mandatory even if actions is empty:
---ACTIONS---
{"actions": []}

Rules:
- Everything before ---ACTIONS--- is your message text
- Everything after ---ACTIONS--- is a single JSON line with actions array
- Never put JSON in the message part
- Never omit the ---ACTIONS--- separator
- Keep the JSON on a single line after the separator

Action types available:
{ "type": "link", "label": "→ Label", "url": "https://..." }
{ "type": "contact", "label": "→ Send me a message" }
{ "type": "project_card", "slug": "askniels" }

For project_card, output ONLY the slug field — title, tagline, category, metrics, problem, solution, and url are filled in by the client. Valid slugs only:
askniels, nike-fff, boucheron, olympique-de-marseille, pierre-hardy, celio, micromania, longchamp, van-cleef, jaeger-lecoultre, louvre-hotels

WHEN TO ADD ACTIONS — use good judgment:
- After discussing a specific project → add a link to that project
- When discussing a specific project in detail → ALWAYS add a project_card action for that project. This is mandatory, not optional.
- When mentioning a project by name even briefly → add a project_card
- The project_card should always be the last action in the array
- If the visitor asks to see my work, projects, or portfolio overview → respond with exactly 3 project_cards that best represent the range: AskNiels (AI/product), Boucheron (phygital/strategic), and Célio (omnichannel/UX). Add a brief intro message explaining this is a curated selection and they can ask for more.
- After discussing my background, career, or skills → add About + CV links
- When a visitor seems interested, is a recruiter, or mentions hiring → add contact action
- Also add a contact action after the project_card when the visitor seems genuinely interested or engaged
- At the end of a satisfying exchange → offer contact
- Never add more than 3 actions per response
- Never add more than one project_card per response, EXCEPT when the visitor explicitly asks to see my work or projects overview — in that case respond with exactly 3 project_cards (AskNiels, Boucheron, Célio) and no other actions.
- Never add actions that are not relevant to what was just discussed
- Contact action label should always say "→ Send me a message" not "Send Thibault a message"

BEHAVIOUR:
- Speak in first person at all times. You are not describing Thibault — you are him.
- When a [METHODOLOGICAL CONTEXT FROM NIELS KNOWLEDGE BASE] block is present in the message, USE IT to answer the question. This context comes from my own design methodology — explaining it IS demonstrating my thinking. Never mention "Niels", "AskNiels", or "knowledge base" — just explain the method as my approach.
- Be proactive with point of view: when a visitor describes a challenge or context that relates to design, organisations, AI or research, share a relevant perspective spontaneously — without waiting to be asked.
- Direct, warm, intellectually sharp — this is my personality.
- Never salesy — honest about strengths and limits.
- Connect visitor context to my work when relevant.
- Ask one smart qualifying question per exchange.
- Never invent projects or capabilities not listed above.
- 3-5 sentences per reply unless more detail is requested.
- For sensitive questions (salary, private context, specific availability details) → invite direct contact warmly rather than answering on my behalf.

WORKSHOP DETECTION: When a visitor describes a real problem, challenge, or project they are working on — using phrases like "we're trying to", "our challenge is", "how do we", "we're struggling with", "our project is about", "j'ai une problématique", "on essaie de", "notre défi", "comment faire pour", "on travaille sur" — add a workshop_trigger action to your response:
{ "type": "workshop_trigger" }
This signals that the visitor has a real problem worth exploring. Only trigger once per conversation. Never trigger on general questions about Thibault or his work.`;

// ─── CONTENT (EN / FR) ───────────────────────────────────────────────────────

const CONTENT = {
  en: {
    agentSub: "Ask me anything",
    backLink: "Portfolio",
    greeting: {
      message: "Most portfolios show you what someone has done. This one shows you how I think.\n\nAsk me anything — to see how I approach the problems that matter.",
      actions: [],
    },
    placeholder: "Ask me something...",
    you: "You",
    suggestions: [
      "Why does design fragment as organisations grow?",
      "What makes AI feel wrong inside a product?",
      "What's the difference between a design system and a design culture?",
      "I have a real problem to explore",
    ],
    langInstruction: "[LANGUAGE: English]",
    contactTitle: "Send me a message",
    contactNamePlaceholder: "Your name",
    contactMsgPlaceholder: "Your message...",
    contactSend: "Send",
    contactSending: "Sending...",
    contactSuccess: "Message sent. I'll get back to you soon.",
    contactError: "Something went wrong. Try again.",
    contactCancel: "Cancel",
  },
  fr: {
    agentSub: "Posez-moi une question",
    backLink: "Portfolio",
    greeting: {
      message: "La plupart des portfolios vous montrent ce qu'on a fait. Celui-ci vous montre comment je pense.\n\nPosez-moi une question — pour voir comment j'envisage les problèmes qui comptent.",
      actions: [],
    },
    placeholder: "Posez-moi une question...",
    you: "Vous",
    suggestions: [
      "Pourquoi le design se fragmente-t-il quand une organisation grandit ?",
      "Qu'est-ce qui fait qu'une IA sonne faux dans un produit ?",
      "Quelle différence entre un système de design et une culture design ?",
      "J'ai une vraie problématique à explorer",
    ],
    langInstruction: "[LANGUAGE: Français]",
    contactTitle: "M'envoyer un message",
    contactNamePlaceholder: "Votre nom",
    contactMsgPlaceholder: "Votre message...",
    contactSend: "Envoyer",
    contactSending: "Envoi...",
    contactSuccess: "Message envoyé. Je vous répondrai rapidement.",
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
  {
    slug: "longchamp",
    title: "Longchamp",
    category: "UI/UX · Omnichannel",
    question_en: "Tell me about the Longchamp project",
    question_fr: "Parle-moi du projet Longchamp",
    url: "https://www.tdeglane.com/projects/longchamp",
  },
  {
    slug: "van-cleef-arpels",
    title: "Van Cleef & Arpels",
    category: "Strategic Design · Brand Experience",
    question_en: "Tell me about the Van Cleef & Arpels project",
    question_fr: "Parle-moi du projet Van Cleef & Arpels",
    url: "https://www.tdeglane.com/projects/van-cleef-arpels",
  },
  {
    slug: "jaeger-lecoultre",
    title: "Jaeger-LeCoultre",
    category: "Strategic Design · Phygital",
    question_en: "Tell me about the Jaeger-LeCoultre project",
    question_fr: "Parle-moi du projet Jaeger-LeCoultre",
    url: "https://www.tdeglane.com/projects/jaeger-lecoultre  ",
  },
];

const PROJECT_DATA = {
  askniels: {
    title: "AskNiels",
    tagline: {
      en: "Building the operating system of a methodology",
      fr: "Construire le système d'exploitation d'une méthodologie",
    },
    category: "AI · UX · UI · React",
    metrics: {
      en: ["−54% time to delivery", "57 structured activities", "97 Lighthouse score"],
      fr: ["−54% temps de livraison", "57 activités structurées", "Score Lighthouse 97"],
    },
    problem: {
      en: "The Niels methodology had no home. Coaches had knowledge but not structure. Every project started with the same blank page.",
      fr: "La méthodologie n'avait pas de maison. Les coachs avaient la connaissance mais pas la structure. Chaque projet démarrait avec une page blanche.",
    },
    solution: {
      en: "A multi-tenant SaaS live in production. Plan Builder drag-and-drop canvas + context-aware AI assistant. Teams self-onboard without a coach.",
      fr: "Un SaaS multi-tenant en production. Plan Builder en drag-and-drop + assistant IA contextuel. Les équipes s'auto-onboardent sans coach.",
    },
    url: "https://www.tdeglane.com/projects/askniels-project",
  },
  "nike-fff": {
    title: "Nike x FFF",
    tagline: {
      en: "Spreading football fever in France",
      fr: "Diffuser la fièvre du football en France",
    },
    category: "UI/UX",
    metrics: {
      en: ["+40% direct orders", "12,000+ clubs onboarded", "4.2/5 satisfaction"],
      fr: ["+40% commandes directes", "12 000+ clubs onboardés", "Satisfaction 4,2/5"],
    },
    problem: {
      en: "FFF wanted to give amateur clubs direct access to Nike equipment — moving from a fragmented paper-based process to a direct digital B2B platform.",
      fr: "La FFF voulait donner aux clubs amateurs un accès direct à l'équipement Nike — passer d'un processus papier fragmenté à une plateforme B2B numérique directe.",
    },
    solution: {
      en: "A ready-to-use B2B platform with custom outfit configuration tool. Post-COVID redesign fed entirely by customer insights.",
      fr: "Une plateforme B2B clé en main avec configurateur de tenues sur mesure. Refonte post-COVID entièrement nourrie par les retours clients.",
    },
    url: "https://www.tdeglane.com/projects/nikefff",
  },
  boucheron: {
    title: "Boucheron Vendorama",
    tagline: {
      en: "Digitizing the 160th anniversary of the luxury house",
      fr: "Numériser le 160e anniversaire de la maison de luxe",
    },
    category: "Strategic Design · Phygital",
    metrics: {
      en: ["16 days sold out", "10,000+ visitors", "#1 luxury activation of the year"],
      fr: ["16 jours complets", "10 000+ visiteurs", "#1 activation luxe de l'année"],
    },
    problem: {
      en: "Making 160 years of Boucheron heritage visceral for an audience that had never set foot inside a jewellery house.",
      fr: "Rendre 160 ans d'héritage Boucheron viscéral pour un public qui n'avait jamais franchi le seuil d'une maison de joaillerie.",
    },
    solution: {
      en: "Three interconnected digital touchpoints in 2 months: AR app, interactive multi-touch table, three interactive books. Nothing could feel like a tech demo.",
      fr: "Trois points de contact numériques interconnectés en 2 mois : appli RA, table multitouch interactive, trois livres interactifs. Rien ne devait ressembler à une démo tech.",
    },
    url: "https://www.tdeglane.com/projects/boucheron-vendorama",
  },
  "olympique-de-marseille": {
    title: "Olympique de Marseille",
    tagline: {
      en: "A legendary club in full digital transformation",
      fr: "Un club légendaire en pleine transformation digitale",
    },
    category: "Strategic Design",
    metrics: {
      en: ["+45% app engagement", "+60% hospitality conversion", "3 touchpoints unified"],
      fr: ["+45% engagement appli", "+60% conversion hospitalité", "3 points de contact unifiés"],
    },
    problem: {
      en: "OM had one of the most passionate fan bases in Europe but no digital infrastructure to turn that passion into a relationship outside the stadium.",
      fr: "L'OM comptait parmi les bases de supporters les plus passionnées d'Europe, sans infrastructure numérique pour transformer cette passion en relation hors stade.",
    },
    solution: {
      en: "Redesigned website + mobile app with live predictions, polls, gamification, OM Prime loyalty. Full omnichannel unification.",
      fr: "Site refondu + appli mobile avec pronostics live, sondages, gamification, fidélité OM Prime. Omnicanal pleinement unifié.",
    },
    url: "https://www.tdeglane.com/projects/olympique-de-marseille",
  },
  "pierre-hardy": {
    title: "Pierre Hardy",
    tagline: {
      en: "Creating an experience in the image of a great name",
      fr: "Créer une expérience à l'image d'un grand nom",
    },
    category: "UI/UX",
    metrics: {
      en: ["+65% online revenue", "+38% returning customers", "−30% checkout drop-off"],
      fr: ["+65% revenus en ligne", "+38% clients récurrents", "−30% abandon au checkout"],
    },
    problem: {
      en: "Luxury doesn't translate to digital by default. Brand content and commerce needed to coexist without compromise, mobile first.",
      fr: "Le luxe ne se transpose pas tout seul au numérique. Contenu de marque et commerce devaient coexister sans compromis, mobile first.",
    },
    solution: {
      en: "Co-design process with client teams from day one. Atomic design for pixel-perfect execution. 3 months, on time, on budget.",
      fr: "Co-design avec les équipes client dès le jour 1. Design atomique pour une exécution pixel-perfect. 3 mois, dans les temps et le budget.",
    },
    url: "https://www.tdeglane.com/projects/pierrehardy",
  },
  celio: {
    title: "Célio",
    tagline: {
      en: "One brand, two touchpoints, zero friction",
      fr: "Une marque, deux points de contact, zéro friction",
    },
    category: "UI/UX · Omnichannel",
    metrics: {
      en: ["550 stores unified", "85–90% reservation-to-store", "+3x click & collect"],
      fr: ["550 magasins unifiés", "85–90% réservation vers magasin", "+3x click & collect"],
    },
    problem: {
      en: "E-commerce at 5% of revenue vs. 15% target. Online and in-store operating in parallel, not together.",
      fr: "E-commerce à 5% du CA vs objectif 15%. En ligne et en magasin en parallèle, pas ensemble.",
    },
    solution: {
      en: "Overhauled e-commerce platform + in-store seller tablet with real-time stock, customer history, omnichannel checkout on the shop floor.",
      fr: "Refonte de la plateforme e-commerce + tablette vendeur en magasin avec stock temps réel, historique client, checkout omnicanal en boutique.",
    },
    url: "https://www.tdeglane.com/projects/celio",
  },
  micromania: {
    title: "Micromania-Zing",
    tagline: {
      en: "When video games meet pop culture",
      fr: "Quand le jeu vidéo rencontre la pop culture",
    },
    category: "UI/UX",
    metrics: {
      en: ["140+ screens", "430 stores unified", "4,000+ catalogue references"],
      fr: ["140+ écrans", "430 magasins unifiés", "4 000 références catalogue"],
    },
    problem: {
      en: "Two brands, two audiences, one platform. Two thirds of visits were web-to-store — a conventional approach would have solved the wrong problem.",
      fr: "Deux marques, deux publics, une plateforme. Deux tiers des visites web-to-store — une approche classique aurait résolu le mauvais problème.",
    },
    solution: {
      en: "8 design sprints over 7 months. Platform designed around the full decision journey. Navigation handling 4,000+ references.",
      fr: "8 sprints design sur 7 mois. Plateforme pensée autour du parcours de décision complet. Navigation gérant 4 000+ références.",
    },
    url: "https://www.tdeglane.com/projects/micromania",
  },
  longchamp: {
    title: "Longchamp",
    tagline: {
      en: "Making the Pliage the beginning of the story, not the end",
      fr: "Faire du Pliage le début de l'histoire, pas sa conclusion",
    },
    category: "UI/UX · Omnichannel",
    metrics: {
      en: ["24 countries, 7 languages", "Delivered in 4 months", "First unified omnichannel experience"],
      fr: ["24 pays, 7 langues", "Livré en 4 mois", "Première expérience omnicanale unifiée"],
    },
    problem: {
      en: "The Pliage had become a glass ceiling, capturing all attention online and rendering the rest of the collection invisible. The challenge was to reposition toward high-end luxury while turning the Pliage from a final destination into an entry point.",
      fr: "Le Pliage était devenu un plafond de verre, captant toute l'attention en ligne et rendant le reste de la collection invisible. L'enjeu: repositionner vers le luxe haut de gamme en faisant du Pliage une porte d'entrée plutôt qu'une destination finale.",
    },
    solution: {
      en: "Redesigned the customisation funnel as a discovery mechanism. Introduced editorial navigation over category-based browsing. Architected a design system and digital brand book governing visual consistency across all markets.",
      fr: "Tunnel de customisation repensé comme mécanisme de découverte. Navigation éditoriale plutôt que par catégories. Design system et digital brand book gouvernant la cohérence visuelle sur tous les marchés.",
    },
    url: "https://www.tdeglane.com/projects/longchamp",
  },
  "van-cleef": {
    title: "Van Cleef & Arpels",
    tagline: {
      en: "Designing desire before the decision",
      fr: "Concevoir le désir avant la décision",
    },
    category: "Strategic Design · Brand Experience",
    metrics: {
      en: ["5 markets researched", "4 buyer profiles defined", "AVA Digital Awards — Platinum"],
      fr: ["5 marchés étudiés", "4 profils d'acheteurs définis", "AVA Digital Awards — Platine"],
    },
    problem: {
      en: "The Maison's online and in-store experiences were speaking two completely different emotional languages to the same client. Not a communication problem. A coherence problem.",
      fr: "Les expériences en ligne et en boutique parlaient deux langages émotionnels complètement différents au même client. Pas un problème de communication. Un problème de cohérence.",
    },
    solution: {
      en: "Research-first engagement across 5 markets: benchmarking, mystery shopping, client and sales interviews. Four buyer profiles. Brand Experience Platform with 4 elements: experience contract, expected XP, projected XP and lived XP. Deployed across social media, website and in-store.",
      fr: "Approche research-first sur 5 marchés: benchmark, mystery shopping, interviews clients et équipes. Quatre profils d'acheteurs. Brand Experience Platform à 4 éléments: contrat d'expérience, XP attendue, projetée et vécue. Déployée sur les réseaux sociaux, le site et en boutique.",
    },
    url: "https://www.tdeglane.com/projects/van-cleef-arpels",
  },
  "jaeger-lecoultre": {
    title: "Jaeger-LeCoultre",
    tagline: {
      en: "When the interface is the object",
      fr: "Quand l'interface est l'objet",
    },
    category: "Strategic Design · Phygital",
    metrics: {
      en: ["First AR try-on in fine watchmaking", "Best of Web Innovation Award", "2 interconnected experience layers"],
      fr: ["Premier essayage AR en haute horlogerie", "Best of Web Innovation Award", "2 couches d'expérience interconnectées"],
    },
    problem: {
      en: "At SIHH, every Maison competes for the same finite attention. Jaeger-LeCoultre's challenge wasn't visibility, it was memorability. The brief pointed toward the Maison's deep astral heritage.",
      fr: "Au SIHH, chaque Maison se bat pour la même attention limitée. Le défi de Jaeger-LeCoultre n'était pas la visibilité, c'était la mémorabilité. Le brief pointait vers l'héritage astral profond de la Maison.",
    },
    solution: {
      en: "A VR telescope experience for immersive collection discovery. The 'On Your Wrist' AR device, first AR try-on in fine watchmaking. Both designed around one principle: the technology belongs to the Maison's world, or it doesn't exist.",
      fr: "Une expérience VR via télescope pour la découverte immersive de la collection. Le dispositif AR 'On Your Wrist', premier essayage AR en haute horlogerie. Les deux conçus autour d'un principe: la technologie appartient au monde de la Maison, ou elle n'existe pas.",
    },
    url: "https://www.tdeglane.com/projects/jaeger-lecoultre",
  },
};

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────

function parseMarkdown(text) {
  return text
    // Gras : **texte** → <strong>texte</strong>
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Italique : *texte* → <em>texte</em>
    .replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
    // Listes : lignes commençant par - ou • → <li>
    .replace(/^[-•]\s+(.+)$/gm, "<li>$1</li>")
    // Wrap les blocs de <li> dans <ul>
    .replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>")
    // Sauts de ligne doubles → paragraphes
    .replace(/\n\n/g, "</p><p>")
    // Sauts de ligne simples → <br>
    .replace(/\n/g, "<br/>");
}

function ProjectCard({ action, lang }) {
  const [expanded, setExpanded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const data = PROJECT_DATA[action.slug] || {};
  const { title, category, url } = data;
  const tagline = data.tagline?.[lang] || data.tagline?.en;
  const metrics = data.metrics?.[lang] || data.metrics?.en;
  const problem = data.problem?.[lang] || data.problem?.en;
  const solution = data.solution?.[lang] || data.solution?.en;
  const labels = lang === "fr"
    ? { problem: "Problème", solution: "Solution", view: "Voir le projet →" }
    : { problem: "Problem", solution: "Solution", view: "View project →" };

  return (
    <div className="project-card">
      <div className="card-img-container">
        {!imgLoaded && (
          <div className="card-img-skeleton" />
        )}
        <img
          src={`/projects/${action.slug}.jpg`}
          className="card-img"
          style={{ opacity: imgLoaded ? 1 : 0 }}
          onLoad={() => setImgLoaded(true)}
          alt={title}
        />
      </div>
      <div className="project-card-body">
        <div className="project-card-category">{category}</div>
        <div className="project-card-title">{title}</div>
        <div className="project-card-tagline">{tagline}</div>

        <div className="project-card-separator" />

        <div className="project-card-metrics">
          {(metrics || []).slice(0, 3).map((metric, i) => (
            <span key={i} className="project-card-metric">{metric}</span>
          ))}
        </div>

        <button className="project-card-toggle" onClick={() => setExpanded((v) => !v)}>
          {labels.problem} / {labels.solution}
        </button>

        {expanded && (
          <div className="project-card-details">
            <div className="project-card-label">{labels.problem}</div>
            <div className="project-card-text">{problem}</div>
            <div className="project-card-label">{labels.solution}</div>
            <div className="project-card-text">{solution}</div>
          </div>
        )}

        <button
          className="project-card-cta"
          onClick={() => window.open(url, "_blank", "noopener")}
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

function ContactForm({ lang, onClose, onSuccess, prefill = "" }) {
  const c = CONTENT[lang];
  const [name, setName] = useState("");
  const [message, setMessage] = useState(prefill);
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

// ─── WORKSHOP PDF ─────────────────────────────────────────────────────────────

function generateWorkshopPDF(answers, synthesis, lang) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const margin = 20;
  const pageW = 210;
  const contentW = pageW - margin * 2;
  const accent = [200, 184, 154];
  const dark = [26, 26, 26];
  const grey = [136, 136, 136];
  let y = margin;

  const addText = (text, x, fontSize, color, fontStyle = "normal", maxWidth = contentW) => {
    doc.setFont("helvetica", fontStyle);
    doc.setFontSize(fontSize);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(String(text), maxWidth);
    doc.text(lines, x, y);
    y += lines.length * (fontSize * 0.4) + 2;
    return lines.length;
  };

  const addHRule = (color = [220, 220, 220]) => {
    doc.setDrawColor(...color);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageW - margin, y);
    y += 4;
  };

  // ── En-tête ────────────────────────────────────────────────
  addText(".Thibault Deglane", margin, 11, grey);
  y += 1;
  addHRule();
  addText(
    lang === "fr" ? "Ébauche de cadrage stratégique" : "Strategic Framing Draft",
    margin, 22, dark, "bold"
  );
  y += 1;
  addText(new Date().toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", { year: "numeric", month: "long", day: "numeric" }), margin, 10, grey);
  y += 6;

  // ── Section 1 — Contexte ───────────────────────────────────
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...accent);
  doc.setCharSpace(1);
  doc.text(lang === "fr" ? "VOTRE CONTEXTE" : "YOUR CONTEXT", margin, y);
  doc.setCharSpace(0);
  y += 4;
  addHRule(accent);

  const contextLines = lang === "fr"
    ? [
        ["Type de sujet", answers.step1],
        ["Enjeu principal", answers.step2],
        ["Contrainte", answers.step3],
        ["Horizon", answers.step4],
      ]
    : [
        ["Challenge type", answers.step1],
        ["Main blocker", answers.step2],
        ["Constraint", answers.step3],
        ["Expected outcome", answers.step4],
      ];

  contextLines.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...grey);
    doc.text(`${label} ·`, margin, y);
    const labelW = doc.getTextWidth(`${label} · `);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...dark);
    doc.text(String(value || "—"), margin + labelW, y);
    y += 6;
  });
  y += 4;

  // ── Section 2 — Synthèse ───────────────────────────────────
  const sectionHeaders = lang === "fr"
    ? ["Le problème reformulé", "L'angle d'approche", "Par où commencer", "Ce que ça change"]
    : ["Reframed problem", "Strategic angle", "Where to start", "What it changes"];

  const blocks = synthesis.split(/\n(?=\*\*)/);
  sectionHeaders.forEach((header, idx) => {
    const matchingBlock = blocks.find((b) =>
      b.toLowerCase().includes(header.toLowerCase().slice(0, 12))
    );
    let content = "";
    if (matchingBlock) {
      content = matchingBlock.replace(/\*\*[^*]+\*\*\n?/, "").trim();
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...accent);
    doc.setCharSpace(1);
    doc.text(header.toUpperCase(), margin, y);
    doc.setCharSpace(0);
    y += 4;
    addHRule(accent);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(...dark);
    const lines = doc.splitTextToSize(content || "—", contentW);
    doc.text(lines, margin, y);
    y += lines.length * 5 + 8;

    if (y > 260 && idx < sectionHeaders.length - 1) {
      doc.addPage();
      y = margin;
    }
  });

  // ── Pied de page ───────────────────────────────────────────
  if (y > 255) { doc.addPage(); y = margin; }
  y += 4;
  addHRule();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...grey);
  doc.text(
    lang === "fr"
      ? "Suite logique : un échange de 30 min avec Thibault Deglane"
      : "Next step: a 30-minute conversation with Thibault Deglane",
    margin, y
  );
  y += 5;
  doc.text("tdeglane.com · hello@tdeglane.com", margin, y);

  doc.save(lang === "fr" ? "cadrage-strategique.pdf" : "strategic-framing.pdf");
}

// ─── WORKSHOP DONE CARD ───────────────────────────────────────────────────────

function WorkshopDoneCard({ lang, answers, synthesis, onContact }) {
  const t = {
    fr: {
      title: "Votre ébauche est prête",
      pdf: "↓ Télécharger le PDF",
      contact: "→ Continuer avec Thibault",
      footnote: "Cette ébauche couvre le cadrage. Un échange de 30 minutes permet d'aller beaucoup plus loin.",
    },
    en: {
      title: "Your draft is ready",
      pdf: "↓ Download PDF",
      contact: "→ Continue with Thibault",
      footnote: "This draft covers the framing. A 30-minute conversation goes much further.",
    },
  }[lang] || { title: "Your draft is ready", pdf: "↓ Download PDF", contact: "→ Continue with Thibault", footnote: "" };

  return (
    <div className="workshop-card workshop-done-card">
      <div className="workshop-card-title">{t.title}</div>
      <div className="workshop-done-actions">
        <button
          className="workshop-done-btn-primary"
          onClick={() => generateWorkshopPDF(answers, synthesis, lang)}
        >
          {t.pdf}
        </button>
        <button className="workshop-done-btn-outline" onClick={onContact}>
          {t.contact}
        </button>
      </div>
      <div className="workshop-done-footnote">{t.footnote}</div>
    </div>
  );
}

// ─── WORKSHOP CARD ────────────────────────────────────────────────────────────

function WorkshopCard({ workshopState, setWorkshopState, workshopAnswers, setWorkshopAnswers, lang, sendSilent }) {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customInputValue, setCustomInputValue] = useState("");

  const L = {
    fr: {
      triggeredTitle: "Explorons votre problématique",
      triggeredSub: "Je vais vous poser 4 questions courtes pour cadrer la situation et produire une ébauche de direction.",
      triggeredCta: "C'est parti →",
      generating: "Analyse en cours...",
      steps: [
        {
          label: "01 / 04",
          q: "Vous travaillez sur quel type de sujet ?",
          choices: ["Produit digital", "Expérience de service", "Transformation interne", "Autre chose"],
          key: "step1",
          next: "step2",
        },
        {
          label: "02 / 04",
          q: "Qu'est-ce qui bloque vraiment ?",
          choices: ["On ne sait pas par où commencer", "Les équipes ne sont pas alignées", "On a des solutions mais pas d'adoption", "Le problème n'est pas bien défini"],
          key: "step2",
          next: "step3",
        },
        {
          label: "03 / 04",
          q: "Qu'est-ce qui contraint votre approche ?",
          choices: ["Le temps — on doit aller vite", "Les ressources — équipe réduite", "L'organisation — structure complexe", "L'incertitude — on ne sait pas encore"],
          key: "step3",
          next: "step4",
        },
        {
          label: "04 / 04",
          q: "Quel résultat cherchez-vous ?",
          choices: ["Une vision claire pour décider", "Un plan d'action concret", "Aligner mon équipe ou mes parties prenantes", "Valider ou invalider une direction"],
          key: "step4",
          next: "generating",
        },
      ],
    },
    en: {
      triggeredTitle: "Let's explore your challenge",
      triggeredSub: "I'll ask you 4 short questions to frame the situation and produce a draft direction.",
      triggeredCta: "Let's go →",
      generating: "Analysing...",
      steps: [
        {
          label: "01 / 04",
          q: "What type of challenge are you working on?",
          choices: ["Digital product", "Service experience", "Internal transformation", "Something else"],
          key: "step1",
          next: "step2",
        },
        {
          label: "02 / 04",
          q: "What's the real blocker?",
          choices: ["We don't know where to start", "Teams aren't aligned", "Solutions exist but nobody uses them", "The problem isn't well defined"],
          key: "step2",
          next: "step3",
        },
        {
          label: "03 / 04",
          q: "What's constraining your approach?",
          choices: ["Time — we need to move fast", "Resources — small team", "Organisation — complex structure", "Uncertainty — we don't know yet"],
          key: "step3",
          next: "step4",
        },
        {
          label: "04 / 04",
          q: "What outcome are you looking for?",
          choices: ["A clear vision to make decisions", "A concrete action plan", "Align my team or stakeholders", "Validate or invalidate a direction"],
          key: "step4",
          next: "generating",
        },
      ],
    },
  };

  const t = L[lang] || L.fr;

  const handleStepChoice = (step, choice) => {
    const updated = { ...workshopAnswers, [step.key]: choice };
    setWorkshopAnswers(updated);
    setWorkshopState(step.next);

    if (step.next === "generating") {
      const a1 = updated.step1 || "";
      const a2 = updated.step2 || "";
      const a3 = updated.step3 || "";
      const a4 = choice;
      const prompt = `[WORKSHOP SYNTHESIS REQUEST]
The visitor has completed the discovery workshop. Here are their answers:
- Type of challenge: ${a1}
- Main blocker: ${a2}
- Main constraint: ${a3}
- Expected outcome: ${a4}

Based on this context and the methodological knowledge available, produce a structured diagnosis in this exact format:

**Le problème reformulé**
[2-3 sentences reformulating the real challenge behind their answers]

**L'angle d'approche**
[1-2 sentences on the recommended strategic angle]

**Par où commencer**
[3 concrete first steps, numbered]

**Ce que ça change**
[1 sentence on the expected impact if the direction is right]

Respond in the visitor's language. Be direct and specific. No generic advice. This should feel like a real strategic diagnosis.
After the synthesis, add this action: { "type": "workshop_done" }`;
      sendSilent(prompt);
    } else {
      sendSilent(`[Workshop context — ${step.key}] ${choice}`);
    }
  };

  if (workshopState === "triggered") {
    return (
      <div className="workshop-card">
        <div className="workshop-card-title">{t.triggeredTitle}</div>
        <div className="workshop-card-sub">{t.triggeredSub}</div>
        <button className="workshop-card-cta" onClick={() => setWorkshopState("step1")}>
          {t.triggeredCta}
        </button>
      </div>
    );
  }

  const currentStep = t.steps.find((s) => s.key === workshopState);
  if (currentStep) {
    const lastChoice = currentStep.choices[currentStep.choices.length - 1];
    const placeholder = lang === "fr" ? "Décrivez en quelques mots..." : "Describe in a few words...";
    const validateLabel = lang === "fr" ? "Valider →" : "Confirm →";

    const handleConfirmCustom = () => {
      const val = customInputValue.trim();
      if (!val) return;
      setShowCustomInput(false);
      setCustomInputValue("");
      handleStepChoice(currentStep, val);
    };

    return (
      <div className="workshop-card">
        <div className="workshop-step-label">{currentStep.label}</div>
        <div className="workshop-card-title">{currentStep.q}</div>
        <div className="workshop-choices">
          {currentStep.choices.map((choice) => {
            const isCustomChoice = choice === lastChoice;
            const isSelected = isCustomChoice && showCustomInput;
            return (
              <button
                key={choice}
                className={`workshop-choice-btn${isSelected ? " workshop-choice-btn--selected" : ""}`}
                onClick={() => {
                  if (isCustomChoice) {
                    setShowCustomInput(true);
                    setCustomInputValue("");
                  } else {
                    setShowCustomInput(false);
                    handleStepChoice(currentStep, choice);
                  }
                }}
              >
                {choice}
              </button>
            );
          })}
        </div>
        {showCustomInput && (
          <div className="workshop-custom-input-wrap">
            <input
              className="workshop-custom-input"
              placeholder={placeholder}
              value={customInputValue}
              onChange={(e) => setCustomInputValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleConfirmCustom(); }}
              autoFocus
            />
            <button
              className="workshop-custom-confirm"
              onClick={handleConfirmCustom}
              disabled={!customInputValue.trim()}
            >
              {validateLabel}
            </button>
          </div>
        )}
      </div>
    );
  }

  if (workshopState === "generating") {
    return (
      <div className="workshop-card workshop-card--generating">
        <div className="workshop-generating-dots">
          <div className="dot" /><div className="dot" /><div className="dot" />
        </div>
        <div className="workshop-generating-text">{t.generating}</div>
      </div>
    );
  }

  return null;
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function TiBot() {
  const [lang, setLang] = useState("fr");
  const [sessions, setSessions] = useState({
    en: [{ role: "assistant", parsed: CONTENT.en.greeting, id: 0 }],
    fr: [{ role: "assistant", parsed: CONTENT.fr.greeting, id: 1 }],
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState({ en: true, fr: true });
  const [contactOpen, setContactOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    () => (typeof window !== "undefined" ? window.innerWidth > 768 : true)
  );
  const [isListening, setIsListening] = useState(false);
  const [workshopState, setWorkshopState] = useState("idle");
  const [workshopAnswers, setWorkshopAnswers] = useState({});
  const [contactPrefill, setContactPrefill] = useState("");
  const workshopSynthesisRef = useRef("");
  const animatedIds = useRef(new Set());
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

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

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const onResize = () => setIsDesktop(window.innerWidth > 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const switchLang = (newLang) => {
    if (newLang === lang) return;
    setContactOpen(false);
    setLang(newLang);
    setInput("");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const parseResponse = (raw) => {
    console.log("RAW length:", raw.length);
    console.log("Has separator:", raw.includes("---ACTIONS---"));
    console.log(
      "JSON part preview:",
      raw.slice(
        raw.indexOf("---ACTIONS---") + 13,
        raw.indexOf("---ACTIONS---") + 200
      )
    );
    const separator = "---ACTIONS---";
    const idx = raw.indexOf(separator);
    let message = idx === -1 ? raw.trim() : raw.slice(0, idx).trim();
    message = message.replace(/^\[LANGUAGE:.*?\]\s*/i, "");
    const jsonPart =
      idx === -1 ? '{"actions":[]}' : raw.slice(idx + separator.length).trim();
    try {
      console.log("JSON part:", jsonPart.slice(0, 500));
      console.log("Message:", message.slice(0, 100));
      const parsed = JSON.parse(jsonPart);
      const actions = parsed.actions || [];
      if (actions.some((a) => a.type === "workshop_trigger")) {
        setWorkshopState("triggered");
      }
      if (actions.some((a) => a.type === "workshop_done")) {
        setWorkshopState("done");
        workshopSynthesisRef.current = message;
      }
      return { message, actions };
    } catch {
      return { message, actions: [] };
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
      "problem", "problème", "challenge", "défi", "improve",
      "améliorer", "transform", "transformer", "redesign",
      "optimize", "optimiser", "customer", "client", "persona",
      "brief", "projet", "project", "team", "équipe", "solution",
      "digital", "product", "produit", "service", "brand", "marque",
      "onboard", "convert", "engage", "retention", "adoption",
    ];
    return keywords.some((k) => text.toLowerCase().includes(k));
  };

  const sendMessage = async (text) => {
    const content = text || input.trim();
    if (!content || loading) return;

    setInput("");
    if (inputRef.current) {
      inputRef.current.blur();
    }
    setContactOpen(false);
    setShowSuggestions((prev) => ({ ...prev, [lang]: false }));

    const userMsg = {
      role: "user",
      parsed: { message: content, actions: [] },
      id: Date.now() + 1,
    };
    const newMessages = [...messages, userMsg];
    setSessions((prev) => ({ ...prev, [lang]: newMessages }));
    setLoading(true);

    // RAG
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
          ragContext = `[METHODOLOGICAL CONTEXT FROM NIELS KNOWLEDGE BASE]\n${ragData.chunks.map((c) => c.content).join("\n\n---\n\n")}\n[END CONTEXT]\n\n`;
        }
      } catch {
        // RAG échoue silencieusement
      }
    }

    const apiMessages = newMessages.map((m, i) => ({
      role: m.role,
      content:
        m.role === "user" && i === newMessages.length - 1
          ? `${c.langInstruction}\n\n${ragContext}${m.parsed.message}`
          : m.parsed.message,
    }));

    // Ajoute un message assistant vide qu'on va remplir progressivement
    const assistantId = Date.now();
    const assistantMsg = {
      role: "assistant",
      parsed: { message: "", actions: [] },
      id: assistantId,
    };
    setSessions((prev) => ({
      ...prev,
      [lang]: [...newMessages, assistantMsg],
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

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = "";
      let sseBuffer = "";

      const extractStreamMessage = (raw) => {
        const separator = "---ACTIONS---";
        const idx = raw.indexOf(separator);
        let text = idx === -1 ? raw.trim() : raw.slice(0, idx).trim();
        // Supprime l'instruction de langue
        text = text.replace(/^\[LANGUAGE:.*?\]\s*/i, "");
        // Ne retourne rien tant que le texte est trop court
        // pour éviter le flash du crochet [
        if (text.length < 3) return "";
        return text;
      };

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        sseBuffer += decoder.decode(value, { stream: true });
        const lineParts = sseBuffer.split("\n");
        sseBuffer = lineParts.pop() || "";

        for (const line of lineParts) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6).trim();
            if (data === "[DONE]") continue;
            let sseParsed;
            try {
              sseParsed = JSON.parse(data);
            } catch {
              // chunk SSE non parseable — on ignore
              continue;
            }
            if (sseParsed.type === "error") {
              throw new Error(sseParsed.error?.message || "API error");
            }
            if (
              sseParsed.type === "content_block_delta" &&
              sseParsed.delta?.type === "text_delta"
            ) {
              fullText += sseParsed.delta.text;
              setSessions((prev) => ({
                ...prev,
                [lang]: [
                  ...newMessages,
                  {
                    role: "assistant",
                    parsed: {
                      message: extractStreamMessage(fullText),
                      actions: [],
                    },
                    id: assistantId,
                  },
                ],
              }));
            }
          }
        }
      }

      // Stream terminé — parse le JSON final pour extraire les actions
      const finalParsed = parseResponse(fullText);
      // Marque le message comme déjà animé —
      // le stream a joué le rôle de l'animation
      animatedIds.current.add(assistantId);
      setSessions((prev) => ({
        ...prev,
        [lang]: [
          ...newMessages,
          {
            role: "assistant",
            parsed: finalParsed,
            id: assistantId,
          },
        ],
      }));
    } catch (err) {
      console.error("sendMessage error:", err?.message, err);
      const isOverloaded = err?.message?.includes("Overloaded");
      const errorMsg = isOverloaded
        ? lang === "fr"
          ? "Le service est momentanément surchargé. Réessayez dans quelques secondes."
          : "Service temporarily overloaded. Please retry in a few seconds."
        : lang === "fr"
          ? "Problème de connexion. Réessayez."
          : "Connection issue. Please try again.";
      setSessions((prev) => ({
        ...prev,
        [lang]: [
          ...newMessages,
          {
            role: "assistant",
            parsed: {
              message: errorMsg,
              actions: [],
            },
            id: Date.now(),
          },
        ],
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

  // Envoie un contexte à TiBot sans afficher le message utilisateur dans le flux
  const sendSilent = (context) => {
    sendMessage(context);
  };

  const handlePanelProject = (project) => {
    // Ferme le panneau sur mobile uniquement
    if (window.innerWidth <= 768) {
      setPanelOpen(false);
    }
    // Déclenche la conversation — ne navigue jamais ailleurs
    sendMessage(lang === "fr" ? project.question_fr : project.question_en);
  };

  const toggleListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(lang === "fr"
        ? "Votre navigateur ne supporte pas la reconnaissance vocale."
        : "Your browser doesn't support voice recognition.");
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.lang = lang === "fr" ? "fr-FR" : "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setInput(transcript);

      if (event.results[event.results.length - 1].isFinal) {
        setIsListening(false);
        setTimeout(() => sendMessage(transcript), 100);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
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
        body {
          background-color: #111514;
          background-image:
            repeating-linear-gradient(
              to right,
              transparent,
              transparent calc(100% / 2 - 1px),
              rgba(255, 255, 255, 0.04) calc(100% / 2 - 1px),
              rgba(255, 255, 255, 0.04) calc(100% / 2)
            );
          background-attachment: fixed;
          min-height: 100vh;
          width: 100%;
        }
        #root, .app {
          background: transparent;
        }
        .main-layout {
          display: flex;
          flex: 1;
          min-height: 0;
          overflow: hidden;
        }
        .main-layout.panel-open { gap: 20px; }
        .conversation-column {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          overflow: hidden;
        }
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
        .explore-btn { background: transparent; border: 1px solid rgba(200,184,154,0.4); color: var(--accent); font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 0.04em; padding: 6px 16px; border-radius: 9999px; transition: all 0.2s; cursor: pointer; white-space: nowrap; opacity: 1; pointer-events: auto; }
        .explore-btn:hover { background: var(--accent-dim); border-color: var(--accent); }
        .explore-btn.open { border-color: var(--accent); }

        /* SIDE PANEL */
        .side-panel { transition: transform 0.3s ease; background: var(--surface); border-left: 1px solid transparent; z-index: 50; overflow-y: auto; overflow-x: hidden; }
        .side-panel-close { display: none; }
        .side-panel-content { width: 100%; height: 100%; display: flex; flex-direction: column; overflow-x: hidden; }
        .side-panel-header { padding: 20px 20px 16px; border-bottom: 1px solid var(--border); }
        .side-panel-title { font-size: 14px; font-weight: 500; color: var(--text); }
        .side-panel-subtitle { margin-top: 4px; font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500; }
        .side-panel-portfolio-btn { width: 100%; background: transparent; color: var(--accent); border: 1px solid var(--accent); font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500; padding: 10px; border-radius: 9999px; cursor: pointer; transition: all 0.2s; }
        .side-panel-portfolio-btn:hover { background: var(--accent-dim); }
        .side-panel-top-actions { display: flex; gap: 12px; margin-top: 12px; align-items: center; flex-wrap: nowrap; }
        .side-panel-mini-btn { background: transparent; border: 1px solid var(--border); color: var(--text-muted); font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 500; padding: 5px 12px; border-radius: 9999px; cursor: pointer; transition: all 0.2s; }
        .side-panel-mini-btn:hover { color: var(--text); border-color: var(--border-hover); }
        .side-panel-cv-links { display: flex; gap: 12px; }
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
        .side-panel-footer { padding: 16px 20px; border-top: 1px solid var(--border); display: flex; flex-direction: column; gap: 8px; }
        .side-panel-contact-btn { width: 100%; background: var(--accent); color: #0e0e0e; border: none; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500; padding: 10px; border-radius: 9999px; cursor: pointer; transition: opacity 0.2s; }
        .side-panel-contact-btn:hover { opacity: 0.85; }
        .mobile-panel-overlay { display: none; }

        /* WORKSHOP CARD */
        .workshop-card { background: var(--surface-2); border: 1px solid rgba(200,184,154,0.25); border-radius: 8px; padding: 24px; max-width: 480px; animation: fadeUp 0.25s ease; margin-top: 16px; }
        .workshop-step-label { font-size: 11px; font-weight: 500; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px; }
        .workshop-card-title { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 500; color: var(--text); line-height: 1.4; margin-bottom: 10px; }
        .workshop-card-sub { font-size: 13px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px; }
        .workshop-card-cta { background: var(--accent); border: none; color: #0e0e0e; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500; padding: 10px 20px; border-radius: 9999px; cursor: pointer; transition: opacity 0.2s; }
        .workshop-card-cta:hover { opacity: 0.85; }
        .workshop-choices { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 4px; }
        .workshop-choice-btn { background: transparent; border: 1px solid var(--border); color: var(--text); font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 400; padding: 10px 14px; border-radius: 8px; cursor: pointer; transition: all 0.2s; text-align: left; line-height: 1.4; }
        .workshop-choice-btn:hover { border-color: var(--accent); color: var(--accent); }
        .workshop-choice-btn--selected { border-color: var(--accent); color: var(--accent); }
        .workshop-custom-input-wrap { display: flex; gap: 8px; align-items: center; margin-top: 12px; }
        .workshop-custom-input { flex: 1; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; color: var(--text); font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 300; padding: 10px 12px; outline: none; transition: border-color 0.2s; }
        .workshop-custom-input:focus { border-color: var(--border-hover); }
        .workshop-custom-input::placeholder { color: var(--text-muted); }
        .workshop-custom-confirm { background: var(--accent); border: none; color: #0e0e0e; font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; padding: 10px 16px; border-radius: 9999px; cursor: pointer; transition: opacity 0.2s; white-space: nowrap; flex-shrink: 0; }
        .workshop-custom-confirm:disabled { opacity: 0.35; cursor: not-allowed; }
        .workshop-custom-confirm:not(:disabled):hover { opacity: 0.85; }
        .workshop-card--generating { display: flex; align-items: center; gap: 12px; }
        .workshop-generating-dots { display: flex; align-items: center; gap: 5px; }
        .workshop-generating-text { font-size: 13px; color: var(--text-muted); }
        .workshop-done-card { margin-top: 12px; }
        .workshop-done-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; }
        .workshop-done-btn-primary { background: var(--accent); border: none; color: #0e0e0e; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500; padding: 10px 20px; border-radius: 9999px; cursor: pointer; transition: opacity 0.2s; white-space: nowrap; }
        .workshop-done-btn-primary:hover { opacity: 0.85; }
        .workshop-done-btn-outline { background: transparent; border: 1px solid var(--accent); color: var(--accent); font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500; padding: 10px 20px; border-radius: 9999px; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
        .workshop-done-btn-outline:hover { background: var(--accent-dim); }
        .workshop-done-footnote { margin-top: 14px; font-size: 11px; color: var(--text-muted); line-height: 1.5; }

        /* MESSAGES */
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
        .msg-text strong { font-weight: 600; color: var(--text); }
        .msg-text em { font-style: italic; color: var(--text-muted); }
        .msg-text ul { margin: 8px 0 8px 16px; list-style: disc; }
        .msg-text li { margin-bottom: 4px; line-height: 1.6; }
        .msg-text p { margin-bottom: 8px; }

        /* ACTION BUTTONS */
        .msg-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
        .action-btn { background: transparent; border: 1px solid var(--border); color: var(--accent); font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; padding: 6px 12px; border-radius: var(--radius-full); cursor: pointer; transition: all 0.2s; text-align: left; line-height: 1.4; letter-spacing: 0.01em; }
        .action-btn:hover { border-color: var(--accent); background: var(--accent-dim); }

        /* SUGGESTIONS */
        .suggestions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; animation: fadeUp 0.3s ease 0.1s both; }
        .suggestion { background: transparent; border: 1px solid var(--border); color: var(--text-muted); font-family: 'Poppins', sans-serif; font-size: 12.5px; font-weight: 500; padding: 7px 13px; border-radius: var(--radius-full); cursor: pointer; transition: all 0.2s; text-align: left; line-height: 1.4; }
        .suggestion:hover { border-color: var(--border-hover); color: var(--text); background: var(--surface-2); }
        .suggestion-workshop { background: transparent; border: 1px solid transparent; background-clip: padding-box; position: relative; color: var(--text-muted); font-family: 'Poppins', sans-serif; font-size: 12.5px; font-weight: 500; padding: 7px 13px; border-radius: 9999px; cursor: pointer; transition: all 0.2s; text-align: left; line-height: 1.4; }
        .suggestion-workshop::before { content: ''; position: absolute; inset: -1px; border-radius: 9999px; background: linear-gradient(135deg, #0e7490, #4a3f6b, #0891b2); z-index: -1; }
        .suggestion-workshop::after { content: ''; position: absolute; inset: 0; border-radius: 9999px; background: var(--bg); z-index: -1; }
        .suggestion-workshop:hover::after { background: rgba(14, 116, 144, 0.08); }

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
        .card-img-container {
          position: relative;
          width: 100%;
          height: 160px;
          border-radius: var(--radius) var(--radius) 0 0;
          overflow: hidden;
          background: var(--surface-2);
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease;
          display: block;
        }
        .card-img-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            var(--surface-2) 0%,
            rgba(200,184,154,0.08) 50%,
            var(--surface-2) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s ease infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
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
        .input-wrap { display: flex; align-items: flex-end; gap: 10px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 12px 14px; transition: border-color 0.2s; }
        .input-wrap:focus-within { border-color: var(--border-hover); }
        .input-field { flex: 1; background: transparent; border: none; outline: none; color: var(--text); font-family: 'Poppins', sans-serif; font-size: 16px; /* minimum pour éviter le zoom iOS */ font-weight: 300; line-height: 1.5; resize: none; min-height: 22px; max-height: 120px; overflow-y: auto; }
        .input-field::placeholder { color: var(--text-muted); }
        .mic-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          border-radius: 9999px;
          transition: all 0.2s;
          padding: 0;
        }
        .mic-btn:hover {
          color: var(--text);
          background: var(--surface-2);
        }
        .mic-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .mic-btn.listening {
          color: #e05c5c;
          background: rgba(224, 92, 92, 0.12);
          animation: micPulse 1s ease infinite;
        }
        @keyframes micPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(224, 92, 92, 0.3); }
          50% { box-shadow: 0 0 0 6px rgba(224, 92, 92, 0); }
        }
        .send-btn { background: var(--accent); border: none; border-radius: var(--radius-full); width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; transition: opacity 0.2s; color: #0e0e0e; }
        .send-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .send-btn:not(:disabled):hover { opacity: 0.85; }
        @media (min-width: 769px) {
          .explore-btn.open { opacity: 0.4; pointer-events: none; }
          .side-panel {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 360px;
            transform: translateX(100%);
            pointer-events: none;
            box-shadow: -4px 0 24px rgba(0,0,0,0.4);
          }
          .side-panel.open {
            transform: translateX(0);
            border-left-color: var(--border);
            pointer-events: auto;
          }
          .side-panel-content { padding-top: 80px; }
          .side-panel-close {
            display: block;
            position: absolute;
            top: 16px;
            right: 16px;
            background: var(--surface-2);
            border: 1px solid var(--border);
            color: var(--text);
            font-family: 'Poppins', sans-serif;
            font-size: 12px;
            font-weight: 500;
            padding: 6px 14px;
            border-radius: 9999px;
            cursor: pointer;
          }
        }
        @media (max-width: 768px) {
          .main-layout {
            display: flex;
            flex-direction: column;
          }
          .conversation-column { max-width: 100%; }
          .side-panel { position: fixed; left: 0; right: 0; bottom: 0; width: 100%; height: 75vh; transform: translateY(100%); border-radius: 16px 16px 0 0; border-top: 1px solid var(--border); border-left: none; z-index: 100; visibility: hidden; }
          .side-panel.open { width: 100%; transform: translateY(0); visibility: visible; }
          .side-panel-content { width: 100%; height: auto; min-height: 100%; }
          .mobile-panel-overlay { display: block; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 99; }
        }

        @media (max-width: 480px) {
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
            <button
              className={`explore-btn ${panelOpen ? "open" : ""}`}
              onClick={() => setPanelOpen((prev) => (isDesktop ? true : !prev))}
            >
              {isDesktop
                ? (lang === "fr" ? "Projets ☰" : "Projects ☰")
                : (panelOpen
                    ? (lang === "fr" ? "Fermer ✕" : "Close ✕")
                    : (lang === "fr" ? "Projets ☰" : "Projects ☰"))}
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
                const isStreaming = isLast && loading && isAssistant;
                const shouldAnimate =
                  isAssistant && !animatedIds.current.has(msg.id) && !isStreaming;

                if (isAssistant && isLast && loading && message === "") {
                  return null;
                }

                return (
                  <div key={`${lang}-${i}`} className="msg">
                    <div className={`msg-avatar ${msg.role}`} aria-hidden>
                      {isAssistant ? <img src={BRAND_LOGO_SRC} alt="" /> : "→"}
                    </div>
                    <div className="msg-body">
                      <div className="msg-name">{isAssistant ? BRAND_DISPLAY_NAME : c.you}</div>
                      {isAssistant ? (
                        isStreaming ? (
                          <div
                            className="msg-text"
                            dangerouslySetInnerHTML={{
                              __html: parseMarkdown(message),
                            }}
                          />
                        ) : animatedIds.current.has(msg.id) ? (
                          <div
                            className="msg-text"
                            dangerouslySetInnerHTML={{ __html: parseMarkdown(message) }}
                          />
                        ) : (
                          <div className="msg-text">
                            <AnimatedText
                              text={message}
                              onDone={() => animatedIds.current.add(msg.id)}
                              lang={lang}
                            />
                          </div>
                        )
                      ) : (
                        <div className="msg-text user-text">{message}</div>
                      )}

                      {/* Suggestions (premier message uniquement) */}
                      {i === 0 && showSuggestions[lang] && (
                        <div className="suggestions">
                          {c.suggestions.map((q, j) => {
                            const isWorkshopSuggestion = j === c.suggestions.length - 1;
                            return (
                              <button
                                key={j}
                                className={isWorkshopSuggestion ? "suggestion-workshop" : "suggestion"}
                                onClick={() => {
                                  if (isWorkshopSuggestion) {
                                    setWorkshopState("triggered");
                                    setShowSuggestions((prev) => ({ ...prev, [lang]: false }));
                                  } else {
                                    sendMessage(q);
                                  }
                                }}
                              >
                                {q}
                              </button>
                            );
                          })}
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
                          onClose={() => { setContactOpen(false); setContactPrefill(""); }}
                          onSuccess={() => {}}
                          prefill={contactPrefill}
                        />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Workshop card */}
              {["triggered", "step1", "step2", "step3", "step4", "generating"].includes(workshopState) && !loading && (
                <WorkshopCard
                  workshopState={workshopState}
                  setWorkshopState={setWorkshopState}
                  workshopAnswers={workshopAnswers}
                  setWorkshopAnswers={setWorkshopAnswers}
                  lang={lang}
                  sendSilent={sendSilent}
                />
              )}

              {/* Workshop done card */}
              {workshopState === "done" && !loading && (
                <WorkshopDoneCard
                  lang={lang}
                  answers={workshopAnswers}
                  synthesis={workshopSynthesisRef.current}
                  onContact={() => {
                    const prefill = lang === "fr"
                      ? `Bonjour Thibault,\n\nJ'ai utilisé l'atelier de cadrage et voici mon contexte :\n- Sujet : ${workshopAnswers.step1}\n- Enjeu : ${workshopAnswers.step2}\n- Contrainte : ${workshopAnswers.step3}\n- Horizon : ${workshopAnswers.step4}\n\nJ'aimerais continuer cet échange avec vous.`
                      : `Hi Thibault,\n\nI used the discovery workshop and here's my context:\n- Challenge type: ${workshopAnswers.step1}\n- Main blocker: ${workshopAnswers.step2}\n- Constraint: ${workshopAnswers.step3}\n- Expected outcome: ${workshopAnswers.step4}\n\nI'd like to continue this conversation with you.`;
                    setContactPrefill(prefill);
                    setContactOpen(true);
                  }}
                />
              )}

              {loading &&
                messages[messages.length - 1]?.role === "assistant" &&
                messages[messages.length - 1]?.parsed?.message === "" && (
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
                  placeholder={isListening
                    ? (lang === "fr" ? "Je vous écoute..." : "Listening...")
                    : c.placeholder}
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
                <button
                  className={`mic-btn ${isListening ? "listening" : ""}`}
                  onClick={toggleListening}
                  disabled={loading}
                  aria-label="Voice input"
                  type="button"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="4" y="1" width="6" height="8" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 7c0 2.761 2.239 5 5 5s5-2.239 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="7" y1="12" x2="7" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <button className="send-btn" onClick={() => sendMessage()} disabled={!input.trim() || loading} aria-label="Send">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 12V2M7 2L2 7M7 2L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <aside className={`side-panel ${panelOpen ? "open" : ""}`}>
            <button className="side-panel-close" onClick={() => setPanelOpen(false)} type="button">
              Fermer ✕
            </button>
            <div className="side-panel-content">
              <div className="side-panel-header">
                <div className="side-panel-title">Thibault Deglane</div>
                <div className="side-panel-subtitle">Senior Strategic Designer · Paris</div>
                <div className="side-panel-top-actions">
                  <button className="side-panel-mini-btn" onClick={() => window.open("https://www.tdeglane.com/about", "_blank", "noopener")}>
                    About
                  </button>
                  <div className="side-panel-cv-links">
                    <a className="side-panel-cv-link" href="https://drive.google.com/file/d/1waRu0E8tjhUK10XP7rsa2K_valTy-U4T/view?usp=share_link" target="_blank" rel="noopener noreferrer">↓ CV EN</a>
                    <a className="side-panel-cv-link" href="https://drive.google.com/file/d/1wZinQ0tr2SBp3_f_BWMW7kXpC6rZFagD/view?usp=share_link" target="_blank" rel="noopener noreferrer">↓ CV FR</a>
                  </div>
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
                  className="side-panel-portfolio-btn"
                  onClick={() => window.open("https://www.tdeglane.com", "_blank", "noopener")}
                >
                  → Voir le portfolio complet
                </button>
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
