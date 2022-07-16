import React, { useState } from "react";

export const Context = React.createContext({});

export const MyContext = (props) => {

  const [repos, setRepos] = useState({name : '',})
  // para receber os repositórios que é enviado como object pela API
  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [company, setCompany] = useState("")
  const [login, setLogin] = useState("")
  const [blog, setBlog] = useState("")
  const [ttUser, setTtUser] = useState("")
  const [mail, setMail] = useState("")
  const [bio, setBio] = useState("")
  const [link, setLink] = useState("")
  
  return(
    <Context.Provider  value={{
      avatar, setAvatar,
      name, setName,
      repos, setRepos,
      location, setLocation,
      company, setCompany,
      login, setLogin,
      blog, setBlog,
      ttUser, setTtUser,
      mail, setMail,
      bio, setBio,
      link, setLink,
    }}
    >
      {props.children}
    </Context.Provider>
  )
};

export const UseMyContext = () => React.useContext(Context);