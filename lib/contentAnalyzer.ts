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

Hero Section: Empowering the next generation of entrepreneurs through innovation, mentorship, and real-world experience.`,
    type: 'page'
  },
  {
    path: '/about',
    title: 'About Us - E-cell SVCE',
    content: `E-cell SVCE is dedicated to empowering students to become future entrepreneurs and leaders.

Who We Are: We are a student-run organization at Sri Venkateswara College of Engineering, committed to fostering entrepreneurship and innovation.

Our Journey:
- 2015: E-cell SVCE was founded with a vision to promote entrepreneurship
- 2018: Launched our first incubation program
- 2020: Expanded to include virtual events and online mentorship
- 2022: Reached 100+ successful startup launches
- 2024: Introduced AI-powered mentorship programs

Our Core Values:
1. Innovation - We believe in pushing boundaries and thinking outside the box
2. Collaboration - We foster teamwork and collective growth
3. Excellence - We strive for the highest standards in everything we do
4. Integrity - We maintain honesty and transparency in all our dealings
5. Impact - We focus on creating meaningful change in society
6. Learning - We promote continuous learning and development

Leadership Team: Our team consists of passionate students from various engineering disciplines who work together to create opportunities for fellow students.

Impact Stories: We have helped numerous students launch successful startups and develop entrepreneurial skills that have shaped their careers.

Timeline Milestones:
- 2015: Foundation of E-cell SVCE
- 2018: First incubation program launch
- 2020: Virtual events and online mentorship
- 2022: 100+ successful startup launches
- 2024: AI-powered mentorship programs

Testimonials: Students share their success stories and how E-cell SVCE helped them achieve their entrepreneurial goals.`,
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

Recent Events:
- Entrepreneurship Workshop Series (Monthly)
- Pitch Perfect Competition (Quarterly)
- Innovation Hackathon (Bi-annually)
- Annual Entrepreneurship Summit (Yearly)

Event Features:
- Expert speakers and mentors
- Networking opportunities
- Prize money and recognition
- Certificate of participation
- Industry connections

How to Participate: Check our events page regularly for updates on upcoming events and registration details.

Event History:
- 2010: First entrepreneurship workshop
- 2022: Major events and competitions
- 2023: Expanded event calendar
- 2024: Virtual and hybrid events

Event Types:
- Monthly workshops on entrepreneurship topics
- Quarterly pitch competitions with prizes
- Bi-annual hackathons for innovation
- Annual summit with industry leaders
- Guest lectures from successful entrepreneurs`,
    type: 'page'
  },
  {
    path: '/team',
    title: 'Team - E-cell SVCE',
    content: `Meet the passionate individuals behind E-cell SVCE dedicated to fostering entrepreneurship.

E-cell Members: Passionate students driving innovation and entrepreneurship.

Team Structure:
1. Core Team - President, Vice President, Secretary, Treasurer
2. Marketing Team - Responsible for outreach and promotion
3. Events Team - Organizes and manages all events
4. Technical Team - Handles website and digital platforms
5. Content Team - Creates educational materials and content

Team Members: Our team consists of dedicated students from various engineering disciplines who bring diverse skills and perspectives to the organization.

Domains: Tech, Content, Market, Design, Outreach, Operations

Contact: You can reach out to any team member through their LinkedIn or email for collaboration opportunities.

Team Features:
- Flipping cards with member information
- Contact details for each member
- Domain expertise areas
- Social media links
- Professional profiles

Member Information:
- John Doe - President - Core Team - Tech
- Jane Smith - Vice President - Core Team - Content
- Michael Johnson - Secretary - Core Team - Market
- Emily Brown - Treasurer - Core Team - Design
- David Wilson - Marketing Lead - Marketing Team - Outreach
- Sarah Lee - Events Coordinator - Events Team - Operations`,
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

Program Features:
- Personalized mentorship programs
- Business model canvas workshops
- Pitching and presentation training
- Market research and validation support
- Networking with industry experts

Learning Path:
1. Ideation Phase - Brainstorming and idea validation
2. Planning Phase - Business model development
3. Execution Phase - Implementation and testing
4. Growth Phase - Scaling and expansion

Resources Available:
- Mentorship from successful entrepreneurs
- Access to industry networks
- Funding opportunities
- Legal and regulatory guidance
- Technology support

Program Structure:
- Beginner level: Introduction to entrepreneurship
- Intermediate level: Business development skills
- Advanced level: Startup launch and growth
- Expert level: Scaling and expansion

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

Facilities:
- Co-working spaces and facilities
- Seed funding and investment connections
- Legal and regulatory guidance
- Technology and infrastructure support
- Access to investor networks

Incubation Process:
1. Application and screening
2. Initial assessment and selection
3. Incubation program (6-12 months)
4. Mentorship and support
5. Demo day and graduation

Benefits:
- Free workspace
- Mentorship from industry experts
- Access to funding opportunities
- Legal and business support
- Networking opportunities

Success Stories: Many startups have successfully graduated from our incubation program and are now thriving businesses.

Program Details:
- Duration: 6-12 months
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

Service Categories:
1. Education and Training
   - Entrepreneurship workshops
   - Business planning sessions
   - Skill development programs
   - Industry expert talks

2. Mentorship and Guidance
   - One-on-one mentorship
   - Group mentoring sessions
   - Industry expert consultations
   - Peer learning groups

3. Resources and Support
   - Co-working spaces
   - Technology access
   - Legal and regulatory guidance
   - Funding connections

4. Networking and Community
   - Industry events
   - Peer networking
   - Alumni connections
   - Partnership opportunities

How to Access: Contact us through our website or visit our office to learn more about our services.

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
- Business students`,
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
      return "I'm your comprehensive E-cell SVCE AI assistant! I can help you with:\n\n📚 **Programs & Services:**\n• Entrepreneurship development programs\n• Incubation center details\n• Mentorship opportunities\n• Skill development workshops\n\n🎯 **Events & Activities:**\n• Upcoming workshops and competitions\n• Event schedules and registration\n• Past event highlights\n• Networking opportunities\n\n👥 **Team & Leadership:**\n• Team member information\n• Leadership structure\n• Contact details\n• Collaboration opportunities\n\n📞 **Contact & Location:**\n• Full contact information\n• Office location and hours\n• Social media links\n• Response times\n\n💡 **General Questions:**\n• About entrepreneurship\n• Business advice\n• Career guidance\n• Technical questions\n\nJust ask me anything - I'm here to help!";
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
    
    if (normalizedQuery.includes('team') || normalizedQuery.includes('members')) {
      return `Our team consists of passionate students from various engineering disciplines who work together to create opportunities for fellow students.

Team Structure:
• Core Team: President, Vice President, Secretary, Treasurer
• Marketing Team: Responsible for outreach and promotion
• Events Team: Organizes and manages all events
• Technical Team: Handles website and digital platforms
• Content Team: Creates educational materials and content

E-cell Members: Passionate students driving innovation and entrepreneurship.

Key Team Members:
• John Doe - President - Core Team - Tech
• Jane Smith - Vice President - Core Team - Content
• Michael Johnson - Secretary - Core Team - Market
• Emily Brown - Treasurer - Core Team - Design
• David Wilson - Marketing Lead - Marketing Team - Outreach
• Sarah Lee - Events Coordinator - Events Team - Operations

Domains: Tech, Content, Market, Design, Outreach, Operations

Contact: You can reach out to any team member through their LinkedIn or email for collaboration opportunities.`;
    }
    
    if (normalizedQuery.includes('events')) {
      return `E-cell SVCE organizes various events throughout the year to promote entrepreneurship and innovation.

Event Categories:
• Workshops - Hands-on sessions on various entrepreneurial topics
• Competitions - Pitch competitions, business plan contests, and hackathons
• Networking Events - Meet industry experts, investors, and fellow entrepreneurs
• Guest Lectures - Learn from successful entrepreneurs and industry leaders
• Conferences - Annual entrepreneurship summit and other major events

Recent Events:
• Entrepreneurship Workshop Series (Monthly)
• Pitch Perfect Competition (Quarterly)
• Innovation Hackathon (Bi-annually)
• Annual Entrepreneurship Summit (Yearly)

Event Features:
• Expert speakers and mentors
• Networking opportunities
• Prize money and recognition
• Certificate of participation
• Industry connections

Event History:
• 2010: First entrepreneurship workshop
• 2022: Major events and competitions
• 2023: Expanded event calendar
• 2024: Virtual and hybrid events

How to Participate: Check our events page regularly for updates on upcoming events and registration details.`;
    }
    
    if (normalizedQuery.includes('contact') || normalizedQuery.includes('email') || normalizedQuery.includes('address')) {
      return `You can contact E-cell SVCE through multiple channels:

Contact Information:
• Email: ecell@svce.ac.in
• College: Sri Venkateswara College of Engineering
• Full Address: Post Bag No.1, Pennalur Village, Chennai - Bengaluru High Road, Sriperumbudur Tk, Tamil Nadu 602117

Social Media:
• Instagram: @ecellsvce
• LinkedIn: E-cell SVCE

Office Details:
• Office Hours: Monday to Friday, 9:00 AM to 5:00 PM
• Response Time: We typically respond to inquiries within 24-48 hours

Contact Methods:
• Email: ecell@svce.ac.in
• Office visit during business hours
• Social media messaging
• Website contact form

Location Details:
• State: Tamil Nadu
• PIN: 602117
• City: Sriperumbudur
• Highway: Chennai - Bengaluru High Road`;
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
      return "Great question! E-cell SVCE is perfect for business and career development:\n\n🚀 **Startup Support:**\n• Incubation program for early-stage startups\n• Mentorship from successful entrepreneurs\n• Funding connections and opportunities\n• Legal and regulatory guidance\n\n💼 **Career Development:**\n• Entrepreneurship skills training\n• Industry networking opportunities\n• Leadership development programs\n• Professional mentorship\n\n📈 **Business Growth:**\n• Business model development workshops\n• Market research and validation support\n• Pitching and presentation training\n• Investor network access\n\nContact us at ecell@svce.ac.in to learn more about our programs!";
    }
    
    // Handle technical questions
    if (normalizedQuery.includes('tech') || normalizedQuery.includes('programming') || normalizedQuery.includes('coding') || normalizedQuery.includes('development')) {
      return "E-cell SVCE has great technical opportunities through our Builders Guild:\n\n💻 **Builders Guild:**\n• Community of student developers and tech enthusiasts\n• Focus on building real-world projects and solutions\n• Collaboration on open-source projects\n• Learning and sharing technical knowledge\n\n🛠️ **Technical Focus Areas:**\n• Web development\n• Mobile app development\n• AI and machine learning\n• Blockchain technology\n• IoT projects\n• Open source contributions\n\n🎯 **Activities:**\n• Weekly coding sessions\n• Project showcases\n• Hackathons and competitions\n• Mentorship programs\n• Industry partnerships\n\nJoin our technical community and build amazing solutions!";
    }
    
    // Handle event and activity questions
    if (normalizedQuery.includes('event') || normalizedQuery.includes('workshop') || normalizedQuery.includes('competition') || normalizedQuery.includes('meeting')) {
      return "E-cell SVCE offers amazing events and activities:\n\n📅 **Event Categories:**\n• Workshops - Hands-on entrepreneurial sessions\n• Competitions - Pitch competitions and hackathons\n• Networking Events - Meet industry experts\n• Guest Lectures - Learn from successful entrepreneurs\n• Conferences - Annual entrepreneurship summit\n\n🎯 **Recent Events:**\n• Entrepreneurship Workshop Series (Monthly)\n• Pitch Perfect Competition (Quarterly)\n• Innovation Hackathon (Bi-annually)\n• Annual Entrepreneurship Summit (Yearly)\n\n🏆 **Event Features:**\n• Expert speakers and mentors\n• Networking opportunities\n• Prize money and recognition\n• Certificate of participation\n• Industry connections\n\nCheck our events page for upcoming activities!";
    }
    
    // Handle general questions about college or education
    if (normalizedQuery.includes('college') || normalizedQuery.includes('university') || normalizedQuery.includes('education') || normalizedQuery.includes('student')) {
      return "E-cell SVCE is part of Sri Venkateswara College of Engineering (SVCE):\n\n🏫 **About SVCE:**\n• Premier engineering college in Tamil Nadu\n• Located in Sriperumbudur\n• Offers various engineering programs\n• Strong focus on innovation and entrepreneurship\n\n🎓 **Student Opportunities:**\n• Entrepreneurship development programs\n• Incubation center access\n• Industry mentorship\n• Skill development workshops\n• Networking with professionals\n\n📍 **Location:**\nSri Venkateswara College of Engineering\nPost Bag No.1, Pennalur Village\nChennai - Bengaluru High Road\nSriperumbudur Tk, Tamil Nadu 602117\n\nContact: ecell@svce.ac.in";
    }
    
    // Handle unrelated questions with helpful responses
    if (normalizedQuery.includes('weather') || normalizedQuery.includes('temperature')) {
      return "I'm focused on helping with E-cell SVCE and entrepreneurship-related questions. For weather information, I'd recommend checking a weather app or website. Is there anything about E-cell SVCE I can help you with?";
    }
    
    if (normalizedQuery.includes('joke') || normalizedQuery.includes('funny')) {
      return "Here's an entrepreneurship joke: Why don't entrepreneurs ever get cold? Because they're always starting up! 😄 Now, how can I help you with E-cell SVCE or entrepreneurship?";
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
    
    return "I'm your comprehensive E-cell SVCE AI assistant! I can help you with a wide range of topics:\n\n🎯 **What I can help with:**\n• E-cell SVCE programs and services\n• Entrepreneurship guidance and advice\n• Team information and leadership\n• Events, workshops, and competitions\n• Incubation center details\n• Contact information and location\n• Technical questions (Builders Guild)\n• Business and career advice\n• College and education information\n• And much more!\n\n💡 **Just ask me anything!** I'm trained to provide detailed, helpful responses on all these topics. What would you like to know?";
  }
}

export const contentAnalyzer = new ContentAnalyzer();
