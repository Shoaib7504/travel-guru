import React, { use } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import google from '../assets/google.png'
import { GoogleAuthProvider } from 'firebase/auth';
const LoginPage = () => {
    const { LogIn, LoginWithGoogle, setUser } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const handleEmailLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        LogIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate(`${location.state ? location.state : "/"}`)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                alert(errorMessage)
            });

    }

    const handleGoogleLogin = () => {
        LoginWithGoogle()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token);

                const user = result.user;
                setUser(user)
                navigate("/")

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log({ errorCode, errorMessage, email, credential });

            });
    }
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <div className="w-full max-w-136.25 border border-gray-300 rounded-lg p-12 bg-white">
                <h1 className="text-4xl mb-8">Login</h1>

                <form onSubmit={handleEmailLogin} className="space-y-6">

                    <div>
                        <label className="block text-sm mb-2">Username or Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full rounded-xl px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-[#F9A51A]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full rounded-xl px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-[#F9A51A]"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                // checked={rememberMe}
                                // onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4"
                            />
                            <span className="text-sm">Remember Me</span>
                        </label>
                        <button type="button" className="text-[#F9A51A] text-sm hover:underline">
                            Forgot Password
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl text-lg bg-[#F9A51A] py-3  hover:bg-[#e69410] transition-colors disabled:opacity-50"
                    >
                        Login
                        {/* {loading ? 'Logging in...' : 'Login'} */}
                    </button>

                    <p className="text-center text-sm">
                        Don't have an account?{' '}
                        <Link to="/auth/register"

                            //   onClick={onSwitchToRegister}
                            className="text-[#F9A51A] hover:underline"
                        >
                            Create an account
                        </Link>
                    </p>
                </form>
            </div>

            <div className="w-full max-w-136.25 mt-8">
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
                        // onClick={handleFacebookLogin}
                        // disabled={loading}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors disabled:opacity-50"
                    >
                        <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center">
                            <FaFacebook className="w-5 h-5 text-white" fill="currentColor" />
                        </div>
                        <span>Continue with Facebook</span>
                    </button>

                    <button
                        onClick={handleGoogleLogin}

                        className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors disabled:opacity-50"
                    >
                        <img className='w-8 h-8' src={google} alt="" />
                        <span>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;