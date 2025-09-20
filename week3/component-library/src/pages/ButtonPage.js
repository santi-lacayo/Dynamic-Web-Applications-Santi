//Here you could put all your components together
import Button from '../components/Button'

const App = () =>{
  return (
    <>
    <div>
      {/* Children of the component Button */}
      <Button primary onClick={() => {console.log('CLICK')}}>Buy Now</Button>
      </div>
      <div>
      <Button secondary rounded className="fixed right-0 bottom-0">Secondary Button</Button>
      </div>
      <div>
      <Button danger>Delete</Button>
      </div>
      <div>
      <Button warning outline rounded>Are you sure?</Button>
      </div>
      <div>
      <Button success outline>Success</Button>
    </div>
    </>
  )
}

export default ButtonPage