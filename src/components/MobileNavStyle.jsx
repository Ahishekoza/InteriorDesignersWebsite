const MobileNavStyle = ({ children }) => {
  return (
    <span className="relative overflow-hidden cursor-pointer group  border-l hover:border-none
     border-white">
      <span className="absolute  inset-0 bg-white/55 transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out"></span>
      {children}
    </span>
  );
};

export default MobileNavStyle;
