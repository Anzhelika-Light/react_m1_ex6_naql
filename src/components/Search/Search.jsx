import { Component } from "react";
import { ReactComponent as ArrowDown } from "../../assets/img/arrow-down.svg";
import styles from "./search.module.css";

class Search extends Component {
  render() {
    return (
      <div className="container">
        <h2 className={styles.title}>Search</h2>
        <form>
          <input
            className={styles.input}
            type="text"
            placeholder="Choose city"
          />
          <button className={styles.btn} type="submit">
            <ArrowDown className={styles.icon} size="27px 16px" />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
