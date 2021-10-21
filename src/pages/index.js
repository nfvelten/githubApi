import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// configuracao do axios
const axiosConfig = {
  baseURL: "https://api.github.com/",
  auth: {
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET,
  },
};

export default function Home() {
  // useState para setar os valores dos inputs e dos repositorios
  const [repos, setRepos] = useState([]);
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("");
  console.log(text);
  console.log(repos);
  // funcao para o onSubmit
  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  }
  // funcao para fazer o fetch dos repositorios
  function searchRepos() {
    const query = language ? `${text}+language:${language}` : text;
    axios
      .get(`search/repositories?q=${query}&per_page=50&sort=stars`, axiosConfig)
      .then((res) => {
        setRepos(res.data.items);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <main>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="search"
              value={text}
              name="search"
              placeholder="Search GitHub"
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="text"
              id="language"
              value={language}
              name="language"
              placeholder="language"
              onChange={(e) => setLanguage(e.target.value)}
            />
            <input type="submit" />
          </form>
          <div>
            <ul className={styles.ul}>
              {/* .map para mapear cada um dos repos, depois listando algumas informaçoes */}
              {repos.map((res) => {
                const { id, name, description, full_name, language } = res;
                return (
                  <li key={id}>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {language}
                        </Typography>
                        <Typography variant="body2">{description}</Typography>
                      </CardContent>
                      <CardActions>
                        <Link href={`https://github.com/${full_name}`} passHref>
                          <Button size="small">Learn More</Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
