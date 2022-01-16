import styles from '../../styles/Users.module.css'

export const getStaticProps = async () => {

  const res = fetch('https://jsonplaceholder.typicode.com/users');
  const data = await (await res).json();

  return {
    props: {users: data}
  }

}

const Users = ( {users} ) => {
  return ( 
    <div>
      <h1>All users</h1>
      {users.map(user => (
        <div key={user.id}>
          <a className={styles.single}>
            <h3>{ user.name }</h3>
          </a>
        </div>
      ))}
    </div>
   );
}
 
export default Users;