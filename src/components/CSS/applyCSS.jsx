import './applyCSS.css';
import style from './applycss.module.css';

function Hello() {

    const name = "Faraz";
    const headingStyle = {
        color: 'red',
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: '40px',
        fontFamily: 'Arial, sans-serif',
        margin: '20px'
    }

    return <>
        <h2 style={headingStyle}>Hello {name}</h2>
        <p className='paragraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, qui!</p>
        <p className={style.test}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eius dicta iste culpa fugit enim!</p>
    </>


}


export default Hello;