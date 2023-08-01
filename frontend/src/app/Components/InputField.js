const InputField = (props) => {
  return (
    <div>
      <label className="text-lg">{props.label}</label>
      <br />
      <input
        onChange={props.onChange}
        type={props.type}
        className="border-b-[#d9d9d9] border-b-2 bg-transparent h-14 w-96 text-center enabled:outline-none"
        spellCheck="false"
      />
    </div>
  )
}

export default InputField
