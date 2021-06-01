import '../styles/globals.css'
import { StaticRouter } from "react-router";

function App({ Component, pageProps }) {
  if(typeof window === 'undefined'){
    return (
      <StaticRouter location="/" context={{}}>
        <Route path="/" exact render={() => <Contact />} />
        <Route path="/ciekawe" render={() => <Contact />} />    
        <Component {...pageProps} />
      </StaticRouter>
    );
  }
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
export default App;