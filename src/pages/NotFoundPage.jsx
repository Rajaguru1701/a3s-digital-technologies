import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center bg-brand-navy px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="text-7xl font-extrabold text-gradient-teal">
          404
        </div>
        <h1 className="text-3xl font-bold text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-brand-muted">
          The page you are looking for might have been moved, removed, or is temporarily unavailable.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={Home}
            iconPosition="left"
          >
            Back to Home
          </Button>
          <Button
            to="/services"
            variant="secondary"
            size="md"
          >
            Our Services
          </Button>
        </div>
      </div>
    </div>
  );
}
