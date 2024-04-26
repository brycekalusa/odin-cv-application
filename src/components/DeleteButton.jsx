export default function DeleteButton({ deleteFunction }) {
    return (
        <>
            <button className="delete-btn" onClick={deleteFunction}>Delete</button>
        </>
    )
}