import React, { useState, useEffect } from 'react';
import { User, GraduationCap, Trophy, BookOpen, Bot, Briefcase, ExternalLink, ChevronRight, X } from 'lucide-react';

export default function PortfolioSite() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState('education');
  const [activeRobot, setActiveRobot] = useState(null);
  const [robotAnimating, setRobotAnimating] = useState(false);

  const handleEnterSite = () => {
    setShowLanding(false);
  };

  // Landing Page - ID Card
  if (showLanding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
        <div className="relative">
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* ID Card */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full transform hover:scale-105 transition-all duration-500 animate-float">
            {/* Holographic effect overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-400/20 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="text-center border-b border-white/30 pb-4">
                <div className="text-sm text-white/70 uppercase tracking-widest mb-1">Digital Identity</div>
                <div className="text-xs text-white/50">Portfolio Access Card</div>
              </div>

              {/* Profile Picture Placeholder */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center border-4 border-white/30 shadow-xl">
                    <User className="w-20 h-20 text-white" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  {/* Scanning line effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute w-full h-1 bg-cyan-400/50 animate-scan" />
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold text-white tracking-wide">YOUR NAME</h1>
                <p className="text-white/70 text-sm">Professional Title / Role</p>
              </div>

              {/* QR Code Placeholder */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-white rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-white p-4 rounded-2xl">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
                      <div className="text-white text-xs">QR CODE</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enter Button */}
              <button
                onClick={handleEnterSite}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 group"
              >
                Know me more!
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* ID Number */}
              <div className="text-center text-white/50 text-xs">
                ID: {new Date().getFullYear()}-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(4000%); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-scan {
            animation: scan 3s linear infinite;
          }
        `}</style>
      </div>
    );
  }

  // Main Portfolio Site
  const tabs = [
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'leadership', label: 'Leadership', icon: Trophy },
    { id: 'research', label: 'Research', icon: BookOpen },
    { id: 'robotics', label: 'Robotics', icon: Bot },
    { id: 'experience', label: 'Experience', icon: Briefcase }
  ];

  const robotProjects = [
    { id: 1, name: 'Robot Project 1', description: 'Advanced autonomous navigation system' },
    { id: 2, name: 'Robot Project 2', description: 'Machine learning vision system' },
    { id: 3, name: 'Robot Project 3', description: 'Collaborative robotic arm' }
  ];

  const handleRobotClick = (projectId) => {
    setActiveRobot(projectId);
    setRobotAnimating(true);
    setTimeout(() => setRobotAnimating(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-white font-bold text-xl">Portfolio</div>
            <div className="flex gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setActiveRobot(null);
                    }}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden md:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="animate-fadeIn">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="w-10 h-10 text-purple-400" />
                Education
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Profile Image */}
                <div className="flex justify-center items-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center border border-white/20">
                      <User className="w-32 h-32 text-white/50" />
                    </div>
                  </div>
                </div>
                
                {/* Education Details */}
                <div className="space-y-6">
                  {[
                    { degree: 'Bachelor of Science', field: 'Computer Science', school: 'University Name', year: '2020-2024' },
                    { degree: 'High School Diploma', field: 'STEM Track', school: 'High School Name', year: '2016-2020' }
                  ].map((edu, idx) => (
                    <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-purple-300 text-lg mb-1">{edu.field}</p>
                      <p className="text-white/70">{edu.school}</p>
                      <p className="text-white/50 text-sm mt-2">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leadership Tab */}
        {activeTab === 'leadership' && (
          <div className="animate-fadeIn">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                <Trophy className="w-10 h-10 text-yellow-400" />
                Leadership
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                      <Trophy className="w-20 h-20 text-white/50" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Leadership Role {item}</h3>
                      <p className="text-white/70 text-sm mb-3">Organization Name</p>
                      <p className="text-white/60 text-sm">Description of your leadership role and achievements in this position.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Research Tab */}
        {activeTab === 'research' && (
          <div className="animate-fadeIn">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                <BookOpen className="w-10 h-10 text-blue-400" />
                Research
              </h2>
              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <div key={item} className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-48 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-20 h-20 text-white/50" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">Research Paper Title {item}</h3>
                        <p className="text-white/70 mb-4">Brief description of your research work, methodology, and key findings in this research forum.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Machine Learning</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">AI</span>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-300">
                          View Paper <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Robotics Tab */}
        {activeTab === 'robotics' && !activeRobot && (
          <div className="animate-fadeIn">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                <Bot className="w-10 h-10 text-green-400 animate-bounce" />
                Robotics Projects
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {robotProjects.map((project) => (
                  <div key={project.id} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    <div className="h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                      <Bot className="w-20 h-20 text-white/50 animate-pulse" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                      <p className="text-white/60 text-sm mb-4">{project.description}</p>
                      <button
                        onClick={() => handleRobotClick(project.id)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Robot Detail View */}
        {activeTab === 'robotics' && activeRobot && (
          <div className="animate-fadeIn">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <button
                onClick={() => setActiveRobot(null)}
                className="mb-6 text-white/70 hover:text-white flex items-center gap-2 transition-colors"
              >
                <X className="w-5 h-5" /> Back to Projects
              </button>
              <div className="flex flex-col items-center">
                <div className={`relative w-64 h-64 ${robotAnimating ? 'animate-spin360' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl opacity-50" />
                  <div className="relative w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border-4 border-green-400/30">
                    <Bot className="w-32 h-32 text-green-400" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mt-8 mb-4">
                  {robotProjects.find(p => p.id === activeRobot)?.name}
                </h3>
                <p className="text-white/70 text-center max-w-2xl mb-6">
                  Detailed information about this robotics project. Technical specifications, achievements, and implementation details go here.
                </p>
                <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="text-white font-bold mb-2">Technologies Used</h4>
                    <p className="text-white/60 text-sm">ROS, Python, Computer Vision, Machine Learning</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="text-white font-bold mb-2">Achievements</h4>
                    <p className="text-white/60 text-sm">Competition winner, Published research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="animate-fadeIn">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="w-10 h-10 text-indigo-400" />
                Experience
              </h2>
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-20 h-20 text-white/50" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">Position Title {item}</h3>
                        <p className="text-indigo-300 text-lg mb-1">Company Name</p>
                        <p className="text-white/50 text-sm mb-3">Jan 2023 - Present</p>
                        <p className="text-white/70">Description of your role, responsibilities, and key achievements in this position. Highlight major projects and contributions.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin360 {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-spin360 {
          animation: spin360 2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
