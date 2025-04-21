import './AboutPage.css'
import Img from '../components/AboutPageimg.jpg'
import { Link } from 'react-router-dom';

const AboutPage = () =>{
    return(
        <>
        <div className="body">
            <p>About us</p>
            <div className="container1">
                <div className="Text">
                    Hey there! 👋 <br></br>
                    Welcome to our cozy corner of the internet—your go-to spot for <b>books</b>, <b>movies</b>, and <b>everything in between.</b>

                    This site was built out of a simple love for stories. Whether it's flipping through the pages of a novel or getting lost in a film, we believe stories have a <b>way of bringing people together</b>, <b>sparking imagination</b>, and <b>sticking with us</b> long after the final page or credits roll.
                </div>
                <div>
                    <img src={Img} alt=""/>
                </div>
            </div>
        </div>
        <div className="body">
            <h1 className="HowToText">How to use this website</h1>
            <div className="LinkBtn">
                <p>Use the search bar to look up any title, genre, or keyword.</p>
                <Link to="/">
                <button className="EndBtn">
                    Search >
                </button>
                </Link>
            </div>
            <div className="LinkBtn">
                <p>Explore our collection by category—books, movies, or both!</p>
                <Link to="/">
                    <button className="EndBtn">
                        Browse >
                    </button>
                </Link>
            </div>
            <div className="LinkBtn">
                <p>Check out tags and recommendations to find hidden gems..</p>
                <Link to="/">
                    <button className="EndBtn">
                        Discover >
                    </button>
                </Link>
            </div>
            <div className="LinkBtn">
                <p>See what others have to say about our collection.</p>
                <Link to="/">
                    <button className="EndBtn">
                        View  Reviews >
                    </button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default AboutPage