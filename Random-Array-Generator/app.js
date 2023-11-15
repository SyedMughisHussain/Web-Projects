let rangeInput = document.querySelector('.range');

rangeInput.oninput = function() {
    let valueOf = this.value;
    document.write(valueOf);
    console.log(this.value);
}