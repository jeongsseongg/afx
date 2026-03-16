import React from 'react';

function App() {
  const address = "서울특별시 종로구 창경궁로 109";
  const mapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(address)}`;

  return (
    <div className="App">
      <header>
        <h1>워치딜 - 명품시계 매입 전문</h1>
      </header>
      
      <main>
        {/* 서비스 소개 등을 여기에 추가할 수 있습니다. */}
      </main>

      <footer style={{ marginTop: '50px', padding: '20px', borderTop: '1px solid #eee' }}>
        <section className="location">
          <h2>찾아오는 길</h2>
          <p><strong>주소:</strong> {address}</p>
          <div style={{ margin: '15px 0' }}>
            <a 
              href={mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#03C75A',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              네이버 지도로 보기
            </a>
          </div>
          <p style={{ color: '#666', fontSize: '0.9em' }}>
            종로 세운스퀘어 1층 혹은 인근에 위치해 있습니다. (방문 전 전화 예약 필수)
          </p>
        </section>
      </footer>
    </div>
  );
}

export default App;
