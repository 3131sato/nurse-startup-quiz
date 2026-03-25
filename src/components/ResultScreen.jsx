import React from 'react';

function ResultScreen({ score, totalQuestions, onRestart }) {
  const LINE_URL = "https://utage-system.com/line/open/j1fUCKjho1rI";
  
  // Calculate percentage and determine message
  const percentage = Math.round((score / totalQuestions) * 100);
  let message = "";
  let subMessage = "";
  
  if (percentage === 100) {
    message = "パーフェクト！🎉";
    subMessage = "素晴らしい副業・在宅ワークリテラシーです！自信を持って進めましょう！";
  } else if (percentage >= 70) {
    if (score >= 9) {
      message = "素晴らしいリテラシーです！自信を持って副業をスタートさせましょう！";
      subMessage = "あなたの知識は十分です！";
    } else if (score >= 6) {
      message = "副業への準備がしっかりできています。あと一息ですね！";
      subMessage = "重要なポイントをもう一度確認してみましょう！";
    } else {
      message = "伸びしろたっぷり！🌱";
      subMessage = "これから副業や在宅ワークについてしっかり学んでいきましょう！";
    }
  } else if (percentage >= 40) {
    message = "惜しい！💪";
    subMessage = "基礎知識はあります。重要なポイントをもう一度復習してみましょう！";
  } else {
    message = "伸びしろたっぷり！🌱";
    subMessage = "これから副業や在宅ワークについてしっかり学んでいきましょう！";
  }

  // SNS Share functions
  const shareOnThreads = () => {
    const text = encodeURIComponent(`看護師のための副業・在宅ワーク準備クイズで ${score}/10点 でした！\n\n${message}\n\nあなたの副業力をチェック👇\nhttps://nurse-startup-quiz.vercel.app\n#看護師副業 #在宅ワーク #フリーランス`);
    window.open(`https://www.threads.net/intent/post?text=${text}`, '_blank');
  };

  const shareOnLine = () => {
    const lineText = encodeURIComponent(`看護師のための副業・在宅ワーク準備クイズで ${score}/10点 でした！\n\n${message}\n\nあなたの副業力をチェック👇\nhttps://nurse-startup-quiz.vercel.app`);
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent("https://nurse-startup-quiz.vercel.app")}&text=${lineText}`, '_blank');
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
            <button className="btn btn-x" onClick={shareOnThreads}>Threads でシェア</button>
            <button className="btn btn-line-share" onClick={shareOnLine}>LINE でシェア</button>
          </div>
        </div>

        <div className="conversion-section">
          <h4 className="conversion-title">さらに詳しく学びたい方へ</h4>
          <p className="conversion-text">
            副業に向けた具体的なステップや役立つ情報を配信中！<br/>
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
