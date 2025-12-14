import {optionsDropdownType} from "../props/tailwind/customDropDownProps";
import usaFlag from "@/assets/us_flag.jpg"
import iranFlag from "@/assets/Flag_of_Iran.svg.webp"
import profile from "@/assets/Profile.svg"
import Inbox from "@/assets/Inbox.svg"
import Setting from "@/assets/Setting.svg"
import Support from "@/assets/Support.svg"
import LockScreen from "@/assets/LockScreen.svg"
import LogOut from "@/assets/LogOut.svg"
import sun from "@/assets/Sun.svg"
import moon from "@/assets/Moon.svg"

export const options: optionsDropdownType[] = [
    { idOption: 1, title: 'English', icon: usaFlag, type: 'lang', value: 'en'},
    { idOption: 2, title: 'Persian', icon: iranFlag, type: 'lang', value: 'fa'}
]

export const userProfile: optionsDropdownType[] = [
    { idOption: 1, title: 'Profile', icon: profile },
    { idOption: 2, title: 'Inbox', icon: Inbox },
    { idOption: 3, title: 'Setting', icon: Setting },
    { idOption: 4, title: 'Support', icon: Support },
    { idOption: 5, title: 'Lockscreen', icon: LockScreen },
    {idOption: 6, title: 'Log Out', icon: LogOut }
]

export const theme: optionsDropdownType[] = [
    {idOption: 1, title: 'light', icon: sun, type: 'theme', value: 'light'},
    {idOption: 2, title: 'dark', icon: moon, type: 'theme', value: 'dark'},
]