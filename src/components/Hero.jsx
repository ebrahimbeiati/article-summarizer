// import { github } from "../assets/github.svg";
//  // Import the image

// const Hero = () => {
//   return (
//     <header className="w-full flex-col items-center justify-center">
//       <nav className="flex justify-between items-center w-full mb-10 pt-4">
//         <button
//           type="button"
//           onClick={() => window.open("https://github.com/ebrahimbeiati")}
//           className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded"
//         >
//           <img
//             src={github}
//             alt="github"
//             className="absolute left-0 my-2 ml-3 w-5"
//           />
//         </button>
//       </nav>
//       <h1 className="head_text">
//         Article Summarizer with
//         <br className="max-md:hidden" />{" "}
//         <span className="orange_gradient">OpenAI</span>
//       </h1>
//       <h2 className="head_text1">
//         Summarize your articles with this amazing OpenAI article summarizer
//       </h2>
//     </header>
//   );
// };

// export default Hero;
import github  from "../assets/github.svg";

const Hero = () => {
  return (
    <header className="w-full flex-col items-center justify-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-4">
        <a
          href="https://github.com/ebrahimbeiati"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <img
            src={github}
            alt="github"
            className="absolute left-0 my-2 ml-3 w-5"
          />
        </a>
      </nav>
      <h1 className="head_text">
        Article Summarizer with
        <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">OpenAI</span>
      </h1>
      <h2 className="head_text1">
        Summarize your articles with this amazing OpenAI article summarizer
      </h2>
    </header>
  );
};

export default Hero;
