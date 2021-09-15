import { AiOutlinePicture, AiOutlineClose } from "react-icons/ai";
import { BiHappy, BiPlus} from "react-icons/bi";
import './ComboBox.css';

function ComboBox (){
    return(
    <div className="overlay">   
        <div className="container">
            <header className="comboBox">
                <div className="headerLeft">
                    <img className="tweetImg" src="https://via.placeholder.com/50"/>
                    <p>¿Qué estás pensando?</p>
                </div>
                
                <div className="headerRight">
                    <button className="closeIcon"> <AiOutlineClose/> </button>
                </div>
            </header>

            <textarea className="tweetText" maxLength="200" dir="ltr" name="tweet" required="true" />

            <footer className="comboBox-footer">
                <div className="tweetIcons">
                <a href="picture"> 
                    <AiOutlinePicture className="pictureIcon"/> 
                </a>
                <a href="emoji"> 
                    <BiHappy className="emoji"/> 
                </a>
                </div>

                <div className="postingButton">
                    <button className="posting"> <BiPlus/> Publicar</button>
                </div>
            </footer>
        </div>
        </div> 
    )
}

export default ComboBox;