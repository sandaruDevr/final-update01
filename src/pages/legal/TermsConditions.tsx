import React from 'react';
import { Scale, Shield, AlertTriangle, HelpCircle } from 'lucide-react';
import { typography } from '../../styles/typography';

export function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className={`${typography.heading} text-3xl mb-8 text-center`}>Terms and Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6 text-blue-500" />
              <h2 className={`${typography.heading} text-xl`}>Service Terms</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>You must be at least 13 years old to use this service</li>
              <li>You must own or have rights to use the thumbnails you upload</li>
              <li>You agree not to misuse or attempt to exploit the service</li>
              <li>We reserve the right to terminate access for violations</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-blue-500" />
              <h2 className={`${typography.heading} text-xl`}>Intellectual Property</h2>
            </div>
            <p className="text-gray-600">
              All content, features, and functionality of our service are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-6 w-6 text-blue-500" />
              <h2 className={`${typography.heading} text-xl`}>Limitations</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>The service is provided "as is" without warranties</li>
              <li>We are not responsible for third-party content</li>
              <li>We may modify or discontinue services at any time</li>
              <li>Usage limits apply to free accounts</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="h-6 w-6 text-blue-500" />
              <h2 className={`${typography.heading} text-xl`}>Support</h2>
            </div>
            <p className="text-gray-600">
              For questions about these terms or to report violations, contact us at:{' '}
              <a href="mailto:sadaludev@gmail.com" className="text-blue-600 hover:underline">
                sadaludev@gmail.com
              </a>
            </p>
          </section>

          <section className="border-t pt-6">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}