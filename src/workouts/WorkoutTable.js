import React, { useState } from 'react'
import { Container, Table, Button, Alert } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';


const WorkoutTable = (props) => {


    const deleteWorkout = (workout) => {
        fetch(`http://localhost:3000/log/${workout.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then(() => props.fetchWorkouts())
    }

    const practiceMapper = () => {
        return props.workouts.map((workout, index) => {
            return(
                <tr key={index}>
                    <td className='journalData'>{workout.date}</td>
                    <td className='journalData'>{workout.definition}</td>
                    <td className='journalData'>{workout.description}</td>
                    <td className='journalData'>{workout.result}</td>
                    <td>
                        <Button className='updateButton' onClick={() => {props.editUpdateWorkout(workout); props.updateOn()}}>Update</Button>
                        <Button className='deleteButton' onClick={() => {deleteWorkout(workout)}}>Delete</Button>
                    
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        <div className='journalTable'>
                <Container fluid>
                    <Table className='journalTable' striped>
                        <thead>
                            <tr className='journalTable'>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Piece</th>
                                <th>Measures</th>
                            </tr>
                        </thead>
                        <tbody>
                            {practiceMapper()}
                        </tbody>
                    </Table>   
                </Container>
            </div>
        </>
    )
}

export default WorkoutTable