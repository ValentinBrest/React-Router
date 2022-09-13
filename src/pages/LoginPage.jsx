import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const LoginPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { singin } = useAuth();


	const fromPage = location.state?.from?.pathname || '/';

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const user = form.username.value;

		singin(user, () => navigate(fromPage, { replace: true }));
	}
	return (
        <div className="page">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
				<label>Name: <input name='username'/></label>
				<button type='submit'>Login</button>
			</form>
        </div>
    );
};

export default LoginPage;