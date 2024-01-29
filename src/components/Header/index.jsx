import { Title, Hd, Container, Li, Ancora,Hdl } from "./Styles"

const Header = () => (
    <>
        <Hd>
            <Container>
                <Title>TMS Turismo</Title>
            <Hdl>
                <Ancora>Quem somos</Ancora>
                <Ancora>Contato</Ancora>
            </Hdl>    
            </Container>
            <Container tamanho='45px' largura='890px' borda='solid 0 px'>
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