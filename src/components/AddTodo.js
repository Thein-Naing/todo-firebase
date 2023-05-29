import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddTodo = () => {
  const [title, setTitle ] = useState('');
  const handleSubmit= async (e)=> {
    e.preventDefault();
    if (title !== '') {
    await addDoc(collection(db, 'todos'), {
      title: '',
      completed: false,
    });
    setTitle('');
    }
  };

  return (

      <form
      onSubmit={handleSubmit}>
         <div className="input_container">
          <input
          type="text"
          placeholder="Enter your todo..."
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          />

      <div className='btn_container'>
        <button>Save</button>
      </div>

         </div>
      </form>




  )
}

export default AddTodo
