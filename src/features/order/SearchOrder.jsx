import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    navigate(`order/${search}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        className="sm rounded-full  bg-yellow-100 px-4 py-2 text-sm outline-0 transition-all duration-300 placeholder:text-stone-400 focus:ring-yellow-500 sm:w-64 sm:focus:w-72"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
