import React from 'react';
import "./Form.css";

function Form() {
    return <form action="" className="form">
        <select className="form_item">
            <option selected>
                Destination
            </option>
            <option>
                Днепр
            </option>
        </select>
        <input className="form_item__info" placeholder="Check-in"></input>
        <input className="form_item__info" placeholder="Check-out"></input>
        <input className="form_item__value" placeholder="Adults"></input>
        <input className="form_item__value" placeholder="Children"></input>
        <input className="form_item__button" type="submit" value="SEARCH"></input>
    </form>
}
export default Form;