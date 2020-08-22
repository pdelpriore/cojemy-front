import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { eventButtonItemsArray } from "../../../shared/buttonItemsArray";
import { getEvents } from "../../../redux/myEvents/retrieveEvents/thunk/retrieveEventsThunk";

const useMyEvents = () => {
  const [skip, setSkip] = useState(1);

  const dispatch = useDispatch();
  const { eventButtonId } = useSelector((state) => state.eventCategorySelected);
  const { eventsError } = useSelector((state) => state.events);
  const { userData } = useSelector((state) => state.login);

  const handlePrev = (e) => {
    e.preventDefault();
    skip > 1 && setSkip(skip - 1);
  };
  const handleNext = (e) => {
    e.preventDefault();
    !eventsError && setSkip(skip + 1);
  };

  useEffect(() => {
    setSkip(1);
  }, [eventButtonId]);

  useEffect(() => {
    const limit = 30;
    dispatch(
      getEvents(
        eventButtonItemsArray[eventButtonId].category,
        userData._id,
        userData.email,
        skip,
        limit
      )
    );
  }, [skip, userData._id, userData.email, dispatch]);

  return { skip, handlePrev, handleNext };
};

export default useMyEvents;
