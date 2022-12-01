
export default function FormInputPassword() {
  return (
    <div className="text-xs">
      <label htmlFor="password" className="flex font-medium text-off-white">
        Password
      </label>
      <div className="mt-1">
        <input
          type="password"
          name="password"
          id="password"
          className="block bg-[#0B0B0B] text-white/50 border border-bd-grey w-full rounded-md shadow-sm text-xs"
          placeholder="Enter Your Password"
        />
      </div>
    </div>
  )
}
