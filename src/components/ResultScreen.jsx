import React from 'react';

function ResultScreen({ score, totalQuestions, onRestart }) {
  const LINE_URL = "https://utage-system.com/line/open/j1fUCKjho1rI";
  
  // Calculate percentage and determine message
  const percentage = Math.round((score / totalQuestions) * 100);
  let message = "";
  let subMessage = "";
  
  if (percentage === 100) {
    message = "パーフェクト！🎉";
    subMessage = "素晴らしい起業リテラシーです！自信を持って進めましょう！";
  } else if (percentage >= 70) {
    message = "素晴らしい！🌟";
    subMessage = "起業への準備がしっかりできています。あと一息ですね！";
  } else if (percentage >= 40) {
    message = "惜しい！💪";
    subMessage = "基礎知識はあります。重要なポイントをもう一度復習してみましょう！";
  } else {
    message = "伸びしろたっぷり！🌱";
    subMessage = "これから起業についてしっかり学んでいきましょう！";
  }

  // SNS Share functions
  const shareOnX = () => {
    const text = encodeURIComponent(`看護師のための起業準備クイズで【${score}/${totalQuestions}点】でした！\n${message}\n\nあなたの起業力をチェック👇\n`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const shareOnLine = () => {
    const text = encodeURIComponent(`看護師のための起業準備クイズで【${score}/${totalQuestions}点】でした！あなたの起業力をチェック👇\n`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank');
  };

  return (
    <div className="screen result-screen">
      <div className="card result-card">
        <h2 className="title">クイズ結果</h2>
        
        <div className="score-ring">
          <div className="score-text">
            <span className="current-score">{score}</span>
            <span className="total-score">/ {totalQuestions}</span>
            <span className="unit">点</span>
          </div>
        </div>

        <h3 className="result-message">{message}</h3>
        <p className="result-submessage">{subMessage}</p>

        <div className="share-section">
          <p className="share-text">結果をシェアする</p>
          <div className="share-buttons">
            <button className="btn btn-x" onClick={shareOnX}>𝕏 でシェア</button>
            <button className="btn btn-line-share" onClick={shareOnLine}>LINE でシェア</button>
          </div>
        </div>

        <div className="conversion-section">
          <h4 className="conversion-title">さらに詳しく学びたい方へ</h4>
          <p className="conversion-text">
            起業に向けた具体的なステップや役立つ情報を配信中！<br/>
            ぜひ公式LINEにご登録ください。
          </p>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line-official glow-effect">
            友だち追加して情報を受け取る
          </a>
        </div>

        <button className="btn btn-outline" onClick={onRestart}>
          もう一度挑戦する
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;
