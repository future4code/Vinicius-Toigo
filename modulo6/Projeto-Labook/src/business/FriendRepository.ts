import { Friend, Friends } from "../model/Friend"

export interface FriendRepository {
    beFriend(friend: Friend) :Promise <void>
    selectAllFriends(friend: Friends) :Promise<Friends>
    getFeedFriends(sort: string, order: string, makeFriendship: string) :Promise<Friend[]>
    dontFriendsUser (user: string, makeFriendship: string) :Promise <void>
}