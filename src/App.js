import './App.scss';
import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import Table from "./components/table";
import ShowItem from "./components/show-item";
import Filter from "./components/filter";
import AddRow from "./components/add-row";
import Header from "./components/header";
import ChoseData from "./components/chose-data";

function App() {

  const data1 = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
  const data2 = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
  const [loading, setLoading] = useState(false)
  const [direction, setDirection] = useState(null)
  const [row, setRow] = useState([])
  const [currentData, setCurrentData] = useState()
  const [serchVal, setSerchVal] = useState(null)
  const [finalData, setFinalData] = useState([])
  const [newRow, setNewRow] = useState({})
  const [className, setClassName] = useState(null)

//выбираем массив данных, загружаем данные с сервера, записываем их
function SetData(data) { 
  setTimeout(() => {setLoading(true)}, 0);
  axios.get(data).then (
    (res)=>{             
      setCurrentData(res.data);
      setFinalData(res.data)
      setLoading(false) 
    } 
  )   
}
 

//сортировка
  function sorting(item) {
    if (direction === true||null) {
      finalData.sort((prev, next) => prev[item] > next[item] ? 1: -1);     
      setDirection(false);
    } else {
      finalData.sort((prev, next) => prev[item] < next[item] ? 1: -1);      
      setDirection(true);    
    }
  }

//подробная информация по клику на строку
  function showItem (item) {       
    return setRow(item);
  }
//фильтрация
  const filter = (item) => {
    if (item==="") {
      setFinalData(currentData)
    }else {
      setFinalData (
        currentData.filter(el=>{
          return (
            el['firstName'].toLowerCase().includes(item.toLowerCase())+
            el['lastName'].toLowerCase().includes(item.toLowerCase())+
            el['email'].toLowerCase().includes(item.toLowerCase())+
            el['phone'].toLowerCase().includes(item.toLowerCase())
          )
        })
      )
    }    
  }
//Добавление новой строки
function AddClick (item) {
  if ((item.id===""||item.id==undefined)||
    (item.firstName===""||item.firstName===undefined)||
    (item.lastName===""||item.lastName===undefined)||
    (item.email===""||item.email===undefined)||
    (item.phone===""||item.phone===undefined)) {
  alert("заполните все пункты")
  }else{
    setNewRow(item)
    pushRow(item)
    console.log(item);
  }
}
function pushRow (row) {
  finalData.push(row)
}
 
  return ( 
    <div className="app">
      <div className="wrapper">
        <Header/>
        <ChoseData SetData={SetData} data1={data1} data2={data2}/>
        <Filter filter={filter}/>
        <AddRow onclick={AddClick}></AddRow>
        {loading===true? "Подождите, данные загружаются" : 
        <Table 
          data={finalData} 
          sorting={sorting}
          showItem={showItem}
          direction={direction}
        />}
        <ShowItem
          row={row}
        />
      </div>
    </div>
  );
}

export default App;
