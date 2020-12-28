import {React, useState} from "react";




function Filter(props) {
	const [serchV, setserchV] = useState("")
	return(
		<div className="filter">
			<input className="app__input" onChange={(event)=>{setserchV(event.target.value)}}/>
			<button className="app__button" type="button" onClick={()=>props.filter(serchV)}>
				фильтровать	
			</button>
		</div>
	)
	
}

export default Filter;