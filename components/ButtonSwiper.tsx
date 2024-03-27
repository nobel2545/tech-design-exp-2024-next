export default function ButtonSwiper() {
    return (
        <div className="justify-center flex flex-row items-center mb-20">
            <div className="justify-center flex flex-row items-center border-solid 
             border-2 border-black rounded-full p-2" >
                <img className="ml-5 w-[25px]" src="/add_icon.svg"/>
                <h2 className="mr-5 uppercase font-sans font-medium p-2"> Add to diet </h2>
           </div>
           
           <img className="w-[60px] ml-5" src="/enter_button.svg"/>
        </div>
    )
}