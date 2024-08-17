import React, { useState } from 'react'
import style from './Home.module.css'
import Form from '../../common/Form'

const Index = () => {
  const [store,setStore] = useState([]);
  const [update,setUpdate] = useState([]);
  const [data,setData] = useState({
    name:"",
    price:"",
    date:"",
  })
  const dataAddHandler = (e) => {
    setData((prev) => (
      {
        ...prev,
        [e.target.name]:e.target.value,
      }
    ))
  }
  const dataSubmitForm  = (e) => {
    e.preventDefault();
    if(!data.id){
      data.id=Math.random()*100;
      setStore([...store,data])
      setData({
        name:"",
        price:"",
        date:"",
      })
    }
    else{
      const edited = store.filter((item) => {
        if(item.id == data.id){
          item.name = data.name
          item.price = data.price
          item.date = data.date
        }
        return item
      })
      setStore(edited)
      setData({
        name:"",
        price:"",
        date:"",
      })
    }
  }
  const crudOperation = (e,id) => {
    if (e == "update") {
      const updateData = store.filter((item) => {
        return item.id == id
      })
      setUpdate(updateData);
      setData({
        name:updateData[0].name,
        price:updateData[0].price,
        date:updateData[0].date,
        id:updateData[0].id
      })
    }
    else if (e == "delete") {
      const deleteData = store.filter((item) => {
        return item.id !== id
      })
      setStore(deleteData)
    }
  }
  return (
    <>
        <div className={`${style.main} container`}>
          <Form dataAddHandler={dataAddHandler} dataSubmitForm={dataSubmitForm} data={data}/>
          <hr />
          <table className={style.table}>
            <thead>
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Price</th>
              <th>date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
              {store.map((item,Index) => (
                <>
                <tr key={Index+1}>
                  <td>{Index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.date}</td>
                  <td><button className='btn update' onClick={() => crudOperation("update",item.id)}>Update</button></td>
                  <td><button className='btn delete' onClick={() => crudOperation("delete",item.id)}>Delete</button></td>
                </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default Index
