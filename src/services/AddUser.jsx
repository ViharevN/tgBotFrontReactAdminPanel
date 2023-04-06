
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserService from "./UserService";

class AddUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            roles: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeRolesHandler = this.changeRolesHandler.bind(this);
        this.addHuman = this.addHuman.bind(this);
    }

    addHuman = (e) => {
        e.preventDefault();
        let human = {firstName: this.state.firstName, lastName: this.state.lastName, roles: this.state.roles}
        console.log('user => ' + JSON.stringify(human))

        UserService.addHuman(human).then(res=>{
            this.props.history.push('/users')
        });
    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value})
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value})
    }
    changeRolesHandler = (event)=>{
        this.setState({roles: event.target.value})
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Add User</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        <label>Roles User</label>
                                        <input placeholder="Roles" name="roles" className="form-control"
                                               value={this.state.roles} onChange={this.changeRolesHandler}/>
                                    </div>
                                    <Link to='/users'><button className="btn btn-success" onClick={this.addHuman}>Save</button></Link>
                                    <Link to='/users'><button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;