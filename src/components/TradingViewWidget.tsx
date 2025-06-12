import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: 'OANDA:XAUUSD',
      width: '100%',
      height: '400',
      locale: 'en',
      colorTheme: 'dark',
      trendLineColor: '#37a6ef',
      underLineColor: 'rgba(55, 166, 239, 0.15)',
      isTransparent: false,
      autosize: true
    });
    const container = document.getElementById('tv-widget');
    if (container) {
      container.innerHTML = ''; // Clear previous in case hot reload
      container.appendChild(script);
    }
  }, []);

  return <div id="tv-widget" className="w-full h-[400px]"></div>;
};

export default TradingViewWidget;
