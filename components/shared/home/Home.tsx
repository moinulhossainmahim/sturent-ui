'use client';

import { useState } from "react";
import Filters from "../filters";
import ListingHeader from "../listings/ListingHeader";
import ListingsGrid from "../listings/ListingsGrid";
import ListingsList from "../listings/ListingsList";

const Home = () => {
  const [layout, setLayout] = useState('grid');

  return (
    <div className="flex w-full pt-[2rem] gap-12 flex-col md:flex-row md:items-start items-center">
      <div className="w-[100%] sm:w-[80%] md:w-[35%] lg:w-[25%] p-6 h-full border-muted border rounded-lg shadow-xl">
        <Filters />
      </div>
      <div className="w-[100%] md:w-[65%] lg:w-[75%] flex flex-col">
        <ListingHeader layout={layout} setLayout={setLayout} />
        {layout === 'grid' ? (
          <ListingsGrid />
        ) : (
          <ListingsList />
        )}
      </div>
    </div>
  )
}

export default Home;
