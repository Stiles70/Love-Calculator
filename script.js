function check() {
    if (inp.value === '' || inpp.value === '') {
        dis.style.display = 'block'
    } else {
        var num = Math.round(Math.random() * 100)
        if (num <= 25) {
            show.innerHTML = `${num}%
            <p>Both of you should Let go immediately and do not look back</p>`
            show.style.color = 'red'
        } else if (num > 25 && num <= 50) {
            show.innerHTML = `${num}%
            <p>You need to pray about it </p>`
            show.style.color = 'yellow'
        } else if (num > 50 && num <= 75) {
            show.innerHTML = `${num}%
            <p>You do be great Together</p>`
            show.style.color = 'blue'
        } else if (num > 75 && num <= 100) {
            show.innerHTML = `${num}%
            <p>You Lot are the perfect match! Heaven made</p>`
            show.style.color = 'green'
        }

        show.style.display = 'block'
        inp.value = ''
        inpp.value = ''
    }
}