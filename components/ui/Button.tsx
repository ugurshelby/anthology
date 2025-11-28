import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'f1' | 'anthology';
};

const base = 'px-4 py-2 border border-white/10 bg-white/5 transition-all duration-300 font-mono text-[10px] uppercase tracking-[0.15em]';
const variants: Record<string, string> = {
  f1: 'hover:bg-white hover:text-black hover:border-white text-gray-400',
  anthology: 'hover:bg-white hover:text-black hover:border-white text-gray-400',
};

const Button: React.FC<ButtonProps> = ({ variant = 'anthology', className = '', ...props }) => {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
};

export default Button;
