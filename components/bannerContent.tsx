const BannerContent = ({ children, color }: { children: React.ReactNode; color: string }) => {
  return (
    <div
      className={`${color === 'green' && 'h-60 md:h-96'} absolute left-[3%] ${color === 'blue' ? 'md:left-36' : 'md:left-1/4'} top-10 md:top-36 z-10 h-96 w-full max-w-sm md:max-w-none md:w-1/2 rounded-xl bg-cyan-500 ${color === 'blue' ? 'bg-opacity-50' : 'bg-opacity-40 md:bg-opacity-80'} shadow-xl ${color === 'blue' ? 'bg-cyan-600' : 'bg-teal-500'}`}
    >
      {children}
    </div>
  );
};

export default BannerContent;
