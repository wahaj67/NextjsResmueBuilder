"use client";
import { ChangeEvent, useState } from "react";


export default function ResumeBuilder() {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [objective, setObjective] = useState<string>("");
  const [education, setEducation] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true); 
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  const educationList = education.split(",").map((item) => item.trim());
  const skillsList = skills.split(",").map((item) => item.trim());

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-[95%] md:max-w-[60%] h-full md:h-[95%] flex flex-col bg-white rounded-lg items-center shadow-md p-4 overflow-y-auto">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full">
            <h1 className="font-bold text-lg md:text-xl">Name:</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full sm:w-[80%] md:w-2/3 lg:w-1/2 px-4 py-2 rounded-lg shadow-md"
              placeholder="Enter your name"
            />

            <h1 className="font-bold text-lg md:text-xl">Phone Number:</h1>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setPhoneNumber(value);
                }
              }}
              className="w-full sm:w-[80%] md:w-2/3 lg:w-1/2 px-4 py-2 rounded-lg shadow-md"
              placeholder="Phone Number..."
              maxLength={11}
            />

            <h1 className="font-bold text-lg md:text-xl">Email:</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-[80%] md:w-2/3 lg:w-1/2 px-4 py-2 rounded-lg shadow-md"
              placeholder="@example.com"
            />

            <h1 className="font-bold text-lg md:text-xl">Objective:</h1>
            <textarea
              className="w-full sm:w-[80%] md:w-2/3 lg:w-1/2 px-4 py-2 rounded-lg shadow-md"
              placeholder="I am a full-stack developer...."
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
            />

            <h1 className="font-bold text-lg md:text-xl">Education (comma-separated):</h1>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full sm:w-[80%] md:w-2/3 lg:w-1/2 px-4 py-2 rounded-lg shadow-md"
              placeholder="e.g., BSc Computer Science, MSc Data Science"
            />

            <h1 className="font-bold text-lg md:text-xl">Skills (comma-separated):</h1>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full sm:w-[80%] md:w-2/3 lg:w-1/2 px-4 py-2  rounded-lg shadow-md"
              placeholder="e.g., Next.js, TypeScript, Tailwind CSS"
            />

            <div className="mt-6">
              <button type="submit" className="px-6 py-3 text-sm md:text-base rounded-full bg-black text-white hover:text-black hover:bg-gray-400">Generate Resume</button>
            </div>
          </form>
        ) : (
          <div className="w-full flex flex-col items-start p-4 md:p-8">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-lg">{phoneNumber}</p>
            <p className="text-lg">{email}</p>
            <h2 className="mt-4 font-semibold text-lg md:text-xl">Objective:</h2>
            <p>{objective}</p>

            <h2 className="mt-4 font-semibold text-lg md:text-xl">Education:</h2>
            <ul className="list-disc ml-5">
              {educationList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-4 font-semibold text-lg md:text-xl">Skills:</h2>
            <ul className="list-disc ml-5">
              {skillsList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <div className="flex space-x-4 mt-8">
              <button className="px-6 py-3 rounded-full bg-black text-white hover:text-black hover:bg-gray-400" onClick={handleEdit}>Edit</button>
              <button className="px-6 py-3 rounded-full bg-black text-white hover:text-black hover:bg-gray-400" onClick={handlePrint}>Print or Save as PDF</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
