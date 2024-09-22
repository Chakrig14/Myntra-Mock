const Register = () => {

    function handleChange(e) {

    }

    function handleFormSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="firstName" placeholder="Enter your First Name" onChange={(e) => handleChange(e)} />
                <input type="text" name="lastName" placeholder="Enter your Last Name" />
                <input type="text" name="email" placeholder="Enter your email" />
                <input type="text" name="password" placeholder="Enter your Password" />
                <input type="text" name="passwordCheck" placeholder="Please confirm your password" />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Register;