// Simple hover effect for buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.boxShadow = '0 8px 15px rgba(0, 188, 212, 0.3)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.boxShadow = 'none';
    });
});
