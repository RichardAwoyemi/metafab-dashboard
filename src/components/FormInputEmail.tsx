import { Dispatch, SetStateAction } from "react";

interface Props {
  handleChange: Dispatch<SetStateAction<string>>;
}

export default function FormInputEmail(props: Props) {
  return (
    <div className="text-xs">
      <label htmlFor="email" className="flex font-medium text-off-white">
        Email Address
      </label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="block bg-[#0B0B0B] text-white/50 border border-bd-grey w-full rounded-md shadow-sm text-xs"
          placeholder="Enter Email Address"
          onChange={(event) => props.handleChange(event.target.value)}
        />
      </div>
    </div>
  );
}
