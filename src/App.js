import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from './components/Footer'

const App = () => {
  const [data, setData] = useState([])

  // craete a new function for fetch API
  const fetchApi = async () => {
    const url = "https://fakestoreapi.com/products"
    const response = await fetch(url)
    const response_json = await response.json()
    // console.log(response_json,"here")
    // set all data to the setData state
    setData(response_json)
  }

  useEffect(() => {

    // calling the function
    fetchApi()
  }, [])

  return (
    <>
      <h1 className='flex justify-center text-6xl italic text-pink-600 mb-10 underline'>SIMPLE FETCHING API FROM FAKEAPI</h1>
      <div className='w-full mt-2 mx-auto grid grid-cols-5 gap-5'>
 
        {data && data.map((val, index) => {
          return (
            <div className='border shadow-lg' key={index}>
              <div className='w-full h-96 bg-slate-100'>
                <div className='flex justify-center'>
                  <img className='h-72 w-full' src={val.image ? val.image : ""} alt="_blank" />
                </div>
                <div className='flex justify-center font-medium'>Title : {val.title.substring(0, 20) + "..."}</div>
                <div className='flex justify-center font-medium'>Price : {val.price}</div>
                <div className='flex justify-center items-center px-2'>{val.description.substring(0, 40) + "..."}</div>
              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default App