// Centralized data repository for solutions, industries, case studies, insights, and FAQs
import { subcategoryData } from './subcategoryData.js';

export const solutionsData = {
  ...subcategoryData,
  'infynix-agency': {
    title: 'Infynix Agency',
    category: 'Agency',
    keywords: ['Performance Advertising', 'SEO & Content Marketing', 'Social Media Management', 'Paid Media Agency', 'Google Ads Agency', 'Meta Ads Agency', 'SEO Engineering'],
    description: 'Infynix Agency runs targeted ad campaigns and builds search infrastructure to bring qualified buyers directly to your business.',
    challenge: 'Unoptimized ads waste budget, while slow websites fail to convert visitors into clients.',
    insight: 'Growth requires targeted ad campaigns connected directly to fast landing pages and clear lead tracking.',
    solution: 'We build and manage ad campaigns across Meta, Google, and LinkedIn paired with fast SEO pre-rendering.',
    outcome: 'Lower client acquisition costs, higher lead volume, and clear revenue tracking.',
    capabilities: [
      { title: 'Meta & Google Paid Advertising', desc: 'Targeted search, shopping, and social ad campaigns optimized for sales and lead generation.' },
      { title: 'SEO Engineering & Search', desc: 'Pre-rendered static pages, clean HTML tags, and keyword architecture built to rank.' },
      { title: 'Conversion Funnel Optimization', desc: 'Landing page design, A/B testing, and retargeting campaigns built to convert visitors.' },
      { title: 'Brand Positioning', desc: 'Clear messaging frameworks that make your offer stand out to prospective clients.' }
    ],
    faqs: [
      { q: 'How do you track ad performance?', a: 'We track campaigns using cost per lead, return on ad spend (ROAS), and total sales generated.' },
      { q: 'What makes your SEO approach different?', a: 'We focus on page speed, static pre-rendering, and commercial search terms that bring real clients.' }
    ]
  },
  'infynix-media': {
    title: 'Infynix Media',
    category: 'Media',
    keywords: ['Brand Identity', 'UI UX Design', 'Video Production', 'Brand Films', '3D Motion Graphics', 'Studio Photography'],
    description: 'Infynix Media produces brand films, modern UI/UX product designs, and 3D motion graphics that make your business look world-class.',
    challenge: 'Outdated visuals and generic designs dilute trust and make it hard to stand out.',
    insight: 'Clean design and visual media build instant credibility and keep customers engaged.',
    solution: 'We design modern digital interfaces, shoot corporate brand films, and create 3D product animations.',
    outcome: 'Stronger brand authority, modern visual presentation, and higher customer engagement.',
    capabilities: [
      { title: 'UI/UX & Digital Design', desc: 'Modern web and app interfaces designed for clean usability and high conversion.' },
      { title: 'Brand Films & Commercials', desc: 'Corporate video production, commercials, and brand stories shot in high resolution.' },
      { title: '3D Motion & Animation', desc: 'Vector animations and 3D renders that explain software and physical products simply.' },
      { title: 'Short-Form Social Video', desc: 'Vertical video content crafted for Reels, TikTok, and social advertising.' }
    ],
    faqs: [
      { q: 'Do you handle full video production?', a: 'Yes, we handle planning, scripting, filming, editing, and final delivery.' }
    ]
  },
  'infynix-growth-solutions': {
    title: 'Infynix Growth Solutions',
    category: 'Growth',
    keywords: ['Custom Web Development', 'Mobile App Development', 'AI Software Solutions', 'AI Surveillance', 'Business Automation'],
    description: 'Infynix Growth Solutions builds custom web apps, AI software workflows, and real-time AI security systems.',
    challenge: 'Manual workflows and disconnected software tools slow down daily business operations.',
    insight: 'Scaling requires custom software tools that automate routine work and connect your operations.',
    solution: 'We build React and Next.js web applications, mobile apps, automated workflows, and AI computer vision systems.',
    outcome: 'Streamlined daily work, lower operating costs, and software built to scale with your business.',
    capabilities: [
      { title: 'Custom Web & Mobile Applications', desc: 'Fast React, Next.js, and mobile applications built for speed, security, and sub-second load times.' },
      { title: 'AI Surveillance & Vision Systems', desc: 'Real-time threat detection, edge AI processing on local hardware, and smart CCTV camera integration.' },
      { title: 'AI Agents & Automation', desc: 'Custom AI agents and API integrations connecting your CRM, communication, and internal tools.' },
      { title: 'API & Database Infrastructure', desc: 'Secure backend development and custom database management.' }
    ],
    faqs: [
      { q: 'What technology stack do you use?', a: 'We build with modern frameworks like React 19, Next.js, Node.js, Python, and cloud infrastructure on AWS and Vercel.' }
    ]
  },
  'ai-surveillance': {
    title: 'AI Surveillance & Security Solutions',
    category: 'Surveillance',
    keywords: ['AI Surveillance', 'Computer Vision Security', 'Smart CCTV Analytics', 'NVIDIA Jetson AI', 'Object Threat Detection', 'Edge AI Vision'],
    description: 'Real-time AI computer vision security, local edge processing, and automated threat alerts for commercial facilities.',
    challenge: 'Traditional CCTV requires constant human monitoring and usually only records incidents after they happen.',
    insight: 'Active security uses AI computer vision to detect threats automatically and alert your team in real time.',
    solution: 'We deploy custom AI vision models on local edge hardware (like NVIDIA Jetson) connected directly to your existing CCTV cameras.',
    outcome: 'Instant threat alerts, lower monitoring costs, and private, local video processing.',
    capabilities: [
      { title: 'Real-Time Threat Detection', desc: 'Automated perimeter monitoring, intrusion alerts, and motion anomaly detection.' },
      { title: 'Edge Hardware Processing', desc: 'Running vision AI locally on NVIDIA Jetson hardware for zero latency and complete privacy.' },
      { title: 'CCTV Camera Integration', desc: 'Connecting directly to existing IP and CCTV cameras without replacing hardware.' },
      { title: 'Instant Mobile Alerts', desc: 'Real-time SMS and app notifications when security boundaries are crossed.' }
    ],
    faqs: [
      { q: 'Does this work with existing cameras?', a: 'Yes, our vision software connects directly to standard CCTV and IP camera streams.' },
      { q: 'Is video sent to external servers?', a: 'No. Video analytics process locally on your on-site edge hardware for privacy.' }
    ]
  },
  'website-development': {
    title: 'Website Development Services',
    category: 'Development',
    keywords: ['Web Development Company', 'Corporate Website Development', 'Business Website Development', 'Custom Website Development', 'Enterprise Website Design'],
    description: 'We build fast, secure web platforms using React 19 and Next.js designed to convert visitors into clients.',
    challenge: 'Slow websites frustrate visitors, rank poorly on Google, and lose potential sales leads.',
    insight: 'Your website should be fast, easy to navigate, and pre-rendered for search engines.',
    solution: 'We build custom, high-speed websites pre-rendered for search engines and connected to your CRM.',
    outcome: 'A fast web presence that loads instantly and drives consistent inquiries.',
    faqs: [
      { q: 'How long does website development take?', a: 'Most custom website projects take 4 to 8 weeks to complete.' },
      { q: 'Are all websites optimized for mobile?', a: 'Yes. Every website we build works on mobile devices, tablets, and desktop computers.' }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    category: 'Development',
    keywords: ['Mobile App Development Company', 'Android App Development', 'iOS App Development', 'Flutter Development', 'Cross Platform Development'],
    description: 'We develop custom mobile applications for iOS and Android built for speed, offline usability, and clear navigation.',
    challenge: 'Mobile apps fail when they crash, load slowly, or are difficult for users to navigate.',
    insight: 'Great mobile apps combine offline support, clean UI design, and fast backend response times.',
    solution: 'We build cross-platform apps using React Native and Flutter for seamless performance.',
    outcome: 'Reliable mobile apps that keep users engaged and coming back.',
    faqs: [
      { q: 'Native or cross-platform development?', a: 'Cross-platform frameworks like React Native deliver native speeds at lower development cost for most projects.' }
    ]
  },
  'performance-marketing': {
    title: 'Performance Marketing & Paid Ads',
    category: 'Marketing',
    keywords: ['Performance Marketing Agency', 'Meta Ads Agency', 'Google Ads Agency', 'Lead Generation Company', 'PPC Advertising'],
    description: 'We manage targeted ad campaigns on Google, Meta, and LinkedIn focused on customer acquisition and return on ad spend.',
    challenge: 'Wasted ad budget on clicks that do not turn into real sales or lead inquiries.',
    insight: 'Paid media must be managed against clear acquisition metrics and tracked conversions.',
    solution: 'We design ad campaigns, run creative tests, and set up conversion tracking.',
    outcome: 'More qualified leads, lower cost per lead, and transparent ad performance reporting.',
    faqs: [
      { q: 'How do you track sales from ads?', a: 'We set up server-side pixels and CRM conversion tracking to tie ad clicks directly to inquiries and sales.' }
    ]
  },
  'seo-services': {
    title: 'SEO Services & Search Infrastructure',
    category: 'Marketing',
    keywords: ['SEO Company', 'SEO Agency', 'Technical SEO', 'Local SEO', 'SEO Engineering Company'],
    description: 'We engineer technical search pre-rendering, clean HTML tags, and keyword content to help your business rank at the top of search engine results.',
    challenge: 'Slow sites and poor HTML structure keep your business hidden on page two of search results.',
    insight: 'Search dominance requires sub-second load speeds, clean pre-rendering, and targeted content.',
    solution: 'We fix site speed issues, pre-render pages, and structure content around valuable commercial search terms.',
    outcome: 'Steady organic traffic growth and higher search rankings for key business terms.',
    faqs: [
      { q: 'How long until we see SEO results?', a: 'Technical indexing fixes take effect within weeks, while keyword rankings build steadily over 3 to 6 months.' }
    ]
  },
  'artificial-intelligence': {
    title: 'Artificial Intelligence & AI Integration',
    category: 'Production',
    keywords: ['AI Development Company', 'Business AI Solutions', 'AI Automation', 'AI Integration', 'AI Agents'],
    description: 'We build custom AI agents and workflow tools that automate daily administrative tasks.',
    challenge: 'Off-the-shelf AI tools rarely connect to your internal company files or CRM software.',
    insight: 'AI tools should integrate directly into your daily software to save actual staff hours.',
    solution: 'We build custom AI tools connected securely to your company data and communication channels.',
    outcome: 'Automated routine work, faster responses, and lower overhead costs.',
    faqs: [
      { q: 'How can AI help our business?', a: 'AI can answer common customer questions, process incoming document data, and automate daily scheduling.' }
    ]
  },
  'business-automation': {
    title: 'Business Automation Solutions',
    category: 'Production',
    keywords: ['Workflow Automation', 'Business Automation Company', 'Digital Transformation', 'Process Automation'],
    description: 'We connect your software tools with automated APIs so your team spends zero time copying data by hand.',
    challenge: 'Staff wasting hours moving data between separate software applications.',
    insight: 'Automating repetitive data transfers eliminates human error and speeds up work.',
    solution: 'We build automated workflows connecting your CRM, accounting, and messaging apps.',
    outcome: 'No manual data entry errors, faster team work, and less administrative headache.',
    faqs: [
      { q: 'What tools can you connect?', a: 'We connect HubSpot, Salesforce, Stripe, WhatsApp, custom databases, and popular business tools.' }
    ]
  },
  'crm-erp-development': {
    title: 'Custom CRM & ERP Software',
    category: 'Development',
    keywords: ['CRM Development Company', 'ERP Development Company', 'Business Management Software'],
    description: 'We build custom CRM and business management software designed around how your company actually operates.',
    challenge: 'Generic CRM software is expensive, rigid, and hard for staff to use.',
    insight: 'Software should fit your daily work, giving your team simple tools that speed up tasks.',
    solution: 'We design simple management portals with automated lead pipelines and reporting.',
    outcome: 'Full visibility over sales, streamlined daily work, and no monthly per-user software fees.',
    faqs: [
      { q: 'Can we move data from our old software?', a: 'Yes. We safely import your existing customer and lead data into the new custom platform.' }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design & Brand Styling',
    category: 'Branding',
    keywords: ['UI UX Design Company', 'User Experience Design', 'Product Design', 'Brand Identity'],
    description: 'We design digital product layouts and visual brand styles that look modern and guide users to buy.',
    challenge: 'Cluttered design confuses visitors and causes high bounce rates.',
    insight: 'Clean design makes decisions easy for visitors, guiding them naturally to inquire or purchase.',
    solution: 'We craft modern UI designs, interactive prototypes, and brand style guides.',
    outcome: 'A modern, professional brand presentation that converts more visitors.',
    faqs: [
      { q: 'What is the design process?', a: 'We start with wireframes, design high-fidelity layouts in Figma, test usability, and hand off clean files for development.' }
    ]
  },
  'cloud-solutions': {
    title: 'Cloud Infrastructure & Hosting',
    category: 'Production',
    keywords: ['Cloud Solutions Company', 'Cloud Architecture', 'Cloud Migration', 'AWS Consulting'],
    description: 'We set up and manage secure cloud hosting on AWS, Google Cloud, and Vercel.',
    challenge: 'Unoptimized web hosting causes slow page loading and unexpected site downtime.',
    insight: 'Modern cloud hosting delivers fast load times, reliable uptime, and strong security.',
    solution: 'We migrate websites and apps to fast cloud environments with automated backups.',
    outcome: 'Sub-second page speeds, 99.99% uptime, and predictable hosting costs.',
    faqs: [
      { q: 'Can you migrate our site without downtime?', a: 'Yes. We handle cloud migrations cleanly without taking your current site offline.' }
    ]
  }
};

// Aliases for seamless subcategory routing
solutionsData['ai-surveillance-security-solutions'] = solutionsData['ai-surveillance'] || subcategoryData['ai-surveillance'];
solutionsData['marketing-business-automation'] = solutionsData['business-automation'] || solutionsData['marketing-automation-crm'];
solutionsData['custom-web-app-development'] = solutionsData['website-development'] || subcategoryData['custom-web-app-development'];
solutionsData['ai-native-product-development'] = solutionsData['artificial-intelligence'] || subcategoryData['ai-native-product-development'];
solutionsData['performance-advertising'] = solutionsData['performance-marketing'] || subcategoryData['performance-advertising'];
solutionsData['seo-content-marketing'] = solutionsData['seo-services'] || subcategoryData['seo-content-marketing'];
solutionsData['social-media-management'] = subcategoryData['social-media-management'] || solutionsData['infynix-agency'];
solutionsData['marketing-automation-crm'] = subcategoryData['marketing-automation-crm'] || solutionsData['crm-erp-development'];
solutionsData['analytics-reporting'] = subcategoryData['analytics-reporting'] || solutionsData['data-platforms-dashboards'];
solutionsData['brand-strategy-positioning'] = subcategoryData['brand-strategy-positioning'] || solutionsData['infynix-agency'];
solutionsData['photography-videography'] = subcategoryData['photography-videography'] || solutionsData['infynix-media'];
solutionsData['short-form-social-content'] = subcategoryData['short-form-social-content'] || solutionsData['infynix-media'];
solutionsData['brand-films-commercials'] = subcategoryData['brand-films-commercials'] || solutionsData['infynix-media'];
solutionsData['ai-assisted-production'] = subcategoryData['ai-assisted-production'] || solutionsData['infynix-media'];
solutionsData['motion-graphics-animation'] = subcategoryData['motion-graphics-animation'] || solutionsData['infynix-media'];
solutionsData['iot-connected-systems'] = subcategoryData['iot-connected-systems'] || solutionsData['infynix-growth-solutions'];
solutionsData['api-systems-integration'] = subcategoryData['api-systems-integration'] || solutionsData['infynix-growth-solutions'];
solutionsData['data-platforms-dashboards'] = subcategoryData['data-platforms-dashboards'] || solutionsData['infynix-growth-solutions'];
solutionsData['podcast-audio-production'] = subcategoryData['podcast-audio-production'] || solutionsData['infynix-media'];

export const industriesData = {
  'healthcare': {
    name: 'Healthcare',
    heroTitle: 'Healthcare Growth & Automation Systems UAE',
    challenge: 'Healthcare teams struggle with paper forms, manual scheduling, and disconnected records — supporting UAE healthcare providers and private clinics with compliant, automated systems.',
    opportunity: 'Automate intake, deploy secure patient portals, and streamline daily scheduling for UAE clinics.',
    focusArea: 'Patient Portals & Telehealth Integrations',
    solutions: ['Patient portals, automated appointment reminders, and secure data storage.'],
    faqs: [
      { q: 'Is your healthcare software secure?', a: 'Yes. We follow strict data encryption and authentication standards to protect patient data.' }
    ],
    howItWorks: [
      { title: 'Digital Patient Intake', desc: 'Replace paper forms with smart online intake forms.', icon: 'clipboard-list' },
      { title: 'Automated Reminders', desc: 'Reduce missed appointments with SMS and email reminders.', icon: 'activity' },
      { title: 'Secure Portals', desc: 'Give patients easy access to records and appointment scheduling.', icon: 'shield-check' }
    ]
  },
  'education': {
    name: 'Education',
    heroTitle: 'Education Technology & Student Portals UAE',
    challenge: 'Outdated platforms make student registration frustrating — built for UAE academies, colleges, and EdTech providers.',
    opportunity: 'Modernize learning with fast student portals, online enrollment, and clear dashboards.',
    solutions: ['Custom LMS setups, online registration tools, and student portals.'],
    faqs: [
      { q: 'Can you integrate with existing databases?', a: 'Yes. We connect modern web portals with school databases using secure APIs.' }
    ],
    howItWorks: [
      { title: 'Simple Registration', desc: 'Automate student sign-ups and cut down administrative paperwork.', icon: 'graduation-cap' },
      { title: 'Student Dashboards', desc: 'Give students easy access to courses, schedules, and grades.', icon: 'monitor-play' },
      { title: 'Unified Systems', desc: 'Connect distinct department workflows into one easy portal.', icon: 'network' }
    ]
  },
  'construction': {
    name: 'Construction',
    heroTitle: 'Construction Project & Field Automation UAE',
    challenge: 'Managing field logs, contractor communications, and supply deliveries manually creates project delays — designed for UAE construction and civil engineering firms.',
    opportunity: 'Deploy unified mobile reporting, track site progress in real time, and streamline supply chain logistics.',
    solutions: ['Field reporting apps, contractor portals, and equipment tracking dashboards.'],
    faqs: [
      { q: 'Can field workers use these tools offline?', a: 'Yes. We build offline-first mobile apps that sync automatically once reconnected.' }
    ],
    howItWorks: [
      { title: 'Field Logging', desc: 'Empower supervisors to submit daily site reports and logs in seconds.', icon: 'hard-hat' },
      { title: 'Asset Tracking', desc: 'Track machinery, materials, and equipment across multiple job sites.', icon: 'truck' },
      { title: 'Subcontractor Hub', desc: 'Centralize blueprints, RFIs, and approvals in a single portal.', icon: 'building' }
    ]
  },
  'real-estate': {
    name: 'Real Estate',
    heroTitle: 'Real Estate Portals & Lead Systems UAE',
    challenge: 'Slow property listing sites lose buyers — tailored real estate software solutions for UAE property agencies and developers.',
    opportunity: 'Engage home buyers with fast property search, interactive maps, and automated lead routing.',
    solutions: ['Fast property listing engines, interactive map search, and CRM lead capture.'],
    faqs: [
      { q: 'Do you connect with property MLS feeds?', a: 'Yes. We automate listing updates by synchronizing directly with RETS/IDX feeds.' }
    ],
    howItWorks: [
      { title: 'Fast Listing Search', desc: 'Help buyers find properties instantly with responsive filters.', icon: 'home' },
      { title: 'Tour Scheduling', desc: 'Let prospective buyers request property tours directly online.', icon: 'calendar-check' },
      { title: 'Automated Lead Sync', desc: 'Send inquiry details instantly to your sales team.', icon: 'trending-up' }
    ]
  },
  'manufacturing': {
    name: 'Manufacturing',
    heroTitle: 'Manufacturing Operations & Supply Chain UAE',
    challenge: 'Siloed plant data, legacy machinery, and manual inventory tracking cause costly downtime — for UAE manufacturers managing supply chain and production data.',
    opportunity: 'Implement IoT telemetry, automate batch scheduling, and gain real-time inventory visibility.',
    solutions: ['Factory telemetry dashboards, automated inventory tracking, and predictive maintenance tools.'],
    faqs: [
      { q: 'Can your software connect to legacy PLC hardware?', a: 'Yes. We integrate IoT gateways and standard protocols like MQTT and OPC-UA.' }
    ],
    howItWorks: [
      { title: 'IoT Plant Telemetry', desc: 'Monitor production metrics, machine status, and energy usage live.', icon: 'factory' },
      { title: 'Inventory Automation', desc: 'Automate raw material reordering and warehouse tracking.', icon: 'cpu' },
      { title: 'Predictive Alerts', desc: 'Detect anomalies early to avoid unscheduled assembly line downtime.', icon: 'zap' }
    ]
  },
  'retail': {
    name: 'Retail & Commerce',
    heroTitle: 'Retail & E-Commerce Web Platforms UAE',
    challenge: 'Slow checkout pages cause cart abandonment — retail ecommerce software solutions for UAE retailers unifying inventory, customers, and channels.',
    opportunity: 'Increase online sales with fast mobile checkout, smart product recommendations, and simple carts.',
    solutions: ['Fast online stores, cart recovery tools, and sales reporting.'],
    faqs: [
      { q: 'Which e-commerce platforms do you support?', a: 'We build custom online stores using Shopify, BigCommerce, or custom web software.' }
    ],
    howItWorks: [
      { title: 'Fast Mobile Checkout', desc: 'Remove checkout friction so customers complete purchases quickly.', icon: 'shopping-cart' },
      { title: 'Product Recommendations', desc: 'Suggest relevant products to buyers during checkout.', icon: 'sparkles' },
      { title: 'Inventory Sync', desc: 'Keep stock levels updated automatically across all sales channels.', icon: 'globe' }
    ]
  },
  'hospitality': {
    name: 'Hospitality',
    heroTitle: 'Hospitality Booking Engines & Guest Portals UAE',
    challenge: 'High OTA commissions and disjointed guest check-ins eat into profit margins — for UAE hotel groups and hospitality operators.',
    opportunity: 'Drive direct bookings, provide contactless mobile check-in, and personalize guest experiences.',
    solutions: ['Direct booking engines, digital concierge web apps, and loyalty system sync.'],
    faqs: [
      { q: 'Does your system integrate with Opera / PMS?', a: 'Yes. We integrate seamlessly with major Property Management Systems via secure APIs.' }
    ],
    howItWorks: [
      { title: 'Direct Booking Engine', desc: 'Fast, seamless room reservation flows with zero commission loss.', icon: 'concierge-bell' },
      { title: 'Mobile Concierge', desc: 'Enable guests to order amenities and book services from their phone.', icon: 'smartphone' },
      { title: 'Loyalty Rewards', desc: 'Reward repeat guests and capture valuable guest preferences.', icon: 'coffee' }
    ]
  },
  'professional-services': {
    name: 'Professional Services',
    heroTitle: 'Practice Management & Client Portals UAE',
    challenge: 'Manual client onboarding, disorganized document exchanges, and delayed billing slow down billable hours — for UAE legal, accounting, and consultancy practices.',
    opportunity: 'Streamline client intake, automate document sign-offs, and accelerate billing cycles.',
    solutions: ['Secure client portals, automated engagement letters, and time-tracking integrations.'],
    faqs: [
      { q: 'How is confidential client data protected?', a: 'All documents and client portals feature end-to-end encryption and role-based access control.' }
    ],
    howItWorks: [
      { title: 'Automated Onboarding', desc: 'Collect KYC and sign engagement letters through smart digital workflows.', icon: 'briefcase' },
      { title: 'Secure Vault', desc: 'Exchange confidential audit, legal, and financial files securely.', icon: 'shield' },
      { title: 'Automated Invoicing', desc: 'Track project milestones and generate automated retainer invoices.', icon: 'credit-card' }
    ]
  }
};

export const caseStudiesData = [
  // ── DEVELOPMENT CATEGORY ──
  {
    slug: 'beyond-demands',
    category: 'Development',
    title: 'Salon Procurement & Multi-Branch Inventory System',
    client: 'Atmosot Wellcare',
    clientFull: 'ATMOSOTWELL CARE BEAUTY SERVICES LLP',
    description: 'Atmosot Wellcare (ATMOSOTWELL CARE BEAUTY SERVICES LLP) runs beauty and salon services across multiple branches. Before working with Infynix Solutions, procurement was managed through phone calls, WhatsApp messages and paper stock registers, with no shared visibility between branches, vendors and management.',
    before: [
      'Ordering done through calls and messages, no shared record',
      'Stock tracked on paper, varying branch to branch',
      'Low stock often noticed only after a product ran out',
      'No way for management to see stock or orders across branches'
    ],
    after: [
      'Vendor orders placed and tracked in one system, every branch',
      'Stock levels recorded consistently, one source of truth',
      'Low-stock alerts prompt reordering before shortages happen',
      'Management gets one dashboard view across all branches'
    ],
    quote: "Before this, keeping track of stock across branches meant a lot of calls and a lot of guesswork. Now every branch follows the same process, and I can see what's happening everywhere from one screen. It has made day-to-day ordering far less stressful for the whole team.",
    quoteAuthor: 'Atmosot Wellcare Management',
    challenge: 'Partner salons, warehouse teams, and management required distinct portal views into inventory, ordering, and dispatch without data leakage.',
    objectives: 'Ship one multi-tenant platform with three dedicated operational portals while maintaining strict data security and real-time stock sync.',
    strategy: 'Built with Next.js and PostgreSQL Row-Level Security to ensure tenant data safety and automated low-stock reordering alerts.',
    technology: 'Next.js, React 19, Prisma, PostgreSQL, NextAuth, Node.js',
    execution: 'Implemented Postgres security policies, transaction locking for inventory dispatch, automated low-stock alerts, and instant order WhatsApp notifications.',
    results: 'One unified codebase, 100% inventory visibility across all branches, and zero data leakage between client accounts.'
  },
  {
    slug: 'task-management-system',
    category: 'Development',
    title: 'Multi-Role SaaS Platform for Field Team & Task Operations',
    client: 'TMS Enterprise',
    clientFull: 'TMS OPERATIONAL SOLUTIONS',
    description: 'TMS Enterprise managed field teams across multiple geographic zones using paper logs and fragmented instant messaging groups, causing delayed task updates and zero real-time accountability.',
    before: [
      'Field employee progress tracked manually via calls and messaging apps',
      'No offline support when field workers operated in low-connectivity zones',
      'Managers lacked live status dashboards across regional teams',
      'Duplicate task assignments and missed SLA deadlines'
    ],
    after: [
      'Dedicated web portal for managers and Flutter mobile app for field staff',
      'Full offline SQLite sync ensuring 100% uptime in remote areas',
      'Automated task dispatch, geo-tagging, and live SLA tracking',
      'Real-time executive dashboard for multi-tier role management'
    ],
    quote: "TMS transformed our field team operations. Our site engineers can log work offline without losing data, and management sees progress in real time. Task completion speed jumped dramatically.",
    quoteAuthor: 'TMS Operations Director',
    challenge: 'Infynix built an internal software suite to manage team tasks across multiple roles (Super Admin, Org Admin, Team Lead, Employee).',
    objectives: 'Build a scalable multi-role platform with clear separation between web management and mobile execution, supporting offline work for field employees.',
    strategy: 'Web app built in React and Node.js for managers; mobile app built with Flutter and SQLite for field staff working offline.',
    technology: 'React, Vite, Node.js, Express, MongoDB, SQLite, Flutter',
    execution: 'Shipped 17+ custom frontend modules, role-based access control, and built SQLite offline synchronization.',
    results: '17+ custom pages shipped across one unified platform with 100% offline support for field staff.'
  },
  {
    slug: 'agency-os',
    category: 'Development',
    title: 'Client Onboarding & Project Management Operating System',
    client: 'Agency OS',
    clientFull: 'AGENCY OS PLATFORM',
    description: 'A comprehensive client management and billing portal built for fast-scaling digital agencies struggling with email-based client communication, delayed milestone approvals, and manual invoice tracking.',
    before: [
      'Client communication scattered across WhatsApp, Slack, and email threads',
      'Manual invoice generation and delayed milestone sign-offs',
      'No central client portal for file sharing and project tracking',
      'Lack of automated revenue reporting and agency capacity planning'
    ],
    after: [
      'Centralized white-label portal for client approvals, deliverables, and tickets',
      'Automated Stripe invoicing and recurring milestone billing workflows',
      'Real-time project roadmap and client feedback submission interface',
      'Unified admin analytics for retainer revenue and team bandwidth'
    ],
    quote: "Agency OS gave our clients a single, professional portal. It cut client management emails by half and sped up invoice payments dramatically.",
    quoteAuthor: 'Agency OS Co-Founder',
    challenge: 'Agencies lose productive hours managing client updates through fragmented email threads and manual billing systems.',
    objectives: 'Provide digital agencies with an end-to-end client workspace for project delivery, asset management, automated billing, and ticketing.',
    strategy: 'Built a modular React single-page application backed by Node.js web services and Stripe webhooks.',
    technology: 'React 19, Node.js, Express, PostgreSQL, Stripe API, TailwindCSS',
    execution: 'Engineered custom client dashboards, automated milestone approval notifications, and Stripe recurring billing integration.',
    results: '50% reduction in administrative client emails, 3x faster client onboarding, and automated monthly retainer collection.'
  },
  {
    slug: 'ai-surveillance',
    category: 'Development',
    title: 'AI Face Recognition & Surveillance System',
    client: 'Infynix Vision AI',
    clientFull: 'INFYNIX AI SURVEILLANCE SYSTEMS',
    description: 'Facilities relying on manual attendance and access checks needed a way to identify and track individuals across multiple camera feeds in real time. Infynix built a containerized face-recognition surveillance platform combining a high-accuracy detection engine with live video streaming and a mobile enrollment app.',
    before: [
      'Identity verification and monitoring done manually across camera feeds',
      'No way to track a person consistently as they moved between cameras',
      'Face enrollment required manual, in-person setup with no mobile option',
      'No safeguard against false positives when a person briefly left frame'
    ],
    after: [
      'Real-time face recognition running on InsightFace (ArcFace/SCRFD) and YOLOv8',
      'Cross-camera de-duplication so the same person isn’t double-counted across feeds',
      'OUT confirmation buffer logic to prevent false exits from momentary occlusion',
      'Flutter mobile app for on-the-go face enrollment',
      'Geofencing to trigger zone-based alerts automatically'
    ],
    quote: "The system reliably tracks people across every camera without losing them at the handoff points, and the mobile enrollment app means we're not tied to a desk to add someone new.",
    quoteAuthor: 'Facility Operations Lead',
    challenge: 'Manual identity checks and single-camera monitoring couldn’t track individuals consistently as they moved through a multi-camera facility, and enrollment required in-person desktop access.',
    objectives: 'Build a containerized, real-time face recognition system with reliable cross-camera tracking, low-latency inference, and mobile-based enrollment.',
    strategy: 'Combined InsightFace and YOLOv8 for detection/recognition with DeepSort for tracking and FAISS for fast similarity search, wrapped in a FastAPI engine with ONNX Runtime optimization and a TTL-based recognition cache.',
    technology: 'Python, FastAPI, InsightFace (ArcFace/SCRFD), YOLOv8, DeepSort, FAISS, ONNX Runtime, Docker, Node.js, React, MediaMTX, Flutter',
    execution: 'Built the Docker-based FastAPI face engine, integrated MediaMTX for RTSP/WebRTC streaming, implemented OUT confirmation buffering and geofencing logic, shipped a Flutter enrollment app, and delivered handover documentation for the engineering team.',
    results: 'Reliable real-time recognition across multiple camera feeds with no duplicate tracking, faster enrollment via mobile, and a fully documented handover for ongoing maintenance.'
  },

  // ── MEDIA CATEGORY ──
  {
    slug: 'salon-branding-menucard',
    category: 'Media',
    title: 'Salon Service Menu & Beauty Brand Visual Identity',
    client: 'Lumora Luxury Salon',
    clientFull: 'LUMORA BEAUTY & SPA SERVICES (UAE)',
    description: 'Lumora Beauty & Spa Services in UAE needed a luxury service menu card design, premium print collateral, and a cohesive visual brand revamp to reflect high-end hair, spa, and beauty treatments across its UAE branches.',
    before: [
      'Outdated service price lists and uninspired paper flyers',
      'Fragmented brand identity across social media and physical salon collateral',
      'Low visibility on premium salon treatment packages and VIP memberships'
    ],
    after: [
      'Luxury gold-accented salon service menu card detailing hair, spa, and beauty treatments',
      'Cohesive brand guidelines across digital social channels, printed menus, and salon reception',
      'Digital QR menu integration allowing clients to browse treatment packages on mobile'
    ],
    quote: "The new service menu card and brand identity created by Infynix Media gave our salon the luxury UAE feel we wanted. Our clients love the elegant service presentation.",
    quoteAuthor: 'Lumora Salon Management (UAE)',
    challenge: 'Outdated price list flyers diluted Lumora\'s luxury positioning in the competitive UAE beauty and wellness market.',
    objectives: 'Elevate brand perception across UAE branches with a luxury salon service menu, tactile print assets, and digital QR menu access.',
    strategy: 'Custom typography hierarchy, gold-foil print menu layouts, treatment package categorization, and digital QR integration.',
    execution: 'Designed print-ready high-resolution salon menu cards, social media brand kits, and digital salon service menus.',
    results: '200% increase in high-tier treatment package bookings and premium brand recognition across UAE branches.'
  },
  {
    slug: 'corporate-brand-identity',
    category: 'Media',
    title: 'Salon Visiting Card & Corporate Visual Identity',
    client: 'Hair Studio De Luxe',
    clientFull: 'ATMOSOTWELL CARE BEAUTY SERVICES LLP',
    description: 'ATMOSOTWELL CARE BEAUTY SERVICES LLP, operating as Hair Studio De Luxe, began its journey in 2018 in Thrissur and has emerged as one of the top beauty and wellness companies in Kerala. With active branches in Thrissur, Edappal, Pattambi, K Mall Kakkatil, and Perumpilavu, they needed executive visiting cards and a unified visual brand identity.',
    before: [
      'Inconsistent visiting card designs across expanding branch locations in Kerala',
      'Standard paper cards that failed to reflect Hair Studio De Luxe\'s premium service standards',
      'No digital contact integration for branch managers, stylists, and VIP client relations'
    ],
    after: [
      'Luxury foil-stamped salon visiting cards with QR/NFC digital contact sharing',
      'Unified corporate visual identity guidelines across all 5+ Hair Studio De Luxe salon branches',
      'Instant digital contact saving for clients booking premium hair and beauty treatments'
    ],
    quote: "Our new Hair Studio De Luxe visiting cards and brand collateral perfectly reflect our journey from 2018 to becoming one of Kerala's premier salon chains.",
    quoteAuthor: 'Hair Studio De Luxe Management (ATMOSOTWELL CARE)',
    challenge: 'Rapid branch expansion across Kerala required a unified, high-end visual brand identity and executive visiting cards for salon management.',
    objectives: 'Design luxury visiting cards and brand collateral that project trust, elegance, and corporate consistency across all salon branches.',
    strategy: 'Bespoke salon typography, luxury foil-stamped print specifications, and digital QR/NFC vCard contact integration.',
    execution: 'Created executive visiting card suite, digital contact sharing systems, and branch brand guidelines for Hair Studio De Luxe.',
    results: 'Standardized visual identity across 5+ Kerala branches and elevated client brand perception.'
  },

  // ── AGENCY CATEGORY ──
  {
    slug: 'performance-ad-campaign',
    category: 'Agency',
    title: 'Multi-Channel Paid Ads & ROI Scaling Campaign',
    client: 'Velox Growth',
    clientFull: 'VELOX COMMERCE & GROWTH SERVICES',
    description: 'Velox struggled with skyrocketing cost-per-acquisition (CPA) on Google and Meta ad campaigns due to unoptimized ad creatives, outdated audience targeting, and slow landing page conversion rates.',
    before: [
      'High ad spend ($15k+/month) with inconsistent lead quality and rising CPA',
      'Generic ad copy and creative fatigue causing low click-through rates (CTR)',
      'Disconnected analytics missing server-side conversion tracking'
    ],
    after: [
      'High-converting video ad hooks and targeted audience interest segmentation',
      'Server-side Meta CAPI & Google Ads Conversion API setup for 100% tracking accuracy',
      'Custom high-speed React landing pages optimized for maximum conversion'
    ],
    quote: "Infynix Agency turned our ad campaigns around within 30 days. Our cost per lead dropped by 42% while overall lead volume doubled.",
    quoteAuthor: 'Velox CMO',
    challenge: 'Wasted ad budgets on broad click campaigns that failed to convert into qualified customer inquiries.',
    objectives: 'Scale monthly ad lead volume while cutting cost-per-acquisition (CPA) by at least 30% through creative testing and server-side tracking.',
    strategy: 'Dynamic ad creative matrix, pre-rendered high-speed landing pages, and automated retargeting funnels.',
    execution: 'Ran 50+ ad variation tests, integrated Meta CAPI, designed conversion-focused landing pages, and optimized lead routing into client CRM.',
    results: '42% reduction in CPA, 2.8x Return on Ad Spend (ROAS), and 120+ qualified enterprise leads generated monthly.'
  }
];

export const insightsData = [
  {
    slug: 'what-is-growth-engineering',
    title: 'What is Growth Engineering and Why Your Business Needs It',
    category: 'Growth Engineering',
    summary: 'Learn why disconnected marketing tools fail and how connected search, media, and software build reliable growth.',
    content: `
      Businesses rarely struggle from a lack of effort. They struggle because their website, search strategy, paid ads, and software tools work separately.
      
      Growth Engineering fixes this. At Infynix Solutions, we build unified digital systems where search pre-rendering, fast web apps, paid ads, and daily software tools work together cleanly.
      
      When your website loads in less than a second, ranks high on Google, and sends inquiries straight to your CRM, getting new clients becomes straightforward and predictable.
    `,
    date: 'September 6, 2026',
    author: 'Infynix Tech Lab'
  },
  {
    slug: 'ai-surveillance-computer-vision-security',
    title: 'How Real-Time AI Computer Vision Improves Facility Security',
    category: 'AI Surveillance',
    summary: 'Discover how edge-processed AI computer vision on local devices turns CCTV into active security.',
    content: `
      Traditional CCTV cameras only record video. Security teams usually review footage after an incident has already happened.
      
      AI computer vision changes this. By running AI vision models on local edge hardware like NVIDIA Jetson, your cameras process video streams in real time.
      
      Intrusions and boundary breaches are detected instantly, alerting your security team before issues escalate. Because processing happens on-site, your video data remains completely private.
    `,
    date: 'September 6, 2026',
    author: 'Infynix AI Team'
  }
];
