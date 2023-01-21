import React from 'react';
import GalleryModal from '../components/Gallery/GalleryModal';
import Gallery from '../components/Gallery/Gellery';
import Pagination from '../components/Pagination/Pagination';

// https://www.youtube.com/watch?v=KNEbqO-q1r8

const blog = () => {
    return (
        <div>
            <Gallery />
            <GalleryModal />
            <Pagination itemsPerPage={4} />
        </div>
    );
};

export default blog;