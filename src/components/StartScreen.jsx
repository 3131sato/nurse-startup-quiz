import React from 'react';

function StartScreen({ onStart }) {
  return (
    <div className="screen start-screen">
      <div className="card">
        <h1 className="title">看護師のための<br/>副業・在宅ワーク準備クイズ</h1>
        <p className="subtitle">あなたのフリーランス力をチェック！</p>
        
        <div className="description">
          <p>
            看護師が副業からフリーランスを目指すために必要な知識を
            <strong>10問のクイズ形式</strong>で楽しく学べます。
          </p>
          <ul className="feature-list">
            <li>✅ 副業の種類や始め方</li>
            <li>✅ マーケティング・商品作りの基礎</li>
            <li>✅ SNS用語やアルゴリズムの解説</li>
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
