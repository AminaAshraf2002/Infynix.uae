// Centralized data repository for solutions, industries, case studies, insights, and FAQs
import { subcategoryData } from './subcategoryData';

export const solutionsData = {
  ...subcategoryData,
  'infynix-agency': {
    title: 'Infynix Agency',
    category: 'Agency',
    keywords: ['Performance Advertising', 'SEO & Content Marketing', 'Social Media Management', 'Marketing Automation', 'Analytics', 'Brand Strategy'],
    description: 'Performance marketing, built to put the finished system in front of the right people.',
    challenge: 'Brands struggle to connect their marketing efforts to actual measurable revenue growth.',
    insight: 'True performance marketing requires a seamless integration of creative, data, and distribution.',
    solution: 'We build high-converting marketing engines that capture attention and drive sales.',
    outcome: 'You gain a predictable, scalable system for acquiring and retaining customers.',
    capabilities: [
      { title: 'Performance Advertising', desc: 'Data-driven ad campaigns across Meta, Google, and LinkedIn optimized for ROI.' },
      { title: 'SEO & Content Marketing', desc: 'Strategic organic growth through technical SEO and high-value content creation.' },
      { title: 'Social Media Management', desc: 'Building brand authority and engaging communities across social platforms.' },
      { title: 'Brand Strategy & Positioning', desc: 'Crafting compelling brand narratives that resonate with your target audience.' }
    ],
    faqs: [
      { q: 'What is your approach to performance marketing?', a: 'We focus strictly on ROI and revenue, optimizing campaigns based on deep data analysis.' }
    ]
  },
  'infynix-media': {
    title: 'Infynix Media',
    category: 'Media',
    keywords: ['Photography', 'Videography', 'Social Content', 'Brand Films', 'Motion Graphics', 'Podcasts'],
    description: 'Brand narratives and visual communication that command attention.',
    challenge: 'In a crowded digital space, generic content is ignored. Brands need to stand out visually.',
    insight: 'High-quality, narrative-driven media creates an emotional connection that drives action.',
    solution: 'We produce premium photography, videography, and motion graphics that tell your brand story.',
    outcome: 'Your brand commands attention, builds trust, and elevates its perceived value in the market.',
    capabilities: [
      { title: 'Brand Films & Commercials', desc: 'Cinematic video production that captures your brand essence and converts viewers.' },
      { title: 'Photography & Videography', desc: 'Premium visual assets for your website, social media, and ad campaigns.' },
      { title: 'Motion Graphics & Animation', desc: 'Dynamic animations that explain complex products and engage users.' },
      { title: 'Short-Form & Social Content', desc: 'High-performing reels, TikToks, and shorts designed for viral reach.' }
    ],
    faqs: [
      { q: 'Do you handle full production?', a: 'Yes, we handle everything from pre-production planning to final editing and delivery.' }
    ]
  },
  'infynix-growth-solutions': {
    title: 'Infynix Growth Solutions',
    category: 'Growth',
    keywords: ['Web Development', 'App Development', 'AI Product Development', 'Business Automation', 'Data Platforms'],
    description: 'The technical foundation and systems that power scalable business growth.',
    challenge: 'Businesses are slowed down by disconnected systems, legacy tech, and manual processes.',
    insight: 'Scalable growth requires a robust, integrated technical foundation that automates operations.',
    solution: 'We engineer custom web apps, AI tools, and automated systems that run your business efficiently.',
    outcome: 'You get a scalable tech infrastructure that reduces costs and accelerates growth.',
    capabilities: [
      { title: 'Custom Web & App Development', desc: 'High-performance, scalable applications built on modern tech stacks.' },
      { title: 'AI-Native Product Development', desc: 'Integrating cutting-edge AI into your products to provide unique value.' },
      { title: 'Marketing & Business Automation', desc: 'Connecting your CRM, ERP, and marketing tools to eliminate manual work.' },
      { title: 'API & Systems Integration', desc: 'Seamlessly connecting disparate software systems into a unified platform.' }
    ],
    faqs: [
      { q: 'What technologies do you use?', a: 'We use modern stacks like React, Node.js, Python, and cloud infrastructure on AWS/GCP.' }
    ]
  },
  'website-development': {
    title: 'Website Development Services',
    category: 'Development',
    keywords: ['Web Development Company', 'Corporate Website Development', 'Business Website Development', 'Custom Website Development', 'Enterprise Website Design'],
    description: 'We build fast, secure websites. They are designed to grow with your business and turn visitors into customers.',
    challenge: 'Most corporate websites are just online brochures. They load slowly and fail to get you leads.',
    insight: 'A website should be the engine of your digital growth. It must combine speed, security, and clear design.',
    solution: 'We build fast, custom websites that connect to your business tools and drive sales.',
    outcome: 'You get a secure, high-speed website that boosts your conversions and tracks your leads clearly.',
    faqs: [
      { q: 'How long does custom website development take?', a: 'It usually takes 6 to 12 weeks. It depends on what features you need.' },
      { q: 'Do you build mobile-friendly designs?', a: 'Yes. Every site we build works perfectly on phones and tablets.' }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    category: 'Development',
    keywords: ['Mobile App Development Company', 'Android App Development', 'iOS App Development', 'Flutter Development', 'Cross Platform Development'],
    description: 'We build high-quality mobile apps for iOS and Android. They run fast and work smoothly.',
    challenge: 'Mobile apps fail when they are slow or crash. Users quickly delete bad apps.',
    insight: 'A great app is fast and easy to use. It should work offline and keep users engaged.',
    solution: 'We build native and cross-platform apps. They connect your users directly to your business.',
    outcome: 'You get a fast, secure app that keeps your users coming back.',
    faqs: [
      { q: 'Should we build native or cross-platform apps?', a: 'We help you decide based on your budget. Cross-platform works great for most businesses.' }
    ]
  },
  'performance-marketing': {
    title: 'Performance Marketing',
    category: 'Marketing',
    keywords: ['Performance Marketing Agency', 'Meta Ads Agency', 'Google Ads Agency', 'Lead Generation Company', 'Digital Marketing Company'],
    description: 'We run smart ad campaigns on Google, Meta, and LinkedIn. We help you find the right customers.',
    challenge: 'Many agencies waste money on clicks. They do not track how many clicks turn into real sales.',
    insight: 'Marketing should be measured by revenue. Every dollar spent should be tracked.',
    solution: 'We set up clear ad campaigns. We track everything from the first click to the final sale.',
    outcome: 'You get more qualified leads and lower costs. Your marketing spend actually makes you money.',
    faqs: [
      { q: 'How do you track leads?', a: 'We use tools like Google Analytics and CRM tracking to tie your ads directly to your sales.' }
    ]
  },
  'seo-services': {
    title: 'SEO Services',
    category: 'Marketing',
    keywords: ['SEO Company', 'SEO Agency', 'Technical SEO', 'Local SEO', 'Enterprise SEO'],
    description: 'We help your business rank higher on search engines. This brings you more organic traffic.',
    challenge: 'Bad SEO setups keep your business hidden on page two. You miss out on ready-to-buy customers.',
    insight: 'Good SEO is not just stuffing keywords. It is about speed, clear code, and answering user questions.',
    solution: 'We fix your website tech and create clear content. This builds your site authority.',
    outcome: 'You get steady organic traffic. You rank higher for the keywords that matter.',
    faqs: [
      { q: 'How long does it take to see SEO results?', a: 'SEO takes time to build. You usually see clear results in 3 to 6 months.' }
    ]
  },
  'artificial-intelligence': {
    title: 'Artificial Intelligence & AI Integration',
    category: 'Production',
    keywords: ['AI Development Company', 'Business AI Solutions', 'AI Automation', 'AI Integration', 'AI Agents'],
    description: 'We add smart AI tools to your business. This automates tasks and saves you time.',
    challenge: 'Many AI projects are just for show. They do not actually help run the business.',
    insight: 'AI should fix real problems. It should automate daily tasks and give you clear data.',
    solution: 'We build custom AI agents. We connect them to your current systems.',
    outcome: 'You get automated work and fewer support tickets. Your business runs faster.',
    faqs: [
      { q: 'How can AI improve my business operations?', a: 'AI can handle customer support, track data, and automate daily admin work.' }
    ]
  },
  'business-automation': {
    title: 'Business Automation Solutions',
    category: 'Production',
    keywords: ['Workflow Automation', 'Business Automation Company', 'Digital Transformation', 'Process Automation'],
    description: 'We connect your software tools together. This stops manual work and speeds up your team.',
    challenge: 'Teams waste hours moving data by hand. This causes errors and delays.',
    insight: 'Disconnected tools slow you down. You need your software to talk to each other.',
    solution: 'We build systems that connect your CRM, accounting, and daily tools.',
    outcome: 'You stop doing manual data entry. Everything updates instantly across your tools.',
    faqs: [
      { q: 'What tools do you use for automation?', a: 'We build custom code and use platforms like Zapier to link your software.' }
    ]
  },
  'crm-erp-development': {
    title: 'Custom CRM & ERP Development',
    category: 'Development',
    keywords: ['CRM Development Company', 'ERP Development Company', 'Business Management Software'],
    description: 'We build custom software to manage your sales and daily work. It fits exactly how you run your business.',
    challenge: 'Standard software is expensive and hard to use. It forces you to change how you work.',
    insight: 'Software should fit your business. A custom system gives you a real edge.',
    solution: 'We design simple CRM and ERP tools. They match your exact daily workflow.',
    outcome: 'You get clear data and automated tasks. You also stop paying high monthly software fees.',
    faqs: [
      { q: 'Do you build on top of existing platforms?', a: 'Yes. We can build custom tools or adjust platforms like Salesforce to fit your needs.' }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    category: 'Branding',
    keywords: ['UI UX Design Company', 'User Experience Design', 'Product Design'],
    description: 'We design digital products that look great and are easy to use. Good design builds trust.',
    challenge: 'Confusing website layouts frustrate users. They leave and do not come back.',
    insight: 'Great design is simple and clear. It guides the user easily to what they need.',
    solution: 'We design modern, clean interfaces. We test them to make sure they are easy to use.',
    outcome: 'Your users stay longer and buy more. Your brand looks premium and professional.',
    faqs: [
      { q: 'What is your design process?', a: 'We start with sketches, make full designs, test them, and then write the code.' }
    ]
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    category: 'Production',
    keywords: ['Cloud Solutions Company', 'Cloud Architecture', 'Cloud Migration', 'AWS Consulting'],
    description: 'We move your apps to secure cloud servers. This keeps your data safe and your systems running.',
    challenge: 'Old physical servers are slow and cost a lot to fix. They can easily break.',
    insight: 'The cloud is fast and reliable. It scales up easily as your business grows.',
    solution: 'We set up secure cloud servers on AWS, Google, or Azure for your business.',
    outcome: 'Your systems run faster and cost less to maintain. Your data is always safe.',
    faqs: [
      { q: 'Can you move our current apps to the cloud?', a: 'Yes. We handle the whole move safely, without losing any data.' }
    ]
  },
  'marketing': {
    title: 'Marketing Services',
    category: 'Marketing',
    keywords: ['Performance Marketing', 'SEO', 'Lead Generation'],
    description: 'We run smart ad campaigns and improve your search rankings to bring ready-to-buy customers directly to you.',
    challenge: 'Many agencies waste money on clicks. They do not track how many clicks turn into real sales.',
    insight: 'Marketing should be measured by revenue. Every dollar spent should be tracked.',
    solution: 'We set up clear ad campaigns and fix your SEO. We track everything from the first click to the final sale.',
    outcome: 'You get more qualified leads and lower costs. Your marketing spend actually makes you money.',
    capabilities: [
      {
        title: 'Performance Advertising',
        desc: 'Meta, Google Search, Shopping, and Performance Max, engineered around a measurable return.',
      },
      {
        title: 'SEO & Content Marketing',
        desc: 'Technical SEO and content built to compound organic visibility instead of renting it every month.',
      },
      {
        title: 'Social Media Management',
        desc: 'Strategy, calendars, and community management across the platforms that actually matter to the business.',
      },
      {
        title: 'Marketing Automation & CRM',
        desc: 'Lifecycle campaigns and CRM systems that follow up on a lead without anyone having to remember to.',
      },
      {
        title: 'Analytics & Reporting',
        desc: 'Full-funnel tracking and monthly reporting tied to revenue, not reach.',
      },
      {
        title: 'Brand Strategy & Positioning',
        desc: 'Positioning and messaging that gives every campaign underneath it a consistent point of view.',
      }
    ],
    faqs: [
      { q: 'How do you track leads?', a: 'We use tools like Google Analytics and CRM tracking to tie your ads directly to your sales.' },
      { q: 'How long does it take to see SEO results?', a: 'SEO takes time to build. You usually see clear results in 3 to 6 months.' }
    ]
  },
  'media': {
    title: 'Media Services',
    category: 'Media',
    keywords: ['Video Production', 'Content Creation', 'Digital Media'],
    description: 'We produce engaging videos and digital content that capture attention and build your brand.',
    challenge: 'Poor quality content fails to engage your audience and makes your brand look unprofessional.',
    insight: 'High-quality media tells your story clearly and builds trust with your customers.',
    solution: 'We create premium video, photography, and digital content tailored for your marketing needs.',
    outcome: 'Your brand looks professional, and your audience stays engaged longer.',
    faqs: [
      { q: 'What types of media do you produce?', a: 'We produce everything from corporate videos and commercials to social media content and photography.' },
      { q: 'How long does a video project take?', a: 'Most projects take 2 to 4 weeks from planning to final delivery.' }
    ]
  },
  'development': {
    title: 'Custom Development',
    category: 'Development',
    keywords: ['Web Development', 'Mobile Apps', 'CRM Systems'],
    description: 'We build high-quality mobile apps and fast websites designed to grow with your business and drive sales.',
    challenge: 'Most corporate websites and standard apps are slow and fail to get you leads.',
    insight: 'Software should fit your business. A custom system gives you a real edge.',
    solution: 'We build fast, custom websites and mobile apps that connect to your business tools and drive sales.',
    outcome: 'You get a secure, high-speed system that boosts your conversions and tracks your leads clearly.',
    faqs: [
      { q: 'How long does custom development take?', a: 'It usually takes 6 to 12 weeks. It depends on what features you need.' },
      { q: 'Do you build mobile-friendly designs?', a: 'Yes. Every site we build works perfectly on phones and tablets.' }
    ]
  },
  'branding': {
    title: 'Digital Branding',
    category: 'Branding',
    keywords: ['UI UX Design', 'Brand Strategy'],
    description: 'We design digital products that look great and are easy to use. Great design builds trust and keeps users engaged.',
    challenge: 'Confusing website layouts frustrate users. They leave and do not come back.',
    insight: 'Great design is simple and clear. It guides the user easily to what they need.',
    solution: 'We design modern, clean interfaces. We test them to make sure they are easy to use.',
    outcome: 'Your users stay longer and buy more. Your brand looks premium and professional.',
    faqs: [
      { q: 'What is your design process?', a: 'We start with sketches, make full designs, test them, and then write the code.' }
    ]
  }
};

export const industriesData = {
  'healthcare': {
    name: 'Healthcare',
    heroTitle: 'Healthcare Growth Engineering Solutions',
    challenge: 'Healthcare systems face manual scheduling, paper-heavy compliance, and fragmented patient record systems that delay patient care.',
    opportunity: 'Automate scheduling, integrate records, and deploy secure portals to enhance care, reduce errors, and ensure compliance.',
    solutions: ['Custom patient portals, automated reminders, HIPAA-compliant storage, and AI diagnostics assistants.'],
    faqs: [
      { q: 'Are your healthcare systems HIPAA compliant?', a: 'Yes, we follow strict data encryption standards and secure authentication protocols to protect patient data.' }
    ],
    howItWorks: [
      { title: 'Automate Patient Intake', desc: 'Replace paper forms with smart digital intakes that verify insurance instantly.', icon: 'clipboard-list' },
      { title: 'Predictive Diagnostics', desc: 'Give doctors AI co-pilots that analyze historical patient data in real-time.', icon: 'activity' },
      { title: 'Secure Compliance', desc: 'Ensure all data flows remain strictly encrypted and HIPAA-compliant 24/7.', icon: 'shield-check' }
    ],
    images: {
      feature1: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      feature2: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      feature3: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      integrations: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80'
    }
  },
  'education': {
    name: 'Education',
    heroTitle: 'Education Systems for Growing Institutions',
    challenge: 'LMS platforms are often outdated, making online learning and student enrollment friction-heavy.',
    opportunity: 'Modernize learning with high-speed virtual classrooms, intuitive student enrollment panels, and automated grading loops.',
    solutions: ['Headless LMS setups, customizable student registration systems, and interactive curriculum software.'],
    faqs: [
      { q: 'Can you integrate with existing databases?', a: 'Yes, we integrate modern frontends with legacy institutional databases via custom API layers.' }
    ],
    howItWorks: [
      { title: 'Streamline Enrollment', desc: 'Automate the registration process and eliminate manual paperwork for staff.', icon: 'graduation-cap' },
      { title: 'Interactive Learning', desc: 'Deploy high-speed, interactive curriculum tools that keep students engaged.', icon: 'monitor-play' },
      { title: 'Unified Campuses', desc: 'Connect distinct campus systems into one central, globally accessible hub.', icon: 'network' }
    ]
  },
  'construction': {
    name: 'Construction',
    heroTitle: 'Construction Business Automation Solutions',
    challenge: 'Fragmented supply chains, missing tools tracking, and paper site updates delay projects and overrun budgets.',
    opportunity: 'Centralize material inventories, logistics status, and daily operations updates into one unified web hub.',
    solutions: ['Mobile resource tracking apps, supply chain logs, and custom builder analytics.'],
    faqs: [
      { q: 'Do these systems work on-site?', a: 'Yes, all our construction tools are mobile-responsive and include offline-first syncing capabilities.' }
    ],
    howItWorks: [
      { title: 'Track Materials', desc: 'Log supply chain data automatically to prevent costly shortages on site.', icon: 'hard-hat' },
      { title: 'Real-time Updates', desc: 'Provide site managers with instant visibility into project milestones.', icon: 'bar-chart' },
      { title: 'Site Coordination', desc: 'Sync distributed teams and contractors across multiple global projects.', icon: 'users' }
    ]
  },
  'real-estate': {
    name: 'Real Estate',
    heroTitle: 'Real Estate CRM & Growth Systems',
    challenge: 'Real estate portals load slowly, have bad filters, and fail to qualify prospective property buyers.',
    opportunity: 'Engage visitors with fast search, responsive map tools, and automated scheduling systems.',
    solutions: ['High-speed property listings, interactive maps, and lead follow-up bots.'],
    faqs: [
      { q: 'Do you sync with MLS databases?', a: 'Yes, we automate listings updates by syncronizing with RETS/IDX systems.' }
    ],
    howItWorks: [
      { title: 'Fast Property Search', desc: 'Deliver lightning-fast search filters that help buyers find homes instantly.', icon: 'home' },
      { title: 'Automated Tours', desc: 'Let AI instantly schedule showings and follow up with high-intent leads.', icon: 'calendar-check' },
      { title: 'Market Reach', desc: 'Expand your listing visibility and attract international property investors.', icon: 'trending-up' }
    ]
  },
  'manufacturing': {
    name: 'Manufacturing',
    heroTitle: 'Manufacturing Growth Engineering',
    challenge: 'Manual inventory logs and legacy machine alerts lead to production delays and resource wastage.',
    opportunity: 'Deploy automated inventory alerts and real-time plant analytics using connected software dashboards.',
    solutions: ['Inventory alert dashboards, automated supply logs, and machine telemetry metrics.'],
    faqs: [
      { q: 'Can you connect with IoT sensors?', a: 'Yes, we build secure cloud gateways to collect and display machine telemetry data.' }
    ],
    howItWorks: [
      { title: 'Inventory Automation', desc: 'Automatically restock supplies before they run out using smart thresholds.', icon: 'factory' },
      { title: 'Plant Analytics', desc: 'Monitor machine health and prevent breakdowns with predictive modeling.', icon: 'line-chart' },
      { title: 'Supply Chain Sync', desc: 'Unify your vendors and distributors into a single connected logistics loop.', icon: 'truck' }
    ]
  },
  'retail': {
    name: 'Retail & Commerce',
    heroTitle: 'Retail & Commerce Growth Systems',
    challenge: 'Slow checkouts and generic product listings increase bounce rates and reduce purchase conversions.',
    opportunity: 'Increase sales with lightning-fast headless checkouts, AI product recommendations, and custom carts.',
    solutions: ['Headless eCommerce systems, automated cart reminders, and custom sales trackers.'],
    faqs: [
      { q: 'What commerce engines do you support?', a: 'We build headless commerce using Shopify, BigCommerce, or fully custom transactional engines.' }
    ],
    howItWorks: [
      { title: 'Frictionless Checkout', desc: 'Remove checkout barriers with one-click purchasing and smart carts.', icon: 'shopping-cart' },
      { title: 'Personalized Shopping', desc: 'Suggest the perfect products dynamically using real-time behavioral AI.', icon: 'sparkles' },
      { title: 'Omnichannel Sales', desc: 'Sell seamlessly across web, social media, and international storefronts.', icon: 'globe' }
    ]
  },
  'hospitality': {
    name: 'Hospitality',
    heroTitle: 'Hospitality Growth & Automation Solutions',
    challenge: 'High fees from reservation portals eat booking margins and manual scheduling delays check-ins.',
    opportunity: 'Capture more revenue using custom booking engines, guest desks, and automated welcome flows.',
    solutions: ['Direct booking platforms, loyalty systems, and contactless guest support tools.'],
    faqs: [
      { q: 'Can we sync booking calendars?', a: 'Yes, our custom direct booking calendars sync automatically with Channel Managers.' }
    ],
    howItWorks: [
      { title: 'Direct Bookings', desc: 'Bypass OTA fees by driving reservations through your own custom engine.', icon: 'concierge-bell' },
      { title: 'Automated Guest Care', desc: 'Delight guests with instant digital check-ins and smart room upgrades.', icon: 'smartphone' },
      { title: 'Global Sync', desc: 'Keep your room inventory perfectly synced across all worldwide channels.', icon: 'refresh-cw' }
    ]
  },
  'professional-services': {
    name: 'Professional Services',
    heroTitle: 'Growth Systems for Professional Services',
    challenge: 'Manual billing systems and email scheduling create friction and limit business scaling.',
    opportunity: 'Automate customer lead flows, online scheduling, and invoice status updates into a client hub.',
    solutions: ['Client collaboration desks, automated billing modules, and online consulting schedule systems.'],
    faqs: [
      { q: 'Can you build secure document portals?', a: 'Yes, we design encrypted portals for files sharing, e-signatures, and messaging.' }
    ],
    howItWorks: [
      { title: 'Automated Billing', desc: 'Generate and collect invoices automatically to ensure steady cash flow.', icon: 'credit-card' },
      { title: 'Client Dashboards', desc: 'Provide a premium self-serve portal for project updates and document sharing.', icon: 'layout-dashboard' },
      { title: 'Remote Collaboration', desc: 'Work with clients seamlessly across borders with integrated meeting tools.', icon: 'video' }
    ]
  }
};

export const caseStudiesData = [
  {
    slug: 'task-management-system',
    title: 'A multi-role SaaS product for team and task management across industries',
    client: 'TMS',
    challenge: 'Infynix needed an internal, industry-agnostic tool to manage teams and tasks across roles (Super Admin, Org Admin, Team Lead/PM, Employee), with each industry activating only the modules relevant to it.',
    objectives: 'Build a scalable multi-role platform with clear separation between web (admin roles) and mobile (execution roles), supporting offline-first usage for field/on-site employees.',
    strategy: 'Split the platform by role and surface — Super Admin and Org Admin as web-only (React/MERN), Team Lead/PM and Employee as app-only (Flutter) — with industry-specific module activation instead of separate builds per industry.',
    technology: 'React, Vite, Tailwind, React Native, Expo, Node.js, Express, MongoDB, SQLite',
    execution: 'Authored SRS documents and flowcharts up front; built 17+ frontend pages across the web app; developed the backend API layer (Node.js/Express/MongoDB); implemented SQLite-backed offline-first sync for the mobile app so employees can log work without connectivity.',
    results: '17+ pages shipped across one unified role-based platform',
  },
  {
    slug: 'beyond-demands',
    title: 'A multi-tenant salon supply procurement platform with three dedicated surfaces',
    client: 'Beyond Demands',
    challenge: 'Partner salons, warehouse teams, and org admins all needed different views into the same supply chain — a premium storefront for ordering, an operations console for dispatch, and an analytics dashboard for oversight — without duplicating the underlying data model.',
    objectives: 'Ship one platform that feels like three purpose-built products, while keeping tenancy, stock accuracy, and audit trails airtight under concurrent orders.',
    strategy: 'Modular monolith architecture — one Next.js deployable with strict internal module boundaries (identity, catalog, ordering, inventory, audit) designed as future service seams, rather than premature microservices.',
    technology: 'Next.js, Prisma, PostgreSQL, NextAuth, Row-Level Security',
    execution: 'Implemented Postgres Row-Level Security with fail-closed tenant policies, SELECT ... FOR UPDATE transaction locking for order/dispatch concurrency, derived (never double-counted) reserved stock, rate limiting on login and purchase-code attempts, and forced password rotation for first-time users.',
    results: 'One codebase, three tailored surfaces, zero cross-tenant data leaks',
  }
];

export const insightsData = [
  {
    slug: 'what-is-growth-engineering',
    title: 'What is Growth Engineering and Why Your Business Needs It',
    category: 'Growth Engineering',
    summary: 'See why standard marketing is not enough. Learn how Growth Engineering builds real systems for scale.',
    content: `
      Businesses do not struggle because they lack drive. They struggle because their tools do not connect. Your marketing, sales, and tech teams are working alone.
      
      Growth Engineering fixes this. We build systems that talk to each other. We use software and data to find new clients and speed up daily work.
      
      When you connect your CRM, fast websites, and clear tracking, you get real results. You can test ideas quickly and grow your business reliably.
    `,
    date: 'June 25, 2026',
    author: 'Infynix Tech Lab'
  },
  {
    slug: 'how-ai-automates-growth',
    title: 'How Artificial Intelligence Automates Modern Operations',
    category: 'Artificial Intelligence',
    summary: 'Learn how smart AI tools can speed up your daily tasks and improve customer support.',
    content: `
      AI is more than just a buzzword. It is a tool that runs your business faster.
      
      You can use AI to answer customer questions automatically. You can use it to track stock or read documents instantly. 
      
      By adding AI to your current software, you save hours of manual work. This lowers your costs and lets your team focus on real growth.
    `,
    date: 'June 28, 2026',
    author: 'Infynix AI Team'
  }
];
