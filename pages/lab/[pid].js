import { useRouter } from 'next/router'
import BlogContent from '../../components/blog/BlogContent'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <BlogContent />
}

export default Post;