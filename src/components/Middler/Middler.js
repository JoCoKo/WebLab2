import React from 'react';
import './Middler.css';

const Middler = () => {
    return (
        <div className="Middler">
            <span>Избранное</span>
            <form>
                <input placeholder='Добавить новый город'/>
                <button>X</button>
            </form>
        </div>
    );
};

export default Middler;