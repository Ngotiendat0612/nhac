import React, { useContext } from 'react';
import '../assets/scss/FooterSelectMusic.scss';
import { ThemeContext } from "../../api/Theme";
import { Link } from "react-router-dom";

function FooterSelectMusic() {
    const useStyle = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: useStyle.subTheme }} className={"Footer_Select_Music"}>
            <Link to={"/home"}>
                Hãy chọn bài hát yêu thích của em
            </Link>
        </div>
    );
}

export default FooterSelectMusic;