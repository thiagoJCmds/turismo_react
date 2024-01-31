import { Ancora } from "../Header/Styles"
import { Rodape, RodapeMessage, RodaDiv, RodaDiv2 } from "./Styles"
import facebook from "../../images/icones/facebook.png" 
import instagram from "../../images/icones/instagram.png" 
import youtube from "../../images/icones/youtube.png" 

const Footer = () =>(
<>
    <Rodape>
        <RodaDiv>
        <RodapeMessage>
            2024 &copy; TMS Turismo - Todos direitos Reservados
        </RodapeMessage>
        <RodaDiv2>
            <Ancora>
                <img src={facebook}/>  
            </Ancora>
            <Ancora>
                <img src={instagram}/>  
            </Ancora>
            <Ancora>
                <img src={youtube}/>  
            </Ancora>
        </RodaDiv2>
        </RodaDiv>
    </Rodape>
</>
)

export default Footer