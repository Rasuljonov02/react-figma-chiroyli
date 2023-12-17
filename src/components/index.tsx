import React from "react";
import Right1 from "./right";
import Left from "./left";

function Appkichik() {
	return (
		<div className=" dark:bg-black w-[100%] flex ">
			<Right1 />
			<Left />
		</div>
	);
}




const body = document.querySelector("body")!;
const svgs = document.querySelectorAll("svg path");

 export function changeColor() {
   const currentBackgroundColor = body.style.backgroundColor;

   if (currentBackgroundColor === "white") {
      body.style.backgroundColor = "black";
      body.style.color = "white";

      svgs.forEach((path) => {
         path.setAttribute("fill", "#FFFFFF");
      });
   } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";

      svgs.forEach((path) => {
         path.setAttribute("fill", "#1C1C1C");
      });
   }
}


const scj:HTMLImageElement = document.querySelector("#dars")!;

scj.addEventListener("click", () => {
 console.log("sads");
 changeColor();
});


export default Appkichik;