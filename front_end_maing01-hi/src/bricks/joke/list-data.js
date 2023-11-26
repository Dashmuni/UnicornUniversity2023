//@@viewOn:imports
import { createComponent, Utils, useState } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports


function makeItem(id,name, amount, bought) {
  this.id = Utils.String.generateId(),
  this.name = name;
  this.amount = amount;
  this.bought = bought;
};
/*
const initialLists = [
  new makeItem("Eggs", 3, false),
  new makeItem("Bread", 42, true)
];*/


const initialLists = [
  {
    id: Utils.String.generateId(),
    name: "Eggs",
    amount: 3,
    bought: false,
  },
  {
    id: Utils.String.generateId(),
    name: "Bread",
    amount: 42,
    bought: true,
  }
];

let ListData = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListData",
  //@@viewOff:statics

  render(props) {
    //@@viewOn:private
    const [lists, setLists] = useState(initialLists);
    
  
    function remove(list) {
      setLists((prevLists) => prevLists.filter((item) => item.id !== list.id));
    }

    function create(values) {
      const list = {
        ...values,
        id: Utils.String.generateId(),
        uuIdentityName: "Test01",
      };
      
      setLists((prevLists) => [...prevLists, list]);
      return list;
    }

    const value = { lists, remove, create };
    return typeof props.children === "function" ? props.children(value) : props.children;
  }
})
//@@viewOn:exports
export { ListData };
export default ListData;
//@@viewOff:exports
