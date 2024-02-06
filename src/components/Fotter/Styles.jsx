import styled from "styled-components";


export const Rodape = styled.footer`
height: 100px;
background-color: #047bfa;
margin-top: 100px;
display: flex;
@media(max-width:480px){
    margin-top: 0px;
}
@media (min-width:481px) and (max-width:740px){   
    max-width: 100%;
    padding: 0 10px;
    margin-top: 0;
}
`

export const RodapeMessage = styled.p`
color: #fff;
@media(max-width:907px) and (orientation:landscape){
    font-size: 12px;
    margin-left: 8px;
}
`
export const RodaDiv = styled.div`
max-width: 1024px;
width: 100%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
`
export const RodaDiv2 = styled.div`
img{
    width: 25px;
}
@media(max-width:480px){
    img{
        width: 15px;
        margin-right: 5px;
    }
}
`