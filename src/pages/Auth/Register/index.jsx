import "./styles.css"

export default function Register() {
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
                        <input type={"text"} placeholder={"Username"} className={"login-input"} />
                        <input type={"text"} placeholder={"Email"} className={"login-input"} />
                        <input type={"password"} placeholder={"Password"} className={"login-input"} />
                        <input type={"password"} placeholder={"Confirm the password"} className={"login-input"} />
                        <button className={"login-button"}>Sign Up</button>
                        <button className={"login-register-button"}>
                            Log into account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}