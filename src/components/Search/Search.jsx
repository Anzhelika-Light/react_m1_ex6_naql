import { Component } from "react";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";
import { ReactComponent as ArrowDown } from "../../assets/img/arrow-down.svg";
import styles from "./search.module.css";

class Search extends Component {
  state = {
    city: "Choose city",
  };

  selectId = nanoid();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    Notiflix.Notify.info("Great choice!");
  };

  render() {
    const { handleChange, selectId } = this;
    const { city } = this.state;

    return (
      <div className="container">
        <h2 className={styles.title}>Search</h2>
        <form>
          <select
            name="city"
            value={city}
            onChange={handleChange}
            id={selectId}
            className={styles.select}
          >
            <option value="Choose">Choose city</option>
            <option value="Портри">Портри, остров Скай, Шотландия</option>
            <option value="Альбаррасин">Альбаррасин, Испания</option>
            <option value="Ия">Ия, остров Санторини, Греция</option>
            <option value="Нерсборо">Нерсборо, Англия</option>
          </select>
          <button className={styles.btn} type="button">
            <ArrowDown className={styles.icon} size="27px 16px" />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
