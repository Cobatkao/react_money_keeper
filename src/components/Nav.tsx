import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,.25);
  ul {
    display: flex;
    > li {
      user-select: none;
      text-align:center;
      width: 33.33%;
      padding: 4px 0;
      display:flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name="label" />
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <Icon name="money" />
                    <Link to="/money">记录</Link>
                </li>
                <li>
                    <Icon name="statistic" />
                    <Link to="/statistic">数据</Link>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;
