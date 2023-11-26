'use client'
import {calculatorCtoF,calculatorFtoC,calculatorCtoK,calculatorKtoC} from '../components/Calc'

const CtoK = () => {
  return (
    <div>
    <div className='flex justify-center p-5'>
      <div>
        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" id='input' />
      </div>
    </div>
    <div className='flex justify-center'>
      < button className="btn btn-primary" onClick={calculatorCtoK}>Calculate</button>
      </div>

      <div className='flex justify-center p-5'>
        <p id='resultado' className='text-lg text-white font-bold'></p>
      </div>
    </div>
  )
}

export default CtoK