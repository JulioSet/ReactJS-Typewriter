import { login } from "./main.js"
import { addSoal, getSoal } from "./soal.js"

export class Master extends React.Component
{
    constructor(p) {
        super(p)
        this.state = {
            soal: []
        }
    }

    componentDidMount() {
        this.setState({
            soal: getSoal()
        })
    }

    componentDidUpdate() {
        document.querySelector('#isi').value = ''
        this.isiPenampung()
    }

    keluar = () => {
        login()
    }

    ubahStatus = (e) => {
        if (e.code == 'Space') {
            document.querySelector('#status').innerHTML = 'Status : Inputan tidak boleh ada spasi'
            e.target.value = ''
        } else if (e.code == 'Enter') {
            document.querySelector('#status').innerHTML = 'Status : Inputan berhasil di inputkan'
            addSoal(e.target.value)
            this.serialisasi(e.target.value)
            this.setState({
                soal: getSoal()
            })
            return
        } else {
            document.querySelector('#status').innerHTML = 'Status : Menerima Inputan'
        }
        e.target.value = e.target.value.trim()
        this.lowercase(e)
    }

    lowercase = (e) => {
        e.target.value = e.target.value.toLowerCase()
    }

    isiPenampung = () => {
        let show = document.querySelector('#penampung')
        show.innerHTML = ''
        this.state.soal.forEach(e => {
            show.innerHTML += e + ' '
        })
    }

    serialisasi = (inp) => {
        let dataLocalStorage = localStorage.getItem('data');
        if (dataLocalStorage == null)  dataLocalStorage = '[]';
        let arrayOfData = JSON.parse(dataLocalStorage);
        let data = {
            kata: inp
        };
        arrayOfData.push(data);

        let dataString = JSON.stringify(arrayOfData);
        localStorage.setItem('data', dataString);
    }

    render() {
        return(
            <div>
                <br></br>
                <h2 align="center">Welcome Master</h2>
                <br></br>
                <div className="container">
                    <button type="submit" className="btn btn-primary" onClick={() => {this.keluar()}}>Logout</button>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div className="col-12">
                        <input type="text" className="form-control" id="isi" placeholder="Masukan Kata, Tekan 'Enter' Untuk memasukan text" onKeyDown={(e) => {this.ubahStatus(e)}} onKeyUp={(e) => {this.lowercase(e)}}></input>
                        <p id="status">Status : Menunggu Inputan</p>
                        <br></br>
                        <h3 align="center">List Kata</h3>
                        <hr></hr>
                        <p id="penampung"></p>
                    </div>
                </div>
            </div>
        )
    }
}