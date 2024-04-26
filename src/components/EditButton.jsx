export default function EditButton({ editState, setEditState }) {
    const changeEditState = () => {
        setEditState(!editState)
    }
    return (
        <>
            <button onClick={changeEditState}>Edit</button>
        </>
    )
}