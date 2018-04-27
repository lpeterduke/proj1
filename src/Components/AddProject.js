import React, { Component } from 'react';
import uuid from 'uuid';
class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject:{}
    };
  }

  static defaultProps={
    categories: ['web1','web2','web3']
  }
  handleSubmit(e){
    if (this.refs.title.value === '') {
      alert('title is required');
    }else{
      this.setState({
        newProject:{
          id:uuid.v4(),
          title:this.refs.title.value,
          category:this.refs.category.value
        }
      }, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOption = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
      <h3>Add Project</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>title</label><br/>
          <input type="text" ref="title" />
        </div>
        <div>
          <label>category</label><br/>
          <select ref="category" >
            {categoryOption}
          </select>
        </div>
        <input type="submit" value="submit"/>

      </form>
      </div>
    );
  }
}

export default AddProject;
