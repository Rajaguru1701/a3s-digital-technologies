# A3S Digital Technologies — Website Analysis & Build Prompt

## 1. Brand & Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary brand | Teal | `#17A1AB` |
| Accent | Mint | `#4DC3B7` |
| Secondary | Purple | `#403458` |
| Tertiary accent | Blue | `#0065AB` |
| Dark background | Deep Navy | `#0A0E1A` (approx) |
| Light section background | Off-white | `#F7F9FA` |
| Text on dark | White / light gray | `#FFFFFF` / `#B8C0CC` |
| Text on light | Dark navy | `#1A1F2C` |

Design pattern: dark navy hero/footer/nav sections with a subtle glowing gradient background, alternating with light card-grid sections. Teal/mint for primary CTA buttons; purple and blue rotate as icon-badge accent colors across the 4 service cards.

## 2. Site Map / Pages

1. **Home** — Hero ("Build. Brand. Market. Grow."), stats bar (250+ projects, 98% satisfaction, 5+ years, 24/7 support), 4-service overview, client logos
2. **Services** — 4 detailed service blocks with icon, description, offering list, CTA
3. **Portfolio** — Filterable grid (All / Websites / Mobile Apps / UI-UX / Branding / Marketing / Animation / Business Solutions)
4. **Process** — 5-step journey (Understand → Plan → Create → Launch → Grow)
5. **About Us** — Who We Are, Mission/Vision/Approach/Promise, Why Choose Us
6. **Blog** — nav link present (content list, not detailed in source)
7. **Contact** — form (Name, Business Name, Phone, Email, Service Required, Project Requirement) + contact info + map
8. **FAQ** — accordion, 7 Q&A pairs
9. **Footer** — services list, contact, social links

## 3. Core Services (content source of truth)

1. **Web & App Development** — Business websites, E-commerce, Custom web apps, Mobile apps, Landing pages, Redesign & optimization
2. **UI/UX & Branding** — Logo & brand identity, Brand guidelines, UI/UX design, Website UI, App UI/UX, Marketing creatives
3. **Digital Marketing & Animation** — Strategy, Social media marketing, Lead generation, SEO, Paid advertising, 2D animation, Explainer videos
4. **IT Consulting & Business Solutions** — IT consultation, Digital transformation, CRM & business tools, Technology strategy

## 4. Stack Recommendation: React (not Angular)

This is a static, content/marketing-driven business site — not a data-heavy enterprise app — so **React** is the better fit:
- Faster builds, smaller bundles, better fit for static/SSG hosting (Vercel/Netlify)
- Tailwind CSS pairs naturally with React for this exact card/gradient-hero aesthetic
- Next.js (if used) gives SEO-friendly SSG for the Blog + lead-gen pages
- Angular's DI/RxJS/module overhead adds no benefit for a mostly-presentational site

**Recommended stack:** React + Vite (or Next.js for blog/SEO) + Tailwind CSS + React Router + Framer Motion (micro-animations) + React Hook Form (contact form validation)

---

## 5. Implementation Prompt (paste into Claude Code / Cursor / any AI coding tool)

```
Build a responsive, static multi-page marketing website for "A3S Digital Technologies," 
a digital solutions agency based in Madurai, Tamil Nadu, India.

STACK: React 18 + Vite + Tailwind CSS + React Router DOM + Framer Motion. 
Use functional components and hooks only. No backend — contact form can be a 
static UI (optionally wired to Formspree/EmailJS).

BRAND COLORS (define as Tailwind theme extensions):
- primary teal: #17A1AB
- mint accent: #4DC3B7
- secondary purple: #403458
- tertiary blue: #0065AB
- dark navy background: #0A0E1A
- light section background: #F7F9FA

GLOBAL LAYOUT:
- Sticky top navbar (logo left, links: Home, Services, Portfolio, About Us, Blog, 
  Contact; "Get a Free Consultation" teal pill button right; mobile hamburger menu)
- Footer with 4 columns: brand blurb, quick links, services list, social icons + 
  copyright "© 2026 A3S Digital Technologies. All Rights Reserved."

PAGES TO BUILD:

1. HOME (/)
   - Dark navy hero with radial gradient glow, eyebrow tag "DIGITAL SOLUTIONS FOR 
     GROWING BUSINESSES", H1 "Build. Brand. Market. Grow." (last word in mint), 
     supporting paragraph, two CTAs (primary teal "Get a Free Consultation", 
     outline "Explore Our Services"), hero mockup image area (laptop + phone)
   - Light card "End-to-End Digital Solutions Under One Roof" with 4 service 
     mini-cards (icon, title, 1-line desc, "Learn More" link)
   - Dark stats bar: 250+ Projects Completed | 98% Client Satisfaction | 
     5+ Years Experience | 24/7 Support Available, plus "Trusted by" client logo row
   
2. SERVICES (/services)
   - Page header (light, breadcrumb "Home / Services")
   - 4 alternating service sections (icon badge in rotating teal/purple/blue, 
     title, description, two-column bullet list of offerings, colored CTA button, 
     illustration on alternating side)

3. PROCESS (/process, or section within Services)
   - Breadcrumb "Home / Process", H1 "Our Process"
   - 5-step horizontal stepper (numbered circles 01-05, connecting arrows, 
     rotating teal/purple/blue): Understand, Plan, Create, Launch, Grow — each 
     with 1-line description
   - Dark CTA banner "Ready to start your project?" with rocket illustration and 
     teal button

4. PORTFOLIO (/portfolio)
   - Breadcrumb "Home / Portfolio", H1 "Our Portfolio"
   - Filter pill bar: All, Websites, Mobile Apps, UI/UX, Branding, Marketing, 
     Animation, Business Solutions
   - Responsive image grid (4 cols desktop) of project cards, each with thumbnail, 
     title, category subtitle
   - "View More Our Work" button

5. ABOUT US (/about)
   - Dark header "About A3S Digital Technologies" / "Your digital growth partner"
   - Two-column "Who We Are" text + office photo
   - 4-card row: Our Mission, Our Vision, Our Approach, Our Promise
   - "Why Choose Us?" two-column checklist (6 items with check icons)
   - Dark CTA strip "Let's build something amazing for your business." + 
     "Get in Touch" button

6. CONTACT (/contact)
   - Dark header "Contact Us"
   - Two-column: left = form (Name, Email, Phone, Message, Send button in teal); 
     right = Contact Information card (Address, Phone, Email, Working Hours) with icons
   - Embedded map placeholder below

7. FAQ (accordion component, can live on About or its own /faq page)
   - 7 expandable Q&A items using the content below

CONTENT (use verbatim for copy):
- Tagline: "Build. Brand. Market. Grow."
- Services: Web & App Development, UI/UX & Branding, Digital Marketing & 
  Animation, IT Consulting & Business Solutions (full offering lists provided 
  in the doc above)
- Address: 51W, Thiruvalluvar Street, Koodal Nagar, Madurai, Tamil Nadu – 625018
- Phone: 070106 46001
- Email: hello@a3sdigital.com
- Working Hours: Monday – Saturday 9:30 AM – 7:00 PM, Sunday Closed

DESIGN REQUIREMENTS:
- Mobile-first, fully responsive (stack to single column < 768px)
- Consistent 8px spacing scale, rounded-xl cards with soft shadows on light 
  sections, subtle Framer Motion fade/slide-in on scroll for cards and sections
- Icon set: use lucide-react for all icons
- Buttons: solid teal/mint gradient for primary, outline white/teal for secondary
- Ensure WCAG AA contrast for text on both dark and light backgrounds

DELIVERABLE: 
Fully working Vite React project with React Router routes for each page, 
componentized (Navbar, Footer, Hero, ServiceCard, StepCard, PortfolioGrid, 
StatBar, FAQAccordion, ContactForm), Tailwind config with the brand palette, 
and placeholder images/illustrations where real assets aren't provided.
```

---

Feel free to hand this prompt as-is to a coding assistant, or ask me to scaffold the React project directly here.
