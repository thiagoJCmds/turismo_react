import styled from 'styled-components'

export const Hd = styled.header`
height: 130px;
background-color: #fff;
`
export const Hdl = styled.div`
display: flex;
`
export const Title = styled.h1`
color: #047bfa;
font-family: 'Mochiy Pop P One', sans-serif; 
`
export const Container = styled.div`
max-width: ${(prop) => prop.largura ? prop.largura : '1024px'};
width: 100%;
height: ${(prop) => prop.tamanho ? prop.tamanho : '90px'};
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom:${(prop) => prop.borda ? prop.borda : 'solid 1px #eed289'};;
`



export const Lista = styled.ul`
display: flex;
list-style: none;
`
export const Li = styled.li`
font-weight: bold;
list-style: none;
color: #047bfa;
`
export const Ancora = styled.a`
text-decoration: none;
margin: 20px;
color: #eed289;
cursor: pointer;
`