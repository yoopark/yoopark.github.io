import { useEffect } from 'react';

// TODO: Secret은 아니지만 다른 사람이 fork해서 쓰면 문제가 되니까 숨기는 방법 찾기
const GISCUS_DATA_REPO_ID = 'R_kgDOJluMaA';
const GISCUS_DATA_CATEGORY_ID = 'DIC_kwDOJluMaM4CW9CO';

// Reference: https://github.com/junghyeonsu/junghyeonsu.dev/blob/main/src/components/Giscus.tsx
export const GiscusWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', 'yoopark/yoopark.github.io');
    script.setAttribute('data-repo-id', GISCUS_DATA_REPO_ID);
    script.setAttribute('data-category', 'Comments');
    script.setAttribute('data-category-id', GISCUS_DATA_CATEGORY_ID);
    script.setAttribute('data-mapping', 'og:title');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'ko');
    document.body.appendChild(script);
  }, []);

  return <div className="giscus" />;
};
