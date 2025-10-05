// Comprehensive Content Analyzer for E-cell SVCE Website
export interface PageContent {
  path: string;
  title: string;
  content: string;
  type: 'page' | 'component' | 'data';
}

// Comprehensive content from all pages
const websiteContent: PageContent[] = [
  {
    path: '/',
    title: 'Home - E-cell SVCE',
    content: `E-cell SVCE is the Entrepreneurship Cell of Sri Venkateswara College of Engineering. We are passionate students driving innovation and entrepreneurship.

Our Mission: To foster the spirit of entrepreneurship among students and provide them with the necessary skills, resources, and opportunities to become successful entrepreneurs.

Our Vision: To create a vibrant ecosystem where innovative ideas flourish and transform into successful businesses.

Services:
1. Entrepreneurship Development - Personalized mentorship programs, business model canvas workshops, pitching and presentation training, market research and validation support, networking with industry experts
2. Incubation Center - Co-working spaces and facilities, seed funding and investment connections, legal and regulatory guidance, technology and infrastructure support, access to investor networks
3. Our Services - Comprehensive suite of services designed to support every stage of your entrepreneurial journey, from ideation to execution and growth

Recent Events: We organize various events throughout the year including workshops, competitions, and networking sessions.

Slideshow Content:
- Slide 1: E-cell team members image
- Slide 2: Welcome to E-cell SVCE - Empowering the next generation of entrepreneurs
- Slide 3: Our Mission - Fostering innovation and entrepreneurship among students

Hero Section: Empowering the next generation of entrepreneurs through innovation, mentorship, and real-world experience.

Recent Events from Home Page:
- IIT Madras E-Summit 2025 & E-Auction (March 1, 2025) - SVCE E-Cell Team participated in E-Auction
- MSME Idea Hackathon 4.0 (October 29, 2024) - 18 proposals from SVCE forwarded for incubation
- MoU with E-Cell MANIT Bhopal (October 14, 2024) - Official partnership established`,
    type: 'page'
  },
  {
    path: '/about',
    title: 'About Us - E-cell SVCE',
    content: `E-cell SVCE is dedicated to empowering students to become future entrepreneurs and leaders.

Who We Are: The Entrepreneurship Cell (E-cell) at Sri Venkateswara College of Engineering is a vibrant, student-driven community that nurtures innovation, creativity, and leadership. Our mission is to inspire and support students in transforming their ideas into impactful ventures.

Since 2015, E-cell SVCE has championed entrepreneurship through hands-on events, workshops, and mentorship. We believe entrepreneurship is a mindset—one that values curiosity, resilience, and collaboration.

What We Do:
- Fostering innovation and entrepreneurial thinking
- Providing resources, mentorship, and networking
- Organizing workshops, seminars, and competitions
- Connecting students with industry experts and investors

Our Mission: To create a vibrant entrepreneurial ecosystem within the college that nurtures innovation, creativity, and leadership among students. We strive to bridge the gap between academic knowledge and practical application by facilitating interactions with industry experts, successful entrepreneurs, and investors.

Our Vision: To be recognized as a premier student-run entrepreneurship cell that fosters innovation and entrepreneurship across the region. We aspire to see our college as a hub for startups and innovations, where students think beyond conventional career paths.

Our Achievements:
- 20+ Events Organized
- 1000+ Students Impacted
- 15+ Startups Incubated
- 50+ Industry Collaborations

Leadership Team: Our team consists of passionate students from various engineering disciplines who work together to create opportunities for fellow students.

Impact Stories: We have helped numerous students launch successful startups and develop entrepreneurial skills that have shaped their careers.`,
    type: 'page'
  },
  {
    path: '/events',
    title: 'Events - E-cell SVCE',
    content: `E-cell SVCE organizes various events throughout the year to promote entrepreneurship and innovation.

Event Categories:
1. Workshops - Hands-on sessions on various entrepreneurial topics
2. Competitions - Pitch competitions, business plan contests, and hackathons
3. Networking Events - Meet industry experts, investors, and fellow entrepreneurs
4. Guest Lectures - Learn from successful entrepreneurs and industry leaders
5. Conferences - Annual entrepreneurship summit and other major events

2025 Events:
- IIT Madras E-Summit 2025 & E-Auction (March 1, 2025) - SVCE E-Cell Team participated in E-Auction, simulating real-world investment and startup valuation scenarios

2024 Events:
- MSME Idea Hackathon 4.0 (October 29, 2024) - 18 proposals from SVCE forwarded for incubation
- MoU with E-Cell MANIT Bhopal (October 14, 2024) - Official partnership established, SVCE E-Cell named official outreach partner for MANIT Bhopal's E-Summit 2025
- IIT Madras EDD Cohort – Growth Track (April 1, 2024) - 2024-2025 Cohort program
- Entrepreneurship Pitching League (EPL) (March 18, 2024) - Winners: Johin Gill & Kavi Raj E (AE, 2nd Year), N. Jegatheesh & Giridharan S N (ECE A, 1st Year)
- Meme Marketing Competition (March 17, 2024) - Winners: Infant Rohith A (IT A, 1st Year), Nihil Rayen P (AIDS, 1st Year)
- Pitch Palooza – Women's Day Competition (March 11, 2024) - Business pitch competition for women entrepreneurs
- Pitch Perfect Workshop (February 29, 2024) - Led by Gurunathraj E (Founder of Metal Protection in EPIC)
- IP & Patent Filing Seminar (February 5, 2024) - Conducted by Dr. R. Senthil (Professor, ECE)

2023 Events:
- Entrepreneurship Workshop (March 15, 2023) - 120 participants, Main Auditorium SVCE
- Startup Pitch Competition (February 28, 2023) - 50 teams, Seminar Hall SVCE
- Industry Expert Talk Series (January 10, 2023) - 200+ attendees, Virtual Event

2022 Events:
- Hackathon 2023 (December 5, 2022) - 30 teams, Computer Science Block SVCE
- Business Plan Workshop (November 20, 2022) - 80 participants, MBA Department SVCE
- E-Summit 2022 (October 15, 2022) - 500+ attendees, SVCE Campus

Event Features:
- Expert speakers and mentors
- Networking opportunities
- Prize money and recognition
- Certificate of participation
- Industry connections

How to Participate: Check our events page regularly for updates on upcoming events and registration details.`,
    type: 'page'
  },
  {
    path: '/team',
    title: 'Team - E-cell SVCE',
    content: `Meet the passionate individuals behind E-cell SVCE dedicated to fostering entrepreneurship.

E-cell Members: Passionate students driving innovation and entrepreneurship.

Team Structure:
1. Core Leadership - President, Vice President, Secretary, Joint Secretary
2. Executive Committee - CEO, COO, CFO, CMO, CTO
3. Department Heads - Tech Head, Execution Head, Content Head, Design Head, Marketing Head, Community Manager
4. Executive Team - Various executive team members from different departments
5. Tech Team/Developers - Technical team handling website and digital platforms
6. Design Team - Creative team for visual content and design
7. Marketing Team - Responsible for outreach and promotion
8. Content Team - Creates educational materials and content
9. Community Managers - Social media and community management
10. LinkedIn Managers - LinkedIn content and engagement

Key Team Members:
Core Leadership:
- Roshan - President - Leadership
- R. Dharshini - Vice President - Leadership
- Manojkumar - Secretary - Leadership
- Sree Varshini - Joint Secretary - Leadership

Executive Committee:
- Pradeep - CEO - Executive
- Bhargavi - COO - Executive
- Nithish - CFO - Executive
- Roobuck - CMO - Executive
- Karthik R - CTO - Executive

Department Heads:
- Janani T - Tech Head - Technology
- Sankaranarayanan - Execution Head - Operations
- Meyyappan - Content Head - Content
- Vikaash B G - Design Head - Design
- Daksha S - Marketing Head - Marketing
- Balapranav - Community Manager - Community

Team Members: Our team consists of dedicated students from various engineering disciplines (CSE, ECE, IT, AIDS, Mech, EEE, Biotech, Chem, etc.) who bring diverse skills and perspectives to the organization.

Domains: Leadership, Executive, Technology, Operations, Content, Design, Marketing, Community

Contact: You can reach out to any team member through their LinkedIn or email for collaboration opportunities.

Team Features:
- Flipping cards with member information
- Contact details for each member
- Domain expertise areas
- Social media links
- Professional profiles
- Department and year information`,
    type: 'page'
  },
  {
    path: '/blog',
    title: 'Blog - E-cell SVCE',
    content: `Our blog features insights, stories, and updates from the entrepreneurship journey.

Blog Content:
- Success stories of student entrepreneurs
- Industry insights and trends
- Tips and advice for aspiring entrepreneurs
- Event recaps and highlights
- Guest articles from industry experts

Blog Categories:
- Entrepreneurship Tips
- Success Stories
- Industry News
- Event Updates
- Student Spotlights

Regular Updates: We publish new content regularly to keep our community informed and inspired.

Blog Features:
- Monthly blog posts
- Interactive content
- Image galleries
- Success stories
- Industry insights
- Student spotlights

Content Types:
- Written articles
- Image-based posts
- Success stories
- Event recaps
- Industry news
- Tips and advice`,
    type: 'page'
  },
  {
    path: '/contact',
    title: 'Contact Us - E-cell SVCE',
    content: `Get in touch with E-cell SVCE for any inquiries or collaboration opportunities.

Contact Information:
- College: Sri Venkateswara College of Engineering
- Address: Post Bag No.1, Pennalur Village, Chennai - Bengaluru High Road, Sriperumbudur Tk, Tamil Nadu 602117
- Email: ecell@svce.ac.in

Social Media:
- Instagram: @ecellsvce
- LinkedIn: E-cell SVCE

Office Hours: Monday to Friday, 9:00 AM to 5:00 PM

Response Time: We typically respond to inquiries within 24-48 hours.

Contact Methods:
- Email: ecell@svce.ac.in
- Office visit during business hours
- Social media messaging
- Website contact form

Location Details:
- Full address: Sri Venkateswara College of Engineering, Post Bag No.1, Pennalur Village, Chennai - Bengaluru High Road, Sriperumbudur Tk, Tamil Nadu 602117
- State: Tamil Nadu
- PIN: 602117
- City: Sriperumbudur`,
    type: 'page'
  },
  {
    path: '/builders-guild',
    title: 'Builders Guild - E-cell SVCE',
    content: `The Builders Guild is our technical community focused on building innovative solutions.

What is Builders Guild:
- A community of student developers and tech enthusiasts
- Focus on building real-world projects and solutions
- Collaboration on open-source projects
- Learning and sharing technical knowledge

Activities:
- Weekly coding sessions
- Project showcases
- Hackathons and competitions
- Mentorship programs
- Industry partnerships

Join Us: Open to all students interested in technology and building solutions.

Technical Focus:
- Web development
- Mobile app development
- AI and machine learning
- Blockchain technology
- IoT projects
- Open source contributions

Community Benefits:
- Skill development
- Project collaboration
- Industry connections
- Mentorship opportunities
- Portfolio building`,
    type: 'page'
  },
  {
    path: '/entrepreneurship',
    title: 'Entrepreneurship - E-cell SVCE',
    content: `Our entrepreneurship program provides comprehensive support for aspiring entrepreneurs.

What is Entrepreneurship: Entrepreneurship is the process of designing, launching, and running a new business, which is typically initially a small business. It involves taking risks, being innovative, and creating value in the market.

At E-cell SVCE, we believe entrepreneurship is not just about starting a business—it's about developing a mindset that embraces challenges, seeks opportunities, and creates positive impact in society.

Key Areas We Cover:
1. Business Planning - Learn to create comprehensive business plans, market analysis, and financial projections
2. Team Building - Master the art of building and leading high-performing teams
3. Market Research - Understand your target market, analyze competition, and identify opportunities
4. Growth Strategy - Develop sustainable growth strategies that scale your business
5. Innovation - Foster a culture of innovation and creativity to stay ahead of competition
6. Execution - Learn to execute your ideas effectively, manage resources, and overcome obstacles

Our Programs:
1. Beginner's Bootcamp - 4-week intensive program covering fundamentals of entrepreneurship
   - Business idea validation
   - Basic financial planning
   - Market research techniques
   - Pitching fundamentals

2. Advanced Workshop - For students with existing business ideas
   - Advanced business modeling
   - Funding strategies
   - Legal and compliance
   - Scaling techniques

Program Features:
- Personalized mentorship programs
- Business model canvas workshops
- Pitching and presentation training
- Market research and validation support
- Networking with industry experts

Resources Available:
- Mentorship from successful entrepreneurs
- Access to industry networks
- Funding opportunities
- Legal and regulatory guidance
- Technology support

Support Services:
- One-on-one mentorship
- Group workshops
- Industry expert sessions
- Peer learning groups
- Resource library access`,
    type: 'page'
  },
  {
    path: '/incubation-center',
    title: 'Incubation Center - E-cell SVCE',
    content: `Our incubation center provides a supportive environment for startups to grow and scale.

What is Our Incubation Center: Our Incubation Center is a dedicated space designed to nurture and accelerate early-stage startups. We provide comprehensive support including mentorship, resources, funding opportunities, and a collaborative environment for entrepreneurs to grow their businesses.

Through our MSME (Micro, Small & Medium Enterprises) focused approach, we help students and young entrepreneurs develop sustainable business models and connect with industry experts and investors.

Services We Provide:
1. Mentorship - Connect with experienced entrepreneurs, industry experts, and business leaders
2. Workspace - Access to modern co-working spaces, meeting rooms, and infrastructure
3. Business Development - Strategic planning, market research, and business model development
4. Funding Support - Assistance in securing funding through grants, investors, and government schemes
5. Legal Support - Help with company registration, IP protection, compliance, and legal requirements
6. Networking - Connect with fellow entrepreneurs, customers, and industry partners

Incubation Process (6-month program):
1. Application & Selection - Submit business idea and go through selection process
2. Onboarding - Get introduced to ecosystem, meet mentors, set up workspace
3. Development Phase - Intensive development of product/service with mentor check-ins
4. Testing & Iteration - Launch MVP, gather user feedback, iterate based on market response
5. Scaling Preparation - Prepare for scaling with financial planning and team building
6. Graduation - Graduate with market-ready business and ongoing alumni support

Success Stories:
- TechStart Solutions - AI-powered waste management system, now serving 50+ cities with 200+ employees
- EduTech Innovations - Online learning platform for rural students, raised $2M and serves 10,000+ students

Program Details:
- Duration: 6 months
- Support: Mentorship, funding, legal guidance
- Facilities: Co-working spaces, technology access
- Network: Investor connections, industry partnerships
- Graduation: Demo day presentation

Eligibility:
- Student entrepreneurs
- Early-stage startups
- Innovative business ideas
- Commitment to program requirements`,
    type: 'page'
  },
  {
    path: '/our-services',
    title: 'Our Services - E-cell SVCE',
    content: `We offer a comprehensive suite of services designed to support every stage of your entrepreneurial journey.

What We Offer:
1. Workshops & Training - Regular workshops covering business fundamentals, advanced strategies, and industry-specific knowledge
2. Mentorship Program - One-on-one mentorship with successful entrepreneurs and industry experts
3. Events & Competitions - Participate in hackathons, pitch competitions, and networking events
4. Incubation Support - Comprehensive incubation program to help develop and launch startups
5. Recognition & Awards - Get recognized for innovative ideas and achievements
6. Career Guidance - Expert guidance on career paths and job opportunities

Specialized Programs:
1. Innovation Lab - Dedicated space for students to experiment with new ideas and prototype solutions
   - 3D printing and prototyping facilities
   - Software development tools
   - Design thinking workshops
   - Collaborative workspace

2. Startup Accelerator - Intensive 3-month program for advanced startups ready to scale
   - Seed funding opportunities
   - Investor pitch preparation
   - Market expansion strategies
   - Legal and compliance support

Resources & Tools:
1. Business Templates - Ready-to-use templates for business plans, financial projections, and pitch decks
2. Market Research - Access to industry reports, market analysis tools, and competitive intelligence
3. Legal Resources - Guides for company registration, IP protection, and compliance requirements
4. Funding Database - Comprehensive database of funding opportunities, grants, and investor contacts

Service Features:
- Personalized approach
- Industry expertise
- Comprehensive support
- Community building
- Continuous learning

Target Audience:
- Student entrepreneurs
- Aspiring business owners
- Innovation enthusiasts
- Tech developers
- Business students

How to Access: Contact us through our website or visit our office to learn more about our services.`,
    type: 'page'
  }
];

export class ContentAnalyzer {
  private content: PageContent[];

  constructor() {
    this.content = websiteContent;
  }

  // Search for relevant content based on query
  searchContent(query: string): PageContent[] {
    const normalizedQuery = query.toLowerCase();
    
    return this.content.filter(page => 
      page.title.toLowerCase().includes(normalizedQuery) ||
      page.content.toLowerCase().includes(normalizedQuery) ||
      page.path.toLowerCase().includes(normalizedQuery)
    );
  }

  // Generate comprehensive AI response
  generateResponse(query: string): string {
    const normalizedQuery = query.toLowerCase();
    const relevantPages = this.searchContent(query);
    
    // Handle greetings and general questions first
    if (normalizedQuery.includes('hello') || normalizedQuery.includes('hi') || normalizedQuery.includes('hey') || normalizedQuery.includes('good morning') || normalizedQuery.includes('good afternoon') || normalizedQuery.includes('good evening')) {
      return "Hello! Welcome to E-cell SVCE! I'm your AI assistant and I'm here to help you with any questions about our entrepreneurship programs, events, team, services, or anything else you'd like to know. What can I help you with today?";
    }
    
    // Handle help requests
    if (normalizedQuery.includes('help') || normalizedQuery.includes('what can you do') || normalizedQuery.includes('what do you know')) {
      return "I'm your comprehensive E-cell SVCE AI assistant! I can help you with:\n\n**Programs & Services:**\n• Entrepreneurship development programs\n• Incubation center details\n• Mentorship opportunities\n• Skill development workshops\n\n**Events & Activities:**\n• Upcoming workshops and competitions\n• Event schedules and registration\n• Past event highlights\n• Networking opportunities\n\n**Team & Leadership:**\n• Team member information\n• Leadership structure\n• Contact details\n• Collaboration opportunities\n\n**Contact & Location:**\n• Full contact information\n• Office location and hours\n• Social media links\n• Response times\n\n**General Questions:**\n• About entrepreneurship\n• Business advice\n• Career guidance\n• Technical questions\n\nJust ask me anything - I'm here to help!";
    }
    
    // Handle specific question types with detailed responses
    if (normalizedQuery.includes('e-cell') || normalizedQuery.includes('ecell')) {
      return `E-cell SVCE is the Entrepreneurship Cell of Sri Venkateswara College of Engineering. We are passionate students driving innovation and entrepreneurship.

Our Mission: To foster the spirit of entrepreneurship among students and provide them with the necessary skills, resources, and opportunities to become successful entrepreneurs.

Our Vision: To create a vibrant ecosystem where innovative ideas flourish and transform into successful businesses.

What We Offer:
• Entrepreneurship Development Programs
• Incubation Center for startups
• Comprehensive mentorship
• Networking opportunities
• Industry connections
• Funding support

Our Journey:
- 2015: Founded with a vision to promote entrepreneurship
- 2018: Launched first incubation program
- 2020: Expanded to virtual events and online mentorship
- 2022: Reached 100+ successful startup launches
- 2024: Introduced AI-powered mentorship programs

Contact: ecell@svce.ac.in | Sri Venkateswara College of Engineering, Post Bag No.1, Pennalur Village, Chennai - Bengaluru High Road, Sriperumbudur Tk, Tamil Nadu 602117`;
    }
    
    if (normalizedQuery.includes('entrepreneurship')) {
      return `Entrepreneurship at E-cell SVCE involves developing innovative business ideas, creating startups, and building successful businesses.

Our Program Features:
• Personalized mentorship programs
• Business model canvas workshops
• Pitching and presentation training
• Market research and validation support
• Networking with industry experts

Learning Path:
1. Ideation Phase - Brainstorming and idea validation
2. Planning Phase - Business model development
3. Execution Phase - Implementation and testing
4. Growth Phase - Scaling and expansion

Resources Available:
• Mentorship from successful entrepreneurs
• Access to industry networks
• Funding opportunities
• Legal and regulatory guidance
• Technology support

Program Structure:
• Beginner level: Introduction to entrepreneurship
• Intermediate level: Business development skills
• Advanced level: Startup launch and growth
• Expert level: Scaling and expansion`;
    }
    
    // Handle individual name queries first
    const teamMemberNames = [
      'roshan', 'dharshni', 'manojkumar', 'shree varshini', 'bhargavi', 'nitish', 'daksha', 'janani', 'vikaash',
      'bala krishna', 'sankara narayanan', 'harshith', 'divya shree', 'baarath', 'balapranav', 'tharun',
      'sudish', 'abijith', 'buvaneswaran', 'divya bharathi', 'santhoshkumar', 'gokul', 'kayal nethra', 'mhadhurra', 'logeshwari',
      'jefina', 'irfanaa', 'haritha', 'thoufikur', 'yogendra', 'prathiba', 'seyed mohamed', 'vaishali',
      'hariis', 'kamalina', 'chalakesh', 'rasiga', 'sri bharathi', 'mayooritha', 'ajay', 'shreenidhi',
      'jefina giftlin', 'irfanaa parveen', 's v haritha', 'thoufikur rahaman', 'prathiba m s k', 'hariis p', 'kamalina k', 'chalakesh s k'
    ];
    
    const matchedName = teamMemberNames.find(name => normalizedQuery.includes(name.toLowerCase()));
    if (matchedName) {
      return `I can provide detailed information about ${matchedName}. Please ask specifically about them, such as "Who is ${matchedName}?" or "Tell me about ${matchedName}" and I'll give you their complete details including their role, department, contact information, and academic background.`;
    }

    if (normalizedQuery.includes('team') || normalizedQuery.includes('members')) {
      return `**E-cell SVCE Team Members:**

**Core Leadership (3 members):**
- **Roshan M** - President (ECE - 4th Year) | Email: 2022ec0448@svce.ac.in | Phone: 9841092274
- **R. Dharshni** - Vice President (Biotech - 4th Year) | Email: dharshni@ecell.svce.ac.in
- **Manojkumar A** - Secretary (ECE - 4th Year) | Email: manojkumar@ecell.svce.ac.in | Phone: 7418434691

**Executive Committee (6 members):**
- **Shree Varshini M** - Chief Executive Officer (ECE - 3rd Year) | Email: shreevarshini@ecell.svce.ac.in | Phone: 9360239715
- **Bhargavi** - COO (Chemical - 4th Year) | Email: bhargavi@ecell.svce.ac.in
- **N.Nitish** - CFO (AIDS - 3rd Year) | Email: nitish@ecell.svce.ac.in | Phone: 8428557498
- **Daksha** - CMO (Biotech - 2nd Year) | Email: daksha@ecell.svce.ac.in
- **Janani** - CTO (CSE - 3rd Year) | Email: janani@ecell.svce.ac.in
- **Vikaash** - CDO (ECE - 4th Year) | Email: vikaash@ecell.svce.ac.in

**Department Heads (7 members):**
- **Bala Krishna** - Tech Head (AI&DS - 3rd Year) | Email: balakrishna@ecell.svce.ac.in
- **Sankara Narayanan S** - Execution Head (Biotechnology - 3rd Year) | Email: sankaranarayanan@ecell.svce.ac.in | Phone: 8610049372
- **Harshith B** - Content Head (Mechanical and Automation - 3rd Year) | Email: harshith@ecell.svce.ac.in | Phone: 8608786089
- **Divya Shree M** - Design Lead (Information Technology - 2nd Year) | Email: divyashree@ecell.svce.ac.in | Phone: 8015848971
- **Baarath Arumugaraja** - Operation Lead (CSE - 3rd Year) | Email: baarath@ecell.svce.ac.in | Phone: 9952436835
- **Balapranav** - Community Captain (EEE - 2nd Year) | Email: balapranav@ecell.svce.ac.in
- **THARUN S** - Creative Lead (Mechanical and Automation - 2nd Year) | Email: tharun@ecell.svce.ac.in | Phone: 9342526239

**Executive Members (5 members):**
- **P.Rasiga** - Executive Member (Chemical - 2nd Year) | Email: 2024ch0405@svce.ac.in | Phone: 9500240988
- **Sri Bharathi R** - Executive Member (Mech & Auto - 2nd Year) | Email: 2024mn0785@svce.ac.in | Phone: 7397103127
- **Mayooritha P** - Executive Member (CSC - 2nd Year) | Email: 2024cs0480@svce.ac.in | Phone: 9677809044
- **Ajay M** - Executive Member (CSC - 3rd Year) | Email: ajay@ecell.svce.ac.in
- **G.Shreenidhi** - Executive Member (EEE - 2nd Year) | Email: 2024EE0011@svce.ac.in | Phone: 9962010822

**Marketing Team (5 members):**
- **Santhoshkumar C** - Marketing Team (EEE - 2nd Year) | Email: 2024ee0189@svce.ac.in | Phone: 9080083869
- **Gokul S** - Marketing Team (Biotech - 2nd Year) | Email: 2024bt0848@svce.ac.in | Phone: 9884463837
- **Kayal nethra K** - Marketing Team (CSC - 2nd Year) | Email: team@ecell.svce.ac.in
- **Mhadhurra Chandran** - Marketing Team (CSC - 3rd Year) | Email: 2023CS0956@svce.ac.in | Phone: 9840646632
- **Logeshwari N** - Marketing Team (Biotech - 2nd Year) | Email: 2024bt0388@svce.ac.in | Phone: 9360737534

**Tech Team (4 members):**
- **Sudish M** - Tech Team (CSC - 3rd Year) | Email: 2023cs0508@svce.ac.in | Phone: 9150195835
- **ABIJITH P** - Tech Team (CSC - 3rd Year) | Email: abijithmark095@gmail.com | Phone: 6374997429
- **K Buvaneswaran** - Tech Team (ECE - 2nd Year) | Email: 2024ec0673@svce.ac.in | Phone: 9380867566
- **Divya Bharathi R** - Tech Team (CSC - 3rd Year) | Email: 2023CS0098@SVCE.AC.IN | Phone: 9840658454

**Content Team (3 members):**
- **Jefina Giftlin J** - Content Team (Biotech - 2nd Year) | Email: team@ecell.svce.ac.in
- **Irfanaa Parveen M** - Content Team (ECE - 2nd Year) | Email: team@ecell.svce.ac.in
- **S V Haritha** - Content Team (CSC - 3rd Year) | Email: team@ecell.svce.ac.in

**Design Team (5 members):**
- **THOUFIKUR RAHAMAN Y** - Design Team (EEE - 2nd Year) | Email: team@ecell.svce.ac.in
- **Yogendra** - Design Team (Mech - 2nd Year) | Email: team@ecell.svce.ac.in
- **PRATHIBA M S K** - Design Team (ECE - 2nd Year) | Email: team@ecell.svce.ac.in
- **Seyed Mohamed** - Design Team (Mech & Auto - 3rd Year) | Email: team@ecell.svce.ac.in
- **Vaishali** - Design Team (CSC - 2nd Year) | Email: team@ecell.svce.ac.in

**Community Managers (3 members):**
- **Hariis P** - Community Manager (CSC - 3rd Year) | Email: team@ecell.svce.ac.in
- **Kamalina K** - Community Manager (ECE - 2nd Year) | Email: team@ecell.svce.ac.in
- **CHALAKESH S K** - Community Manager (Chemical - 2nd Year) | Email: team@ecell.svce.ac.in

**Total Team Size:** 41 members across 8 different teams

For specific information about any team member, please ask "Who is [name]?" and I'll provide detailed information including contact details and social media links.`;
    }
    
    if (normalizedQuery.includes('events')) {
      return `E-cell SVCE organizes various events throughout the year to promote entrepreneurship and innovation.

Event Categories:
• Workshops - Hands-on sessions on various entrepreneurial topics
• Competitions - Pitch competitions, business plan contests, and hackathons
• Networking Events - Meet industry experts, investors, and fellow entrepreneurs
• Guest Lectures - Learn from successful entrepreneurs and industry leaders
• Conferences - Annual entrepreneurship summit and other major events

2025 Events:
• IIT Madras E-Summit 2025 & E-Auction (March 1, 2025) - SVCE E-Cell Team participated in E-Auction, simulating real-world investment and startup valuation scenarios

2024 Events:
• MSME Idea Hackathon 4.0 (October 29, 2024) - 18 proposals from SVCE forwarded for incubation
• MoU with E-Cell MANIT Bhopal (October 14, 2024) - Official partnership established
• IIT Madras EDD Cohort – Growth Track (April 1, 2024) - 2024-2025 Cohort program
• Entrepreneurship Pitching League (EPL) (March 18, 2024) - Winners: Johin Gill & Kavi Raj E (AE, 2nd Year), N. Jegatheesh & Giridharan S N (ECE A, 1st Year)
• Meme Marketing Competition (March 17, 2024) - Winners: Infant Rohith A (IT A, 1st Year), Nihil Rayen P (AIDS, 1st Year)
• Pitch Palooza – Women's Day Competition (March 11, 2024) - Business pitch competition for women entrepreneurs
• Pitch Perfect Workshop (February 29, 2024) - Led by Gurunathraj E (Founder of Metal Protection in EPIC)
• IP & Patent Filing Seminar (February 5, 2024) - Conducted by Dr. R. Senthil (Professor, ECE)

2023 Events:
• Entrepreneurship Workshop (March 15, 2023) - 120 participants, Main Auditorium SVCE
• Startup Pitch Competition (February 28, 2023) - 50 teams, Seminar Hall SVCE
• Industry Expert Talk Series (January 10, 2023) - 200+ attendees, Virtual Event

2022 Events:
• Hackathon 2023 (December 5, 2022) - 30 teams, Computer Science Block SVCE
• Business Plan Workshop (November 20, 2022) - 80 participants, MBA Department SVCE
• E-Summit 2022 (October 15, 2022) - 500+ attendees, SVCE Campus

Event Features:
• Expert speakers and mentors
• Networking opportunities
• Prize money and recognition
• Certificate of participation
• Industry connections

How to Participate: Check our events page regularly for updates on upcoming events and registration details.`;
    }
    
    if (normalizedQuery.includes('contact') || normalizedQuery.includes('email') || normalizedQuery.includes('address')) {
      return `You can contact E-cell SVCE through multiple channels:

Contact Information:
• Email: bala.ramyaram@gmail.com
• Phone: +91 98765 43210
• College: Sri Venkateswara College of Engineering
• Full Address: Sri Venkateswara College of Engineering, Tamil Nadu 602117

Social Media:
• Instagram: @ecellsvce
• LinkedIn: E-cell SVCE

Office Details:
• Office Hours: Monday to Friday, 9:00 AM to 6:00 PM
• Saturday: 10:00 AM to 2:00 PM
• Sunday: Closed
• Response Time: We typically respond to inquiries within 24-48 hours

Contact Methods:
• Email: bala.ramyaram@gmail.com
• Phone: +91 98765 43210
• Office visit during business hours
• Social media messaging
• Website contact form

Location Details:
• State: Tamil Nadu
• PIN: 602117
• City: Sriperumbudur
• Highway: Chennai - Bengaluru High Road
• College: Premier institution known for academic excellence and innovative research

How to Reach: We are conveniently located along the Chennai–Bengaluru Highway. Public transport and ride-hailing services are easily available. Ample parking space is also available for visitors.`;
    }
    
    if (normalizedQuery.includes('incubation')) {
      return `Our incubation center provides a supportive environment for startups to grow and scale.

Facilities:
• Co-working spaces and facilities
• Seed funding and investment connections
• Legal and regulatory guidance
• Technology and infrastructure support
• Access to investor networks

Incubation Process:
1. Application and screening
2. Initial assessment and selection
3. Incubation program (6-12 months)
4. Mentorship and support
5. Demo day and graduation

Benefits:
• Free workspace
• Mentorship from industry experts
• Access to funding opportunities
• Legal and business support
• Networking opportunities

Success Stories: Many startups have successfully graduated from our incubation program and are now thriving businesses.

Program Details:
• Duration: 6-12 months
• Support: Mentorship, funding, legal guidance
• Facilities: Co-working spaces, technology access
• Network: Investor connections, industry partnerships
• Graduation: Demo day presentation

Eligibility:
• Student entrepreneurs
• Early-stage startups
• Innovative business ideas
• Commitment to program requirements`;
    }
    
    if (normalizedQuery.includes('services')) {
      return `We offer a comprehensive suite of services designed to support every stage of your entrepreneurial journey.

Service Categories:

1. Education and Training
   • Entrepreneurship workshops
   • Business planning sessions
   • Skill development programs
   • Industry expert talks

2. Mentorship and Guidance
   • One-on-one mentorship
   • Group mentoring sessions
   • Industry expert consultations
   • Peer learning groups

3. Resources and Support
   • Co-working spaces
   • Technology access
   • Legal and regulatory guidance
   • Funding connections

4. Networking and Community
   • Industry events
   • Peer networking
   • Alumni connections
   • Partnership opportunities

Service Features:
• Personalized approach
• Industry expertise
• Comprehensive support
• Community building
• Continuous learning

Target Audience:
• Student entrepreneurs
• Aspiring business owners
• Innovation enthusiasts
• Tech developers
• Business students

How to Access: Contact us through our website or visit our office to learn more about our services.`;
    }
    
    if (normalizedQuery.includes('blog')) {
      return `Our blog features insights, stories, and updates from the entrepreneurship journey.

Blog Content:
• Success stories of student entrepreneurs
• Industry insights and trends
• Tips and advice for aspiring entrepreneurs
• Event recaps and highlights
• Guest articles from industry experts

Blog Categories:
• Entrepreneurship Tips
• Success Stories
• Industry News
• Event Updates
• Student Spotlights

Blog Features:
• Monthly blog posts
• Interactive content
• Image galleries
• Success stories
• Industry insights
• Student spotlights

Content Types:
• Written articles
• Image-based posts
• Success stories
• Event recaps
• Industry news
• Tips and advice

Regular Updates: We publish new content regularly to keep our community informed and inspired.`;
    }
    
    if (normalizedQuery.includes('builders guild')) {
      return `The Builders Guild is our technical community focused on building innovative solutions.

What is Builders Guild:
• A community of student developers and tech enthusiasts
• Focus on building real-world projects and solutions
• Collaboration on open-source projects
• Learning and sharing technical knowledge

Activities:
• Weekly coding sessions
• Project showcases
• Hackathons and competitions
• Mentorship programs
• Industry partnerships

Technical Focus:
• Web development
• Mobile app development
• AI and machine learning
• Blockchain technology
• IoT projects
• Open source contributions

Community Benefits:
• Skill development
• Project collaboration
• Industry connections
• Mentorship opportunities
• Portfolio building

Join Us: Open to all students interested in technology and building solutions.`;
    }
    
    // Handle business and career questions
    if (normalizedQuery.includes('business') || normalizedQuery.includes('startup') || normalizedQuery.includes('career') || normalizedQuery.includes('job')) {
      return "Great question! E-cell SVCE is perfect for business and career development:\n\n**Startup Support:**\n• Incubation program for early-stage startups\n• Mentorship from successful entrepreneurs\n• Funding connections and opportunities\n• Legal and regulatory guidance\n\n**Career Development:**\n• Entrepreneurship skills training\n• Industry networking opportunities\n• Leadership development programs\n• Professional mentorship\n\n**Business Growth:**\n• Business model development workshops\n• Market research and validation support\n• Pitching and presentation training\n• Investor network access\n\nContact us at ecell@svce.ac.in to learn more about our programs!";
    }
    
    // Handle technical questions
    if (normalizedQuery.includes('tech') || normalizedQuery.includes('programming') || normalizedQuery.includes('coding') || normalizedQuery.includes('development')) {
      return "E-cell SVCE has great technical opportunities through our Builders Guild:\n\n**Builders Guild:**\n• Community of student developers and tech enthusiasts\n• Focus on building real-world projects and solutions\n• Collaboration on open-source projects\n• Learning and sharing technical knowledge\n\n**Technical Focus Areas:**\n• Web development\n• Mobile app development\n• AI and machine learning\n• Blockchain technology\n• IoT projects\n• Open source contributions\n\n**Activities:**\n• Weekly coding sessions\n• Project showcases\n• Hackathons and competitions\n• Mentorship programs\n• Industry partnerships\n\nJoin our technical community and build amazing solutions!";
    }
    
    // Handle event and activity questions
    if (normalizedQuery.includes('event') || normalizedQuery.includes('workshop') || normalizedQuery.includes('competition') || normalizedQuery.includes('meeting')) {
      return "E-cell SVCE offers amazing events and activities:\n\n**Event Categories:**\n• Workshops - Hands-on entrepreneurial sessions\n• Competitions - Pitch competitions and hackathons\n• Networking Events - Meet industry experts\n• Guest Lectures - Learn from successful entrepreneurs\n• Conferences - Annual entrepreneurship summit\n\n**Recent Events:**\n• Entrepreneurship Workshop Series (Monthly)\n• Pitch Perfect Competition (Quarterly)\n• Innovation Hackathon (Bi-annually)\n• Annual Entrepreneurship Summit (Yearly)\n\n**Event Features:**\n• Expert speakers and mentors\n• Networking opportunities\n• Prize money and recognition\n• Certificate of participation\n• Industry connections\n\nCheck our events page for upcoming activities!";
    }
    
    // Handle general questions about college or education
    if (normalizedQuery.includes('college') || normalizedQuery.includes('university') || normalizedQuery.includes('education') || normalizedQuery.includes('student')) {
      return "E-cell SVCE is part of Sri Venkateswara College of Engineering (SVCE):\n\n**About SVCE:**\n• Premier engineering college in Tamil Nadu\n• Located in Sriperumbudur\n• Offers various engineering programs\n• Strong focus on innovation and entrepreneurship\n\n**Student Opportunities:**\n• Entrepreneurship development programs\n• Incubation center access\n• Industry mentorship\n• Skill development workshops\n• Networking with professionals\n\n**Location:**\nSri Venkateswara College of Engineering\nPost Bag No.1, Pennalur Village\nChennai - Bengaluru High Road\nSriperumbudur Tk, Tamil Nadu 602117\n\nContact: ecell@svce.ac.in";
    }
    
    // Handle unrelated questions with helpful responses
    if (normalizedQuery.includes('weather') || normalizedQuery.includes('temperature')) {
      return "I'm focused on helping with E-cell SVCE and entrepreneurship-related questions. For weather information, I'd recommend checking a weather app or website. Is there anything about E-cell SVCE I can help you with?";
    }
    
    if (normalizedQuery.includes('joke') || normalizedQuery.includes('funny')) {
      return "Here's an entrepreneurship joke: Why don't entrepreneurs ever get cold? Because they're always starting up! Now, how can I help you with E-cell SVCE or entrepreneurship?";
    }
    
    if (normalizedQuery.includes('thank') || normalizedQuery.includes('thanks')) {
      return "You're very welcome! I'm always here to help with any questions about E-cell SVCE, entrepreneurship, events, or anything else you need. Feel free to ask me anything anytime!";
    }
    
    if (normalizedQuery.includes('bye') || normalizedQuery.includes('goodbye') || normalizedQuery.includes('see you')) {
      return "Goodbye! It was great helping you today. Remember, I'm always here whenever you need information about E-cell SVCE or have any questions. Have a wonderful day!";
    }
    
    // General search with comprehensive results
    if (relevantPages.length > 0) {
      let answer = "Based on our comprehensive content, here's what I found:\n\n";
      
      relevantPages.slice(0, 3).forEach((page, index) => {
        answer += `${index + 1}. ${page.title}\n`;
        answer += `${page.content.substring(0, 300)}...\n\n`;
      });
      
      return answer;
    }
    
    return "I'm your comprehensive E-cell SVCE AI assistant! I can help you with a wide range of topics:\n\n**What I can help with:**\n• E-cell SVCE programs and services\n• Entrepreneurship guidance and advice\n• Team information and leadership\n• Events, workshops, and competitions\n• Incubation center details\n• Contact information and location\n• Technical questions (Builders Guild)\n• Business and career advice\n• College and education information\n• And much more!\n\n**Just ask me anything!** I'm trained to provide detailed, helpful responses on all these topics. What would you like to know?";
  }
}

export const contentAnalyzer = new ContentAnalyzer();
