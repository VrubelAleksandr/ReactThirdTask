export default function User({ contacts, onDelete }) {
  return (
    <>
      {
        contacts.map((contact) => {
          const { id, name, username, phone } = contact;
          function onDeleteItem(e) {
            e.stopPropagation();
            onDelete(id);
          }
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{username}</td>
              <td>{phone}</td>
              <td><button id={id} className='btn-del' onClick={onDeleteItem}>Delete</button></td>
            </tr>
          )
        })
      }
    </>
  )
}
