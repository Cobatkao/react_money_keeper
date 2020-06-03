import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const NumberPadSection = styled.section`
  
`;

const CategorySection = styled.section`
  
`;

const NotesSection = styled.section`
  
`;

const TagsSection = styled.section`
  
`;

const TagList = styled.ul`

`;

const Money = () => {
    return (
        <Layout>
            <TagsSection>
                <TagList>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </TagList>
                <span>新增标签</span>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li>收入</li>
                    <li>支出</li>
                </ul>
            </CategorySection>
        </Layout>
    )
};

export default Money;
