// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()

var data=JSON.parse(localStorage.getItem("news"))
data.map(function(el){


 
    let box=document.createElement("div")
    box.setAttribute("class","news")


    let image=document.createElement("img")
    image.src=el.urlToImage
    image.style="height:500px;width:100%"


    let h3=document.createElement("h3")
    h3.innerText=el.title

    let p = document.createElement("p")
    p.innerText=el.description

    box.append(image,h3,p)
    document.getElementById("detailed_news").append(box)
})


document.getElementById("search_input").addEventListener("keydown",search)
   
function search(event){
    let naam=document.getElementById("search_input").value
    const url =`https://masai-mock-api.herokuapp.com/news?q=${naam}`

    if(naam.innerText=="Tesla" || "tesla" || "twitter" || "Twitter")
    {
  window.location.href="search.html"
    }
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
function append(data){
    document.getElementById("results").innerText=null
    data.forEach(function(el)
    {
    let box=document.createElement("div")
    box.setAttribute("class","news")
    
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