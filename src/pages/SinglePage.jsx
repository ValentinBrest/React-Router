import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SinglePage = () => {
	 const {id} = useParams();
	 const [post, setPost] = useState(null);

	 useEffect(() => {
         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then((response) => response.json())
             .then((data) => setPost(data));
     }, [id]);
	return (
		<div className='page'>
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