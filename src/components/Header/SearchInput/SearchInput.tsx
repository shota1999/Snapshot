
import styles from './SearchInput.module.scss';
import { FaSearch } from 'react-icons/fa';

type SearchInputProps = {
  setInputValue:(value:string) => void
  submit:() => void
  inputValue: string;
}


export const SearchInput = ({setInputValue,submit,inputValue}:SearchInputProps) => {

      const handleChange = (e: { target: { value: string; }; }) => {
        setInputValue(e.target.value)
      }
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        submit(); 
      };


  return (
    <form className={styles.container} onSubmit={handleSubmit} >
      <input type="text" placeholder="Search..."  onChange={handleChange} value={inputValue} />
      <button type='submit' className={inputValue === "" ? styles.disabledButton : ''} >
        <FaSearch className={styles.icon} />
      </button>
    </form>
  );
};

