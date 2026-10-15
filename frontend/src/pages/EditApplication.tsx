import { useParams } from "react-router";

export default function EditApplication() {
  const { applicationId } = useParams();

  return (
    <header>
      <h1>Edit Application</h1>
      <p>{applicationId}</p>
    </header>
  );
}
