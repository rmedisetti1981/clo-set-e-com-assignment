import { useDispatch } from "react-redux";
import {resetAll} from "./../../store/storeBarrel";

const ResetAllButton = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(resetAll())}>
      Reset All
    </button>
  );
};

export default ResetAllButton;
