import {useForm} from "react-hook-form";
import "./NewPost.css"
import {writeDateToday} from "../../helpers/rewriteDate.js";
import {calculateReadingTime} from "../../helpers/readingTime.js";

function NewPost() {
    const {handleSubmit, formState: {errors}, register} = useForm();

    function handleFormSubmit(e) {
        e.created = writeDateToday();
        e.comments = 0;
        e.shares = 0;
        e.readtime = calculateReadingTime(e.post);
        console.log(e);
    }

    return (
        <form className="new-post-form" onSubmit={handleSubmit(handleFormSubmit)}>
            <h1>Maak een nieuwe post</h1>
            <label htmlFor="title" className="form-label">
                Titel
            </label>
            <input
                type="text"
                {...register("title", {
                    required: {
                        value: true,
                        message: "Dit veld is verplicht",
                    }
                })}
            />
            {errors.title && <p>{errors.title.message}</p>}
            <label htmlFor="subtitle" className="form-label">
                Subtitel
            </label>
            <input
                type="text"
                {...register("subtitle", {
                    required: {
                        value: true,
                        message: "Dit veld is verplicht",
                    }
                })}
            />
            {errors.subtitle && <p>{errors.subtitle.message}</p>}
            <label htmlFor="author" className="form-label">
                Auteur
            </label>
            <input
                type="text"
                {...register("author", {
                    required: {
                        value: true,
                        message: "Dit veld is verplicht",
                    }
                })}
            />
            {errors.author && <p>{errors.author.message}</p>}
            <label htmlFor="post" className="form-label">
                Bericht
            </label>
            <textarea
                {...register("post", {
                    required: {
                        value: true,
                        message: "Dit veld is verplicht",
                    },
                    minLength: {
                        value: 300,
                        message: "Dit veld moet minstens 300 karakters bevatten",
                    },
                    maxLength: {
                        value: 2000,
                        message: "Dit veld mag maximaal 2000 karakters bevatten",
                    },
                })}
            />
            {errors.post && <p>{errors.post.message}</p>}
            <button className="post-button" type="submit">Verzenden</button>
        </form>
    );
}

export default NewPost;