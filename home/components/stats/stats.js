document.addEventListener('DOMContentLoaded', function() {
    const statsContainer = document.getElementById('statsContainer');
    const statCards = document.querySelectorAll('.stat-card');
    const prevStatBtn = document.getElementById('prevStat');
    const nextStatBtn = document.getElementById('nextStat');
    const dotIndicators = document.querySelectorAll('.stats-carousel-dot');

    let currentStatIndex = 0;
    const totalStats = statCards.length;

    // Check if we're on mobile
    const isMobile = () => window.innerWidth <= 768;

    // Initialize the stats display
    function initStats() {
        if (isMobile()) {
            // Set up for mobile carousel view
            statCards.forEach((card, index) => {
                card.classList.remove('active');
                if (index === currentStatIndex) {
                    card.classList.add('active');
                }
            });

            // Update indicators
            updateIndicators();
        } else {
            // For desktop, show all stats
            statCards.forEach(card => {
                card.classList.add('active');
            });
        }
    }

    // Update the active indicator
    function updateIndicators() {
        dotIndicators.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentStatIndex);
        });
    }

    // Go to a specific stat
    function goToStat(index) {
        if (!isMobile()) return;

        if (index < 0) index = totalStats - 1;
        if (index >= totalStats) index = 0;

        currentStatIndex = index;

        statCards.forEach((card, idx) => {
            card.classList.toggle('active', idx === currentStatIndex);
        });

        updateIndicators();
    }

    // Set up click events for controls
    prevStatBtn.addEventListener('click', () => {
        goToStat(currentStatIndex - 1);
    });

    nextStatBtn.addEventListener('click', () => {
        goToStat(currentStatIndex + 1);
    });

    // Set up click events for indicators
    dotIndicators.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToStat(index);
        });
    });

    // Auto slide for mobile
    let autoSlideStats;

    function startAutoSlideStats() {
        if (isMobile()) {
            autoSlideStats = setInterval(() => {
                goToStat(currentStatIndex + 1);
            }, 3000); // Change stat every 3 seconds
        }
    }

    function stopAutoSlideStats() {
        clearInterval(autoSlideStats);
    }

    // Start auto slide initially
    startAutoSlideStats();

    // Stop auto sliding when user interacts with controls
    [prevStatBtn, nextStatBtn, ...dotIndicators].forEach(control => {
        control.addEventListener('click', () => {
            stopAutoSlideStats();
            // Restart after 5 seconds of inactivity
            setTimeout(startAutoSlideStats, 5000);
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        initStats();
        if (isMobile()) {
            startAutoSlideStats();
        } else {
            stopAutoSlideStats();
        }
    });

    // Initialize on page load
    initStats();
});