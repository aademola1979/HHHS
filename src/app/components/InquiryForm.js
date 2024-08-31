'use client'
import {useState} from 'react';
import Label from './Label';
import Input from './Input';
import { SubmitBtnComponent } from './AnimatedComponents/AnimatedContainer';

function InquiryForm() {
    const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [question, setQuestion] = useState('')
  const [preferredTime, setPreferredTime] = useState('2')

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(fullname)
    console.log(email)
    console.log(phoneNumber)
    console.log(question)
    alert({
      fullname,
      email,
      phoneNumber,
      question
    })
  }

  return (
    <>
    <form className="grid gap-6" onSubmit={handleSubmit}>
            <div>
            <Label>Full Name<sup className="">*</sup></Label>
              <Input type='text'placeholder='James Bwala' 
              value={fullname} onChange={e => (setFullname(e.target.value))}/>
            </div>

            <div>
            <Label>Email<sup className="">*</sup></Label>
              <Input type='email'placeholder='bwala@gmail.com' 
              value={email}
              onChange={e => (setEmail(e.target.value))}/>
            </div>

            <div>
            <Label>Phone<sup className="">*</sup></Label>
              <Input type='tel'placeholder='+23476456798' 
              value={phoneNumber} onChange={e => (setPhoneNumber(e.target.value))}
              />
            </div>

            <div>
            <Label>Your question</Label>
              <textarea placeholder='Is admission in progress...?' cols='5' rows='3'
              className="min-w-full p-1 outline-0 border-2 border-gray-300
              focus:border-indigo-300 focus:ring  py-1 pl-2
            focus:ring-indigo-200 focus:ring-opacity-50 rounded-md" 
            value={question}
            onChange={e => (setQuestion(e.target.value))}></textarea>
            </div>

          <div className="gap-2 flex flex-col sm:flex-row">
            <label className="gradient-text2">You may contact me between:</label>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 md:gap-4 text-gray-500 gradient-text3">
              <label className="flex gap-1"><input type="radio" name="time" value={preferredTime} 
              onChange={e =>setPreferredTime('1')} 
              className="" />8am-Noon</label>
              <label className="flex gap-1"><input type="radio" name="time" value={preferredTime} 
              onChange={e =>setPreferredTime('2')} />Noon-4pm</label>
              <label className="flex gap-1"><input type="radio" name="time" value={preferredTime} 
              onChange={e =>setPreferredTime('3')}  />4pm-8pm</label>
            </div>
          </div>

            <div className='flex justify-center'>
              <SubmitBtnComponent
              className='bg-orange-500 p py-1 px-4 text-white'>
                Submit
              </SubmitBtnComponent>
            </div>
          </form>

    </>
  )
}

export default InquiryForm