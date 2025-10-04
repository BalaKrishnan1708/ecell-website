import { aiPageAnalyzer } from './aiPageAnalyzer';

const testQueries = [
  "What is E-cell SVCE?",
  "Tell me about the events",
  "Who are the team members?",
  "How can I join E-cell?",
  "What services does E-cell provide?",
  "Tell me about recent achievements",
  "What is the Builders Guild?",
  "How can I contact E-cell?",
  "What workshops are available?",
  "Tell me about entrepreneurship opportunities"
];

export function testAISystem() {
  console.log("🤖 Testing AI Page Analyzer...\n");
  
  testQueries.forEach((query, index) => {
    console.log(`Test ${index + 1}: "${query}"`);
    const response = aiPageAnalyzer.analyzeQuery(query);
    console.log(`Answer: ${response.answer}`);
    console.log(`Suggestions: ${response.suggestions?.join(", ") || "None"}`);
    console.log("---\n");
  });
  
  console.log("✅ AI System testing completed!");
}

if (typeof window === 'undefined') {
  testAISystem();
}
