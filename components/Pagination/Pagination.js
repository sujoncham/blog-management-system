import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import data from '../../alldata/images.json';

const items = [...Array(20).keys()];

function Items({ currentItems }) {
  return (
    <div className="container mx-auto px-5">
        <h1 className="text-5xl font-bold">Pagination</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 py-3">
        {currentItems && currentItems.map((item, index) => (
        <div key={index}>
            <h3>Item #{item}</h3>
           
        <Image
          src={item.img}
          alt={item.text}
          width={250}
          height={250}
          onClick={() => handleClick(item, index)}
        />
        </div>
        ))}
      </div>
      </div>
  );
}

export default function Pagination({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(data[0]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="flex justify-start gap-5"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
