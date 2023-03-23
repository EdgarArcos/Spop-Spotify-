import { types } from "./types/types"

const musicReducer=(state, action)=>{
    const {type, payload} = action

      switch(type){
        case types.GET_ALL_MUSIC: 
          return{...state, likelist:payload.data, photolist:payload.data[payload.randomIndex]}

        case types.CHANGE_PLAYON:
            return{...state, playOn: true}
            
    default: state


  }
}
export default musicReducer