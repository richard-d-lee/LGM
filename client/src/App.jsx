import React from 'react';
import Topbar from './components/Topbar.jsx';
import Content from './components/Content.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home"
        }
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.pageChange = this.pageChange.bind(this);
    }

    pageChange(newPage) {
        this.setState({page: newPage});
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
            <div>
                <Topbar open={this.openNav} close={this.closeNav} change={this.pageChange} />
                <Content page={this.state.page}/>
            </div>
        );
    }
}
export default App;