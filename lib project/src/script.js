// Get all count elements
const counts = document.querySelectorAll('.home_Count .Count');

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'visible' class to elements in viewport
function addVisibleClass() {
    counts.forEach(count => {
        if (isInViewport(count)) {
            count.classList.add('visible');
        }
    });
}

// Add event listener for scroll event
window.addEventListener('scroll', addVisibleClass);

// Call the function initially to check elements on page load
addVisibleClass();
