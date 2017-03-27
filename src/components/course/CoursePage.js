import React, {propTypes} from 'react';
import {connect} from 'react-redux';

class CoursePage extends React.component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };
    }

onTitleChange(event) {
    const course = this.state.course;
    course.title=event.target.value;
    this.setState({course: course });
}
onclickSave() {
    // alert('saving ${this.state.course.title}');
    this.props.dispatch(courseActions.createCourse(this.state.course));
}
courseRow(course, index) {
	return <div key={index}> {course.title}</div>;
}
render() {
	debugger;
    return (
        <div>
            <h1>Course</h1>
            {this.props.courses.map(this.courseRow)}
            <h2>Add Course</h2>
            <input
                type="text"
                onChange={this.onTitleChange}
                value={this.state.course.title} />

                <input
                    type="submit"
                    value="save"
                    onClick={this.onclickSave} />
        </div>
      );
   }
}
coursesPage.propTypes = {
	dispatch: propTypes.function.isRequired,
	courses: propTypes.array.isRequired
};
function mapStateToProps(state, ownProps) {
	return {
		debugger;
		return {
		course: state.course
	};
}

export default connect(mapStateToProps)(CoursePage);
