import React from "react";
import "./App.css";
import NoteApp from "./components/NoteApp";
import { Navbar } from "./components/Navbar";
import DetailPage from "./components/NotesDetails";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./components/NotFoundPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import { getUserLogged, putAccessToken } from './utils/auth';

import { ThemeProvider } from "./context/ThemeContext";
import ToggleTheme from "./components/ThemeToggler";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light'
          localStorage.setItem('theme', newTheme);
          return {
            theme: newTheme
          };
        });
      }
    }
  
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
 
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      document.documentElement.setAttribute('data-theme', this.state.theme);
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }
   if (this.state.authedUser === null) 
      return(
       <ThemeProvider value={this.state}>
        <nav>
          <h1>My Notes</h1>
          <p>Write Anything You Want !</p>
          <ToggleTheme />
        </nav>
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
       </ThemeProvider>
      )
      return (
        <ThemeProvider value={this.state}>
          <nav>
          <h1>My Notes</h1>
          <p>Write Anything You Want !</p>
          <ToggleTheme />
          <Navbar logout={this.onLogout} name={this.state.authedUser.name}/>
        </nav>
          <Routes>
            <Route path="/" element={<NoteApp />} />
            <Route path="/notes/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ThemeProvider>
      );
  }
  
}

export default App;
