import Image from "next/image";

export default function SplashScreen() {
  return (
    <div>
     <div className="flex flex-row ">
       <img src="/menu_button.svg" />
       <img src="/setting_button.svg" />
     </div>
    
     <div className= "min-h-[100vh]  justify-center flex 
     flex-row items-center bg-gradient-to-b from-white to-yellow-300"> 
       <img src="/monica.svg" />
       <div className="ml-5"> 
          <h1 className="text-slate-400"> Hello again! </h1>
          <h2 className="text-5xl"> Monica </h2>
          <h3> FITNESS BEGINNER </h3>
       </div>
     </div>
    </div>
    )
}

