// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()


document.getElementById("search_input").addEventListener("keydown",search)
   
function search(event){
    let naam=document.getElementById("search_input").value
    const url =`https://masai-mock-api.herokuapp.com/news?q=${naam}`

    fetch(url)
 .then(function(res)
 {
     return res.json()
 })
 .then(function(res){
    append(res.articles)
     console.log(res.articles)
 }).catch(function(err){
     console.log(err)
 })
}
var newsData= []

function append(data){
    document.getElementById("results").innerText=null
    data.forEach(function(el)
    {
    let box=document.createElement("div")
    box.setAttribute("class","news")
    box.addEventListener("click",function(){
        myFun(el)
    })
    
    let image=document.createElement("img")
    image.src=el.urlToImage
    image.style="height:100%;width:20%"

    let box1 = document.createElement("div")
    box1.setAttribute("id","side")

    let h3=document.createElement("h3")
    h3.innerText=el.title

    let p = document.createElement("p")
    p.innerText=el.description

    box1.append(h3,p)
    box.append(image,box1)
    document.getElementById("results").append(box)
})
}

function myFun(el){
    newsData.push(el)
    localStorage.setItem("news",JSON.stringify(newsData))
    window.location.href="news.html"
}