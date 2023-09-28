import { useState,useEffect } from "react"
import { copy, linkIcon, loader, tick } from "../assets"

const Demo = () => {
  const [article, setArticle] = useState({
   
    url: "",
    summary: "",
     title: "",
    description: "",
  });
  const handleSubmit = async ()=>{
    const response = await fetch("http://localhost:5000/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: article.url }),
    });
    const data = await response.json();
    setArticle({
      ...article,
      summary: data.summary,
      title: data.title,
      description: data.description,
    });
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

      </div>
          {/*Display results*/}

    </section>
  );
}

export default Demo;