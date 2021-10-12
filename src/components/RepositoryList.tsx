import { useState, useEffect } from "react";
import "../styles/repositories.scss";
import { RepositoryItem } from "./RepositoryItem";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  //sempre que for uma lista, inicie o estado como array vazio
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    // TODO 1°buscar(fetch) dados, 2°então pegar resposta(response) converter para json, 3° então pegar os dados(data) e salvar na variavel repositories
    fetch("https://api.github.com/users/gabrielmsdf3/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  // dentro do segundo parametro, se estiver vazio, a função só executa 1 vez
  // porque quando esse array estiver vazio, não há nada que quando for alterado
  //faça a função executar de novo

  // ! Se não colocar o array, mesmo que vazio, será criado um loop!
  //  ! não coloque repositories no array e set repositories tambem, pois criara outro loop!

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
