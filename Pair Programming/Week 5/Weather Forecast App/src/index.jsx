import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
require('dotenv').config()

// Load environment variables
require('dotenv').config({ 
	path: ".env"
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";