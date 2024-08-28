import * as LoginAPI from "./LoginAPI";

async function loginAsync(loginData : LoginAPI.LoginData){
  try {
    const response = await LoginAPI.loginRequest(loginData);
    const employees = await LoginAPI.getEmployee();
    console.log(employees);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error)
  }
}

export function LoginController(){
  return {
    loginAsync
  }
}
