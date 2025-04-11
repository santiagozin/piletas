const BannerContent = ({ children, color }: { children: React.ReactNode; color: string }) => {
  return (
    <div
      className={`absolute left-0 md:left-36 top-0 md:top-36 z-10 h-72 md:h-96 w-full md:w-1/2 rounded-xl bg-cyan-500 ${color === 'blue' ? 'bg-opacity-50' : 'bg-opacity-80'} shadow-xl ${color === 'blue' ? 'bg-cyan-600' : 'bg-emerald-600'}`}
    >
      {children}
    </div>
  );
};

export default BannerContent;
