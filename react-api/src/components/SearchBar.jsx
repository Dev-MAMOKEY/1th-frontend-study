import styles from "./SearchBar.module.css"

const SearchBar = ({ onSearch }) => {
    return (
        <div className={styles.searchContainer}>
            <input 
                className={styles.searchInput} 
                placeholder="검색" 
                onChange={onSearch} // 글자를 입력할 때마다 App.jsx의 keyword가 바뀜
            />
        </div>
    )
}

export default SearchBar
