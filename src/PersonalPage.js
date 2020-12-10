import React from 'react';

export default class PersonalPage extends React.Component {

    state = {
        name: this.props.user.name,
        surname: this.props.user.surname,
        lastname: this.props.user.lastname,

    };

    startState = this.props.user;

    render() {
        //console.log(this.startState.name + " !!!Start state!!!");
        const handleNameChanged = event => {
            this.setState({name: event.target.value});
        }

        const handleSurNameChanged = event => {
            this.setState({surname: event.target.value});
        }

        const handleLastNameChanged = event => {
            this.setState({lastname: event.target.value});
        }

        const saveChanges = event => {
             event.preventDefault();
            this.startState = this.state;
            
        }

        const getSavedData = () => {
            //  this.state = this.startState;
             this.setState({
                 name: this.startState.name,
                 surname: this.startState.surname,
                 lastname: this.startState.lastname
             });
            console.log(this.state.name + " === " + this.startState.name);
        }

        //  let { name, surname, lastname, phone, gmail, city, workExperience, skills } = this.props.user;

        return (
            <>
                <form onSubmit={saveChanges}>
                    <div>
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={handleNameChanged}></input>
                    </div>

                    <div>
                        <label>Surname</label>
                        <input type="text" value={this.state.surname} onChange={handleSurNameChanged}></input>
                    </div>

                    <div>
                        <label>Lastame</label>
                        <input type="text" value={this.state.lastname} onChange={handleLastNameChanged}></input>
                    </div>

                    <div>
                        <input type="submit" value="Сохранить"></input>
                    </div>
                </form>

                <div>
                        <button onClick={getSavedData}>Вернуть последнее сохранение</button>
                </div>
            </>
        )
    }
}