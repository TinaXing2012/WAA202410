import {useContext} from "react";
import ThemeContext, {useThemeConext} from "./ThemeContext";

export default function ToggleTheme(){

    const {toggle} = useThemeConext();

    return (
        <>
            <button onClick={toggle}>Toggle Theme</button>
        </>
    )
}