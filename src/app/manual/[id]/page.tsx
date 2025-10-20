'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Download, 
  ArrowLeft, 
  Star, 
  Clock, 
  Phone,
  FileText,
  Info,
  AlertTriangle,
  BookOpen,
  Users,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Copy,
  ExternalLink,
  HelpCircle,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react';
import Link from 'next/link';

interface ManualPage {
  pageNumber: number;
  title: string;
  content: string;
  tips?: string[];
  sections?: {
    title: string;
    content: string;
    subsections?: {
      title: string;
      content: string;
    }[];
  }[];
}

interface Manual {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  pages: number;
  lastUpdated: string;
  coverImage: string;
  pdfUrl: string;
  rating?: number;
  downloads?: number;
  icon?: React.ReactNode;
  keyFeatures?: string[];
  targetAudience?: string;
  content?: ManualPage[];
}

const manuals: Manual[] = [
  {
    id: '1',
    title: 'Company Overview & Organization Chart',
    description: 'Essential company information including EVnation introduction, organizational structure, key personnel, contact details, company policies, and operational guidelines. This manual provides comprehensive understanding of EVnation\'s business model, service areas, and internal communication protocols.',
    category: 'Company Info',
    tags: ['Employee', 'Electrician'],
    pages: 6,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/company-overview.pdf',
    rating: 4.9,
    downloads: 1250,
    icon: <Building2 className="w-6 h-6 text-white" />,
    keyFeatures: ['Company Introduction', 'Organization Chart', 'Contact Information', 'Company Policies', 'Operational Guidelines'],
    targetAudience: 'All EVnation employees and contractors',
    content: [
      {
        pageNumber: 1,
        title: 'Company Overview',
        content: 'EVnation is a California-based company that specializes in the installation of residential and commercial EV chargers. We work closely with car dealerships, electricians, and homeowners to streamline the process of EV charger installation – from load calculation to permitting and final setup.',
        sections: [
          {
            title: 'Our Mission',
            content: 'To deliver fast, safe, and budget-friendly EV charger installation service with transparency and integrity.'
          },
          {
            title: 'Service Areas',
            content: 'We provide comprehensive EV charging infrastructure services across California, focusing on residential and commercial installations.'
          },
          {
            title: 'Key Partnerships',
            content: 'We maintain strong relationships with car dealerships, certified electricians, and utility companies to ensure seamless installation processes.'
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Organizational Chart & Contact Directory',
        content: 'Our team structure and contact information for all key personnel. Use this directory for internal communication and customer referrals.',
        sections: [
          {
            title: 'Executive Team',
            content: 'Leadership team responsible for company strategy and operations.',
            subsections: [
              {
                title: 'Neil Okun - CEO',
                content: 'Phone: (949) 309-4255 - Overall company strategy and business development'
              },
              {
                title: 'Alex Livadas - CFO',
                content: 'Phone: (949) 309-2466 - Financial management and business operations'
              }
            ]
          },
          {
            title: 'Management Team',
            content: 'Department heads responsible for daily operations and team management.',
            subsections: [
              {
                title: 'Jun Kim - Tech Manager',
                content: 'Phone: (949) 577-7030 - Technical operations and system management'
              },
              {
                title: 'Timothy Vigil - Sales Manager',
                content: 'Phone: (949) 309-4188 - Sales operations and client management'
              },
              {
                title: 'Raleigh McCormick - Sales Manager',
                content: 'Phone: (949) 309-3733 - Sales operations and client management'
              }
            ]
          },
          {
            title: 'Specialized Roles',
            content: 'Key personnel for specific operational functions.',
            subsections: [
              {
                title: 'Patrick Park - Permit Specialist',
                content: 'Phone: (949) 309-3744 - Permit processing and regulatory compliance'
              },
              {
                title: 'Cameron Rios - Dispatch & Electrical Job Coordinator',
                content: 'Phone: (949) 309-2443 - Job scheduling and electrician coordination'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'Case Studies & Best Practices',
        content: 'Real examples of successful installations and referral processes to guide team operations and customer service.',
        sections: [
          {
            title: 'Successful Referral Case Study',
            content: 'Example of proper advisor referral handling and reward process.',
            subsections: [
              {
                title: 'Case 1: Advisor Referral Success',
                content: 'Ethan Cox was referred by Alex Livadas (FJ Mercedes). The installation was completed successfully. A thank-you email and $50 Amazon gift card were sent to the advisor.'
              },
              {
                title: 'Case 2: Missing Contact Information',
                content: 'A referral was submitted without a phone number. The team called the dealership directly, confirmed the advisor\'s identity, and followed up with the gift once verified.'
              }
            ]
          },
          {
            title: 'Key Success Factors',
            content: 'Important elements that contribute to successful installations and customer satisfaction.',
            subsections: [
              {
                title: 'Proper Documentation',
                content: 'Always verify advisor contact information before processing referrals'
              },
              {
                title: 'Follow-up Process',
                content: 'Send thank-you emails and gift cards promptly after successful installations'
              },
              {
                title: 'Communication',
                content: 'Maintain clear communication with dealerships and advisors throughout the process'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 4,
        title: 'Incident Handling Protocol',
        content: 'Standard procedures for handling customer issues, complaints, and technical outages to ensure quick resolution and customer satisfaction.',
        sections: [
          {
            title: 'Customer Issue Resolution',
            content: 'Step-by-step process for handling customer complaints and technical issues.',
            subsections: [
              {
                title: 'Step 1: Issue Logging',
                content: 'Log the issue in the CRM and assign a ticket number for tracking'
              },
              {
                title: 'Step 2: Team Notification',
                content: 'Notify the Tech Manager (Jun Kim) and appropriate Sales Manager immediately'
              },
              {
                title: 'Step 3: Customer Acknowledgment',
                content: 'Contact the customer within 24 hours with acknowledgment of their concern'
              },
              {
                title: 'Step 4: Resolution Timeline',
                content: 'Resolve or schedule resolution within 48–72 hours of initial contact'
              },
              {
                title: 'Step 5: Follow-up',
                content: 'Follow up after resolution to ensure customer satisfaction'
              }
            ]
          },
          {
            title: 'Technical Outage Procedures',
            content: 'Protocol for handling internal technical issues and system outages.',
            subsections: [
              {
                title: 'Immediate Response',
                content: 'Immediately notify Jun Kim (Tech Manager) of any technical outages'
              },
              {
                title: 'Team Communication',
                content: 'Use RingCentral group chat to update the team on outage status'
              },
              {
                title: 'Service Management',
                content: 'Pause affected dispatch or quoting services until the issue is resolved'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 5,
        title: 'Weekly Operations Checklist',
        content: 'Essential weekly tasks that must be completed every Friday by the EVnation Operations Team to ensure smooth operations and customer satisfaction.',
        sections: [
          {
            title: 'Referral Rewards Management',
            content: 'Weekly process for tracking and rewarding successful advisor referrals.',
            subsections: [
              {
                title: 'Check Pipedrive "Won" Deals',
                content: 'Review all completed deals from the past week'
              },
              {
                title: 'Verify Installation Completion',
                content: 'Confirm installation is complete via Notes in Pipedrive'
              },
              {
                title: 'Confirm Advisor Contact Info',
                content: 'Verify advisor contact information (phone/email) is accurate'
              },
              {
                title: 'Send Amazon/Zelle Gift',
                content: 'Send $50 gift card to verified advisors'
              },
              {
                title: 'Update Client Referral Tracker',
                content: 'Update Google Sheets with referral completion status'
              }
            ]
          },
          {
            title: 'Installation Pipeline Review',
            content: 'Weekly review of current installation projects and status updates.',
            subsections: [
              {
                title: 'Review Active Installs',
                content: 'Check all scheduled and in-progress installations'
              },
              {
                title: 'Follow Up on Delayed Jobs',
                content: 'Contact clients about any stalled or delayed installations'
              },
              {
                title: 'Confirm Permit Status',
                content: 'Check with Patrick Park if permit status updates are needed'
              },
              {
                title: 'Notify Clients of Next Steps',
                content: 'Update clients on upcoming installation schedules'
              }
            ]
          },
          {
            title: 'Quoting & Lead Management',
            content: 'Weekly review of new leads and quote generation process.',
            subsections: [
              {
                title: 'Check New Leads in Pipedrive',
                content: 'Review all new leads and assign follow-up tasks'
              },
              {
                title: 'Verify Lead Information',
                content: 'Ensure each lead has: location, panel info, estimated distance'
              },
              {
                title: 'Use Load Calculator',
                content: 'Generate accurate quotes using the Load Calculator for all estimates'
              },
              {
                title: 'Upload to Project Pricing Sheet',
                content: 'Save all estimates to the Project Pricing Summary sheet'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 6,
        title: 'Essential Tools & Platforms Guide',
        content: 'Comprehensive guide to all essential EVnation tools and platforms used for daily operations, customer management, and project coordination.',
        sections: [
          {
            title: 'Pipedrive CRM',
            content: 'Primary customer relationship management system for tracking leads and installations.',
            subsections: [
              {
                title: 'Purpose',
                content: 'Track all leads, advisors, and installations from initial contact to completion'
              },
              {
                title: 'Login',
                content: 'https://app.pipedrive.com'
              },
              {
                title: 'Key Functions',
                content: 'Add new clients under "Leads" tab, update status as job progresses (Lead → Deal → Won), use "Notes" section to record install date & comments, use filters to search by Advisor, Dealership, or Date'
              }
            ]
          },
          {
            title: 'RingCentral Communication',
            content: 'Primary communication platform for team calling, texting, and internal meetings.',
            subsections: [
              {
                title: 'Purpose',
                content: 'Team calling, texting, and internal communication'
              },
              {
                title: 'Login',
                content: 'https://service.ringcentral.com'
              },
              {
                title: 'Key Functions',
                content: 'Call or text advisors using assigned extension, check voicemail under "Messages", use "Video Pro" tab for internal team meetings, update call disposition after each conversation'
              }
            ]
          },
          {
            title: 'Google Sheets Management',
            content: 'Centralized tracking system for referrals, quotes, pricing, and electrician information.',
            subsections: [
              {
                title: 'Purpose',
                content: 'Track referrals, quotes, pricing, electrician info'
              },
              {
                title: 'Key Sheets',
                content: 'Client Referral Tracker (referral rewards), EVnation Load Calculator (for quoting), Installer Reference List (for dispatch), Pricing Summary (estimating & proposals)'
              }
            ]
          },
          {
            title: 'Amazon Business Account',
            content: 'Platform for sending gift cards to Client Advisors as referral rewards.',
            subsections: [
              {
                title: 'Purpose',
                content: 'Send gift cards to Client Advisors for successful referrals'
              },
              {
                title: 'Link',
                content: 'https://www.amazon.com/gc'
              },
              {
                title: 'Process',
                content: 'Choose $50 value, select "Send by text", enter advisor phone number, use custom message: "Dear [Name], thank you for referring [Client]. – Patrick @ evNation"'
              }
            ]
          },
          {
            title: 'Vercel MasterPage Tool',
            content: 'Internal installation summary tool for comprehensive project management.',
            subsections: [
              {
                title: 'Purpose',
                content: 'Internal installation summary and project management tool'
              },
              {
                title: 'URL',
                content: 'https://evnation-master.vercel.app'
              },
              {
                title: 'Used By',
                content: 'Sales, Tech, Dispatch teams'
              },
              {
                title: 'Features',
                content: 'Client intake form, Load calculator section, Printable quote summary, Installation detail notes'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'RingCentral Communication System Manual',
    description: 'Complete user guide for RingCentral phone system including setup, team calling features, text messaging, voicemail management, call forwarding, conference calls, and automatic activity logging. Essential for internal team communication and client interaction tracking.',
    category: 'Integration',
    tags: ['Employee'],
    pages: 4,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/RCmanual.pdf',
    rating: 4.9,
    downloads: 320,
    icon: <Phone className="w-6 h-6 text-white" />,
    keyFeatures: ['Phone System Setup', 'Team Calling', 'Text Messaging', 'Voicemail Management', 'Call Forwarding', 'Conference Calls', 'Activity Logging'],
    targetAudience: 'Internal EVnation employees',
    content: [
      {
        pageNumber: 1,
        title: 'RingCentral Setup & Initial Configuration',
        content: 'RingCentral is our primary communication platform for all internal and external calls. This section covers the initial setup process and basic configuration for new team members.',
        sections: [
          {
            title: 'Account Setup',
            content: 'New team members will receive login credentials and setup instructions from the IT administrator.',
            subsections: [
              {
                title: 'Login Process',
                content: 'Access RingCentral through the web portal or mobile app using your company email and temporary password.'
              },
              {
                title: 'Profile Configuration',
                content: 'Complete your profile with your name, title, and professional photo for better team recognition.'
              },
              {
                title: 'Extension Assignment',
                content: 'Each team member receives a unique extension number for direct calls and voicemail access.'
              }
            ]
          },
          {
            title: 'Mobile App Installation',
            content: 'Download and configure the RingCentral mobile app for on-the-go communication.',
            subsections: [
              {
                title: 'App Download',
                content: 'Download RingCentral from App Store (iOS) or Google Play Store (Android).'
              },
              {
                title: 'Device Registration',
                content: 'Register your mobile device to receive calls and messages on your personal phone.'
              },
              {
                title: 'Notification Settings',
                content: 'Configure push notifications for calls, messages, and voicemails based on your work schedule.'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Making & Receiving Calls',
        content: 'Learn how to effectively use RingCentral for making and receiving calls, including team calling features and call management.',
        sections: [
          {
            title: 'Basic Call Functions',
            content: 'Essential calling features that every team member should know for daily communication.',
            subsections: [
              {
                title: 'Making Outbound Calls',
                content: 'Use the dial pad or contact list to make calls. All outbound calls will display the company main number.'
              },
              {
                title: 'Receiving Inbound Calls',
                content: 'Answer calls directly or let them go to voicemail. Use call screening to see caller information before answering.'
              },
              {
                title: 'Call Transfer',
                content: 'Transfer calls to other team members or departments using the transfer button during active calls.'
              }
            ]
          },
          {
            title: 'Team Calling Features',
            content: 'Advanced features for team collaboration and group communication.',
            subsections: [
              {
                title: 'Call Forwarding',
                content: 'Set up call forwarding to your mobile device or another team member when you\'re unavailable.'
              },
              {
                title: 'Call Queuing',
                content: 'Calls are automatically queued and distributed among available team members during peak hours.'
              },
              {
                title: 'Call Recording',
                content: 'Important client calls can be recorded for training and quality assurance purposes (with proper consent).'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'Messaging & Voicemail Management',
        content: 'Comprehensive guide to using RingCentral\'s messaging features and voicemail system for effective communication.',
        sections: [
          {
            title: 'Text Messaging',
            content: 'Use RingCentral for professional text messaging with clients and team members.',
            subsections: [
              {
                title: 'Sending Messages',
                content: 'Send text messages to clients and team members using the company phone number for professional communication.'
              },
              {
                title: 'Group Messaging',
                content: 'Create group conversations for project teams or department communication.'
              },
              {
                title: 'Message History',
                content: 'All messages are logged and can be accessed for reference and compliance purposes.'
              }
            ]
          },
          {
            title: 'Voicemail System',
            content: 'Professional voicemail management for missed calls and client communication.',
            subsections: [
              {
                title: 'Voicemail Setup',
                content: 'Record a professional greeting that includes your name, title, and expected response time.'
              },
              {
                title: 'Voicemail Access',
                content: 'Access voicemails through the app, web portal, or by calling your extension.'
              },
              {
                title: 'Voicemail Transcription',
                content: 'Voicemails are automatically transcribed to text for quick review and response.'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 4,
        title: 'PipeDrive & RingCentral Integration',
        content: 'This guide explains how to integrate PipeDrive with RingCentral to enable in-app calling and texting, with all activity automatically logged. It covers installation, setup, and usage to help sales teams communicate efficiently and track interactions in one place.',
        sections: [
          {
            title: 'Requirements',
            content: 'Essential prerequisites before starting the integration process.',
            subsections: [
              {
                title: 'Account Requirements',
                content: 'A valid PipeDrive account and a RingCentral account with SMS and calling permissions'
              },
              {
                title: 'Browser Requirements',
                content: 'Use Google Chrome to access PipeDrive (Important for proper functionality)'
              }
            ]
          },
          {
            title: 'Installation Steps',
            content: 'Complete step-by-step installation process for PipeDrive and RingCentral integration.',
            subsections: [
              {
                title: 'Step 1: Install from PipeDrive Marketplace',
                content: 'Go to the PipeDrive Marketplace, search and install "RingCentral App Connect", authorize the app and follow the instructions. You\'ll be redirected to the Chrome Extension page.'
              },
              {
                title: 'Step 2: Add Chrome Extension',
                content: 'On the Chrome Extension page, add RingCentral App Connect to your browser. Return to the previous PipeDrive page and refresh. A popup will appear on the right → RingCentral App Connect is now active.'
              },
              {
                title: 'Step 3: Log in to RingCentral',
                content: 'Open the RingCentral App Connect popup and sign in with your RingCentral account.'
              },
              {
                title: 'Step 4: Configure Logging Settings',
                content: 'Go to Settings in the app popup, select Call and SMS Logging, enable: Automatically log phone calls and Automatically log SMS conversations.'
              }
            ]
          },
          {
            title: 'How to Use',
            content: 'Practical usage instructions for making calls and sending texts through the integrated system.',
            subsections: [
              {
                title: 'Making Calls',
                content: 'In any Person, Lead, or Deal view, hover over the phone number. Buttons for Call or Text will appear. For calls, press the "Record" button during the call. Once the call ends, it will be automatically logged in PipeDrive history.'
              },
              {
                title: 'Sending Texts',
                content: 'For texting, the message will be automatically logged in PipeDrive after sending. All SMS conversations are tracked and stored in the contact\'s activity history.'
              },
              {
                title: 'Activity Logging',
                content: 'All phone calls and SMS conversations are automatically logged in PipeDrive, providing complete interaction history for each contact and lead.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Project Pricing Summary & Master Page Tool',
    description: 'Comprehensive guide for the EVNation Master Page tool covering client information management, electrical load calculations, project cost estimation, PDF report generation, and project tracking. This tool is crucial for creating professional proposals and managing installation projects from start to finish.',
    category: 'Integration',
    tags: ['Employee'],
    pages: 5,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/projectpricingsum.pdf',
    rating: 4.8,
    downloads: 280,
    icon: <FileText className="w-6 h-6 text-white" />,
    keyFeatures: ['Client Information Management', 'Load Calculations', 'Cost Estimation', 'PDF Report Generation', 'Project Tracking', 'Professional Proposals'],
    targetAudience: 'EVnation project managers and sales team',
    content: [
      {
        pageNumber: 1,
        title: 'EVNation Master Page Overview',
        content: 'The EVNation Master Page is a web-based tool designed to assist EV installation teams in managing client information, calculating electrical load, estimating pricing, and exporting printable reports.',
        sections: [
          {
            title: 'Tool Access',
            content: 'Access the EVNation Master Page at: https://evnation-master.vercel.app',
            subsections: [
              {
                title: 'Website URL',
                content: 'https://evnation-master.vercel.app'
              },
              {
                title: 'Browser Compatibility',
                content: 'Works best with modern browsers (Chrome, Firefox, Safari, Edge)'
              },
              {
                title: 'Login Requirements',
                content: 'No login required - direct access to the tool'
              }
            ]
          },
          {
            title: 'Tool Purpose',
            content: 'Streamline the project management process from initial client contact to final installation completion.',
            subsections: [
              {
                title: 'Client Information Management',
                content: 'Centralized storage and organization of client details and project information'
              },
              {
                title: 'Load Calculations',
                content: 'Integration with load calculator for accurate electrical load assessments'
              },
              {
                title: 'Cost Estimation',
                content: 'Zone-based pricing calculations with detailed cost breakdowns'
              },
              {
                title: 'Report Generation',
                content: 'Professional PDF reports for customers, electricians, and internal use'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Client Information Management',
        content: 'Step-by-step process for transferring client information from Electrum to the EVNation Master Page system.',
        sections: [
          {
            title: 'Data Transfer Process',
            content: 'Complete workflow for transferring client data from Electrum dashboard to Master Page.',
            subsections: [
              {
                title: 'Step 1: Navigate to Electrum',
                content: 'Go to the Electrum dashboard and locate the project you want to transfer.'
              },
              {
                title: 'Step 2: Select and Copy Customer Info',
                content: 'Use your mouse to highlight the left section of the customer information box. Include: Partner, Project Type, Branded & Equivalent Model, Charger Supply, Project ID, Customer Name, Email, Phone Number, Address.'
              },
              {
                title: 'Step 3: Go to EVNation Master Page',
                content: 'Open https://evnation-master.vercel.app and scroll to the Client Information section.'
              },
              {
                title: 'Step 4: Paste the Text',
                content: 'Click inside the large input box labeled "Client Info", then paste the copied text using Cmd+V (Mac) or Ctrl+V (Windows).'
              },
              {
                title: 'Step 5: Click the Parse Button',
                content: 'After pasting the text, click the "Parse" button next to the input box. The form will auto-fill each field (Name, Email, Address, etc.). Double-check the parsed data for formatting or missing values.'
              }
            ]
          },
          {
            title: 'Data Verification',
            content: 'Important steps to ensure data accuracy and completeness.',
            subsections: [
              {
                title: 'Required Information',
                content: 'Ensure all essential client details are captured: name, contact information, project type, and location'
              },
              {
                title: 'Data Validation',
                content: 'Review parsed data for accuracy and completeness before proceeding to next steps'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'Installation Details & Zone Pricing',
        content: 'Process for adding installation details and configuring zone-based pricing for accurate project estimates.',
        sections: [
          {
            title: 'Installation Detail Transfer',
            content: 'Transfer installation notes and specifications from Electrum to Master Page.',
            subsections: [
              {
                title: 'Step 1: Locate Notes Section',
                content: 'Navigate to Electrum dashboard and open the project. Scroll down to the "Notes for Customer" section.'
              },
              {
                title: 'Step 2: Copy Installation Notes',
                content: 'Highlight all text in the Notes for Customer box and copy it (Cmd+C for Mac or Ctrl+C for Windows). Include permit status, instructions, and contact information.'
              },
              {
                title: 'Step 3: Paste into Master Page',
                content: 'Return to https://evnation-master.vercel.app, scroll to Installation Detail section, and paste the copied notes into the large text input box.'
              }
            ]
          },
          {
            title: 'Zone Price Configuration',
            content: 'Configure zone-based pricing for accurate cost estimation.',
            subsections: [
              {
                title: 'Step 1: Select Zone',
                content: 'Go to Zone Price Detail section and use the dropdown menu to choose the appropriate zone (e.g., Socal, Monterrey, etc.).'
              },
              {
                title: 'Step 2: Choose Categories',
                content: 'Select categories (e.g., Base Installation, Trenching, etc.) by checking the box on the left side of each item.'
              },
              {
                title: 'Step 3: Enter Footage (if required)',
                content: 'For items requiring length input (trenching or conduit), enter the footage (ft) value before clicking the checkbox to ensure correct calculation.'
              },
              {
                title: 'Step 4: Verify Summary',
                content: 'Scroll to the summary area to confirm selected items appear with correct quantity, pricing, and zone. Uncheck or edit values if needed.'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 4,
        title: 'Load Calculation Integration',
        content: 'Integration process for transferring load calculations from the EVNation Load Calculator to the Master Page system.',
        sections: [
          {
            title: 'Load Calculator Access',
            content: 'Access and use the dedicated load calculation tool for accurate electrical load assessments.',
            subsections: [
              {
                title: 'Load Calculator URL',
                content: 'Navigate to: https://evnation-load-calculator.vercel.app'
              },
              {
                title: 'Tool Purpose',
                content: 'Calculate electrical load requirements for EV charger installations based on existing electrical systems.'
              }
            ]
          },
          {
            title: 'Load Data Transfer Process',
            content: 'Step-by-step process for transferring load calculation results to Master Page.',
            subsections: [
              {
                title: 'Step 1: Generate Load Summary',
                content: 'Press the "Go To Summary" button in the load calculator to generate the complete load breakdown.'
              },
              {
                title: 'Step 2: Copy Load Data',
                content: 'Use your mouse to highlight the entire content inside the main container showing HVAC, Other Loads, General Load, etc. This is the complete load breakdown summary.'
              },
              {
                title: 'Step 3: Transfer to Master Page',
                content: 'Return to https://evnation-master.vercel.app, scroll to Load Calculation section, and paste the copied load summary directly into the large input box.'
              }
            ]
          },
          {
            title: 'Load Calculation Components',
            content: 'Key elements included in the load calculation summary.',
            subsections: [
              {
                title: 'HVAC Loads',
                content: 'Heating, ventilation, and air conditioning electrical loads'
              },
              {
                title: 'General Loads',
                content: 'Standard household electrical loads and appliances'
              },
              {
                title: 'Other Loads',
                content: 'Additional electrical loads specific to the installation location'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 5,
        title: 'PDF Export & Report Generation',
        content: 'Complete guide for generating professional PDF reports for different stakeholders using the Master Page export functionality.',
        sections: [
          {
            title: 'Export Process Overview',
            content: 'Step-by-step process for generating PDF reports with different content based on target audience.',
            subsections: [
              {
                title: 'Step 1: Navigate to Export Section',
                content: 'Scroll to the bottom of the EVNation Master Page and locate the "Export to PDF" section.'
              },
              {
                title: 'Step 2: Select Export Target',
                content: 'Click the dropdown menu to select who the PDF is intended for: Customer, Electrician, or EVNation.'
              },
              {
                title: 'Step 3: Generate PDF',
                content: 'Click "Export to PDF" button to generate a formatted printable version based on your selection.'
              }
            ]
          },
          {
            title: 'Export Target Options',
            content: 'Different PDF configurations for various stakeholders.',
            subsections: [
              {
                title: 'Customer Export',
                content: 'Includes: Client Info, Zone Price Detail (with client retail pricing only). Designed for customer presentation and approval.'
              },
              {
                title: 'Electrician Export',
                content: 'Includes: Client Info, Installation Detail, Zone Price Detail (with internal cost only), Load Calculation. Technical information for installation teams.'
              },
              {
                title: 'EVNation Export',
                content: 'Includes: All information - Client Info, Installation Detail, Zone Price Detail (with full breakdown), Load Calculation, Uploaded Images (if any). Complete internal documentation.'
              }
            ]
          },
          {
            title: 'Report Quality Assurance',
            content: 'Best practices for ensuring professional and accurate reports.',
            subsections: [
              {
                title: 'Data Verification',
                content: 'Review all sections before export to ensure accuracy and completeness'
              },
              {
                title: 'Professional Presentation',
                content: 'Generated PDFs are formatted for professional presentation to clients and stakeholders'
              },
              {
                title: 'Documentation Standards',
                content: 'All exports maintain consistent formatting and include necessary project details'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Client Advisor $50 Gift Card Process',
    description: 'Complete process guide for rewarding dealership Client Advisors with $50 Amazon Gift Cards or Zelle payments for successful EV charger installation referrals. Includes verification steps, communication templates, tracking procedures, and payout schedules to maintain strong dealer relationships.',
    category: 'Process',
    tags: ['Employee', 'Sales'],
    pages: 4,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/evref.pdf',
    rating: 4.9,
    downloads: 150,
    icon: <Users className="w-6 h-6 text-white" />,
    keyFeatures: ['Advisor Verification', 'Communication Templates', 'Gift Card Distribution', 'Tracking & Payout', 'Dealer Relationship Management'],
    targetAudience: 'EVnation sales team and project coordinators',
    content: [
      {
        pageNumber: 1,
        title: 'Gift Card Program Overview',
        content: 'EVnation appreciates the support of dealership personnel (Client Advisors) who refer clients for EV charger installations. As a token of appreciation, we reward each successful referral with a $50 Amazon Gift Card or Zelle payment upon the completion of the installation.',
        sections: [
          {
            title: 'Program Purpose',
            content: 'Maintain strong relationships with dealership partners and incentivize quality referrals for EV charger installations.',
            subsections: [
              {
                title: 'Reward Amount',
                content: '$50 Amazon Gift Card or Zelle payment per successful referral'
              },
              {
                title: 'Timing',
                content: 'Payment sent upon completion of the installation'
              },
              {
                title: 'Target Recipients',
                content: 'Dealership Client Advisors who refer customers for EV charger installations'
              }
            ]
          },
          {
            title: 'Program Benefits',
            content: 'Key advantages of maintaining this referral reward program.',
            subsections: [
              {
                title: 'Dealer Relationship Building',
                content: 'Strengthen partnerships with dealership personnel'
              },
              {
                title: 'Quality Referral Incentive',
                content: 'Encourage advisors to refer qualified customers'
              },
              {
                title: 'Brand Recognition',
                content: 'Increase EVnation visibility and reputation in the automotive industry'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Advisor Verification & Initial Contact',
        content: 'Step-by-step process for verifying advisor information and establishing initial contact before installation completion.',
        sections: [
          {
            title: 'Advisor Contact Verification',
            content: 'Essential verification steps to ensure accurate advisor information.',
            subsections: [
              {
                title: 'Step 1: Confirm Advisor Details',
                content: 'Confirm the Advisor\'s name, email, and cell phone in Pipedrive CRM system.'
              },
              {
                title: 'Step 2: New Advisor Verification',
                content: 'If it\'s a new Advisor, call first to verify the phone number. Then send a text from the house phone to introduce the referral program.'
              },
              {
                title: 'Step 3: Contact Information Validation',
                content: 'Ensure all contact details are current and accurate before proceeding with communication.'
              }
            ]
          },
          {
            title: 'Pre-Installation Communication',
            content: 'Initial contact template to inform advisors about the referral reward program.',
            subsections: [
              {
                title: 'Communication Method',
                content: 'Send text or email before installation to set expectations and confirm contact information.'
              },
              {
                title: 'Message Template',
                content: 'Hello [Advisor Name], this is [Your Name] with evNation. We wanted to send you a gift once your client\'s installation is completed. Thank you again for referring [Client Name] to us for their EV charger! Is this the best number to send an Amazon Gift Card or Zelle payment?'
              },
              {
                title: 'Response Handling',
                content: 'Document advisor preferences for gift card delivery method (Amazon Gift Card vs. Zelle payment).'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'Post-Installation Communication & Gift Distribution',
        content: 'Complete process for sending thank you communications and distributing gift cards after successful installation completion.',
        sections: [
          {
            title: 'Post-Installation Email Template',
            content: 'Professional thank you email to be sent after installation completion.',
            subsections: [
              {
                title: 'Email Subject',
                content: 'A Gift for Your Referral'
              },
              {
                title: 'Email Template',
                content: 'Dear [Advisor Name], A BIG thank you for referring [Client Name] to our Team. We\'ve successfully completed their Level 2 EV charger home installation. Please look out for a text from Amazon with a small gift, as a token of our appreciation. evNation is always ready to help your customers quickly, safely, and on budget (and with a smile). — Neil Okun & Alex Livadas, Co-Founders, 📞 866-913-6199, 🌐 evNation.us'
              },
              {
                title: 'Personalization',
                content: 'Customize with specific advisor name, client name, and installation details.'
              }
            ]
          },
          {
            title: 'Gift Card Distribution Process',
            content: 'Step-by-step process for sending gift cards through Amazon or Zelle.',
            subsections: [
              {
                title: 'Step 1: Review Installation Completion',
                content: 'In Pipedrive, access the Summary of the Day to review new and won leads. Check installation notes in each "Won" deal to confirm completion.'
              },
              {
                title: 'Step 2: Update Tracking Sheet',
                content: 'Open the Client Referral Google Sheet and record: Client Name, Date of Installation, Advisor Name, Dealership Name, Amount & Date Paid.'
              },
              {
                title: 'Step 3: Retrieve Advisor Contact',
                content: 'Search for the Advisor by dealership in Pipedrive to retrieve their contact details.'
              },
              {
                title: 'Step 4: Verify Contact Information',
                content: 'Verify with a text or call that this number is good for sending the gift card.'
              },
              {
                title: 'Step 5: Send Gift Card',
                content: 'Use Amazon Gift Card text format: "Dear [Advisor Name], Thank you for referring [Client Name] to us. — [Your Name] @ evNation"'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 4,
        title: 'Tracking, Payout Schedule & Best Practices',
        content: 'Comprehensive tracking system and weekly payout schedule to ensure consistent and transparent reward distribution.',
        sections: [
          {
            title: 'Tracking & Documentation',
            content: 'Essential tracking procedures to maintain accurate records of all referral rewards.',
            subsections: [
              {
                title: 'Google Sheets Documentation',
                content: 'Update the Google Sheet with date and payment status for each Advisor. Include all relevant details: client name, installation date, advisor information, and payment status.'
              },
              {
                title: 'Pipedrive Integration',
                content: 'Ensure all referral activities are properly documented in Pipedrive CRM for complete audit trail.'
              },
              {
                title: 'Payment Verification',
                content: 'Confirm successful delivery of gift cards and document any delivery issues or advisor feedback.'
              }
            ]
          },
          {
            title: 'Weekly Payout Schedule',
            content: 'Consistent weekly schedule for processing and distributing referral rewards.',
            subsections: [
              {
                title: 'Processing Schedule',
                content: 'Process and send all gift cards/spiffs every Friday for that week\'s installs.'
              },
              {
                title: 'Batch Processing',
                content: 'Group all completed installations from the week for efficient batch processing.'
              },
              {
                title: 'Deadline Management',
                content: 'Ensure all installations completed by Thursday are included in Friday\'s payout batch.'
              }
            ]
          },
          {
            title: 'Best Practices & Important Notes',
            content: 'Key guidelines and considerations for successful referral reward program management.',
            subsections: [
              {
                title: 'Payment Method Options',
                content: 'You may use Zelle instead of Amazon Gift Card if the Advisor prefers. Always confirm advisor preference during initial contact.'
              },
              {
                title: 'Contact Verification',
                content: 'Always verify the correct phone number before sending a gift to prevent delivery issues.'
              },
              {
                title: 'Transparency Requirements',
                content: 'Ensure all interactions are tracked and transparent via Google Sheets for accountability and audit purposes.'
              },
              {
                title: 'Quality Control',
                content: 'Double-check all advisor information and installation completion status before processing payments.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Invoicing & Billing Manual',
    description: 'Comprehensive guide for EVnation\'s invoicing and billing processes including invoice generation, payment tracking, client billing procedures, financial reporting, and accounts receivable management. Essential for maintaining accurate financial records and ensuring timely payments.',
    category: 'Finance',
    tags: ['Employee', 'Admin'],
    pages: 28,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/EVnation invoice and billing.pdf',
    rating: 4.8,
    downloads: 95,
    icon: <FileText className="w-6 h-6 text-white" />,
    keyFeatures: ['Invoice Generation', 'Payment Tracking', 'Client Billing', 'Financial Reporting', 'Accounts Receivable', 'Payment Processing'],
    targetAudience: 'EVnation administrative staff and project managers',
    content: [
      {
        pageNumber: 1,
        title: 'EVnation Billing & Invoicing Process',
        content: 'Complete guide for EVnation\'s billing and invoicing processes including invoice creation in Pipedrive, QuickBooks integration, and electrician payment procedures.',
        sections: [
          {
            title: 'Invoice Creation in Pipedrive → QuickBooks',
            content: 'Step-by-step process for creating invoices in Pipedrive that automatically sync to QuickBooks.',
            subsections: [
              {
                title: 'Step 1: Access the Deal',
                content: 'Go to the Deal in Pipedrive.'
              },
              {
                title: 'Step 2: Create Invoice',
                content: 'Select Invoice → Invoice again from the drop-down menu.'
              },
              {
                title: 'Step 3: Fill Invoice Details',
                content: 'A pop-up screen will appear. Fill it in as follows:',
                tips: [
                  'Other: Enter Electrum',
                  'Item Type: Enter Electrum again, and select from the drop-down',
                  'Invoice No.: Enter the Project Number',
                  'Unit Price: Enter the Total Job Price'
                ]
              },
              {
                title: 'Step 4: Complete Creation',
                content: 'Click Create Invoice. Once created, the invoice is automatically synced and created in QuickBooks.'
              }
            ]
          },
          {
            title: 'Billing Process (Paying Electricians)',
            content: 'Process for authorizing and processing electrician payments through QuickBooks.',
            subsections: [
              {
                title: 'Authorization Requirements',
                content: 'Bill authorization will come from Neil or Cameron, with a note "OK to pay" and the Profit Amount.'
              },
              {
                title: 'Step 1: Receive Authorization',
                content: 'When you receive the email with "OK to pay" authorization.'
              },
              {
                title: 'Step 2: Access QuickBooks',
                content: 'Go to QuickBooks and search using either the Customer ID or Project ID.'
              },
              {
                title: 'Step 3: Verify Invoice',
                content: 'Confirm if the invoice exists in QuickBooks.'
              },
              {
                title: 'Step 4A: Invoice Exists',
                content: 'If invoice already exists in QuickBooks: Create the Bill for the electrician against that invoice.'
              },
              {
                title: 'Step 4B: Invoice Does Not Exist',
                content: 'If invoice does not exist in QuickBooks: Request that it be created in Pipedrive (which will sync to QuickBooks), or create the invoice yourself in Pipedrive following the Invoice Creation process.'
              }
            ]
          },
          {
            title: 'Key Notes & Best Practices',
            content: 'Important guidelines for successful billing and invoicing processes.',
            subsections: [
              {
                title: 'Invoice Tracking',
                content: 'Always use Project Number as Invoice No. for tracking purposes.'
              },
              {
                title: 'Sync Verification',
                content: 'Double-check invoice sync in QuickBooks before creating bills.'
              },
              {
                title: 'Payment Authorization',
                content: 'Only pay bills once an "OK to Pay" note is received from Neil or Cameron.'
              },
              {
                title: 'Documentation',
                content: 'Maintain proper documentation of all billing transactions for audit purposes.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'EVnation Troubleshooting Guide for Home Chargers',
    description: 'Comprehensive troubleshooting guide for EVnation\'s supported home charger models: Emporia, ChargePoint, and Mercedes-Benz. Includes step-by-step solutions for connection issues, charging problems, app connectivity, Wi-Fi setup, and error message resolution to ensure optimal charger performance.',
    category: 'Technical',
    tags: ['Employee', 'Electrician'],
    pages: 4,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/trouble.pdf',
    rating: 4.9,
    downloads: 420,
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    keyFeatures: ['Emporia Troubleshooting', 'ChargePoint Troubleshooting', 'Mercedes-Benz Troubleshooting', 'Connection Issues', 'App Connectivity', 'Error Resolution'],
    targetAudience: 'EVnation technicians and customer support team',
    content: [
      {
        pageNumber: 1,
        title: 'Troubleshooting Guide Overview',
        content: 'This guide provides step-by-step troubleshooting solutions for the three EV charger types supported by EVnation: Emporia, ChargePoint, and Mercedes-Benz. Please refer to the relevant section for your charger model.',
        sections: [
          {
            title: 'Supported Charger Models',
            content: 'EVnation provides comprehensive support for three major EV charger brands.',
            subsections: [
              {
                title: 'Emporia Charger',
                content: 'Smart home EV charger with app-based control and monitoring features'
              },
              {
                title: 'ChargePoint Charger',
                content: 'Wi-Fi enabled charger with advanced scheduling and energy management'
              },
              {
                title: 'Mercedes-Benz Charger',
                content: 'Premium charger designed specifically for Mercedes-Benz vehicles'
              }
            ]
          },
          {
            title: 'Common Issue Categories',
            content: 'Most troubleshooting scenarios fall into these main categories.',
            subsections: [
              {
                title: 'Connection Issues',
                content: 'Problems with charger detection, app connectivity, or vehicle recognition'
              },
              {
                title: 'Charging Problems',
                content: 'Issues with charging initiation, interruption, or completion'
              },
              {
                title: 'Network Connectivity',
                content: 'Wi-Fi setup, signal strength, and internet connectivity issues'
              },
              {
                title: 'Error Messages',
                content: 'Specific error codes and warning messages with resolution steps'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Emporia Charger Troubleshooting',
        content: 'Complete troubleshooting guide for Emporia EV chargers including app connectivity, power issues, and charging problems.',
        sections: [
          {
            title: 'App Not Detecting Charger / Vehicle Not Charging',
            content: 'Step-by-step solutions for the most common Emporia charger issues.',
            subsections: [
              {
                title: 'Check Power to the Charger',
                content: 'Look for a green power light on the charger. Ensure the charger is properly wired. Verify the breaker is switched on.'
              },
              {
                title: 'Check Phone Connectivity',
                content: 'Make sure your phone\'s Bluetooth is enabled. If using Android, turn on "Location Services" to allow proper Bluetooth scanning. Try restarting the Emporia app or rebooting your phone.'
              },
              {
                title: 'Cycle the Charger Power',
                content: 'Flip the breaker off and then back on to reset the charger.'
              },
              {
                title: 'Inspect the Charging Cable',
                content: 'Ensure the handle latch is locked securely into the car\'s charging port. If the latch is pressed during charging, the process will stop.'
              },
              {
                title: 'Check Vehicle Charging Settings',
                content: 'Ensure the vehicle is not set to charge at a delayed time or specific location. Confirm the Emporia app shows the charger icon as blue (ready). If it\'s green (paused), tap the icon to resume charging.'
              }
            ]
          },
          {
            title: 'Professional Support',
            content: 'When to contact Emporia support for advanced troubleshooting.',
            subsections: [
              {
                title: 'Emporia Support Contact',
                content: 'Call Emporia support at 1-844-367-6742 for issues that cannot be resolved through basic troubleshooting steps.'
              },
              {
                title: 'When to Call Support',
                content: 'Contact support if all troubleshooting steps have been completed and the charger is still not functioning properly.'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'ChargePoint Charger Troubleshooting',
        content: 'Comprehensive troubleshooting guide for ChargePoint chargers covering Wi-Fi connectivity, charging issues, and error message resolution.',
        sections: [
          {
            title: 'Connection & Activation Issues',
            content: 'Solutions for Wi-Fi connectivity and charger activation problems.',
            subsections: [
              {
                title: 'Wi-Fi Requirements',
                content: 'Ensure Wi-Fi coverage exists where the charger is installed. Consider using a recommended Wi-Fi extender if signal is weak.'
              },
              {
                title: 'Wi-Fi Troubleshooting Steps',
                content: 'Step 1: Confirm internet access from another device. Step 2: Restart your router (unplug > wait > replug). Step 3: Check all cables from modem to router. Step 4: If Wi-Fi credentials changed, reconfigure in the ChargePoint app. Step 5: Still issues? Call ChargePoint support at 1-888-758-4389.'
              }
            ]
          },
          {
            title: 'Charging Issues',
            content: 'Solutions for common charging problems and fault conditions.',
            subsections: [
              {
                title: 'Delayed Charging',
                content: 'Your car may show a warning if scheduling is active. Ignore the message—it will charge at the scheduled time.'
              },
              {
                title: 'Fault Detected (Red LED)',
                content: 'Unplug and replug the charging connector. Reboot the station via app settings. Flip the circuit breaker.'
              }
            ]
          },
          {
            title: 'Error Message Solutions',
            content: 'Specific solutions for common ChargePoint error messages.',
            subsections: [
              {
                title: 'Unable to connect to home charger',
                content: 'Ensure you\'re near the station with Bluetooth turned on.'
              },
              {
                title: 'Unable to find Wi-Fi network',
                content: 'Confirm signal near the station using your phone. Use a Wi-Fi extender if needed.'
              },
              {
                title: 'Unable to join Wi-Fi network',
                content: 'Double-check Wi-Fi password and router power. Restart modem, router, or station. Flip breaker if hardwired.'
              },
              {
                title: 'Unable to add home charger to ChargePoint account',
                content: 'Retry or call 1-888-758-4389.'
              },
              {
                title: 'Car is drawing more current than needed',
                content: 'Unplug > Wait 15 seconds > Replug. If recurring, consult your vehicle manufacturer.'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 4,
        title: 'Mercedes-Benz Charger Troubleshooting',
        content: 'Complete troubleshooting guide for Mercedes-Benz EV chargers including physical connections, power supply, and system resets.',
        sections: [
          {
            title: 'Step-by-Step Solutions',
            content: 'Comprehensive troubleshooting process for Mercedes-Benz charger issues.',
            subsections: [
              {
                title: 'Check Physical Connection',
                content: 'Ensure the charging cable is firmly plugged into both the car and the station. Remove debris or obstructions in the port and connectors. Unplug and reconnect to ensure a tight fit.'
              },
              {
                title: 'Verify Power Supply',
                content: 'Check for tripped breakers or blown fuses. Ensure the station is properly connected to a live power source.'
              },
              {
                title: 'Check Vehicle Charging Settings',
                content: 'View dashboard or infotainment for charging status or error messages. Disable any scheduled/delayed charging timers.'
              },
              {
                title: 'Reset the System',
                content: 'Turn the vehicle off and on to reset the electrical system. For home stations, reset the unit by turning the breaker off, waiting 1 minute, and switching it back on.'
              }
            ]
          },
          {
            title: 'Professional Support',
            content: 'When to seek professional assistance for Mercedes-Benz charger issues.',
            subsections: [
              {
                title: 'Mercedes-Benz Dealer Support',
                content: 'If problems persist, contact your local Mercedes-Benz dealer. They can inspect the battery system, run diagnostics, and apply software updates.'
              },
              {
                title: 'Mercedes Support Contact',
                content: 'Call Mercedes support at 1-855-502-3851 for advanced troubleshooting assistance.'
              },
              {
                title: 'When to Contact Support',
                content: 'Contact support if all basic troubleshooting steps have been completed and the charger is still not functioning properly.'
              }
            ]
          },
          {
            title: 'Prevention Tips',
            content: 'Best practices to prevent common Mercedes-Benz charger issues.',
            subsections: [
              {
                title: 'Regular Maintenance',
                content: 'Keep charging ports clean and free of debris. Regularly inspect charging cables for damage.'
              },
              {
                title: 'Proper Usage',
                content: 'Always ensure secure connections before charging. Avoid forcing connectors into ports.'
              },
              {
                title: 'Software Updates',
                content: 'Keep vehicle software updated to ensure compatibility with charging systems.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '7',
    title: 'EVnation Electrician Process Manual',
    description: 'Complete process manual for EVnation electricians covering EVITP certification requirements, insurance compliance, comprehensive photo documentation procedures, payment processes, permit handling, panel upgrade coordination, and manufacturer troubleshooting support. Essential guide for maintaining quality installations and ensuring proper documentation for job verification and payment processing.',
    category: 'Process',
    tags: ['Employee', 'Electrician'],
    pages: 22,
    lastUpdated: '2025-01-27',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/EVnation Electrician Process Manual.pdf',
    rating: 4.9,
    downloads: 245,
    icon: <Building2 className="w-6 h-6 text-white" />,
    keyFeatures: ['EVITP Certification Requirements', 'Insurance Compliance', 'Photo Documentation Standards', 'Payment Process', 'Permit & Inspection', 'Panel Upgrade Coordination', 'Manufacturer Support'],
    targetAudience: 'EVnation certified electricians and installation teams',
    content: [
      {
        pageNumber: 1,
        title: 'Electrician Requirements',
        content: 'To be eligible for performing installations under EVnation, the electrician must meet the following qualifications:',
        sections: [
          {
            title: 'Required Certifications',
            content: '• EVITP Certified (Electric Vehicle Infrastructure Training Program)\n• Certified Electrician (In-State)\n• Valid and Updated Insurance\n• Valid Electrical License'
          },
          {
            title: 'Insurance Requirements',
            content: 'Insurance must list EVnation LLC as:\n• Additional Insured\n• Loss Payee'
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Proper Photo Upload',
        content: 'Before and after photos are critical for documentation, job verification, and payment processing. Please ensure all required images are uploaded to the customer\'s designated Google Drive folder.',
        sections: [
          {
            title: 'General Required Photos (All Jobs)',
            content: '• Photo of the main breaker (e.g., 100A / 200A / 225A)\n• Photo of the new breaker size installed for charger (e.g., 30A / 40A / 50A / 60A)\n• Photo of charger location\n• Photo showing complete conduit and wiring run\n• Photo of grounding at the panel\n• Photo of grounding at the charger or receptacle (with the device/box open)\n• Photo of new breaker with wires landed\n• Photo of closed charger or receptacle\n• Photo of panel with dead front installed and new circuit clearly labeled\n• Photo showing clear full view of panel location\n• Confirm that proper wire size has been installed\n• Confirm that all breakers in the panel are operational\n• Screenshot of charger app showing serial number and successful activation\n• Photo of operational charger mounted on the wall\n• Close-up photo of charger serial number and/or QR code'
          },
          {
            title: 'Additional Required Photos (Panel or Service Upgrade Only)',
            content: 'If a panel upgrade or service upgrade was performed, please also provide:\n• SCE or utility company Meter Spot Order Number\n• Level of new service (e.g., 200A / 225A / 400A)\n• Photo showing location of the new panel (if relocated)\n• Photo of the old panel location and new panel location side-by-side if applicable'
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'General Job Instructions',
        content: 'All EVnation jobs must follow our standardized installation procedures.',
        sections: [
          {
            title: 'Instructions',
            content: '• Access the General Job Instruction Sheet in the customer\'s Google Drive folder\n• Follow the listed requirements exactly\n• Mounting locations\n• Breaker panel routing\n• Conduit placement\n• Safety clearances\n• Labeling standards'
          },
          {
            title: 'Important Note',
            content: 'Do not proceed without reviewing this file for each job.'
          }
        ]
      },
      {
        pageNumber: 4,
        title: 'Payment Process',
        content: 'Electricians will be paid within 3 business days after the following steps are fully completed and verified:',
        sections: [
          {
            title: 'Payment Requirements',
            content: '• All required photos uploaded\n• Job signed off by customer\n• EVnation Installation Sheet is fully completed\n• Permit application submitted (if applicable)\n• Internal review by the EVnation team is passed'
          }
        ]
      },
      {
        pageNumber: 5,
        title: 'Permit & Inspection Details',
        content: 'Determine if Permit is Required - This will be clearly indicated in the General Job Instruction document located in the customer folder.',
        sections: [
          {
            title: 'Permit Responsibilities by Region',
            content: 'Southern California: EVnation\nNorthern California & Other States: Electrician'
          },
          {
            title: 'Electrician Responsibilities',
            content: 'If permit is pulled by electrician, they are also responsible for:\n• Scheduling the inspection\n• Attending and passing final inspection'
          }
        ]
      },
      {
        pageNumber: 6,
        title: 'Panel Upgrade Information',
        content: 'When is a Panel Upgrade Required? A panel upgrade is required in the following cases: 1. Customer requests it 2. Load calculation fails to meet EV charger requirements',
        sections: [
          {
            title: 'How to Coordinate a Panel Upgrade',
            content: '1. Gather Information from Customer\n2. Submit the collected information to the EVnation coordinator\n3. Collect a safety deposit once information is confirmed\n4. Pull permit and schedule installation'
          },
          {
            title: 'Customer Intake Script',
            content: 'Subject: Charge Ready Home – Panel Upgrade Intake Instructions\n\nDear Customer,\n\nThank you for choosing EVnation for your Charge Ready Home project. Please follow the instructions below to help us gather the necessary information for your panel upgrade and charger installation.'
          }
        ]
      },
      {
        pageNumber: 7,
        title: 'Troubleshooting Support',
        content: 'If any issues arise during the EV charger installation, the electrician must contact the charger manufacturer directly using the numbers below before proceeding with on-site troubleshooting.',
        sections: [
          {
            title: 'Mandatory Step',
            content: 'For technical issues, electricians must call the manufacturer\'s support line specific to the charger being installed.'
          },
          {
            title: 'Support Numbers by Charger',
            content: 'ChargePoint: 408‑370‑3802\nEmporia: 844‑367‑6742\nMercedes-Benz: 855‑502‑3851'
          }
        ]
      }
    ]
  },
  {
    id: '8',
    title: 'Electrical Panel Upgrade Procedure Manual',
    description: 'Comprehensive procedure manual for electrical panel upgrades covering utility coordination, permit processes, installation procedures, grounding requirements, and inspection protocols. Applicable to SCE, SDG&E, LADWP, PG&E, RPU, and other AHJ jurisdictions.',
    category: 'Technical',
    tags: ['Employee', 'Electrician'],
    pages: 16,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '/manuals/Electrical Panel Upgrade Procedure Manual.pdf',
    rating: 4.9,
    downloads: 95,
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    keyFeatures: ['Utility Coordination', 'Permit Process', 'Panel Installation', 'Grounding Requirements', 'Inspection Protocols', 'Code Compliance'],
    targetAudience: 'EVnation certified electricians and project managers'
  },
  {
    id: '9',
    title: 'Electrum Warranty Replacement Process',
    description: 'Complete process guide for handling Electrum warranty replacement requests including dispatch coordination, customer communication, installation scheduling, and invoice processing. Essential for maintaining customer satisfaction and proper warranty claim handling.',
    category: 'Process',
    tags: ['Employee', 'Electrician', 'Admin'],
    pages: 4,
    lastUpdated: '2025-09-08',
    coverImage: '/api/placeholder/300/400',
    pdfUrl: '', // No download available
    rating: 4.8,
    downloads: 0,
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    keyFeatures: ['Warranty Processing', 'Dispatch Coordination', 'Customer Communication', 'Installation Scheduling', 'Invoice Management', 'Documentation Requirements'],
    targetAudience: 'EVnation dispatch team, electricians, and administrative staff',
    content: [
      {
        pageNumber: 1,
        title: 'Warranty Replacement Overview',
        content: 'The Electrum warranty replacement process ensures proper handling of warranty claims while maintaining customer satisfaction and following all required documentation procedures.',
        sections: [
          {
            title: 'Process Overview',
            content: 'Complete workflow for handling Electrum warranty replacement requests from initial dispatch coordination to final invoice submission.',
            subsections: [
              {
                title: 'Key Stakeholders',
                content: 'Dispatch (Cameron), Electricians, Electrum Support, Customer, and EVnation Management'
              },
              {
                title: 'Process Duration',
                content: 'From warranty claim to completed installation and invoice submission'
              },
              {
                title: 'Critical Requirements',
                content: 'All documentation and photos must be completed before electrician payment processing'
              }
            ]
          },
          {
            title: 'Initial Coordination',
            content: 'First steps in the warranty replacement process involving dispatch and customer confirmation.',
            subsections: [
              {
                title: 'Dispatch Confirmation',
                content: 'Confirm with dispatch (Cameron) and allow them to arrange, process, and invoice and distribute the client to the proper electrician for installation.'
              },
              {
                title: 'Customer Identification',
                content: 'Find the customer in Pipedrive CRM system to access their account and installation history.'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Pipedrive Setup & Customer Communication',
        content: 'Proper setup of warranty deals in Pipedrive and initial customer communication process.',
        sections: [
          {
            title: 'Pipedrive Deal Creation',
            content: 'Creating a new warranty deal in Pipedrive with proper naming convention and prior installation reference.',
            subsections: [
              {
                title: 'Deal Naming Convention',
                content: 'Make new deal called "warranty" and add prior install numbers with W prefix (e.g., W211478)'
              },
              {
                title: 'Customer Information',
                content: 'Ensure all customer contact information and previous installation details are properly documented'
              },
              {
                title: 'Warranty Reference',
                content: 'Link the warranty claim to the original installation for proper tracking and documentation'
              }
            ]
          },
          {
            title: 'Customer Communication Process',
            content: 'Essential communication steps to keep customers informed throughout the warranty replacement process.',
            subsections: [
              {
                title: 'Delivery Confirmation',
                content: 'Confirm delivery of new charger with Electrum and/or client to ensure charger is available for installation'
              },
              {
                title: 'Installation Scheduling',
                content: 'Schedule installation and communicate with customer about proposed installation timeline'
              },
              {
                title: 'Customer Notification',
                content: 'Inform the customer that the charger is at hand with a schedule for the proposed installation'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'Installation & Documentation Requirements',
        content: 'Complete installation process and required documentation for warranty replacement claims.',
        sections: [
          {
            title: 'Installation Process',
            content: 'Standard installation procedures for warranty replacement chargers.',
            subsections: [
              {
                title: 'Installation Standards',
                content: 'Follow all standard EVnation installation procedures and safety protocols'
              },
              {
                title: 'Quality Assurance',
                content: 'Ensure installation meets all quality standards and customer expectations'
              },
              {
                title: 'Commissioning Process',
                content: 'Proper commissioning of the new charger including app setup and testing'
              }
            ]
          },
          {
            title: 'Required Documentation',
            content: 'Essential photos and documentation required for warranty claim processing.',
            subsections: [
              {
                title: 'Photo Requirements',
                content: 'Required picture of charger on wall and ID number of charger as well as picture of the app showing being commissioned'
              },
              {
                title: 'Jobber Invoice Creation',
                content: 'Create invoice in Jobber for submission with all required pictures if not done through Electrum'
              },
              {
                title: 'Documentation Standards',
                content: 'All photos must be clear, properly labeled, and include all required information'
              }
            ]
          }
        ]
      },
      {
        pageNumber: 4,
        title: 'Invoice Processing & Payment Requirements',
        content: 'Final steps in the warranty replacement process including invoice submission and payment processing requirements.',
        sections: [
          {
            title: 'Invoice Submission Process',
            content: 'Complete invoice submission process with all required stakeholders.',
            subsections: [
              {
                title: 'Invoice Distribution',
                content: 'Once installation is complete forward the invoice for the agreed amount to ap@electrum.co, electrician support@electrum.co, Neil@evNation.us and/or upload into Electrum website'
              },
              {
                title: 'Email Documentation',
                content: 'Include all required photos and documentation with the invoice submission'
              },
              {
                title: 'Pipedrive Documentation',
                content: 'CC the email file into the customer\'s new Pipedrive account for complete record keeping'
              }
            ]
          },
          {
            title: 'Payment Processing Requirements',
            content: 'Critical requirements for electrician payment processing.',
            subsections: [
              {
                title: 'Payment Hold Policy',
                content: 'Electricians are not to be paid until all the above work is processed and the information is forwarded to Electrum'
              },
              {
                title: 'Documentation Verification',
                content: 'All required documentation must be complete and properly submitted before payment processing'
              },
              {
                title: 'Quality Control',
                content: 'Final verification that all warranty replacement requirements have been met'
              }
            ]
          },
          {
            title: 'Process Completion Checklist',
            content: 'Final checklist to ensure all warranty replacement requirements are met.',
            subsections: [
              {
                title: 'Customer Satisfaction',
                content: 'Confirm customer is satisfied with the warranty replacement installation'
              },
              {
                title: 'Documentation Complete',
                content: 'All required photos and documentation have been submitted'
              },
              {
                title: 'Invoice Processed',
                content: 'Invoice has been submitted to all required parties and documented in Pipedrive'
              }
            ]
          }
        ]
      }
    ]
  }
];

// Interactive Components
const ExpandableSection = ({ title, children, icon: Icon }: { 
  title: string; 
  children: React.ReactNode; 
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => {
  return (
    <div className="border border-white/20 rounded-xl overflow-hidden mb-4">
      {/* 헤더 - 항상 표시 */}
      <div className="w-full p-4 bg-white/5 flex items-center space-x-3">
        {Icon && <Icon className="w-5 h-5 text-blue-400" />}
        <span className="font-semibold text-white">{title}</span>
      </div>
      
      {/* 콘텐츠 - 항상 표시 */}
      <div className="p-4 border-t border-white/10">
        {children}
      </div>
    </div>
  );
};

const CopyableText = ({ text, label }: { text: string; label: string }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
      <div>
        <div className="text-sm text-gray-400 mb-1">{label}</div>
        <div className="text-white font-mono text-sm">{text}</div>
      </div>
      <button
        onClick={handleCopy}
        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        title="Copy to clipboard"
      >
        {copied ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
      </button>
    </div>
  );
};

const TipBox = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg">
    <div className="flex items-start space-x-3">
      <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
      <div className="text-yellow-100 text-sm">{children}</div>
    </div>
  </div>
);


const InfoBox = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
    <div className="flex items-start space-x-3">
      <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
      <div className="text-blue-100 text-sm">{children}</div>
    </div>
  </div>
);

const QuickActionButton = ({ 
  icon: Icon, 
  label, 
  onClick, 
  variant = 'primary' 
}: { 
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  label: string; 
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('QuickActionButton clicked:', label);
      onClick();
    }}
    className={`relative flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 overflow-hidden group cursor-pointer ${
      variant === 'primary' 
        ? 'bg-gradient-to-r from-blue-500 to-emerald-600 hover:from-blue-600 hover:to-emerald-700 text-white shadow-lg' 
        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
    }`}
  >
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
      variant === 'primary' ? 'bg-gradient-to-r from-blue-400/20 to-emerald-500/20' : 'bg-gradient-to-r from-white/10 to-gray-500/10'
    }`}></div>
    <Icon className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
    <span className="text-sm font-medium relative z-10">{label}</span>
    <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
  </button>
);

export default function ManualPage() {
  const params = useParams();
  const manualId = params.id as string;
  const [currentPage, setCurrentPage] = useState(0);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Debug logging
  useEffect(() => {
    console.log('Manual page state updated:', { currentPage, showQuickActions, manualId });
  }, [currentPage, showQuickActions, manualId]);


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        console.log('Clicked outside dropdown, closing...');
        setShowQuickActions(false);
      }
    };

    if (showQuickActions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showQuickActions]);
  
  const manual = manuals.find(m => m.id === manualId);
  
  if (!manual) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Manual Not Found</h1>
          <p className="text-blue-200 mb-8">The requested manual could not be found.</p>
          <Link 
            href="/manuals"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-emerald-700 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Manuals</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleDownload = async () => {
    try {
      console.log(`Downloading ${manual.title} with ID ${manual.id}`);
      
      // Use the API route for download
      const response = await fetch(`/api/download/${manual.id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Get the blob from the response
      const blob = await response.blob();
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${manual.title}.pdf`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL object
      window.URL.revokeObjectURL(url);
      
      console.log(`${manual.title} download completed successfully.`);
    } catch (error) {
      console.error('Download error:', error);
      alert('An error occurred during download. Please try again.');
    }
  };

  return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400/30 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-purple-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-orange-400/30 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-pink-400/15 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-cyan-400/25 rounded-full animate-ping"></div>
          </div>
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/manuals" className="flex items-center space-x-4 text-white hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-6 h-6" />
              <span className="text-lg font-medium">Back to Manuals</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white/80">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm">Manual Content</span>
              </div>
              
              {/* Quick Actions - Simplified */}
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => {
                    console.log('Quick Actions clicked, current state:', showQuickActions);
                    setShowQuickActions(prev => !prev);
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer border border-white/20"
                  style={{ userSelect: 'none' }}
                >
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-white">Quick Actions</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showQuickActions ? 'rotate-180' : ''}`} />
                </div>
                
                {showQuickActions && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-xl z-50">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-white mb-3">Quick Actions</h3>
                      
                      <div
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          setShowQuickActions(false);
                        }}
                        className="w-full flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-sm cursor-pointer"
                      >
                        <Copy className="w-4 h-4" />
                        <span>Copy Page URL</span>
                      </div>
                      
                      {manual.pdfUrl && (
                        <div
                          onClick={() => {
                            handleDownload();
                            setShowQuickActions(false);
                          }}
                          className="w-full flex items-center space-x-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors text-blue-300 text-sm cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Open PDF</span>
                        </div>
                      )}
                      
                      <div
                        onClick={() => {
                          window.open('/contact', '_blank');
                          setShowQuickActions(false);
                        }}
                        className="w-full flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-sm cursor-pointer"
                      >
                        <HelpCircle className="w-4 h-4" />
                        <span>Get Help</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden group hover:shadow-3xl hover:border-white/40 transition-all duration-500"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-emerald-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating Particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-emerald-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700"></div>
            {/* Manual Header */}
            <div className="flex items-start space-x-6 mb-8 relative z-10">
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500/30 to-emerald-600/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                <div className="text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                {manual.icon}
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className={`px-3 py-1 text-white text-sm font-medium rounded-full ${
                    manual.category === 'Company Info' 
                      ? 'bg-gradient-to-r from-blue-500 to-emerald-600'
                      : manual.category === 'Integration'
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-600'
                      : manual.category === 'Process'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600'
                      : manual.category === 'Finance'
                      ? 'bg-gradient-to-r from-orange-500 to-red-600'
                      : 'bg-gradient-to-r from-red-500 to-orange-600'
                  }`}>
                    {manual.category}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                    <Info className="w-3 h-3 mr-1" />
                    {manual.category === 'Company Info' ? 'Company Documentation' : 
                     manual.category === 'Process' ? 'Process Guide' : 
                     manual.category === 'Finance' ? 'Financial Guide' : 
                     manual.category === 'Technical' ? 'Troubleshooting Guide' : 'Technical Guide'}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-white mb-3">{manual.title}</h1>
                
                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{manual.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{manual.downloads?.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{manual.pages} pages</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>Updated: {manual.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Manual Content */}
            {manual.content && manual.content.length > 0 ? (
              <div className="mb-8">
                {/* Page Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">
                    {manual.content[currentPage]?.title || 'Manual Content'}
                  </h2>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Previous page clicked, current:', currentPage);
                        setCurrentPage(Math.max(0, currentPage - 1));
                      }}
                      disabled={currentPage === 0}
                      className="relative p-3 rounded-xl bg-white/10 border border-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-300 overflow-hidden group cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <ChevronLeft className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                    
                    <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-sm text-white font-medium">
                        {currentPage + 1}
                      </span>
                      <div className="w-px h-4 bg-white/20"></div>
                      <span className="text-sm text-gray-300">
                        {manual.content.length}
                      </span>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Next page clicked, current:', currentPage);
                        setCurrentPage(Math.min((manual.content?.length || 1) - 1, currentPage + 1));
                      }}
                      disabled={currentPage === (manual.content?.length || 1) - 1}
                      className="relative p-3 rounded-xl bg-white/10 border border-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-300 overflow-hidden group cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <ChevronRight className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </div>
                </div>

                {/* Current Page Content */}
                {manual.content[currentPage] && (
                  <motion.div 
                    key={currentPage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    {/* Enhanced Page Header */}
                    <div className="relative p-8 bg-gradient-to-r from-blue-500/10 via-emerald-500/5 to-transparent rounded-2xl border border-white/20 backdrop-blur-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5"></div>
                      <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">{currentPage + 1}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="h-4 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                              <span className="text-blue-300 text-sm font-medium">Page {currentPage + 1} of {manual.content.length}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                              {manual.content[currentPage].title}
                            </h2>
                          </div>
                        </div>
                      </div>
                      {/* Floating particles */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-4 right-6 w-2 h-2 bg-emerald-400/40 rounded-full animate-ping"></div>
                      <div className="absolute top-1/2 left-4 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse"></div>
                    </div>

                    {/* Main Content with Enhanced Design */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="relative p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Info className="w-4 h-4 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
                            <p className="text-gray-200 leading-relaxed text-lg">
                              {manual.content[currentPage].content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Interactive Sections */}
                    {manual.content[currentPage].sections && (
                      <div className="space-y-6">
                        {manual.content[currentPage].sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <ExpandableSection
                              title={section.title}
                              icon={section.title.toLowerCase().includes('step') ? Target : 
                                    section.title.toLowerCase().includes('warning') ? AlertTriangle :
                                    section.title.toLowerCase().includes('tip') ? Lightbulb : 
                                    section.title.toLowerCase().includes('contact') ? Phone :
                                    section.title.toLowerCase().includes('support') ? HelpCircle : 
                                    section.title.toLowerCase().includes('requirement') ? CheckCircle : Info}
                            >
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6"
                              >
                                {/* Section Content */}
                                <div className="relative p-6 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                                  <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                      <Info className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-gray-200 leading-relaxed text-lg">
                                        {section.content}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              
                              {/* Subsections */}
                              {section.subsections && (
                                <div className="space-y-4">
                                  {section.subsections.map((subsection, subIndex) => (
                                    <motion.div 
                                      key={subIndex}
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: subIndex * 0.05 }}
                                      className="group relative"
                                    >
                                      <div className="relative p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                                        {/* Background gradient on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        <div className="relative z-10">
                                          <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-6 h-6 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                              <Target className="w-3 h-3 text-emerald-400" />
                                            </div>
                                            <h4 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                                              {subsection.title}
                                            </h4>
                                          </div>
                                          
                                          <div className="text-gray-200 leading-relaxed">
                                            {subsection.content.includes('http') ? (
                                              <div className="space-y-3">
                                                <p className="text-gray-200 leading-relaxed">
                                                  {subsection.content.replace(/https?:\/\/[^\s]+/g, '').trim()}
                                                </p>
                                                <CopyableText 
                                                  text={subsection.content.match(/https?:\/\/[^\s]+/)?.[0] || ''} 
                                                  label="URL" 
                                                />
                                              </div>
                                            ) : subsection.content.match(/\(\d{3}\) \d{3}-\d{4}/) ? (
                                              <div className="space-y-3">
                                                <p className="text-gray-200 leading-relaxed">
                                                  {subsection.content.replace(/\(\d{3}\) \d{3}-\d{4}/g, '').trim()}
                                                </p>
                                                <CopyableText 
                                                  text={subsection.content.match(/\(\d{3}\) \d{3}-\d{4}/)?.[0] || ''} 
                                                  label="Phone Number" 
                                                />
                                              </div>
                                            ) : (
                                              <p className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                                {subsection.content}
                                              </p>
                                            )}
                                          </div>
                                        </div>
                                        
                                        {/* Floating particles */}
                                        <div className="absolute top-3 right-3 w-1 h-1 bg-blue-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                                        <div className="absolute bottom-3 right-4 w-0.5 h-0.5 bg-emerald-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700"></div>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              )}
                              </motion.div>
                            </ExpandableSection>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Enhanced Page Indicators */}
                <div className="flex justify-center space-x-3 mt-8">
                  {manual.content.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Page indicator clicked:', index);
                        setCurrentPage(index);
                      }}
                      className={`relative w-4 h-4 rounded-full transition-all duration-300 overflow-hidden group cursor-pointer ${
                        index === currentPage 
                          ? 'bg-gradient-to-r from-blue-500 to-emerald-600 shadow-lg' 
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    >
                      {index === currentPage && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-500 rounded-full" />
                      )}
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Fallback for manuals without content */
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">{manual.description}</p>

            {manual.keyFeatures && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {manual.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {manual.targetAudience && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Target Audience</h3>
                <div className="flex items-center space-x-3 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <Users className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">{manual.targetAudience}</span>
                </div>
                  </div>
                )}
              </div>
            )}

            {/* Importance Note */}
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl border border-blue-500/20">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">Important Note</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {manual.id === '1' 
                      ? 'This manual is essential for all team members to understand company structure and policies. It provides the foundation for effective communication and operational procedures within EVnation.'
                      : manual.id === '2'
                      ? 'This manual is critical for internal communication and client interaction tracking. Proper use of RingCentral ensures seamless team collaboration and professional client communication.'
                      : manual.id === '3'
                      ? 'This manual is vital for project management and professional client proposals. The Master Page tool is the cornerstone of our project delivery process and client relationship management.'
                      : manual.id === '4'
                      ? 'This manual is important for maintaining strong dealer relationships and referral programs. Proper execution of the gift card process ensures continued partnerships and client referrals.'
                      : manual.id === '5'
                      ? 'This manual is critical for accurate financial management and timely payment processing. Proper invoicing and billing procedures are essential for business operations and cash flow management.'
                      : manual.id === '6'
                      ? 'This manual is essential for resolving charger issues and maintaining customer satisfaction. Quick and effective troubleshooting ensures minimal downtime and happy customers.'
                      : manual.id === '7'
                      ? 'This manual is critical for maintaining installation quality and compliance standards. Proper documentation and adherence to requirements ensure safe, professional installations.'
                      : 'This manual is essential for safe and compliant electrical panel upgrade procedures. Following proper utility coordination and inspection protocols ensures successful project completion.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Download Section */}
            <div className="border-t border-white/20 pt-8">
              <ExpandableSection
                title="Export & Share Options"
                icon={Download}
              >
                <div className="space-y-6">
                  {manual.pdfUrl ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="text-md font-semibold text-white mb-2 flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-blue-400" />
                          PDF Download
                        </h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Download the complete manual as a PDF file for offline access.
                        </p>
                        <QuickActionButton
                          icon={Download}
                          label="Download PDF"
                          onClick={handleDownload}
                          variant="primary"
                        />
                </div>
                
                      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="text-md font-semibold text-white mb-2 flex items-center">
                          <Copy className="w-4 h-4 mr-2 text-green-400" />
                          Share Link
                        </h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Copy the page URL to share with team members.
                        </p>
                        <QuickActionButton
                          icon={Copy}
                          label="Copy URL"
                          onClick={() => navigator.clipboard.writeText(window.location.href)}
                          variant="secondary"
                        />
              </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="text-md font-semibold text-white mb-2 flex items-center">
                          <Copy className="w-4 h-4 mr-2 text-green-400" />
                          Share Link
                        </h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Copy the page URL to share with team members.
                        </p>
                        <QuickActionButton
                          icon={Copy}
                          label="Copy URL"
                          onClick={() => navigator.clipboard.writeText(window.location.href)}
                          variant="primary"
                        />
                      </div>
                      
                      <InfoBox>
                        <strong>Note:</strong> This manual is available online only. No PDF download is available for this document.
                      </InfoBox>
                    </div>
                  )}
                  
                  <TipBox>
                    <strong>Pro Tip:</strong> Bookmark this page for quick access. {manual.pdfUrl ? 'You can also download the PDF for offline reference during installations.' : 'This manual is designed for online reference only.'}
                  </TipBox>
                </div>
              </ExpandableSection>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
