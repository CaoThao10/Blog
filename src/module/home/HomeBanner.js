import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";

const HomeBannerStyles = styled.div`
  display: flex;
  padding: 0 100px;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
  max-height: 600px;
  background: rgb(255, 0, 95);
  background: linear-gradient(
    90deg,
    rgba(255, 0, 95, 0.9445028011204482) 0%,
    rgba(242, 0, 0, 1) 47%,
    rgba(245, 86, 0, 0.8688725490196079) 96%
  );

  .item-left {
    max-width: 50%;
    text-decoration: none;
  }
  .text-banner {
    color: white;
    width: 100%;
    font-size: 28px;
    margin: 20px 0;
  }

  .titte-banner {
    color: white;
    font-size: 16px;
    font-weight: 400;
    margin: 20px 0;
  }
  a {
    text-decoration: none;
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="item-left">
        <h3 className="text-banner">Citrus Blush Blogs</h3>
        <h4 className="titte-banner">
          Hello, welcome to my website. Here you can find articles about the
          latest technology, read and share it with friends and colleagues. Or
          maybe you have new information you want to share with everyone. Come
          to Citrus Blush Blogs
        </h4>
        <Button to="/sign-up">Get started</Button>
      </div>
      <div className="banner">
        <img className="icon-banner" src="/iconBanner.png" alt="" />
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
