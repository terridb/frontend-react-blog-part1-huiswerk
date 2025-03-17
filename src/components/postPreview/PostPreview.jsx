import {Link} from "react-router-dom";
import "./PostPreview.css"

function PostPreview({post}) {
    return (
        <>
            <div className="post-preview">
                <div className="post-preview-title">
                    <Link className="preview-link" to={`/blogpost/${post.id}`}>{post.title}</Link>
                    <p>({post.author})</p>
                </div>
                <p className="post-preview-details"> {post.comments} reacties - {post.shares} keer gedeeld</p>
            </div>
        </>
    );
}

export default PostPreview;