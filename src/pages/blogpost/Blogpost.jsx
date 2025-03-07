import {Link, useParams} from "react-router-dom";
import posts from "../../constants/data.json";
import "./Blogpost.css"
import {rewriteDate} from "../../helpers/rewriteDate.js";

function Blogpost() {
    const {id} = useParams();
    const post = posts.find(post => post.id === parseInt(id));
    const date = rewriteDate(post);

    return (
        <section className="big-container">
            <div className="blogpost-content">
                <h2>{post.title} ({post.readTime} minuten)</h2>
                <h3>{post.subtitle}</h3>
                <p>Geschreven door {post.author} op {date}</p>
                <p>{post.content}</p>
                <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                <p><Link to="/overzicht">Terug naar de overzichtspagina</Link></p>
            </div>
        </section>
    );
}

export default Blogpost;