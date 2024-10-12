import {useContext} from "react";
import ThemeContext, {useThemeConext} from "./ThemeContext";
import './Home.css';
import ToggleTheme from "./ToggleTheme";

export default function (){

    const {theme} = useThemeConext();

    return (
        <>
            <div className={theme}>
                THis is home
                <ToggleTheme />
            </div>
        </>
    )
}