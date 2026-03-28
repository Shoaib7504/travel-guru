import React from 'react';
import { use } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const RegisterPage = () => {
    const navigate = useNavigate();
    const { createUser, setUser } = use(AuthContext)
    const handelRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, email, password });
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                setUser(user)
                   navigate("/")

            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });

    }
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center py-12">
            <div className="w-full max-w-132.5 border border-gray-300 rounded-lg p-12 bg-white">
                <h1 className="text-3xl mb-8">Create an account</h1>

                <form onSubmit={handelRegister} className="space-y-10">
                    <fieldset className='fieldset space-y-5'>
                        <div>
                            <label className="block text-sm ">First Name</label>
                            <input
                                type="text"
                                name='name'
                                className="w-full rounded-xl px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-[#F9A51A]"
                                required
                            />
                        </div>


                        <div>
                            <label className="block text-sm">Username or Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full rounded-xl px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-[#F9A51A]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm ">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full rounded-xl px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-[#F9A51A]"
                                required
                                minLength={6}
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full text-lg bg-[#F9A51A] py-3 rounded hover:bg-[#e69410] transition-colors disabled:opacity-50"
                        >
                            Create an account
                        </button>

                        <p className="text-center text-sm">
                            Already have an account?{' '}
                            <Link to="/auth/login"


                                className="text-[#F9A51A] hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>

            <div className="w-full max-w-132.5 mt-8">
                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">Or</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <button
                        // onClick={handleFacebookSignup}
                        // disabled={loading}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors disabled:opacity-50"
                    >
                        <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center">
                            <FaFacebook className="w-5 h-5 text-white" fill="currentColor" />
                        </div>
                        <span>Continue with Facebook</span>
                    </button>

                    <button
                        // onClick={handleGoogleSignup}
                        // disabled={loading}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors disabled:opacity-50"
                    >
                        <svg className="w-8 h-8" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </svg>
                        <span>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;