import { createContext, useState } from "react";

const ThemeContext = createContext();
const initialTheme = 'light';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (e) => {
        const $rangeTheme = document.getElementById('range-theme');

        if(e.target.innerText === 'light_mode'){
            e.target.innerText = 'dark_mode';
            setTheme('light_mode');
            window.localStorage.setItem('theme', 'light_mode');
            $rangeTheme.value = 9;
        } else {
            e.target.innerText = 'light_mode';
            setTheme('dark_mode');
            window.localStorage.setItem('theme', 'dark_mode');
            $rangeTheme.value = 0;
        }

    };

    const toggleTheme = (value) => {
        setTheme(`color_mode${value}`);
        window.localStorage.setItem('theme', `color_mode${value}`);
    };

    const data = {theme, handleTheme, toggleTheme};

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeProvider };
export default ThemeContext;