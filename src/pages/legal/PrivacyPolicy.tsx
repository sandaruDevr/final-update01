import React from 'react';
import { Shield, Lock, Eye, Bell } from 'lucide-react';
import { typography } from '../../styles/typography';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className={`${typography.heading} text-3xl mb-8 text-center`}>Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-blue-500" />
              <h2 className={`${typography.heading} text-xl`}>Data Protection</h2>
            </div>
            <p className="text-gray-600">
              We take the protection of your data seriously. All thumbnail images are processed securely and are not stored permanently on our servers. Analysis results are only kept temporarily to provide you with the service.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Eye className="h-6 w-6 text-blue-500" />
              <h2 className={`${typography.heading} text-xl`}>Information We Collect</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>Thumbnail images you upload for analysis (temporarily)</li>
              <li>Basic usage analytics to improve our service</li>
              <li>Device and browser information for compatibility</li>
              <li>Email address (only for premium users)</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Lock className="h-6 w-6 text-blue-500" />
              <h2 className={`${typography.heading} text-xl`}>Security Measures</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>Secure SSL encryption for all data transfers</li>
              <li>Regular security audits and updates</li>
              <li>Limited data retention periods</li>
              <li>Strict access controls for all systems</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-6 w-6 text-blue-500" />
              <h2 className={`${typography.heading} text-xl`}>Updates to This Policy</h2>
            </div>
            <p className="text-gray-600">
              We may update this privacy policy occasionally to reflect changes in our practices or for legal reasons. We will notify you of any material changes by posting the new policy on this page.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>

          <section className="border-t pt-6">
            <p className="text-gray-600">
              For questions about our privacy practices, contact us at:{' '}
              <a href="mailto:sadaludev@gmail.com" className="text-blue-600 hover:underline">
                sadaludev@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}