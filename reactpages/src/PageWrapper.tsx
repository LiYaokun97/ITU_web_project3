import UserProvider from './context/UserContext';
import Header from "./index/Header";
import Banner from "./index/Banner";
import React from 'react';
import { Route, Switch } from "react-router-dom";
import IndexBody from "./index/IndexBody";
import LoginBody from "./login/loginBody";
import BasketBody from "./basket/basket";
import ProductBody from "./productdetail/ProductBody";
import AboutBody from "./about/AboutBody";
import TermsBody from "./terms/TermsBody";
import ContactBody from "./contact/ContactBody";
import Footer from "./index/Footer";
import BasketProvider from "./context/BasketContext";

class PageWrapper extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <UserProvider>
                <BasketProvider>
                    <Header />
                    <Banner />
                    <Switch>
                        <Route path="/index" component={IndexBody}>
                            <IndexBody />
                        </Route>
                        <Route path="/login" component={LoginBody} />
                        <Route path="/basket" component={BasketBody} />
                        <Route path="/productdetail" component={ProductBody} />
                        <Route path="/about" component={AboutBody}/>
                        <Route path="/terms" component={TermsBody}/>
                        <Route path="/contact" component={ContactBody}/>
                        <Route component={IndexBody} />
                    </Switch>
                    <Footer />
                </BasketProvider>
            </UserProvider>
        );
    }
}

export default PageWrapper;
