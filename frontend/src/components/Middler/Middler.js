import React, {useState} from 'react';
import './Middler.css';

const Middler = ({addCity}) => {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value)
    };
    const click = (event) => {
        event.preventDefault();
        addCity(text);
        setText('');
    };
    return (
        <div className="Middler">
            <span>Избранное</span>
            <form>
                <input placeholder='Добавить новый город' value={text} onChange={handleChange}/>
                <button onClick={click}>┿</button>
            </form>
        </div>
    );
};

export default Middler;