const initialState= {
  route: "/"
}
 export default function reducer(state = initialState, action){
   switch(action.type){
     case 'ADD_HOME_ROUTE':
      return{...state, route: '/'}
     case 'ADD_BLOG_ROUTE':
      return{...state, route: '/blog'}
     case 'ADD_PORT_ROUTE':
      return{...state, route: '/portfolio'}
     default:
      return state;
   }
 }
