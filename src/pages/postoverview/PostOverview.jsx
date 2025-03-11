import posts from "../../constants/data.json"
import PostPreview from "../../components/postPreview/PostPreview.jsx";

function PostOverview() {
    return (
        <>
            <h1>Bekijk alle {posts.length} posts op het platform</h1>
            <div className="post-preview-container">
                {posts.map(post => (
                    <PostPreview
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        </>
    );
}

export default PostOverview;