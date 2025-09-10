import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/mailboxes"}>MailboxList</Link>
        <Link to={"/new-mailbox"}>New Mailbox</Link>
      </div>
    </>
  );
}

export default NavBar;
