import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import VideoList from './components/VideoList';
import VideoForm from './components/VideoForm';
import Navbar from './components/Navbar';

const App = () => (
	<BrowserRouter>
		<Navbar />
		<div className="container p-4">
			<Switch>
				<Route exact path="/" component={VideoList} />
				<Route exact path="/new-video" component={VideoForm} />
				<Route exact path="/update-video/:id" component={VideoForm} />
			</Switch>
			<ToastContainer />
		</div>
	</BrowserRouter>
);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);