import { useState } from 'react'
import Linkedin from './components/linkedin'
import GitHub from './components/github'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main bg-gradient-to-l to-purple-700 from-black w-screen h-screen">
        <div className="container w-[80%] mx-auto h-full">
          <div className="child flex items-center justify-around h-full">
            <div className="text w-[50%]">
              <h1 className='text-5xl text-white mb-2 font-bold text-shadow-black'>CURRENCY CONVERTOR</h1>
              <p className='font-bold text-purple-400 text-shadow-black'>Convert Any Currency Into Other With Live Market Rate</p>
              <div className="profile mt-10">
                <p className='text-white mb-5'>This is my 4th project in my React Learning Series</p>
                <a href="https://github.com/khuzaima324" target='_blank' className='inline-flex items-center gap-x-2 text-xs text-purple-300 hover:text-purple-400'> <GitHub /> Follow Me On Github</a> <br />
                <a href="https://www.linkedin.com/in/khuzaima-iqbal" target='_blank' className='inline-flex items-center gap-x-2 text-xs text-purple-300 hover:text-purple-400'> <Linkedin />Follow Me On LinkedIn</a>
              </div>
            </div>
            <div className="app w-[50%]">
              <div className="main-box  p-3 rounded-xl border-white shadow-purple-800 shadow-2xl border-2 flex flex-wrap gap-7  relative">
                <div className="from flex justify-between border-1 border-black px-4 py-3 rounded-l bg-purple-800 text-white w-full">
                  <div className="fromInput">
                    <label htmlFor="fromInput" className='block text-xs'>From</label>
                    <input type="number" id='fromInput' placeholder='Enter Your Amount' className='outline-0 min-w-5' />
                  </div>
                  <select
                    id="option"
                    name="option"
                    className="block rounded-md shadow-sm text-sm outline-0"
                  >
                    <option value="">Select one...</option>
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="mango">Mango</option>
                  </select>
                </div>
                <div className="to flex justify-between border-1 border-black px-4 py-3 rounded-l bg-purple-800 text-white w-full">

                  <div className="toInput">
                    <label htmlFor="toInput" className='block text-xs'>To</label>
                    <input type="number" id='toInput' placeholder='Enter Your Amount' className='outline-0 min-w-5' />
                  </div>
                  <select
                    id="option"
                    name="option"
                    className="block rounded-md shadow-sm text-sm outline-0"
                  >
                    <option value="">Select one...</option>
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="mango">Mango</option>
                  </select>
                </div>
                <button className='font-bold text-purple-700 shadow-purple-500 shadow-2xs bg-white border-2 border-black py-1.5 px-3 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Swap</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
