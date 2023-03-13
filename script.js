const ninja_alpha = {
    a: 'shi', 
    b: 'ari', 
    c: 'chi',
    d: 'do',
    e: 'ru',
    f: 'mei',
    g: 'ma',
    h: 'fu',
    i: 'zi',
    j: 'ka',
    k: 'zu',
    l: 'mi',
    m: 'te',
    n: 'ku',
    o: 'li',
    p: 'ji',
    q: 'ri',
    r: 'ki',
    s: 'ze',
    t: 'me',
    u: 'ta',
    v: 'rin',
    w: 'to',
    x: 'ke',
    y: 'no',
    z: 'mo'
}

const input = document.querySelector('input')
const p = document.querySelector('p')
input.addEventListener('keyup', e => {
    const value = e.target.value
    p.textContent = ''
    for(let i of value){
        const char = i.toLowerCase()
        if((char in ninja_alpha))
            p.textContent = p.textContent + ninja_alpha[char].toUpperCase()
        else p.textContent = p.textContent + char
    }
})