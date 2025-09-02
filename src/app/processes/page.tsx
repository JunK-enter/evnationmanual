'use client';

import { motion } from 'framer-motion';
import { 
  Play, 
  CheckCircle, 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  Plus,
  Star,
  Zap,
  Shield,
  Heart,
  ArrowLeft
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
}

const processFlows: ProcessFlow[] = [
  {
    id: '1',
    title: 'Client Onboarding Process',
    description: 'Complete client acquisition and project initiation workflow',
    totalSteps: 6,
    estimatedTime: '2-3 weeks',
    difficulty: 'intermediate',
    successRate: 95,
    nodes: [
      {
        id: '1-1',
        title: 'Initial Contact',
        description: 'First client interaction and needs assessment',
        step: 1,
        icon: <Users className="w-6 h-6" />,
        status: 'completed',
        category: 'planning'
      },
      {
        id: '1-2',
        title: 'Site Survey',
        description: 'Comprehensive site analysis and requirements gathering',
        step: 2,
        icon: <Target className="w-6 h-6" />,
        status: 'completed',
        category: 'planning'
      },
      {
        id: '1-3',
        title: 'Proposal Creation',
        description: 'Detailed project proposal and cost estimation',
        step: 3,
        icon: <CheckCircle className="w-6 h-6" />,
        status: 'in-progress',
        category: 'execution'
      },
      {
        id: '1-4',
        title: 'Contract Signing',
        description: 'Legal agreement and project terms finalization',
        step: 4,
        icon: <Shield className="w-6 h-6" />,
        status: 'pending',
        category: 'execution'
      },
      {
        id: '1-5',
        title: 'Project Planning',
        description: 'Detailed project timeline and resource allocation',
        step: 5,
        icon: <Target className="w-6 h-6" />,
        status: 'pending',
        category: 'planning'
      },
      {
        id: '1-6',
        title: 'Kickoff Meeting',
        description: 'Project initiation and team alignment',
        step: 6,
        icon: <Play className="w-6 h-6" />,
        status: 'pending',
        category: 'completion'
      }
    ]
  },
  {
    id: '2',
    title: 'Installation Execution',
    description: 'Step-by-step EV charger installation workflow',
    totalSteps: 8,
    estimatedTime: '1-2 weeks',
    difficulty: 'advanced',
    successRate: 98,
    nodes: [
      {
        id: '2-1',
        title: 'Site Preparation',
        description: 'Site clearing and safety setup',
        step: 1,
        icon: <Shield className="w-6 h-6" />,
        status: 'completed',
        category: 'planning'
      },
      {
        id: '2-2',
        title: 'Electrical Setup',
        description: 'Power infrastructure and wiring installation',
        step: 2,
        icon: <Zap className="w-6 h-6" />,
        status: 'completed',
        category: 'execution'
      },
      {
        id: '2-3',
        title: 'Charger Mounting',
        description: 'Physical charger installation and mounting',
        step: 3,
        icon: <Target className="w-6 h-6" />,
        status: 'in-progress',
        category: 'execution'
      },
      {
        id: '2-4',
        title: 'System Testing',
        description: 'Comprehensive functionality testing',
        step: 4,
        icon: <CheckCircle className="w-6 h-6" />,
        status: 'pending',
        category: 'quality'
      },
      {
        id: '2-5',
        title: 'Safety Verification',
        description: 'Safety protocols and compliance check',
        step: 5,
        icon: <Shield className="w-6 h-6" />,
        status: 'pending',
        category: 'quality'
      },
      {
        id: '2-6',
        title: 'Client Training',
        description: 'User operation and maintenance training',
        step: 6,
        icon: <Users className="w-6 h-6" />,
        status: 'pending',
        category: 'completion'
      },
      {
        id: '2-7',
        title: 'Final Inspection',
        description: 'Quality assurance and final approval',
        step: 7,
        icon: <CheckCircle className="w-6 h-6" />,
        status: 'pending',
        category: 'quality'
      },
      {
        id: '2-8',
        title: 'Project Completion',
        description: 'Handover and project closure',
        step: 8,
        icon: <Award className="w-6 h-6" />,
        status: 'pending',
        category: 'completion'
      }
    ]
  },
  {
    id: '3',
    title: 'Quality Assurance',
    description: 'Comprehensive quality control and testing procedures',
    totalSteps: 5,
    estimatedTime: '3-5 days',
    difficulty: 'intermediate',
    successRate: 99,
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
    description: 'Post-installation support and success tracking',
    totalSteps: 6,
    estimatedTime: 'Ongoing',
    difficulty: 'intermediate',
    successRate: 92,
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
    description: 'Continuous improvement and team development',
    totalSteps: 7,
    estimatedTime: 'Ongoing',
    difficulty: 'beginner',
    successRate: 88,
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

export default function ProcessesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ArrowLeft className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">Back to Home</h1>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Success Processes</h1>
                <p className="text-purple-200 text-sm">Process Workflows</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Page Header */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  EVnation Success
                </span>
                <br />
                <span className="text-white">Process</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Comprehensive process workflows that drive EVnation's success in EV charger installation.
                <br className="hidden md:block" />
                Each process is designed to ensure quality, efficiency, and client satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Process Flows */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {processFlows.map((flow, flowIndex) => (
                <div
                  key={flow.id}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300"
                >
                  {/* Flow Header */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-white">{flow.title}</h3>
                        <p className="text-purple-200">{flow.description}</p>
                      </div>
                    </div>
                    
                    {/* Flow Stats */}
                    <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                        {flow.totalSteps} Steps
                      </span>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                        {flow.estimatedTime}
                      </span>
                      <span className={`px-3 py-1 rounded-full border ${getDifficultyColor(flow.difficulty)}`}>
                        {flow.difficulty.charAt(0).toUpperCase() + flow.difficulty.slice(1)}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                        {flow.successRate}% Success Rate
                      </span>
                    </div>
                  </div>

                  {/* Process Nodes */}
                  <div className="relative">
                    {/* Connection Lines */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 -translate-y-1/2 hidden lg:block"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 relative z-10">
                      {flow.nodes.map((node, nodeIndex) => (
                        <div
                          key={node.id}
                          className="group"
                        >
                          <div className="relative">
                            {/* Node */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg">
                              {/* Step Number */}
                              <div className="flex items-center justify-between mb-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getStatusColor(node.status)}`}>
                                  {node.step}
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(node.status)} bg-opacity-20`}>
                                  {node.status === 'completed' ? 'Done' : node.status === 'in-progress' ? 'Active' : 'Pending'}
                                </span>
                              </div>

                              {/* Icon */}
                              <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(node.category)} rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200`}>
                                <div className="text-white">
                                  {node.icon}
                                </div>
                              </div>

                              {/* Content */}
                              <h4 className="text-sm font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2 leading-tight">
                                {node.title}
                              </h4>
                              
                              <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">
                                {node.description}
                              </p>

                              {/* Category Badge */}
                              <div className="mt-3">
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(node.category)} bg-opacity-20 text-white border border-current border-opacity-30`}>
                                  {node.category.charAt(0).toUpperCase() + node.category.slice(1)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flow Actions */}
                  <div className="flex justify-center mt-8">
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">
                      View Full Process
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="mt-16 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Process-Driven Success
                </h3>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Our structured processes ensure consistent quality, efficient execution, and exceptional client outcomes. 
                  Each workflow is continuously optimized based on real-world performance data and team feedback.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Structured Approach</h4>
                    <p className="text-gray-300 text-sm">Clear, step-by-step processes that eliminate confusion and ensure consistency.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Continuous Improvement</h4>
                    <p className="text-gray-300 text-sm">Regular process optimization based on performance metrics and feedback.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Proven Results</h4>
                    <p className="text-gray-300 text-sm">High success rates and consistent client satisfaction across all processes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
