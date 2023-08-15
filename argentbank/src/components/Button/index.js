import './style.scss'


export default function Button({ text }) {
    return (
        <button className='btn'>
            {text}
        </button>
    )
}