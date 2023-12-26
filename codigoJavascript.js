const nombrePais = document.querySelector(".texto");
const botonBuscar = document.querySelector(".buscar");



async function consultaExistenciaPais(nombrePais) {
	try{
		//const url = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}?fullText=true`);
		const url = await fetch(`https://restcountries.com/v3.1/translation/${nombrePais}?fullText=true`);
		
		const res = await url.json();
		let variable =  [res[0].name.common,res[0].capital[0],res[0].flags.png,res[0].population]
		console.log(url.status);
		console.log(variable)
		return variable;

	}catch(e){
		console.log("No existe",e)
	}
}





	
botonBuscar.addEventListener("click",async()=>{
	let res = await consultaExistenciaPais(nombrePais.value);
	
	function crear(contenido){
		const tabla = document.querySelector(".tabla");
			const info = document.createElement("tr");
			info.classList.add("fila")
		

			for(j=0;j<4;j++){
				if(j==2){
					const v = document.createElement("td");
					const img = document.createElement("img");
					img.classList.add("imagen")
					img.src = contenido[j]
					v.appendChild(img)
					info.appendChild(v);
				}else{
					const v = document.createElement("td");
					v.innerText = contenido[j]
					info.appendChild(v);

				}

			}
		
		tabla.appendChild(info);
	}

	if(res){
		crear(res);
	}else{
		alert("Hubo un error al escribir o intenta escribirlo en ingles")
	}



})

const botonLimpiar = document.querySelector(".limpiar");



botonLimpiar.addEventListener("click",()=>{
	const tabla = document.querySelector(".tabla");
	tabla.innerHTML="";
	const info = document.createElement("tr");
		const q = document.createElement("th");
		const w = document.createElement("th");
		const e = document.createElement("th");
		const f = document.createElement("th");
		q.innerText= "Nombre";
		q.style.backgroundColor ="white";
		w.innerText="Capital";
		w.style.backgroundColor ="white";
		e.innerText="Bandera";
		e.style.backgroundColor ="white";
		f.innerText="Poblacion";
		f.style.backgroundColor ="white";
	info.appendChild(q);
	info.appendChild(w);
	info.appendChild(e);
	info.appendChild(f);
	tabla.appendChild(info);



	

})


