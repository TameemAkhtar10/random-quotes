let h2 = document.querySelector ('h2');
let body = document.body;
body.addEventListener ('keydown',function (dets) {
h2.innerHTML = dets.key
})