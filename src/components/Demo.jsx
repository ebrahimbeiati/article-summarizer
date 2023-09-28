import { useState,useEffect } from "react"
import { copy, linkIcon, loader, tick } from "../assets"
import { useLazyGetArticleQuery } from "../services/article"


const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
     title: "",
    description: "",
  });
  const [allArticles, setArticles] = useState([]);

  const [getSummary, {error, isFetching}]= useLazyGetArticleQuery();
  
  useEffect(()=>{
    
    const articleFromLocalStorage = JSON.parse(
      localStorage.getItem("article")
    )
    if(articleFromLocalStorage){
      setArticle(articleFromLocalStorage)
    }
  },[]);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const {data} = await getSummary({article: article.url})
    if(data?.summary){
      const newArticle = {
        ...article, summary: data.summary
      }
      const updatedAllArticles=[newArticle,...allArticles];
      setArticle(newArticle)
      setArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles))
    }

  }


  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <form
          className="relative flex justify-center items-center"
          onSubmit={(handleSubmit) => {
            e.preventDefault();
          }}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-4 w-5"
          />

          <input
            type="url"
            className="url_input peer"
            name="url"
            value={article.url}
            required
            onChange={(e) => setArticle({
              ...article,
              url: e.target.value
            })}
            placeholder="Paste your article URL"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700
    peer-focus:text-gray-700"
          >
            ✅
          </button>
        </form>
        {/*Search history */}
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h2 className="text-center text-gray-700 text-xl font-bold">
            Search History
          </h2>
          <div className="flex flex-col items-center justify-center gap-2 w-full overflow-y-auto">
            {allArticles.map((item, index) => {
                <div
                  key={`link-${index}`}
                  onClick={()=>setArticle(item)}
                  className="link_card"
                >
                <div className="copy_btn">
                  <img src={copy} alt="copy_icon"
                  className="cursor-pointer"/>
                </div>
                <p
                className="text-sm text-gray-600">
                  {item.url}
                </p>
      </div>
            })}
          </div>
        </div>
      </div>
      <div
      className="my-10 max-w-full flex justify-center items-center">
      {isFetching ?(
        <img src={loader} alt="loader" className="w-20 h-20 object-contain"/>
      ): error? (
        <p className="font-inter text-black text-center">
          Sorry
          <span >
            {error?.data?.error}
          </span>
        </p>
      ):(
        article.summary && (
          <div className="flex flex-col gap-3">
            <h2>
              Article <span className="blue_gradient">Summary</span>
            </h2>
            <div className="summary_box">
              <p>{article.summary}</p>
            </div>
          </div>
        )

     ) }
      </div>
        

          {/*Display results*/}

    </section>
  );
}

export default Demo;