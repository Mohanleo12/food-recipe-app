import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function NavBar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  return (
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 '>
      <h2 className='text-2xl font-semibold'>
        <NavLink
          to={"/"}
          className='text-black hover:text-gray-700 duration-300 '>
          FoodWorld
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder='Enter items'
          className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-150 shadow-lg shadow-red-100 focus:shadow-red-200 '
        />
      </form>
      <div className='flex gap-5'>
        <div>
          <NavLink
            to={"/"}
            className='text-black hover:text-gray-700 duration-300 '>
            Home
          </NavLink>
        </div>

        <div>
          <NavLink
            to={"/favorites"}
            className='text-black hover:text-gray-700 duration-300 '>
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
