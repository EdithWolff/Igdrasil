import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 select-none">
      <span className="text-xl tracking-[0.2em] font-light text-white uppercase">
        Igdrasil<span className="text-igdrasil-dim font-bold ml-1">AB</span>
      </span>
    </div>
  );
};

export default Logo;