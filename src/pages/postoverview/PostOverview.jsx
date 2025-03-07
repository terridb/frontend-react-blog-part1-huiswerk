import posts from "../../constants/data.json"
import "./PostOverview.css"
import {Link} from "react-router-dom";

function PostOverview() {
    return (
        <>
            <div className="post-overview-introduction">
                <h1>Alle posts</h1>
                <h3>{posts.length} posts</h3>
            </div>
            <section>
                {posts.map(post => (
                    <div key={post.id} className="post-preview">
                        <p>
                            <Link className="preview-link" to={`/blogpost/${post.id}`}>{post.title} </Link>
                            ({post.author})
                        </p>
                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </div>
                ))}
            </section>
        </>
    );
}

export default PostOverview;