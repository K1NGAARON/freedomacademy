function redirectPage() {
    const fbGroup = 'https://www.facebook.com/groups/786754185809304';
    
    window.location = fbGroup;
}

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(redirectPage, 2000);
})