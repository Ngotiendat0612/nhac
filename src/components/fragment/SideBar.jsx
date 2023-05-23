import React, { useContext } from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import { ThemeContext } from "../../api/Theme";
import { ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined } from "@material-ui/icons";

function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span>THƯ VIỆN NHẠC</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Trang chủ"} />
                <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"} title={"Giới thiệu"} />
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"} title={"Tìm kiếm"} />
                {/*<SideBarOptions className={"lib-sub"} Icon={AlbumIcon} href={"/home/album"}  title={"Album"}/>
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleIcon} href={"/home/artist"}  title={"Artist"}/>*/}
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>DANH SÁCH NHẠC CỦA EM</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/instrumental"} title={"Nhạc Cute"} />
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"} title={"Nhạc EDM"} />
            </div>
        </aside>
    );
}

/*
*
* */
export default SideBar;