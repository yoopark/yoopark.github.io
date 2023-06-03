import type { PostType } from '@/types/PostItem';
import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';

const NUMBER_OF_ITEMS_PER_PAGE = 10;

const useInfiniteScroll = (selectedCategory: string, posts: PostType[]) => {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  const [count, setCount] = useState<number>(1);

  const postListByCategory = useMemo<PostType[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  );

  const observer = new IntersectionObserver((entries, observer) => {
    if (!entries[0].isIntersecting) return;

    setCount((value) => value + 1);
    observer.disconnect();
  });

  useEffect(() => setCount(1), [selectedCategory]);

  useEffect(() => console.log(count), [count]);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return;

    // 기준 : 마지막 요소의 50% 이상이 보이면 다음 페이지를 로드한다.
    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    );
  }, [count, selectedCategory]);

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  };
};

export default useInfiniteScroll;
