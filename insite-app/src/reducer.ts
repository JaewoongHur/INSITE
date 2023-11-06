import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import HeaderModalStateInfoReducer from "@reducer/HeaderModalStateInfo";
import SelectedSiteInfoReducer from "@reducer/SelectedSiteInfo";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: [],
  blacklist: [],
};

const rootReducer = combineReducers({
  HeaderModalStateInfo: HeaderModalStateInfoReducer,
  SelectedSiteInfo: SelectedSiteInfoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
