import { useState } from 'react'
import { BiPlus } from 'react-icons/bi';
import ComboBox from "../ComboBox/ComboBox.js";
import './PostButton.css';

function PostButton (){
    const [show, setShow] = useState(false);
    return (
    <a>
        <button class="newTweet" onClick={() => setShow ((show) => !show)}> 
            <BiPlus/> 
        </button>
        {show && <ComboBox/>}
    </a>
    );
}

export default PostButton;
