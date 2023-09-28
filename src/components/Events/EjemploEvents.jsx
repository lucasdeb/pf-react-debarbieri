const EjemploEvents = () => {
    const evitarVocales = (event) =>{
        const vocales = ['a','e','i','o','u','A','E','I','O','U'];

        if(vocales.includes(event.key)){
            event.preventDefault();
        }
    }
    
    return(
        <input type="text" placeholder="prueba" onKeyDown={evitarVocales}></input>
    )
}

export default EjemploEvents;