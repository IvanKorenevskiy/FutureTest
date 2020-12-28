import React from "react";


function ShowItem(props) {
	const FirstName = props.row.firstName ? props.row.firstName:""
	const LastName = props.row.address ? props.row.lastName:""
	const AdressStreetAddress = props.row.address ? props.row.address.streetAddress:""
	const AdresssCity = props.row.address ? props.row.address.city:""
	const AdressState = props.row.address ? props.row.address.state:""
	const AdressZip = props.row.address ? props.row.address.zip:""
	return(
		<div className="under-row">
			<div className="under-row__title">Информация о выбранном пользователе: {(FirstName)+" "+(LastName)}</div>
			<div><b>Адрес проживания:</b> {AdressStreetAddress}</div>
			<div><b>Город:</b> {AdresssCity}</div>
			<div><b>Провинция/штат:</b> {AdressState}</div>
			<div><b>Индекс:</b> {AdressZip}</div>
		</div>
	)
	
}

export default ShowItem;