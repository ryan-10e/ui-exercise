import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import api from './API';

class App extends Component {
    render() {
        var createdVenue = api.create({'name': 'create', 'status': 'LIVE'});
        console.log(createdVenue.id);
        var readVenue = api.read(124);
        console.log(readVenue);
        var updatedVenue = api.update(124, {'name': 'update', 'status': 'LIVE'});
        console.log(updatedVenue);
        var deleteSuccessful = api.delete(123);
        console.log('Deleted: ' + deleteSuccessful);
        var venues = api.search({'order_by': 'name', 'start_pos': 0, 'rows': 10});
        console.log(venues);
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>{api.name()}</h2>
                </div>
                <p className="App-intro">
                    There are {venues.length} venues
                </p>
            </div>
        );
    }
}

export default App;
