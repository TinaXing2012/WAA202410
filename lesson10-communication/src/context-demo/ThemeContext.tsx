import {createContext, ReactNode, useContext, useState} from "react";

interface ThemeContextType {
    theme: string;
    toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
// functional Component
export const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [theme, setTheme] = useState('light');
    const toggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeConext = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('Component must be in ThemeContext');
    }
    return context;
}

export default ThemeContext;