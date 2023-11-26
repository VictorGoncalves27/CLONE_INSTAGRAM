import vitu from '../assets/vitu.jpg'
import gabs from '../assets/prof.jpg'
import barcelona from '../assets/barcelona.png'
import curso from '../assets/curso.jpg'
import hj from '../assets/hj.jpg'

export default function conteudo() {
    return (
        <div className="perfildireito">
            <div className="ItemPerfil">
                <div className="Borda">
                    <img src={vitu} alt="" />
                </div>

            </div>
                <div className="nome10">Victor Gonçalves</div>


            <div className="sugestão">Sugerido para Você!
                <p>Ver todos</p>
            </div>
            <div className="ItemPerfil2">           </div>
            <div className="seguir">
                <img className='altura' src={gabs} alt="" />
                <span className='nomeUsuario '>Gabriel Augusto</span> 
                Seguir
                </div>


                <div className="seguir">
                <img className='altura' src={barcelona} alt="" />
                <span className='nomeUsuario '>Barcelona FC</span> 
                Seguir
                </div>


                <div className="seguir">
                <img className='altura' src={curso} alt="" />
                <span className='nomeUsuario '>Curso em Video</span> 
                Seguir
                </div>


                <div className="seguir">
                <img className='altura' src={hj} alt="" />
                <span className='nomeUsuario '>Henrique e Juliano</span> 
                Seguir
                </div>



                



           

        </div>


    )


}