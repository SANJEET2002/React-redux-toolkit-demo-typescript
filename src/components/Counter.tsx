import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  demoRequest,
  increment,
} from "../store/features/counterSlice";
import { useGetAllProductsQuery } from "../store/features/rtkQuery";
import { AppDispatch, RootState } from "../store/store";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counterState.counter);
  const response = useSelector(
    (state: RootState) => state.counterState.response
  );
  const status = useSelector((state: RootState) => state.counterState.status);
  const dispatch = useDispatch<AppDispatch>();

  console.log({ counter });
  const { data, isLoading, isError } = useGetAllProductsQuery({});
  console.log({ data, isLoading, isError });
  useEffect(() => {
    console.log({ data, isLoading, isError });
  }, [data, isLoading, isError]);

  console.log({ data });
  console.log({ counter });
  useEffect(() => {
    console.log({ status, response });
  }, [status, response]);

  return (
    <div className="flex flex-col">
      {counter}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(demoRequest())}>decrement</button>
    </div>
  );
};

export default Counter;
