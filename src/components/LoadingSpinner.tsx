import React from 'react';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 32, 
  color = "border-gray-900", 
  className = "" 
}) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${className}`}>
      <div 
        className={`animate-spin rounded-full border-b-2 ${color}`}
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
