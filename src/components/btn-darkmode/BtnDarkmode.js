import { useEffect, useState, useRef } from "react";
import sun from "../../images/icons/Sun.svg";
import moon from "../../images/icons/Moon.svg";

const BtnDarkmode = () => {

    const [mode, setMode] = useState('light');
    const btnMode = useRef(null);

    useEffect(() => {
        if(mode === 'light') {
            document.body.classList.add('dark');
            btnMode.current.classList.add('btn-mode--active');
        }
        else{
            document.body.classList.remove('dark');
            btnMode.current.classList.remove('btn-mode--active');
        }
    }, [mode])

    const buttonToggle = () => {
        setMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    return (
        <>
        <button className="btn-mode" ref={btnMode} onClick={buttonToggle}>
            <img className="btn-mode__icon" src={sun} alt="Light mode" />
            <img className="btn-mode__icon" src={moon} alt="Dark mode" />
        </button>
        </>
    );
}
 
export default BtnDarkmode;