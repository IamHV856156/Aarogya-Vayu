import React,{useState} from "react";

const Feadbackform =() =>{
    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[message,setmessage]=useState('');
    const[submitted,setsubmitted]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log("--- Form Submission Attempt ---");
        console.log("Name:", name, "Email:", email, "Message:", message);

        if(!name.trim()|| !email.trim()||!message.trim()){
            console.error("Please fill in all fields");
            return;
        }
        console.log("Feedback Submitted:",{name,email,message});

        setsubmitted(true);

        console.log("isSubmitted set to true.");

        setname('');
        setemail('');
        setmessage('');

        setTimeout(() => {
            setsubmitted(false);
                console.log("submitted set to false after timeout.");
        }, 5000);
    };
    return(
        <div className="p-6 bg-gray-100 rounded-lg shadow-md font-inter dark:bg-gray-700 transition-colors duration-300">
            <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-100 text-center md:text-left">Send Us Feedback</h3>
            {submitted ?(
                <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 mb-4 rounded-md text-center dark:bg-green-800 dark:text-green-100" role="alert">
                    <p className="font-semibold">Thank you for your Feedback!</p>
                    <p className="font-sm">We appreciate your input.</p>
                </div>
            ):(
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Name</label>
                        <input type="text" id="name" name="name" className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 transition-colors duration-300" value={name} onChange={ (e) =>setname(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 transition-colors duration-300" value={email} onChange={ (e) =>setemail(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Message</label>
                        <textarea id="message" name="message" className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter resize-y text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 transition-colors duration-300" value={message} onChange={ (e) =>setmessage(e.target.value)} required/>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-inter transition-colors duration-200 dark:bg-bule-700 dark:hover:-bg-blue-800 dark:text-gray-100">Send Message</button>
                </form>
            )}
        </div>
    );
};

export default Feadbackform;