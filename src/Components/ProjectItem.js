import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    //console.log('test');
    this.props.onDelete(id);
  }

  render() {

    return (
      <li className="App">
      {this.props.project.title} - {this.props.project.category}
      <a href="#" onClick = {this.deleteProject.bind(this,this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
