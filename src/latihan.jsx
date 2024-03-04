import { login } from "./main.js"
import { getSoal } from "./soal.js"
import { getUser } from "./user.js"

export class Latihan extends React.Component
{
    constructor(p) {
        super(p)
        this.state = {
            user: "",
            score: 0,
            soal: []
        }
    }

    componentDidMount() {
        this.setState({
            user: getUser(),
            soal: getSoal()
        })
    }
    
    componentDidUpdate() {
        this.isiPenampung()
    }

    keluar = () => {
        login()
    }

    isiPenampung = () => {
        let show = document.querySelector('#penampung')
        show.innerHTML = ''
        this.state.soal.forEach(e => {
            show.innerHTML += e + ' '
        })
    }

    pencetSpasi = (e) => {
        let isi = e.target
        if (e.code == 'Space') {
            if (isi.value == this.state.soal[0]) {
                let new_skor = this.state.score + 1
                let new_soal = this.state.soal.filter((e) => e != this.state.soal[0])
                this.setState({
                    score: new_skor,
                    soal: new_soal
                })
            } else {
                let new_skor = this.state.score - 2
                this.setState({
                    score: new_skor
                })
            }
            isi.value = ''
        }
        e.target.value = e.target.value.trim()
    }

    restart = () => {
        this.setState({
            soal: getSoal()
        })
    }

    render() {
        return(
            <div>
                <br></br>
                <h2 align="center">Welcome User - {this.state.user}</h2> 
                <br></br>
                <div className="container">
                    <button type="submit" className="btn btn-primary" onClick={() => {this.keluar()}}>Logout</button>
                    <br></br>
                    Point : {this.state.score}
                    <hr></hr>
                    <br></br>
                    <div className="col-12">
                        <p id="penampung"></p>
                        <input type="text" className="form-control" id="isi" placeholder="Tekan 'Spasi' untuk memasukan kata" onKeyDown={(e) => {this.pencetSpasi(e)}}></input>
                        <button type="submit" className="btn btn-warning" onClick={() => {this.restart()}}>Restart</button>
                    </div>
                </div>
            </div>
        )
    }
}