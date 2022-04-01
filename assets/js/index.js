(function(){
    const header = document.getElementById("header");
    const screenHeight = document.getElementsByTagName("body")[0].clientHeight;
    let defaultSize = 50; /* Altura inicial del headeer */
    const interval = setInterval(()=>{
        /* Aumentamos el tamaño de 10 en 10 cada 10 milisegundos */
        header.style.height = defaultSize+"px";
        defaultSize += 10
        /* Detenemos el interval si este es mayor a la ventana */
        if(defaultSize > screenHeight){
            clearInterval(interval)
        }
    }, 10)



})()

