function redirectPage() {
    const fbGroup = 'https://google.com';
    
    window.location = fbGroup;
}

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(redirectPage, 2500);
})