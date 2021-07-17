import "./styles.css"

export default function Login() {
    return (
        <div className={"login"}>
            <div className={"login-wrapper"}>
                <div className={"login-left"}>
                    <h3 className={"login-logo"}>SocialMedia</h3>
                    <span className={"login-description"}>
                        Connect with friend and the world.
                    </span>
                </div>
                <div className={"login-right"}>
                    <div className={"login-box"}>
                        <input type={"text"} placeholder={"Email"} className={"login-input"} />
                        <input type={"password"} placeholder={"Password"} className={"login-input"} />
                        <button className={"login-button"}>Log in</button>
                        <span className={"login-forgot"}>Forgot Password?</span>
                        <button className={"login-register-button"}>
                            Create a new account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}