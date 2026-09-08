import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function MapEmbed() {
  return (
    <div className="rounded-3xl overflow-hidden border border-white/15 bg-brand-navy-light shadow-2xl relative">
      {/* Top Map Bar */}
      <div className="bg-brand-navy px-6 py-3.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-brand-teal" />
          <span className="text-xs font-semibold text-white">
            A3S Digital Technologies &bull; Koodal Nagar, Madurai
          </span>
        </div>
        <a
          href="https://maps.google.com/?q=51W,+Thiruvalluvar+Street,+Koodal+Nagar,+Madurai,+Tamil+Nadu+625018"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-mint hover:underline"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Open in Google Maps</span>
        </a>
      </div>

      {/* Embedded Map */}
      <div className="relative w-full h-80 sm:h-96 bg-brand-navy">
        <iframe
          title="A3S Digital Technologies Location"
          src={siteConfig.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
