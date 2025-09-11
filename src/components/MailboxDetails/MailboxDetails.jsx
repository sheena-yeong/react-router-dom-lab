import { useParams } from "react-router-dom";

function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams();
  const index = Number(mailboxId) - 1;       // convert to number
  const selectedBox = mailboxes[index];  // lookup by index

  if (!selectedBox) return <p>No Mailboxes</p>;

  return (
    <div>
      <h1>Mailbox { mailboxId }</h1>
      <h3>Details</h3>
      <p>Boxholder: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </div>
  );
}

export default MailboxDetails;