import React from 'react'
import styled from "styled-components"
import FilterSort from '../ProductComponents/FilterSort';
import ProductLists from '../ProductComponents/ProductLists';

const ProductRecords = () => {
    return (
        <Wrapper>
         
            <WrapperFilterSort>
                <FilterSort />
            </WrapperFilterSort>

            <WrapperUserProduct>
                <ProductLists />
            </WrapperUserProduct>

        </Wrapper>
    )
}

const Wrapper = styled.div`
  border:1px solid red;
  display:flex;
  min-height:100vh;  
`;

const WrapperFilterSort = styled.div`
 width:300px;
  border:2px solid teal; 
`;
const WrapperUserProduct = styled.div`
 border:1px solid blue;
 width:100%;
 display:grid;
 grid-template-columns:repeat(auto-fit,minmax(200px,max-content));
 justify-content:center;
 grid-gap:10px;
`;

export default ProductRecords
