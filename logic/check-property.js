const myVisa = document.getElementById("myVisa");
const myMasterCard = document.getElementById("myMasterCard");
const myPayPal = document.getElementById("myPayPal");
const submitBtn = document.getElementById("submitBtn");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function () {
    if (myVisa.checked) {
        paymentResult.textContent = "You picked Visa as a payment method"
    } else if (myMasterCard.checked) {
        paymentResult.textContent = "You picked MasterCard as a payment method"
    } else if (myPayPal.checked) {
        paymentResult.textContent = "You picked PayPal as a payment method"
    } else {
        paymentResult.textContent = "You must pick a payment method"
    }
}