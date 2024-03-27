import ButtonSwiper from "@/components/ButtonSwiper";

export default function SplashScreen({ menu}) {
  return (
    
    <div className="min-h-[120vh] bg-gradient-to-b from-white to-yellow-300">
       <div className="flex flex-row p-10 justify-between">
         <img className="w-[50px] rounded-full" src="/menu_button.svg" />
         <img className="w-[50px] rounded-full" src="/setting_button.svg" />
       </div>
    
       <div className= "ml-10 flex flex-row items-center"> 
          <img className="rounded-2xl w-[100px] h-[163px]" src="/monica.svg" />

          <div className="ml-5"> 
            <h1 className="text-slate-400"> Hello again! </h1>
            <h2 className="text-5xl"> Monica </h2>
            <h3> FITNESS BEGINNER </h3>
          </div>
       </div>

       <div className="p-7 justify-center flex flex-col items-center text-center"> 
          
          <div>
            <img className="w-[150px] h-[46px]" src="/chart.svg" />
            <h1 className="my-5 uppercase font-bold font-sans"> This week </h1>
          </div>

          <div className="justify-center flex flex-row items-center">
            <img className="w-[30px]" src="/left_button.svg" />
            <h2 className="mx-10 text-9xl font-light"> 256 </h2>
            <img className="w-[30px]" src="/right_button.svg" />
          </div>

            <h3 className="uppercase text-3xl font-medium"> Kcal </h3>
            <h3 className="mb-10 uppercase text-sm font-sans font-semibold"> Calories </h3>
       </div>

       <div className="justify-center flex flex-row items-center mb-20">
            <div className="justify-center flex flex-row items-center border-solid 
             border-2 border-black rounded-full p-2" >
                <img className="ml-5 w-[25px]" src="/add_icon.svg"/>
                <h2 className="mr-5 uppercase font-sans font-medium p-2"> Add to diet </h2>
           </div>
           
           <img className="w-[60px] ml-5" src="/enter_button.svg"/>
        </div>

    </div>
    )
}

