import React from 'react';
import { useParams } from 'react-router-dom';

const EditPage = () => {
	const {id} = useParams()
	return (
		<div className='page edit'>
			{`Edit page ${id}`}
		</div>
	);
};

export default EditPage;