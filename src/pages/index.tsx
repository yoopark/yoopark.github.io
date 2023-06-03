import { Footer } from '@/components/Common/Footer'
import { CategoryList } from '@/components/Main/CategoryList'
import { Introduction } from '@/components/Main/Introduction'
import { PostList } from '@/components/Main/PostList'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const IndexPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </div>
  )
}

export default IndexPage
