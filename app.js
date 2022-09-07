//api section
const apiKey="d520a4692b91f56ed4f77fb29eae5d34";

const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d520a4692b91f56ed4f77fb29eae5d34";

const imageUrl="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

//api request
 async function fetchData (endpoint,key){
    const url = endpoint + "&api_key=" + key;
    const res =await fetch(url);
    const data = await res.json();
    console.log(data.results)
    renderMovies(data.results)

 }
 //https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg
 //calling function

 fetchData(url,apiKey)

 //render section

 //caching the html elements
 const main=document.querySelector(".main")

 //render function

 function renderMovies(movies){
     main.innerHTML = "";
   

    movies.map((movie) =>{
        //main.innerHTML = "";
        //console.log("refat")
        const title=movie.original_title;
        const poster=imageUrl + movie.poster_path;
        const rating=movie.vote_average;
        const des=movie.overview;
        main.innerHTML +=
            `<div class="movie">
                    <img
                        src="${poster}" 
                        alt="poster"
                    />
                    <div class="movie-info">
                        <h3>${title}</h3>
                        <span class="green">${rating}</span>
                    </div>
                    <div class="overview">
                        <h3>Overview</h3>
                        <p>${des}</p>

                    </div>
                </div>`

    })
 }
//search section
const form= document.querySelector('form');
const input=document.querySelector('#search');

const search = "https://api.themoviedb.org/3/search/movie?query="

form.addEventListener("submit", function(e){
    e.preventDefault();
    const inputVal=input.value.trim();
    const url=search + inputVal;
    fetchData(url,apiKey);
     
})