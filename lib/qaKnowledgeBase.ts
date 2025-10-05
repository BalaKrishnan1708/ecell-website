
export interface QAEntry {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
  relatedQuestions: string[];
}

export const qaKnowledgeBase: QAEntry[] = [
  {
    question: "who is the cfo",
    answer: "The CFO of E-cell SVCE is N.Nitish from the Executive Committee. He is a 3rd year AIDS student and handles financial matters and budgeting for the organization. You can contact him via LinkedIn, email at nitish@ecell.svce.ac.in, Instagram at nitish_31x, or phone at 8428557498.",
    category: "team",
    keywords: ["cfo", "chief financial officer", "finance", "budget", "nithish", "n.nitish"],
    relatedQuestions: ["who is the ceo", "who is the president", "executive committee", "leadership team"]
  },
  {
    question: "who is the ceo",
    answer: "The CEO of E-cell SVCE is Shree Varshini M from the Executive Committee. She is a 3rd year ECE student and leads the overall strategic direction of the organization. You can contact her via LinkedIn, email at shreevarshini@ecell.svce.ac.in, or phone at 9360239715.",
    category: "team",
    keywords: ["ceo", "chief executive officer", "shree varshini", "varshini", "executive", "leader"],
    relatedQuestions: ["who is the cfo", "who is the president", "executive committee", "leadership team"]
  },
  {
    question: "who is the president",
    answer: "The President of E-cell SVCE is Roshan M from the Core Leadership team. He is a 4th year ECE student and leads the overall vision and direction of the organization. You can contact him via LinkedIn or email at 2022ec0448@svce.ac.in, or phone at 9841092274.",
    category: "team",
    keywords: ["president", "roshan", "roshan m", "core leadership", "leader", "head"],
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
    answer: "The CTO (Chief Technology Officer) of E-cell SVCE is Janani from the Executive Committee. She is a 3rd year CSE student and leads all technical initiatives and digital platforms. You can contact her via email at janani@ecell.svce.ac.in.",
    category: "team",
    keywords: ["cto", "chief technology officer", "janani", "technology", "tech", "executive"],
    relatedQuestions: ["who is the ceo", "tech team", "executive committee", "technology"]
  },

  {
    question: "who is the tech head",
    answer: "The Tech Head of E-cell SVCE is Bala Krishna from the Department Heads team. He is a 3rd year AI&DS student and leads the technical team handling website and digital platforms. You can contact him via email at balakrishna@ecell.svce.ac.in.",
    category: "team",
    keywords: ["tech head", "bala krishna", "technology", "department heads", "technical"],
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

  {
    question: "what is builders guild",
    answer: "The Builders Guild is our technical community focused on building innovative solutions. It's a community of student developers and tech enthusiasts who focus on building real-world projects, collaborating on open-source projects, and learning technical knowledge. Activities include weekly coding sessions, project showcases, hackathons, and mentorship programs.",
    category: "technical",
    keywords: ["builders guild", "technical", "developers", "coding", "projects"],
    relatedQuestions: ["tech team", "development", "coding", "projects"]
  },

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
  },

  // Comprehensive Team Member Information
  {
    question: "who are all the team members",
    answer: "E-cell SVCE has a comprehensive team structure with 41 members across different departments:\n\n**Core Leadership:**\n• Roshan M - President (ECE - 4th Year)\n• R. Dharshni - Vice President (Biotech - 4th Year)\n• Manojkumar A - Secretary (ECE - 4th Year)\n\n**Executive Committee:**\n• Shree Varshini M - CEO (ECE - 3rd Year)\n• Bhargavi - COO (Chemical - 4th Year)\n• N.Nitish - CFO (AIDS - 3rd Year)\n• Daksha - CMO (Biotech - 2nd Year)\n• Janani - CTO (CSE - 3rd Year)\n• Vikaash - CDO (ECE - 4th Year)\n\n**Department Heads:**\n• Bala Krishna - Tech Head (AI&DS - 3rd Year)\n• Sankara Narayanan S - Execution Head (Biotechnology - 3rd Year)\n• Harshith B - Content Head (Mechanical and Automation - 3rd Year)\n• Divya Shree M - Design Lead (Information Technology - 2nd Year)\n• Baarath Arumugaraja - Operation Lead (CSE - 3rd Year)\n• Balapranav - Community Captain (EEE - 2nd Year)\n• THARUN S - Creative Lead (Mechanical and Automation - 2nd Year)\n\n**Executive Members:**\n• P.Rasiga (Chemical - 2nd Year)\n• Sri Bharathi R (Mech & Auto - 2nd Year)\n• Mayooritha P (CSC - 2nd Year)\n• Ajay M (CSC - 3rd Year)\n• G.Shreenidhi (EEE - 2nd Year)\n\n**Marketing Team:**\n• Santhoshkumar C (EEE - 2nd Year)\n• Gokul S (Biotech - 2nd Year)\n• Kayal nethra K (CSC - 2nd Year)\n• Mhadhurra Chandran (CSC - 3rd Year)\n• Logeshwari N (Biotech - 2nd Year)\n\n**Tech Team:**\n• Sudish M (CSC - 3rd Year)\n• ABIJITH P (CSC - 3rd Year)\n• K Buvaneswaran (ECE - 2nd Year)\n• Divya Bharathi R (CSC - 3rd Year)\n\n**Content Team:**\n• Jefina Giftlin J (Biotech - 2nd Year)\n• Irfanaa Parveen M (ECE - 2nd Year)\n• S V Haritha (CSC - 3rd Year)\n\n**Design Team:**\n• THOUFIKUR RAHAMAN Y (EEE - 2nd Year)\n• Yogendra (Mech - 2nd Year)\n• PRATHIBA M S K (ECE - 2nd Year)\n• Seyed Mohamed (Mech & Auto - 3rd Year)\n• Vaishali (CSC - 2nd Year)\n\n**Community Managers:**\n• Hariis P (CSC - 3rd Year)\n• Kamalina K (ECE - 2nd Year)\n• CHALAKESH S K (Chemical - 2nd Year)",
    category: "team",
    keywords: ["team members", "all members", "complete team", "team list", "everyone"],
    relatedQuestions: ["team structure", "who is in the team", "team composition", "members list"]
  },
  {
    question: "who is roshan",
    answer: "Roshan M is the President of E-cell SVCE from the Core Leadership team. He is a 4th year ECE student and leads the overall vision and direction of the organization. You can contact him via LinkedIn or email at 2022ec0448@svce.ac.in.",
    category: "team",
    keywords: ["roshan", "president", "roshan m", "core leadership"],
    relatedQuestions: ["who is the president", "core leadership", "leadership team"]
  },
  {
    question: "who is dharshni",
    answer: "R. Dharshni is the Vice President of E-cell SVCE from the Core Leadership team. She is a 4th year Biotech student and supports the President in leading the organization. You can contact her via email at dharshni@ecell.svce.ac.in.",
    category: "team",
    keywords: ["dharshni", "r. dharshni", "vice president", "core leadership"],
    relatedQuestions: ["who is the vice president", "core leadership", "leadership team"]
  },
  {
    question: "who is manojkumar",
    answer: "Manojkumar A is the Secretary of E-cell SVCE from the Core Leadership team. He is a 4th year ECE student and handles administrative duties and documentation. You can contact him via email at manojkumar@ecell.svce.ac.in or phone at 7418434691.",
    category: "team",
    keywords: ["manojkumar", "manojkumar a", "secretary", "core leadership"],
    relatedQuestions: ["who is the secretary", "core leadership", "leadership team"]
  },
  {
    question: "who is shree varshini",
    answer: "Shree Varshini M is the Chief Executive Officer (CEO) of E-cell SVCE from the Executive Committee. She is a 3rd year ECE student and leads the overall strategic direction of the organization. You can contact her via LinkedIn or email at shreevarshini@ecell.svce.ac.in or phone at 9360239715.",
    category: "team",
    keywords: ["shree varshini", "varshini", "ceo", "chief executive officer", "executive committee"],
    relatedQuestions: ["who is the ceo", "executive committee", "leadership team"]
  },
  {
    question: "who is bhargavi",
    answer: "Bhargavi is the Chief Operating Officer (COO) of E-cell SVCE from the Executive Committee. She is a 4th year Chemical student and manages day-to-day operations of the organization. You can contact her via email at bhargavi@ecell.svce.ac.in.",
    category: "team",
    keywords: ["bhargavi", "coo", "chief operating officer", "executive committee"],
    relatedQuestions: ["who is the coo", "executive committee", "operations"]
  },
  {
    question: "who is nitish",
    answer: "N.Nitish is the Chief Financial Officer (CFO) of E-cell SVCE from the Executive Committee. He is a 3rd year AIDS student and handles financial matters and budgeting for the organization. You can contact him via LinkedIn, email at nitish@ecell.svce.ac.in, Instagram at nitish_31x, or phone at 8428557498.",
    category: "team",
    keywords: ["nitish", "n.nitish", "cfo", "chief financial officer", "executive committee"],
    relatedQuestions: ["who is the cfo", "executive committee", "finance"]
  },
  {
    question: "who is daksha",
    answer: "Daksha is the Chief Marketing Officer (CMO) of E-cell SVCE from the Executive Committee. She is a 2nd year Biotech student and leads all marketing and outreach activities. You can contact her via email at daksha@ecell.svce.ac.in.",
    category: "team",
    keywords: ["daksha", "cmo", "chief marketing officer", "executive committee"],
    relatedQuestions: ["who is the cmo", "marketing", "executive committee"]
  },
  {
    question: "who is janani",
    answer: "Janani is the Chief Technology Officer (CTO) of E-cell SVCE from the Executive Committee. She is a 3rd year CSE student and leads all technical initiatives and digital platforms. You can contact her via email at janani@ecell.svce.ac.in.",
    category: "team",
    keywords: ["janani", "cto", "chief technology officer", "executive committee"],
    relatedQuestions: ["who is the cto", "technology", "executive committee"]
  },
  {
    question: "who is vikaash",
    answer: "Vikaash is the Chief Design Officer (CDO) of E-cell SVCE from the Executive Committee. He is a 4th year ECE student and leads design initiatives. You can contact him via email at vikaash@ecell.svce.ac.in.",
    category: "team",
    keywords: ["vikaash", "cdo", "chief design officer", "executive committee"],
    relatedQuestions: ["who is the cdo", "design", "executive committee"]
  },
  {
    question: "who is bala krishna",
    answer: "Bala Krishna is the Tech Head of E-cell SVCE from the Department Heads team. He is a 3rd year AI&DS student and leads the technical team handling website and digital platforms. You can contact him via email at balakrishna@ecell.svce.ac.in.",
    category: "team",
    keywords: ["bala krishna", "tech head", "technology", "department heads"],
    relatedQuestions: ["tech team", "department heads", "technology"]
  },
  {
    question: "who is sankara narayanan",
    answer: "Sankara Narayanan S is the Execution Head of E-cell SVCE from the Department Heads team. He is a 3rd year Biotechnology student and leads operational activities and event execution. You can contact him via LinkedIn, email at sankaranarayanan@ecell.svce.ac.in, Instagram at s4nk4r, or phone at 8610049372.",
    category: "team",
    keywords: ["sankara narayanan", "execution head", "operations", "department heads"],
    relatedQuestions: ["department heads", "operations", "event execution"]
  },
  {
    question: "who is harshith",
    answer: "Harshith B is the Content Head of E-cell SVCE from the Department Heads team. He is a 3rd year Mechanical and Automation student and leads content creation and educational materials. You can contact him via LinkedIn, email at harshith@ecell.svce.ac.in, Instagram at Harshith.007, or phone at 8608786089.",
    category: "team",
    keywords: ["harshith", "harshith b", "content head", "content", "department heads"],
    relatedQuestions: ["content team", "department heads", "content creation"]
  },
  {
    question: "who is divya shree",
    answer: "Divya Shree M is the Design Lead of E-cell SVCE from the Department Heads team. She is a 2nd year Information Technology student and leads the creative team for visual content and design. You can contact her via LinkedIn, email at divyashree@ecell.svce.ac.in, Instagram at _divya03shree_, or phone at 8015848971.",
    category: "team",
    keywords: ["divya shree", "design lead", "design", "department heads"],
    relatedQuestions: ["design team", "department heads", "creative"]
  },
  {
    question: "who is baarath",
    answer: "Baarath Arumugaraja is the Operation Lead of E-cell SVCE from the Department Heads team. He is a 3rd year CSE student and leads operational activities. You can contact him via LinkedIn, email at baarath@ecell.svce.ac.in, Instagram at baarathraja, or phone at 9952436835.",
    category: "team",
    keywords: ["baarath", "baarath arumugaraja", "operation lead", "operations", "department heads"],
    relatedQuestions: ["department heads", "operations", "executive team"]
  },
  {
    question: "who is balapranav",
    answer: "Balapranav is the Community Captain of E-cell SVCE from the Department Heads team. He is a 2nd year EEE student and manages community engagement and social media. You can contact him via email at balapranav@ecell.svce.ac.in.",
    category: "team",
    keywords: ["balapranav", "community captain", "community", "department heads"],
    relatedQuestions: ["community managers", "social media", "department heads"]
  },
  {
    question: "who is tharun",
    answer: "THARUN S is the Creative Lead of E-cell SVCE from the Department Heads team. He is a 2nd year Mechanical and Automation student and leads creative initiatives. You can contact him via LinkedIn, email at tharun@ecell.svce.ac.in, Instagram at @tharunehhhh, or phone at 9342526239.",
    category: "team",
    keywords: ["tharun", "tharun s", "creative lead", "creative", "department heads"],
    relatedQuestions: ["design team", "department heads", "creative"]
  },

  // Additional Team Members for Name Recognition
  {
    question: "who is sudish",
    answer: "Sudish M is a member of the Tech Team at E-cell SVCE. He is a 3rd year CSC student and handles technical development and digital platforms. You can contact him via email at 2023cs0508@svce.ac.in, Instagram at _._sudish, or phone at 9150195835.",
    category: "team",
    keywords: ["sudish", "sudish m", "tech team", "technical"],
    relatedQuestions: ["tech team", "technical", "development"]
  },
  {
    question: "who is abijith",
    answer: "ABIJITH P is a member of the Tech Team at E-cell SVCE. He is a 3rd year CSC student and works on technical projects and digital solutions. You can contact him via email at abijithmark095@gmail.com, Instagram at 0__abi__1, or phone at 6374997429.",
    category: "team",
    keywords: ["abijith", "abijith p", "tech team", "technical"],
    relatedQuestions: ["tech team", "technical", "development"]
  },
  {
    question: "who is buvaneswaran",
    answer: "K Buvaneswaran is a member of the Tech Team at E-cell SVCE. He is a 2nd year ECE student and contributes to technical development. You can contact him via email at 2024ec0673@svce.ac.in, Instagram at _buvi_2006, or phone at 9380867566.",
    category: "team",
    keywords: ["buvaneswaran", "k buvaneswaran", "tech team", "technical"],
    relatedQuestions: ["tech team", "technical", "development"]
  },
  {
    question: "who is divya bharathi",
    answer: "Divya Bharathi R is a member of the Tech Team at E-cell SVCE. She is a 3rd year CSC student and works on technical projects. You can contact her via email at 2023CS0098@SVCE.AC.IN, Instagram at divya_bharathi_18, or phone at 9840658454.",
    category: "team",
    keywords: ["divya bharathi", "divya bharathi r", "tech team", "technical"],
    relatedQuestions: ["tech team", "technical", "development"]
  },
  {
    question: "who is santhoshkumar",
    answer: "Santhoshkumar C is a member of the Marketing Team at E-cell SVCE. He is a 2nd year EEE student and handles marketing and outreach activities. You can contact him via email at 2024ee0189@svce.ac.in, Instagram at _.mashysandy._, or phone at 9080083869.",
    category: "team",
    keywords: ["santhoshkumar", "santhoshkumar c", "marketing team", "marketing"],
    relatedQuestions: ["marketing team", "marketing", "outreach"]
  },
  {
    question: "who is gokul",
    answer: "Gokul S is a member of the Marketing Team at E-cell SVCE. He is a 2nd year Biotech student and contributes to marketing initiatives. You can contact him via email at 2024bt0848@svce.ac.in, Instagram at _.s.gokul._, or phone at 9884463837.",
    category: "team",
    keywords: ["gokul", "gokul s", "marketing team", "marketing"],
    relatedQuestions: ["marketing team", "marketing", "outreach"]
  },
  {
    question: "who is kayal nethra",
    answer: "Kayal nethra K is a member of the Marketing Team at E-cell SVCE. She is a 2nd year CSC student and handles marketing activities. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["kayal nethra", "kayal nethra k", "marketing team", "marketing"],
    relatedQuestions: ["marketing team", "marketing", "outreach"]
  },
  {
    question: "who is mhadhurra",
    answer: "Mhadhurra Chandran is a member of the Marketing Team at E-cell SVCE. He is a 3rd year CSC student and contributes to marketing efforts. You can contact him via email at 2023CS0956@svce.ac.in, Instagram at mhadhu_06, or phone at 9840646632.",
    category: "team",
    keywords: ["mhadhurra", "mhadhurra chandran", "marketing team", "marketing"],
    relatedQuestions: ["marketing team", "marketing", "outreach"]
  },
  {
    question: "who is logeshwari",
    answer: "Logeshwari N is a member of the Marketing Team at E-cell SVCE. She is a 2nd year Biotech student and handles marketing activities. You can contact her via email at 2024bt0388@svce.ac.in, Instagram at blue_.moonx_, or phone at 9360737534.",
    category: "team",
    keywords: ["logeshwari", "logeshwari n", "marketing team", "marketing"],
    relatedQuestions: ["marketing team", "marketing", "outreach"]
  },
  {
    question: "who is jefina",
    answer: "Jefina Giftlin J is a member of the Content Team at E-cell SVCE. She is a 2nd year Biotech student and creates educational content and materials. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["jefina", "jefina giftlin", "content team", "content"],
    relatedQuestions: ["content team", "content", "educational"]
  },
  {
    question: "who is irfanaa",
    answer: "Irfanaa Parveen M is a member of the Content Team at E-cell SVCE. She is a 2nd year ECE student and contributes to content creation. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["irfanaa", "irfanaa parveen", "content team", "content"],
    relatedQuestions: ["content team", "content", "educational"]
  },
  {
    question: "who is haritha",
    answer: "S V Haritha is a member of the Content Team at E-cell SVCE. She is a 3rd year CSC student and creates educational materials. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["haritha", "s v haritha", "content team", "content"],
    relatedQuestions: ["content team", "content", "educational"]
  },
  {
    question: "who is thoufikur",
    answer: "THOUFIKUR RAHAMAN Y is a member of the Design Team at E-cell SVCE. He is a 2nd year EEE student and contributes to visual design and creative content. You can contact him via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["thoufikur", "thoufikur rahaman", "design team", "design"],
    relatedQuestions: ["design team", "design", "creative"]
  },
  {
    question: "who is yogendra",
    answer: "Yogendra is a member of the Design Team at E-cell SVCE. He is a 2nd year Mech student and works on visual design projects. You can contact him via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["yogendra", "design team", "design"],
    relatedQuestions: ["design team", "design", "creative"]
  },
  {
    question: "who is prathiba",
    answer: "PRATHIBA M S K is a member of the Design Team at E-cell SVCE. She is a 2nd year ECE student and contributes to creative design work. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["prathiba", "prathiba m s k", "design team", "design"],
    relatedQuestions: ["design team", "design", "creative"]
  },
  {
    question: "who is seyed mohamed",
    answer: "Seyed Mohamed is a member of the Design Team at E-cell SVCE. He is a 3rd year Mech & Auto student and works on design projects. You can contact him via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["seyed mohamed", "mohamed", "design team", "design"],
    relatedQuestions: ["design team", "design", "creative"]
  },
  {
    question: "who is vaishali",
    answer: "Vaishali is a member of the Design Team at E-cell SVCE. She is a 2nd year CSC student and contributes to visual design work. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["vaishali", "design team", "design"],
    relatedQuestions: ["design team", "design", "creative"]
  },
  {
    question: "who is hariis",
    answer: "Hariis P is a Community Manager at E-cell SVCE. He is a 3rd year CSC student and manages community engagement and social media. You can contact him via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["hariis", "hariis p", "community manager", "community"],
    relatedQuestions: ["community managers", "community", "social media"]
  },
  {
    question: "who is kamalina",
    answer: "Kamalina K is a Community Manager at E-cell SVCE. She is a 2nd year ECE student and handles community engagement activities. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["kamalina", "kamalina k", "community manager", "community"],
    relatedQuestions: ["community managers", "community", "social media"]
  },
  {
    question: "who is chalakesh",
    answer: "CHALAKESH S K is a Community Manager at E-cell SVCE. He is a 2nd year Chemical student and manages community activities. You can contact him via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["chalakesh", "chalakesh s k", "community manager", "community"],
    relatedQuestions: ["community managers", "community", "social media"]
  },
  {
    question: "who is rasiga",
    answer: "P.Rasiga is an Executive Member at E-cell SVCE. He is a 2nd year Chemical student and contributes to various organizational activities. You can contact him via email at 2024ch0405@svce.ac.in or phone at 9500240988.",
    category: "team",
    keywords: ["rasiga", "p.rasiga", "executive member", "executive"],
    relatedQuestions: ["executive members", "executive", "team members"]
  },
  {
    question: "who is sri bharathi",
    answer: "Sri Bharathi R is an Executive Member at E-cell SVCE. She is a 2nd year Mech & Auto student and participates in organizational activities. You can contact her via email at 2024mn0785@svce.ac.in, Instagram at Sribharathi666, or phone at 7397103127.",
    category: "team",
    keywords: ["sri bharathi", "sri bharathi r", "executive member", "executive"],
    relatedQuestions: ["executive members", "executive", "team members"]
  },
  {
    question: "who is mayooritha",
    answer: "Mayooritha P is an Executive Member at E-cell SVCE. She is a 2nd year CSC student and contributes to various team activities. You can contact her via email at 2024cs0480@svce.ac.in, Instagram at mayooritha_, or phone at 9677809044.",
    category: "team",
    keywords: ["mayooritha", "mayooritha p", "executive member", "executive"],
    relatedQuestions: ["executive members", "executive", "team members"]
  },
  {
    question: "who is ajay",
    answer: "Ajay M is an Executive Member at E-cell SVCE. He is a 3rd year CSC student and participates in organizational activities. You can contact him via email at ajay@ecell.svce.ac.in.",
    category: "team",
    keywords: ["ajay", "ajay m", "executive member", "executive"],
    relatedQuestions: ["executive members", "executive", "team members"]
  },
  {
    question: "who is shreenidhi",
    answer: "G.Shreenidhi is an Executive Member at E-cell SVCE. She is a 2nd year EEE student and contributes to team activities. You can contact her via email at 2024EE0011@svce.ac.in or phone at 9962010822.",
    category: "team",
    keywords: ["shreenidhi", "g.shreenidhi", "executive member", "executive"],
    relatedQuestions: ["executive members", "executive", "team members"]
  },

  // Additional Team Members for Complete Coverage
  {
    question: "who is jefina giftlin",
    answer: "Jefina Giftlin J is a member of the Content Team at E-cell SVCE. She is a 2nd year Biotech student and creates educational content and materials. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["jefina giftlin", "jefina", "content team", "content"],
    relatedQuestions: ["content team", "content", "educational"]
  },
  {
    question: "who is irfanaa parveen",
    answer: "Irfanaa Parveen M is a member of the Content Team at E-cell SVCE. She is a 2nd year ECE student and contributes to content creation. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["irfanaa parveen", "irfanaa", "content team", "content"],
    relatedQuestions: ["content team", "content", "educational"]
  },
  {
    question: "who is s v haritha",
    answer: "S V Haritha is a member of the Content Team at E-cell SVCE. She is a 3rd year CSC student and creates educational materials. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["s v haritha", "haritha", "content team", "content"],
    relatedQuestions: ["content team", "content", "educational"]
  },
  {
    question: "who is thoufikur rahaman",
    answer: "THOUFIKUR RAHAMAN Y is a member of the Design Team at E-cell SVCE. He is a 2nd year EEE student and contributes to visual design and creative content. You can contact him via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["thoufikur rahaman", "thoufikur", "design team", "design"],
    relatedQuestions: ["design team", "design", "creative"]
  },
  {
    question: "who is yogendra",
    answer: "Yogendra is a member of the Design Team at E-cell SVCE. He is a 2nd year Mech student and works on visual design projects. You can contact him via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["yogendra", "design team", "design"],
    relatedQuestions: ["design team", "design", "creative"]
  },
  {
    question: "who is prathiba m s k",
    answer: "PRATHIBA M S K is a member of the Design Team at E-cell SVCE. She is a 2nd year ECE student and contributes to creative design work. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["prathiba m s k", "prathiba", "design team", "design"],
    relatedQuestions: ["design team", "design", "creative"]
  },
  {
    question: "who is seyed mohamed",
    answer: "Seyed Mohamed is a member of the Design Team at E-cell SVCE. He is a 3rd year Mech & Auto student and works on design projects. You can contact him via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["seyed mohamed", "mohamed", "design team", "design"],
    relatedQuestions: ["design team", "design", "creative"]
  },
  {
    question: "who is vaishali",
    answer: "Vaishali is a member of the Design Team at E-cell SVCE. She is a 2nd year CSC student and contributes to visual design work. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["vaishali", "design team", "design"],
    relatedQuestions: ["design team", "design", "creative"]
  },
  {
    question: "who is hariis p",
    answer: "Hariis P is a Community Manager at E-cell SVCE. He is a 3rd year CSC student and manages community engagement and social media. You can contact him via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["hariis p", "hariis", "community manager", "community"],
    relatedQuestions: ["community managers", "community", "social media"]
  },
  {
    question: "who is kamalina k",
    answer: "Kamalina K is a Community Manager at E-cell SVCE. She is a 2nd year ECE student and handles community engagement activities. You can contact her via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["kamalina k", "kamalina", "community manager", "community"],
    relatedQuestions: ["community managers", "community", "social media"]
  },
  {
    question: "who is chalakesh s k",
    answer: "CHALAKESH S K is a Community Manager at E-cell SVCE. He is a 2nd year Chemical student and manages community activities. You can contact him via email at team@ecell.svce.ac.in.",
    category: "team",
    keywords: ["chalakesh s k", "chalakesh", "community manager", "community"],
    relatedQuestions: ["community managers", "community", "social media"]
  },
  {
    question: "who is balakrishnan",
    answer: "Balakrishnan is the Tech Head of E-cell SVCE from the Department Heads team. He is a 3rd year AIDS student and leads the technical team handling website and digital platforms. You can contact him via email at 2023ad0681@svce.ac.in, Instagram at iambalakrishnan.r, phone at 9444543801, or GitHub at https://github.com/BalaKrishnan1708.",
    category: "team",
    keywords: ["balakrishnan", "bala krishna", "tech head", "technology", "department heads"],
    relatedQuestions: ["tech team", "department heads", "technology", "website"]
  }
];

export function findBestMatch(query: string): QAEntry | null {
  const normalizedQuery = query.toLowerCase().trim();
  
  let bestMatch = qaKnowledgeBase.find(entry => 
    entry.question.toLowerCase() === normalizedQuery
  );
  
  if (bestMatch) return bestMatch;
  
  const queryWords = normalizedQuery.split(/\s+/).filter(word => word.length > 2);
  
  let bestScore = 0;
  let bestEntry: QAEntry | null = null;
  
  for (const entry of qaKnowledgeBase) {
    let score = 0;
    
    for (const keyword of entry.keywords) {
      if (normalizedQuery.includes(keyword.toLowerCase())) {
        score += 2;
      }
    }
    
    for (const word of queryWords) {
      if (entry.question.toLowerCase().includes(word)) {
        score += 1;
      }
    }
    
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

export function generateEnhancedResponse(query: string): string {
  const match = findBestMatch(query);
  
  if (match) {
    return match.answer;
  }
  
  const normalizedQuery = query.toLowerCase();
  
  if (normalizedQuery.includes('hello') || normalizedQuery.includes('hi') || normalizedQuery.includes('hey')) {
    return "Hello! Welcome to E-cell SVCE! I'm your AI assistant and I'm here to help you with any questions about our entrepreneurship programs, events, team, services, or anything else you'd like to know. What can I help you with today?";
  }
  
  if (normalizedQuery.includes('help') || normalizedQuery.includes('what can you do')) {
    return "I'm your comprehensive E-cell SVCE AI assistant! I can help you with:\n\n**Team & Leadership:**\n• President, CEO, CFO, and all leadership positions\n• Department heads and team structure\n• Contact information for team members\n\n**Events & Programs:**\n• Recent and upcoming events\n• Workshops and competitions\n• Entrepreneurship programs\n\n**Services:**\n• Incubation center details\n• Mentorship programs\n• Career guidance\n\n**Contact:**\n• Email, phone, and office information\n• Office hours and location\n\nJust ask me anything about E-cell SVCE!";
  }
  
  if (normalizedQuery.includes('thank') || normalizedQuery.includes('thanks')) {
    return "You're very welcome! I'm always here to help with any questions about E-cell SVCE, entrepreneurship, events, or anything else you need. Feel free to ask me anything anytime!";
  }
  
  if (normalizedQuery.includes('bye') || normalizedQuery.includes('goodbye')) {
    return "Goodbye! It was great helping you today. Remember, I'm always here whenever you need information about E-cell SVCE or have any questions. Have a wonderful day!";
  }
  
  return "I'm your comprehensive E-cell SVCE AI assistant! I can help you with team information, events, services, programs, and contact details. Could you please rephrase your question or ask about something specific like 'Who is the CFO?' or 'What events does E-cell organize?'";
}





