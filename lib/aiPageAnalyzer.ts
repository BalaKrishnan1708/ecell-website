// AI Page Analyzer - Reads and understands all website pages
import { readFileSync } from 'fs';
import { join } from 'path';

export interface PageContent {
  path: string;
  title: string;
  content: string;
  type: 'page' | 'component' | 'data';
  metadata?: {
    description?: string;
    keywords?: string[];
    sections?: string[];
  };
}

export interface AIResponse {
  answer: string;
  confidence: number;
  sources: string[];
  suggestions?: string[];
}

class AIPageAnalyzer {
  private pageContents: PageContent[] = [];
  private isInitialized = false;

  constructor() {
    this.initializePageContents();
  }

  private initializePageContents() {
    try {
      // Read all page files and extract content
      this.pageContents = [
        // Home page
        {
          path: '/',
          title: 'E-cell SVCE Home',
          type: 'page',
          content: `
            E-cell SVCE is the Entrepreneurship Cell of Sri Venkateswara College of Engineering.
            We provide a platform for students to learn, innovate, and launch their entrepreneurial journey.
            
            Services:
            - Entrepreneurship: Start a roadmap for entrepreneurial efforts
            - Incubation Center: Entrepreneurial and Managerial Development of SMEs through Incubator MSME
            - Our Services: Promoting Entrepreneurship and Facilities to help grow business ideas
            
            Recent Events:
            - Entrepreneurship Workshop (March 15, 2023) - 120 participants
            - Startup Pitch Competition (February 28, 2023) - 50 teams
            - Industry Expert Talk Series (January 10, 2023) - 200+ attendees
          `,
          metadata: {
            description: 'E-cell SVCE home page with services and recent events',
            keywords: ['entrepreneurship', 'innovation', 'startup', 'events', 'workshops'],
            sections: ['hero', 'services', 'events']
          }
        },

        // About page
        {
          path: '/about',
          title: 'About E-cell SVCE',
          type: 'page',
          content: `
            E-cell SVCE is dedicated to empowering students to become future entrepreneurs and leaders.
            
            Who We Are:
            The Entrepreneurship Cell (E-cell) at Sri Venkateswara College of Engineering is a vibrant, student-driven community that nurtures innovation, creativity, and leadership. Our mission is to inspire and support students in transforming their ideas into impactful ventures.
            
            Since 2015, E-cell SVCE has championed entrepreneurship through hands-on events, workshops, and mentorship.
            
            What We Do:
            - Fostering innovation and entrepreneurial thinking
            - Providing resources, mentorship, and networking
            - Organizing workshops, seminars, and competitions
            - Connecting students with industry experts and investors
            
            Mission: To create a vibrant entrepreneurial ecosystem within the college that nurtures innovation, creativity, and leadership among students.
            
            Vision: To be recognized as a premier student-run entrepreneurship cell that fosters innovation and entrepreneurship across the region.
            
            Achievements:
            - 20+ Events Organized
            - 1000+ Students Impacted
            - 15+ Startups Incubated
            - 50+ Industry Collaborations
          `,
          metadata: {
            description: 'About E-cell SVCE - mission, vision, and achievements',
            keywords: ['about', 'mission', 'vision', 'achievements', 'team'],
            sections: ['who-we-are', 'mission-vision', 'achievements']
          }
        },

        // Events page
        {
          path: '/events',
          title: 'E-cell Events',
          type: 'page',
          content: `
            E-cell organizes various events throughout the year to inspire and nurture entrepreneurial talent.
            
            2025 Events:
            - IIT Madras E-Summit 2025 & E-Auction (March 1, 2025) - SVCE E-Cell Team participated in E-Auction
            - MSME Idea Hackathon 4.0 (October 29, 2024) - 18 proposals from SVCE forwarded for incubation
            - MoU with E-Cell MANIT Bhopal (October 14, 2024) - Official partnership established
            - IIT Madras EDD Cohort – Growth Track (April 1, 2024) - 2024-2025 Cohort program
            
            2024 Events:
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
          `,
          metadata: {
            description: 'E-cell events including workshops, competitions, and seminars',
            keywords: ['events', 'workshops', 'competitions', 'hackathons', 'seminars'],
            sections: ['2025-events', '2024-events', '2023-events', '2022-events']
          }
        },

        // Team page
        {
          path: '/team',
          title: 'E-cell Team',
          type: 'page',
          content: `
            Meet the passionate individuals behind E-cell SVCE dedicated to fostering entrepreneurship.
            
            Core Team:
            - John Doe - President (Tech domain)
            - Jane Smith - Vice President (Content domain)
            - Michael Johnson - Secretary (Market domain)
            - Emily Brown - Treasurer (Design domain)
            
            Marketing Team:
            - David Wilson - Marketing Lead (Outreach domain)
            
            Events Team:
            - Sarah Lee - Events Coordinator (Operations domain)
            
            All team members have LinkedIn profiles and email contacts available.
          `,
          metadata: {
            description: 'E-cell team members and their roles',
            keywords: ['team', 'leadership', 'members', 'roles'],
            sections: ['core-team', 'marketing-team', 'events-team']
          }
        },

        // Additional pages content
        {
          path: '/builders-guild',
          title: 'Builders Guild',
          type: 'page',
          content: `
            The Builders Guild is a community within E-cell for students passionate about building projects and startups.
            It's a community for students passionate about building projects and startups.
          `,
          metadata: {
            description: 'Builders Guild community for student projects',
            keywords: ['builders guild', 'community', 'projects', 'startups']
          }
        },

        {
          path: '/contact',
          title: 'Contact E-cell SVCE',
          type: 'page',
          content: `
            Contact E-cell SVCE through our contact form or email on our website.
            We're also on social media platforms including Instagram, LinkedIn, Facebook, and Twitter.
            Location: Sri Venkateswara College of Engineering, Sriperumbudur, Tamil Nadu, India.
          `,
          metadata: {
            description: 'Contact information for E-cell SVCE',
            keywords: ['contact', 'email', 'social media', 'location']
          }
        },

        {
          path: '/entrepreneurship',
          title: 'Entrepreneurship',
          type: 'page',
          content: `
            Entrepreneurship is the process of starting and running a new business, typically with innovation and risk-taking.
            Start a roadmap that will determine where you want to go with your entrepreneurial efforts.
          `,
          metadata: {
            description: 'Entrepreneurship resources and guidance',
            keywords: ['entrepreneurship', 'business', 'startup', 'innovation']
          }
        },

        {
          path: '/incubation-center',
          title: 'Incubation Center',
          type: 'page',
          content: `
            Entrepreneurial and Managerial Development of SMEs through Incubator MSME.
            An incubation program helps startups grow by providing workspace, mentorship, and funding opportunities.
            We guide promising startups towards incubation opportunities.
          `,
          metadata: {
            description: 'Incubation center for startup development',
            keywords: ['incubation', 'startup', 'mentorship', 'funding']
          }
        },

        {
          path: '/our-services',
          title: 'Our Services',
          type: 'page',
          content: `
            Promoting Entrepreneurship and Facilities to help you grow your business ideas.
            We provide resources, mentorship, and networking opportunities.
            We organize workshops, seminars, and competitions.
            We connect students with industry experts and investors.
          `,
          metadata: {
            description: 'Services provided by E-cell SVCE',
            keywords: ['services', 'mentorship', 'networking', 'workshops']
          }
        }
      ];

      this.isInitialized = true;
    } catch (error) {
      console.error('Error initializing page contents:', error);
    }
  }

  public analyzeQuery(query: string): AIResponse {
    if (!this.isInitialized) {
      return {
        answer: "I'm still learning about the website. Please try again in a moment.",
        confidence: 0,
        sources: []
      };
    }

    const normalizedQuery = query.toLowerCase().trim();
    const relevantPages = this.findRelevantPages(normalizedQuery);
    
    if (relevantPages.length === 0) {
      return {
        answer: "I couldn't find specific information about that topic on our website. Could you try rephrasing your question or ask about our events, team, services, or general information about E-cell SVCE?",
        confidence: 0.3,
        sources: [],
        suggestions: [
          "What events does E-cell organize?",
          "Tell me about the team",
          "What services does E-cell provide?",
          "How can I join E-cell?"
        ]
      };
    }

    const bestMatch = relevantPages[0];
    const answer = this.generateAnswer(normalizedQuery, bestMatch, relevantPages);
    
    return {
      answer,
      confidence: bestMatch.score,
      sources: relevantPages.slice(0, 3).map(page => page.page.path),
      suggestions: this.generateSuggestions(normalizedQuery)
    };
  }

  private findRelevantPages(query: string): Array<{ page: PageContent; score: number }> {
    const results: Array<{ page: PageContent; score: number }> = [];

    for (const page of this.pageContents) {
      const score = this.calculateRelevanceScore(query, page);
      if (score > 0.1) { // Only include pages with some relevance
        results.push({ page, score });
      }
    }

    return results.sort((a, b) => b.score - a.score);
  }

  private calculateRelevanceScore(query: string, page: PageContent): number {
    const content = (page.title + ' ' + page.content + ' ' + (page.metadata?.keywords?.join(' ') || '')).toLowerCase();
    
    // Simple keyword matching with weights
    const queryWords = query.split(/\s+/).filter(word => word.length > 2);
    let score = 0;
    
    for (const word of queryWords) {
      // Title matches get higher weight
      if (page.title.toLowerCase().includes(word)) {
        score += 0.3;
      }
      
      // Content matches
      const wordCount = (content.match(new RegExp(word, 'g')) || []).length;
      score += wordCount * 0.1;
      
      // Metadata keyword matches
      if (page.metadata?.keywords?.some(keyword => keyword.toLowerCase().includes(word))) {
        score += 0.2;
      }
    }

    // Boost score for exact phrase matches
    if (content.includes(query)) {
      score += 0.5;
    }

    return Math.min(score, 1); // Cap at 1
  }

  private generateAnswer(query: string, bestMatch: { page: PageContent; score: number }, allMatches: Array<{ page: PageContent; score: number }>): string {
    const { page } = bestMatch;
    
    // Handle specific question types
    if (query.includes('what is') || query.includes('what are')) {
      return this.generateDefinitionAnswer(query, page);
    }
    
    if (query.includes('who is') || query.includes('who are')) {
      return this.generatePersonAnswer(query, page);
    }
    
    if (query.includes('when') || query.includes('date')) {
      return this.generateDateAnswer(query, page);
    }
    
    if (query.includes('where') || query.includes('location')) {
      return this.generateLocationAnswer(query, page);
    }
    
    if (query.includes('how') || query.includes('how to')) {
      return this.generateHowToAnswer(query, page);
    }
    
    if (query.includes('event') || query.includes('workshop') || query.includes('competition')) {
      return this.generateEventAnswer(query, page);
    }
    
    // Default answer based on page content
    return this.generateGeneralAnswer(query, page, allMatches);
  }

  private generateDefinitionAnswer(query: string, page: PageContent): string {
    if (page.path === '/about') {
      return "E-cell SVCE is the Entrepreneurship Cell of Sri Venkateswara College of Engineering, dedicated to empowering students to become future entrepreneurs and leaders. We foster innovation, creativity, and leadership through hands-on events, workshops, and mentorship since 2015.";
    }
    
    if (page.path === '/entrepreneurship') {
      return "Entrepreneurship is the process of starting and running a new business, typically with innovation and risk-taking. At E-cell SVCE, we help students start a roadmap for their entrepreneurial efforts.";
    }
    
    return page.content.substring(0, 200) + "...";
  }

  private generatePersonAnswer(query: string, page: PageContent): string {
    if (page.path === '/team') {
      return "Our E-cell team consists of passionate individuals dedicated to fostering entrepreneurship. The Core Team includes John Doe (President), Jane Smith (Vice President), Michael Johnson (Secretary), and Emily Brown (Treasurer). We also have specialized teams for Marketing and Events.";
    }
    
    return page.content.substring(0, 200) + "...";
  }

  private generateDateAnswer(query: string, page: PageContent): string {
    if (page.path === '/events') {
      return "E-cell organizes events throughout the year. Recent events include the IIT Madras E-Summit 2025 (March 1, 2025), MSME Idea Hackathon 4.0 (October 29, 2024), and various workshops and competitions. Check our events page for the complete schedule.";
    }
    
    return page.content.substring(0, 200) + "...";
  }

  private generateLocationAnswer(query: string, page: PageContent): string {
    if (page.path === '/contact') {
      return "E-cell SVCE is located at Sri Venkateswara College of Engineering in Sriperumbudur, Tamil Nadu, India. You can contact us through our website or social media platforms.";
    }
    
    return page.content.substring(0, 200) + "...";
  }

  private generateHowToAnswer(query: string, page: PageContent): string {
    if (query.includes('join')) {
      return "To join E-cell SVCE, watch our website and social media for recruitment announcements. No prior experience is required - just enthusiasm and willingness to learn. You can also participate in our events and workshops to get involved.";
    }
    
    if (query.includes('contact')) {
      return "You can contact E-cell SVCE through our contact form on the website, via email, or through our social media platforms (Instagram, LinkedIn, Facebook, Twitter).";
    }
    
    return page.content.substring(0, 200) + "...";
  }

  private generateEventAnswer(query: string, page: PageContent): string {
    if (page.path === '/events') {
      return "E-cell organizes various events including workshops, competitions, hackathons, and seminars. Recent highlights include the MSME Idea Hackathon 4.0 (18 proposals selected for incubation), Entrepreneurship Pitching League, and collaboration with IIT Madras. Check our events page for complete details.";
    }
    
    return page.content.substring(0, 200) + "...";
  }

  private generateGeneralAnswer(query: string, page: PageContent, allMatches: Array<{ page: PageContent; score: number }>): string {
    let answer = `Based on our website content, `;
    
    if (page.path === '/') {
      answer += "E-cell SVCE provides a platform for students to learn, innovate, and launch their entrepreneurial journey through events, mentorship, and resources. We offer services in entrepreneurship, incubation, and business development.";
    } else if (page.path === '/about') {
      answer += "E-cell SVCE is dedicated to empowering students to become future entrepreneurs and leaders. We foster innovation through hands-on events, workshops, and mentorship, with achievements including 20+ events organized and 1000+ students impacted.";
    } else if (page.path === '/events') {
      answer += "E-cell organizes various events throughout the year including workshops, competitions, hackathons, and seminars. Recent events include collaborations with IIT Madras and various student competitions.";
    } else if (page.path === '/team') {
      answer += "Our team consists of passionate individuals including the Core Team (President, Vice President, Secretary, Treasurer) and specialized teams for Marketing and Events.";
    } else {
      answer += page.content.substring(0, 300) + "...";
    }
    
    // Add additional context from other relevant pages
    if (allMatches.length > 1) {
      const additionalInfo = allMatches.slice(1, 3).map(match => {
        if (match.page.path === '/about' && page.path !== '/about') {
          return "We have achieved 20+ events organized and 1000+ students impacted.";
        }
        if (match.page.path === '/events' && page.path !== '/events') {
          return "We regularly organize workshops, competitions, and seminars.";
        }
        return null;
      }).filter(Boolean).join(' ');
      
      if (additionalInfo) {
        answer += ` ${additionalInfo}`;
      }
    }
    
    return answer;
  }

  private generateSuggestions(query: string): string[] {
    const suggestions = [
      "What events does E-cell organize?",
      "Tell me about the team members",
      "How can I join E-cell?",
      "What services does E-cell provide?",
      "Tell me about recent achievements",
      "How can I contact E-cell?",
      "What is the Builders Guild?",
      "Tell me about entrepreneurship opportunities"
    ];
    
    // Filter suggestions based on query context
    if (query.includes('event') || query.includes('workshop')) {
      return suggestions.filter(s => s.includes('event') || s.includes('achievement'));
    }
    
    if (query.includes('team') || query.includes('member')) {
      return suggestions.filter(s => s.includes('team'));
    }
    
    if (query.includes('join') || query.includes('participate')) {
      return suggestions.filter(s => s.includes('join') || s.includes('contact'));
    }
    
    return suggestions.slice(0, 4);
  }
}

// Export singleton instance
export const aiPageAnalyzer = new AIPageAnalyzer();
