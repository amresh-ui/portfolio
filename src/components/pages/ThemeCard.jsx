import { useContext } from 'react';
import { FaFilter } from 'react-icons/fa';
import { ThemeContext } from '../Theme/ThemeContext';

const arrayTheme = ['Light','Dark']

const ThemeCard = () => {

 
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  function handleThemeChange() {
    toggleTheme()
  }


  return (
    <div
      id='theme'
      className={`w-full h-auto rounded-md flex flex-col sm:flex-row justify-between items-center p-5 shadow-lg ${
        isDarkMode === true ? 'bg-gray-700 text-zinc-400' : 'bg-white'
      }`}
    >
      <div className="mb-4 sm:mb-0">
        <h1 className="font-semibold text-text text-lg">Theme</h1>
        {/* <p className="text-text">{selectedTheme}</p> */}
      </div>
      <div className="relative w-full sm:w-auto">
        <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2" />
        <select
          id='select'
          onChange={handleThemeChange}
          // onMouseOver={handleMouseOver}
          // onMouseOut={handleMouseOut}
          className="w-full sm:w-auto pl-10 pr-3 py-2"
        >
          {arrayTheme.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
          
         
        </select>
      </div>
    </div>
  );
};

export default ThemeCard;