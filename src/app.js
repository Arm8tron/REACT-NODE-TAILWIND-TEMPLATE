import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {

	return (
		<div className='w-full h-full'>
			REACT + NODE TEMPLATE 
		</div>
	)
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab="home" />);