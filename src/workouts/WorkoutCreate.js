import React, {useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


const WorkoutCreate = (props) =>{
    const [description, setDescription] = useState('')
    const [definition, setDefinition] = useState('')
    const [result, setResult] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/log/', {
            method: 'POST',
            body: JSON.stringify({log: {description: description, definition: definition, result: result, date: date}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then ((res) => res.json())
        .then((logData) => {
            console.log(logData)
            setDescription('')
            setDefinition('')
            setResult('')
            props.fetchWorkouts()
        })
    }

    return(
        <>
        <h3>Log a Rehearsal</h3>
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor='date'/>
                <Input type='date' name='date' id="exampleDate" placeholder="date placeholder" value={date} onChange={(e) => setDate(e.target.value)}/>
                {/* <input type="text" name="input" placeholder="YYYY-MM-DD" 
                required pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                title="Enter a date in this format YYYY-MM-DD" value={date} onChange={(e) => setDate(e.target.value)}
                /> */}

            </FormGroup>
            <FormGroup>
                <Label htmlFor='definition'/>
                <Input type='select' name='definition' value={definition} onChange={(e) => setDefinition(e.target.value)}>
                    {/* <option value='Date'>Date</option> */}
                    <option>Choose a Category</option>
                    <option value='Scales'>Scales</option>
                    <option value='Etude'>Etude</option>
                    <option value='Repertoire'>Repertoire</option>
                    <option value='Orchestral/Chamber'>Orchestral/Chamber</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='description'/>
                <Input name='description' placeholder="Piece" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor='result'/>
                <Input name='result' placeholder="Measures" value={result} onChange={(e) => setResult(e.target.value)}/>
            </FormGroup>
            <Button className='logCreateButton' type='submit'>Submit</Button>
        </form>
        </>
    )
}

export default WorkoutCreate