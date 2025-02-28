export default function Header(props) {

    const { onSubmit, value, onChange } = props

    return (
        <>
            <h1>Header</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={value} onChange={onChange} placeholder="Cerca" />
                <button>Invia</button>
            </form>
        </>
    )
}