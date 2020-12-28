import React from "react";
import {Arrow} from "../icons/arrow";
let className=""

function Table(props) {
	if (props.direction===true) {
		className="arrow--rotate-down"
	}if (props.direction===false) {
		className="arrow--rotate-upp"
	}else {}
	return(
		<div className="table-wrapper">
			<Arrow className={`${className} arrow`}/>
			<table className="table">
				<tbody>
					<tr className="table__title">
						<td onClick = {()=> props.sorting("id")}>id</td>
						<td onClick = {()=> props.sorting("firstName")}>firstName</td>
						<td onClick = {()=> props.sorting("lastName")}>lastName</td>
						<td onClick = {()=> props.sorting("email")}>email</td>
						<td onClick = {()=> props.sorting("phone")}>phone</td>
					</tr>
				</tbody>
			</table>
			<div className="table-scroll">
				<table className="table">
					<tbody>
					{props.data.map (
						item=>(
						<tr 
							className="table__body"
							key={item.id+item.firstName}
							onClick = {()=>props.showItem(item)}
						>
							<td>{item.id}</td>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
						</tr>
						)
					)}
					</tbody>
				</table>
			</div>
		</div>
	)
	
}

export default Table;