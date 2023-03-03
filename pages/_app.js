import "../styles/globals.css";
import ReactModal from "react-modal";

ReactModal.setAppElement("#_next");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
