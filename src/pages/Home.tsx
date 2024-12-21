import React, { useEffect, useState } from "react";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { IoAdd, IoSearchOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Repository, HomeProps } from "../types/repository";

const Home: React.FC<HomeProps> = ({ username }) => {
  const [repos, setRepository] = useState<Repository[] | null>(null);
  const [filter, setFilter] = useState<Repository[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getRepositories = async (username: string): Promise<void> => {
    setLoading(true);
    try {
      const URL = `https://api.github.com/users/${username}/repos`;
      const response = await fetch(URL);
      const repos: Repository[] = await response.json();
      setRepository(repos);
      setFilter(repos);
    } catch (error) {
      console.error("Something went wrong", error);
    } finally {
      setLoading(false);
    }
  };

  const getInDays = (time: string): number => {
    const newDate = new Date(time);
    const currentDate = new Date();
    const totalTime = currentDate.getTime() - newDate.getTime();
    return Math.floor(totalTime / (1000 * 60 * 60 * 24));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const search = e.target.value.toLowerCase();
    if (search && repos) {
      const filtered = repos.filter((repo) =>
        repo.name.toLowerCase().includes(search)
      );
      setFilter(filtered);
    } else {
      setFilter(repos);
    }
  };

  useEffect(() => {
    getRepositories(username);
  }, [username]);

  return (
    <div className="bg-white rounded-md max-h-full p-4 home-shadow border border-[#E9EAEB]">
      <div className="md:flex items-center justify-between gap-2">
        <div>
          <h1 className="text-2xl font-semibold">Repositories</h1>
          <p className="mt-2">
            {filter ? filter.length : 0} Total Repositories
          </p>
        </div>

        <div className="space-x-4 flex items mt-2 md:mt-0">
          <button
            className="text-[11px] md:text-[12px] lg:text-base flex gap-3 items-center border border-[#d5d7da] shadow-sm shadow-[#0a0d12]/5 rounded-lg py-[7px] px-[10px] hover:shadow focus:shadow-inner"
            onClick={() => getRepositories(username)}
          >
            <TfiReload />
            Refresh All
          </button>
          <button className="text-[11px] md:text-[12px] lg:text-base flex gap-2 items-center bg-[#1570EF] text-white border border-[#d5d7da] shadow-sm shadow-[#0a0d12]/5 rounded-lg py-[7px] px-[10px] hover:shadow focus:shadow-inner">
            <IoAdd />
            Add Repository
          </button>
        </div>
      </div>

      <div className="max-w-[366px] border border-[#E9EAEB] rounded-md mt-4 flex items-center px-2">
        <IoSearchOutline />
        <input
          type="search"
          className="w-full h-full p-2 outline-none"
          placeholder="Search Repositories"
          onChange={handleSearch}
        />
      </div>

      <div className="py-4">
        {loading ? (
          <p>Loading repositories...</p>
        ) : (
          <ul className="overflow-scroll md:h-[calc(100vh-12rem)]">
            {filter &&
              filter.map((repo) => (
                <li
                  key={repo.id}
                  className="p-4 border border-b-[#D5D7DA] hover:bg-[#D5D7DA]"
                >
                  <Link to={repo.html_url} target="_blank">
                    <div className="flex gap-3 items-center mb-2">
                      <h2 className="font-semibold text-sm md:text-base">
                        {repo.name}
                      </h2>
                      <span className="p-0.5 px-3 text-sm border border-[#B2DDFF] text-[#B2DDFF] bg-[#eff8ff] rounded-full">
                        {repo.visibility}
                      </span>
                    </div>
                    <div className="flex md:justify-between w-full gap-3 md:max-w-[400px]">
                      <div className="text-[9px] md:text-base flex items-center gap-1.5 md:gap-3">
                        {repo.language || "React"}
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#1570EF]"></div>
                      </div>
                      <p className="text-[9px] md:text-base flex items-center gap-1 md:gap-3">
                        <HiOutlineCircleStack /> {repo.size} KB
                      </p>
                      <p className="text-[10px] md:text-base my-0">
                        Updated {getInDays(repo.updated_at)} days ago
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            {!filter || filter.length === 0 ? (
              <p>No repository found.</p>
            ) : null}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
