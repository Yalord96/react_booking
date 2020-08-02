import React from "react";
import "./Hotels.scss";
import Hotel from "./hotel.jpg"

export default class Hotels extends React.Component{

    render() {
        return <section>
            <figure className={"hotels"}>
                <img className={"hotels__img"} src={Hotel} alt={"Картинка отеля"}></img>
                <figcaption>
                    <h1 className={"hotels__name"}>minora</h1>
                    <span className={"hotels__rating"}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <h3 className={"hotels__adress"}>dnepr centr....</h3>
                </figcaption>
            </figure>
            <figure className={"hotels"}>
                <img className={"hotels__img"} src={Hotel} alt={"Картинка отеля"}></img>
                <figcaption>
                    <h1 className={"hotels__name"}>minora</h1>
                    <span className={"hotels__rating"}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <h3 className={"hotels__adress"}>dnepr centr....</h3>
                </figcaption>
            </figure>
            <figure className={"hotels"}>
                <img className={"hotels__img"} src={Hotel} alt={"Картинка отеля"}></img>
                <figcaption>
                    <h1 className={"hotels__name"}>minora</h1>
                    <span className={"hotels__rating"}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <h3 className={"hotels__adress"}>dnepr centr....</h3>
                </figcaption>
            </figure>
        </section>
    }

}