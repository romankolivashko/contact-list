import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const Details = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        <img src="/email.png" alt="email" width={18} height={18} className="contact-icon"/>
        {user.email}
      </p>
      <p>
        <Image src="/web.png" alt="website" width={18} height={18} />
        {user.website}
      </p>
      <p>
        <Image src="/phone.png" alt="phone" width={18} height={18} />
        {user.phone}
      </p>
      <p>
        <Image src="/city.png" alt="city" width={18} height={18} />
        {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
};

export default Details;
