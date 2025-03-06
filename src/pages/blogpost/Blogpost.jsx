import {useParams} from "react-router-dom";

function Blogpost() {
    const {id} = useParams();

    return (
        <>
            <p>Test: {id}</p>
        </>
    );
}

export default Blogpost;