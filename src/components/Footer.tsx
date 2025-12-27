import React from 'react';
export function Footer() {
  return <footer className="py-8 bg-[#050816] border-t border-slate-900 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Muddassar Hussain. All rights
          reserved. | Built with passion for excellence
        </p>
      </div>
    </footer>;
}