import React, { useState } from "react";


const ImageGen = ()=>{

    let qoutesArr =[];

    async function loadQoutes(){
        const res = await fetch('https://type.fit/api/quotes');
        qoutesArr = await res.json();
    }

    const [qoutes,setQoutes] = useState({
        text:"Qoutes Will be displayed Here...",
        author:"Author Name Will be Displayed Here"
    });

    const random =()=>{
        const select = qoutesArr[Math.floor(Math.random()*qoutesArr.length)];
        setQoutes(select);
    }

   loadQoutes();
    return(
        <section>
            <div className="container">
                <h1>Random Qoutes <span className="pink">Generator</span></h1>
                <div className="qouteContainer">
                    <p>{qoutes.text}</p>
                    <p>~{qoutes.author}</p>
                </div>
                    
            <button onClick={()=>{random()}}>Generate Qoutes</button>

            </div>
        </section>
    )
}

export default ImageGen;