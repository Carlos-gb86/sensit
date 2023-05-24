// import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react'
import { footbridge } from '../assets'
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';

const Contact = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [messageSent, setMessageSent] = useState('none');
    const { register, formState: { errors }, reset } = useForm();
    const [state, handleSubmit] = useFormspree("xgebbvpe");

    useEffect(() => {
        if (state.succeeded) {
            reset();
            setMessageSent('success');
        } else if(state.submitting) {
            setMessageSent('none');
        } else if (!state.succeeded && state.submitted) {
            setMessageSent('error');
        }
    }, [state.succeeded, state.submitting, state.submitted]);
    

  return (
    <section style={{ backgroundImage: `url(${footbridge})` }} 
    className="relative bg-cover bg-fixed flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <form 
        onSubmit={handleSubmit}
        className="max-w-[500px] z-[5] w-4/5 md:w-1/2 lg:w-1/3 bg-gray-200 my-12 p-6 rounded-xl shadow-lg"
        autoComplete="nope"
      >
        <h2 className="mb-4 text-2xl font-bold text-center text-blue-500">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input {...register('name', { required: true })} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" 
          id="name" 
          type="text" 
          placeholder="Name" 
          autoComplete="name"
          />
          {errors.name && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} 
          className="shadow appearance-none border bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="email" 
          type="email" 
          placeholder="Email" 
          autoComplete="email"
          />
          {errors.email && <p className="text-red-500 text-xs italic">Please enter a valid email address.</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea {...register('message', { required: true })} 
          className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24" id="message" placeholder="Message"></textarea>
          {errors.message && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
        </div>
        <div className="flex items-center justify-end">
            <button className="bg-black-gradient text-white font-bold py-2 px-8 rounded-full transform transition-200 hover:scale-105 focus:translate-x-[1px] focus:translate-y-[2px] focus:outline-none focus:shadow-outline" 
            type="submit">
                Submit
            </button>
        </div>
        {messageSent === 'success' && <p className="text-center pt-2 text-green-500">Your message has been sent successfully!</p>}
        {messageSent === 'error' && <p className="mx-auto pt-2 text-red-500">Your message could not be delivered. Please try again later.</p>}
      </form>
    </section>
  );
}

export default Contact;
