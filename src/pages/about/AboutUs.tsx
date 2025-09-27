import React from 'react';
import { Users, Target, Shield } from 'lucide-react';
import { typography } from '../../styles/typography';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className={`${typography.heading} text-3xl mb-8 text-center`}>About Us</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
          <section className="text-center">
            <p className="text-lg text-gray-600">
              Free YouTube Thumbnail Analyzer is dedicated to helping content creators optimize their thumbnails and grow their channels through data-driven insights.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className={`${typography.heading} text-lg mb-2`}>Our Mission</h3>
              <p className="text-gray-600">Help creators succeed with powerful, free thumbnail optimization tools</p>
            </div>

            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className={`${typography.heading} text-lg mb-2`}>Our Vision</h3>
              <p className="text-gray-600">Make professional thumbnail analysis accessible to everyone</p>
            </div>

            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className={`${typography.heading} text-lg mb-2`}>Our Values</h3>
              <p className="text-gray-600">Transparency, reliability, and user privacy first</p>
            </div>
          </div>

          <section>
            <h2 className={`${typography.heading} text-xl mb-4`}>Contact Us</h2>
            <p className="text-gray-600">
              Have questions or suggestions? We'd love to hear from you!<br />
              Email us at: <a href="mailto:sadaludev@gmail.com" className="text-blue-600">sadaludev@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}