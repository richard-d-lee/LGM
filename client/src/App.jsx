import React from 'react';
import Topbar from './components/Topbar.jsx';
import Content from './components/Content.jsx';
import myfont from './Myfont.ttf';
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
    }

    setLogged(name) {
        this.setState({ logged: !this.state.logged, username: name })
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
        console.log(this.state)
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/login">
                            <div>
                                <Topbar username={this.state.username} logged={this.state.logged} open={this.openNav} close={this.closeNav} change={this.pageChange} />
                                <Content setLogged={this.setLogged} page={"login"} />
                            </div>
                        </Route>
                        <Route path="/register">
                            <div>
                                <Topbar username={this.state.username} logged={this.state.logged} open={this.openNav} close={this.closeNav} change={this.pageChange} />
                                <Content page={"register"} />
                            </div>
                        </Route>
                        <Route path="/crispyscollections">
                            <div>
                                <Topbar username={this.state.username} logged={this.state.logged} open={this.openNav} close={this.closeNav} change={this.pageChange} />
                                <Content page={this.state.page} />
                            </div>
                        </Route>
                        <Route path="/simulationstation">
                            <div>
                                <Topbar username={this.state.username} logged={this.state.logged} open={this.openNav} close={this.closeNav} change={this.pageChange} />
                                <Content page={this.state.page} />
                            </div>
                        </Route>
                        <Route path="/">
                            <div>
                                <Topbar username={this.state.username} logged={this.state.logged} open={this.openNav} close={this.closeNav} change={this.pageChange} />
                                <Content page={this.state.page} />
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;