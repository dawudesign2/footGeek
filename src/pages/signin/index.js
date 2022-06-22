

const SignIn = () => {
    return(
        <>
            <h1>Sign In</h1>*
            {/* Création d'un formulaire Sign in avec un username et password */}
            <form>
                <label>
                    Username
                </label>
                <input type="text" 
                name="username" 
                placeholder="Username"/>
                <label>
                    Password
                </label>
                <input type="password"
                 name="password" 
                 placeholder="Password"/>
                 <button>
                    Sign in
                </button>
                
            </form>
             
        </>
    )
}

export default SignIn;