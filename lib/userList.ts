import clerkClient from "./clerkClient"

export const userList = async (user: any) => {
  const result = await clerkClient.users.getUserList({userId: [user.user_id]})
}
