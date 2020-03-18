import React from 'react';
import EventsListPage from './pages/EventsListPage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.PureComponent {
	render() {
		return (
			<>
				<EventsListPage/>
			</>
		);
	}
}

export default App;