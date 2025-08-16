import React from 'react';
import { Map, ArrowLeft, Shield, FileText, Cookie, Users, Eye, Scale } from 'lucide-react';

export default function PathFinderLegal() {
  const [activeSection, setActiveSection] = React.useState('privacy');

  const sections = [
    { id: 'privacy', title: 'Privacy Policy', icon: Shield },
    { id: 'terms', title: 'Terms of Service', icon: FileText },
    { id: 'cookies', title: 'Cookie Policy', icon: Cookie },
    { id: 'data', title: 'Data Protection', icon: Eye },
    { id: 'community', title: 'Community Guidelines', icon: Users },
    { id: 'disclaimer', title: 'Legal Disclaimer', icon: Scale },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Map className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-white">PathFinder</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 flex">
        {/* Sidebar */}
        <div className="w-80 bg-gray-800 min-h-screen border-r border-gray-700 sticky top-16">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Legal Information</h2>
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all text-left ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {section.title}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="w-full">
            {activeSection === 'privacy' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
                  <p className="text-gray-400">Last updated: January 2025</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
                  <div className="text-gray-300 space-y-4">
                    <p><strong className="text-white">Personal Information:</strong> When you create an account, we collect your name, email address, age range, and educational background.</p>
                    <p><strong className="text-white">Usage Data:</strong> We collect information about how you use PathFinder, including learning progress, time spent on different modules, and interaction patterns.</p>
                    <p><strong className="text-white">Device Information:</strong> We may collect device identifiers, operating system information, and app version data for technical support and optimization.</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>• <strong className="text-white">Personalization:</strong> To create customized learning roadmaps and provide relevant career guidance</p>
                    <p>• <strong className="text-white">Communication:</strong> To send you important updates, learning reminders, and support messages</p>
                    <p>• <strong className="text-white">Improvement:</strong> To analyze app performance and enhance user experience</p>
                    <p>• <strong className="text-white">Safety:</strong> To ensure compliance with our community guidelines and protect user safety</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Data Protection for Minors</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>PathFinder serves users aged 10-25, including minors under 18. We take extra precautions to protect younger users:</p>
                    <p>• <strong className="text-white">Parental Consent:</strong> Users under 13 require parental consent before creating an account</p>
                    <p>• <strong className="text-white">Limited Data Collection:</strong> We collect only essential information needed for educational purposes</p>
                    <p>• <strong className="text-white">No Advertising:</strong> We don't use minor's data for advertising or marketing purposes</p>
                    <p>• <strong className="text-white">Secure Storage:</strong> All minor user data is encrypted and stored with enhanced security measures</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>You have the right to:</p>
                    <p>• <strong className="text-white">Access:</strong> Request a copy of your personal data</p>
                    <p>• <strong className="text-white">Correction:</strong> Update or correct inaccurate information</p>
                    <p>• <strong className="text-white">Deletion:</strong> Request deletion of your account and data</p>
                    <p>• <strong className="text-white">Portability:</strong> Export your learning data to another service</p>
                    <p>• <strong className="text-white">Objection:</strong> Opt out of certain data processing activities</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'terms' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <FileText className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
                  <p className="text-gray-400">Last updated: January 2025</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-300">By downloading, installing, or using PathFinder, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Service Description</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>PathFinder is an educational mobile application that provides:</p>
                    <p>• Personalized learning roadmaps for career development</p>
                    <p>• AI-powered mentoring and guidance</p>
                    <p>• Career insights and market trend analysis</p>
                    <p>• Educational resources and skill assessments</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">User Responsibilities</h2>
                  <div className="text-gray-300 space-y-4">
                    <p><strong className="text-white">Accurate Information:</strong> You must provide truthful and accurate information when creating your account and profile.</p>
                    <p><strong className="text-white">Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials.</p>
                    <p><strong className="text-white">Appropriate Use:</strong> You agree to use PathFinder only for legitimate educational and career development purposes.</p>
                    <p><strong className="text-white">Compliance:</strong> You must comply with all applicable laws and our Community Guidelines.</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Prohibited Activities</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>You may not:</p>
                    <p>• Use the service for any unlawful purpose or to violate any laws</p>
                    <p>• Share inappropriate content or engage in harassment</p>
                    <p>• Attempt to hack, reverse engineer, or compromise our systems</p>
                    <p>• Create multiple accounts or impersonate others</p>
                    <p>• Use automated systems to access our service without permission</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h2>
                  <p className="text-gray-300">PathFinder is provided "as is" for educational purposes. We do not guarantee specific career outcomes or job placements. Our liability is limited to the maximum extent permitted by law.</p>
                </div>
              </div>
            )}

            {activeSection === 'cookies' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <Cookie className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold text-white mb-2">Cookie Policy</h1>
                  <p className="text-gray-400">Last updated: January 2025</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">What Are Cookies?</h2>
                  <p className="text-gray-300">Cookies are small text files stored on your device when you use PathFinder. They help us provide a better user experience by remembering your preferences and analyzing usage patterns.</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                  <div className="text-gray-300 space-y-4">
                    <p><strong className="text-white">Essential Cookies:</strong> Required for the app to function properly, including authentication and security.</p>
                    <p><strong className="text-white">Analytics Cookies:</strong> Help us understand how users interact with PathFinder to improve our service.</p>
                    <p><strong className="text-white">Preference Cookies:</strong> Remember your settings and personalization choices.</p>
                    <p><strong className="text-white">Performance Cookies:</strong> Monitor app performance and identify technical issues.</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Managing Cookies</h2>
                  <p className="text-gray-300">You can control cookie settings through your device settings. However, disabling certain cookies may affect app functionality and your user experience.</p>
                </div>
              </div>
            )}

            {activeSection === 'data' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <Eye className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold text-white mb-2">Data Protection</h1>
                  <p className="text-gray-400">How we protect your information</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Security Measures</h2>
                  <div className="text-gray-300 space-y-4">
                    <p><strong className="text-white">Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols.</p>
                    <p><strong className="text-white">Access Controls:</strong> Strict access controls limit who can view your personal information.</p>
                    <p><strong className="text-white">Regular Audits:</strong> We conduct regular security audits and vulnerability assessments.</p>
                    <p><strong className="text-white">Data Minimization:</strong> We collect only the data necessary to provide our services.</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Data Retention</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We retain your data only as long as necessary to provide our services:</p>
                    <p>• <strong className="text-white">Active Accounts:</strong> Data retained while your account is active</p>
                    <p>• <strong className="text-white">Inactive Accounts:</strong> Automatically deleted after 2 years of inactivity</p>
                    <p>• <strong className="text-white">Legal Requirements:</strong> Some data may be retained longer for legal compliance</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">International Transfers</h2>
                  <p className="text-gray-300">If we transfer your data internationally, we ensure appropriate safeguards are in place to protect your privacy rights, including standard contractual clauses and adequacy decisions.</p>
                </div>
              </div>
            )}

            {activeSection === 'community' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold text-white mb-2">Community Guidelines</h1>
                  <p className="text-gray-400">Creating a safe learning environment</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Our Values</h2>
                  <div className="text-gray-300 space-y-4">
                    <p><strong className="text-white">Respect:</strong> Treat all users with dignity and kindness, regardless of background or experience level.</p>
                    <p><strong className="text-white">Inclusivity:</strong> PathFinder welcomes learners from all backgrounds, cultures, and identities.</p>
                    <p><strong className="text-white">Growth:</strong> Support each other's learning journey with constructive feedback and encouragement.</p>
                    <p><strong className="text-white">Safety:</strong> Maintain a harassment-free environment for all users, especially younger learners.</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Prohibited Content</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>The following content is not allowed on PathFinder:</p>
                    <p>• Harassment, bullying, or discrimination</p>
                    <p>• Inappropriate content involving minors</p>
                    <p>• Spam, misleading information, or fraudulent content</p>
                    <p>• Content promoting illegal activities or harm</p>
                    <p>• Copyright infringement or unauthorized sharing</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Reporting and Enforcement</h2>
                  <p className="text-gray-300">If you encounter content that violates our guidelines, please report it immediately. We review all reports and may take action including warnings, content removal, or account suspension.</p>
                </div>
              </div>
            )}

            {activeSection === 'disclaimer' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <Scale className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold text-white mb-2">Legal Disclaimer</h1>
                  <p className="text-gray-400">Important legal information</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Educational Purpose</h2>
                  <p className="text-gray-300">PathFinder provides educational guidance and career information for informational purposes only. We do not guarantee specific outcomes, job placements, or career success.</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">AI-Generated Content</h2>
                  <p className="text-gray-300">Our AI mentoring feature provides automated responses based on general knowledge and patterns. This should not replace professional career counseling or personalized advice from qualified advisors.</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Third-Party Content</h2>
                  <p className="text-gray-300">PathFinder may link to or reference third-party resources. We are not responsible for the accuracy, content, or availability of external websites or services.</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
                  <div className="text-gray-300 space-y-2">
                    <p><strong className="text-white">Email:</strong> legal@pathfinder.app</p>
                    <p><strong className="text-white">Address:</strong> PathFinder Legal Team, 123 Education Ave, Tech City, TC 12345</p>
                    <p><strong className="text-white">Response Time:</strong> We aim to respond to legal inquiries within 5 business days</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}