'use client';

import { useState, useMemo, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  CheckCircle, 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  Star,
  Zap,
  Shield,
  Heart,
  ArrowLeft,
  X,
  Clock,
  Search,
  Download,
  Share2,
  Eye,
  Lightbulb,
  Settings,
  Calendar,
  FileText,
  CheckSquare
} from 'lucide-react';
import Link from 'next/link';

interface ProcessNode {
  id: string;
  title: string;
  description: string;
  step: number;
  icon: React.ReactNode;
  status: 'completed' | 'in-progress' | 'pending';
  category: 'planning' | 'execution' | 'quality' | 'completion';
  estimatedDuration?: string;
  responsible?: string;
  dependencies?: string[];
  tools?: string[];
  tips?: string[];
}

interface ProcessFlow {
  id: string;
  title: string;
  description: string;
  nodes: ProcessNode[];
  totalSteps: number;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  successRate: number;
  category: 'onboarding' | 'installation' | 'quality' | 'support' | 'training';
  priority: 'high' | 'medium' | 'low';
  lastUpdated: string;
  version: string;
  tags: string[];
  resources?: {
    documents: string[];
    videos: string[];
    tools: string[];
  };
}

const processFlows: ProcessFlow[] = [
  {
    id: '1',
    title: 'Client Onboarding Process',
    description: 'Complete client acquisition and project initiation workflow with advanced CRM integration',
    totalSteps: 8,
    estimatedTime: '2-3 weeks',
    difficulty: 'intermediate',
    successRate: 95,
    category: 'onboarding',
    priority: 'high',
    lastUpdated: '2024-01-15',
    version: '2.1',
    tags: ['CRM', 'Sales', 'Client Management', 'PipeDrive'],
    resources: {
      documents: ['Client Onboarding Checklist', 'Site Survey Template', 'Proposal Template'],
      videos: ['Initial Contact Best Practices', 'Site Survey Guide'],
      tools: ['PipeDrive CRM', 'Google Maps', 'Cost Calculator']
    },
    nodes: [
      {
        id: '1-1',
        title: 'Initial Contact & Lead Qualification',
        description: 'First client interaction, needs assessment, and lead scoring using PipeDrive CRM',
        step: 1,
        icon: <Users className="w-6 h-6" />,
        status: 'completed',
        category: 'planning',
        estimatedDuration: '1-2 days',
        responsible: 'Sales Team',
        tools: ['PipeDrive CRM', 'Phone System', 'Email Templates'],
        tips: ['Use standardized qualification questions', 'Record all interactions in CRM', 'Follow up within 24 hours']
      },
      {
        id: '1-2',
        title: 'Site Survey & Technical Assessment',
        description: 'Comprehensive site analysis, electrical capacity check, and installation feasibility study',
        step: 2,
        icon: <Target className="w-6 h-6" />,
        status: 'completed',
        category: 'planning',
        estimatedDuration: '2-3 hours',
        responsible: 'Technical Team',
        dependencies: ['1-1'],
        tools: ['Electrical Testing Equipment', 'Site Survey App', 'Camera'],
        tips: ['Check electrical panel capacity', 'Measure parking space', 'Document all access points']
      },
      {
        id: '1-3',
        title: 'Proposal Creation & Pricing',
        description: 'Detailed project proposal with cost estimation using Master Page Tool integration',
        step: 3,
        icon: <CheckCircle className="w-6 h-6" />,
        status: 'in-progress',
        category: 'execution',
        estimatedDuration: '1 day',
        responsible: 'Sales Manager',
        dependencies: ['1-2'],
        tools: ['Master Page Tool', 'Pricing Calculator', 'Proposal Template'],
        tips: ['Include all potential costs', 'Provide multiple options', 'Highlight value proposition']
      },
      {
        id: '1-4',
        title: 'Client Presentation & Negotiation',
        description: 'Present proposal, address concerns, and negotiate terms with decision makers',
        step: 4,
        icon: <Users className="w-6 h-6" />,
        status: 'pending',
        category: 'execution',
        estimatedDuration: '1-2 hours',
        responsible: 'Sales Manager',
        dependencies: ['1-3'],
        tools: ['Presentation Software', 'Contract Templates'],
        tips: ['Prepare for common objections', 'Have backup options ready', 'Document all agreements']
      },
      {
        id: '1-5',
        title: 'Contract Signing & Legal Review',
        description: 'Legal agreement finalization, terms review, and project authorization',
        step: 5,
        icon: <Shield className="w-6 h-6" />,
        status: 'pending',
        category: 'execution',
        estimatedDuration: '2-3 days',
        responsible: 'Legal Team',
        dependencies: ['1-4'],
        tools: ['Contract Management System', 'Digital Signatures'],
        tips: ['Review all terms carefully', 'Ensure compliance', 'Set clear expectations']
      },
      {
        id: '1-6',
        title: 'Project Planning & Resource Allocation',
        description: 'Detailed project timeline, team assignment, and resource planning',
        step: 6,
        icon: <Calendar className="w-6 h-6" />,
        status: 'pending',
        category: 'planning',
        estimatedDuration: '1 day',
        responsible: 'Project Manager',
        dependencies: ['1-5'],
        tools: ['Project Management Software', 'Resource Planning Tool'],
        tips: ['Consider weather conditions', 'Plan for contingencies', 'Communicate timeline clearly']
      },
      {
        id: '1-7',
        title: 'Kickoff Meeting & Team Alignment',
        description: 'Project initiation meeting with all stakeholders and team alignment',
        step: 7,
        icon: <Play className="w-6 h-6" />,
        status: 'pending',
        category: 'completion',
        estimatedDuration: '1 hour',
        responsible: 'Project Manager',
        dependencies: ['1-6'],
        tools: ['Video Conferencing', 'Project Documentation'],
        tips: ['Include all stakeholders', 'Set clear expectations', 'Document action items']
      },
      {
        id: '1-8',
        title: 'Pre-Installation Preparation',
        description: 'Final preparations, material ordering, and installation team briefing',
        step: 8,
        icon: <Settings className="w-6 h-6" />,
        status: 'pending',
        category: 'planning',
        estimatedDuration: '2-3 days',
        responsible: 'Installation Team Lead',
        dependencies: ['1-7'],
        tools: ['Inventory Management', 'Team Communication App'],
        tips: ['Verify all materials', 'Brief installation team', 'Confirm site access']
      }
    ]
  },
  {
    id: '2',
    title: 'EV Charger Installation Process',
    description: 'Advanced step-by-step EV charger installation with quality control and safety protocols',
    totalSteps: 10,
    estimatedTime: '1-2 weeks',
    difficulty: 'advanced',
    successRate: 98,
    category: 'installation',
    priority: 'high',
    lastUpdated: '2024-01-10',
    version: '3.0',
    tags: ['Installation', 'Safety', 'Quality Control', 'Technical'],
    resources: {
      documents: ['Installation Manual', 'Safety Protocols', 'Quality Checklist'],
      videos: ['Installation Walkthrough', 'Safety Training', 'Testing Procedures'],
      tools: ['Installation Tools', 'Testing Equipment', 'Safety Gear']
    },
    nodes: [
      {
        id: '2-1',
        title: 'Pre-Installation Safety Setup',
        description: 'Site safety assessment, equipment check, and safety protocol implementation',
        step: 1,
        icon: <Shield className="w-6 h-6" />,
        status: 'completed',
        category: 'planning',
        estimatedDuration: '30 minutes',
        responsible: 'Installation Team Lead',
        tools: ['Safety Equipment', 'Site Assessment Tools'],
        tips: ['Check weather conditions', 'Verify safety equipment', 'Set up work zone barriers']
      },
      {
        id: '2-2',
        title: 'Electrical Panel Assessment',
        description: 'Electrical capacity verification, panel upgrade if needed, and permit compliance',
        step: 2,
        icon: <Zap className="w-6 h-6" />,
        status: 'completed',
        category: 'execution',
        estimatedDuration: '1-2 hours',
        responsible: 'Licensed Electrician',
        dependencies: ['2-1'],
        tools: ['Electrical Testing Equipment', 'Multimeter', 'Panel Assessment Tools'],
        tips: ['Verify electrical capacity', 'Check for code compliance', 'Document all measurements']
      },
      {
        id: '2-3',
        title: 'Conduit & Wiring Installation',
        description: 'Electrical conduit routing, wire pulling, and connection preparation',
        step: 3,
        icon: <Settings className="w-6 h-6" />,
        status: 'in-progress',
        category: 'execution',
        estimatedDuration: '2-4 hours',
        responsible: 'Installation Team',
        dependencies: ['2-2'],
        tools: ['Conduit Tools', 'Wire Pulling Equipment', 'Cable Management'],
        tips: ['Follow electrical codes', 'Use proper conduit sizing', 'Label all connections']
      },
      {
        id: '2-4',
        title: 'Charger Mounting & Positioning',
        description: 'Physical charger installation, mounting, and optimal positioning',
        step: 4,
        icon: <Target className="w-6 h-6" />,
        status: 'pending',
        category: 'execution',
        estimatedDuration: '1-2 hours',
        responsible: 'Installation Team',
        dependencies: ['2-3'],
        tools: ['Mounting Hardware', 'Level', 'Drill', 'Measuring Tools'],
        tips: ['Ensure proper height', 'Check for accessibility', 'Verify mounting strength']
      },
      {
        id: '2-5',
        title: 'Electrical Connections',
        description: 'Final electrical connections, grounding, and circuit breaker installation',
        step: 5,
        icon: <Zap className="w-6 h-6" />,
        status: 'pending',
        category: 'execution',
        estimatedDuration: '1-2 hours',
        responsible: 'Licensed Electrician',
        dependencies: ['2-4'],
        tools: ['Electrical Tools', 'Wire Strippers', 'Crimping Tools'],
        tips: ['Follow torque specifications', 'Ensure proper grounding', 'Test all connections']
      },
      {
        id: '2-6',
        title: 'System Testing & Calibration',
        description: 'Comprehensive functionality testing, calibration, and performance verification',
        step: 6,
        icon: <CheckCircle className="w-6 h-6" />,
        status: 'pending',
        category: 'quality',
        estimatedDuration: '1 hour',
        responsible: 'Technical Specialist',
        dependencies: ['2-5'],
        tools: ['Testing Equipment', 'Calibration Tools', 'Performance Meters'],
        tips: ['Test all functions', 'Verify charging speeds', 'Check error codes']
      },
      {
        id: '2-7',
        title: 'Safety & Compliance Verification',
        description: 'Safety protocol verification, code compliance check, and inspection preparation',
        step: 7,
        icon: <Shield className="w-6 h-6" />,
        status: 'pending',
        category: 'quality',
        estimatedDuration: '30 minutes',
        responsible: 'Safety Inspector',
        dependencies: ['2-6'],
        tools: ['Safety Checklist', 'Compliance Tools', 'Inspection Forms'],
        tips: ['Verify all safety protocols', 'Check code compliance', 'Prepare for inspection']
      },
      {
        id: '2-8',
        title: 'Client Training & Documentation',
        description: 'User operation training, maintenance instructions, and documentation handover',
        step: 8,
        icon: <Users className="w-6 h-6" />,
        status: 'pending',
        category: 'completion',
        estimatedDuration: '30 minutes',
        responsible: 'Installation Team Lead',
        dependencies: ['2-7'],
        tools: ['Training Materials', 'User Manuals', 'Documentation'],
        tips: ['Demonstrate all functions', 'Provide written instructions', 'Answer all questions']
      },
      {
        id: '2-9',
        title: 'Final Quality Inspection',
        description: 'Comprehensive quality assurance, final approval, and project sign-off',
        step: 9,
        icon: <CheckCircle className="w-6 h-6" />,
        status: 'pending',
        category: 'quality',
        estimatedDuration: '30 minutes',
        responsible: 'Quality Manager',
        dependencies: ['2-8'],
        tools: ['Quality Checklist', 'Inspection Tools', 'Approval Forms'],
        tips: ['Verify all requirements', 'Check workmanship quality', 'Obtain client approval']
      },
      {
        id: '2-10',
        title: 'Project Handover & Follow-up',
        description: 'Final project handover, warranty information, and follow-up scheduling',
        step: 10,
        icon: <Award className="w-6 h-6" />,
        status: 'pending',
        category: 'completion',
        estimatedDuration: '15 minutes',
        responsible: 'Project Manager',
        dependencies: ['2-9'],
        tools: ['Warranty Documents', 'Follow-up Schedule', 'Client Contact Info'],
        tips: ['Provide warranty information', 'Schedule follow-up', 'Ensure client satisfaction']
      }
    ]
  },
  {
    id: '3',
    title: 'Quality Assurance Process',
    description: 'Comprehensive quality control and testing procedures with advanced monitoring',
    totalSteps: 7,
    estimatedTime: '3-5 days',
    difficulty: 'intermediate',
    successRate: 99,
    category: 'quality',
    priority: 'high',
    lastUpdated: '2024-01-12',
    version: '2.5',
    tags: ['Quality Control', 'Testing', 'Compliance', 'Monitoring'],
    resources: {
      documents: ['Quality Checklist', 'Testing Procedures', 'Compliance Guide'],
      videos: ['Quality Control Training', 'Testing Best Practices'],
      tools: ['Testing Equipment', 'Quality Software', 'Monitoring Tools']
    },
    nodes: [
      {
        id: '3-1',
        title: 'Pre-Installation Check',
        description: 'Materials and equipment verification',
        step: 1,
        icon: <CheckCircle className="w-6 h-6" />,
        status: 'completed',
        category: 'planning'
      },
      {
        id: '3-2',
        title: 'Installation Monitoring',
        description: 'Real-time installation quality oversight',
        step: 2,
        icon: <Target className="w-6 h-6" />,
        status: 'completed',
        category: 'execution'
      },
      {
        id: '3-3',
        title: 'Performance Testing',
        description: 'Charger functionality and efficiency testing',
        step: 3,
        icon: <Zap className="w-6 h-6" />,
        status: 'in-progress',
        category: 'quality'
      },
      {
        id: '3-4',
        title: 'Safety Compliance',
        description: 'Regulatory and safety standard verification',
        step: 4,
        icon: <Shield className="w-6 h-6" />,
        status: 'pending',
        category: 'quality'
      },
      {
        id: '3-5',
        title: 'Documentation Review',
        description: 'Complete project documentation verification',
        step: 5,
        icon: <CheckCircle className="w-6 h-6" />,
        status: 'pending',
        category: 'completion'
      }
    ]
  },
  {
    id: '4',
    title: 'Client Success Management',
    description: 'Post-installation support and success tracking with advanced analytics',
    totalSteps: 6,
    estimatedTime: 'Ongoing',
    difficulty: 'intermediate',
    successRate: 92,
    category: 'support',
    priority: 'medium',
    lastUpdated: '2024-01-08',
    version: '1.8',
    tags: ['Client Support', 'Success Tracking', 'Analytics', 'Retention'],
    resources: {
      documents: ['Support Procedures', 'Success Metrics', 'Client Communication Guide'],
      videos: ['Client Support Training', 'Success Tracking Tutorial'],
      tools: ['CRM System', 'Analytics Dashboard', 'Communication Tools']
    },
    nodes: [
      {
        id: '4-1',
        title: 'Post-Installation Support',
        description: 'Immediate support and issue resolution',
        step: 1,
        icon: <Heart className="w-6 h-6" />,
        status: 'completed',
        category: 'completion'
      },
      {
        id: '4-2',
        title: 'Performance Monitoring',
        description: 'Ongoing system performance tracking',
        step: 2,
        icon: <TrendingUp className="w-6 h-6" />,
        status: 'completed',
        category: 'execution'
      },
      {
        id: '4-3',
        title: 'Client Feedback',
        description: 'Regular client satisfaction surveys',
        step: 3,
        icon: <Users className="w-6 h-6" />,
        status: 'in-progress',
        category: 'execution'
      },
      {
        id: '4-4',
        title: 'Maintenance Scheduling',
        description: 'Preventive maintenance planning',
        step: 4,
        icon: <Target className="w-6 h-6" />,
        status: 'pending',
        category: 'planning'
      },
      {
        id: '4-5',
        title: 'Success Metrics',
        description: 'ROI and performance analytics',
        step: 5,
        icon: <TrendingUp className="w-6 h-6" />,
        status: 'pending',
        category: 'quality'
      },
      {
        id: '4-6',
        title: 'Relationship Building',
        description: 'Long-term partnership development',
        step: 6,
        icon: <Heart className="w-6 h-6" />,
        status: 'pending',
        category: 'completion'
      }
    ]
  },
  {
    id: '5',
    title: 'Team Excellence Program',
    description: 'Continuous improvement and team development with advanced training modules',
    totalSteps: 7,
    estimatedTime: 'Ongoing',
    difficulty: 'beginner',
    successRate: 88,
    category: 'training',
    priority: 'medium',
    lastUpdated: '2024-01-05',
    version: '1.5',
    tags: ['Training', 'Development', 'Excellence', 'Team Building'],
    resources: {
      documents: ['Training Manual', 'Development Plans', 'Excellence Guidelines'],
      videos: ['Training Modules', 'Best Practices', 'Team Building Activities'],
      tools: ['Learning Management System', 'Assessment Tools', 'Progress Tracking']
    },
    nodes: [
      {
        id: '5-1',
        title: 'Skill Assessment',
        description: 'Team member competency evaluation',
        step: 1,
        icon: <Target className="w-6 h-6" />,
        status: 'completed',
        category: 'planning'
      },
      {
        id: '5-2',
        title: 'Training Planning',
        description: 'Personalized development roadmap',
        step: 2,
        icon: <CheckCircle className="w-6 h-6" />,
        status: 'completed',
        category: 'planning'
      },
      {
        id: '5-3',
        title: 'Skill Development',
        description: 'Targeted training and certification',
        step: 3,
        icon: <Star className="w-6 h-6" />,
        status: 'in-progress',
        category: 'execution'
      },
      {
        id: '5-4',
        title: 'Performance Tracking',
        description: 'Progress monitoring and feedback',
        step: 4,
        icon: <TrendingUp className="w-6 h-6" />,
        status: 'pending',
        category: 'quality'
      },
      {
        id: '5-5',
        title: 'Mentorship Program',
        description: 'Peer-to-peer learning and support',
        step: 5,
        icon: <Users className="w-6 h-6" />,
        status: 'pending',
        category: 'execution'
      },
      {
        id: '5-6',
        title: 'Recognition System',
        description: 'Achievement acknowledgment and rewards',
        step: 6,
        icon: <Award className="w-6 h-6" />,
        status: 'pending',
        category: 'completion'
      },
      {
        id: '5-7',
        title: 'Continuous Improvement',
        description: 'Ongoing process optimization',
        step: 7,
        icon: <TrendingUp className="w-6 h-6" />,
        status: 'pending',
        category: 'completion'
      }
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-500 text-white';
    case 'in-progress': return 'bg-blue-500 text-white';
    case 'pending': return 'bg-gray-500 text-white';
    default: return 'bg-gray-500 text-white';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'planning': return 'from-blue-500 to-cyan-500';
    case 'execution': return 'from-emerald-500 to-teal-500';
    case 'quality': return 'from-purple-500 to-indigo-500';
    case 'completion': return 'from-orange-500 to-red-500';
    default: return 'from-gray-500 to-slate-500';
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
    case 'intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    case 'advanced': return 'bg-red-500/20 text-red-300 border-red-500/30';
    default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  }
};

// New Components
// Removed AnimatedParticle for better performance

const ProcessCard = memo(function ProcessCard({ process, onClick }: { process: ProcessFlow; onClick: () => void }) {
  return (
    <motion.div
      className="liquid-glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/15 relative overflow-hidden"
      onClick={onClick}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Removed animated particles for better performance */}
      
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Play className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{process.title}</h3>
              <p className="text-slate-300 text-sm">{process.description}</p>
              <div className="flex items-center space-x-2 mt-2">
                {process.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Enhanced Stats */}
            <div className="flex items-center space-x-3 text-sm">
              <motion.span 
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg"
                whileHover={{ scale: 1.1 }}
              >
                {process.totalSteps} Steps
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg"
                whileHover={{ scale: 1.1 }}
              >
                {process.estimatedTime}
              </motion.span>
              <motion.span 
                className={`px-3 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(process.difficulty)}`}
                whileHover={{ scale: 1.1 }}
              >
                {process.difficulty.charAt(0).toUpperCase() + process.difficulty.slice(1)}
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg"
                whileHover={{ scale: 1.1 }}
              >
                {process.successRate}% Success
              </motion.span>
            </div>
            
            {/* Enhanced View Button */}
            <motion.button 
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-emerald-700 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4" />
              <span>View Process</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const SearchAndFilter = memo(function SearchAndFilter({ onSearch, onFilter }: { onSearch: (query: string) => void; onFilter: (filter: string) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Processes', icon: <Target className="w-4 h-4" /> },
    { id: 'onboarding', label: 'Onboarding', icon: <Users className="w-4 h-4" /> },
    { id: 'installation', label: 'Installation', icon: <Settings className="w-4 h-4" /> },
    { id: 'quality', label: 'Quality', icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'support', label: 'Support', icon: <Heart className="w-4 h-4" /> },
    { id: 'training', label: 'Training', icon: <Star className="w-4 h-4" /> }
  ];

  return (
    <div className="liquid-glass-card rounded-2xl p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search processes..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearch(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {/* Filter */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => {
                setSelectedFilter(filter.id);
                onFilter(filter.id);
              }}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon}
              <span className="text-sm font-medium">{filter.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
});

export default function ProcessesPage() {
  const [selectedProcess, setSelectedProcess] = useState<ProcessFlow | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Performance optimization with useMemo
  const filteredAndSearchedProcesses = useMemo(() => {
    return processFlows.filter(process => {
      const matchesSearch = process.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           process.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           process.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesFilter = selectedFilter === 'all' || process.category === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, selectedFilter]);

  const openModal = useCallback((process: ProcessFlow) => {
    setIsLoading(true);
    // Simulate loading for better UX
    setTimeout(() => {
      setSelectedProcess(process);
      setIsLoading(false);
    }, 300);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProcess(null);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleFilter = useCallback((filter: string) => {
    setSelectedFilter(filter);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"></div>

      {/* Header */}
      <motion.header 
        className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-4 group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <ArrowLeft className="w-7 h-7 text-white" />
                </div>
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">Back to Home</h1>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Target className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold text-white">Success Processes</h1>
                <p className="text-purple-200 text-sm">Advanced Process Workflows</p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Enhanced Page Header */}
        <motion.section 
          className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  EVnation Success
                </span>
                <br />
                <span className="text-white">Process Hub</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                Advanced process workflows that drive EVnation&apos;s success in EV charger installation.
                <br className="hidden md:block" />
                Each process is designed to ensure quality, efficiency, and exceptional client satisfaction.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <motion.div 
                  className="liquid-glass-card rounded-xl p-4"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">9</div>
                  <div className="text-slate-300 text-sm">Active Processes</div>
                </motion.div>
                <motion.div 
                  className="liquid-glass-card rounded-xl p-4"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-3xl font-bold text-emerald-400 mb-2">96%</div>
                  <div className="text-slate-300 text-sm">Success Rate</div>
                </motion.div>
                <motion.div 
                  className="liquid-glass-card rounded-xl p-4"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">2.1</div>
                  <div className="text-slate-300 text-sm">Avg. Weeks</div>
                </motion.div>
                <motion.div 
                  className="liquid-glass-card rounded-xl p-4"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                  <div className="text-slate-300 text-sm">Projects Completed</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Search and Filter */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />
          </div>
        </motion.section>

        {/* Enhanced Process Flows */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div 
                className="space-y-4"
                key={selectedFilter + searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {filteredAndSearchedProcesses.map((flow, index) => (
                  <motion.div
                    key={flow.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <ProcessCard process={flow} onClick={() => openModal(flow)} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {filteredAndSearchedProcesses.length === 0 && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-24 h-24 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No processes found</h3>
                <p className="text-slate-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}

            {/* Enhanced Summary Section */}
            <motion.div 
              className="mt-12 liquid-glass-card rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Process-Driven Success
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Our structured processes ensure consistent quality, efficient execution, and exceptional client outcomes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Structured Approach</h4>
                  <p className="text-slate-400 text-sm">Clear, step-by-step processes that ensure consistency.</p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Continuous Improvement</h4>
                  <p className="text-slate-400 text-sm">Regular optimization based on performance data.</p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
                  <p className="text-slate-400 text-sm">High success rates and client satisfaction.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      {/* Enhanced Process Detail Modal */}
      <AnimatePresence>
        {selectedProcess && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="liquid-glass-card rounded-2xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Play className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedProcess.title}</h3>
                    <p className="text-slate-300">{selectedProcess.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xs text-slate-400">v{selectedProcess.version}</span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-400">Updated {selectedProcess.lastUpdated}</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              {/* Enhanced Process Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <motion.div 
                  className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg font-bold">{selectedProcess.totalSteps}</div>
                  <div className="text-xs">Steps</div>
                </motion.div>
                <motion.div 
                  className="px-3 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg font-bold">{selectedProcess.estimatedTime}</div>
                  <div className="text-xs">Duration</div>
                </motion.div>
                <motion.div 
                  className={`px-3 py-2 rounded-lg text-center ${getDifficultyColor(selectedProcess.difficulty)}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg font-bold">{selectedProcess.difficulty.charAt(0).toUpperCase() + selectedProcess.difficulty.slice(1)}</div>
                  <div className="text-xs">Level</div>
                </motion.div>
                <motion.div 
                  className="px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg font-bold">{selectedProcess.successRate}%</div>
                  <div className="text-xs">Success Rate</div>
                </motion.div>
              </div>

              {/* Resources Section */}
              {selectedProcess.resources && (
                <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Resources & Tools
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-blue-300 mb-2">Documents</h5>
                      <div className="space-y-1">
                        {selectedProcess.resources.documents.map((doc, index) => (
                          <div key={index} className="text-xs text-slate-400 flex items-center">
                            <FileText className="w-3 h-3 mr-1" />
                            {doc}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-emerald-300 mb-2">Videos</h5>
                      <div className="space-y-1">
                        {selectedProcess.resources.videos.map((video, index) => (
                          <div key={index} className="text-xs text-slate-400 flex items-center">
                            <Play className="w-3 h-3 mr-1" />
                            {video}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Tools</h5>
                      <div className="space-y-1">
                        {selectedProcess.resources.tools.map((tool, index) => (
                          <div key={index} className="text-xs text-slate-400 flex items-center">
                            <Settings className="w-3 h-3 mr-1" />
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Enhanced Process Steps */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2" />
                  Process Steps
                </h4>
                {selectedProcess.nodes.map((node, index) => (
                  <motion.div
                    key={node.id}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Step Number */}
                      <motion.div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${getStatusColor(node.status)} flex-shrink-0`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {node.step}
                      </motion.div>

                      {/* Icon */}
                      <motion.div 
                        className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(node.category)} rounded-lg flex items-center justify-center flex-shrink-0`}
                        whileHover={{ rotate: 5 }}
                      >
                        <div className="text-white">
                          {node.icon}
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-semibold text-white">
                            {node.title}
                          </h4>
                          <div className="flex items-center space-x-2">
                            {node.estimatedDuration && (
                              <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                                <Clock className="w-3 h-3 inline mr-1" />
                                {node.estimatedDuration}
                              </span>
                            )}
                            <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(node.status)} bg-opacity-20`}>
                              {node.status === 'completed' ? 'Done' : node.status === 'in-progress' ? 'Active' : 'Pending'}
                            </span>
                          </div>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed mb-3">
                          {node.description}
                        </p>
                        
                        {/* Additional Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                          {node.responsible && (
                            <div className="flex items-center text-slate-400">
                              <Users className="w-3 h-3 mr-1" />
                              <span>Responsible: {node.responsible}</span>
                            </div>
                          )}
                          {node.tools && node.tools.length > 0 && (
                            <div className="flex items-center text-slate-400">
                              <Settings className="w-3 h-3 mr-1" />
                              <span>Tools: {node.tools.join(', ')}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Tips */}
                        {node.tips && node.tips.length > 0 && (
                          <div className="mt-3 p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                            <div className="flex items-center text-blue-300 text-xs font-medium mb-1">
                              <Lightbulb className="w-3 h-3 mr-1" />
                              Tips
                            </div>
                            <ul className="text-xs text-blue-200 space-y-1">
                              {node.tips.map((tip, tipIndex) => (
                                <li key={tipIndex} className="flex items-start">
                                  <span className="text-blue-400 mr-1">•</span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Modal Actions */}
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <motion.button
                    className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </motion.button>
                </div>
                <motion.button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-emerald-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
