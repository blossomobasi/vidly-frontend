import AddMovie from "../../admin-components/AddMovie";
import DeleteMovie from "../../admin-components/DeleteMovie";

function AdminMovie() {
  return (
    <div>
      <h2>Operations on Movies</h2>

      <AddMovie />
      <DeleteMovie />
    </div>
  );
}

export default AdminMovie;
