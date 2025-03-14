import {Link, useNavigate, useParams} from "react-router-dom";
import "./Blogpost.css"
import {rewriteDate} from "../../helpers/rewriteDate.js";
import {CaretLeft} from "@phosphor-icons/react";
import {useEffect, useState} from "react";
import axios from "axios";

function Blogpost() {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getPost = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/posts/${id}`);
            setPost(response.data);
        } catch (err) {
            setError(err.message || "Er is iets fout gegaan!");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    const handleDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`http://localhost:3000/posts/${id}`);
            console.log("Verwijderd!");
        } catch (err) {
            setError(err.message || "Er is iets fout gegaan!");
            console.error(err);
        } finally {
            setLoading(false);
            navigate("/overzicht")
        }
    }

    return (
        <div className="blogpost-content">
            {loading && <span className="loader"/>}
            {error && <div className="error-message">Error: {error}</div>}
            {post.title ?
                <>
                    <h2>{post.title} ({post.readTime} minuten)</h2>
                    <h3>{post.subtitle}</h3>
                    <p>Geschreven door {post.author} op {rewriteDate(post)}</p>
                    <p>{post.content}</p>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    <div className="bottom-section">
                        <p className="return-link">
                            <CaretLeft size={16}/>
                            <Link to="/overzicht">Terug naar de overzichtspagina</Link>
                        </p>
                        <button className="general-button" type="button" onClick={handleDelete}>Verwijderen</button>
                    </div>
                </> : <p>Geen post gevonden</p>
            }
        </div>
    );
}

export default Blogpost;