import Conteudoheader from './Conteudoheader'
import ItemCentro from "./ItemCentro";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import verificar from '../assets/verificar.png'
export default function ConteudoCentral() {
    return (
        <div className='ConteudoCentral'>
            <Conteudoheader/>
       
            
            <div className="Timeline">
                
                <div className="Post">

                    <div className="headerPost">
                        <div className="imgusuario">
                        </div>
                        <span> <strong> Leo Messi</strong> <img src={verificar} alt="" /></span>
                        <span> • 3d.</span>
                    </div>
                    
                    <div className="conteudo"></div>

                    <div className="interacao">
                   <ItemCentro icone={<AiOutlineHeart style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Curtir"/>
                    <ItemCentro icone={<FiMessageCircle style={{ marginTop:'419px', height: '30px', width: '30px'}} />} texto="Comentar"/>
                    <ItemCentro icone={<RiSendPlaneLine style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Compartilhar"/>

                        <div className="salvar">                    
                        <ItemCentro icone={<CiBookmark style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Compartilhar"/>
                        </div>
                    </div>

                    <div className="curtidas">
                       
                    </div>
                
                    <div className="comentarios">
                        <span><strong>94,536Likes</strong> </span><br /><br />  
                        <span><strong>GabrielLindoAugusto</strong>: o melhor do Mundo ❤️ </span> <br /> 
                        <span><strong>Allan</strong>: 🏆🏆🏆 </span> <br />
                        <span><strong> Cleiton</strong>: 🐐 🏆</span> <br /> <br />
                        <span><strong>Ver todos 116,799 comentários</strong> </span> <br /> <br />   
                        <label htmlFor="fname">adicione um comentario</label> <span>:D</span><br></br>
                        
                 
                    </div> <br /> <br />
                    <hr />
                
                    
                    <div className="headerPost1">
                        <div className="imgusuario1">
                        </div>
                        <span> <strong> YuriAlberto</strong> <img src={verificar} alt="" /> </span>
                        <span> • 18h.</span>

                    </div>
                    
                    <div className="conteudo1"></div>

                    <div className="interacao1">
                    <ItemCentro icone={<AiOutlineHeart style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Curtir"/>
                    <ItemCentro icone={<FiMessageCircle style={{ marginTop:'419px', height: '30px', width: '30px'}} />} texto="Comentar"/>
                    <ItemCentro icone={<RiSendPlaneLine style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Compartilhar"/>

                        <div className="salvar">                    
                        <ItemCentro icone={<CiBookmark style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Compartilhar"/>
                        </div>
                    </div>
                
                    <div className="comentarios1">
                        <span><strong>1,586Likes</strong> </span><br /><br />  
                        <span><strong>João Almeida</strong>: Vai Timão❤️ </span> <br /> 
                        <span><strong>Lucas</strong>: Melhor Time 😍</span> <br />
                        <span><strong>Mario</strong>:  🏆</span> <br /> <br />
                        <span><strong>Ver todos 2,186 comentários</strong> </span> <br /> <br />   
                        <span>Adicione um comentário</span>
                    
                    </div> <br /> <br />
                    <hr />
                

                    
                    <div className="headerPost2">
                        <div className="imgusuario2">
                        </div>
                        <span> <strong> DreamWorks</strong> <img src={verificar} alt="" />  </span>
                        <span>•  1d.</span>
                    </div>
                    
                    <div className="conteudo2"></div>

                    <div className="interacao2">
                    <ItemCentro icone={<AiOutlineHeart style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Curtir"/>
                    <ItemCentro icone={<FiMessageCircle style={{ marginTop:'419px', height: '30px', width: '30px'}} />} texto="Comentar"/>
                    <ItemCentro icone={<RiSendPlaneLine style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Compartilhar"/>

                        <div className="salvar">                    
                        <ItemCentro icone={<CiBookmark style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Compartilhar"/>
                        </div>
                    </div>
                
                    <div className="comentarios">
                        <span><strong>17,126k Likes</strong> </span> <br />  
                        <span><strong>DreamWorks</strong> <img src={verificar} alt="" /> : Filme que Bateu Recorde de Bilheteria🏆 </span> <br /> <br />
                        <span><strong>GabrielAugusto</strong>: amei assistir esse filme❤️ </span> <br /> 
                        <span><strong>Yara</strong>: Filme maravilhoso❤️ </span> <br />
                        <span><strong>Jotapê</strong>: Massas demais </span> <br />
                        <span><strong>Laura</strong>: Muito booom😍</span> <br /> <br />
                        <span><strong>Ver todos 27,892 comentários</strong> </span> <br /> <br />   
                        <span>Adicione um comentário</span>
                    
                    </div> <br /> 
                    <hr />
            
                    <br />
                    <div className="headerPost3">
                        <div className="imgusuario3">
                        </div>
                        <span> <strong> MARVEL</strong> <img src={verificar} alt="" />  </span>
                        <span> • 1sem..</span>
                    </div>
                    
                    <div className="conteudo3"></div>

                    <div className="interacao3">
                    <ItemCentro icone={<AiOutlineHeart style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Curtir"/>
                    <ItemCentro icone={<FiMessageCircle style={{ marginTop:'419px', height: '30px', width: '30px'}} />} texto="Comentar"/>
                    <ItemCentro icone={<RiSendPlaneLine style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Compartilhar"/>

                        <div className="salvar">                    
                        <ItemCentro icone={<CiBookmark style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Compartilhar"/>
                        </div>
                    </div>
                
                    <div className="comentarios">
                        <span><strong>34,897 Likes</strong> </span> <br /><br />  
                        <span><strong>MARVEL</strong> <img src={verificar} alt="" /> : Estreia 9 de Novembro🏆 </span> <br /> <br />
                        <span><strong>GabrielAugusto</strong>: ansioso pra assistir </span> <br /> 
                        <span><strong>Yara</strong>: Espero por esse Filme maravilhoso❤️ </span> <br /> <br />
                        <span><strong>Ver todos 54,041 comentários  </strong></span>  <br /> <br />   
                        <span>Adicione um comentário</span>
                    
                    </div> <br /> <br />
                    <hr />

                    <div className="headerPost4">
                        <div className="imgusuario4">
                        </div>
                        <span> <strong> Instituto Proa</strong> <img src={verificar} alt="" />  </span>
                        <span> • 5d</span>
                    </div>
                    
                    <div className="conteudo4"></div>

                    <div className="interacao4">
                    <ItemCentro icone={<AiOutlineHeart style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Curtir"/>
                    <ItemCentro icone={<FiMessageCircle style={{ marginTop:'419px', height: '30px', width: '30px'}} />} texto="Comentar"/>
                    <ItemCentro icone={<RiSendPlaneLine style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Compartilhar"/>

                        <div className="salvar">                    
                        <ItemCentro icone={<CiBookmark style={{ marginTop:'420px', height: '30px', width: '30px'}} />} texto="Compartilhar"/>
                        </div>
                    </div>
                
                    <div className="comentarios">
                      <span><strong>17,126k Likes </strong></span> <br /> <br />  
                        <span><strong>Instituto Proa</strong> <img src={verificar} alt="" />: Estamos com incrições abertas</span> <br /> <br />
                        <span><strong>Watson: curso muito bom!!!</strong> </span> <br /> <br />
                        <span><strong>Ver todos 47,057 comentários </strong></span> <br /> <br />   
                       
                        <span>Adicione um comentário</span>
                    
                    </div> <br /> <br />

                </div>
            </div>
        </div>
     
    ) 
}