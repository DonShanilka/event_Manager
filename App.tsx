import { Provider } from "react-redux";
import {store} from "@/src/store/store"
import TabLayout from "./src/app/(tabs)/_layout";
export default function App(){
    return(
        <Provider store={store}>
            <TabLayout/>
        </Provider>
    )
}