import styles from './CategoryList.module.scss';

const categories = ['Mountain', 'Beaches', 'Birds', 'Food'];

type CategoryListProps = {
  submitCategoryList: (value: string) => void;
  setCategoryList: (value: string) => void;
};

export const CategoryList = ({ submitCategoryList, setCategoryList }: CategoryListProps) => {
  const handleCategoryClick = (category: string) => {
    submitCategoryList(category);
    setCategoryList(category);
   
  };

  return (
    <div className={styles.container}>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
