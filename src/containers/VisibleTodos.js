import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo} from '../actions'
const mapStateToProps=state=>( {
    todos:state.todos
})

const maptDispatchToProps=dispatch=>({
    toggleTodo:id=>dispatch(toggleTodo(id))
})

export default connect(mapStateToProps,maptDispatchToProps)(TodoList)