import { BiPlus } from "react-icons/bi";
import './PostButton.css';

function PostButton (){
    return(
    <button onClick={ () => alert("me has dado click")}> <BiPlus/> </button>
    )
}

export default PostButton;