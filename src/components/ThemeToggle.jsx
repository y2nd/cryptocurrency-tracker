import React, {useContext} from 'react';
import {HiSun, HiMoon} from "react-icons/hi";
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const wrapper = ( element ) => {
        return (
            <div className="flex items-center cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {element}
            </div>
        )
    }

    return (
        <div>
            {theme === "dark" ? wrapper( (<><HiSun className="text-primary text-2xl mr-2"/>Light Mode</> )) : wrapper( (<><HiMoon className="text-primary text-2xl mr-2"/>Dark mode</>) )}
        </div>
    )
}

export default ThemeToggle