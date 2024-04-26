export default function SubmitButton({ editState, setEditState }) {
    const changeEditState = () => {
        setEditState(!editState)
    }
    return (
        <>
            <button onClick={changeEditState}>Submit</button>
        </>
    )
}