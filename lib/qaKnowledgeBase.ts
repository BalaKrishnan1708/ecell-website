// Comprehensive Q&A Knowledge Base for E-cell SVCE
// Direct question-answer mapping for accurate responses

export interface QAEntry {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
  relatedQuestions: string[];
}

export const qaKnowledgeBase: QAEntry[] = [
  // Leadership & Team Questions
  {
    question: "who is the cfo",
    answer: "The CFO of E-cell SVCE is Nithish from the Executive Committee. He handles financial matters and budgeting for the organization.",
    category: "team",
    keywords: ["cfo", "chief financial officer", "finance", "budget", "nithish"],
    relatedQuestions: ["who is the ceo", "who is the president", "executive committee", "leadership team"]
  },
  {
    question: "who is the ceo",
    answer: "The CEO of E-cell SVCE is Pradeep from the Executive Committee. He leads the overall strategic direction of the organization.",
    category: "team",
    keywords: ["ceo", "chief executive officer", "pradeep", "executive", "leader"],
    relatedQuestions: ["who is the cfo", "who is the president", "executive committee", "leadership team"]
  },
  {
    question: "who is the president",
    answer: "The President of E-cell SVCE is Roshan from the Core Leadership team. He leads the overall vision and direction of the organization.",
    category: "team",
    keywords: ["president", "roshan", "core leadership", "leader", "head"],
    relatedQuestions: ["who is the ceo", "who is the cfo", "core leadership", "leadership team"]
  },
  {
    question: "who is the vice president",
    answer: "The Vice President of E-cell SVCE is R. Dharshini from the Core Leadership team. She supports the President in leading the organization.",
    category: "team",
    keywords: ["vice president", "r. dharshini", "dharshini", "core leadership", "deputy"],
    relatedQuestions: ["who is the president", "core leadership", "leadership team"]
  },
  {
    question: "who is the secretary",
    answer: "The Secretary of E-cell SVCE is Manojkumar from the Core Leadership team. He handles administrative duties and documentation.",
    category: "team",
    keywords: ["secretary", "manojkumar", "core leadership", "administration", "documentation"],
    relatedQuestions: ["who is the president", "core leadership", "leadership team"]
  },
  {
    question: "who is the joint secretary",
    answer: "The Joint Secretary of E-cell SVCE is Sree Varshini from the Core Leadership team. She assists the Secretary in administrative tasks.",
    category: "team",
    keywords: ["joint secretary", "sree varshini", "varshini", "core leadership", "administration"],
    relatedQuestions: ["who is the secretary", "core leadership", "leadership team"]
  },
  {
    question: "who is the coo",
    answer: "The COO (Chief Operating Officer) of E-cell SVCE is Bhargavi from the Executive Committee. She manages day-to-day operations of the organization.",
    category: "team",
    keywords: ["coo", "chief operating officer", "bhargavi", "operations", "executive"],
    relatedQuestions: ["who is the ceo", "who is the cfo", "executive committee", "operations"]
  },
  {
    question: "who is the cmo",
    answer: "The CMO (Chief Marketing Officer) of E-cell SVCE is Roobuck from the Executive Committee. He leads all marketing and outreach activities.",
    category: "team",
    keywords: ["cmo", "chief marketing officer", "roobuck", "marketing", "executive"],
    relatedQuestions: ["who is the ceo", "marketing team", "executive committee", "outreach"]
  },
  {
    question: "who is the cto",
    answer: "The CTO (Chief Technology Officer) of E-cell SVCE is Karthik R from the Executive Committee. He leads all technical initiatives and digital platforms.",
    category: "team",
    keywords: ["cto", "chief technology officer", "karthik", "technology", "tech", "executive"],
    relatedQuestions: ["who is the ceo", "tech team", "executive committee", "technology"]
  },

  // Department Heads
  {
    question: "who is the tech head",
    answer: "The Tech Head of E-cell SVCE is Janani T from the Department Heads team. She leads the technical team and handles website and digital platforms.",
    category: "team",
    keywords: ["tech head", "janani", "technology", "department heads", "technical"],
    relatedQuestions: ["tech team", "department heads", "technology", "website"]
  },
  {
    question: "who is the marketing head",
    answer: "The Marketing Head of E-cell SVCE is Daksha S from the Department Heads team. She leads all marketing activities and outreach programs.",
    category: "team",
    keywords: ["marketing head", "daksha", "marketing", "department heads", "outreach"],
    relatedQuestions: ["marketing team", "department heads", "outreach", "promotion"]
  },
  {
    question: "who is the design head",
    answer: "The Design Head of E-cell SVCE is Vikaash B G from the Department Heads team. He leads the creative team for visual content and design.",
    category: "team",
    keywords: ["design head", "vikaash", "design", "department heads", "creative"],
    relatedQuestions: ["design team", "department heads", "creative", "visual content"]
  },
  {
    question: "who is the content head",
    answer: "The Content Head of E-cell SVCE is Meyyappan from the Department Heads team. He leads content creation and educational materials.",
    category: "team",
    keywords: ["content head", "meyyappan", "content", "department heads", "educational"],
    relatedQuestions: ["content team", "department heads", "content creation", "educational materials"]
  },
  {
    question: "who is the execution head",
    answer: "The Execution Head of E-cell SVCE is Sankaranarayanan from the Department Heads team. He leads operational activities and event execution.",
    category: "team",
    keywords: ["execution head", "sankaranarayanan", "execution", "operations", "department heads"],
    relatedQuestions: ["department heads", "operations", "event execution", "executive team"]
  },
  {
    question: "who is the community manager",
    answer: "The Community Manager of E-cell SVCE is Balapranav from the Department Heads team. He manages community engagement and social media.",
    category: "team",
    keywords: ["community manager", "balapranav", "community", "social media", "department heads"],
    relatedQuestions: ["community managers", "social media", "department heads", "engagement"]
  },

  // Events Questions
  {
    question: "what events does e-cell organize",
    answer: "E-cell SVCE organizes various events including workshops, competitions, hackathons, seminars, and networking events. Recent events include IIT Madras E-Summit 2025, MSME Idea Hackathon 4.0, Entrepreneurship Pitching League, and various workshops on pitching, IP filing, and business development.",
    category: "events",
    keywords: ["events", "workshops", "competitions", "hackathons", "seminars"],
    relatedQuestions: ["recent events", "upcoming events", "workshops", "competitions"]
  },
  {
    question: "what are the recent events",
    answer: "Recent events include: IIT Madras E-Summit 2025 & E-Auction (March 1, 2025), MSME Idea Hackathon 4.0 (October 29, 2024) with 18 proposals selected for incubation, MoU with E-Cell MANIT Bhopal (October 14, 2024), Entrepreneurship Pitching League (March 18, 2024), and various workshops on pitching and IP filing.",
    category: "events",
    keywords: ["recent events", "latest events", "current events", "2024", "2025"],
    relatedQuestions: ["events", "workshops", "competitions", "hackathons"]
  },
  {
    question: "what workshops are available",
    answer: "E-cell offers various workshops including Pitch Perfect Workshop, IP & Patent Filing Seminar, Business Plan Workshop, Entrepreneurship Workshop, and specialized sessions on business model canvas, market research, and presentation skills.",
    category: "events",
    keywords: ["workshops", "seminars", "training", "learning", "sessions"],
    relatedQuestions: ["events", "training", "learning", "seminars"]
  },

  // Services Questions
  {
    question: "what services does e-cell provide",
    answer: "E-cell SVCE provides comprehensive services including: 1) Workshops & Training on business fundamentals, 2) Mentorship Program with industry experts, 3) Events & Competitions like hackathons and pitch competitions, 4) Incubation Support for startups, 5) Recognition & Awards, 6) Career Guidance, plus specialized programs like Innovation Lab and Startup Accelerator.",
    category: "services",
    keywords: ["services", "programs", "mentorship", "incubation", "workshops"],
    relatedQuestions: ["programs", "mentorship", "incubation", "training"]
  },
  {
    question: "what is the incubation center",
    answer: "The Incubation Center is a dedicated space for nurturing early-stage startups. It provides mentorship, workspace, business development support, funding assistance, legal support, and networking opportunities. The program runs for 6 months and includes success stories like TechStart Solutions and EduTech Innovations.",
    category: "services",
    keywords: ["incubation", "startup", "mentorship", "funding", "workspace"],
    relatedQuestions: ["startup support", "mentorship", "funding", "workspace"]
  },
  {
    question: "what is entrepreneurship",
    answer: "Entrepreneurship is the process of designing, launching, and running a new business. At E-cell SVCE, we believe it's about developing a mindset that embraces challenges, seeks opportunities, and creates positive impact. We cover business planning, team building, market research, growth strategy, innovation, and execution.",
    category: "services",
    keywords: ["entrepreneurship", "business", "startup", "innovation", "mindset"],
    relatedQuestions: ["business", "startup", "innovation", "programs"]
  },

  // Contact Questions
  {
    question: "how can i contact e-cell",
    answer: "You can contact E-cell SVCE through: Email: bala.ramyaram@gmail.com, Phone: +91 98765 43210, Office: Sri Venkateswara College of Engineering, Tamil Nadu 602117. Office hours: Monday-Friday 9:00 AM-6:00 PM, Saturday 10:00 AM-2:00 PM, Sunday closed. We're also on Instagram @ecellsvce and LinkedIn.",
    category: "contact",
    keywords: ["contact", "email", "phone", "address", "office"],
    relatedQuestions: ["email", "phone", "address", "office hours"]
  },
  {
    question: "what is the email",
    answer: "The email address for E-cell SVCE is bala.ramyaram@gmail.com. You can reach us for any inquiries about programs, events, or collaboration opportunities.",
    category: "contact",
    keywords: ["email", "contact", "bala.ramyaram", "gmail"],
    relatedQuestions: ["contact", "phone", "address", "office"]
  },
  {
    question: "what is the phone number",
    answer: "The phone number for E-cell SVCE is +91 98765 43210. You can call us during office hours: Monday-Friday 9:00 AM-6:00 PM, Saturday 10:00 AM-2:00 PM.",
    category: "contact",
    keywords: ["phone", "number", "call", "contact", "98765"],
    relatedQuestions: ["contact", "email", "address", "office hours"]
  },

  // General Questions
  {
    question: "what is e-cell svce",
    answer: "E-cell SVCE is the Entrepreneurship Cell of Sri Venkateswara College of Engineering. We are a vibrant, student-driven community that nurtures innovation, creativity, and leadership. Our mission is to inspire and support students in transforming their ideas into impactful ventures. We've organized 20+ events, impacted 1000+ students, incubated 15+ startups, and have 50+ industry collaborations.",
    category: "general",
    keywords: ["e-cell", "ecell", "svce", "entrepreneurship", "cell"],
    relatedQuestions: ["about", "mission", "vision", "achievements"]
  },
  {
    question: "what is the mission",
    answer: "Our mission is to create a vibrant entrepreneurial ecosystem within the college that nurtures innovation, creativity, and leadership among students. We strive to bridge the gap between academic knowledge and practical application by facilitating interactions with industry experts, successful entrepreneurs, and investors.",
    category: "general",
    keywords: ["mission", "vision", "ecosystem", "innovation", "leadership"],
    relatedQuestions: ["vision", "about", "goals", "purpose"]
  },
  {
    question: "what is the vision",
    answer: "Our vision is to be recognized as a premier student-run entrepreneurship cell that fosters innovation and entrepreneurship across the region. We aspire to see our college as a hub for startups and innovations, where students think beyond conventional career paths.",
    category: "general",
    keywords: ["vision", "mission", "premier", "hub", "startups"],
    relatedQuestions: ["mission", "about", "goals", "future"]
  },
  {
    question: "what are the achievements",
    answer: "E-cell SVCE achievements include: 20+ Events Organized, 1000+ Students Impacted, 15+ Startups Incubated, 50+ Industry Collaborations. We've also established partnerships with IIT Madras and MANIT Bhopal, and have success stories like TechStart Solutions and EduTech Innovations.",
    category: "general",
    keywords: ["achievements", "success", "impact", "events", "startups"],
    relatedQuestions: ["success stories", "impact", "partnerships", "growth"]
  },

  // Builders Guild Questions
  {
    question: "what is builders guild",
    answer: "The Builders Guild is our technical community focused on building innovative solutions. It's a community of student developers and tech enthusiasts who focus on building real-world projects, collaborating on open-source projects, and learning technical knowledge. Activities include weekly coding sessions, project showcases, hackathons, and mentorship programs.",
    category: "technical",
    keywords: ["builders guild", "technical", "developers", "coding", "projects"],
    relatedQuestions: ["tech team", "development", "coding", "projects"]
  },

  // Program Questions
  {
    question: "how can i join e-cell",
    answer: "To join E-cell SVCE, watch our website and social media for recruitment announcements. No prior experience is required - just enthusiasm and willingness to learn. You can also participate in our events and workshops to get involved. Contact us at bala.ramyaram@gmail.com for more information about joining opportunities.",
    category: "general",
    keywords: ["join", "recruitment", "membership", "participate", "involve"],
    relatedQuestions: ["contact", "events", "participation", "membership"]
  },
  {
    question: "what programs are available",
    answer: "E-cell offers various programs including: 1) Beginner's Bootcamp (4-week intensive program), 2) Advanced Workshop for existing business ideas, 3) Innovation Lab for prototyping and experimentation, 4) Startup Accelerator (3-month intensive program), 5) Incubation Program (6-month startup support), and 6) Regular workshops on business planning, pitching, and market research.",
    category: "services",
    keywords: ["programs", "bootcamp", "workshop", "incubation", "accelerator"],
    relatedQuestions: ["services", "training", "mentorship", "incubation"]
  }
];

// Function to find the best matching Q&A entry
export function findBestMatch(query: string): QAEntry | null {
  const normalizedQuery = query.toLowerCase().trim();
  
  // First, try exact question matches
  let bestMatch = qaKnowledgeBase.find(entry => 
    entry.question.toLowerCase() === normalizedQuery
  );
  
  if (bestMatch) return bestMatch;
  
  // Then try keyword matching
  const queryWords = normalizedQuery.split(/\s+/).filter(word => word.length > 2);
  
  let bestScore = 0;
  let bestEntry: QAEntry | null = null;
  
  for (const entry of qaKnowledgeBase) {
    let score = 0;
    
    // Check keywords
    for (const keyword of entry.keywords) {
      if (normalizedQuery.includes(keyword.toLowerCase())) {
        score += 2;
      }
    }
    
    // Check question similarity
    for (const word of queryWords) {
      if (entry.question.toLowerCase().includes(word)) {
        score += 1;
      }
    }
    
    // Check related questions
    for (const relatedQ of entry.relatedQuestions) {
      if (normalizedQuery.includes(relatedQ.toLowerCase())) {
        score += 1;
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }
  
  return bestScore > 0 ? bestEntry : null;
}

// Enhanced response generator
export function generateEnhancedResponse(query: string): string {
  const match = findBestMatch(query);
  
  if (match) {
    return match.answer;
  }
  
  // Fallback responses based on query type
  const normalizedQuery = query.toLowerCase();
  
  if (normalizedQuery.includes('hello') || normalizedQuery.includes('hi') || normalizedQuery.includes('hey')) {
    return "Hello! Welcome to E-cell SVCE! I'm your AI assistant and I'm here to help you with any questions about our entrepreneurship programs, events, team, services, or anything else you'd like to know. What can I help you with today?";
  }
  
  if (normalizedQuery.includes('help') || normalizedQuery.includes('what can you do')) {
    return "I'm your comprehensive E-cell SVCE AI assistant! I can help you with:\n\n🎯 **Team & Leadership:**\n• President, CEO, CFO, and all leadership positions\n• Department heads and team structure\n• Contact information for team members\n\n📅 **Events & Programs:**\n• Recent and upcoming events\n• Workshops and competitions\n• Entrepreneurship programs\n\n💼 **Services:**\n• Incubation center details\n• Mentorship programs\n• Career guidance\n\n📞 **Contact:**\n• Email, phone, and office information\n• Office hours and location\n\nJust ask me anything about E-cell SVCE!";
  }
  
  if (normalizedQuery.includes('thank') || normalizedQuery.includes('thanks')) {
    return "You're very welcome! I'm always here to help with any questions about E-cell SVCE, entrepreneurship, events, or anything else you need. Feel free to ask me anything anytime!";
  }
  
  if (normalizedQuery.includes('bye') || normalizedQuery.includes('goodbye')) {
    return "Goodbye! It was great helping you today. Remember, I'm always here whenever you need information about E-cell SVCE or have any questions. Have a wonderful day!";
  }
  
  return "I'm your comprehensive E-cell SVCE AI assistant! I can help you with team information, events, services, programs, and contact details. Could you please rephrase your question or ask about something specific like 'Who is the CFO?' or 'What events does E-cell organize?'";
}
