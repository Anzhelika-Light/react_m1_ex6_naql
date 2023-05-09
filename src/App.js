import Section from "./components/Section/Section";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Search from "./components/Search/Search";
import Login from "./components/Login/Login";

import "./App.css";
import "./styles/common.css";
import styles from "./components/Section/section.module.css";

import AboutData from "./data/about-data.json";
import HeaderData from "./data/language-options.json";

const App = () => {
  return (
    <div className="App">
      <div className={styles.greenWrapper}>
        <Section className={styles.sectionHeader}>
          <Header items={HeaderData} />
        </Section>
        <Section className={styles.sectionHero}>
          <Hero />
        </Section>
      </div>
      <Section className={styles.sectionAbout}>
        <About {...AboutData} />
      </Section>
      <Section className={styles.sectionSearch}>
        <Search title="Search" />
      </Section>
      <Section className={styles.sectionLogin}>
        <Login />
      </Section>
    </div>
  );
};

export default App;
