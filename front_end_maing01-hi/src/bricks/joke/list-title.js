//@@viewOn:imports
import { createComponent, PropTypes, useEffect } from "uu5g05";
import Config from "./config/config";
//@@viewOff:imports

const ListTitle = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "ListTitle",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    shoppingLists: PropTypes.array,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    shoppingLists: [],
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private

    /* Title */
    useEffect(() => {
      const originalTitle = document.title;
      document.title = `${originalTitle} - ${props.shoppingLists.length} shopping lists`;

      return () => (document.title = originalTitle);
    }, [props.shoppingLists.length]);
    //@@viewOff:private

    //@@viewOn:render
    return null;
    //@@viewOff:render
  },
});

export default ListTitle;