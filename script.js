let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');
let random = 30 + Math.floor(Math.random()*70)

let tamim = 0;
btn.addEventListener('click', () => {
    btn.style.pointerEvents = 'none'
   let int=  setInterval(() => {
        tamim++;
        h2.innerHTML = tamim +"%";
        inner.style.width = tamim +"%";


    }, random);
    setTimeout (()=> {
        clearInterval (int);
        btn.style.opacity = "0.3";
        btn.innerHTML = "downloaded"
                console.error("download in " +random/10+ "seconds")

        },random *100
    )
}

)
