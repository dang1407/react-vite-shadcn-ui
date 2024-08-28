import { request } from "@/api";

export interface LoginData {
  UserName: string;
  Password: string;
}

// export async function login(data : LoginData){
//   try {
//     const response = await request({
//       url: "login",
//       method: "POST",
//       data
//     })
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function loginRequest (data: LoginData) {
  await request({
    url: "Authenticate/login",
    method: "POST",
    data
  })
}

export async function getEmployee () {
  await request({
    url: "Employees?page=1&pageSize=20",
    method: "GET",
  })
}



