const btn = document.querySelector("button");
const inp = document.querySelector("input");
const text = document.getElementById('p');

const funct = btn.onclick = () => {
    if (inp.value === "") {
        alert('data kosong');
        setTimeout(() => {
            window.location.reload();
        }, 3000);  
    } if (inp.value === 'love you' || 'ily') {
        window.alert('love you too baby');
        text.innerHTML = 'aww malu bgt';
        return false;
    } if (inp.value === 'next') {
        window.location.href= '1.html'
    }
     else if (inp.value !== 'love you' || 'ily' || 'next') {
        text.innerHTML = inp.value;
        alert('kata yg dimasukkan terlalu biasa /ncoba ketik: "ily", "love you", atau "next" ')
        // console.log(inp.value);
    }
    // alert('Hello World');
    // setTimeout(() => {
    //     console.log('Hello World');
    //     window.location.href= ('www.facebook.com'); 
    // }, 3000);
};

const btn1 = document.getElementById('btn1');
    btn1.onclick = () => {
        document.write(`<a href="index.html">woi</a>`)
        // window.alert('anda akan diarahkan ke page utama')
        // location.href = 'index.html';
    }