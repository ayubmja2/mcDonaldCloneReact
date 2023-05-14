import './home.styles.scss';
import { ReactComponent as McLogo } from "../../assets/mcdonalds.svg";
const Home = () => {
    return(
        // <div className="home-body">
        //     <div className='main-content'>
        //         <div class="header__text-box">
        //             <h1 class="heading-primary">
        //                 <span class="heading-primary--main">Outdoors</span>
        //                 <span class="heading-primary--sub">is where life happens</span>
        //             </h1>
        //             <a href="/"class="btn btn--white btn--animated">Discover our tours</a>
        //         </div>
        //     </div>
        
        // </div>

        <div className='container'>
            <section className='header'>
                <div className='header__text-box'>
                    <h1 className='header-primary'>
                        <span className='heading-primary--main'>McDonalds</span>
                        <span className='heading-primary--sub'>What would you like?</span>
                    </h1>
                </div>
            </section>
            <div className="circles">
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
            </div>
            
        </div>
    );
}
export default Home;