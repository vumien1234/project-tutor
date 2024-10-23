import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';  // Import icon từ react-icons
import CustomImage from '../common/CustomImage';

const fakeData = [
  { id: 1, name: 'Product 1 React Hook useEffect has a missing dependency  Either include it or remove the dependency array', image: '/assets/image/logo-web.png', path: '/product/1' },
  { id: 2, name: 'Product 2 React Hook useEffect has a missing dependency  Either include it or remove the dependency array', image: '/assets/image/logo-web.png', path: '/product/2' },
  { id: 3, name: 'Product 3 React Hook useEffect has a missing dependency  Either include it or remove the dependency array', image: '/assets/image/logo-web.png', path: '/product/3' },
  { id: 4, name: 'Product 4 React Hook useEffect has a missing dependency  Either include it or remove the dependency array', image: '/assets/image/logo-web.png', path: '/product/4' },
  { id: 5, name: 'Product 5 React Hook useEffect has a missing dependency  Either include it or remove the dependency array', image: '/assets/image/logo-web.png', path: '/product/4' }
];

export default function CustomSearch() {
  const wrapperRef = useRef(null);
  const [showList, setShowList] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState([]);

  const handleSearch = () => {
    setLoading(true);
    const result = fakeData.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setListData(result);
    setLoading(false);
  };

  const handleChangeInput = (e) => {
    if (!showList) {
      setShowList(true);
    }
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(timerId);
  }, [searchValue]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowList(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full ">
      <div className="relative w-full flex items-center">
        <input
          onChange={handleChangeInput}
          className="h-[42px] rounded-[40px] w-full border-[1px] border-gray-300 px-5 pl-10 text-xs hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tìm kiếm..."
          value={searchValue}
        />
        <FaSearch className="absolute left-4 top-3 text-gray-500" size={18} />
      </div>

      {/* Search result dropdown */}
      {showList && (
        <div className="absolute z-50 mt-1 w-full rounded-xl bg-white drop-shadow-xl">
          <div className="scrollbar-thin my-2 max-h-[300px] min-w-full divide-gray-200 overflow-y-auto px-2 py-1">
            {loading ? (
              <div className="flex justify-center">
                <svg
                  className="spin -ml-1 mr-3 h-5 w-5 align-middle text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx={12}
                    cy={12}
                    r={10}
                    stroke="currentColor"
                    strokeWidth={4}
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            ) : (
              <>
                {listData.length > 0 ? (
                  listData.map((item, index) => (
                    <a
                      href={`${item.prefix_path}${item.path}`}
                      key={item.id}
                      className={`${index !== listData.length - 1 ? 'mb-2' : ''} flex gap-[10px] rounded-md p-1 hover:bg-gray-100`}
                    >
                      <CustomImage
                        className="h-[45px] w-[45px] rounded-md object-cover"
                        alt={item.name}
                        src={item.image}
                      />
                      <p className="ml-2 !line-clamp-2 text-xs text-gray-600">{item.name}</p>
                    </a>
                  ))
                ) : (
                  <div className="flex items-center justify-center text-center">
                    <svg
                      className="mr-1 mt-1 h-4 w-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <h3 className="mt-[2px] text-sm text-gray-700">Không có dữ liệu</h3>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
