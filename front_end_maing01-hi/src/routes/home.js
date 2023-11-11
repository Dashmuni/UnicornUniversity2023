//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi} from "uu5g05";
import Uu5Elements, {Button} from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import { withRoute } from "uu_plus4u5g02-app";
import Tile from "../bricks/joke/tile"

import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers
function makeItem(name, amount, bought) {
  this.name = name;
  this.amount = amount;
  this.bought = bought;
};

const items = [
  new makeItem("Eggs", 3, false),
  new makeItem("Bread", 42, true)
];
const owner = "Jozko Mkrvicka";
const coop = ["Jozko Jablcko ", "Jozko Hruska", "Jozko Cucoriedka"];

let Home = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { identity } = useSession();
    //@@viewOff:privatex`

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <RouteBar />
        <WelcomeRow left>
          <Uu5Elements.Text category="story" segment="heading" type="h2">
            <Lsi import={importLsi} path={["RecipeTest", "name"]} />
          </Uu5Elements.Text>
          <Uu5Elements.Text category="interface" segment="content" type="medium" colorScheme="building">
            {"Owner: " + owner}
          </Uu5Elements.Text>
          <div/>
          <Uu5Elements.Text category="interface" segment="content" type="medium" colorScheme="building">
            {"Shared with: " + coop}
          </Uu5Elements.Text>
          <Button icon="mdi-delete" significance="subdued" tooltip="Delete" text="Delete members" />
          <Button icon="mdi-plus" significance="subdued" tooltip="Add" text="Add members" />
        </WelcomeRow>
      
        <Tile
          shoppingListItem={{
            name: "Eggs",
            amount: "3",
            bought: false,
          }}
          //onDelete={handleDelete}
          //onUpdate={handleUpdate}
          style={{ width: 640, margin: "24px auto" }}
        />
        <Tile
          shoppingListItem={{
            name: "Bread",
            amount: "42",
            bought: true,
          }}
          //onDelete={handleDelete}
          //onUpdate={handleUpdate}
          style={{ width: 640, margin: "24px auto" }}
        />
      </div>
    );
    //@@viewOff:render
  },
});

//Home = withRoute(Home, { authenticated: true });

//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports
