export default function App(): JSX.Element {
  return (
    <div
      id="main-wrapper"
      className="flex items-center justify-center min-h-screen p-6"
    >
      <section
        id="counter-card"
        className="bg-card w-full max-w-xs rounded-lg shadow-md text-center p-8"
      >
        <h1 id="header" className="text-5xl m-0">
          Counter
        </h1>
        <section>
          <output id="output" className="block text-9xl">
            0
          </output>
          {/*using form for better user experience, user can enter instead of click on the button*/}
          <form id="input-wrapper" className="flex gap-2 mt-4">
            {/*onsubmit="modifyOutput(event)"*/}
            <button
              id="minus-button"
              className="text-2xl text-button-text bg-button rounded-lg border-solid border-button py-2 px-4 cursor-pointer min-w-[44px] hover:bg-button-hover"
            >
              -
            </button>
            {/*we have to required user's input*/}
            <input
              id="input"
              type="number"
              required
              className="text-3xl min-w-0 rounded-lg border border-solid border-input justify-self-center py-2 px-4 focus:outline-none focus:ring-1 focus:ring-button focus:border-button"
            />
            <button
              id="plus-button"
              className="text-2xl text-button-text bg-button rounded-lg border-solid border-button py-2 px-4 cursor-pointer min-w-[44px] hover:bg-button-hover"
            >
              +
            </button>
          </form>
        </section>
      </section>
    </div>
  )
}
