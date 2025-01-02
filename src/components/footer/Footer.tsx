import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Free YouTube Thumbnail Analyzer</h3>
            <p className="text-sm text-gray-600">
              AI-powered thumbnail analysis to help you grow your YouTube channel
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="hover:text-blue-600">Disclaimer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><a href="mailto:sadaludev@gmail.com" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-sm text-gray-600">
              Email: <a href="mailto:sadaludev@gmail.com" className="text-blue-600">sadaludev@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Free YouTube Thumbnail Analyzer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}