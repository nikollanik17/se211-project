import "styles/globals.scss";
import "styles/navbarreset.scss";
import { useRouter } from "next/router";

// swiper
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "rc-slider/assets/index.css";

// components
import Navbar from "components/Layout/Navbar/Navbar";

// redux
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import teams from "../src/store/reducers/team";
import registration from "../src/store/reducers/registration";
import loader from "../src/store/reducers/loader";
import notification from "../src/store/reducers/notification";

import LoadingScreen from "../src/hoc/Loading/Loading";
import { SnackbarProvider } from "notistack";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  variantSuccess: { backgroundColor: "#00A3AD !important" },
  variantError: { backgroundColor: "#F64E60 !important" },
}));

const rootReducer = combineReducers({
  teams,
  registration,
  loader,
  notification,
});

const composeEnhancers = compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Provider store={store}>
      <LoadingScreen />
      {router.pathname === "/" && (
        <header>
          <Navbar />
        </header>
      )}
      <SnackbarProvider
        classes={classes}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        maxSnack={2}
      >
        <main>
          <Component {...pageProps} />
        </main>
      </SnackbarProvider>
    </Provider>
  );
}

export default MyApp;
