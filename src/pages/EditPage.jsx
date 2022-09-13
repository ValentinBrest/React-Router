import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const EditPage = () => {
	const {id} = useParams();
	const {singout} = useAuth();
	const navigate = useNavigate()
	return (
		<div className='page edit'>
			{`Edit page ${id}`}
			<button onClick={() => singout(() => navigate('/', {replace: true}))}>Log Out</button>
		</div>
	);
};

export default EditPage;