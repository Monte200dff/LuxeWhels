
    function calculateLoan() {
    const price = document.getElementById('carPrice').value;
    const down = document.getElementById('downPayment').value;
    const months = document.getElementById('loanTerm').value;

    if (price > 0) {
        const monthly = (price - down) / months;
        document.getElementById('monthlyAmount').innerText = "$" + monthly.toFixed(2);
    } else {
        alert("Please enter a valid price");
    }
}
document.getElementById('tradeInForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const car = document.getElementById('userCarModel').value;
    
    document.getElementById('tradeInForm').style.display = 'none';
    document.getElementById('formMessage').style.display = 'block';
    
    console.log("Նոր Trade-In հայտ:", car);
});