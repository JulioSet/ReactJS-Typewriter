import { Latihan } from "./latihan.js";
import { Master } from "./master.js";
import { Login } from "./login.js"
import { loadData } from "./soal.js";

loadData()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login/>)

export const login = () => {
    return root.render(<Login/>)
}
export const master = () => {
    return root.render(<Master/>)
}
export const latihan = () => {
    return root.render(<Latihan/>)
}