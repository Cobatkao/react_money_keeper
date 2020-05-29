import styled from "styled-components";
import {NavLink} from "react-router-dom";
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
      > a {
      font-weight: bold;
        padding: 4px 0;
        display:flex;
        flex-direction: column;
        align-items: center;
        &.selected {
          color: #fdab0e;
          svg {
            fill: #fdab0e;
          }
        }
        > .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected"><Icon name="label" />标签</NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected"><Icon name="money" />记录</NavLink>
                </li>
                <li>
                    <NavLink to="/statistic" activeClassName="selected"><Icon name="statistic" />数据</NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;
