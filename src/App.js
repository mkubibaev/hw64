import React, {Component} from 'react';
import Layout from "./components/Layout/Layout";
import {Switch} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    {/*<Route path="/" exact component={BurgerBuilder}/>*/}
                    {/*<Route path="/checkout" component={Checkout}/>*/}
                    {/*<Route path="/orders" component={Orders}/>*/}
                </Switch>
            </Layout>
        );
    }
}

export default App;
