'use client'
import { SubmitBtnComponent } from "../components/AnimatedComponents/AnimatedContainer"
import FormCard from "../components/FormCard"
import Input from "../components/Input"
import Label from "../components/Label"
import Logo from "../components/Logo"
import { useState } from "react";


const applicationForm = () => {
    const [childName, setChildName] = useState('');
    const [childGender, setChildGender] = useState('female');
    const [childDOB, setChildDOB] = useState('');
    const [currentClass, setCurrentClass] = useState('');
    const [seekingClass, setSeekingClass] = useState('');
    const [parentTitle, setParentTitle] = useState('');
    const [parentName, setParentName] = useState('');
    const [parentEmail, setParentEmail] = useState('');
    const [parentPhone, setParentPhone] = useState('');
    const [parentAddress, setParentAddress] = useState('');
    
    


    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(childDOB)
    }

    return (
        <section className="min-w-full bg-slate-100">
            <div className="container">
                <FormCard
                className='bg-slate-100'
                headline='Application Form'
                headlineClassName='h1'
                logo={<Logo 
                    wrapperClassName='my-4 min-h-[5rem] min-w-[5rem]'
                    imageClassName='min-h-[5rem] min-w-[5rem]'
                />}>
                    <form onSubmit={handleSubmit} className="grid min-w-full md:min-w-[640px] gap-6">
                        <div>
                            <Label>Name (Surname First)<sup className="">*</sup></Label>
                            <Input type='text' placeholder='James Bwala'
                            name='childName'
                            value={childName}
                            onChange = {e =>setChildName(e.target.value)}
                            />
                        </div>
                        <div className='flex gap-2'> 
                        <Label>Gender<sup className="">*</sup></Label>
                            <select
                            name='childGender'
                            value={childGender}
                            onChange = {e =>setChildGender(e.target.value)}
                            >
                                <option>Female</option>
                                <option>Male</option>
                            </select>
                        </div>
                        <div>
                            <Label>DOB<sup className="">*</sup></Label>
                            <Input type='date'
                            name='childDOB'
                            value={childDOB}
                            onChange = {e =>setChildDOB(e.target.value)}
                            />
                        </div>
                        
                        <div className='flex gap-2'> 
                        <Label>Current class<sup className="">*</sup></Label>
                            <select
                            name='currentClass'
                            value={currentClass}
                            onChange = {e =>setCurrentClass(e.target.value)}
                            >
                                <option>None</option>
                                <option>Primary 5</option>
                                <option>Primary 6</option>
                                <option>J S S 1</option>
                                <option>J S S 2</option>
                                <option>S S S 1</option>
                                <option>S S S 2</option>
                            </select>
                        </div>
                        <div className='flex gap-2'> 
                        <Label>Class applying for<sup className="">*</sup></Label>
                            <select
                            name='seekingClass'
                            value={seekingClass}
                            onChange = {e =>setSeekingClass(e.target.value)}
                            >
                                <option>None</option>
                                <option>J S S 1</option>
                                <option>J S S 2</option>
                                <option>S S S 1</option>
                                <option>S S S 2</option>
                            </select>
                        </div>

                        <div className='flex gap-2'> 
                        <Label>Parent's title<sup className="">*</sup></Label>
                            <select
                            name='parentTitle'
                            value={parentTitle}
                            onChange = {e =>setParentTitle(e.target.value)}
                            >
                                <option>None</option>
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Dr</option>
                                <option>Other</option>
                            </select>
                        </div>
                        
                        <div>
                            <Label>Parent's name (Surname First)<sup className="">*</sup></Label>
                            <Input type='text' placeholder='James Bwala'
                            name='parentName'
                            value={parentName}
                            onChange = {e =>setParentName(e.target.value)}
                            />
                        </div>
                        <div>
                            <Label>Parent's primary email<sup className="">*</sup></Label>
                            <Input type='email' placeholder='James Bwala'
                            name='parentEmail'
                            value={parentEmail}
                            onChange = {e =>setParentEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <Label>Parent's primary mobile phone<sup className="">*</sup></Label>
                            <Input type='tel' placeholder='James Bwala'
                            name='parentPhone'
                            value={parentPhone}
                            onChange = {e =>setParentPhone(e.target.value)}
                            />
                        </div>

                        <div>
                            <Label>Parent's address<sup className="">*</sup></Label>
                            <Input type='tel' placeholder='James Bwala'
                            name='parentAddress'
                            value={parentAddress}
                            onChange = {e =>setParentAddress(e.target.value)}
                            />
                        </div>
                        

                        <div className="flex justify-center">
                            <SubmitBtnComponent
                            className='bg-orange-500 p px-4 py-1 text-white'>
                                Submit
                            </SubmitBtnComponent>
                        </div>

                    </form>

                </FormCard>
            </div>

        </section>
    )
}

export default applicationForm