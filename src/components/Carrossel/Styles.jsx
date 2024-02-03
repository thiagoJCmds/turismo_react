import styled from "styled-components"

export const MoveImage = styled.div`
width: 100%;
max-width: 100% vh;
margin: 0px auto;

img{
    width: 100%;
    height: 500px;
    object-fit: cover;
}

@media (min-width:481px) and (max-width:740px){ 
max-width: 100%;

    img{
        width: 100%;
        height: 280px;
    }
}
`