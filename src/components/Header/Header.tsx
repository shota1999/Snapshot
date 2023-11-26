import { CategoryList } from "./CategoryList/CategoryList"
import styles from "./Header.module.scss"
import { SearchInput } from "./SearchInput/SearchInput"

type HeaderProps = {
  setInputValue:(value:string) => void
  submit:() => void
  inputValue: string;
  submitCategoryList:(value:string) => void
  setCategoryList: (value: string) => void;
}


export const Header = ({setInputValue,submit,inputValue,submitCategoryList,setCategoryList}:HeaderProps) => {
  return (
    <div className={styles.container}>
        <h1>SnapShot</h1>
         <SearchInput setInputValue={setInputValue} submit={submit} inputValue={inputValue}/>
         <CategoryList submitCategoryList={submitCategoryList}  setCategoryList={setCategoryList}/>
    </div>
  )
}
