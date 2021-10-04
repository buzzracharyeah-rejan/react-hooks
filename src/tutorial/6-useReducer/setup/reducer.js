export const reducer = (state, action) => {
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
  
      case 'DELETE_PERSON': 
      const filteredPeople = state.people.filter(
        person => person.id !== action.payload.id
      );
  
      return {
        ...state, 
        people: filteredPeople, 
        isModal: true, 
        modalContent: 'person deleted'
      }
  
  
      default: 
      throw new Error('invalid choice');
  
    }
  
  }