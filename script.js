function runCalculator() {
    const scheme = parseInt(document.getElementById('scheme').value);
    const principal = parseFloat(document.getElementById('principal').value);
    const years = parseInt(document.getElementById('years').value);

    if(!principal || !years || principal <= 0) {
        alert("Please enter valid investment details.");
        return;
    }

    // Logic from your Python script:
    // Scheme 1: 5% Yearly | Scheme 2: 7% Quarterly | Scheme 3: 8% Monthly
    let rate = (scheme === 1) ? 0.05 : (scheme === 2) ? 0.07 : 0.08;
    let n = (scheme === 1) ? 1 : (scheme === 2) ? 4 : 12;

    let amount = principal;
    let rows = "";

    for (let i = 1; i <= years; i++) {
        let opening = amount;
        // Formula: A = P(1 + r/n)^(n*t)
        amount = opening * Math.pow((1 + rate/n), n);
        let interest = amount - opening;

        rows += `<tr>
            <td>${i}</td>
            <td>₹${opening.toLocaleString('en-IN', {maximumFractionDigits: 2})}</td>
            <td class="text-success">+₹${interest.toLocaleString('en-IN', {maximumFractionDigits: 2})}</td>
            <td>₹${amount.toLocaleString('en-IN', {maximumFractionDigits: 2})}</td>
        </tr>`;
    }

    document.getElementById('tableBody').innerHTML = rows;
    document.getElementById('finalAmount').innerText = `₹${amount.toLocaleString('en-IN', {maximumFractionDigits: 2})}`;
    document.getElementById('results').classList.remove('d-none');
}

// PDF Generation Function
function downloadPDF() {
    const element = document.getElementById('report-content');
    const options = {
        margin:       10,
        filename:     'VIT_Bank_Investment_Report.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Hide UI elements that shouldn't be in a PDF
    const buttons = document.querySelectorAll('.no-print');
    buttons.forEach(btn => btn.style.display = 'none');

    html2pdf().set(options).from(element).save().then(() => {
        // Show buttons again after PDF is generated
        buttons.forEach(btn => btn.style.display = 'block');
    });
}