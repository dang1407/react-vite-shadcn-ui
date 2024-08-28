import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { Combobox } from "@/components/ui/combobox";
import { LoginController } from "./LoginController";
import { useState } from "react";
import logo from "@/assets/imgs/logo-1.png";
import { useTranslation } from 'react-i18next';

function Login(){
  const {loginAsync} = LoginController()
  const [loginData, setLoginData] = useState({UserName: "", Password: ""})
  const { t } = useTranslation();
  return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="rounded-xl shadow-xl p-4 w-full h-full md:w-[80%] md:h-[80%] flex flex-col gap-3 ">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" />
          </div>
          
          <div className="flex flex-col gap-1">
            <label htmlFor="username">{t("UserName")}</label>
            <Input placeholder="User name" id="username" onChange={(e) => setLoginData({...loginData, UserName: e.target.value})}/>
            <small ></small>
          </div>
          {/* <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <Input placeholder="Password" type="password" id="password" onChange={(e) => setLoginData({...loginData, Password: e.target.value})}/>
            <small ></small>
          </div> */}

          <div className="flex flex-col gap-1">
            <label htmlFor="password">{t("Password")}</label>
            <PasswordInput value={loginData.Password} onChange={(e) => setLoginData({...loginData, Password: e.target.value})}/>
            <small ></small>
          </div>
          <div className="flex justify-between">
            <div>
            <Button onClick={() => loginAsync(loginData)}>{t("Login")}</Button>
            </div>

            <div className="flex items-center">
              <a href="/register" className="link">{t("AlreadyHaveAnAccount")}</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;