// Insights articles for the UAE site.
//
// Each article has a short lead (`content`, split on blank lines), a set of
// `sections` (heading plus paragraphs) and `sources`: the outbound citations
// the article relies on. Written for UAE readers: the Personal Data
// Protection Law, the Federal Tax Authority, the e-invoicing programme,
// WhatsApp-first selling and Arabic and English audiences.

export const insightsData = [
  {
    slug: 'what-is-growth-engineering',
    title: 'What is Growth Engineering and Why Your Business Needs It',
    category: 'Growth Engineering',
    summary:
      'Why UAE businesses lose enquiries between their website, their ads and their systems, and how connecting them, with WhatsApp, VAT and the PDPL designed in, produces a number the owner can trust.',
    content: `
      A Dubai business rarely lacks marketing. It has a website, it runs Meta and Google campaigns, it has a CRM someone configured, and it has a WhatsApp number that does most of the actual selling. The pieces were bought separately and they behave separately. The enquiries fall between them.

      Growth Engineering is the practice of closing those gaps on purpose: a site search engines can read in Arabic and English, campaigns measured against a lead the sales team applies, WhatsApp inside the CRM rather than on personal phones, and systems that carry the enquiry from click to a VAT-compliant invoice without re-keying.
    `,
    sections: [
      {
        heading: 'The number nobody owns',
        paragraphs: [
          'Ask a UAE business owner what last month’s marketing produced and the answer is usually three reports that disagree: the agency’s lead count, the sales manager’s view of which of those were real, and the accounts. Each supplier optimises its own piece. The web developer blames the leads, the agency blames the website, the CRM was set up by someone who left.',
          'Growth Engineering starts by making one team responsible for the number the owner cares about, spend against revenue, and then building the plumbing that produces it every month without a spreadsheet.',
        ],
      },
      {
        heading: 'A site Google can read, in both languages',
        paragraphs: [
          'Many UAE business sites are built on JavaScript frameworks that ship an empty page and fill it in the browser. Google renders JavaScript in a second pass, with a delay and not always completely, and its own JavaScript SEO documentation recommends server-side or pre-rendering for content that must be indexed. Arabic pages add a second requirement: proper language markup and right-to-left layout designed in, not bolted on.',
          'Our own sites are pre-rendered for this reason, and the same fix on a client’s site is usually the largest technical gain available. Core Web Vitals are treated as acceptance criteria for every page.',
        ],
      },
      {
        heading: 'WhatsApp is the sales floor',
        paragraphs: [
          'In the UAE the customer expects a reply on WhatsApp within minutes, and the business that replies first usually wins the viewing, the consultation or the order. Research published in Harvard Business Review found that firms which contacted a lead within an hour were far more likely to qualify it, and that most firms did not manage even that. On WhatsApp the window is shorter.',
          'The engineering answer is the official WhatsApp Business API inside the CRM: leads routed to the right salesperson in seconds, an automatic acknowledgement in the customer’s language, escalation if nobody responds, and every conversation on the contact record rather than on a personal phone that leaves with the employee.',
        ],
      },
      {
        heading: 'Measurement under the PDPL',
        paragraphs: [
          'The UAE Personal Data Protection Law sets out how personal data must be collected and used, and free zones such as DIFC and ADGM have their own regimes. Consent and purpose belong on the customer record, not in a banner added later. Measurement configured with consent in mind, and with outcomes fed back to the platforms as offline conversions, keeps the business compliant and keeps the campaigns learning from qualified leads rather than form fills.',
        ],
      },
      {
        heading: 'From deal to tax invoice without re-keying',
        paragraphs: [
          'The last gap is between the CRM and the accounts. A deal closed in the CRM is re-keyed into Zoho Books, QuickBooks or Odoo, VAT is applied by hand, and the salesperson never learns the invoice is overdue. Connecting the two with Federal Tax Authority invoice formats applied automatically, and with the data structures the e-invoicing programme will require as it phases in, closes the loop: the campaign that produced the enquiry can be matched to the revenue it produced.',
          'That is Growth Engineering in practice. Not another platform, but the connections between the platforms a business already has, built so the owner’s question can be answered every month.',
        ],
      },
      {
        heading: 'Where to start',
        paragraphs: [
          'Three questions decide the order of work. Can Google read the site in both languages? Does sales agree what a lead is, and is it applied in the CRM? Can a closed deal be traced to the campaign that produced it? The first no is where the engineering begins.',
        ],
      },
    ],
    sources: [
      { label: 'Google Search Central: Understand JavaScript SEO basics', url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics' },
      { label: 'web.dev: Rendering on the web', url: 'https://web.dev/articles/rendering-on-the-web' },
      { label: 'web.dev: Web Vitals', url: 'https://web.dev/articles/vitals' },
      { label: 'Harvard Business Review: The Short Life of Online Sales Leads', url: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads' },
      { label: 'WhatsApp Business Platform documentation', url: 'https://developers.facebook.com/docs/whatsapp/' },
      { label: 'UAE Government: Data protection laws', url: 'https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws' },
      { label: 'Federal Tax Authority', url: 'https://tax.gov.ae/en/' },
      { label: 'Ministry of Finance: E-invoicing programme', url: 'https://www.moec.gov.ae/en/e-invoicing-programme' },
      { label: 'Google Analytics Help: Consent mode', url: 'https://support.google.com/analytics/answer/9976101' },
    ],
    related: [
      { label: 'Infynix Agency: performance marketing and search', path: '/solutions/infynix-agency' },
      { label: 'SEO services and search infrastructure', path: '/solutions/seo-services' },
      { label: 'Marketing automation and CRM', path: '/solutions/marketing-automation-crm' },
      { label: 'Custom CRM and ERP software', path: '/solutions/crm-erp-development' },
    ],
    date: 'September 6, 2026',
    author: 'Infynix Tech Lab',
  },
  {
    slug: 'ai-surveillance-computer-vision-security',
    title: 'How Real-Time AI Computer Vision Improves Facility Security',
    category: 'AI Vision',
    summary:
      'How object detection on edge hardware turns recorded video into live alerts for UAE warehouses, yards, sites and retail, and how to deploy it within the Personal Data Protection Law.',
    content: `
      Most UAE facilities record video that nobody watches. A guard cannot attend to forty feeds, so incidents in a Jebel Ali warehouse, a construction site or a car park are found afterwards, and the footage becomes evidence rather than prevention.

      Computer vision changes what cameras are for. A model running on hardware at the site watches every feed continuously, detects the conditions that matter and raises an alert with a clip while there is still time to act. Done properly, it also produces the safety record that operations and HSE teams have never had.
    `,
    sections: [
      {
        heading: 'Conditions, not identities',
        paragraphs: [
          'Object detection models such as the YOLO family identify people, vehicles and objects in each frame and track them across frames. That is enough to express most security and safety needs as rules: a person inside a fence line at night, a vehicle in a loading bay too long, a forklift and a pedestrian in the same aisle, a worker without a hard hat in a live zone, a fire exit blocked.',
          'None of these require knowing who the person is. Designing around conditions rather than identities keeps the system accurate and keeps the data protection analysis straightforward. Biometric identification of individuals is a separate decision with a much higher bar and is rarely needed for security or safety outcomes.',
        ],
      },
      {
        heading: 'The legal frame in the UAE',
        paragraphs: [
          'Video of identifiable people is personal data. The UAE Personal Data Protection Law requires a lawful basis, purpose limitation and appropriate security, and the DIFC and ADGM free zones have their own data protection regimes with their own regulators. Emirate-level rules on security systems apply to many premises, and a facility should be able to explain what its analytics do, why, and for how long footage is kept.',
          'A deployment that starts with a written data protection assessment for the specific site, states plainly on signage what the system detects, masks public areas where required and keeps footage on the premises tends to satisfy the requirements without difficulty.',
        ],
      },
      {
        heading: 'Why processing stays on site',
        paragraphs: [
          'Streaming every camera to the cloud is expensive, slow and creates a large store of footage nobody wants to hold. Edge hardware such as NVIDIA’s Jetson modules runs detection at the site, so only events with short clips leave the premises, the system keeps working when the connection drops, and questions about where footage is held are answered simply. Heat and dust are real considerations for hardware in UAE plant rooms and yards, and enclosure and cooling are part of the design.',
          'Existing cameras can usually be reused. A survey assesses each one’s resolution, angle and lighting, including the harsh midday light and night conditions of open yards, and only the gaps are filled.',
        ],
      },
      {
        heading: 'False alarms decide whether anyone responds',
        paragraphs: [
          'Sites with motion-triggered alarms turn them off within weeks because animals, blowing sand, headlights and moving shadows fire them all night and the security team stops responding. Object detection tuned to the site distinguishes a person at the fence from a stray cat and a vehicle in the yard from a flapping tarpaulin.',
          'The honest measure is the false alarm rate against the previous system, measured in a pilot on real events, with zones and thresholds tuned in the first weeks. An alert that carries a clip lets the responder confirm before anyone is sent.',
        ],
      },
      {
        heading: 'A safety record the site never had',
        paragraphs: [
          'Near misses between forklifts and people, PPE lapses and exclusion zone breaches happen every day on busy logistics and construction sites and are almost never recorded, so safety managers work from incident reports written after someone was hurt. A vision system logs the near misses as they happen, by zone, shift and time of day, and gives the evidence for a layout change, a training intervention or a conversation with a subcontractor.',
        ],
      },
      {
        heading: 'How a deployment runs',
        paragraphs: [
          'Survey and data protection assessment first. A pilot on a handful of cameras with the false alarm rate measured. Rollout with alerts delivered to phones, the control room, the incident system or access control in the format each expects, and a tuning period on real events. A managed service keeps the hardware healthy in UAE conditions, the models current and the reporting flowing to security and safety teams.',
        ],
      },
    ],
    sources: [
      { label: 'UAE Government: Data protection laws', url: 'https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws' },
      { label: 'Ultralytics YOLO documentation', url: 'https://docs.ultralytics.com/' },
      { label: 'NVIDIA Jetson modules', url: 'https://developer.nvidia.com/embedded/jetson-modules' },
      { label: 'UK Health and Safety Executive: Workplace transport', url: 'https://www.hse.gov.uk/workplacetransport/', note: 'a widely used reference on vehicle and pedestrian separation' },
      { label: 'ICO guidance on artificial intelligence and data protection', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/', note: 'a clear framework for explaining automated systems, useful beyond the UK' },
    ],
    related: [
      { label: 'AI vision and security analytics', path: '/solutions/ai-surveillance' },
      { label: 'Artificial intelligence and AI integration', path: '/solutions/artificial-intelligence' },
      { label: 'Infynix Growth Solutions: software and systems', path: '/solutions/infynix-growth-solutions' },
    ],
    date: 'September 6, 2026',
    author: 'Infynix AI Team',
  },
];
