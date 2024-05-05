import { Container } from "react-bootstrap"
import '../styles/pages.scss'



let Login = () => {
    let refresh = () => window.location.reload()
    return (
        <Container>
            <div className="login">

                <div className="login-container">
                    <div className='input-container'>
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email" />
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                        <button onClick={refresh} type='sumbit'>Sumbit</button>

                    </div>
                </div>
            </div>
        </Container >


    )
}


export default Login