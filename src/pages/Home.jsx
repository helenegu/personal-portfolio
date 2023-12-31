import { About, Contact, Experience, Feedbacks, Hero, Navbar,
    Tech, Works,  StarsCanvas} from '../components';

    export default function Home(){
        return (
            <>
            <div className='relative z-0 bg-cream'>
            <div className="bg-cover bg-no-repeat bg-center"> {/*can add bg-hero-pattern*/}
                <Navbar/>
                <Hero/>
            </div>
                <About/>
                <Experience/>
                <Works/>
        <div className="relative z-0">
                <Contact/>
                <StarsCanvas/>
        </div>
        </div>
        </>
        )
    }