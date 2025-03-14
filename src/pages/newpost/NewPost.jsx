import {useForm} from "react-hook-form";
import "./NewPost.css"
import {writeDateToday} from "../../helpers/rewriteDate.js";
import {calculateReadingTime} from "../../helpers/readingTime.js";
import {Link} from "react-router-dom";
import TextInput from "../../components/textInput/TextInput.jsx";
import axios from "axios";
import {useState} from "react";

function NewPost() {
    const {handleSubmit, formState: {errors}, register} = useForm();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");

    async function handleFormSubmit(e) {
        e.created = writeDateToday();
        e.comments = 0;
        e.shares = 0;
        e.readtime = calculateReadingTime(e.content);
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:3000/posts", {
                "title": e.title,
                "subtitle": e.subtitle,
                "content": e.content,
                "author": e.author,
                "created": e.created,
                "readTime": e.readtime,
                "comments": e.comments,
                "shares": e.shares
            });
            console.log("Gelukt!");
            setId(response.data.id);
        } catch (err) {
            setError(err.message || "Er is iets fout gegaan!");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {
                id ? (
                    <p>
                        De blogpost is succesvol toegevoegd. Je kunt deze hier bekijken:
                        <Link to={`/blogpost/${id}`}> Link naar post.</Link>
                    </p>
                ) : (
                    <form className="new-post-form" onSubmit={handleSubmit(handleFormSubmit)}>
                        <h1>Post toevoegen</h1>
                        {error && <div className="error-message">Error: {error}</div>}
                        {loading && <span className="loader"/>}
                        <TextInput
                            type="text"
                            name="Titel"
                            id="title"
                            isRequired={true}
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            type="text"
                            name="Subtitel"
                            id="subtitle"
                            isRequired={true}
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            type="text"
                            name="Auteur"
                            id="author"
                            isRequired={true}
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            type="textarea"
                            name="Bericht"
                            id="content"
                            isRequired={true}
                            register={register}
                            errors={errors}
                            minLength={300}
                            maxLength={2000}
                        />
                        <button className="general-button" type="submit">Verzenden</button>
                    </form>
                )
            }
        </>
    );
}

export default NewPost;