import s from "./Contact.module.css";
import userIcon from './svg/user.svg'; 
import phoneIcon from './svg/phone.svg'; 

const Contact = ({ id, name, number, handleDeleteContact }) => {
  return (
    <li className={s.contact}>
      <div>
        <div>
      <img src={userIcon} width={18} height={18} alt="User Icon" />
      <p>{name}</p>
        </div>
        <div>
      <img src={phoneIcon} width={18} height={18} alt="Phone Icon" />
      <p>{number}</p>
        </div>
      </div>
      <button onClick={() => handleDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;
