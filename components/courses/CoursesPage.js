import React, { Component } from 'react';
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import propTypes from "prop-types";

class CoursesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      course: {
      title: ""
    }
    }
  }

  handlechange = event => {
    // Spread operator to copy couse into new const and over write with new title
    const course = { ...this.course, title: event.target.value };
    //Object short hand syntax course:course , can omit right hand is equal to left
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createCourse(this.state.course);
    this.setState(prevState => ({
      course: {                   // object that we want to update
          ...prevState.course,    // keep all other key-value pairs
          title: ''               // update the value of specific key
      }
    }))
  };

  renderCourses() {
    return this.props.courses.map((course) => {
      return <div key={course.title}>{course.title}</div>;
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.handlechange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        <div>
          {this.renderCourses()}
        </div>
      </form>
 
    );
  }
}

CoursesPage.propTypes = {
  createCourse: propTypes.func.isRequired,
  courses: propTypes.array.isRequired,
};

function mapStateToProps(state) {
  console.log(state);
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
