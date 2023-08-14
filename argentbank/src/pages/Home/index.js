import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import Header from '../../containers/Header'
import FeatureCard from '../../components/FeatureCard';

import Chat from '../../assets/icon-chat.png'
import Money from '../../assets/icon-money.png'
import Security from '../../assets/icon-security.png'

import '../../containers/Header/style.scss'
import './style.scss'


export default function Home() {
    return (
        <>
            <Header>
                <Link to='/login' className='nav__item'>
                    <FontAwesomeIcon className='nav__item--icon'icon={faCircleUser}/>
                    Sign In
                </Link>
            </Header>
            <main>
                <div className='hero'>
                    <section className="hero__content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="hero__content--subtitle">No fees.</p>
                        <p className="hero__content--subtitle">No minimum deposit.</p>
                        <p className="hero__content--subtitle">High interest rates.</p>
                        <p className="hero__content--text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                    <section className='features'>
                        <h2 class="sr-only">Features</h2>
                        <FeatureCard 
                        icon={Chat}
                        title={"You are our #1 priority"}
                        description={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
                        />
                        <FeatureCard 
                        icon={Money}
                        title={"More savings means higher rates"}
                        description={"The more you save with us, the higher your interest rate will be!"}
                        />
                        <FeatureCard 
                        icon={Security}
                        title={"Security you can trust"}
                        description={"We use top of the line encryption to make sure your data and money is always safe."}
                        />
                    </section>
            </main>
        </>
    )
}