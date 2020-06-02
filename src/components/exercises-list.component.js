import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { fetchExercises } from '../actions/exerciseActions';


const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={()=>{props.deleteExercise(props.exercise._id)}}>delete</a>
        </td>
    </tr>
)

class ExercisesList extends Component{
    constructor(props){super(props);

        this.deleteExercise =this.deleteExercise.bind(this);
        // this.state = {exercises: []};
    }

    componentDidMount(){
        // axios.get('http://localhost:5000/exercises/')
        // .then(response =>{
        //     this.setState({ exercises: response.data})
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
        this.props.fetchExercises();
    }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data));
        this.setState({
            exercises:this.props.exercises.filter(el => el._id !==id)
        })
    }
    exerciseList(){
        return this.props.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
    }
    
    render(){
        return(
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

ExercisesList.propTypes = {
    fetchExercises: PropTypes.func.isRequired,
    exercises: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    exercises: state.exercises.items
})

export default connect(mapStateToProps,{ fetchExercises })(ExercisesList)