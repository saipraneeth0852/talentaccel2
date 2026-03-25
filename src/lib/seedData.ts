// All hardcoded content — used for seeding Firestore once

export const seedServices = [
  {
    title: "Talent Acquisition",
    desc: "We help companies hire the right talent quickly and efficiently.",
    bullets: ["Permanent Hiring", "Contract Staffing", "Executive Search", "Tech & AI Hiring"],
    icon: "Users",
    order: 0,
  },
  {
    title: "Dedicated Hiring Teams",
    desc: "Build your hiring engine with a dedicated TalentAccel recruitment team.",
    bullets: ["Dedicated Recruiter", "Sourcing Specialist", "Hiring Analytics & Reporting"],
    icon: "UserCheck",
    order: 1,
  },
  {
    title: "Offshore / India Team Buildout",
    desc: "We help global companies build high-quality teams in India.",
    bullets: ["Talent Sourcing & Hiring", "HR & Payroll Setup", "Compliance Management", "Team Scaling Support"],
    icon: "Globe",
    order: 2,
  },
  {
    title: "Payroll & Compliance Services",
    desc: "Simplify payroll and statutory compliance with our managed HR services.",
    bullets: ["Payroll Processing", "PF / ESIC / PT Filings", "Labour Law Compliance", "Compliance Audits"],
    icon: "Calculator",
    order: 3,
  },
  {
    title: "HR Advisory & Operations",
    desc: "End-to-end HR support for growing companies.",
    bullets: ["HR Policy Development", "HRMS Implementation", "Performance Management", "Employee Lifecycle"],
    icon: "Settings",
    order: 4,
  },
];

export const seedIndustries = [
  { label: "SaaS & Product Companies", icon: "Code", order: 0 },
  { label: "AI / Data Science", icon: "Brain", order: 1 },
  { label: "FinTech", icon: "Landmark", order: 2 },
  { label: "Telecom & Networking", icon: "Radio", order: 3 },
  { label: "Electronics & Hardware", icon: "Cpu", order: 4 },
  { label: "Startups & GCCs", icon: "Rocket", order: 5 },
];

export const seedCaseStudies = [
  {
    tag: "SaaS Startup",
    title: "Scaling a SaaS Startup's Engineering Team",
    description: "Hired 15 engineers in 2 months, reducing hiring time by 40% and enabling the startup to hit its product milestone on schedule.",
    metrics: [
      { value: "15", label: "Engineers Hired" },
      { value: "2", label: "Months" },
      { value: "40%", label: "Faster Hiring" },
    ],
    imageUrl: "",
    order: 0,
  },
  {
    tag: "Offshore Team",
    title: "Building an Offshore Engineering Team in India",
    description: "Built a 25-member India team with full hiring, HR, and payroll operations managed end-to-end by TalentAccel.",
    metrics: [
      { value: "25", label: "Team Members" },
      { value: "10", label: "Weeks" },
      { value: "60%", label: "Cost Savings" },
    ],
    imageUrl: "",
    order: 1,
  },
];

// Content sourced from talentaccel-website1/src/lib/blogData.ts (Section[] → markdown)
export const seedBlogs = [
  {
    tag: "Hiring",
    title: "Hiring Strategies for Scaling Startups",
    description: "How to build a repeatable hiring process that grows with your company — from first engineering hire to a 50-person team.",
    readTime: "5 min",
    imageUrl: "",
    order: 0,
    content: `The jump from 10 to 50 people is where most startups make their biggest hiring mistakes. What worked when you were hiring friends of friends breaks down fast once speed and volume increase. Here's how to build a process that scales.

## 1. Define the role before you open it

The most common cause of bad hires is a vague job spec. Before posting a role, align internally on three things:

- What does success look like in 90 days?
- What are the non-negotiable skills vs. trainable ones?
- Who owns the hiring decision — and who has veto power?

## 2. Build a structured interview process

Unstructured interviews are essentially random. Research consistently shows structured interviews with defined criteria and scoring outperform ad-hoc conversations. At minimum, use a scorecard with 4–5 criteria rated 1–5 after every interview.

## 3. Create a talent pipeline, not just a funnel

Most companies only hire when they have an open role. Fast-growing startups treat talent like a pipeline — keeping warm relationships with strong candidates before a role opens. Tools like a simple ATS or even a shared spreadsheet can track 'future candidates' by domain.

## 4. Use an RPO partner for speed and scale

As you hit 30+ hires a year, an in-house recruiter can't keep up — especially for niche or senior roles. A Recruitment Process Outsourcing (RPO) partner like TalentAccel gives you dedicated recruiters, sourcing infrastructure, and market intelligence without the full-time headcount cost.

## 5. Measure what matters

Track time-to-fill, offer acceptance rate, and 90-day retention per role. These three numbers will tell you where your process is breaking down faster than any post-mortem.

Hiring well is a repeatable process — not a talent for spotting greatness. Build the system, and the right people follow.`,
  },
  {
    tag: "Compliance",
    title: "HR Compliance Checklist for Indian Startups",
    description: "Essential compliance steps every startup in India needs to follow: PF, ESIC, PT, POSH, Shops & Establishment and more.",
    readTime: "4 min",
    imageUrl: "",
    order: 1,
    content: `Indian labour law is layered, state-specific, and frequently updated — and most early-stage startups don't find out they've missed something until an audit or a departing employee files a complaint. Here's the essential checklist.

## Provident Fund (PF)

Mandatory for companies with 20+ employees. Both employer and employee contribute 12% of basic salary. Registration with EPFO is required before the 20-employee threshold.

- File ECR (Electronic Challan cum Return) monthly
- Employer contribution: 12% basic + DA
- Employee contribution: 12% basic + DA

## ESIC (Employee State Insurance)

Applicable to employees earning up to ₹21,000/month in companies with 10+ employees (in most states). Covers medical, disability, and maternity benefits.

- Employer contribution: 3.25% of gross wages
- Employee contribution: 0.75% of gross wages
- Biannual returns required

## Professional Tax (PT)

State-level tax. Varies by state — Karnataka, Maharashtra, Tamil Nadu and others have different slabs and filing frequencies. Not applicable in all states.

## POSH (Prevention of Sexual Harassment)

Mandatory for all companies with 10+ employees. You must constitute an Internal Complaints Committee (ICC), conduct annual awareness sessions, and file an annual report with the District Officer.

## Shops & Establishment Act

Registration required in each state where you operate, typically within 30 days of starting business. Governs working hours, leave, and employee records.

## Gratuity

Payable to employees who complete 5 years of continuous service. Calculated as 15 days' last drawn salary per year of service.

This list covers the minimum. Depending on your industry and headcount, additional compliances around contract labour, maternity benefits, and the new Labour Codes may apply. Working with an HR compliance partner ensures you stay ahead of changes without building in-house expertise from scratch.`,
  },
  {
    tag: "AI Talent",
    title: "How to Hire AI Engineers in India",
    description: "A practical guide to sourcing, evaluating, and closing top AI/ML talent in the Indian market amid rising demand.",
    readTime: "6 min",
    imageUrl: "",
    order: 2,
    content: `Demand for AI/ML engineers in India has outpaced supply for three straight years. Every company — from funded startups to global enterprises — is chasing the same 5,000 candidates with real production ML experience. Here's how to compete effectively.

## Understanding the market

India has a large pool of engineers with AI exposure, but far fewer with genuine production experience deploying models at scale. The talent pyramid looks roughly like:

- Tier 1: 5,000–8,000 engineers with strong production ML (LLMs, MLOps, model serving)
- Tier 2: 30,000–50,000 engineers with solid fundamentals and 1–2 years in AI/ML projects
- Tier 3: Large pool with academic exposure and bootcamp training

## Where to source

LinkedIn and Naukri surface only the active job-seekers — which is a small minority of Tier 1 talent. Better channels:

- GitHub — look at contributors to popular ML frameworks and libraries
- Kaggle — top Grandmasters and Masters are often open to conversations
- AI research communities — NeurIPS, ICLR workshop attendees from Indian institutions
- Internal referrals — your own ML engineers know who's good

## Evaluating candidates

Avoid the trap of LeetCode-heavy interviews for AI roles. Strong AI engineers often aren't competitive programmers. Instead, assess:

- A take-home project on a real problem (not a toy dataset)
- System design for an ML pipeline end-to-end
- Discussion of a past model — decisions made, tradeoffs, failures
- Fundamentals: loss functions, gradient descent, regularization, evaluation metrics

## Closing offers

Top AI talent has multiple offers. What moves them beyond salary:

- Technical charter: are they building greenfield or maintaining legacy?
- Research time: access to compute and freedom to experiment
- Team quality: who are their future peers and manager?
- Equity: meaningful ESOP with clear vesting and a realistic liquidity path

The companies winning AI talent in India aren't always paying the most — they're telling the most compelling technical story. If you can't articulate what your AI team is building and why it matters, the best candidates will choose elsewhere.`,
  },
  {
    tag: "Offshore",
    title: "Building Offshore Teams Successfully",
    description: "Key lessons from companies that built high-performing distributed teams in India — from hiring to HR operations.",
    readTime: "7 min",
    imageUrl: "",
    order: 3,
    content: `India has become the world's offshore talent hub — not just for software development, but for data, operations, finance, and customer success. Yet most offshore engagements underperform, not because Indian talent is lacking, but because the setup is wrong.

## Mistake 1: Hiring before defining the model

Before your first offshore hire, decide which model fits your needs:

- Staff augmentation: individual contractors working within your team
- Dedicated offshore team: a full pod (engineers, QA, PM) working exclusively for you
- Managed services: an agency runs a function end-to-end

## Mistake 2: Treating offshore as 'cheap onshore'

Offshore teams work best when they own a complete scope — a service, a feature area, a business process. Giving offshore teams only the 'leftover' work creates resentment and retention problems. The best offshore setups treat the team as a peer, not a vendor.

## Getting hiring right in India

The Indian job market is competitive, especially in Tier 1 cities. Key practices:

- Offer competitive CTC benchmarked to local market (not converted from USD)
- Move fast — top candidates have 3–5 offers within a week
- Invest in employer branding; candidates research you on Glassdoor and LinkedIn
- Consider Tier 2 cities (Pune, Hyderabad, Chennai) for a better talent-to-cost ratio

## HR operations for offshore teams

Running an offshore team means navigating Indian labour law, payroll compliance, and benefits — which differ significantly from Western markets. You have two options:

- Set up an Indian entity (Private Limited) — takes 3–6 months, significant overhead
- Use an Employer of Record (EOR) — faster, compliant, and scales without entity setup

## Making the team feel part of the company

The biggest driver of offshore team performance isn't salary — it's inclusion. Practices that work: overlap hours with headquarters, regular video calls (not just async Slack), quarterly in-person visits, and including offshore leads in strategic conversations.

Companies that treat their offshore team as an extension rather than a service provider consistently outperform. The investment in culture pays back in retention, quality, and speed.`,
  },
  {
    tag: "HR Advisory",
    title: "When Should a Startup Hire Its First HR Person?",
    description: "The signals that tell you it's time to invest in structured HR — and what to prioritise in your first year.",
    readTime: "5 min",
    imageUrl: "",
    order: 4,
    content: `Most startup founders wait too long to hire HR. By the time they bring someone in, there's usually a compliance gap, a culture problem brewing, or a key hire who left because of poor onboarding. Here's how to read the signals earlier.

## The headcount thresholds

As a rough guide:

- 0–15 people: Founder or a senior ops person can manage HR informally
- 15–30 people: You need dedicated HR bandwidth — ideally a senior generalist
- 30–80 people: Full HR team: generalist, recruiter, payroll/compliance specialist
- 80+ people: HR Business Partners by function, dedicated L&D, structured comp bands

## Non-headcount signals that it's time

Sometimes the signal isn't headcount — it's something else:

- You've had a compliance miss (PF not filed, POSH committee not constituted)
- A manager is handling a performance issue badly and you have no process
- Two people have left citing 'culture' in exit interviews
- You're about to raise a round and investors are asking about HR policies
- Hiring is taking 3x longer than it should

## What to prioritise in year one

Your first HR hire should focus on foundations, not perks:

- Compliance: PF, ESIC, PT, POSH, S&E registration — get clean
- Hiring process: structured JDs, interview scorecard, ATS setup
- Onboarding: a 30-60-90 day plan that actually runs
- Offer letters and employment contracts: standardised and legally reviewed
- Performance review cycle: even a lightweight half-year check-in is better than nothing

## Fractional HR as a bridge

If a full-time HR hire isn't justified yet, a fractional HR partner — someone who works 2–3 days a week — can get your foundations in place for a fraction of the cost. This is often the right answer between 10 and 25 people.

The cost of not having HR shows up slowly — in attrition, compliance penalties, and the cultural debt that accumulates when no one owns the employee experience. Act before the symptoms become crises.`,
  },
  {
    tag: "Payroll",
    title: "Payroll Compliance Basics for Growing Companies",
    description: "A clear guide to PF, ESIC, PT, TDS, and LWF filings — what they are, who they apply to, and how to stay compliant.",
    readTime: "6 min",
    imageUrl: "",
    order: 5,
    content: `Payroll compliance in India involves more moving parts than most founders expect. Miss a filing and you're looking at penalties, employee dissatisfaction, and potential legal action. Here's a plain-English breakdown of every component.

## Provident Fund (PF / EPF)

Applicable to all companies with 20+ employees. Contribution is 12% of basic salary from both employer and employee.

- Monthly ECR filing due by the 15th of the following month
- Annual PF return (Form 3A/6A)
- Penalties for late payment: 12–18% interest p.a. + damages up to 100% of arrears

## ESIC

For employees earning ≤ ₹21,000/month, in companies with 10+ employees (varies by state).

- Monthly contribution filing due by the 15th
- Half-yearly returns in May and November
- ESIC provides medical, sickness, maternity, and disability benefits

## Professional Tax (PT)

A state-level deduction from employee salaries. Rates and slabs differ by state. Some states (Delhi, Rajasthan) don't levy PT at all.

- Karnataka: ₹200/month for salaries above ₹15,000
- Maharashtra: slab-based up to ₹2,500/year
- Tamil Nadu: ₹208/month for salaries above ₹21,000

## TDS on Salary (Section 192)

Employers must deduct TDS based on each employee's declared tax regime and investment proofs. Monthly TDS payment is due by the 7th of the following month. Quarterly TDS returns (24Q) must be filed.

## Labour Welfare Fund (LWF)

State-specific contribution by both employer and employee. Frequency varies — monthly, quarterly, or annually. Not applicable in all states.

## Staying compliant

A payroll compliance calendar is non-negotiable once you cross 20 employees:

- 15th of every month: PF + ESIC payments
- 7th of every month: TDS payment
- Quarterly: TDS returns (24Q), PT returns (state-dependent)
- Annually: PF annual return, ESIC annual return, Form 16 issuance to employees

Outsourcing payroll compliance to a specialist firm is usually more cost-effective than building in-house expertise until you cross 200 employees. The penalty risk alone justifies the investment.`,
  },
];