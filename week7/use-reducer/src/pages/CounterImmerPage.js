import {useReducer} from 'react'
// we need to import produce from immer which is a library 
import {produce} from 'immer'
import Panel from '../components/Panel'
import Button from '../components/Button'

const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const SET_VALUE_TO_ADD = 'set-value-to-add'
const ADD_VALUE_TO_COUNT = 'add-value-to-count'

const reducer = (state, action) => {
    // state is now an object with key value pairs as state variable
    switch(action.type) {
        case INCREMENT_COUNT:
            // only allowed because of immer produce()
            state.count = state.count + 1
            // return to exit the case, no need to return a new state object after direct mutations
            return
        case DECREMENT_COUNT:
            state.count = state.count - 1
            return
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload
            return
        case SET_VALUE_TO_ADD:
            state.count = state.count + state.valueToAdd
               
        default:
            // if none of the cases are met, unknown action type
            // return existing copy of state so we don't wipe our state object completely
            return 
    }
}

const CounterPage = ({initialCount}) => {
  // const {initialCount} = props
  // create a piece of state var called count and its setter function
  // this time we are recieving a prop from the parent and setting it as the initial count
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)
  // by wrapping our reducer argument with produce() from immer, we get alot of steps for free
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount, 
    valueToAdd: 0,
  })

  const handleIncrement = () => {
    // setCount((currentCount) => currentCount + 1)
    // BAD NEVER EVER count = count + 1
    // setCount(count + 1)
    // dispatch is how we update our state object, it only ever takes one argument, an action object
    dispatch({type: INCREMENT_COUNT})
  }

  const handleDecrement = () => {
    // setCount(count - 1)
    dispatch({type: DECREMENT_COUNT})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // add user input number to count
    // setCount(count + valueToAdd)
    // reset valueToAdd
    // setValueToAdd(0)
    dispatch({type: ADD_VALUE_TO_COUNT})
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0
    // console.log(value, typeof value)
    // setValueToAdd(value)
    dispatch({type: 'set-value-to-add', payload: value})
  }
  return (
    <Panel>
      <h1>Count is currently {state.count}</h1>
      <div className="flex flex-row">
        <Button success rounded onClick={handleIncrement} className="mr-4">
          Increment
        </Button>
        <Button danger rounded onClick={handleDecrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="p-1 m-4 bg-slate-50 border border-slate-300"
          type="number"
          onChange={handleChange}
          value={state.valueToAdd || ''}
        />
        <Button primary rounded>
          Add Custom Amount!
        </Button>
      </form>
    </Panel>
  )
}

export default CounterPage