validate = () => {
    var x = document.getElementById('num1')
    var y = document.getElementById('num2')
    var body = document.getElementsByTagName('BODY')[0]
    if (x.value == y.value && y.value !== '' && x.value !== '') {
        body.style.backgroundColor = 'red'
        return true
    } else {
        alert("The values should be equal and not blank");
        return false
    }
}
