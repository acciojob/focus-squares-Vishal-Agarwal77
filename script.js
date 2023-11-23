//your JS code here. If required.
const box=document.getElementsByClassName("square");
for(let item of box){
	// console.log(item);
	item.addEventListener("mouseover",()=>{
	 	for(let it of box){
			if(it.id!=item.id){
				it.style.backgroundColor="#6F4E37";
			}
		}
	})
	item.addEventListener("mouseout",()=>{
	 	for(let it of box){
			it.style.backgroundColor="#E6E6FA";
		}
	})
};
