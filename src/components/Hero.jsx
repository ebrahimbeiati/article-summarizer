import infoLogo from "../assets/infoLogo.png"; // Import the image

const Hero = () => {
  return (
    <header className="w-full flex-col items-center justify-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-4">
        {/* Use the imported image as the logo */}
        <img
          src={infoLogo}
          alt="sumz_logo"
          className="w-12 h-12 object-contain rounded-full "
        />
        <button
          type="button"
          onChange={() => window.open("https://github.com/ebrahimbeiati")}
          className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded"
        >
          My GitHub
        </button>
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
