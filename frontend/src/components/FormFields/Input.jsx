// eslint-disable-next-line react/prop-types
const Input = ({ label, type, value, name, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="py-3 px-4 block w-full border-red-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
      />
    </div>
  );
};

export default Input;
