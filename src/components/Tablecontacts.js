import User from "./User"

export default function Tablecontacts({ contacts, setContacts, onDelete }) {
  return (
    <table className='contact-table'>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Phone number</th>
          <th>Delete contact</th>
        </tr>
        <User contacts={contacts} onDelete={onDelete} />
      </tbody>
    </table>
  )
}
