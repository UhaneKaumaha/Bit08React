export function Form(props) {

    const {tarea, handleSubmit, handleChange} = props

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeHolder="Escribe tu banda" onChange={handleChange} value={tarea}/>
            <input type="submit" className="btn" value="Agregar" onClick={handleSubmit} />
        </form>
    )
}
