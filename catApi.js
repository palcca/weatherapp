const img = document.querySelector("img");

async function getCats(string) {
  const response = await fetch( "https://api.giphy.com/v1/gifs/translate?api_key=1C6MPwuROWVTA57A1lYPChzTTVIj5hRz&s="+string,{ mode: "cors" });
  const catData = await response.json()  
  console.log(catData);
  console.log(catData.data.images.original.url)
  img.src = catData.data.images.original.url;
}

getCats("dog");
