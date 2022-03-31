import axios from 'axios';
import { useEffect, useState } from 'react';
const LoginApp = () => {
    useEffect(() => {
        axios.get('users/');
    }, []);
    const checkEmail = (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        axios
            .get(`/login/checkemail/${email}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === 1) {
                    document.getElementById('noemail').textContent =
                        '';
                    document.getElementById('emailpres').textContent =
                        res.data.debug_data;
                } else {
                    document.getElementById('emailpres').textContent =
                        '';
                    document.getElementById('noemail').textContent =
                        res.data.debug_data;
                }
            })
            .catch((e) => console.log(e));
    };
    const checkUsername = (e) => {
        e.preventDefault();
        let username = document.getElementById('username').value;
        axios
            .get(`/login/checkusername/${username}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === 1) {
                    document.getElementById('noemail').textContent =
                        '';
                    document.getElementById('emailpres').textContent =
                        res.data.debug_data;
                } else {
                    document.getElementById('emailpres').textContent =
                        '';
                    document.getElementById('noemail').textContent =
                        res.data.debug_data;
                }
            })
            .catch((e) => console.log(e));
    };
    const saveUser = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let dob = e.target.password.value;
        let username = e.target.username.value;
        axios
            .post('/login/adduser', { email, password, dob, username })
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    };
    return (
        <div>
            <h2>Welcome to registration page</h2>
            <form className='todo' onSubmit={saveUser}>
                <h5 id='noemail'></h5>
                <h5 id='emailpres'></h5>
                <label>
                    <h3>Email</h3>
                </label>
                <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Enter email'
                    className='form-control'
                />
                <button className='btn btn-info' onClick={checkEmail}>
                    check email
                </button>
                <br />
                <label>
                    <h3>Password</h3>
                </label>
                <input
                    type='password'
                    name='password'
                    placeholder='Enter password'
                    className='form-control'
                />
                <label>
                    <h3>Date of Birth </h3>
                </label>
                <input type='date' name='dob' className='form-control' />
                <label>
                    <h3>Username</h3>
                </label>
                <input
                    id='username'
                    type='text'
                    className='form-control'
                    placeholder='Enter username'
                    name='username'
                />
                <button className='btn btn-danger' onClick={checkUsername}>
                    Check Username
                </button>
                <div className='text-center'>
                    <button className='btn btn-primary'>Register</button>
                </div>
            </form>
        </div>
    );
};
export default LoginApp;