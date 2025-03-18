/* eslint-disable @typescript-eslint/no-unused-vars */
import { currentUser } from '../components/UserList.vue'
import type { Post } from './user-posts'
import { getOne } from './user.ts'

function makeFeed(): Post[] {
  const friendsList = currentUser.value?.friendsIds
  const content: Post[] = []
  if (friendsList) {
    friendsList.forEach((id) => {
      const friend = getOne(id)
      if (friend.posts) {
        content.concat(friend.posts)
      }
    })
  }
  if (currentUser.value?.posts) {
    content.concat(currentUser.value?.posts)
  }
  ;(content as Post[]).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  return content
}
