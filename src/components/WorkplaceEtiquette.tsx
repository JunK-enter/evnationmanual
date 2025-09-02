'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Handshake, 
  MessageSquare, 
  Clock, 
  Shield, 
  Heart, 
  Target, 
  Award,
  CheckCircle
} from 'lucide-react';

interface EtiquetteItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'communication' | 'professionalism' | 'safety' | 'culture';
  importance: 'high' | 'medium' | 'low';
}

const etiquetteItems: EtiquetteItem[] = [
  {
    id: 1,
    title: "Professional Communication",
    description: "Always maintain respectful and clear communication with colleagues, clients, and stakeholders. Use appropriate language and tone in all interactions.",
    icon: <MessageSquare className="w-6 h-6" />,
    category: 'communication',
    importance: 'high'
  },
  {
    id: 2,
    title: "Team Collaboration",
    description: "Foster a collaborative environment by actively participating in team discussions, sharing knowledge, and supporting colleagues in achieving common goals.",
    icon: <Users className="w-6 h-6" />,
    category: 'culture',
    importance: 'high'
  },
  {
    id: 3,
    title: "Time Management",
    description: "Respect deadlines, arrive on time for meetings, and manage your schedule efficiently to ensure smooth project execution and team coordination.",
    icon: <Clock className="w-6 h-6" />,
    category: 'professionalism',
    importance: 'high'
  },
  {
    id: 4,
    title: "Safety First",
    description: "Prioritize safety in all work activities. Follow safety protocols, report hazards immediately, and ensure proper use of safety equipment.",
    icon: <Shield className="w-6 h-6" />,
    category: 'safety',
    importance: 'high'
  },
  {
    id: 5,
    title: "Client Relations",
    description: "Build and maintain positive relationships with clients through excellent service, clear communication, and exceeding expectations.",
    icon: <Handshake className="w-6 h-6" />,
    category: 'professionalism',
    importance: 'high'
  },
  {
    id: 6,
    title: "Continuous Improvement",
    description: "Embrace learning opportunities, seek feedback, and continuously improve your skills and knowledge to contribute to team success.",
    icon: <Target className="w-6 h-6" />,
    category: 'culture',
    importance: 'medium'
  },
  {
    id: 7,
    title: "Work-Life Balance",
    description: "Maintain a healthy work-life balance to ensure personal well-being and sustained professional performance.",
    icon: <Heart className="w-6 h-6" />,
    category: 'culture',
    importance: 'medium'
  },
  {
    id: 8,
    title: "Excellence Recognition",
    description: "Recognize and celebrate team achievements, individual contributions, and milestones to foster a positive and motivating work environment.",
    icon: <Award className="w-6 h-6" />,
    category: 'culture',
    importance: 'medium'
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'communication': return 'from-blue-500 to-cyan-500';
    case 'professionalism': return 'from-emerald-500 to-teal-500';
    case 'safety': return 'from-red-500 to-pink-500';
    case 'culture': return 'from-purple-500 to-indigo-500';
    default: return 'from-gray-500 to-slate-500';
  }
};

const getImportanceColor = (importance: string) => {
  switch (importance) {
    case 'high': return 'bg-red-500/20 text-red-300 border-red-500/30';
    case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    case 'low': return 'bg-green-500/20 text-green-300 border-green-500/30';
    default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  }
};

export default function WorkplaceEtiquette() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Workplace Etiquette
            </span>
            <br />
            <span className="text-white">Guidelines</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Essential guidelines for maintaining a professional, collaborative, and safe work environment at EVnation.
            <br className="hidden md:block" />
            These principles ensure our team operates with excellence and mutual respect.
          </p>
        </motion.div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {etiquetteItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 h-full shadow-xl hover:shadow-2xl">
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.id}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getImportanceColor(item.importance)}`}>
                    {item.importance === 'high' ? 'Critical' : item.importance === 'medium' ? 'Important' : 'Standard'}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(item.category)} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {item.description}
                </p>

                {/* Category Badge */}
                <div className="mt-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(item.category)} bg-opacity-20 text-white border border-current border-opacity-30`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Key Principles */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Key Principles</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our guidelines are built on the foundation of respect, professionalism, and continuous improvement.
              </p>
            </div>

            {/* Implementation */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                These guidelines are actively practiced and reinforced through regular team training and feedback.
              </p>
            </div>

            {/* Benefits */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Benefits</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Creating a positive work environment that enhances productivity, collaboration, and employee satisfaction.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
