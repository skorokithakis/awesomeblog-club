import { AppProps } from "next/app";
import "../components/app.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
