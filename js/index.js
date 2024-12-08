// History Button Functionalities
document.getElementById('history-btn').addEventListener('click', ()=>{
    const historyBtn = document.getElementById('history-btn');
    const donationBtn = document.getElementById('donation-btn');
    // Show history section
    const historySection = document.getElementById('history-section');
    historySection.classList.remove("hidden");
    historyBtn.classList.add("bg-[rgb(180,244,97)]")
    // Remove donation section
    const cardSection = document.getElementById('card-section');
    cardSection.classList.add("hidden");
    donationBtn.classList.remove("bg-[rgb(180,244,97)]");
})
// Donation Button Functionalities
document.getElementById('donation-btn').addEventListener('click', ()=>{
    const historyBtn = document.getElementById('history-btn');
    const donationBtn = document.getElementById('donation-btn');
    // Show donation section
    const cardSection = document.getElementById('card-section');
    cardSection.classList.remove("hidden");
    donationBtn.classList.add("bg-[rgb(180,244,97)]");
    // Remove history section 
    const historySection = document.getElementById('history-section');
    historySection.classList.add("hidden");
    historyBtn.classList.remove("bg-[rgb(180,244,97)]")
})

// Blog Button
document.getElementById('blog-btn').addEventListener('click', ()=>{
    window.location.href = "/blogs.html"
})

// Donate Now Button Functionalities
function donateNow(inputId, balance){
    const input = getInputValue(inputId);
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceValue = Number(totalBalance.innerText);
    totalBalance.innerText = totalBalanceValue-input;
    const cardBalance = document.getElementById(balance);
    const cardBalanceValue = Number(cardBalance.innerText);
    cardBalance.innerText = cardBalanceValue + input;
}

// input text
function getInputValue(id){
    const inputfield = document.getElementById(id);
    const inputText = inputfield.value;
    const inputValue = Number(inputText);
    return inputValue;
}