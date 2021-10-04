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
    case 'ADD_PEOPLE': 
    return {
      ...state,
      people: [...state.people, action.payload], 
      isModal: true, 
      modalContent: 'person added', 
    }

    case 'NO_VALUE': 
    return {
      ...state, 
      isModal: true, 
      modalContent: 'empty person'
    }

    case 'CLOSE_MODAL': 
    return {
      ...state, 
      isModal: false, 
      modalContent: ''
    }

    default: 
    throw new Error('invalid choice');

  }

}

const closeModal = () => {
  console.log('close modal');
  dispatch({type: 'CLOSE_MODAL'}); 
}

  const [name,setName] = useState(''); 
  const [state, dispatch] = useReducer(reducer, defState); 


  const submitHandler = e => {
    e.preventDefault(); 
    if(name.trim()) {
      dispatch({
        type: 'ADD_PEOPLE',
        payload: {id: new Date().getTime().toString(),name}
      });
      setName('');
    } else { 
      dispatch({
        type: 'NO_VALUE',
      });

    }
  }
  return (
    <React.Fragment>
      {state.isModal && <Modal
      modalContent={state.modalContent}
      closeModal={closeModal}/>}
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