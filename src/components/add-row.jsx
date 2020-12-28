import {React, useState} from "react";
//{id:"",firstName:"",lastName:"",email:"",phone:""}
function AddRow(props) {
	const [newId, setNewId] = useState()
	const [newFirstName, setNewFirstName] = useState()
	const [newLastName, setNewLastName] = useState()
	const [newEmail, setNewEmail] = useState()
	const [newPhone, setNewPhone] = useState()
	const newRow = {id:newId,firstName:newFirstName,lastName:newLastName,email:newEmail,phone:newPhone}
	return(
		<div className="add-row">
			<button className="app__button" onClick={()=>props.onclick(newRow)}>Добавить нового пользователя</button>
			<div>
				<input className="app__input" placeholder = "Введите id" onChange={(event)=>{setNewId(event.target.value)}}/>
				<input className="app__input" placeholder="Введите firstName" onChange={(event)=>{setNewFirstName(event.target.value)}}/>
				<input className="app__input" placeholder="Введите lastName" onChange={(event)=>{setNewLastName(event.target.value)}}/>
				<input className="app__input" placeholder="Введите email" onChange={(event)=>{setNewEmail(event.target.value)}}/>
				<input className="app__input" placeholder="Введите phone" onChange={(event)=>{setNewPhone(event.target.value)}}/>
			</div>
			<div className="add-row__warning">
				Все пункты должны быть заполнены *
			</div>
		</div>
	)
	
}

export default AddRow;