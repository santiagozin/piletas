import type { ReactNode } from 'react';

const BannerContent = ({ children, color }: { children: ReactNode; color: 'blue' | 'green' }) => {
  const backgroundClassName = color === 'blue' ? 'bg-cyan-600 bg-opacity-50' : 'bg-teal-500 bg-opacity-70';

  return (
    <div
      className={`absolute left-4 md:left-1/4 top-28 md:top-36 z-10 w-[90%] md:w-1/2 rounded-xl shadow-xl ${backgroundClassName} p-10`}
    >
      {children}
    </div>
  );
};

export default BannerContent;
