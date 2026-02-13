import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  // Simulating a countdown to a mysterious date
  const [timeLeft, setTimeLeft] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0
  });

  useEffect(() => {
    // Set a fixed future date for demo purposes (e.g., 4 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          d: Math.floor(difference / (1000 * 60 * 60 * 24)),
          h: Math.floor((difference / (1000 * 60 * 60)) % 24),
          m: Math.floor((difference / 1000 / 60) % 60),
          s: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ val, label }: { val: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 sm:mx-4">
      <span className="text-2xl sm:text-3xl font-light text-white tracking-wider">
        {val.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] text-igdrasil-accent uppercase tracking-[0.2em] mt-1 opacity-70">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center py-8">
       <TimeUnit val={timeLeft.d} label="Days" />
       <div className="text-igdrasil-dim pb-4 text-xl">:</div>
       <TimeUnit val={timeLeft.h} label="Hrs" />
       <div className="text-igdrasil-dim pb-4 text-xl">:</div>
       <TimeUnit val={timeLeft.m} label="Mins" />
       <div className="text-igdrasil-dim pb-4 text-xl">:</div>
       <TimeUnit val={timeLeft.s} label="Secs" />
    </div>
  );
};

export default Timer;