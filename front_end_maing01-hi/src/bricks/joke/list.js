//@@viewOn:imports
import { Utils, PropTypes, createVisualComponent} from "uu5g05";
import Tile from "./tile"

import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

let List = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "List",
  //@@viewOff:statics

   //@@viewOn:propTypes
   propTypes: {
    lists: PropTypes.array.isRequired,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    lists: [],
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    function handleDelete(event) {
      const list = event.data;
      props.onDelete(list);
    }

    function handleUpdate(event) {
      props.onUpdate(event.data);
      
    }
    //@@viewOff:private

    function remove(list) {
      setLists((prevLists) => prevLists.filter((item) => item.id !== list.id));
    }

    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    return (
      <div {...attrs}>
        {props.lists.map((list) => (
          <Tile
            key={list.id}
            list={list}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            style={{ width: 640, margin: "24px auto" }}
          /> 
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

//Home = withRoute(Home, { authenticated: false });

//@@viewOn:exports
export { List };
export default List;
//@@viewOff:exports
