import PostPreview from "../../components/postPreview/PostPreview.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function PostOverview() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getAllPosts = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:3000/posts");
            setPosts(response.data);
        } catch (err) {
            setError(err);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <>
            <h1>Bekijk alle {posts.length} posts op het platform</h1>
            <div className="post-preview-container">
                {loading && <span className="loader"/>}
                {error && <div className="error-message">Error: {error}</div>}
                {posts && posts.length > 0 ? (
                    posts.map(post => (
                        <PostPreview
                            key={post.id}
                            post={post}
                        />
                    ))
                ) : (
                    <p>Er zijn geen posts beschikbaar</p>
                )}
            </div>
        </>
    );
}

export default PostOverview;