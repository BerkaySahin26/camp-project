import axios from "axios";

export default class AuthService {
    login(credentials) {
        return axios.post('https://localhost:7131/api/Auth/login', credentials)
            .then((response) => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                return response;
            })
            .catch((error) => {
                console.error('Login error:', error);
                throw error;
            });
    }

    register(user) {
        return axios.post('https://localhost:7131/api/Auth/register', user)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.error('Registration error:', error);
                throw error;
            });
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
