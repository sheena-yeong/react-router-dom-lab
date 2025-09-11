import { Link } from "react-router-dom";

function MailboxList({ mailboxes }) {
  return (
    <>
      <h1>MailboxList</h1>
      { mailboxes.length === 0 ? <p>No Mailboxes</p> : <ul>
        {mailboxes.map((mailbox, idx) => (
          <li key={idx}>
            <Link to={`/mailboxes/${idx + 1}`}>{mailbox.boxOwner}</Link>
          </li>
        ))}
      </ul>}
      
    </>
  );
}

export default MailboxList;
