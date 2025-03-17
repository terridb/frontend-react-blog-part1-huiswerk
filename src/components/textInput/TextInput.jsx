import "./TextInput.css"

function TextInput({type, name, isRequired, register, id, errors, minLength, maxLength}) {
    return (
        <>
            <label htmlFor={id} className="form-label">
                {name}
            </label>
            {type === "text" &&
                <input
                    type="text"
                    {...register(id, {
                        required: {
                            value: isRequired,
                            message: "Dit veld is verplicht",
                        }
                    })}
                />
            }
            {type === "textarea" &&
                <textarea rows={10} cols={100}
                    {...register(id, {
                        required: {
                            value: isRequired,
                            message: "Dit veld is verplicht",
                        },
                        minLength: {
                            value: minLength,
                            message: `Dit veld moet minstens ${minLength} karakters bevatten`,
                        },
                        maxLength: {
                            value: maxLength,
                            message: `Dit veld mag maximaal ${maxLength} karakters bevatten`,
                        },
                    })}
                />
            }
            {errors[id] && <p>{errors[id].message}</p>}
        </>
    );
}

export default TextInput;