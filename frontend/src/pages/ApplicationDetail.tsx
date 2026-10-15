import { useParams } from "react-router";

export default function ApplicationDetailPage() {
  const { applicationId } = useParams();

  return (
    <header>
      <h1>Application Detail</h1>
      <p>{applicationId}</p>
    </header>
  );
}
