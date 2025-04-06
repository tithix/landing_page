document.addEventListener('DOMContentLoaded', function () {
    // Ticker animation
    const ticker = document.querySelector('.ticker');
    const tickerItems = document.querySelectorAll('.ticker-item');

    // Duplicate items for seamless looping
    tickerItems.forEach(item => {
        const clone = item.cloneNode(true);
        ticker.appendChild(clone);
    });

    // Simulate market data updates
    function updateMarketData() {
        const symbols = ['NASDAQ', 'S&P 500', 'Dow Jones', 'EUR/USD', 'BTC/USD'];
        const changes = ['▲', '▼'];

        document.querySelectorAll('.ticker-item').forEach((item, index) => {
            const symbol = symbols[index % symbols.length];
            const change = changes[Math.floor(Math.random() * changes.length)];
            const value = (Math.random() * 10000 + 10000).toFixed(2);
            const percent = (Math.random() * 2).toFixed(2);

            item.textContent = `${symbol}: ${value} ${change} ${percent}%`;
        });
    }

    // Update data every 30 seconds
    updateMarketData();
    setInterval(updateMarketData, 30000);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const webinarForm = document.querySelector('.webinar-form form');
    if (webinarForm) {
        webinarForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;

            // In a real app, you would send this to your backend
            console.log('Form submitted:', { name, email });

            // Show confirmation
            alert(`Merci ${name}! Votre inscription au webinaire est confirmée. Un email de confirmation a été envoyé à ${email}`);
            this.reset();
        });
    }
});
