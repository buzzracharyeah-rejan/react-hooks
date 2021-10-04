import React, {useState, useReducer} from 'react'; 
import Modal from './Modal'
const defState = {
  people: [], 
  isModal: false, 
  modalContent: 'say hi'
}
const Index = () => {
  // const [showModal, setShowModal] = useState(false); 
  // const [modalContent, setModalContent] = useState('say hello');
  
const reducer = (state, action) => {
  // console.log(state);
  switch(action.type) {
    case 'add': 
    return {...state, people: [...state.people,
      {id: new Date().getTime().toString(), name},
    ], 
    isModal: true, 
    modalContent: 'person added', 
  }
    default: 
    throw new Error('invalid choice');

  }

}

  const [name,setName] = useState(''); 
  const [state, dispatch] = useReducer(reducer, defState); 


  const submitHandler = e => {
    e.preventDefault(); 
    dispatch({type: 'add'})
  }
  return (
    <React.Fragment>
      {state.isModal && <Modal modalContent={state.modalContent}/>}
      <form className='form' onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' value={name}
        onChange={e => setName(e.target.value)} />
        <button>submit</button> 
      </form>
      {state.people.map(person => (
        <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Index; 