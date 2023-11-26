///@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi, LanguageListProvider} from "uu5g05";
import Uu5Elements, {Button} from "uu5g05-elements";

import { withRoute } from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import ListProvider from "../bricks/joke/list-provider";
import ListView from "../bricks/joke/list-view";
//import List from "../bricks/joke/list.js";
//import ListData from "../bricks/joke/list-data.js";
import CreateView from "../bricks/joke/create-view";
//@@viewOff:imports

let Home = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <>
        <RouteBar />
        <ListProvider>
          {({ shoppingLists, remove, update, create }) => (
            <>
              <CreateView onCreate={create} style={{ maxWidth: 400, margin: "24px auto", display: "block" }} />
              <ListView shoppingLists={shoppingLists} onDelete={remove} onUpdate={update} />
            </>
          )}
        </ListProvider>
      </>
    );
    //@@viewOff:render
  },
});

Home = withRoute(Home, { authenticated: false });

//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports