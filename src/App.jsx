import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NewPost from "./pages/NewPost.jsx";
import PostOverview from "./pages/PostOverview.jsx";
import Error404 from "./pages/Error404.jsx";

function App() {
    return (
        <div className="page-container">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/overzicht" element ={<PostOverview/>}/>
                <Route path="/nieuwe-post" element={<NewPost/>}/>
                <Route path="/error-404" element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default App
