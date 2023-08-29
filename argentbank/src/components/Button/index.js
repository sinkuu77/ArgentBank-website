import './style.scss'


export default function Button({ text, type, onClick }) {
    return (
        <button className='btn' type={type} onClick={onClick}>
            {text}
        </button>
    )
}