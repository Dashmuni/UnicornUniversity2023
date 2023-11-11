//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils } from "uu5g05";
import { Box, Text, Line, Button, DateTime } from "uu5g05-elements";
import Config from "./config/config.js";
//@@viewOff:imports

const Tile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Tile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    shoppingListItem: PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.int,
      imageUrl: PropTypes.string,
      bought: PropTypes.boolean
    }).isRequired/*,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,*/
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    function handleDelete(event) {
      props.onDelete(new Utils.Event(props.shoppingListItem, event));
    }

    function handleUpdate(event) {
      props.onUpdate(new Utils.Event(props.shoppingListItem, event));
    }
    //@@viewOff:private

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

    return (
      <Box {...elementProps}>
        <Text category="interface" segment="title" type="minor" colorScheme="building">
          {props.shoppingListItem.name}
        </Text>
        <div>
          <Text category="interface" segment="content" type="medium" colorScheme="building">
            {props.shoppingListItem.amount}
          </Text>
        </div>
        <div>
          <img src={props.shoppingListItem.imageUrl} />
        </div>
        <div>
          <Text category="interface" segment="content" type="medium" significance="subdued" colorScheme="building">
            {"Has it been bought? : "+ props.shoppingListItem.bought}
          </Text>
        </div>
        <Box significance="distinct">
          <Button icon="mdi-check" significance="subdued" tooltip="Add" text="Add members" />
          <Button icon="mdi-pencil" onClick={handleUpdate} significance="subdued" tooltip="Update" />
          <Button icon="mdi-delete" onClick={handleDelete} significance="subdued" tooltip="Delete" />        
        </Box>
      </Box>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Tile };
export default Tile;
//@@viewOff:exports