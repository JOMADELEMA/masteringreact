import React, { useEffect, useState } from "react";
import getPosts from "../helpers/getPosts";
import getUser from "../helpers/getUser";

// const initialUser = {
//   id: 1,
//   name: "Juan Perez",
//   email: "jperez@ejemplo.com",
// };

// const initialPosts = [
//   {
//     id: 1,
//     description: "descripcion de prueba",
//   },
//   {
//     id: 2,
//     description: "descripcion de prueba 2",
//   },
//   {
//     id: 3,
//     description: "descripcion de prueba 3",
//   },
// ];

const FetchCard = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const updateUser = () => {
    getUser().then((newUser) => {
      setUser(newUser);
    });
  };

  const updatePosts = () => {
    getPosts(user.id).then((userPosts) => {
      setPosts(userPosts);
    });
  };

  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    if (user?.id) {  //el ? sirve para cuando necesitamos saber que el parametro enviado no es undefined
      updatePosts();
    }
  }, [user]);

  return (
    <>
      <div className="container bg-light rounded p-3">
        <h1>FetchCard</h1>

        <h4>Nombre: {user.name}</h4>
        <h4>Correo: {user.email}</h4>
        <button onClick={updateUser}>Another User</button>

        <br />
        <br />

        <h2>Posts - Usuario: {user.id}</h2>

        <ul className="mt-3">
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FetchCard;
