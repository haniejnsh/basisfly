const countries=["استانبول","آنتالیا","تفلیس","باتومی","دبی"]
const cities=["تهران","شیراز","مشهد","کیش","قشم"]
const question=[
    "آیا اتباع خارجی امکان استفاده از خدمات را دارند؟",
    "آیا پس از خرید بلیط، امکان تغییر تاریخ پرواز وجود دارد؟",
    "آیا امکان تغییر نام مسافر پس از خرید بلیط هواپیما وجود دارد؟",
    "آیا هنگام خرید بلیط هواپیما امکان انتخاب صندلی وجود دارد؟",
    "آیا پس از خرید اینترنتی بلیط هواپیما یا رزرو هتل، امکان کنسلی آن وجود دارد؟"
]
const additionalInformation=["عوارض خروج از کشور","سوالات متداول","قوانین و مقررات","راهنمای خرید","راهنمای استراد"]
const links=["بلیط قطار","تور موتورسواری","تور دبی","تور استانبول"]
const footerImages=["./image/cao.png","./image/cao-paxright.png","./image/aira.png"]
const footerIcons=["./icon/Frame%201261156747.svg","./icon/Frame%201261156748.svg","./icon/Frame%201261156749.svg","./icon/Frame%201261156750.svg","./icon/Frame%201261156751.svg","./icon/Frame%201261156752.svg"]

countries.forEach(item=>{
    document.querySelector(".sec2-countries").innerHTML+=`
        <div>${item}</div>`
})

cities.forEach(item=>{
    document.querySelector(".sec2-cities").innerHTML+=`
        <div>${item}</div>`
})

question.forEach(item=>{
    document.querySelector(".sec2-question-details").innerHTML+=`
        <div>
            <span>${item}</span>
            <img src="./icon/Frame%201261156821.svg" alt="">
        </div>`
})

additionalInformation.forEach(item=>{
    document.querySelector(".foot-information-cases").innerHTML+=`
        <div>${item}</div>`
})

links.forEach(item=>{
    document.querySelector(".foot-links-cases").innerHTML+=`
        <div>${item}</div>`
})

footerImages.forEach(item=>{
    document.querySelector(".foot-images").innerHTML+=`
        <img src=${item} alt="img">`
})

footerIcons.forEach(item=>{
    document.querySelector(".foot-icons").innerHTML+=`
        <img src=${item} alt="icon">`
})