import { useEffect } from 'react';

export const GiscusWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', 'yoopark/yoopark.github.io');
    script.setAttribute('data-repo-id', 'R_kgDOJluMaA');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOJluMaM4CW85G');
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('data-loading', 'lazy');
    document.body.appendChild(script);
  }, []);

  return <div className="giscus" />;
};
