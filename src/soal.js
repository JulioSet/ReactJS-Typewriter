let soal = []

export const addSoal = (inp) => {
    soal.push(inp)
}
export const getSoal = () => {
    return soal
}

export const loadData = () => {
    let dataString = localStorage.getItem('data');
    if (dataString != null) {
        let data = JSON.parse(dataString);
        data.forEach(el => {
            addSoal(el.kata)
        })
    }
}