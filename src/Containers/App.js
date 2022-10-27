import React,{Component} from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll  from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
class App extends Component{
    constructor()
    {
        super();
        this.state={
            robots:[],
            searchField:''
        }        
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=> {
                this.setState({robots: users})
            });

    }

    onSearchChange=(event)=>
    {
        this.setState({searchField:event.target.value});

        //console.log(filteredRobots)
    }
    render(){
        const {robots,searchField}=this.state;
        const filteredRobots=robots.filter( robot=>{

            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length?  <h1 className={'f1'}>Loading</h1> :(
                <div className={'tc'} >
                    <h1 className={'f1-l self-center'}>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                   <Scroll>

                    <CardList robots={filteredRobots}/>
                       {/*<ErrorBoundry>*/}
                       {/*</ErrorBoundry>*/}
                   </Scroll>
                </div>
        )
    }

}

export default App;
