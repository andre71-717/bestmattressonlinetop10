let drop_menu_ul = document.querySelector(".drop_menu_ul")
let drop_menu = document.querySelector(".drop_menu")
let drop_menu_h2 = document.querySelector(".drop_menu_h2")
let hamburger_menu = document.querySelector(".hamburger_menu")
let drop_menu_hamburger = document.querySelector(".drop_menu_hamburger")
let hamburger_flex_bases2 = document.querySelector(".hamburger_flex_bases2")
let liHover = document.getElementsByTagName("li")


drop_menu_h2.addEventListener("mouseover", function(){
    drop_menu_ul.style.display = "block"
})

window.addEventListener("click", function(){
    drop_menu_ul.style.display = "none"
})

hamburger_menu.addEventListener("click", function(){
    drop_menu_hamburger.style.display = "block"
})

hamburger_flex_bases2.addEventListener("click", function(){
    drop_menu_hamburger.style.display = "none"
})



// ----------------header-------------->

let main_header_li_date = document.querySelector(".main_header_li_date")
let new_date = new Date().toLocaleDateString('en-us',{year:'numeric', month:'short',day:'numeric'}) 
main_header_li_date.innerHTML = "Updated: "+ new_date

let main_header_li_2_h4 = document.querySelector(".main_header_li_2_h4")
let new_date_2 = new Date().toLocaleDateString('en-us',{year:'numeric', month:'short'}) 
main_header_li_2_h4.innerHTML = new_date_2

main_header_li_2_h4.style.lineHeight = "40px"

let disclosure_img = document.querySelector(".disclosure_img")
let disclosure = document.querySelector(".disclosure_text")

disclosure_img.addEventListener("click", function(){
    disclosure.style.display = "block"
})

