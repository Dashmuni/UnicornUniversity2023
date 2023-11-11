//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
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
    //@@viewOff:private

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
        </WelcomeRow>
        <Tile
          shoppingListItem={{
            name: "Bunny ate the wedding ring!",
            text: "Why did the bunny eat the wedding ring? Because he heard it was 18 carrots!",
            uuIdentityName: "John Smith",
            sys: { cts: "2022-03-17T09:48:38.990Z" },
          }}
          //onDelete={handleDelete}
          //onUpdate={handleUpdate}
          style={{ width: 640, margin: "24px auto" }}
        />
        <Tile
          shoppingListItem={{
            name: "F5",
            text: "I love the F5 key. It´s just so refreshing.",
            uuIdentityName: "Harry Potter",
            sys: { cts: "2022-02-14T10:48:38.990Z" },
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
