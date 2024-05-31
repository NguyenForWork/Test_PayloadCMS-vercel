// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import RenderBlocks from './RenderBlocks';

const PreviewPage = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.cmsLivePreviewData) {
        setPage(event.data.cmsLivePreviewData);
      }
    };

    // Lắng nghe các thông điệp từ plugin visualEditor
    window.addEventListener('message', handleMessage);

    // Xóa lắng nghe khi component unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Gửi thông điệp "ready" khi component được render
  useEffect(() => {
    window.parent.postMessage('ready', '*');
  }, []);

  return (
    <div>
      {page && (
        <div>
          <header>
            <h1>{page.title}</h1>
          </header>
          <main>
            <RenderBlocks blocks={page.content} /> {/* Sử dụng RenderBlocks để render nội dung */}
          </main>
        </div>
      )}
    </div>
  );
};

export default PreviewPage;
