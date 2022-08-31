import './Post.css';
import { RiHeart3Line, RiChat2Line, RiShareFill} from "react-icons/ri";

function Post (){
    return(
        <div className="post">
            <div className="post-owner">
                <img src="https://via.placeholder.com/60"/> 
                <div className="post-owner-info"><span className="owner"> July Braum </span> <br/>
                    <span className="date"> Dec. 3 2021 </span> </div>
            </div>

            <div className="post-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </div>

            <div className="post-actions-container">
                <div className="post-actions"> <RiHeart3Line className="post-action-icon" /> 
                    <span className="post-action-number">25</span> </div>
                <div className="post-actions"> <RiChat2Line className="post-action-icon" /> 
                    <span className="post-action-number">1</span> </div>
                <div className="post-actions"> <RiShareFill className="post-action-icon"/>
                    <span className="post-action-number">1</span> </div>
            </div>
        </div>
    )
}
export default Post;
