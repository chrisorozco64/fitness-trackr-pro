import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDetails() {
  const { id } = useParams();
  const {
    data: activity,
    error,
    loading,
  } = useQuery(`/activities/${id}`, `activity-${id}`);

  const { token } = useAuth();

  // Always call useMutation, even before activity is loaded
  const {
    mutate: deleteActivity,
    loading: deleteLoading,
    error: deleteError,
  } = useMutation(
    "DELETE",
    `/activities/${activity?.id ?? ""}`,
    ["activities"]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  if (!activity) return <p>No activity found</p>;

  return (
    <section>
      <h2>{activity.name}</h2>
      <p>{activity.description}</p>
      {token && (
        <button onClick={() => deleteActivity()}>
          {deleteLoading
            ? "Deleting"
            : deleteError
            ? deleteError
            : "Delete"
          }
        </button>
      )}
          </section>
        );
    }
