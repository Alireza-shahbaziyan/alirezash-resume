import { defineStore } from "pinia"

interface State {
  userList: NavbarItems[] 
  user: userInfo | null
}

export const useStore = defineStore('userId', {
  state: (): State => {
    return {
      userList: [
        { id: 0, name: "Home", link: "#" },
        { id: 1, name: "About Us", link: "#" },
        { id: 2, name: "Shop", link: "#" },
        { id: 3, name: "Protfollo", link: "#" },
        { id: 4, name: "Contact", link: "#" },
    ],
      user: {
        name:"Alireza",
        lastName:"Shahbaziyan",
        position:"front-end",
        age:21,
        about:"The responsibility of a front-end developer is to design and develop a responsive user interface for software"
      },
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
  lastName:string
  position:string
  age:number
  about:string
}