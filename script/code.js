document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var hours = parseFloat(document.getElementById('hours').value);
    var rate = parseFloat(document.getElementById('rate').value);

    var salary = hours * rate; // Calculate salary without tax

    alert('Your salary without tax deduction is: R ' + salary.toFixed(2));
});
