//@@viewOn:imports
import { createComponent, Utils, useState } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

// --- Test 3 section 5_1-Properties ---
const initialShoppingLists = [
  {
    id: Utils.String.generateId(),
    name: "Cake",
    description: "No cake",
    imageUrl: "",
    averageRating: 1,
    uuIdentityName: "Homeless",
    sys: { cts: "2022-03-17T18:56:38.990Z" },
  },
  {
    id: Utils.String.generateId(),
    name: "Nope",
    description: "Nopity",
    imageUrl: "",
    averageRating: 5,
    uuIdentityName: "123456",
    sys: { cts: "2023-04-13T03:45:36.990Z" },
  },
];


const ListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [shoppingLists, setshoppingLists] = useState(initialShoppingLists
    );


    function remove(shoppingList) {
      setshoppingLists((prevshoppingLists) => prevshoppingLists.filter((item) => item.id !== shoppingList.id));
    }

    function create(values) {
      const shoppingList = {
        ...values,
        id: Utils.String.generateId(),
        averageRating: Math.round(Math.random() * 5), // <0, 5>
        uuIdentityName: "Test01",
        sys: {
          cts: new Date().toISOString(),
        },
      };

      setshoppingLists((prevshoppingLists) => [...prevshoppingLists, shoppingList]);
      return shoppingList;
    }

    function update() {
      throw new Error("shoppingList update is not implemented yet.");
    }
    //@@viewOff:private

    //@@viewOn:render
    const value = { shoppingLists, remove, update, create };
    return typeof props.children === "function" ? props.children(value) : props.children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports
