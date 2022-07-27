
import { useDispatch, useSelector } from "react-redux";
 
import SearchModal from './SearchModal/SearchModal'
import './searchBox.css'
import { toggleModal } from "../../../store/searchModal";

const SearchBox = () => {
const searchModal = useSelector(state => state.searchModal);

  const dispatch = useDispatch();

  return (
    <>
    <div className="search-box-container" onClick={() => dispatch(toggleModal())}>
        <i className="fa fa-search"></i>
    </div>
   {searchModal?  <SearchModal/> : null}
   </>
 );
};

export default SearchBox;
