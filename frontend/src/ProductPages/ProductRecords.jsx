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
//   border:1px solid red;
  display:flex;
  min-height:100vh;  
`;

const WrapperFilterSort = styled.div`
 width:300px;
//   border:2px solid teal; 
position:fixed;
`;
const WrapperUserProduct = styled.div`
//  border:1px solid blue;
 width:80%;
 display:grid;
 margin-left:300px;
 grid-template-columns:repeat(auto-fit,minmax(250px,max-content));
 grid-gap:20px;
 justify-content:center;
 text-align:center
 grid-gap:10px;
`;

export default ProductRecords
