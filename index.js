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


let main_header_li_4_disclosure = document.querySelector(".main_header_li_4_disclosure")
let disclosure = document.querySelector(".disclosure")
let main_header_li_4_span = document.querySelector(".main_header_li_4_span")

main_header_li_4_span.addEventListener("mouseover", function(){
    disclosure.style.display = "block"
})

main_header_li_4_span.addEventListener("click", function(){
    disclosure.style.display = "block"
})

window.addEventListener("click", function(){
    disclosure.style.display = "none"

})


disclosure.addEventListener("mouseout", function(){
    disclosure.style.display = "none"
})
