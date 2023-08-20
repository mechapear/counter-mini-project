import { ChangeEvent, useState } from 'react'
import Button from '@/lib/components/Button.tsx'

export default function App(): JSX.Element {
  // data part
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function handleClickMinus() {
    setCount(count - step)
  }

  function handleClickPlus() {
    setCount(count + step)
  }

  function handleStepChange(event: ChangeEvent<HTMLInputElement>) {
    setStep(Number(event.target.value))
  }

  // render part
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
            {count}
          </output>
          {/*using form for better user experience, user can enter instead of click on the button*/}
          <form id="input-wrapper" className="flex gap-2 mt-4">
            {/*onsubmit="modifyOutput(event)"*/}
            <Button id="minus-button" onClick={handleClickMinus} type="button">
              -
            </Button>
            {/*we have to required user's input*/}
            <input
              id="input"
              type="number"
              required
              className="text-3xl min-w-0 rounded-lg border border-solid border-input justify-self-center py-2 px-4 focus:outline-none focus:ring-1 focus:ring-button focus:border-button"
              value={step}
              onChange={handleStepChange}
            />
            <Button id="plus-button" onClick={handleClickPlus} type="button">
              +
            </Button>
          </form>
        </section>
      </section>
    </div>
  )
}
