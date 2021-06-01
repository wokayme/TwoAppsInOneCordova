
import { Fragment } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Contact from './contact';
// import HomePage from './index';

const CordovaComponent = ()=>{
    return <Fragment>
        {/* <Route path="/ciekawe" render={() => <Contact />} /> */}
        {/* <Route path="/" render={() => <HomePage />} /> */}
    </Fragment>
}

export default CordovaComponent;