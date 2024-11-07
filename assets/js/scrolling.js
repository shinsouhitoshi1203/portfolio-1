const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function scrollingTo(target) {
    const pos = $(target).offsetTop;
    const header = $("header").offsetHeight;
    let pd = getComputedStyle($(target)).getPropertyValue("padding-top");
        pd = pd.slice(0, pd.length - 2);
    $("#navbar-small").checked = false;
    window.scroll(0, pos - ((pd==0)?header +10 :pd) ) 
}

document.addEventListener("DOMContentLoaded", ()=>{
    
    
    $$(".navigation_section li").forEach(
        (e)=>{
            e.addEventListener("click",function (){
                const target = "." + this.querySelector("a").dataset.target;
                scrollingTo(target);
            })
        }
    )
})