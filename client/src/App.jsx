import React from 'react';
import Topbar from './components/Topbar.jsx';
import Content from './components/Content.jsx';
import myfont from './Myfont.ttf';
import { useHistory } from "react-router-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            page: "home",
            logged: false,
        }
        this.setLogged = this.setLogged.bind(this)
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.pageChange = this.pageChange.bind(this);
        this.render = this.render.bind(this)
        this.renderBar = this.renderBar.bind(this)
        this.renderContent = this.renderContent.bind(this)
    }

    renderBar() {
        return <Topbar username={this.state.username}
            logged={this.state.logged}
            open={this.openNav}
            close={this.closeNav}
            change={this.pageChange} />
    }

    renderContent(page) {
        return <Content
            change={this.pageChange}
            setLogged={this.setLogged}
            logged={this.state.logged}
            page={page} />
    }

    setLogged(name) {
        this.setState({ page: 'home', logged: !this.state.logged, username: name })
    }

    pageChange(newPage) {
        this.setState({ page: newPage });
    }

    openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    closeNav() {
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/about">
                            <div>
                                {this.renderBar()}
                                {this.renderContent('about')}
                            </div>
                        </Route>
                        <Route path="/login">
                            <div>
                                {this.renderBar()}
                                {this.renderContent('login')}
                            </div>
                        </Route>
                        <Route path="/terms">
                            <div>
                                {this.renderBar()}
                                {this.renderContent('terms')}
                            </div>
                        </Route>
                        <Route path="/register">
                            <div>
                                {this.renderBar()}
                                {this.renderContent('register')}
                            </div>
                        </Route>
                        <Route path="/crispyscollections">
                            <div>
                                {this.renderBar()}
                                {this.renderContent('crispy')}
                            </div>
                        </Route>
                        <Route path="/simulationstation">
                            <div>
                                {this.renderBar()}
                                {this.renderContent('simstat')}
                            </div>
                        </Route>
                        <Route path="/home">
                            <div>
                                {this.renderBar()}
                                {this.renderContent('home')}
                            </div>
                        </Route>
                        <Route path="/">
                            <div>
                                {this.renderBar()}
                                {this.renderContent('home')}
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;