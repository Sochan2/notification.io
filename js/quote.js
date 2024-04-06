
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote= document.getElementById('new_quote');
const twitter=document.getElementById('tweet');
const api='https://api.quotable.io/random';
async function getquote(url){
  const response = await fetch(url);
  var data = await response.json();
  
  quote.innerHTML=data.content;
  author.innerHTML=data.author;
}

function tweet(){
  const tweetText = encodeURIComponent("Hello world");
  // Twitterの投稿用URLを作成
  const twitterURL = "https://twitter.com/intent/tweet?text=" + tweetText;
  // 新しいウィンドウでTwitterの投稿画面を開く
  window.open(twitterURL, 'Tweet window', 'width=600,height=300');
}

getquote(api);

newQuote.addEventListener('click',()=>{
  getquote(api);
});
twitter.addEventListener('click',tweet);



