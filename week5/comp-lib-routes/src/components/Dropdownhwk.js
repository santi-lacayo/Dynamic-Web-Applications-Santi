import { useState } from "react"

const Dropdown = ({ title, items }) => {
    //make a constant to control the dropdown and set the initial state to false
    const [open,setOpen] = useState(false);

    //since it starts as false when clicking we want it to swith to true and open the dropdown
    const handleToggle = () => {
        setOpen(!open);
    };   
    return(
        <div>
            {/* button when clicking it will set it to open*/}
            <button onClick={handleToggle} className="flex justify-between p-3 bg-blue-600 hover:bg-blue-800 border-b  rounded-xl items-center">
                {/* way of showing the title that will be grabbed from our itmes list */}
                {title}
            </button>
            {/* menu once open is true what else to do*/}
            {open && (
        <ul>
            {/* items.map allows us to go through each of the items we created */}
          {items.map(item => (
            <li key={item.id} className="bg-cyan-400 hover:bg-cyan-600 border-2">
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default Dropdown