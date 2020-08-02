import React from "react";
import "./Filter.scss";


export default class Filter extends React.Component {


    render() {
        return <div className={"filter"}>
            <form action={""} className={"filter__byhotel"}>
                <label htmlFor={"filter-box"} className={"filter__byhotel_name"}>Filter Box</label>
                <input id={"filter-box"} placeholder={"Filter by hotel name"} className={"filter__byhotel_value"}/>
            </form>
            <form action={""} className={"filter__rating"}>
                <label className={"filter__rating_name"}>Filter by rating</label>
                <p><input className={"filter__rating_stars"} type={"checkbox"}/>
                    <span className={"filter__rating_star"}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </p>
                <p><input className={"filter__rating_stars"} type={"checkbox"}/>
                    <span className={"filter__rating_star"}>&#9733;&#9733;&#9733;&#9733;<span
                        className={"filter__rating_uncolor"}>&#9733;</span></span>
                </p>
                <p><input className={"filter__rating_stars"} type={"checkbox"}/>
                    <span
                        className={"filter__rating_star"}>&#9733;&#9733;&#9733;<span
                        className={"filter__rating_uncolor"}>&#9733;&#9733;</span></span>
                </p>
                <p><input className={"filter__rating_stars"} type={"checkbox"}/>
                    <span className={"filter__rating_star"}>&#9733;&#9733;
                        <span className={"filter__rating_uncolor"}>&#9733;&#9733;&#9733;</span></span>
                </p>
                <p><input className={"filter__rating_stars"} type={"checkbox"}/>
                    <span className={"filter__rating_star"}>&#9733;<span
                        className={"filter__rating_uncolor"}>&#9733;&#9733;&#9733;&#9733;</span></span>
                </p>
                <p><input type="submit" value={"FILTER"} className={"filter__button"}/></p>
            </form>
        </div>
    }
}