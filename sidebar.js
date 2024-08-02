function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex'; // currently display = none in the css code; when it's clicked we want the vertical sidebar to appear, so we need to switch it to flex
}

function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none'; // similar idea: when clicking on the x icon, the vertical sidebar will disappear
}

function navigate(event) {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
}

document.querySelectorAll('.sidebar li a').forEach(link => {
  link.addEventListener('click', navigate);
});
