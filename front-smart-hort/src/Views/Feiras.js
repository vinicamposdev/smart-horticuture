import React, { useEffect, useState } from "react";
import FeiraCard from "../Components/FeirasCard";
import api from "../utils/api";

export default function Feiras() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    (async function getRepositories() {
      const repositoriesFetched = await api.get("street-marckets");
      console.log('repositoriesFetched', repositoriesFetched.data)
      setRepositories(repositoriesFetched.data);
    })();
  }, []);

  return (
    <div className="w-11/12 md:w-full flex flex-col items-center">
      <h1 className="text-5xl text-center text-white ml-10 md:ml-0">
        Feiras disponiveis
      </h1>
      <div className="mt-10 flex flex-col items-center justify-center md:flex-row md:flex-wrap">
        {repositories.map((repository) => (
          <li key={repository.id} >
            <FeiraCard  dataFeira={repository} />
          </li>
        ))}
      </div>
    </div>
  );
}
