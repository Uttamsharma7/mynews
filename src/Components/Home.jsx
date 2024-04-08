// import React, { useEffect, useState } from 'react'
// import NewsItem from './NewsItem';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const Home = (props) => {
//   let [articles,setArticles]=useState([]);
//   let [totalResults,settotalresults]=useState(0);
//   let [page,SetPage]=useState(1)


 
//   async function  getAPIdata() {
    
//       var response
//       if(props.search)
//       {
//        response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&pageSize=12&page=${page}&language=${props.language}&apiKey=0c935a71249a46af841e2973a8be225f`);
//       }
//       else
//       {
//       response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&pageSize=12&page=${page}language=${props.language}&apiKey=0c935a71249a46af841e2973a8be225f`);
//       }
      
//       response = await response.json();
//       setArticles(response.articles);
//       settotalresults(response.totalResults);
    
//   };
 
//     let fetchData= async()=>{
//       SetPage(page+1)
//       let response=await fetch(`https://newsapi.org/v2/everything?q=${props.q}&pageSize=12&page=${page}&language=${props.language}&apiKey=0c935a71249a46af841e2973a8be225f`)
//       response = await response.json()
//       setArticles(articles.concat(response.articles)) 
   
//     }

//   useEffect(()=>{
    
//     getAPIdata();
  
//   }, [props.q] ,[props.search]);


//   return (
//  <>
// <h5 className='backcolor text-center text-light p-1 my-1'>   {props.search? props.search:props.q}  News Articles</h5>
// <div className='container-fluid'>
// <InfiniteScroll
//   dataLength={articles.length} //This is important field to render the next data
//   next={fetchData}
//   hasMore={articles.length < totalResults}
//   loader={<div className='w-100 text-center' style={{height:"100px"}}>
//     <div class="spinner-border text-primary" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>
//   </div>}
//   >


// <div className='row'>
//             {

//               articles.map((item, index) => {
//                 return <NewsItem
//                   key={index}
//                   pic={item.urlToImage}
//                   title={item.title}
//                   description={item.description}
//                   date={item.publishedAt}
//                   source={item.source}
//                   url={item.url}
//                 />

//               })

//             }


// </div>
// </InfiniteScroll>
// </div>
 
//  </>
//   )
// }

// export default Home;


import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
export default function Home(props) {

  let [articles, setArticles] = useState([])
  let [totalResults, settotalResults] = useState(0)
  let [page, setPage] = useState(1)

  async function getAPIdata()
  {
    var response
    setPage(1)
    if (props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&pageSize=12&page=${page}&language=${props.language}&apiKey=0c935a71249a46af841e2973a8be225f`)

    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&pageSize=12&page=${page}&language=${props.language}&apiKey=0c935a71249a46af841e2973a8be225f`)
    response = await response.json()
    setArticles(response.articles)
    settotalResults(response.totalResults)
  }

  let fetchData = async () => {
    setPage(page + 1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&pageSize=12&page=${page}&language=${props.language}&apiKey=0c935a71249a46af841e2973a8be225f`)
    response = await response.json()
    if (response.articles) {
      setArticles(articles.concat(response.articles))
    }
  }
  useEffect(() => {
    getAPIdata()
  }, [props.q])

  return (
    <>
      <h5 className='backcolor text-center text-light p-1 my-1 text-capitalize'>{props.search ? props.search : props.q} News Articles</h5>
      <div className='container-fluid'>
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={<div className='w-100 text-center' style={{ height: "100px" }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}>
          <div className='row'>
            {

              articles.map((item, index) => {
                return <NewsItem
                  key={index}
                  pic={item.urlToImage}
                  title={item.title}
                  description={item.description}
                  date={item.publishedAt}
                  source={item.source.name}
                  url={item.url}
                />

              })}

          </div>
        </InfiniteScroll>
      </div>



    </>
  )
}