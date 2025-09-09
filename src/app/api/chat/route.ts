import { NextRequest, NextResponse } from 'next/server';

// OpenAI API configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-3.5-turbo';
const OPENAI_MAX_TOKENS = parseInt(process.env.OPENAI_MAX_TOKENS || '500');
const OPENAI_TEMPERATURE = parseFloat(process.env.OPENAI_TEMPERATURE || '0.7');

// System prompt for EVnation AI Assistant
const SYSTEM_PROMPT = `You are EVnation AI Assistant, a helpful and professional AI assistant for EVnation company.

Company Information:
- EVnation specializes in EV charger installation services
- Technical Support: Jun Kim (949-577-7030, jkim@evnation.us)
- General Questions: Neil Okun (949-309-4255, neil@evnation.us)
- Business Hours: Monday-Friday 9:00 AM - 6:00 PM PST, Saturday 10:00 AM - 4:00 PM PST, Sunday Closed

Services:
- Site surveys and electrical infrastructure assessment
- Electrical setup and compliance
- Professional EV charging equipment installation
- Testing and certification
- Ongoing support and maintenance

Success Processes:
1. Client Onboarding: Initial consultation, site assessment, project planning
2. Installation Execution: Professional installation with safety protocols
3. Quality Assurance: Comprehensive testing and inspection
4. Client Success Management: Ongoing support and maintenance
5. Team Excellence Program: Continuous training and improvement

Guidelines:
- Be helpful, professional, and accurate
- Provide specific contact information when relevant
- Suggest appropriate team members for specific inquiries
- Keep responses concise but informative
- If unsure about something specific, suggest contacting the appropriate person
- Always maintain a positive and helpful tone

Current time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Debug logging
    console.log('API Key length:', OPENAI_API_KEY ? OPENAI_API_KEY.length : 'undefined');
    console.log('API Key starts with:', OPENAI_API_KEY ? OPENAI_API_KEY.substring(0, 10) + '...' : 'undefined');

    // Check if OpenAI API key is configured
    if (!OPENAI_API_KEY) {
      console.log('No OpenAI API key found, using fallback');
      // Fallback to intelligent response system
      return NextResponse.json({
        response: generateIntelligentResponse(message),
        aiEnabled: false,
        model: 'fallback'
      });
    }

    // Call OpenAI API
    const openAIResponse = await callOpenAI(message);
    
    return NextResponse.json({
      response: openAIResponse,
      aiEnabled: true,
      model: OPENAI_MODEL
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    
    // Fallback response on error
    return NextResponse.json({
      response: generateIntelligentResponse('I apologize, but I\'m experiencing technical difficulties. Please contact our team directly for immediate assistance.'),
      aiEnabled: false,
      model: 'fallback',
      error: 'Service temporarily unavailable'
    });
  }
}

async function callOpenAI(message: string): Promise<string> {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message }
        ],
        max_tokens: OPENAI_MAX_TOKENS,
        temperature: OPENAI_TEMPERATURE,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response. Please try again.';

  } catch (error) {
    console.error('OpenAI API call failed:', error);
    throw new Error('Failed to call OpenAI API');
  }
}

function generateIntelligentResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Enhanced intelligent responses
  if (lowerMessage.includes('technical') || lowerMessage.includes('support') || lowerMessage.includes('problem')) {
    return `For technical support, you can contact Jun Kim at 949-577-7030 or email jkim@evnation.us. He's our Technical Technician and handles all technical issues. 

What specific technical problem are you experiencing? I can help guide you to the right solution or connect you with the appropriate team member.`;
  }
  
  if (lowerMessage.includes('hour') || lowerMessage.includes('business') || lowerMessage.includes('time')) {
    return `Our business hours are:
• Monday-Friday: 9:00 AM - 6:00 PM PST
• Saturday: 10:00 AM - 4:00 PM PST  
• Sunday: Closed

For urgent matters outside business hours, please leave a message and we'll get back to you as soon as possible. You can also reach our team members directly for critical issues.`;
  }
  
  if (lowerMessage.includes('process') || lowerMessage.includes('workflow')) {
    return `We have 5 main success processes that drive our EV charger installation excellence:

1. **Client Onboarding**: Initial consultation, site assessment, and project planning
2. **Installation Execution**: Professional installation with safety protocols
3. **Quality Assurance**: Comprehensive testing and inspection
4. **Client Success Management**: Ongoing support and maintenance
5. **Team Excellence Program**: Continuous training and improvement

Each process is designed to ensure quality, safety, and customer satisfaction. Which process would you like to learn more about?`;
  }
  
  if (lowerMessage.includes('service') || lowerMessage.includes('evnation') || lowerMessage.includes('charger')) {
    return `EVnation specializes in comprehensive EV charger installation services:

• **Site Surveys**: Professional assessment of electrical infrastructure and site requirements
• **Electrical Setup**: Safe and compliant electrical work following all codes
• **Installation**: Expert installation of EV charging equipment with precision
• **Testing**: Thorough testing and certification for safety and performance
• **Ongoing Support**: Maintenance and technical assistance for continued reliability

We ensure quality, safety, and compliance in every project. Would you like to schedule a consultation or learn more about a specific service?`;
  }
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('start')) {
    return `Hello! I'm EVnation AI Assistant, here to help you with any questions about our EV charger installation services, processes, or support.

I can help you with:
• Technical support information and contact details
• Business hours and scheduling
• Our success processes and methodologies
• Service descriptions and capabilities
• General inquiries and guidance

How can I assist you today?`;
  }
  
  if (lowerMessage.includes('thank')) {
    return `You're welcome! I'm here to help make your EVnation experience as smooth as possible. 

Is there anything else you'd like to know about our services, processes, or how to get in touch with our team? I'm happy to help with any additional questions you might have.`;
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('call') || lowerMessage.includes('email')) {
    return `Here are the best ways to contact us:

**Technical Issues**: Jun Kim (949-577-7030, jkim@evnation.us)
**General Questions**: Neil Okun (949-309-4255, neil@evnation.us)
**Business Hours**: Mon-Fri 9AM-6PM PST, Sat 10AM-4PM PST

You can also reach out through our contact page for more detailed information. What would you like to discuss? I can help connect you with the right person.`;
  }
  
  // Default contextual response
  return `I understand you're asking about "${message}". Let me provide you with the most relevant information from EVnation's knowledge base.

For specific details, I recommend:
• Contacting Jun Kim for technical matters
• Reaching out to Neil Okun for general questions
• Checking our detailed process documentation

Could you provide more context about what you're looking for? I'm here to help guide you to the right information or team member.`;
}
