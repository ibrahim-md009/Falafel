const Input = ({
  label,
  name,
  type,
  value,
  onChange,
  id,
  className,
  placeholder,
}) => {
  return (
    <div className={`flex w-100 flex-col gap-2 md:w-150`}>
      {label && (
        <label htmlFor={id} className="text-[#78350F]">
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        className={`p-3 text-xl outline-none placeholder:text-xl focus:placeholder:text-transparent ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
