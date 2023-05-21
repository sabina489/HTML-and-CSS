const MobileNavbar = document.querySelector(".hamberger")
const ShowNavbar = document.querySelector(".mobile-header")
const HideNavbar = document.querySelector(".cross")

MobileNavbar.addEventListener('click', () => {
    ShowNavbar.classList.toggle("active")
    HideNavbar.classList.toggle("show-cross")
    MobileNavbar.classList.add('hide-hamberger')
})


HideNavbar.addEventListener('click', () => {
    MobileNavbar.classList.remove('hide-hamberger')
    MobileNavbar.classList.add("show-hamberger")
    ShowNavbar.classList.remove("active")
    HideNavbar.classList.remove('show-cross')

})


// multiple elements
const sectionHeader = document.querySelectorAll('.left-side');
console.log(sectionHeader[1].innerHTML);
sectionHeader[1].style.color = 'red';