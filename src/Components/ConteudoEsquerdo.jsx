import ItemMenu from "./ItemMenu";
import InstagramLogo from '../assets/Instagram-Logo.png' 
import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { AiFillPlaySquare } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

export default function ConteudoEsquerdo() {
    return (
        <div className='ConteudoEsquerdo'>
            <div className='wrapLogo'>
                <img src={InstagramLogo} className='img-logo' />
            </div>
            <div className='wrapMenu'>
                <ul className='ul'>
                    <div className="logo">
                    <button><ItemMenu icone={<AiOutlineHome style={{ height: '30px', width: '30px'}} />} texto="Pagina Inicial"/></button>
                    <button><ItemMenu icone={<BsSearch style={{ height: '30px', width: '30px'}} />} texto="Pesquisa" /></button>
                    <button><ItemMenu icone={<AiOutlineCompass style={{ height: '30px', width: '30px'}} /> } texto="Explorar" /> </button>
                    <button><ItemMenu icone={<AiFillPlaySquare style={{ height: '30px', width: '30px'}} />} texto="Reels"/></button>
                    <button><ItemMenu icone={<BsMessenger style={{ height: '30px', width: '30px'}} />} texto="Mensagens"/></button>
                    <button><ItemMenu icone={<AiOutlineHeart style={{ height: '30px', width: '30px'}} />} texto="Curtidas"/></button>
                    <button><ItemMenu icone={<BsPeopleFill style={{ height: '30px', width: '30px'}} />} texto="Perfil"/></button>
                    <div className="perfil">
                   <button><ItemMenu icone={<AiOutlineMenu style={{ height: '30px', width: '30px'}} />} texto="Mais"/></button>
                    </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}