import PlaneIcon from "../icons/PlaneIcon";
import { InputProps, Input } from "@chakra-ui/react";

type Props = {
  onSubmit: (e: React.MouseEvent<HTMLElement>) => Promise<void>;
  inputProps: InputProps;
};

const FormField = (props: Props) => {
  const { onSubmit, inputProps } = props;
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <button type="submit" className='absolute right-4 text-white' style={{top: '1.1rem'}}><PlaneIcon fill="white" /></button>
          <input 
            {...inputProps} className=" placeholder:text-gray-400 text-white block bg-gray-800 w-full border border-gray-900 rounded-md py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-gray-800 focus:ring-gray-800 focus:ring-1 sm:text-sm" placeholder="ask for anything..." type="text"/> 
        </label>
      </div>
    </form>
  )
}
export default FormField;
