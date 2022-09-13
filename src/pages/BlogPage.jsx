import React, { useState, useEffect }from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const BlogPage = () => {
	const [posts, setPosts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const postQuery = searchParams.get('post') || '';

	const handleSubmit = (e) =>  {
		e.preventDefault();
		const form = e.target;

		const query = form.search.value;

		setSearchParams({post: query})
	}

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data));
	}, []);
	return (
        <div className="page blog">
            <h1>Our news</h1>
            <form autoComplete="off" onSubmit={handleSubmit}>
				<input type='search' name='search'/>
				<button type='submit'>Найти</button>
			</form>
            {posts.filter (
				post => post.title.includes(postQuery)
			).map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            ))}
        </div>
    );
	
};

export default BlogPage;