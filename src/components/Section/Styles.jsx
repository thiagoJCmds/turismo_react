import styled from "styled-components";


export const Card = styled.div`

width: 100%;
max-width: 300px;
height: 300px;
background-color: #fff;
padding: 10px;
@media(max-width:480px){
 margin-bottom: 15px ;
}
@media (max-width:925px) and ( orientation: landscape){
    margin: 10px;
}
`
export const InCard = styled.div`

width: 280px;
height: 280px;
border: #dedddd 2px solid;
background-color: #fff;
`
export const Title2 = styled.h2`
font-family: 'Mochiy Pop P One', sans-serif; 
color: #7a6ab1;
text-align: center;
margin: 10px;
font-size: 35px;
`
export const Description = styled.p`
text-align: center;
color: #b4abab;
margin: 15px;
font-style: italic;
`
export const Description2 = styled.p`
text-align: center;

border-bottom: solid 1px #dedddd;
margin:0 55px;
padding-bottom: 10px;
color: #333;
font-weight: bold;
`
export const Description3 = styled.p`
text-align: center;
margin: 30px;
color: #eed289;
font-family: 'Great Vibes', cursive;
font-size: 40px;
`
export const Principal = styled.section`
`
export const Container3 = styled.div`
max-width: 1024px;
width: 100%;
margin: auto;
margin-top: 50px;
display: flex;
justify-content: space-between;
border-top: solid 1px #eed289;
border-bottom: solid 1px #eed289;
padding: 30px 0;
@media(max-width:480px){
    max-width: 480px;
    width: 100vw;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
    border: none;
    text-align: center;
}

@media (max-width:925px) and ( orientation: landscape) {
    
    max-width: 925px;
    width: 100vw;
    margin: auto ;
    flex-wrap: wrap;
    justify-content: center;
    border: none;
}
`
