import PropTypes from "prop-types";
//Proptypes 을 인스톨 npm install --save prop-types 하고 임폴트 작성
import styles from "./Button.module.css";
function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
