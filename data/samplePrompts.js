const samplePrompts = [
  {
    title: "SEO Blog Post Writer",
    description: "Generate SEO-optimized blog posts with perfect structure, keywords, and engaging content that ranks on Google.",
    content: "Write a comprehensive, SEO-optimized blog post about [TOPIC]. Include:\n- An attention-grabbing headline\n- Clear introduction with hook\n- 5-7 H2 subheadings with detailed content\n- Natural keyword integration\n- Internal linking suggestions\n- Compelling conclusion with CTA\n- Meta description (150-160 characters)\nTone: [Professional/Casual/Friendly]\nTarget audience: [Define audience]\nPrimary keyword: [KEYWORD]",
    category: "Content Writing",
    price: 12.99,
    rating: 4.8,
    tags: ["SEO", "blogging", "content marketing", "copywriting"],
    aiModel: "ChatGPT, Claude, Gemini",
    useCases: ["Blog writing", "Content marketing", "SEO optimization"]
  },
  {
    title: "React Component Generator",
    description: "Create production-ready React components with TypeScript, proper typing, and best practices.",
    content: "Generate a React component with the following requirements:\n- Component name: [COMPONENT_NAME]\n- Functionality: [DESCRIBE_FUNCTIONALITY]\n- Props interface with TypeScript types\n- useState and useEffect hooks where needed\n- Proper error handling\n- Accessibility features (ARIA labels)\n- Responsive design with Tailwind CSS\n- JSDoc comments for documentation\n- Unit test template\nStyle: Follow React best practices and hooks patterns",
    category: "Code Generation",
    price: 15.99,
    rating: 4.9,
    tags: ["React", "TypeScript", "Frontend", "Web Development"],
    aiModel: "ChatGPT, Claude, GitHub Copilot",
    useCases: ["React development", "TypeScript coding", "Component creation"]
  },
  {
    title: "Social Media Ad Copy Bundle",
    description: "Create high-converting ad copy for Facebook, Instagram, LinkedIn, and Twitter with A/B test variations.",
    content: "Create compelling ad copy for:\nProduct/Service: [NAME]\nTarget Audience: [DEMOGRAPHICS & INTERESTS]\nUnique Value Proposition: [UVP]\nCall-to-Action: [CTA]\n\nGenerate for each platform:\n1. Facebook Ad:\n   - Primary text (125 characters)\n   - Headline (40 characters)\n   - Description (30 characters)\n   - 3 A/B test variations\n\n2. Instagram Ad:\n   - Caption with emojis\n   - 5 hashtags\n   - Story version\n\n3. LinkedIn Ad:\n   - Professional copy\n   - B2B focused\n\n4. Twitter/X:\n   - Thread of 3 tweets\n   - Character optimized",
    category: "Marketing",
    price: 18.99,
    rating: 4.7,
    tags: ["social media", "advertising", "copywriting", "marketing"],
    aiModel: "ChatGPT, Claude, Jasper",
    useCases: ["Social media marketing", "Ad campaigns", "Brand awareness"]
  },
  {
    title: "Python API Builder",
    description: "Generate FastAPI or Flask REST APIs with proper structure, authentication, and database integration.",
    content: "Create a Python REST API with:\n- Framework: [FastAPI/Flask]\n- Endpoints needed: [LIST_ENDPOINTS]\n- Database: [PostgreSQL/MongoDB/MySQL]\n- Authentication: JWT tokens\n- Features to include:\n  * CRUD operations\n  * Input validation with Pydantic\n  * Error handling middleware\n  * Rate limiting\n  * API documentation (Swagger/OpenAPI)\n  * Environment variables for config\n  * Docker containerization\n  * Unit tests with pytest\n  * Logging setup\nProvide: Complete code structure with all files",
    category: "Code Generation",
    price: 22.99,
    rating: 4.9,
    tags: ["Python", "API", "Backend", "FastAPI", "Flask"],
    aiModel: "ChatGPT, Claude, GitHub Copilot",
    useCases: ["API development", "Backend services", "Microservices"]
  },
  {
    title: "Email Marketing Sequence",
    description: "Design a complete email marketing sequence with subject lines, body copy, and follow-up strategy.",
    content: "Create an email marketing sequence for:\nProduct/Service: [NAME]\nGoal: [Conversion/Engagement/Nurture]\nAudience: [DESCRIPTION]\nSequence length: [NUMBER] emails\n\nFor each email provide:\n1. Subject line (3 variations)\n2. Preview text\n3. Email body (HTML and plain text)\n4. CTA button text\n5. Follow-up timing\n\nInclude:\n- Welcome email\n- Value-driven content emails\n- Social proof/testimonials\n- Limited-time offer\n- Re-engagement email\n\nTone: [Professional/Friendly/Urgent]\nPersonalization tokens: [NAME, COMPANY, etc.]",
    category: "Marketing",
    price: 16.99,
    rating: 4.6,
    tags: ["email marketing", "copywriting", "automation", "nurture campaign"],
    aiModel: "ChatGPT, Claude, Jasper",
    useCases: ["Email campaigns", "Lead nurturing", "Customer retention"]
  },
  {
    title: "UI/UX Design Brief Generator",
    description: "Create comprehensive design briefs for apps and websites with user flows, wireframes descriptions, and design systems.",
    content: "Generate a complete UI/UX design brief for:\nProject: [PROJECT_NAME]\nType: [Web App/Mobile App/Website]\nTarget Users: [USER_PERSONAS]\nCore Features: [LIST_FEATURES]\n\nInclude:\n1. Executive Summary\n2. User Research Insights\n3. User Personas (3 detailed personas)\n4. User Journey Maps\n5. Information Architecture\n6. Wireframe Descriptions (key screens)\n7. Design System Guidelines:\n   - Color palette with hex codes\n   - Typography scale\n   - Spacing system\n   - Component library needs\n8. Interaction Patterns\n9. Accessibility Requirements (WCAG 2.1)\n10. Success Metrics\n\nFormat: Professional design brief ready for designers",
    category: "Design",
    price: 19.99,
    rating: 4.8,
    tags: ["UI/UX", "design", "wireframes", "user experience"],
    aiModel: "ChatGPT, Claude",
    useCases: ["Product design", "Web design", "App design"]
  },
  {
    title: "Business Plan Generator",
    description: "Create a comprehensive business plan with financial projections, market analysis, and growth strategies.",
    content: "Generate a detailed business plan for:\nBusiness Name: [NAME]\nIndustry: [INDUSTRY]\nBusiness Model: [B2B/B2C/SaaS/etc.]\nFunding Goal: [AMOUNT]\n\nInclude all sections:\n1. Executive Summary\n2. Company Description\n3. Market Analysis:\n   - Industry overview\n   - Target market segments\n   - Competitive analysis (SWOT)\n4. Organization & Management\n5. Products/Services:\n   - Detailed descriptions\n   - Unique value propositions\n   - Pricing strategy\n6. Marketing & Sales Strategy:\n   - Customer acquisition\n   - Sales funnel\n   - Growth tactics\n7. Financial Projections (3 years):\n   - Revenue forecast\n   - Expense budget\n   - Cash flow statement\n   - Break-even analysis\n8. Funding Requirements\n9. Appendix\n\nFormat: Investment-ready document",
    category: "Business",
    price: 29.99,
    rating: 4.7,
    tags: ["business plan", "startup", "entrepreneurship", "strategy"],
    aiModel: "ChatGPT, Claude",
    useCases: ["Startup planning", "Investor pitch", "Business strategy"]
  },
  {
    title: "SQL Query Optimizer",
    description: "Analyze and optimize SQL queries for better performance with indexing recommendations and query rewriting.",
    content: "Optimize the following SQL query:\n[PASTE_YOUR_QUERY]\n\nDatabase: [PostgreSQL/MySQL/SQL Server]\nTable structures: [DESCRIBE_TABLES]\nCurrent performance issue: [DESCRIBE_ISSUE]\n\nProvide:\n1. Optimized query with explanation\n2. Indexing recommendations:\n   - Which columns to index\n   - Index types (B-tree, Hash, etc.)\n   - Composite index suggestions\n3. Query execution plan analysis\n4. Alternative query approaches\n5. Performance improvement estimate\n6. Best practices applied:\n   - Avoiding N+1 queries\n   - Proper JOIN usage\n   - Subquery optimization\n   - Avoiding SELECT *\n7. Monitoring recommendations\n\nBonus: Provide before/after performance metrics",
    category: "Code Generation",
    price: 14.99,
    rating: 4.9,
    tags: ["SQL", "database", "performance", "optimization"],
    aiModel: "ChatGPT, Claude, GitHub Copilot",
    useCases: ["Database optimization", "Query tuning", "Performance improvement"]
  },
  {
    title: "YouTube Script Writer",
    description: "Write engaging YouTube scripts with hooks, timestamps, and CTAs that keep viewers watching.",
    content: "Create a YouTube video script for:\nTopic: [VIDEO_TOPIC]\nDuration: [MINUTES]\nTarget Audience: [AUDIENCE]\nVideo Style: [Tutorial/Vlog/Review/Educational]\n\nScript structure:\n1. Hook (First 15 seconds):\n   - Attention grabber\n   - Value proposition\n   - Tease the outcome\n\n2. Introduction (30 seconds):\n   - Welcome message\n   - Channel intro\n   - What viewers will learn\n\n3. Main Content (with timestamps):\n   - Section 1: [TOPIC]\n   - Section 2: [TOPIC]\n   - Section 3: [TOPIC]\n   (Include pattern interrupts every 2 minutes)\n\n4. Call-to-Action:\n   - Subscribe reminder\n   - Like/Comment prompt\n   - Next video suggestion\n\n5. Outro:\n   - Summary\n   - Final CTA\n   - End screen elements\n\nInclude:\n- B-roll suggestions\n- On-screen text ideas\n- Thumbnail concept\n- SEO title & description\n- 15 hashtags",
    category: "Content Writing",
    price: 17.99,
    rating: 4.8,
    tags: ["YouTube", "video script", "content creation", "video marketing"],
    aiModel: "ChatGPT, Claude, Jasper",
    useCases: ["YouTube videos", "Video content", "Script writing"]
  },
  {
    title: "Resume & Cover Letter Builder",
    description: "Create ATS-optimized resumes and compelling cover letters tailored to specific job descriptions.",
    content: "Create a professional resume and cover letter for:\nJob Title: [JOB_TITLE]\nCompany: [COMPANY_NAME]\nJob Description: [PASTE_JD]\nYour Background:\n- Current Role: [ROLE]\n- Experience: [YEARS]\n- Key Skills: [LIST_SKILLS]\n- Major Achievements: [ACHIEVEMENTS]\n- Education: [DEGREES]\n\nDeliver:\n1. ATS-Optimized Resume:\n   - Professional summary\n   - Core competencies\n   - Work experience (with STAR method)\n   - Education\n   - Certifications\n   - Skills section\n   - Keyword optimized for ATS\n\n2. Cover Letter:\n   - Personalized greeting\n   - Strong opening paragraph\n   - 2-3 body paragraphs highlighting:\n     * Relevant experience\n     * Key achievements with metrics\n     * Why you're perfect for the role\n   - Compelling closing\n   - Professional sign-off\n\n3. LinkedIn Profile Updates:\n   - Headline\n   - About section\n   - Experience bullets\n\nFormat: Both Word doc and PDF versions",
    category: "Business",
    price: 13.99,
    rating: 4.6,
    tags: ["resume", "career", "job search", "cover letter"],
    aiModel: "ChatGPT, Claude",
    useCases: ["Job applications", "Career advancement", "Professional branding"]
  }
];

module.exports = samplePrompts;
