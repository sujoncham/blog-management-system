import React from 'react';

const AdvisorVideo = ({setShow}) => {
    return (
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="px-4 py-1 text-right">
                        <button type="button" className="text-white text-2xl" onClick={()=>setShow(false)}><i className="fas fa-times"></i> x</button>
                    
                    </div>
                    <div className="p-1">
                    <iframe width="1000" height="550" src="https://www.youtube.com/embed/C379x7NRytY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                    </div>
                    
                </div>
            </div> 
        </div>
    );
};

export default AdvisorVideo;