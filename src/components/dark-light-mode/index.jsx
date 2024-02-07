// In this I am using custom React Hook
// switch from light to Dark mode and vice versa


import useLocalStorage from "./useLocalStorage";
import "./theme.css"

export default function LightDarkMode(){

    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleTheme(){
        setTheme(theme ===  'light' ? 'dark' : 'light')
    }
    console.log(theme)

    return(
        <div className="light-dark-mode" data-theme ={theme}> 
            <div className="container">
                <p>Hello World !</p>
                <button onClick={handleToggleTheme}>
                    change Theme
                </button>
            </div>
        </div>
    )
}
