import { Title, Hd, Container, Li } from "./Styles"

const Header = () => (
    <>
        <Hd>
            <Container>
                <Title>TMS Turismo</Title>
            </Container>
            <Container tamanho='45px' largura='890px' borda='solid 1 px black'>
                
                    <Li>
                        PACOTES
                    </Li>   
                    <Li>
                        LUA DE MEL
                    </Li>    
                    <Li>
                        CRUZEIRO
                    </Li>    
                    <Li>
                        PASSEIOS EM IATES
                    </Li>    
                    <Li>
                        OUTROS PAÍSES
                    </Li>    
             
            </Container>
        </Hd>
    </>
)

export default Header