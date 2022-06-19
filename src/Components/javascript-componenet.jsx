function JavaScript() {
    return (
    <>
     <div className="relative flex min-w-screen min-h-screen flex-col justify-center overflow-hidden text-center bg-sky-100 py-6 sm:py-12">
        <h1 className="pb-6 text-5xl font-bold">
            JavaScript
        </h1>
        
        <form className="m-20">
            <h2 className="text-2xl p-2">Loop Generator</h2>
            <input className="w-1/2 p-2 text-center" placeholder="How many loops?"></input>
            <button className="btn w-1/6 h-12 m-2 p-2 bg-sky-600 text-white text-xl font-bold hover:text-white">Generate</button>
            <div className="background-black">

{/* looping from i = 1 to 5
for (let i = 1; i <= 5; i++) {
   
} */}

            </div>
        </form>
        <form className="m-20">
            <h2 className="text-2xl p-2" >Object Generator</h2>
            <input className="w-1/2 p-2 text-center" placeholder="How many properties?"></input>
            <br></br><br></br>
            <input className="w-1/2 p-2 text-center" placeholder="Property #1, Property #2, Property #3..."></input>
            <br></br><br></br>
            <button className="btn w-1/6 h-12 m-2 p-2 bg-sky-600 text-white text-xl font-bold hover:text-white">Generate</button>
        </form>
      </div>
    </>
    );
  }


export {JavaScript};