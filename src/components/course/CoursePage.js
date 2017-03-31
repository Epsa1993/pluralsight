class coursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.state={
      'course':{'title':null, 'desc':null}
        };
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
      this.setState({course.title: event.target.value});
    }

    handleSubmit(event) {
      alert ('successfully submitted' +this.state.course.title);

    }

  render(){
    <h1> course </h1>
    <h1>enter course: </h1> <input type="text" value={this.state.course.title} onChange={this.handleChange}>
      <input type="submit" value="Submit" onSubmit={this.handleSubmit}>
      <h2>course Description: </h2> <textarea value={this.state.course.desc} onChange={this.handleChange}>

  }
)
}
