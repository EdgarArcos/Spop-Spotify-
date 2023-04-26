import React from 'react'
import { BsFillPlusSquareFill } from "react-icons/bs";
import axios from 'axios';

export const CreatePlaylist = () => {

    const addList = async () => {


        try {
            const res = await axios.post("http://localhost:4000/api/list/add");
            console.log(res)   
            if(res.data.ok){
            setTodos([...todos, res.data.todo])
        }
        } catch (err) {
        console.log(err);
    
        }}

        const handleAddTodo = (e) => {
            if (e.key.toLowerCase() === 'enter') {
                addTodo(title);
                setTitle('');
            }  
        }


  return (
    <div className="flex flex-row p-2  hover:bg-newgray rounded-md cursor-pointer">
    <div>
      <BsFillPlusSquareFill className="text-2xl mr-3" />
    </div>
    <p onClick={addList} className="ml-2">Create Playlist</p>
  </div>
  )
}
