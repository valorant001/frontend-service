import React, { useState } from 'react';
import { Shield, Lock, Eye, Database, Users, FileText, Mail, AlertCircle } from 'lucide-react';

const PrivacyPolicy =() => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'intro', title: 'Introduction', icon: Shield },
    { id: 'collection', title: 'Information We Collect', icon: Database },
    { id: 'usage', title: 'How We Use Information', icon: Eye },
    { id: 'meta', title: 'Meta API Compliance', icon: Lock },
    { id: 'security', title: 'Data Storage & Security', icon: Shield },
    { id: 'rights', title: 'Your Rights', icon: Users },
    { id: 'sharing', title: 'Data Sharing', icon: FileText },
    { id: 'contact', title: 'Contact Us', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <Lock className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AdsReacher Privacy Policy</h1>
              <p className="text-sm text-gray-600 mt-1">Meta-Compliant & User-Focused</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <nav className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">Quick Navigation</h2>
              <ul className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors ${
                          activeSection === section.id
                            ? 'bg-blue-50 text-blue-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{section.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {/* Last Updated */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Last Updated: 28-Nov-2025</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Website/App Name: AdsReacher – One-Click Ads Tool<br />
                      Company: VELLARATION TECHNOLOGIES PRIVATE LIMITED<br />
                      Contact: vellarationtechnologies@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1: Introduction */}
              <section id="intro" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-blue-600" />
                  Introduction
                </h2>
                <div className="prose prose-blue max-w-none text-gray-700">
                  <p>
                    AdsReacher ("we", "our", "us") provides a simple platform that helps users create, manage, and optimize advertisements across Meta platforms including Facebook, Instagram, and WhatsApp.
                  </p>
                  <p className="font-medium mt-4">This Privacy Policy explains:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>What data we collect</li>
                    <li>How we use it</li>
                    <li>How we store and protect it</li>
                    <li>How users can control their data</li>
                    <li>How we comply with Meta Developer Policies</li>
                  </ul>
                  <p className="mt-4 font-medium">
                    By using AdsReacher, users agree to this Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Section 2: Information Collection */}
              <section id="collection" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-2 text-blue-600" />
                  Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">A. Information Users Provide Directly</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Name</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Business Name</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Email Address</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Phone Number</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Profile Setup Details</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Uploaded Images (used only for ad creation)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Ad Caption / Text entered by user</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">B. Information Collected via Meta APIs (With User Consent)</h3>
                    <p className="text-gray-700 mb-4">When users connect their Facebook/Instagram/WhatsApp account, AdsReacher may access:</p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Facebook/Instagram Page ID</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Business ID</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Ad Account ID</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Basic Page Information (name, category, profile photo)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Ad performance insights</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>WhatsApp Number ID (if applicable)</li>
                    </ul>
                    <p className="font-semibold text-blue-900">We ONLY access data explicitly granted through permissions.</p>
                    <div className="mt-4 bg-white rounded p-4">
                      <p className="font-semibold text-gray-900 mb-2">We DO NOT access:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li className="flex items-center"><span className="text-red-600 mr-2">❌</span>Friends list</li>
                        <li className="flex items-center"><span className="text-red-600 mr-2">❌</span>Messages</li>
                        <li className="flex items-center"><span className="text-red-600 mr-2">❌</span>Personal account posts</li>
                        <li className="flex items-center"><span className="text-red-600 mr-2">❌</span>Login-level information not required for running ads</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">C. Payment Information</h3>
                    <p className="text-gray-700">
                      We DO NOT store card or payment details. All payments are processed securely through [your payment provider].
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Usage */}
              <section id="usage" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-2 text-blue-600" />
                  How We Use This Information
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                  <p className="text-gray-700 mb-4">AdsReacher uses the collected data ONLY to:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✔</span>
                      <span>Create and manage ads on behalf of the user</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✔</span>
                      <span>Provide real-time analytics & reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✔</span>
                      <span>Improve ad performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✔</span>
                      <span>Offer customer support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✔</span>
                      <span>Comply with Meta Marketing API policies</span>
                    </li>
                  </ul>
                  <p className="mt-6 font-bold text-gray-900 text-lg">
                    We NEVER sell or share user data with any 3rd party.
                  </p>
                </div>
              </section>

              {/* Section 4: Meta Compliance */}
              <section id="meta" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-2 text-blue-600" />
                  Meta API Limited Use Requirements
                </h2>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <p className="font-semibold text-green-900 mb-3">AdsReacher fully complies with:</p>
                    <ul className="space-y-2 text-green-800">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Meta Platform Terms</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Facebook Marketing API Terms</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Instagram Graph API Terms</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>WhatsApp Business API Terms</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <p className="font-semibold text-red-900 mb-3">AdsReacher WILL NOT:</p>
                    <ul className="space-y-2 text-red-800">
                      <li className="flex items-center"><span className="text-red-600 mr-2">❌</span>Use data to build user profiles</li>
                      <li className="flex items-center"><span className="text-red-600 mr-2">❌</span>Sell or transfer Meta data</li>
                      <li className="flex items-center"><span className="text-red-600 mr-2">❌</span>Store Meta data longer than necessary</li>
                      <li className="flex items-center"><span className="text-red-600 mr-2">❌</span>Combine Meta data with 3rd-party data</li>
                      <li className="flex items-center"><span className="text-red-600 mr-2">❌</span>Use data for any purpose outside the user's direct actions</li>
                    </ul>
                    <p className="mt-4 font-semibold text-red-900">
                      AdsReacher ONLY processes data for the user who granted the permissions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Security */}
              <section id="security" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-blue-600" />
                  Data Storage & Security
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="font-semibold text-gray-900 mb-3">We use industry-standard security practices:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Encrypted database storage</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>HTTPS-only communication</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Access control and token protection</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>No long-term storage of sensitive API data</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <p className="font-semibold text-gray-900 mb-3">User data is deleted:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>On user request</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Automatically if a user revokes Meta permissions</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>When an account is deleted</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: User Rights */}
              <section id="rights" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-blue-600" />
                  Your Rights
                </h2>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
                  <p className="font-semibold text-gray-900 mb-4">Users can:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">▸</span>
                      <span>Request a copy of their data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">▸</span>
                      <span>Request deletion of their data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">▸</span>
                      <span>Revoke Meta permissions anytime</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">▸</span>
                      <span>Disconnect their Meta accounts</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    Contact <span className="font-semibold">[your support email]</span> for any data requests.
                  </p>
                </div>
              </section>

              {/* Section 7: Data Sharing */}
              <section id="sharing" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-blue-600" />
                  Data Sharing & Disclosure
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 font-semibold">We DO NOT share user data except:</p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="font-semibold text-green-900 flex items-center mb-2">
                      <span className="text-green-600 mr-2">✔</span>
                      With Meta Platforms
                    </p>
                    <p className="text-green-800 ml-6">For the purpose of running ads.</p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="font-semibold text-yellow-900 flex items-center mb-2">
                      <span className="text-yellow-600 mr-2">✔</span>
                      With Legal Authorities
                    </p>
                    <p className="text-yellow-800 ml-6">Only if required by law.</p>
                  </div>

                  <p className="text-gray-900 font-bold text-lg mt-4">
                    We never sell or rent personal information.
                  </p>
                </div>
              </section>

              {/* Additional Sections */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies & Tracking</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-3">We may use cookies for:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Login sessions</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Analytics</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Security</li>
                  </ul>
                  <p className="text-gray-700 font-medium">
                    We do NOT use cookies to track users across websites.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <p className="text-gray-700">
                    AdsReacher does not target or allow users under the age of 18, as ads require Meta Business Accounts.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-3">We may update this privacy policy. Users will be notified through:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Email OR</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>App notification</li>
                  </ul>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-blue-600" />
                  Contact Us
                </h2>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                  <p className="mb-4">If you have any questions about this policy, contact:</p>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      📧 [your support email]
                    </p>
                    <p className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      🏢 [Your company address]
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} AdsReacher. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Committed to protecting your privacy and data security.</p>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;