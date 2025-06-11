import styled from "styled-components";


export const SearchContainer = styled.div`
min-width: 230px;
width: 900px;
max-width: 80%;
height:35px;
border: 1px solid black;
border-radius: 15px;
display: flex;
justify-content: space-between;
align-items: center;
padding-left:2%;
line-height: 1.4375em;
font-size: 0.875rem;
color: rgba(0, 0, 0, 0.87);
border-color: #949494;
position: relative;


 .restartSearch {
   font-size:1.7rem

}
`

export const SearchInput = styled.input`

width: 100%;
border: none;
background-color: transparent;
margin-left: 5px;

 &::placeholder {
    
 }
 &:focus {
    outline: none;
 }

`
export const ButtonSearch = styled.button`
width: 40px;
height: 100%;
display:flex;
justify-content: center;
align-items: center;
margin-right:5px;
border:none;
font-size: 20px;
background-color:transparent;
cursor: pointer;
overflow: hidden;
z-index: 0;
`
export const SearchResultsContainer = styled.div`
position: absolute;
width: 90%;
height: auto;
padding: .5rem;
border: 1px black solid;
top: 40px;
z-index: 2000;
background-color: white;
`

export const ProductMiniCard = styled.div`
width: 100%;
padding: 2px;


`