import React, { Component } from 'react';
import Projects from './Components/Projects';
import uuid from 'uuid';
import AddProject from './Components/AddProject';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects:[]
    };
  }

  componentDidMount() {
    this.getTodos();
  }
  componentWillMount() {
    this.getProjects();
    //this.getTodos();
  }

  getTodos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success:function(data){
        this.setState({todos:data},function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr,status,err){
        console.log(err);
      }
    });
  }

  getProjects(){
    this.setState({projects:[
      {
        id:uuid.v4(),
        title:'Business web',
        category:'web1'
      },
      {
        id:uuid.v4(),
        title:'Personal web',
        category:'web2'
      },
      {
        id:uuid.v4(),
        title:'social web',
        category:'web3'
      }
    ]});
  }




  handleDelete(id){
    console.log(id);
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});

  }

  handleAdded(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
      <AddProject addProject = {this.handleAdded.bind(this)}/>
      <Projects onDelete = {this.handleDelete.bind(this)} projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
