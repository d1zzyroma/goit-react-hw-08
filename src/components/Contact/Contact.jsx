import { useDispatch } from "react-redux";
import man from "./man.svg";
import phone from "./phone.svg";
import css from "./Contact.module.css";
import { deleteContactsThunk } from "../../redux/contactsOps";

const Contact = ({ name, phoneNumber, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactsThunk(id));
  };

  return (
    <div>
      <div className={css.rowCenter}>
        <div className={css.column}>
          <div className={css.row}>
            <img src={man} alt="" width={40} />
            <p className={css.text}>{name}</p>
          </div>
          <div className={css.row}>
            <img src={phone} alt="" width={40}/>
            <p className={css.text}>{phoneNumber}</p>
          </div>
        </div>
        <div>
          <button className={css.btn} onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
