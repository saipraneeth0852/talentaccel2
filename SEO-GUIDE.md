# TalentAccel Website — SEO Audit & Implementation Guide

> Written for a beginner. Each section explains the "why" before the "how".

---

## Part 1 — Current SEO Audit (What You Have vs. What You Need)

### What exists today (the good parts)

| Item | Status |
|------|--------|
| `<html lang="en">` on the page | DONE |
| Page title in `index.html` | DONE |
| Meta description in `index.html` | DONE |
| Open Graph tags in `index.html` | DONE |
| Twitter Card tags in `index.html` | DONE |
| Custom `SEO.tsx` component for per-page titles/descriptions | DONE |
| `robots.txt` file allowing all crawlers | DONE |
| One `<h1>` tag per page | DONE |
| Image alt text on most images | DONE |
| Correct `<h2>`/`<h3>` heading hierarchy | DONE |

### What is broken or missing (priority order)

| # | Problem | Impact | Difficulty |
|---|---------|--------|------------|
| 1 | `/og-image.jpg` does not exist in `public/` — every social share shows no image | HIGH | Easy fix |
| 2 | No `sitemap.xml` — Google cannot discover 18 pages efficiently | HIGH | Easy fix |
| 3 | `robots.txt` has no `Sitemap:` line and doesn't block `/admin` routes | MEDIUM | Easy fix |
| 4 | About, Blog, BlogPost, Contact pages have NO `<SEO>` component | HIGH | Easy fix |
| 5 | Blog post pages have no per-article title, description, or OG image | HIGH | Medium |
| 6 | All 8 service pages use templated boilerplate descriptions — no keyword variety | HIGH | Content work |
| 7 | No JSON-LD structured data anywhere (Organization, BlogPosting, etc.) | MEDIUM | Medium |
| 8 | SPA limitation — social crawlers (Facebook, LinkedIn) skip JavaScript and see only homepage tags | HIGH | Hard (needs prerendering) |
| 9 | Missing `og:locale`, `og:image:width/height`, `twitter:site` | LOW | Easy fix |
| 10 | No Apple Touch Icon | LOW | Easy fix |
| 11 | 404 page is not marked `noindex` | LOW | Easy fix |

---

## Part 2 — SEO Basics Explained for a Beginner

Before we fix things, understand what SEO actually does and why.

### How Google finds your website

1. **Crawling** — Google sends a bot (Googlebot) that follows links and reads your HTML.
2. **Indexing** — Google saves a copy of your page and understands what it is about.
3. **Ranking** — When someone searches, Google picks the most relevant, trustworthy pages.

You have control over steps 1 and 2. Step 3 follows naturally if you do 1 and 2 well.

### The three pillars of SEO

```
Technical SEO       On-Page SEO         Off-Page SEO
─────────────       ───────────         ────────────
Can Google read     Is the content      Do other websites
your site at all?   relevant & clear?   link to you?

robots.txt          Titles & H1s        Backlinks
sitemap.xml         Meta descriptions   Google Business
page speed          Keywords in text    Social signals
mobile friendly     Image alt text
HTTPS               Structured data
```

This guide focuses on Technical and On-Page SEO — the two you fully control.

---

## Part 3 — Step-by-Step Implementation Plan

Work through these in order. Each step builds on the previous.

---

### Step 1 — Create the OG image (30 minutes)

**What it is:** When someone shares your link on LinkedIn, Slack, Twitter, or WhatsApp, the platform shows a preview card with an image. That image is the OG (Open Graph) image.

**Why it matters:** A link with a compelling image gets 3–5x more clicks than a plain text link. Right now, every share of your site shows nothing because the image file is missing.

**How to fix:**

1. Create a 1200×630 pixel image (standard OG size) with your logo, tagline, and brand colors.
   - Use Canva (free) — search "Open Graph Image" template
   - Or use Figma with those exact dimensions
2. Export it as a JPG. Keep it under 300KB.
3. Name it `og-image.jpg` and place it in your `public/` folder.
4. Done — your existing code already references this path.

**Bonus:** Create a second version for blog posts. Name it `og-image-blog.jpg` and place it in `public/` too.

---

### Step 2 — Fix robots.txt (10 minutes)

**What it is:** A text file that tells search engine bots which pages they are allowed to crawl. It also tells them where your sitemap is.

**Current file location:** `public/robots.txt`

**Replace the content with:**

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /admin

Sitemap: https://talentaccel.com/sitemap.xml
```

**Why disallow `/admin`?** Admin pages behind login have no value in search results and waste Google's crawl budget.

**Why add the Sitemap line?** This tells Google exactly where to find your sitemap without you having to submit it manually every time.

---

### Step 3 — Create sitemap.xml (45 minutes)

**What it is:** An XML file that lists every page on your site with its URL, last-modified date, and priority. Think of it as a table of contents for Google.

**Why it matters:** Without a sitemap, Google discovers pages by following links. New pages or pages with few internal links can take weeks or months to be indexed. A sitemap fixes this.

**Create the file at `public/sitemap.xml`:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Home -->
  <url>
    <loc>https://talentaccel.com/</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Main pages -->
  <url>
    <loc>https://talentaccel.com/about</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/offshore-teams</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/careers</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/contact</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/case-studies</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/industries</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/blog</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Service pages -->
  <url>
    <loc>https://talentaccel.com/services/talent-acquisition</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/services/dedicated-teams</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/services/hr-operations</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/services/payroll-compliance</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/services/hr-advisory</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/services/learning-development</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/services/employee-experience</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://talentaccel.com/services/extended-workforce</loc>
    <lastmod>2026-03-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>
```

**Note:** Blog post URLs come from Firestore document IDs. Once you have real articles published, add their URLs here, or better yet — automate sitemap generation (covered in the advanced section).

---

### Step 4 — Add `<SEO>` to the four missing pages (1 hour)

**Why this matters:** The About, Blog, BlogPost, and Contact pages currently show your homepage title and description on Google and in all social share previews. This is confusing for users and hurts your rankings.

**The four files to edit:**

**a) `src/pages/About.tsx`** — Add at the top of the return statement:
```tsx
<SEO
  title="About TalentAccel — Our Story, Mission & Team"
  description="Meet the team behind TalentAccel. We help startups and growing companies build high-performance HR systems and offshore teams in India."
  keywords="about TalentAccel, HR company India, offshore HR team, startup HR solutions"
/>
```

**b) `src/pages/Blog.tsx`** — Add at the top of the return statement:
```tsx
<SEO
  title="HR Insights & Blog — TalentAccel"
  description="Practical guides, case studies, and expert insights on HR operations, offshore hiring, payroll compliance, and building high-performance teams."
  keywords="HR blog, offshore hiring tips, payroll compliance guide, startup HR"
/>
```

**c) `src/pages/Contact.tsx`** — Add at the top of the return statement:
```tsx
<SEO
  title="Contact TalentAccel — Get in Touch"
  description="Ready to build your team? Contact TalentAccel for a free consultation on offshore hiring, HR operations, and talent acquisition in India."
  keywords="contact TalentAccel, HR consultation, offshore hiring inquiry"
/>
```

**d) `src/pages/BlogPost.tsx`** — This one needs per-article data. Add SEO after the article loads:
```tsx
{article && (
  <SEO
    title={article.title}
    description={article.description}
    image={article.imageUrl}
    keywords={article.tag}
  />
)}
```

---

### Step 5 — Rewrite service page descriptions (2–3 hours)

**Why this matters:** Right now all 8 service pages have this description:
> "Learn how TalentAccel's expert [Service] can accelerate your company's growth."

That sentence could describe any company. Google ranks pages that clearly answer a specific search query. A user searching "payroll compliance India startup" should land on your payroll page, not your homepage.

**Each description should:**
- Be 140–160 characters long
- Include the specific service name + "India" + the audience (startup, SMB, etc.)
- Answer: what do you do, for whom, and what is the result?

**Rewritten examples:**

| Page | Current | Recommended |
|------|---------|-------------|
| Talent Acquisition | "Learn how TalentAccel's expert Talent Acquisition..." | "End-to-end recruitment and hiring solutions for startups in India. We source, screen, and onboard top talent 40% faster than traditional agencies." |
| Payroll & Compliance | "Learn how TalentAccel's expert Payroll..." | "Accurate payroll processing and statutory compliance for Indian startups. PF, ESI, TDS, and labour law — fully managed so you never face a penalty." |
| Dedicated Teams | "Learn how TalentAccel's expert Dedicated Teams..." | "Build a dedicated offshore tech or ops team in India within 30 days. We handle hiring, onboarding, payroll, and HR — you focus on your product." |
| HR Operations | "Learn how TalentAccel's expert HR Operations..." | "Outsourced HR operations for growing startups — from employee onboarding and HRMS setup to compliance reporting and policy management." |

Apply the same logic to all 8 service pages.

---

### Step 6 — Add JSON-LD structured data (2 hours)

**What it is:** A block of machine-readable data embedded in your page that tells Google exactly what your business is. It powers "rich results" in Google Search — things like star ratings, FAQ dropdowns, and business info panels.

**Why it matters:** Without structured data, Google has to guess. With it, you can get enhanced search listings that stand out visually and get more clicks.

**Three schemas you need:**

**a) Organization schema — add once to `index.html` in the `<head>`:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TalentAccel",
  "url": "https://talentaccel.com",
  "logo": "https://talentaccel.com/logo.svg",
  "description": "TalentAccel provides scalable HR solutions, dedicated offshore teams, and talent acquisition services for startups and growing companies.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/talentaccel",
    "https://twitter.com/talentaccel"
  ]
}
</script>
```

**b) WebPage schema — add via SEO.tsx for each page:**

Update your `SEO.tsx` component to accept an optional `schema` prop and inject it as a `<script type="application/ld+json">` tag.

**c) BlogPosting schema — add to BlogPost.tsx for each article:**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[article title]",
  "description": "[article description]",
  "image": "[article imageUrl]",
  "author": {
    "@type": "Organization",
    "name": "TalentAccel"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TalentAccel",
    "logo": {
      "@type": "ImageObject",
      "url": "https://talentaccel.com/logo.svg"
    }
  },
  "datePublished": "[article createdAt]"
}
```

---

### Step 7 — Submit to Google Search Console (30 minutes, one-time)

**What it is:** A free Google tool that lets you see how your site appears in search, track ranking positions, and submit your sitemap directly to Google.

**Why it matters:** Even with a perfect sitemap, Google may take weeks to find your site organically. Submitting to Search Console triggers indexing within 24–48 hours.

**Steps:**
1. Go to https://search.google.com/search-console
2. Add property → URL prefix → enter `https://talentaccel.com`
3. Verify ownership — Google will give you an HTML meta tag to add to your `index.html`
4. Once verified, go to Sitemaps → Add a new sitemap → enter `sitemap.xml`
5. Google will crawl and index your pages

**Also useful:** Search Console will flag any crawl errors, mobile usability issues, and Core Web Vitals problems — all important for rankings.

---

### Step 8 — Fix the SPA crawlability problem (Advanced, 1–2 days)

**What is the problem?**

Your site is a React SPA (Single Page Application). When Google crawls it, it loads the JavaScript and sees the correct per-page content. But Facebook, LinkedIn, Slack, and WhatsApp use simpler crawlers that do NOT execute JavaScript. They read only the static HTML of `index.html` — which always shows the homepage title and description regardless of the URL.

This means:
- A blog post shared on LinkedIn shows "TalentAccel | Scalable HR Solutions" instead of the article title
- A service page shared on Slack shows the homepage image instead of a relevant image

**Solution options (pick one):**

| Option | How it works | Difficulty | Cost |
|--------|-------------|------------|------|
| **Prerendering with `vite-plugin-prerender`** | At build time, generates a static HTML file for each route. Fast, free, no server needed. | Medium | Free |
| **Cloudflare Pages with Edge Functions** | A small edge function serves pre-rendered HTML to bots while normal users get the SPA. | Hard | Free tier available |
| **Convert to Remix or Next.js** | Full server-side rendering. The most complete solution but requires rewriting the app. | Very Hard | Free/hosting costs |

**Recommended for you right now:** Implement `vite-plugin-prerender` — it is the least invasive option and works well for a site with static routes like this one.

```bash
npm install vite-plugin-prerender
```

Then configure it in `vite.config.ts` with your list of routes.

---

### Step 9 — Add missing meta tags to index.html (30 minutes)

Update `index.html` to add:

```html
<!-- Existing tags stay, add these -->
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content="TalentAccel" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:site" content="@talentaccel" />

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

<!-- Theme color (matches your brand) -->
<meta name="theme-color" content="#0A72FF" />
```

---

### Step 10 — Mark 404 page as noindex (10 minutes)

In `src/pages/NotFound.tsx`, add at the top of the return:
```tsx
<SEO title="Page Not Found" description="This page does not exist." />
```

Then update `SEO.tsx` to accept a `noIndex` prop and inject `<meta name="robots" content="noindex, nofollow">` when true.

---

## Part 4 — Should You Have This Much Content?

### What you currently have

Your site has approximately:
- 1 homepage with 8+ sections
- 8 individual service pages (each with full hero + content sections)
- 1 offshore teams page
- 1 industries page
- 1 case studies page
- 1 blog listing page
- 1 about page
- 1 careers page
- 1 contact page

That is 18 publicly accessible routes. For a B2B HR services company, this is appropriate and correct.

### The honest answer: the content amount is fine — the content quality needs work

**What is working well:**
- Having separate pages per service is excellent for SEO. Each service page can rank independently for its own search terms (e.g. "payroll compliance India" vs "talent acquisition startup India").
- The blog section is smart — blog content drives organic search traffic over time.
- Case studies are valuable social proof and also rank for long-tail searches.

**What is hurting you despite having the right structure:**

1. **Thin service descriptions.** Each service page currently shows a templated 1-line description. A page with only 200–300 words of unique content is unlikely to rank. Each service page should have at least 500–800 words of genuine, specific content covering:
   - What the service is
   - What problems it solves
   - Who it is for
   - How your process works (step by step)
   - Pricing or pricing model (even approximate)
   - FAQs (3–5 questions)

2. **The blog has no articles yet.** A blog section with no posts sends a negative signal to both users and crawlers. You should publish at minimum 5 articles before launching. Target articles like:
   - "How to set up compliant payroll for a 10-person startup in India"
   - "Offshore vs. outsourcing: what's the difference for a startup?"
   - "Top 5 HR mistakes early-stage startups make"

3. **Case studies need specifics.** Vague metrics like "3x growth" are less compelling than "Hired 12 engineers in 45 days at 40% below market rate for a Series B SaaS startup." Real, specific numbers build trust and rank for branded search queries.

### Content priority checklist

```
Priority 1 (do before launch)
 - OG image exists and loads
 - Each page has a unique title + description
 - robots.txt and sitemap.xml are correct
 - Google Search Console is set up

Priority 2 (first month after launch)
 - Publish 5 blog articles targeting specific search queries
 - Rewrite service page descriptions (100-200 chars each)
 - Add JSON-LD Organization schema

Priority 3 (months 2–3)
 - Expand each service page to 500+ words
 - Add FAQ sections to service pages
 - Add JSON-LD BlogPosting to blog posts
 - Implement prerendering for social share previews

Priority 4 (ongoing)
 - Publish 2 blog articles per month
 - Build backlinks (guest posts, PR, directories)
 - Monitor Google Search Console weekly
 - Track keyword rankings monthly
```

---

## Part 5 — Keyword Research Starting Point

Use these free tools to find what your potential customers are actually searching for:

- **Google Search Console** (once live) — shows exact search queries bringing people to your site
- **Google Suggest** — type a partial query into Google, the autocomplete shows real searches
- **Ahrefs Free Keyword Generator** — enter "HR outsourcing India" and see related terms
- **AnswerThePublic** — enter "offshore team" to see question-based searches

**Seed keywords to research:**

| Service | Seed keyword | Target variation |
|---------|-------------|-----------------|
| Talent Acquisition | "startup hiring India" | "how to hire engineers India startup" |
| Offshore Teams | "offshore development team India" | "dedicated offshore team cost India" |
| Payroll Compliance | "startup payroll India" | "PF ESI compliance startup India" |
| HR Operations | "HR outsourcing India" | "outsourced HR for startups India" |

---

## Part 6 — Tools You Need (All Free to Start)

| Tool | What it does | URL |
|------|-------------|-----|
| Google Search Console | Track rankings, submit sitemap, find crawl errors | search.google.com/search-console |
| Google PageSpeed Insights | Check page load speed (important for rankings) | pagespeed.web.dev |
| Ahrefs Webmaster Tools | Free backlink checker + site audit | ahrefs.com/webmaster-tools |
| Screaming Frog (free tier) | Crawls your site like Google does, finds broken links | screamingfrog.co.uk |
| Schema.org Markup Validator | Test your JSON-LD structured data | validator.schema.org |
| Open Graph Debugger | Test how your OG tags look when shared | developers.facebook.com/tools/debug |
| Twitter Card Validator | Test Twitter preview cards | cards-dev.twitter.com/validator |

---

## Quick Reference — Files to Change

| File | Changes needed |
|------|---------------|
| `public/og-image.jpg` | CREATE — 1200×630px brand image |
| `public/robots.txt` | Add `Sitemap:` line, add `Disallow: /admin/` |
| `public/sitemap.xml` | CREATE — list all 18 public routes |
| `index.html` | Add `og:locale`, `og:image` dimensions, `twitter:site`, Apple Touch Icon, theme-color, Organization JSON-LD |
| `src/pages/About.tsx` | Add `<SEO>` component |
| `src/pages/Blog.tsx` | Add `<SEO>` component |
| `src/pages/BlogPost.tsx` | Add per-article `<SEO>` component using article data |
| `src/pages/Contact.tsx` | Add `<SEO>` component |
| `src/components/SEO.tsx` | Add `noIndex` prop support, add JSON-LD schema injection |
| All 8 service page `.tsx` files | Rewrite `description` prop with real, keyword-rich copy |

---

*Document last updated: 2026-03-27*
*Audit performed against codebase at `/Users/dotspeaks/Documents/talentaccel-website`*
