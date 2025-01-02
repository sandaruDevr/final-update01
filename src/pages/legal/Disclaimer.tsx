import React from 'react';
import { AlertCircle } from 'lucide-react';
import { typography } from '../../styles/typography';

export function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className={`${typography.heading} text-3xl mb-8`}>Disclaimer</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="h-6 w-6 text-amber-500" />
              <h2 className={`${typography.heading} text-xl`}>General Disclaimer</h2>
            </div>
            <p className="text-gray-600">
              The Free YouTube Thumbnail Analyzer provides analysis and suggestions based on AI algorithms and general best practices. While we strive for accuracy, we cannot guarantee specific results or improvements in YouTube performance.
            </p>
          </section>

          <section>
            <h2 className={`${typography.heading} text-xl mb-4`}>No Guarantees</h2>
            <p className="text-gray-600">
              The analysis and recommendations provided are for informational purposes only. Success on YouTube depends on many factors beyond thumbnail optimization.
            </p>
          </section>

          <section>
            <h2 className={`${typography.heading} text-xl mb-4`}>Third-Party Services</h2>
            <p className="text-gray-600">
              We use third-party services for analysis and processing. While we carefully select our partners, we are not responsible for their services or any issues arising from their use.
            </p>
          </section>

          <section>
            <h2 className={`${typography.heading} text-xl mb-4`}>Updates</h2>
            <p className="text-gray-600">
              This disclaimer was last updated on {new Date().toLocaleDateString()} and may be updated periodically. Continued use of our service constitutes acceptance of any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}