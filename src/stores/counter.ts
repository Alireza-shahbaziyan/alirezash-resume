import { defineStore } from "pinia"

interface State {
  userList: NavbarItems[]
  user: userInfo | null
}

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      userList: [
        { id: 0, name: "Home", link: "#" },
        { id: 1, name: "About Us", link: "#" },
        { id: 2, name: "Shop", link: "#" },
        { id: 3, name: "Protfollo", link: "#" },
        { id: 4, name: "Contact", link: "#" },
    ],
      user: null,
    }
  },
})

interface NavbarItems {
  id: number
  name: string
  link:string
}

interface userInfo{
  name:string
}