
function CSS() {



    return (
      <>
        <div className="relative flex min-w-screen min-h-1/2 flex-col justify-center overflow-hidden text-center bg-sky-100 py-6 sm:py-12">
          <h1 className="pb-6 text-5xl font-bold">
              CSS
          </h1>
          <form>
            <input className="w-1/2 p-2 text-center" placeholder="Flex, Padding, Background, Color..."></input>
            <button className="btn w-1/6 h-12 m-2 p-2 bg-sky-600 text-white text-xl font-bold hover:text-white">Search</button>
          </form>
        </div>
      </>
    );
}


export { CSS };