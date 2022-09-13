import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SinglePage = () => {
	 const navigate = useNavigate()
	 const {id} = useParams();
	 const [post, setPost] = useState(null);

	 const goBack = () => navigate(-1)

	 useEffect(() => {
         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then((response) => response.json())
             .then((data) => setPost(data));
     }, [id]);
	return (
		<div className='page'>
		<button onClick={goBack}>Go back</button>
			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
					<Link to={`/posts/${id}/edit`}> Edit post</Link>
				</>
			)}
		</div>
	);
};

export default SinglePage;