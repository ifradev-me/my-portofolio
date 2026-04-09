
const Togglebutton = ({ isToggled }) => {

  return (
    <div className="flex items-center justify-center ">
      <div 
        className={`
          relative w-14 h-7 rounded-full cursor-pointer border-0
        `}
      >
        {/* First pit */}
        <div 
          className={`
            absolute top-0.5 w-6 h-6  rounded-full shadow-lg
            transition-colors duration-600 ease
            ${isToggled ? 'bg-gradient-to-r from-primary-blue-800 to-highlight-800 ' : 'bg-gradient-to-r from-background-800 to-black'}
          `}
        />

        {/* Second pit */}
        <div 
          className={`
            absolute top-0.5 right-0.5 w-6 h-6 rounded-full shadow-lg
            transition-colors duration-600 ease
            ${!isToggled ? 'bg-radial from-highlight-200 to-background-600 ' : 'bg-radial from-background-800 to-black'}
          `}
        />

        {/* Ball */}
        <div
          className={`
            absolute top-0.5 w-6 h-6 rounded-full shadow-xl text-[14px] font-bold leading-6 text-center text-background-900
            transition-transform duration-500 ease-out bg-white border-0
            ${isToggled ? 'transform translate-x-7' : 'transform translate-x-0.5'}
          `}>{isToggled ? '2' : '1'}</div>
      </div>
    </div>
  );
};

export default Togglebutton;