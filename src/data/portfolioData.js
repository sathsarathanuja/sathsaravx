// Placeholder URLs (example.com, a bare github.com, '#') are hidden in the UI until real links are added.
const placeholderLinks = new Set(['https://example.com', 'https://github.com', 'https://facebook.com', '#', ''])
export const isRealLink = (url) => Boolean(url) && !placeholderLinks.has(url.replace(/\/$/, ''))

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export const skills = [
  'React', 'Vite', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'UI/UX', 'Framer Motion',
]

export const featuredProjects = [
  {
    id: 1,
    title: 'Face Detection Model',
    description: 'Automatically detect and draw bounding boxes around human faces',
    image: 'https://media.licdn.com/dms/image/v2/C5612AQFJRVgooCOmyA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1589830344186?e=2147483647&v=beta&t=8blvx5zGFEI7k4RGqH0PgHJaBd1EYlDJ0idIYyeiOrU',
    tech: ['Python', 'OpenCV', 'Keras'],
    github: 'https://github.com/Kudaliyanage-Sathsara/Face-Detection-Model',
    demo: 'https://example.com',
    longDescription:
      'This Face Detection Model is a computer vision tool designed to identify and localize human faces within digital images or real-time video streams. Built with Python and popular libraries like OpenCV, it detects facial features and overlays bounding boxes, serving as a foundation for facial recognition, tracking, and security systems.',
    highlights: ['Real-Time Detection', 'Visual Bounding Boxes', 'Foundational Tech'],
  },
  {
    id: 2,
    title: 'Insight Dashboard',
    description: 'An analytics dashboard tailored for product teams to monitor growth signals.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    tech: ['React', 'Charts.js', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
    longDescription:
      'This dashboard combines elegant visual storytelling with actionable insights, helping teams spot trends and make faster decisions without overwhelming them with data.',
    highlights: ['Custom charting', 'Realtime updates', 'Accessible UI'],
  },
  {
    id: 3,
    title: 'Lumen Studio',
    description: 'A polished portfolio experience for a creative agency with a cinematic feel.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    tech: ['Next.js', 'Framer Motion', 'Sanity'],
    github: 'https://github.com',
    demo: 'https://example.com',
    longDescription:
      'Lumen Studio blends cinematic visuals and motion design to present the agency’s work in a memorable way. The experience emphasizes smooth storytelling and high-performance rendering.',
    highlights: ['Motion-rich experience', 'CMS driven content', 'Performance tuned'],
  },
  {
    id: 4,
    title: 'Aster Notes',
    description: 'A distraction-free note taking workspace for founders and designers.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    tech: ['React', 'Firebase', 'Dexie'],
    github: 'https://github.com',
    demo: 'https://example.com',
    longDescription:
      'Aster Notes focuses on calm writing and fast retrieval, helping teams capture ideas without the noise of heavier productivity suites.',
    highlights: ['Offline-ready', 'Instant search', 'Keyboard-first UX'],
  },
]

// Earlier sample projects. Kept for reference but not shown on the site;
// move an entry into allProjects (with a category) to publish it again.
export const archivedProjects = [
  ...featuredProjects,
  {
    id: 5,
    title: 'Northstar CRM',
    description: 'A CRM interface designed for sales teams with a strong focus on speed and clarity.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    tech: ['React', 'TypeScript', 'REST APIs'],
    github: 'https://github.com',
    demo: 'https://example.com',
    longDescription:
      'Northstar CRM brings structure to fragmented workflows, making follow-ups and deal tracking feel effortless for busy teams.',
    highlights: ['Workflow automation', 'Dashboard analytics', 'Accessible components'],
  },
]

// Projects shown on the site. category must match one of projectCategories.
export const projectCategories = ['Enterprise Systems', 'Production system', 'Distributed system', 'Expert project', 'AI-powered application']

export const allProjects = [
  {
    id: 6,
    title: 'Exam Flow Enterprise',
    category: 'Enterprise Systems',
    description: 'An enterprise system for managing the full examination workflow, from scheduling to results.',
    image: '',
    tech: [],
    github: 'https://github.com',
    demo: 'https://example.com',
    longDescription:
      'Exam Flow Enterprise brings the stages of an examination process into one system, giving administrators, staff, and students a clear and consistent workflow.',
    highlights: ['Exam scheduling', 'Workflow management', 'Results handling'],
  },
  {
    id: 7,
    title: 'Multi College Enterprise',
    category: 'Enterprise Systems',
    description: 'An enterprise platform for running multiple colleges from a single, shared system.',
    image: '',
    tech: [],
    github: 'https://github.com',
    demo: 'https://example.com',
    longDescription:
      'Multi College Enterprise lets several colleges operate on one platform while keeping each institution\'s data, users, and administration properly separated.',
    highlights: ['Multi-institution', 'Central administration', 'Role-based access'],
  },
]

export const blogPosts = [
  {
    id: 16,
    title: 'How to Build Systems That Never Quit: A Simple Guide to Reliability',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    date: 'Jul 22, 2026',
    category: 'Reliability',
    readTime: '10 min read',
    url: 'https://sathsaravx.blogspot.com/2026/07/how-to-build-systems-that-never-quit.html',
    excerpt: 'Three fundamental rules for building systems that stay online when traffic spikes, hardware fails, or unexpected problems appear.',
    content: `Reliability means building a system—like a website, database, or app—that keeps working smoothly, even when hardware fails, code breaks, or millions of users arrive at the same time.

Eliminate single points of failure by running backup copies of every critical component so traffic can route around failures. Share the load with a load balancer that routes requests evenly and removes unhealthy servers automatically. Monitor and observe everything with metrics, logs, and traces so engineers can detect unusual behavior before users notice.

Reliable systems are built with redundancy, load balancing, and observability as the core habits, not optional extras. When teams practice these principles, outages become less frequent and recovery becomes faster.`,
  },
  {
    id: 1,
    title: 'Engineering Reliable Systems',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    date: 'Jun 10, 2026',
    category: 'Software Engineering',
    readTime: '12 min read',
    url: 'https://facebook.com',
    excerpt: 'A practical guide to designing systems that stay resilient under load and remain maintainable as complexity grows.',
    content: `Creating reliable software is not a one-time activity; it is a long-term commitment to systems, teams, and processes that can withstand change. Reliability begins with the way requirements are shaped. The team must define what “available,” “fast,” and “safe” mean for each service before a single line of code is written. Those expectations should be explicit, measurable, and aligned with the user’s real needs. A system designed for reliability does not hide its failure modes, it rehearses them.

The next step is architecture. Clear service boundaries, thoughtful abstractions, and simple data contracts reduce accidental complexity. When services communicate through well-defined APIs, each team can evolve independently without causing cascading failures. That does not mean avoiding integration; it means choosing integration points that are observable, versioned, and tolerant of temporary mismatch.

Testing is another foundation of reliability. Unit tests catch obvious regressions, but they are only the first line of defense. Integration tests, contract tests, and environment-simulating end-to-end tests help to validate how pieces behave together. Run those tests early and often, and treat the test suite itself as a product that must stay fast and reliable. Slow or flaky tests erode trust, causing teams to skip them when they are needed most.

Production is where reliability is earned. Every deployment should be treated like an experiment: deploy small, watch closely, and be ready to roll back. Feature flags are invaluable because they let you decouple deploy from release. They allow you to ship code turned off, enable it safely for a subset of users, and quickly disable it if something goes wrong. Rollouts that can be throttled and monitored are far safer than big bang launches.

Observability is the third major pillar. Logging, metrics, and tracing are not optional extras. They give teams a shared understanding of system behavior and make it possible to detect anomalies before users notice them. Design metrics that reflect real user journeys, not just passive infrastructure health checks. The best teams instrument service-level indicators, business outcomes, and error budgets so they can answer questions like “Is the checkout flow actually working?” rather than “Is the CPU below 80%?”

Failure modes are not failure points. Reliable systems are built to recover. That means implementing graceful degradation, retries with backoff, timeouts, and circuit breakers. It also means accepting that some dependencies will fail and ensuring the overall experience remains as useful as possible. For example, if a recommendation service is unavailable, the system can still serve the main page with less personalized content instead of failing entirely.

Team practices matter just as much as technical design. Incident response should be practiced, not improvised. Run regular game days or chaos engineering exercises to validate assumptions about how systems behave under stress. Post-incident reviews should be blameless and focused on learning. A culture that treats incidents as opportunities to strengthen the system is far more sustainable than one that simply tries to avoid talking about failures.

Documentation is often overlooked, but it is essential for reliability. High-quality runbooks, architecture diagrams, and onboarding guides reduce the time it takes for engineers to respond to production issues. Keep operational documentation close to the code and make it easy for anyone on the team to update. If the only person who understands how a key service is deployed is on vacation, the system is brittle.

Performance and reliability are intertwined. Slow systems invite failure because they increase resource usage and create tighter coupling. Optimize the right path first. Cache judiciously, avoid unnecessary synchronous work, and design service interactions to be asynchronous when appropriate. Backpressure mechanisms that prevent overload are a form of reliability engineering; without them, a healthy service can drag down the entire system.

Deployment platforms also play a role. Container orchestration, serverless functions, and managed databases can reduce operational burden when used appropriately. But they are not a magic wand. Teams still need to understand the failure characteristics of the platform and how to recover from network partitions, disk full conditions, and provider-level outages.

Security is a reliability concern too. Vulnerabilities that lead to compromise or data loss threaten availability and trust. Treat security controls as part of your reliability strategy, and include them in your testing and deployment pipelines. Frequent patching, dependency audits, and least-privilege access are as important as any caching or retry strategy.

Finally, reliability is a product decision. It is not a checkbox that can be completed once. It is the consequence of continuous attention to how systems fail, how users perceive performance, and how teams can safely change the code. When reliability is a shared responsibility across engineering, product, and operations, the whole organization moves faster with more confidence. This post has outlined the key habits and architectural choices that make software systems not only easier to operate, but more resilient, more predictable, and more valuable to the people who depend on them.`,
  },
  {
    id: 2,
    title: 'Modern Backend Design',
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    date: 'May 24, 2026',
    category: 'Architecture',
    readTime: '12 min read',
    excerpt: 'Backend design should balance performance, clarity, and extensibility for long-lived applications.',
    content: `A backend is more than a collection of servers and databases. It is the engine that makes a product useful, reliable, and fast. Good backend design starts with a clear understanding of the domain and the core business capabilities the system needs to support. Too often teams begin with technology choices and only later realize that their architecture does not align with the problem space.

The first principle of modern backend design is to keep the system modular. That means defining services or modules around business capabilities such as authentication, content management, or payments. Each module should own its data and expose a well-defined interface. This reduces accidental coupling and makes it easier to change one part of the system without needing to rework everything else.

A second principle is to make data flow explicit. Data models should reflect the real entities and relationships in the domain, not just the structure of a single UI screen. Use bounded contexts to avoid forcing one model to do too much. When a service needs data from another domain, use APIs or event-driven integration patterns rather than cheap shared databases. This keeps ownership clear and makes the system more robust to change.

Performance is a design requirement, not an afterthought. Understand the most common user journeys, and optimize for them first. That may mean caching query results, introducing asynchronous processing for non-critical work, or choosing the right storage engine for the workload. Performance optimizations should be visible to the team and should not make the architecture opaque. When a cached result is stale, the system should know how to refresh it safely.

Extensibility is also essential. A backend is never finished. Teams should design APIs and services with future growth in mind, but without over-generalizing. Keep interfaces stable where possible, and version them when changes are needed. Documentation for APIs and data contracts should be accessible to both internal and external consumers, so developers can use them correctly and spot breaking changes early.

Security and reliability are part of backend design. Authentication and authorization should be baked into the service boundary, not layered on as an afterthought. Input validation, rate limiting, and defensive defaults protect the backend from misuse and abuse. Likewise, error handling should be explicit. Services should return meaningful status codes, log failures with useful context, and avoid exposing internal details to clients.

Observability must be built into the backend from day one. Instrumentation that captures request latency, error rates, and throughput allows teams to understand how the backend behaves under load. Logs should be structured and searchable; traces should show the flow of a request across services. With this data, engineers can find performance bottlenecks, detect regressions, and prove that the system is meeting its reliability targets.

Deployments should be predictable and reversible. A modern backend typically uses automated pipelines that build, test, and deploy code without manual steps. Continuous integration is not enough by itself; deployment pipelines should also run smoke tests and sanity checks in the target environment. Feature flags and canary launches allow changes to be introduced gradually, reducing blast radius and giving teams time to respond if problems appear.

As the backend grows, operational maturity becomes important. Teams should document runbooks, define service-level objectives, and agree on what alerts really matter. Not every anomaly requires a page. Alerting should focus on symptoms that matter to users, such as latency spikes or failed payment attempts, rather than low-level infrastructure details. This keeps on-call teams focused and prevents alert fatigue.

Readable code underpins all of this. Well-structured backend code is easier to refactor, test, and debug. Choose patterns that fit the problem and avoid unnecessary complexity. Dependency injection, clear separation of concerns, and consistent naming make the backend easier for new team members to understand. In the long term, code quality is the difference between a backend that can adapt and one that becomes brittle.

A final consideration is collaboration. Backend design is a team sport. Architects, engineers, product managers, and operators should all participate in shaping the system. Regular architecture reviews, shared design documents, and open communication help to keep the backend aligned with business goals. When everyone understands the constraints and trade-offs, the architecture evolves in a sustainable way.

Modern backend design is thus a blend of technical discipline and thoughtful product thinking. It balances performance with clarity, extensibility with simplicity, and reliability with speed of change. When these qualities are present, the backend becomes not just a technical foundation, but a competitive advantage for the product.`,
  },
  {
    id: 3,
    title: 'Code Quality and Collaboration',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    date: 'Apr 16, 2026',
    category: 'Process',
    readTime: '12 min read',
    excerpt: 'Strong engineering teams pair clean code with shared ownership and automated workflows.',
    content: `High-quality code is a team asset, not a personal trophy. One of the most powerful improvements any engineering team can make is to treat the codebase as shared property. This shift changes how people write, review, and improve code. It turns subjective preferences into shared standards, and it makes collaboration the default instead of the exception.

The first step toward code quality is readability. Code should read like prose, with clear intent expressed through descriptive names, simple structures, and small functions. When a reader can understand what the code is doing without needing to mentally execute every branch, the team can move faster and make safer changes. Comments are helpful when the why is not obvious, but they are not a substitute for clear code.

Automated tooling helps maintain quality at scale. Linters, formatters, and static analysis tools catch low-hanging issues before code is merged. They enforce consistent style and reduce the number of trivial review comments, allowing reviewers to focus on design and correctness. The best teams choose tools that fit their language and culture, and they keep the rules practical rather than rigid.

Testing is a key part of code quality, but not the only part. Test suites should be fast, reliable, and valuable. Slow tests undermine confidence and encourage developers to avoid running them. Flaky tests are worse than no tests at all because they make failures meaningless. Invest in test architecture, and keep the suite healthy by fixing failures promptly and removing obsolete coverage.

Peer review is where collaboration and quality intersect. Reviews are most effective when they are timely, respectful, and focused. Reviewers should look for clarity, correctness, and architectural consistency, not just formatting. Authors should write reviewable code by keeping changes small, describing intent clearly, and including relevant context. When the review process is smooth, it becomes a natural way to share knowledge and improve the codebase.

Documentation complements code and tests. README files, design notes, and architecture diagrams make systems easier to understand. Good documentation does not need to be exhaustive; it should capture the important decisions, the expected behaviors, and the parts of the system that are easy to get wrong. When new team members can ramp up quickly without constantly asking for help, the whole team benefits.

Collaboration also means owning the operational lifecycle of the software. Engineers should be involved in running the system, reviewing incidents, and learning from outages. When the people who write the code see how it behaves in production, they make better design decisions. This feedback loop is one of the strongest forces for quality.

Culture matters. Teams that value psychological safety are more likely to share imperfect work, ask questions, and challenge assumptions. Quality improves when people feel safe to say “I don’t understand this” or “I think there is a simpler way.” Blameless postmortems and inclusive discussions help build that culture.

Finally, quality and collaboration are not things you finish. They are ongoing habits. Every change is an opportunity to make the codebase easier to understand and the team more aligned. That means continuously improving review practices, testing discipline, and shared ownership. Over time, these habits compound, making the team more effective and the software more resilient.

When engineering teams treat the codebase, tests, documentation, and operations as shared responsibilities, they create a virtuous cycle. The result is software that is easier to change, easier to debug, and more enjoyable to work with. And that is the foundation of lasting engineering success.`,
  },
  {
    id: 4,
    title: 'Building components that survive design changes',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    date: 'Mar 29, 2026',
    category: 'Frontend',
    readTime: '8 min read',
    excerpt: 'A resilient component system is built through clear boundaries and strong defaults.',
    content: 'Components are easiest to maintain when they solve one problem well and leave room for context. This article explores practical ways to design flexible UI primitives that remain useful over time.'
  },
  {
    id: 5,
    title: 'How I structure design systems for small teams',
    cover: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    date: 'Feb 14, 2026',
    category: 'Design Systems',
    readTime: '6 min read',
    excerpt: 'A lightweight approach to design systems can be both useful and sustainable.',
    content: 'Small teams do not need a sprawling system to gain value from design tokens, shared patterns, and clear documentation. The key is to solve the highest-frequency problems first.'
  },
  {
    id: 6,
    title: 'Using motion to guide attention without overwhelming',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    date: 'Jan 21, 2026',
    category: 'Animation',
    readTime: '5 min read',
    excerpt: 'The most effective transitions feel light, purposeful, and emotionally consistent.',
    content: 'Motion is most persuasive when it appears as a natural extension of the interface rather than a spectacle. Good transitions communicate hierarchy and maintain continuity as users move through a flow.'
  },
  {
    id: 7,
    title: 'Writing better UI copy for modern products',
    cover: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    date: 'Dec 05, 2025',
    category: 'Content Design',
    readTime: '4 min read',
    excerpt: 'Clear labels and calm copy can remove friction before it ever becomes visible.',
    content: 'Microcopy shapes the way users feel as they move through a product. Concise, human language encourages confidence and keeps the interface feeling approachable.'
  },
  
 
 
  
]

export const experienceTimeline = [
  {
    role: 'Software Engineer',
    company: 'Freelance',
    period: '2026 June — Present',
    details: 'Leading the design-to-development workflow for digital products with focus on performance and accessibility.',
    link: 'https://www.upwork.com/freelancers/~01d31796f48bd91339?mp_source=share',
  },
  {
    role: 'Web Developer',
    company: 'Freelance',
    period: '2026 Feb — 2026 May',
    details: 'Built reusable component systems and polished product experiences for B2B SaaS platforms.',
    link: 'https://www.upwork.com/freelancers/~01d31796f48bd91339?mp_source=share',
  },
  {
    role: 'Rubber Machine Operator',
    company: 'St. Anne Rubber Goods (Pvt) Ltd',
    period: '2020 — 2021',
    details: 'Operated and maintained rubber processing machinery, ensuring quality control and efficient production.',
    link: 'https://stannerubber.com/',
  },
]

export const education = [
  {
    school: 'University of Westminster',
    degree: 'BEng (Hons) Software Engineering',
    period: '2022 — 2027',
    description: 'Focused on software development, system design, databases, algorithms, and building scalable applications.',
    credential: 'Degree e-certificate',
    // Set to false once the certificate is awarded and saved as public/certificate.jpg
    credentialPending: true,
  },
]

export const stats = [
  { label: 'Repositories', value: '22' },
  { label: 'Contributions', value: '54 last year' },
  { label: 'Followers', value: '1' },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Kudaliyanage-Sathsara' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thanuja-sathsara-677a1a298/' },
  { label: 'StackOverflow', href: 'https://stackoverflow.com/users/22792152/sathsara-thanuja' },
]
