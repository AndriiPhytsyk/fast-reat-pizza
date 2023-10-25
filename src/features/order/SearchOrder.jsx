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
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
