import React from 'reacyt';

const SignUp = () => {
    return(
        <>
            <h1>Sign Up</h1>

            {/* Création d'un formulaire Sign up */}

            <form>
                <label>
                    First Name
                </label>
                <input type="text" 
                name="firstname" 
                placeholder="First Name"/>
                <label>
                    Last Name
                </label>
                <input type="text"
                 name="lastname" 
                 placeholder="Last Name"/>
                <label>
                    Email Address
                </label>
                <input type="email" 
                name="email" 
                placeholder="Email"/>
                <label>
                    Password
                </label>
                <input type="password"
                 name="password" 
                 placeholder="Password"/>
                 <button>
                    Sign Up
                 </button>
                 <p>
                    By clicking the button, 
                    you are agreeing to our 
                    Terms and Services
                 </p>
            </form>
            
        </>
    )
}

export default SignUp;