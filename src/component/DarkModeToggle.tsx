import React from 'react';

type DarkModeToggleProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DarkModeToggle({ darkMode, setDarkMode }: DarkModeToggleProps) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <div>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        {darkMode ? 'tối' : 'sáng'}
      </div>
    </div>
  );
}
