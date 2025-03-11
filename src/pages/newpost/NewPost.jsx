import {useForm} from "react-hook-form";
import "./NewPost.css"
import {writeDateToday} from "../../helpers/rewriteDate.js";
import {calculateReadingTime} from "../../helpers/readingTime.js";
import {useNavigate} from "react-router-dom";
import TextInput from "../../components/textInput/TextInput.jsx";

function NewPost() {
    const {handleSubmit, formState: {errors}, register} = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(e) {
        e.created = writeDateToday();
        e.comments = 0;
        e.shares = 0;
        e.readtime = calculateReadingTime(e.content);
        console.log(e);
        navigate("/overzicht")
    }

    return (
        <form className="new-post-form" onSubmit={handleSubmit(handleFormSubmit)}>
            <h1>Post toevoegen</h1>
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
            <button className="post-button" type="submit">Verzenden</button>
        </form>
    );
}

export default NewPost;