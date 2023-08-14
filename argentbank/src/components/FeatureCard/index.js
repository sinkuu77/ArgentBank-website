import './style.scss'

export default function FeatureCard({ icon, title, description }) {
    return(
        <div className='feature'>
            <img src={icon} alt='Chat Icon' className='feature__icon'/>
            <h3 className='feature__title'>{title}</h3>
            <p>
            {description}
            </p>
        </div>
    )
}