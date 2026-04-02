import { useState, useRef, useEffect } from "react";

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

WHEN TO ADD ACTIONS — use good judgment:
- After discussing a specific project → add a link to that project
- After discussing Thibault's background, career, or skills → add About + CV links
- When a visitor seems interested, is a recruiter, or mentions hiring → add contact action
- At the end of a satisfying exchange → offer contact
- Never add more than 3 actions per response
- Never add actions that are not relevant to what was just discussed

BEHAVIOUR:
- Direct, warm, intellectually sharp — reflect Thibault's personality
- Never salesy — honest about strengths and limits
- Connect visitor context to Thibault's work when relevant
- Ask one smart qualifying question per exchange
- Never invent projects or capabilities not listed above
- 3–5 sentences per reply unless more detail is requested`;

// ─── CONTENT (EN / FR) ───────────────────────────────────────────────────────

const CONTENT = {
  en: {
    agentSub: "Thibault Deglane · AI Agent",
    backLink: "← Portfolio",
    greeting: {
      message: "Hey — I'm TiBot, Thibault's AI agent.\n\nI know his work, his thinking, and how he operates. Ask me anything — about his projects, his approach, or whether he could be the right fit for your context.\n\nWho are you, and what brought you here?",
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
    agentSub: "Thibault Deglane · Agent IA",
    backLink: "← Portfolio",
    greeting: {
      message: "Bonjour — je suis TiBot, l'agent IA de Thibault.\n\nJe connais son travail, sa façon de penser et sa manière d'opérer. Posez-moi n'importe quelle question — sur ses projets, son approche, ou pour savoir s'il correspond à votre contexte.\n\nQui êtes-vous, et qu'est-ce qui vous amène ici ?",
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
    en: [{ role: "assistant", parsed: CONTENT.en.greeting }],
    fr: [{ role: "assistant", parsed: CONTENT.fr.greeting }],
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState({ en: true, fr: true });
  const [contactOpen, setContactOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const c = CONTENT[lang];
  const messages = sessions[lang];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, lang]);

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

  const sendMessage = async (text) => {
    const content = text || input.trim();
    if (!content || loading) return;

    setInput("");
    setContactOpen(false);
    setShowSuggestions((prev) => ({ ...prev, [lang]: false }));

    const userMsg = { role: "user", parsed: { message: content, actions: [] } };
    const newMessages = [...messages, userMsg];
    setSessions((prev) => ({ ...prev, [lang]: newMessages }));
    setLoading(true);

    const apiMessages = newMessages.map((m, i) => ({
      role: m.role,
      content: m.role === "user" && i === newMessages.length - 1
        ? `${c.langInstruction}\n\n${m.parsed.message}`
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
        [lang]: [...newMessages, { role: "assistant", parsed }],
      }));
    } catch {
      setSessions((prev) => ({
        ...prev,
        [lang]: [...newMessages, { role: "assistant", parsed: { message: "Connection issue. Please try again.", actions: [] } }],
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0e0e0e; --surface: #161616; --surface-2: #1e1e1e;
          --border: rgba(255,255,255,0.07); --border-hover: rgba(255,255,255,0.14);
          --text: #f0ede8; --text-muted: rgba(240,237,232,0.45);
          --accent: #c8b89a; --accent-dim: rgba(200,184,154,0.12);
          --green: #4caf7d; --red: #e05c5c; --radius: 4px; --radius-full: 9999px;
        }
        html, body { height: 100%; }
        body { background: var(--bg); color: var(--text); font-family: 'Poppins', sans-serif; font-weight: 300; font-size: 15px; line-height: 1.65; -webkit-font-smoothing: antialiased; }
        #root { height: 100%; display: flex; flex-direction: column; }
        .app { display: flex; flex-direction: column; height: 100%; max-width: 720px; margin: 0 auto; width: 100%; padding: 0 20px; }

        /* HEADER */
        .header { display: flex; align-items: center; justify-content: space-between; padding: 28px 0 24px; border-bottom: 1px solid var(--border); flex-shrink: 0; gap: 12px; }
        .header-left { display: flex; align-items: center; gap: 14px; }
        .avatar { width: 36px; height: 36px; border-radius: 50%; background: var(--surface-2); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 18px; line-height: 1; flex-shrink: 0; }
        .header-title { font-family: 'Poppins', sans-serif; font-size: 17px; color: var(--text); letter-spacing: -0.01em; }
        .header-sub { font-size: 11px; color: var(--text-muted); margin-top: 1px; font-weight: 300; letter-spacing: 0.04em; text-transform: uppercase; }
        .header-right { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
        .lang-toggle { display: flex; align-items: center; background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-full); overflow: hidden; }
        .lang-btn { background: transparent; border: none; color: var(--text-muted); font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; padding: 6px 10px; cursor: pointer; transition: all 0.15s; line-height: 1; }
        .lang-btn.active { background: var(--accent); color: #0e0e0e; }
        .lang-btn:not(.active):hover { color: var(--text); background: rgba(255,255,255,0.04); }
        .header-link { font-size: 11px; color: var(--text-muted); text-decoration: none; letter-spacing: 0.04em; text-transform: uppercase; transition: color 0.2s; font-weight: 400; white-space: nowrap; }
        .header-link:hover { color: var(--accent); }

        /* MESSAGES */
        .messages { flex: 1; overflow-y: auto; padding: 32px 0; display: flex; flex-direction: column; gap: 28px; scrollbar-width: thin; scrollbar-color: var(--border) transparent; }
        .messages::-webkit-scrollbar { width: 4px; }
        .messages::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
        .msg { display: flex; gap: 14px; animation: fadeUp 0.25s ease; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .msg-avatar { width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 500; }
        .msg-avatar.assistant { background: var(--surface-2); border: 1px solid var(--border); font-size: 15px; line-height: 1; }
        .msg-avatar.user { background: var(--accent-dim); border: 1px solid rgba(200,184,154,0.2); color: var(--accent); }
        .msg-body { flex: 1; min-width: 0; }
        .msg-name { font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 6px; }
        .msg-text { color: var(--text); line-height: 1.7; white-space: pre-wrap; word-break: break-word; }
        .msg-text.user-text { color: rgba(240,237,232,0.8); }

        /* ACTION BUTTONS */
        .msg-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
        .action-btn { background: transparent; border: 1px solid var(--border); color: var(--accent); font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 400; padding: 6px 12px; border-radius: var(--radius-full); cursor: pointer; transition: all 0.2s; text-align: left; line-height: 1.4; letter-spacing: 0.01em; }
        .action-btn:hover { border-color: var(--accent); background: var(--accent-dim); }

        /* SUGGESTIONS */
        .suggestions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; animation: fadeUp 0.3s ease 0.1s both; }
        .suggestion { background: transparent; border: 1px solid var(--border); color: var(--text-muted); font-family: 'Poppins', sans-serif; font-size: 12.5px; font-weight: 300; padding: 7px 13px; border-radius: var(--radius-full); cursor: pointer; transition: all 0.2s; text-align: left; line-height: 1.4; }
        .suggestion:hover { border-color: var(--border-hover); color: var(--text); background: var(--surface-2); }

        /* CONTACT FORM */
        .contact-form { background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; margin-top: 14px; animation: fadeUp 0.2s ease; }
        .contact-title { font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 14px; }
        .contact-input, .contact-textarea { width: 100%; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-full); color: var(--text); font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 300; padding: 10px 12px; margin-bottom: 10px; outline: none; transition: border-color 0.2s; resize: none; }
        .contact-input:focus, .contact-textarea:focus { border-color: var(--border-hover); }
        .contact-input::placeholder, .contact-textarea::placeholder { color: var(--text-muted); }
        .contact-actions { display: flex; gap: 8px; justify-content: flex-end; margin-top: 4px; }
        .contact-cancel { background: transparent; border: 1px solid var(--border); color: var(--text-muted); font-family: 'Poppins', sans-serif; font-size: 12px; padding: 7px 14px; border-radius: var(--radius-full); cursor: pointer; transition: all 0.2s; }
        .contact-cancel:hover { color: var(--text); border-color: var(--border-hover); }
        .contact-send { background: var(--accent); border: none; color: #0e0e0e; font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; padding: 7px 14px; border-radius: var(--radius-full); cursor: pointer; transition: opacity 0.2s; }
        .contact-send:disabled { opacity: 0.35; cursor: not-allowed; }
        .contact-send:not(:disabled):hover { opacity: 0.85; }
        .contact-success { color: var(--green); font-size: 13px; padding: 8px 0; }
        .contact-error { color: var(--red); font-size: 12px; margin-bottom: 8px; }

        /* TYPING */
        .typing { display: flex; gap: 14px; animation: fadeUp 0.25s ease; }
        .typing-dots { display: flex; align-items: center; gap: 5px; padding: 6px 0; margin-top: 2px; }
        .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--text-muted); animation: pulse 1.2s ease infinite; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes pulse { 0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); } 40% { opacity: 1; transform: scale(1); } }

        /* INPUT */
        .input-area { padding: 20px 0 32px; flex-shrink: 0; border-top: 1px solid var(--border); }
        .input-wrap { display: flex; align-items: flex-end; gap: 10px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-full); padding: 12px 14px; transition: border-color 0.2s; }
        .input-wrap:focus-within { border-color: var(--border-hover); }
        .input-field { flex: 1; background: transparent; border: none; outline: none; color: var(--text); font-family: 'Poppins', sans-serif; font-size: 14.5px; font-weight: 300; line-height: 1.5; resize: none; min-height: 22px; max-height: 120px; overflow-y: auto; }
        .input-field::placeholder { color: var(--text-muted); }
        .send-btn { background: var(--accent); border: none; border-radius: var(--radius-full); width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; transition: opacity 0.2s; color: #0e0e0e; }
        .send-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .send-btn:not(:disabled):hover { opacity: 0.85; }
        @media (max-width: 480px) {
          .app { padding: 0 16px; }
          .header { padding: 20px 0 18px; flex-wrap: wrap; }
          .header-sub { display: none; }
          .suggestion { font-size: 12px; padding: 6px 11px; }
        }
      `}</style>

      <div className="app">
        {/* HEADER */}
        <header className="header">
          <div className="header-left">
            <div className="avatar" aria-hidden>🧠</div>
            <div>
              <div className="header-title">TiBot</div>
              <div className="header-sub">{c.agentSub}</div>
            </div>
          </div>
          <div className="header-right">
            <div className="lang-toggle">
              <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => switchLang("en")}>EN</button>
              <button className={`lang-btn ${lang === "fr" ? "active" : ""}`} onClick={() => switchLang("fr")}>FR</button>
            </div>
            <a href="https://www.tdeglane.com" className="header-link">{c.backLink}</a>
          </div>
        </header>

        {/* MESSAGES */}
        <div className="messages">
          {messages.map((msg, i) => {
            const { message, actions = [] } = msg.parsed;
            const isAssistant = msg.role === "assistant";
            const isLast = i === messages.length - 1;

            return (
              <div key={`${lang}-${i}`} className="msg">
                <div className={`msg-avatar ${msg.role}`} aria-hidden>
                  {isAssistant ? "🧠" : "→"}
                </div>
                <div className="msg-body">
                  <div className="msg-name">{isAssistant ? "TiBot" : c.you}</div>
                  <div className={`msg-text ${!isAssistant ? "user-text" : ""}`}>{message}</div>

                  {/* Suggestions (premier message uniquement) */}
                  {i === 0 && showSuggestions[lang] && (
                    <div className="suggestions">
                      {c.suggestions.map((q, j) => (
                        <button key={j} className="suggestion" onClick={() => sendMessage(q)}>{q}</button>
                      ))}
                    </div>
                  )}

                  {/* Action buttons */}
                  {isAssistant && actions.length > 0 && (
                    <div className="msg-actions">
                      {actions.map((action, j) => (
                        <button key={j} className="action-btn" onClick={() => handleAction(action)}>
                          {action.label}
                        </button>
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
              <div className="msg-avatar assistant" aria-hidden>🧠</div>
              <div className="msg-body">
                <div className="msg-name">TiBot</div>
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
    </>
  );
}
