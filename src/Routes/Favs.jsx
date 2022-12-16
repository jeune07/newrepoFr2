import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/ContextGlobal";


const Favs = () => {

  const { favs } = useContextGlobal()

    let filteredFavs = favs.filter((item, index) => {
      return favs.indexOf(item) === index
    })

  return (
    <>
      <h1>Here are your favorite Dentists</h1>
      <div className="container-favs">
        {filteredFavs.map(item => {
          return (
            <Link to={`/detail/${item.id}`} key={item.id} className="link-card">
              <div className="card-grid">
                <div className="card">
                  <h3>The dentist ID is:{item.id}</h3>
                  <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
                  <p>The dentist Name is:{item.name}</p>
                  <h5>The dentist Username is:{item.username}</h5>
                </div>
              </div>
            </Link>
          )})}
      </div>
    </>
  );
};

export default Favs;
