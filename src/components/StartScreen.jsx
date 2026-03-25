import React from 'react';

function StartScreen({ onStart }) {
  return (
    <div className="screen start-screen">
      <div className="card">
        <h1 className="title">看護師のための<br/>起業準備クイズ</h1>
        <p className="subtitle">あなたの起業力をチェック！</p>
        
        <div className="description">
          <p>
            看護師が起業・独立を目指すために必要な知識を
            <strong>10問のクイズ形式</strong>で楽しく学べます。
          </p>
          <ul className="feature-list">
            <li>✅ 開業届や資金計画</li>
            <li>✅ マーケティングの基礎</li>
            <li>✅ 関連法規の注意点</li>
          </ul>
        </div>

        <button className="btn btn-primary btn-large glow-effect" onClick={onStart}>
          クイズを始める
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
