import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`;

const Layout = (props: any) => {
    return (
        <div>
            <Wrapper>
                <Main>
                    {props.children}
                </Main>
                <Nav />
            </Wrapper>
        </div>
    );
}

export default Layout;
