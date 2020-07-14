import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { eventButtonItemsArray } from "../../../shared/buttonItemsArray";
import { getEvents } from "../../../redux/myEvents/retrieveEvents/thunk/retrieveEventsThunk";

let skip = 1;

const useMyEvents = () => {
  const limit = 30;
  const dispatch = useDispatch();
  const { eventButtonId } = useSelector((state) => state.eventCategorySelected);
  const { eventsError } = useSelector((state) => state.events);
  const { userData } = useSelector((state) => state.login);

  const handlePrev = (e) => {
    e.preventDefault();
    skip > 1 && skip--;
    dispatch(
      getEvents(
        eventButtonItemsArray[eventButtonId].category,
        userData._id,
        userData.email,
        skip,
        limit
      )
    );
  };
  const handleNext = (e) => {
    e.preventDefault();
    !eventsError && skip++;
    dispatch(
      getEvents(
        eventButtonItemsArray[eventButtonId].category,
        userData._id,
        userData.email,
        skip,
        limit
      )
    );
  };

  useEffect(() => {
    skip = 1;
  }, []);

  return { skip, handlePrev, handleNext };
};

export default useMyEvents;
