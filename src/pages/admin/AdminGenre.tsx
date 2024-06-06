import AddNewGenre from "../../admin-components/AddNewGenre";
import DeleteGenre from "../../admin-components/DeleteGenre";
// import UpdateGenre from "../../components/UpdateGenre";

function AdminGenre() {
    return (
        <>
            <h3>Operations on Genre</h3>
            <AddNewGenre />
            <DeleteGenre />
            {/* <UpdateGenre /> */}
        </>
    );
}

export default AdminGenre;
