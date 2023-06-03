import { PostItem } from './PostItem'

const POST_ITEM_DATA = {
  title: 'Gatsby로 블로그 만들기',
  date: '230115',
  link: 'https://yoopark.github.io',
}

export const PostList = () => {
  return (
    <div className="flex flex-col gap-6 max-w-screen-sm w-full m-auto">
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </div>
  )
}
