import React from 'react';

export function Badge({
  children,
  variant = 'teal',
  className = '',
  dot = true,
}) {
  const variants = {
    teal: 'bg-brand-teal/15 text-brand-mint border-brand-teal/30',
    purple: 'bg-brand-purple/20 text-purple-300 border-brand-purple/40',
    blue: 'bg-brand-blue/20 text-cyan-300 border-brand-blue/40',
    mint: 'bg-brand-mint/15 text-brand-mint border-brand-mint/30',
    dark: 'bg-white/5 text-brand-muted border-white/10',
  };

  const dotColors = {
    teal: 'bg-brand-mint',
    purple: 'bg-purple-400',
    blue: 'bg-cyan-400',
    mint: 'bg-brand-mint',
    dark: 'bg-white/40',
  };

  return (
    <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border backdrop-blur-md ${variants[variant] || variants.teal} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant] || dotColors.teal}`} />}
      {children}
    </span>
  );
}

export function SectionHeader({
  badge,
  badgeVariant = 'teal',
  title,
  highlight,
  description,
  align = 'center',
  theme = 'dark',
  className = '',
}) {
  const alignClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right ml-auto items-end',
  };

  const isLight = theme === 'light';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align]} ${className}`}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight ${isLight ? 'text-brand-dark' : 'text-white'}`}>
        {title}{' '}
        {highlight && (
          <span className="text-gradient-teal">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isLight ? 'text-brand-muted-dark' : 'text-brand-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
