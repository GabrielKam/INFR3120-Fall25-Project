import { Routes } from '@angular/router';
import {Home} from "./pages/home/home"
import {Read} from "./pages/read/read"
import {Update} from "./pages/update/update"
import {Login} from "./pages/login/login"
import {Register} from "./pages/register/register"
export const routes: Routes = [
    {path:'',component:Home},
    {path:'home',component:Home},
    {path:'read',component:Read},
    {path:'update',component:Update},
    {path:'login',component:Login},
    {path:'register',component:Register}
];
