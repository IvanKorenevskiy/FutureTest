import {React, useState} from "react";


function ChoseData(props) {
	return(
		<div className="chenge-data">
			<button 
				className="app__button app__button--start" 
				type="button" 
				onClick={()=>props.SetData(props.data2)}
			>
				Выбрать большой массив данных
			</button>
			<button 
				className="app__button app__button--start" 
				type="button"
				onClick={()=>props.SetData(props.data1)}
				
			>
				Выбрать маленький массив данных
			</button>
		</div>
	)	
}

export default ChoseData;