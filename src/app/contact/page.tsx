'use client';

import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  Phone,
  Mail,
  Wrench,
  MessageSquare,
  Users,
  Shield,
  Clock,
  MapPin,
  Globe
} from 'lucide-react';
import Link from 'next/link';

interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  email: string;
  icon: React.ReactNode;
  category: 'technical' | 'general';
  description: string;
}

const contactPeople: ContactPerson[] = [
  {
    name: "Jun Kim",
    role: "Technical Technician",
    phone: "949 577 7030",
    email: "jkim@evnation.us",
    icon: <Wrench className="w-6 h-6" />,
    category: 'technical',
    description: "For technical problems, system issues, and technical support"
  },
  {
    name: "Neil Okun",
    role: "COO",
    phone: "949 309 4255",
    email: "neil@evnation.us",
    icon: <MessageSquare className="w-6 h-6" />,
    category: 'general',
    description: "For other questions, general inquiries, and non-technical support"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'technical': return 'from-blue-500 to-cyan-500';
    case 'general': return 'from-emerald-500 to-teal-500';
    default: return 'from-gray-500 to-slate-500';
  }
};

export default function ContactPage() {
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
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Contact & Support</h1>
                <p className="text-pink-200 text-sm">Get Help & Support</p>
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Contact & Support
                </span>
                <br />
                <span className="text-white">We're Here to Help</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Need assistance? Our dedicated team is ready to support you with any questions or technical issues.
                <br className="hidden md:block" />
                Choose the right person to contact based on your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {contactPeople.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300 h-full shadow-xl hover:shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center space-x-6 mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${getCategoryColor(person.category)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {person.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{person.name}</h3>
                        <p className="text-gray-300 text-lg">{person.role}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      {person.description}
                    </p>

                    {/* Contact Information */}
                    <div className="space-y-4">
                      {/* Phone */}
                      <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-400 text-sm">Phone Number</p>
                          <p className="text-white text-lg font-semibold">{person.phone}</p>
                        </div>
                        <a 
                          href={`tel:${person.phone.replace(/\s/g, '')}`}
                          className="px-4 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-colors duration-300"
                        >
                          Call
                        </a>
                      </div>

                      {/* Email */}
                      <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-400 text-sm">Email Address</p>
                          <p className="text-white text-lg font-semibold">{person.email}</p>
                        </div>
                        <a 
                          href={`mailto:${person.email}`}
                          className="px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-colors duration-300"
                        >
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Response Time */}
                <div className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Response Time</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We typically respond within 2-4 hours during business hours (9 AM - 6 PM PST).
                  </p>
                </div>

                {/* Business Hours */}
                <div className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Business Hours</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                    Saturday: 10:00 AM - 4:00 PM PST<br />
                    Sunday: Closed
                  </p>
                </div>

                {/* Emergency Support */}
                <div className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Emergency Support</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    For urgent technical issues affecting operations, please call directly and mention "Emergency" for priority support.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Suggestion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Globe className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Need More Help?</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  If you need additional assistance or have questions about our services, 
                  don't hesitate to reach out to our team.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://evnation.us" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Visit Our Website
                  </a>
                  <Link 
                    href="/"
                    className="px-6 py-3 border-2 border-white/30 text-white font-medium rounded-xl hover:border-pink-400 hover:text-pink-300 transition-all duration-300 transform hover:scale-105"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
