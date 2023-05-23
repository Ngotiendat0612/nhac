import React from 'react';
import '../assets/scss/Developer.scss';
import { IconButton } from "@material-ui/core";
import AvatarImage from "../assets/img/dat.jpg";
import { Facebook, Instagram, LinkedIn, Portrait, Twitter } from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Thông tin chung</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile" />
                    <div className={"Card-details"}>
                        <h3>Ngô Tiến Đạt</h3>
                        <p>Full Stack developer</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Là một sinh viên công nghệ thông tin tại U-E-T</p>
                    <p>Tốt nghiệp vào năm 2024 và đang tìm kiếm một vị trí có trách nhiệm để có kiến ​​thức thực tế.</p>
                    <p>Là một lập trình viên full-stack web.</p>
                    <p>Tôi thích thiết kế các trang web đáp ứng đầy đủ.</p>
                    <p>Tôi rất quan tâm đến việc phát triển các dự án, bất cứ khi nào tôi muốn học một điều gì đó mới.</p>
                    <p>And a blogger.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"https://www.facebook.com/ngotiendat2k1"} title={"Tiendatcoding"}>
                            <Facebook />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/"} title={"Tiendatcoding"}>
                            <Twitter />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/"} title={"Tiendatcoding-"}>
                            <LinkedIn />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/"} title={"Tiendatcoding"}>
                            <Instagram />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://vishal.thetechnician."} title={"Web Tiendatcoding"}>
                            <Portrait />
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;