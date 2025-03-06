import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";
import PostOverview from "./pages/postoverview/PostOverview.jsx";
import Error404 from "./pages/error404/Error404.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Blogpost from "./pages/blogpost/Blogpost.jsx";

function App() {
    return (
        <div className="page-container">
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/overzicht" element ={<PostOverview/>}/>
                <Route path="/nieuwe-post" element={<NewPost/>}/>
                <Route path="/error-404" element={<Error404/>}/>
                <Route path="/blogpost/:id" element={<Blogpost/>}/>
            </Routes>
        </div>
    )
}

export default App
