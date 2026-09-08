import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5 shadow-lg",
  };

  const variants = {
    primary: "bg-gradient-to-r from-brand-teal to-brand-mint text-brand-navy hover:shadow-glow-teal hover:brightness-105 active:brightness-95",
    secondary: "border border-white/20 hover:border-brand-teal/80 text-white hover:text-brand-mint bg-white/5 hover:bg-brand-teal/10 backdrop-blur-sm",
    outlineTeal: "border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-brand-navy transition-colors",
    dark: "bg-brand-navy-light border border-white/10 text-white hover:bg-brand-navy-card hover:border-brand-teal/50",
    ghost: "text-brand-muted hover:text-white hover:bg-white/5",
    mint: "bg-brand-mint text-brand-navy hover:bg-brand-mint-light hover:shadow-glow-mint",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedStyles}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${combinedStyles}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`group ${combinedStyles}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
