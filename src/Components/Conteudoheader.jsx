import corinthians from '../assets/logoCorinthians.jpg'
import messi from '../assets/messi.jpg'
import ronaldinho from '../assets/ronaldinhoFC.jpg'
import nike from '../assets/nike.jpg.png'
import adidas from '../assets/adidas.jpg'
import roger from '../assets/rogerguedes.png'
import proa from '../assets/logo.jpg'



function Header() {
    return (
        <div className="header">
            <div className="colorido1">
                <div className="Stories">
                    <div className="ItemStories">
                        <div className="Borda">
                            <img src={corinthians} alt="" />


                        </div>
                    </div>
                    <div className="nome1">Corinthians</div>
                </div>
            </div>
            <div className="colorido2">
            <div className="Stories2">
                <div className="ItemStories2">
                    <div className="Borda">
                        <img src={messi} alt="" />

                    </div>

                </div>
                <div className="nome2">Messi</div>
            </div>
            </div>
            <div className="colorido3">
            <div className="Stories3">
                <div className="ItemStories3">
                    <div className="Borda">
                        <img src={ronaldinho} alt="" />

                    </div>

                </div>
                <div className="nome1">Ronaldinho</div>
            </div>
            </div>
            <div className="colorido4">
            <div className="Stories4">
                <div className="ItemStories4">
                    <div className="Borda4">
                        <img src={nike} alt="" />


                    </div>

                </div>
                <div className="nome1">Nike</div>
            </div>
            </div>
            <div className="colorido4">
            <div className="Stories5">
                <div className="ItemStories5">
                    <div className="Borda">
                        <img src={adidas} alt="" />

                    </div>

                </div>
                <div className="nome1">Adidas</div>
            </div>
            </div>
            <div className="colorido4">
            <div className="Stories6">
                <div className="ItemStories6">
                    <div className="Borda">
                        <img src={roger} alt="" />

                    </div>

                </div>
                <div className="nome3">Roger Guedes</div>
            </div>
            </div>
            <div className="colorido4">
            <div className="Stories7">
                <div className="ItemStories7">
                    <div className="Borda">
                        <img src={proa} alt="" />

                    </div>

                </div>
                <div className="nome3">Instituto Proa</div>
            </div>
            </div>


        </div>
    );
}

export default Header;