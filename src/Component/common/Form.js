import React from "react";
import style from "./Form.module.css";

const Form = (props) => {
  return (
    <>
      <form className={style.form} onSubmit={props.dataSubmitForm}>
      <h1>Expence Tracker</h1>
        <div className={style.inputField}>
            <div className="name">
                <label htmlFor="name">Expence :</label>
                <input type="text" name="name" id="name" required value={props.data.name} onChange={props.dataAddHandler}/>
            </div>
            <div className="price">
                <label htmlFor="price">Price :</label>
                <input type="number" name="price" id="price" required value={props.data.price} min={1} onChange={props.dataAddHandler}/>
            </div>
            <div className="date">
                <label htmlFor="date">Date :</label>
                <input type="date" name="date" id="date" required value={props.data.date} onChange={props.dataAddHandler}/>
            </div>
        </div>
        <div className={style.btnDiv}>
            <button className="btn add" type="submit">Add Expence</button>
        </div>
      </form>
    </>
  );
};

export default Form;
