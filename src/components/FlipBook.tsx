// 'use client';

// import React, { forwardRef, useEffect, useRef, useState } from 'react';
// import HTMLFlipBook from 'react-pageflip';

// export interface FlipPageData {
//   id: number;
//   content: string;
// }

// interface FlipBookProps {
//   pages: FlipPageData[];
//   scalePercent: number; // 50 - 200
//   onFlip?: (pageIndex: number) => void;
// }

// const FlipBook = forwardRef<unknown, FlipBookProps>(({ pages, scalePercent, onFlip }, ref) => {
//   const wrapperRef = useRef<HTMLDivElement | null>(null);
//   const [dims, setDims] = useState({ w: 1200, h: 800 });

//   useEffect(() => {
//     const update = () => {
//       const el = wrapperRef.current;
//       if (!el) return;
//       const padding = 8; // tighter padding to maximize usable area
//       const availW = Math.max(600, el.clientWidth - padding * 2);
//       const availH = Math.max(420, el.clientHeight - padding * 2);
//       const aspect = 960 / 620; // base aspect ratio of book (landscape spread)
//       const scale = Math.max(0.5, Math.min(2, scalePercent / 100));
//       // Fit within container while keeping aspect
//       let width = Math.min(availW, availH * aspect) * scale;
//       width = Math.min(width, 1600);
//       const height = Math.round(width / aspect);
//       setDims({ w: Math.round(width), h: Math.round(height) });
//     };
//     update();
//     const ro = new ResizeObserver(update);
//     if (wrapperRef.current) ro.observe(wrapperRef.current);
//     return () => ro.disconnect();
//   }, [scalePercent]);

//   return (
//     <div ref={wrapperRef} className="relative w-full h-full">
//       {/* Center seam shadow */}
//       <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-24 bg-gradient-to-r from-black/10 via-transparent to-black/10 opacity-40 z-10" />

//       <HTMLFlipBook
//         ref={ref}
//         width={dims.w}
//         height={dims.h}
//         size="fixed"
//         minWidth={700}
//         maxWidth={1600}
//         minHeight={500}
//         maxHeight={1200}
//         maxShadowOpacity={0.5}
//         mobileScrollSupport
//         showCover={false}
//         drawShadow
//         className="rounded-2xl shadow-2xl overflow-hidden bg-neutral-200"
//         onFlip={(e: { data: number }) => onFlip?.(e.data)}
//         flippingTime={700}
//       >
//         {pages.map((page, index) => {
//           const isLeft = index % 2 === 0;
//           return (
//             <div key={page.id} className="relative bg-[#fcfcfc]">
//               {/* Paper texture and edge shading */}
//               <div className={`pointer-events-none absolute inset-y-0 ${
//                 isLeft ? 'left-0 w-12 bg-gradient-to-r from-black/10 to-transparent' : 'right-0 w-12 bg-gradient-to-l from-black/10 to-transparent'
//               }`} />

//               {/* Header */}
//               <div className="absolute top-6 left-10 right-10 flex items-center justify-between text-gray-400 text-xs tracking-wide">
//                 <span>Evnation Manual</span>
//                 <span className="opacity-60">{isLeft ? 'Guide' : 'Documentation'}</span>
//               </div>

//               {/* Content */}
//               <div className="px-12 py-16">
//                 <div className="prose prose-lg max-w-none">
//                   <div dangerouslySetInnerHTML={{ __html: page.content }} />
//                 </div>
//               </div>

//               {/* Footer with page number */}
//               <div className="absolute bottom-6 left-0 right-0 flex justify-center text-gray-400 text-xs">
//                 <span>{index + 1}</span>
//               </div>
//             </div>
//           );
//         })}
//       </HTMLFlipBook>
//     </div>
//   );
// });

// FlipBook.displayName = 'FlipBook';

// export default FlipBook;

// Temporary placeholder component
export interface FlipPageData {
  id: number;
  content: string;
}

interface FlipBookProps {
  pages: FlipPageData[];
  scalePercent: number;
  onFlip?: (pageIndex: number) => void;
}

const FlipBook = ({ pages }: FlipBookProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">FlipBook Component</h3>
        <p className="text-gray-500">This component is temporarily disabled for build compatibility.</p>
        <p className="text-sm text-gray-400 mt-1">{pages.length} pages available</p>
      </div>
    </div>
  );
};

export default FlipBook;


