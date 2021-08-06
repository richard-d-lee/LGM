import React from 'react';
import Topbar from './components/Topbar.jsx';
import Content from './components/Content.jsx';
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
            page: ""
        }
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.pageChange = this.pageChange.bind(this);
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
                        <Route path="/login">
                            <div>
                                <Topbar open={this.openNav} close={this.closeNav} change={this.pageChange} />
                                <Content page={"login"} />
                            </div>
                        </Route>
                        <Route path="/register">
                            <div>
                                <Topbar open={this.openNav} close={this.closeNav} change={this.pageChange} />
                                <Content page={"register"} />
                            </div>
                        </Route>
                        <Route path="/">
                            <div>
                                <Topbar open={this.openNav} close={this.closeNav} change={this.pageChange} />
                                <Content page={this.state.page} />
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
function Users() {
    return <h2>Users</h2>;
}

export default App;