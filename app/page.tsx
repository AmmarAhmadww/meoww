export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center cat-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-[#6b3e26] mb-4">
          <span className="cat-wiggle inline-block">😺</span> Meow Meow <span className="cat-wiggle inline-block">😺</span>
        </h1>
        <p className="text-xl text-[#8d6e63]">A Purr-fect Cat Lover&apos;s Paradise</p>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Cat Facts Section */}
        <section className="bg-white/70 p-6 rounded-xl shadow-lg cat-fade-in" style={{animationDelay: "0.2s"}}>
          <h2 className="text-2xl font-bold mb-4 text-[#ff6b6b]">Fascinating Cat Facts</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="mb-2">Cats spend 70% of their lives sleeping</li>
            <li className="mb-2">A group of cats is called a &quot;clowder&quot;</li>
            <li className="mb-2">Cats can make over 100 vocal sounds</li>
            <li className="mb-2">A cat&apos;s purr can heal bones and muscles</li>
            <li>Cats have 5 toes on front paws but 4 on back paws</li>
          </ul>
        </section>
        
        {/* Cat Image */}
        <div className="flex justify-center items-center cat-bounce">
          <div className="w-64 h-64 bg-[#ff6b6b] rounded-full overflow-hidden flex justify-center items-end shadow-lg">
            <div className="w-48 h-48 bg-[#6b3e26] rounded-full mb-[-20px] relative">
              {/* Cat ears */}
              <div className="absolute w-12 h-12 bg-[#6b3e26] top-[-5px] left-[15px] rounded-tl-[80%] transform rotate-[-30deg]"></div>
              <div className="absolute w-12 h-12 bg-[#6b3e26] top-[-5px] right-[15px] rounded-tr-[80%] transform rotate-[30deg]"></div>
              {/* Cat eyes */}
              <div className="absolute w-8 h-10 bg-white top-[25px] left-[25px] rounded-full">
                <div className="absolute w-4 h-10 bg-black top-0 right-0 rounded-full"></div>
              </div>
              <div className="absolute w-8 h-10 bg-white top-[25px] right-[25px] rounded-full">
                <div className="absolute w-4 h-10 bg-black top-0 left-0 rounded-full"></div>
              </div>
              {/* Cat nose */}
              <div className="absolute w-5 h-3 bg-[#ff9a9e] top-[45px] left-[50%] transform translate-x-[-50%] rounded-full"></div>
              {/* Cat mouth */}
              <div className="absolute w-20 h-10 border-b-2 border-[#ff9a9e] top-[50px] left-[50%] transform translate-x-[-50%] rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Interactive Section */}
        <section className="bg-white/70 p-6 rounded-xl shadow-lg col-span-1 md:col-span-2 cat-fade-in" style={{animationDelay: "0.4s"}}>
          <h2 className="text-2xl font-bold mb-4 text-center text-[#ff6b6b]">Cat Personality Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#ffd9d9] p-4 rounded-lg text-center hover:bg-[#ffbdbd] transition-colors duration-300">
              <h3 className="font-bold mb-2">The Cuddler</h3>
              <p>Loves to curl up in your lap and purr the day away</p>
            </div>
            <div className="bg-[#d9ffd9] p-4 rounded-lg text-center hover:bg-[#bdffbd] transition-colors duration-300">
              <h3 className="font-bold mb-2">The Adventurer</h3>
              <p>Climbs on everything and explores every corner</p>
            </div>
            <div className="bg-[#d9d9ff] p-4 rounded-lg text-center hover:bg-[#bdbdff] transition-colors duration-300">
              <h3 className="font-bold mb-2">The Chatterbox</h3>
              <p>Has an opinion about everything and loves to share it</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="text-center mt-8 text-sm text-[#8d6e63] cat-fade-in" style={{animationDelay: "0.6s"}}>
        <p>© 2025 Meow Meow - Created with 😺 by Cat Lovers</p>
        <p className="mt-2">Purr and be happy!</p>
      </footer>
    </div>
  );
}
