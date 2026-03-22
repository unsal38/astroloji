$(()=>{
    const ekran_heigth = $(window).height()
    $("div.tm-section-wrap section:not(#intro)").css({
        "min-height": `${ekran_heigth}px`
    })
})