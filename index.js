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


let disclosure_img_2 = document.querySelector(".disclosure_img")
let disclosure_mobile = document.querySelector(".disclosure_mobile")
let main_header_li_4_mobile = document.querySelector(".main_header_li_4_mobile")

disclosure_img_2.addEventListener("click", function(){
    disclosure_mobile.style.display = "block"
})

main_header_li_4_mobile.addEventListener("click", function(){
    disclosure_mobile.style.display = "block"
})

window.addEventListener("click", function(){
    disclosure_mobile.style.display = "none"
})

let left = document.querySelector(".left")
let right = document.querySelector(".right")
let table = document.querySelector(".tablee")


    left.addEventListener("click", function(){
        table.scrollBy({
            top: 0,
            left: -160,
            behavior: 'smooth'
          }) 
        
    })
    
    right.addEventListener("click", function(){
        table.scrollBy({
            top: 0,
            left: +160,
            behavior: 'smooth'
          }) 
    })
    



let for_faq_inners = document.querySelector(".for_faq_inners")
let for_faq_p = document.querySelector(".for_faq_p")
let for_faq_arrow = document.querySelector(".for_faq_arrow")
let for_faq_arrow_up = document.querySelector(".for_faq_arrow_up")
for_faq_p.animate(
    { transform: 'translateY(0)'}, 
    {
      duration: 500,
      fill: 'forwards'
    })
for_faq_inners.addEventListener("click", function(){
    for_faq_p.classList.toggle("for_faq_p_display")
    for_faq_arrow.classList.toggle("for_faq_arrow_display")
    for_faq_arrow_up.classList.toggle("for_faq_arrow_up_display")
})




  window.addEventListener("scroll", function(){
    
    let scroll = this.document.querySelector(".top_button");

    if(this.window.scrollY < 500){
        scroll.style.display = "none"
    }else{
        scroll.style.display = "block"
    }
  })
