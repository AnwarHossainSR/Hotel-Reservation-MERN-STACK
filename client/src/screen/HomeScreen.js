import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Room from '../components/Room'

const HomeScreen = () => {
     const [loading, setLoading] = useState()
     const [error,setError] = useState()
     const [rooms,setRooms] = useState([])
     useEffect(async() => {
          try {
               setLoading(true)
               const data = (await axios.get('api/rooms/getallrooms')).data.rooms
               setRooms(data)
               setLoading(false)
          } catch (error) {
               setError(true)
               console.log(error)
               setLoading(false)
          }
     }, [])


     return (
          <div className="container">
               <div className="row justify-content-center mt-5">
                    {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error..</h1>) : rooms ? (rooms.map((room,i) => <div className="col-md-9 mt-2">
                         <Room room={room} Key={room.id}/>
                    </div>)) : ''}
               </div>
          </div>
     )
}

export default HomeScreen
