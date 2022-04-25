import React from "react";
import styled from "styled-components";
import background from "../../image/kukabara.jpg";

const BannerBg = styled.div`
    height: 85vh;
    content: '';
    width: 100%;
    padding: 0;
    margin: 0;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
`

const Banner = () => {
    return(
            <BannerBg className="kukabara" style={{ backgroundImage: `url(${background})` }}>
                <BannerBg style={{ backgroundColor: `rgba(0, 0, 0, .7)` }}>
                    <div className="dark" style={{ paddingTop: `15%` }}>
                        <h1>
                            Компания Кукабара
                        </h1>
                        <h2>
                         50 млн лет на рынке птицестроения
                    </h2>
                    </div>
                </BannerBg>
            </BannerBg>
        )
}

export default Banner;