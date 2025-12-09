import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Building2, Shield, AlertTriangle } from 'lucide-react';

const TermsAndConditions = ()=> {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const Section = ({ id, title, children, icon: Icon }) => {
    const isExpanded = expandedSections[id];
    
    return (
      <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
        <button
          onClick={() => toggleSection(id)}
          className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
        >
          <div className="flex items-center gap-3">
            {Icon && <Icon className="w-5 h-5 text-blue-600" />}
            <h2 className="text-lg font-semibold text-gray-900 text-left">{title}</h2>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        {isExpanded && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AdsReacher</h1>
              <p className="text-sm text-gray-600">Terms & Conditions</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Last Updated:</span>
            <span className="font-medium">28-11-2025</span>
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Company:</strong> VELLARATION TECHNOLOGIES PRIVATE LIMITED<br />
              <strong>Service Name:</strong> AdsReacher – One-Click Ads Tool<br />
              <strong>Contact:</strong> vellarationtechnologies@gmail.com
            </p>
          </div>
        </div>

        {/* Sections */}
        <Section id="acceptance" title="1. Acceptance of Terms" icon={Shield}>
          <p className="text-gray-700 mb-3">
            By accessing or using AdsReacher ("Service"), you agree to be bound by these Terms & Conditions.
            If you do not agree, please stop using the Service immediately.
          </p>
          <p className="text-gray-700 font-semibold mb-2">These Terms apply to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li>All users of the Software</li>
            <li>Businesses using our ad creation features</li>
            <li>Anyone accessing the dashboard</li>
          </ul>
        </Section>

        <Section id="service" title="2. Description of Service">
          <p className="text-gray-700 mb-3">AdsReacher is a SaaS tool that helps users:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
            <li>Create Ads for Facebook, Instagram & WhatsApp</li>
            <li>Manage Ad Campaigns</li>
            <li>View analytics and performance</li>
            <li>Simplify ad creation with AI features</li>
          </ul>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Important:</strong> We DO NOT manage or guarantee ad approval on Meta platforms.
              Final ad delivery and performance depends on Meta (Facebook/Instagram).
            </p>
          </div>
        </Section>

        <Section id="eligibility" title="3. Eligibility">
          <p className="text-gray-700 mb-2">To use AdsReacher, you must:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li>Be at least 18 years old</li>
            <li>Own a valid Meta Business Account</li>
            <li>Have permission to run ads for the selected business</li>
          </ul>
        </Section>

        <Section id="responsibilities" title="4. User Responsibilities" icon={AlertTriangle}>
          <p className="text-gray-700 mb-3 font-semibold">You agree NOT to use AdsReacher for:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
            <li>Illegal, fraudulent, or misleading ads</li>
            <li>Ads violating Meta Advertising Policies</li>
            <li>Promoting hate speech, violence, adult content, or political disinformation</li>
            <li>Creating ads for someone else without authorization</li>
          </ul>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-gray-700">
              Meta may reject ads without notice. AdsReacher is not responsible for ad rejections or account restrictions.
            </p>
          </div>
        </Section>

        <Section id="permissions" title="5. Meta API Permissions">
          <p className="text-gray-700 mb-3">By using AdsReacher, you grant permission to access:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
            <li>Your Business Account</li>
            <li>Ad Account IDs</li>
            <li>Page & Instagram Data</li>
            <li>WhatsApp Business Info</li>
            <li>Ad performance metrics</li>
          </ul>
          <p className="text-gray-700 mb-2">You can revoke permissions anytime via:</p>
          <a 
            href="https://www.facebook.com/settings/?tab=business_tools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline block mb-3"
          >
            https://www.facebook.com/settings/?tab=business_tools
          </a>
          <p className="text-gray-700 italic">
            If permissions are revoked, some features will stop working.
          </p>
        </Section>

        <Section id="payments" title="6. Payments & Billing">
          <p className="text-gray-700 mb-3">AdsReacher may charge for:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
            <li>Subscription plans</li>
            <li>Credits for ads</li>
            <li>Additional features</li>
          </ul>
          <p className="text-gray-700 mb-2 font-semibold">You agree that:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li>Payments are final and non-refundable unless required by law.</li>
            <li>Ad spend deducted inside Meta Ads Manager is separate from AdsReacher fees.</li>
            <li>Failed payments may lead to account suspension.</li>
          </ul>
        </Section>

        <Section id="refunds" title="7. Refund Policy">
          <div className="mb-4">
            <p className="mb-2 font-semibold text-green-700">Refunds are allowed ONLY if:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>You were charged mistakenly</li>
              <li>The system malfunctioned and no service was provided</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold text-red-700">Refunds are NOT issued if:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Meta disapproved your ads</li>
              <li>Ads performed poorly</li>
              <li>You changed your mind after ad submission</li>
            </ul>
          </div>
        </Section>

        <Section id="content" title="8. User Content">
          <p className="text-gray-700 mb-3">When uploading content (images, captions), you confirm that:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
            <li>You own the rights or have permission to use it</li>
            <li>It does not violate any copyright law</li>
            <li>It follows Meta Advertising Policies</li>
            <li>It does not contain harmful or prohibited content</li>
          </ul>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-gray-700 mb-2">
              You give AdsReacher a license to use the content only for ad creation.
            </p>
            <p className="text-gray-700 font-semibold">
              We DO NOT use your content for training AI or third-party sharing.
            </p>
          </div>
        </Section>

        <Section id="privacy" title="9. Data Protection & Security" icon={Shield}>
          <p className="text-gray-700 mb-3 font-semibold">We follow:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
            <li>Industry-standard encryption</li>
            <li>Secure login</li>
            <li>Token-based access to Meta APIs</li>
          </ul>
          <p className="text-gray-700 mb-2 font-semibold">We do NOT:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
            <li>Store sensitive Meta data unnecessarily</li>
            <li>Sell or share your personal information</li>
            <li>Store your Meta login password</li>
          </ul>
          <p className="text-gray-700 italic">See our Privacy Policy for full details.</p>
        </Section>

        <Section id="termination" title="10. Account Termination">
          <p className="text-gray-700 mb-3">We may suspend or terminate your account if:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
            <li>You violate these Terms</li>
            <li>Meta blocks your Business Account</li>
            <li>Fraudulent or suspicious activity is detected</li>
            <li>Payment failures occur</li>
          </ul>
          <p className="text-gray-700">
            You may close your account anytime by contacting support.
          </p>
        </Section>

        <Section id="availability" title="11. Service Availability & Limitations">
          <p className="text-gray-700 mb-3">
            AdsReacher depends on third-party APIs (Meta).
          </p>
          <p className="text-gray-700 mb-2">We cannot guarantee:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
            <li>100% uptime</li>
            <li>API availability</li>
            <li>Ad approval</li>
            <li>Cost per click or ad performance</li>
          </ul>
          <p className="text-gray-700 mb-2">We are not liable for losses caused by:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li>API outages</li>
            <li>Ad account restrictions</li>
            <li>Incorrect ad setup by users</li>
          </ul>
        </Section>

        <Section id="liability" title="12. Limitation of Liability" icon={AlertTriangle}>
          <p className="text-gray-700 mb-3">To the maximum extent permitted by law:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold">❌</span>
              <p className="text-gray-700">We are NOT responsible for business losses</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold">❌</span>
              <p className="text-gray-700">We are NOT liable for ad performance variations</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold">❌</span>
              <p className="text-gray-700">We do NOT guarantee profit, leads, or conversions</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold">❌</span>
              <p className="text-gray-700">We are NOT responsible for Meta account bans</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-gray-700 font-semibold">
              Your use of AdsReacher is at your own risk.
            </p>
          </div>
        </Section>

        <Section id="indemnification" title="13. Indemnification">
          <p className="text-gray-700 mb-3">
            You agree to protect and indemnify AdsReacher from any claims resulting from:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li>Your ads</li>
            <li>Your use of Meta APIs</li>
            <li>Your violation of Meta policies</li>
            <li>Your misuse of the platform</li>
          </ul>
        </Section>

        <Section id="ip" title="14. Intellectual Property">
          <p className="text-gray-700 mb-3">All:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
            <li>Software</li>
            <li>UI/UX</li>
            <li>Text</li>
            <li>Logos</li>
            <li>Branding</li>
          </ul>
          <p className="text-gray-700">
            Are owned by AdsReacher and protected under copyright law.
            You cannot copy, sell, or reproduce any part of the system.
          </p>
        </Section>

        <Section id="changes" title="15. Changes to Terms">
          <p className="text-gray-700 mb-3">
            We may update these Terms anytime. Users will be notified via:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
            <li>Email</li>
            <li>Website update</li>
            <li>Dashboard notification</li>
          </ul>
          <p className="text-gray-700 font-semibold">
            Continued use means you accept the updated Terms.
          </p>
        </Section>

        <Section id="law" title="16. Governing Law">
          <p className="text-gray-700 mb-3">These Terms are governed by:</p>
          <div className="space-y-2 mb-4">
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✔</span>
              <p className="text-gray-700">Indian Law (if your company is India-based)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✔</span>
              <p className="text-gray-700">GDPR (for EU users if applicable)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✔</span>
              <p className="text-gray-700">Meta Platform Policies</p>
            </div>
          </div>
          <p className="text-gray-700">
            Any disputes will be handled in the jurisdiction of: <strong>[Your city/state courts]</strong>
          </p>
        </Section>

        <Section id="contact" title="17. Contact Information" icon={Mail}>
          <p className="text-gray-700 mb-3">For support:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">vellarationtechnologies@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">VELLARATION TECHNOLOGIES PRIVATE LIMITED</span>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2024 AdsReacher. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
export default TermsAndConditions;