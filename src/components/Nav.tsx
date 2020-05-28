import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,.25);
  ul {
    display: flex;
    > li {
      user-select: none;
      text-align:center;
      width: 33.33%;
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">标签页面</Link>
                </li>
                <li>
                    <Link to="/money">记录页面</Link>
                </li>
                <li>
                    <Link to="/statistic">数据页面</Link>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;