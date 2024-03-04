import { latihan, master } from "./main.js";
import { setUser } from "./user.js"

export class Login extends React.Component
{
    masuk = () => {
        let namaUser = document.querySelector('#username').value
        if (namaUser == 'admin') {
            master()
        } else {
            setUser(namaUser)
            latihan()
        }
    }

    render() {
        return(
            <div>
                <br></br>
                <h1 className="display-5 fw-bold" align="center">LOGIN</h1> 
                <hr></hr>
                <div className="container">
                    <div className="col-12">
                        <input type="text" className="form-control" id="username" placeholder="Enter your username"></input>
                        <br></br>
                        <button type="submit" className="btn btn-primary" onClick={() => {this.masuk()}}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}